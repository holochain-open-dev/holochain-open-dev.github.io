# Frontend >> Using a UI Module ||10

Each frontend module is packaged as an NPM package and has (at least) these exports: types, services, stores, elements and its context.

All of these exports are designed so that you can import and use whatever makes more sense for your use case. Pick carefully the layer at which you import the objects.

> All the examples here use the `@holochain-open-dev/profiles` module, but any other module that follows this pattern will basically have the same kind of exports available for you to use.

## Types

These are typescript types that replicate the rust structs and types used by the zome at the backend layer.

Its usage is very straightforward:

```ts
import { AgentProfile, SearchAgentInput } from "@holochain-open-dev/profiles";
```

## Services

A service is a typescript class that wraps the `AppWebsocket` from `@holochain/client` and exposes the function calls that are available in the zome.

## Stores

A store is a typescript class that maintains the shared state for the elements exported by this module. This shared state is crucial in order to have cool optimizations, like skipping zome calls because we already have the necessary information, or updating all the elements at once reacting to a signal that came from the zome.

After exploring different state management alternatives, like `redux` or `mobx`, we settled on svelte's stores as the base engine to build the stores.

Svelte's stores are actually a really simple and framework agnostic state management layer. They expose a simple `.subscribe()` method that can be plugged into an element to get automatic updates and rerenders when the underlying data changes. You can read more about them [here](https://svelte.dev/tutorial/writable-stores).

This is a sample of using the `ProfilesStore` without any UI framework:

```ts
import { ProfilesStore } from "@holochain-open-dev/profiles";

const cellClient = createClient();

const config = {
  zomeName: 'custom_profiles'
};

const store = new ProfilesStore(cellClient, config);

store.knownProfiles.subscribe((allProfiles) => console.log(allProfiles));

await store.fetchAllProfiles();
```

The store constructor usually accepts a [cellClient object](https://www.npmjs.com/package/@holochain-open-dev/cell-client) that allows for usage of the module in both native Holochain and Holo contexts. It can also accept module wide configuration, that will be read by any of the components of the module and may affect their behaviour.

## Elements

All the elements exported by the frontend modules are [Custom Elements](https://developers.google.com/web/fundamentals/web-components/customelements), which means that they can be used in any UI framework because the browser itself can handle them. This means that you can use your favourite framework or web-based tooling, and still import and use the elements from the modules.

The modules are really careful to be application agnostic: they don't define any routes, or global CSS, or use any globally defined objects. This means that you'll be able to import them without interfering with the rest of your application.

Most elements are built using [lit](https://lit.dev) and follow the [open-wc pattern](https://open-wc.org). But any other technology that exports Custom Elements will work just fine.

See how to integrate the elements in each frontend framework [here](./frameworks.md).

### Scoped Elements

The only problem with Custom Elements as of now is that they are defined in a global `CustomElementsRegistry`, which means that if two different modules define a `<custom-input></custom-input>` element, their names will clash and this will break the whole application.

To avoid this, the frontend modules don't automatically define the elements just by importing them. Rather, you can import the elements in two ways, depending on what you need:

- If you are building a full blown SPA, you can safely define the element globally like this:

```js
// This does define the ListProfiles element in the global CustomElementsRegsitry
import "@holochain-open-dev/profiles/list-profiles";
```

- If you are developing a reusable module yourself and don't want to define the element globally, you can use the scoped-elements pattern:

```js
// This doesn't define the ListProfiles element in the global CustomElementsRegsitry
import { ListProfiles } from "@holochain-open-dev/profiles";

// and then use it in a scoped element like this:
import { ScopedElementsMixin } from "@open-wc/scoped-elements";
import { LitElement } from "lit";
class ProfilesTest extends ScopedElementsMixin(LitElement) {
  static get scopedElements() {
    return {
      "list-profiles": ListProfiles,
    };
  }
}
```

You can read more about the reasoning behind scoped elements [here](https://open-wc.org/docs/development/scoped-elements/#development-scoped-elements).

## Context

As our elements are not just presentational, but hey also make calls to the backend by themselves via the store, we need a way to define and configure the store outside the elements, and then pass it down to the elements so that they can use it. Inspired by other frontend frameworks (React or Svelte), we use the context pattern as a way to inject the stores to the elements themselves.

In summary, the context pattern consists of defining a `<context-provider>` element that contains the store object, and that must be wrapping all the elements that need the store. When each element starts, it fires an event which gets captured by the closest `<context-provider>`, and it injects the store to the requesting element.

Each module exports a context object, **that must be passed as the context** property in the `<context-provider>` element. This is the context that the elements exported by the modules are requesting,

To define the `<context-provider>` element you can just import it:

```js
// This can be placed in the index.js, at the top level of your web-app.
import "@holochain-open-dev/context/context-provider";
```

And then in your html:

```html
<context-provider .context="${profilesStoreContext}" .store="${profilesStore}">
  <list-profiles></list-profiles>
  <search-agent></search-agent>
</context-provider>
```

> Here, every framework has a different style of passing a property down to the component, but they all will work fine. See [Integration with Frameworks](./frameworks.md) for examples of integrations in each of the frontend frameworks.

As you may have guessed, context providers can be nested inside each other, to provide multiple contexts to elements that could need them:

```html
<context-provider .context="${profilesStoreContext}" .store="${profilesStore}">
  <context-provider .context="${someOtherContext}" .store="${someOtherStore}">
    <list-profiles></list-profiles>
    <some-other-element></some-other-element>
  </context-provider>
</context-provider>
```

Go [here](https://www.npmjs.com/package/@holochain-open-dev/context) to read more about the library we use. This library is just a port of [@lit-labs/context](), that's being finished and will be published soon. When that happens, we'll most likely switch to that stable and widely used library.

**If you only need one component**, you don't have to use the context pattern at all. You can just pass the store as a property to that component directly:

```html
<list-profiles .store="${profilesStore}"></list-profiles>
```