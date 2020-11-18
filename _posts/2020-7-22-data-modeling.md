# Data modeling in Holochain

When transitioning from the traditional data models (such as SQL or NoSQL like document-based or time-series databases) to the Holochain data model there are three main aspects that make it different:

1. eventual consistency
  * there's no guarantee on the order of events in which node would be receiving updates from it's peers during data propagation in the network.
  * therefore for node to be able to reconstruct the right order of events all actions have to be idempotent
2. content addressable store
  * address of a particular data entry depends on it's contents
  * change of contents leads to change of address
3. Distributed Hash Table (DHT) as data storage
  * if you know contents of the entry, you're able to perform a quick lookup as compared to location-based storage model. To do that you calculate the hash of the contents and then try to retrieve an entry using this hash as address in DHT. If this operation is successful, entry exists.
  * unlike location-based storage lookup, DHT lookup has a [constant time complexity](https://en.wikipedia.org/wiki/Time_complexity#Constant_time).

In this article we'll discuss how to model consistent and resilient data schemes for an application considering the different use-cases.

## immutable entries

The easiest scenario would be the immutable data entries. For example, Like entry that user can give to a twitter post is an immutable entry. It can only be created or deleted and there isn't any modification for it that would make sense.
Not having to deal with modifications greatly simplifies the data modeling because you can just create/delete entry without creating any additional structures.

#### create workflow

- create an entry by calling [hdk::commit_entry](https://docs.rs/hdk/0.0.49-alpha1/hdk/api/fn.commit_entry.html)
- if needed, create links to/from this entry by calling [hdk::link_entries](https://docs.rs/hdk/0.0.49-alpha1/hdk/api/fn.link_entries.html)

#### delete workflow

- mark an entry as deleted by calling [hdk::remove_entry](https://docs.rs/hdk/0.0.49-alpha1/hdk/api/fn.remove_entry.html)
- if needed, remove links for this entry by calling [hdk::remove_link](https://docs.rs/hdk/0.0.49-alpha1/hdk/api/fn.remove_link.html)

## mutable entries

With mutable entries we have the necessity to manage their modifications and this becomes a challenging task because:

1. [hdk::update_entry](https://docs.rs/hdk/0.0.49-alpha1/hdk/api/fn.update_entry.html) expects to receive n address of the entry that we're updating
2. for actions to be idempotent, every update has to be based on the latest entry's address (so we can't have two updates applied for the same address)

For example, suppose we have created an entry with an address A. When we want to update it we call [hdk::update_entry](https://docs.rs/hdk/0.0.49-alpha1/hdk/api/fn.update_entry.html) with address A and get a new address B as a result. Now if we want to update entry again (to get address C) we can't call [hdk::update_entry](https://docs.rs/hdk/0.0.49-alpha1/hdk/api/fn.update_entry.html) with address A because that would mean there will be two events: update A -> B and update A -> C, and node that receives these updates wouldn't know which one comes first. So instead, we need to call second update on address B which would give us the event sequence: A -> B, B -> C. This way, even if node receives it as B -> C, A -> B it will be able to reconstruct the right sequence.

## entry anchor pattern

To handle these kinds of problems there has emerged the entry design pattern that creates a special anchor entry to maintain a constant address for references and implements it's own mechanism for idempotent updates. Therefore we introduce two terms here:

- **anchor entry**: a constant entry which address is used for referencing and any link creation. Using an SQL analogy, anchor entry serves as an ID of the row in an SQL table.
- **data entry**: updatable entry that stores latest data. It is always accessed through the anchor and it's address is an internal detail not exposed to any other entries. Using an SQL analogy, data entry serves as contents of the same row an SQL table.

There are 2 versions of this pattern that we're going to discuss here and both of them share some common features:
1. anchor is created during run-time based on input for entry creation.
2. anchor for each separate instance of an entry has to be unique
  - This allows us to ensure we don't represent different entries by the same anchor.
  - Uniqueness is achieved by saving some (or all) of the entry's fields into anchor. It does lead to some redundancy in our memory usage, so only fields that are necessary for ensuring uniqueness should be added.
  - For example, when implementing a twitter post with the anchor pattern, we want to make sure that each post has it's own anchor and that we don't have different posts respresented by the same anchor. So we can save author's address, timestamp and hash of twitter's post body into anchor. Probability that the same agent would create the same post with the same timestamp is low enough in this case.
3. latest data entry is explicitly linked to the anchor entry. In the ideal scenario where data integrity isn't broken, anchor entry has a single link pointing to the latest data entry. Links to previous data entries are deleted during the data entry update.
4. when updating the data entry, we use [hdk::update_entry](https://docs.rs/hdk/0.0.49-alpha1/hdk/api/fn.update_entry.html) to maintant metadata connection between data entries (even though we could've just made used [hdk::commit_entry](https://docs.rs/hdk/0.0.49-alpha1/hdk/api/fn.commit_entry.html)). This gives us a fallback in case links from anchor to data entry are broken: all data entries are connected by metadata and are seen by the hdk as different versions of the same entry. Whereas with [hdk::commit_entry](https://docs.rs/hdk/0.0.49-alpha1/hdk/api/fn.commit_entry.html) we would just be dealing with a bunch of separate (from hdk's perspective) entries and would have to think of other ways to restore data integrity when anchor -> data entry link is broken.

Now let's discuss two different versions of this pattern that help to work with different use cases.

### anchor-first pattern

#### use case

Anchor-first pattern is best suited for modifiable entries that don't have different versions by design. For example, a twitter post only has a single version by design and users don't interact with multiple equally valid versions of the same post.

#### struture

It's called like this because anchor entry is created first and then data entry is created second. Such order of events allows us to save anchor's address into the data entry (thus making an implicit link from data entry to anchor entry) and have it ready whenever we want to make any request when working with the data entry.
For example, when returning twitter's post data entry contents to UI, user could request an update on the post which they're already viewing, and since anchor address is a part of post's fields, it's already known which address should be used for an update request. No additional lookups needed!

**Anchor entry is never allowed to change** and it's validation rules have to forbid any modification. It can only be created when first creating new instance of an entry and then deleted when deleting the entire instance of an entry.

#### create workflow

1. create an anchor entry by calling [hdk::commit_entry](https://docs.rs/hdk/0.0.49-alpha1/hdk/api/fn.commit_entry.html). You'll get it's address as a return value.
2. save anchor's address into a data entry's struct and then commit it to DHT by calling [hdk::commit_entry](https://docs.rs/hdk/0.0.49-alpha1/hdk/api/fn.commit_entry.html). You'll get it's address as a return value.
3. create an explicit link from anchor entry to the data entry by calling [hdk::link_entries](https://docs.rs/hdk/0.0.49-alpha1/hdk/api/fn.link_entries.html). You already have both of their addresses at this point.
4. return anchor entry's address from your method to be used for any references.

#### update workflow

1. get latest data entry by following link from anchor to data entry obtained from [get_links](https://docs.rs/hdk/0.0.49-alpha1/hdk/api/fn.get_links.html).
2. update the data entry by calling [update_entry](https://docs.rs/hdk/0.0.49-alpha1/hdk/api/fn.update_entry.html)
3. remove link from anchor entry to the old version of a data entry by calling [hdk::remove_link](https://docs.rs/hdk/0.0.49-alpha1/hdk/api/fn.remove_link.html)
4. (optionally) return anchor's entry address to have your update method be consistent with hdk API (which returns address of an entry after update). This is optional because anchor's address would stay the same, but might make it easier to work with your API.

#### delete workflow

1. delete anchor entry by calling [hdk::remove_entry](https://docs.rs/hdk/0.0.49-alpha1/hdk/api/fn.remove_entry.html).
2. if needed, remove links _to or from other entries_ related to anchor entry by calling [hdk::remove_link](https://docs.rs/hdk/0.0.49-alpha1/hdk/api/fn.remove_link.html). Note that you don't have to remove link from anchor entry to data entry or the data entry itself! This is because without anchor your data entry wouldn't be available. And since data is never actually deleted in Holochain (and instead a "deleted" metadata is created) you avoid running additional calls and using additional memory on creation of this metadata.

If you want to see the code with real example, check out the [devcamp7](https://github.com/holochain-devcamp/devcamp7-leap) LeaP implementation for the anchor-first pattern!

### data-first pattern

#### use case

Modifiable entries that can have multiple versions by design. For example, there could be multiple git branches based on the same branch.

#### structure

Data entry is created first and then it's address is stored inside the anchor entry which is created second (thus creating an implicit link from anchor to data entry). This ensures that anchor is unique for each of the multiple entry versions that can exist at the same time.

There is still explicit link from anchor to data entry to allow us find the latest data entry knowing it's anchor.

With this type of pattern **anchor can be changed in a limited way** allowing to create multiple versions of the same entry where each version has it's own anchor. Validation rules for the anchor have to ensure that only implicit link from anchor to data entry is changed when anchor entry is updated.

#### create workflow

1. create a data entry by calling [hdk::commit_entry](https://docs.rs/hdk/0.0.49-alpha1/hdk/api/fn.commit_entry.html). You'll get it's address as a return value.
2. save data entry's address into an anchor's struct and then commit it to DHT by calling [hdk::commit_entry](https://docs.rs/hdk/0.0.49-alpha1/hdk/api/fn.commit_entry.html). You'll get it's address as a return value.
3. create an explicit link from anchor entry to the data entry by calling [hdk::link_entries](https://docs.rs/hdk/0.0.49-alpha1/hdk/api/fn.link_entries.html). You already have both of their addresses at this point.
4. return anchor entry's address from your method to be used for any references.

#### update workflow

1. get latest data entry by following an explicit link from anchor to data entry obtained from [get_links](https://docs.rs/hdk/0.0.49-alpha1/hdk/api/fn.get_links.html). Note that implicit link isn't usable for this because it won't be changed and it will be always pointing to the first data entry version.
2. update the data entry by calling [update_entry](https://docs.rs/hdk/0.0.49-alpha1/hdk/api/fn.update_entry.html)
3. remove link from anchor entry to the old version of a data entry by calling [hdk::remove_link](https://docs.rs/hdk/0.0.49-alpha1/hdk/api/fn.remove_link.html)
4. (optionally) return anchor's entry address to have your update method be consistent with hdk API (which returns address of an entry after update). This is optional because anchor's address would stay the same, but might make it easier to work with your API.

#### delete workflow

1. delete anchor entry by calling [hdk::remove_entry](https://docs.rs/hdk/0.0.49-alpha1/hdk/api/fn.remove_entry.html).
2. if needed, remove links _to or from other entries_ related to anchor entry by calling [hdk::remove_link](https://docs.rs/hdk/0.0.49-alpha1/hdk/api/fn.remove_link.html). Note that you don't have to remove link from anchor entry to data entry or the data entry itself! This is because without anchor your data entry wouldn't be available. And since data is never actually deleted in Holochain (and instead a "deleted" metadata is created) you avoid running additional calls and using additional memory on creation of this metadata.
