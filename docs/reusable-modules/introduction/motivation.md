# Introduction >> Motivation ||10

We love Holochain, its community and the way peer-to-peer technologies enable new patterns of social organization.

A lot of folks in the Holochain community have had a shared vision for some time. It goes a bit like this:

---

_Imagine a world in which data is not stored in isolated siloes, but rather in decentralized networks, that each agent joins based in the context they are in and participates fully in the network. This means that, for example, the calendar events a particular agent cares about are actually spread not only in one source of data, but distributed in the many different networks they are participating in._

_If data is not owned by some company in some server, we could start building ways to consume that data that adapt to the context of the agent itself. This could be a web-UI fetching data from multiple networks to build the unique calendar events for each person, or a personalized dashboard of the things that are most important to them, aggregated using custom visualization charts._

_For this to work, we need to develop smart and reusable building-blocks that can adapt to those many (many!) different contexts._

_Oh oh! We could even think of collections of downloadable UI widgets that can read the **same data** and render it differently. Maybe each widget has a different theme, or they put emphasis on different perspectives (personal, relationship with others, relationship to the whole). What else could we do? So exciting!_

---

> Projects that share at least part of this vision include [Neighborhoods](https://neighbourhoods.network/), [hREA](https://github.com/holo-rea/holo-rea), [Generative Objects](https://www.youtube.com/watch?v=6ZiUekVAg3A), [Ceptr](https://www.youtube.com/watch?v=3Db-8lD1lNA&t=2392s), and many others (hi all to the amazing folks from the Holochain community :) ).

We think one of the first steps we can take towards this vision is starting to develop a set of generic and reusable building-blocks that can be included in any Holochain application. This means trying to assume as little as possible about the consuming application, and have a carefully designed distribution of responsabilities between the modules so that they can be combined with each other as needed in differnt contexts and use cases. Each module consists of at least a backend zome (or similar), and a UI package.

Converging towards that vision, there is a very pragmatic reason to follow this pattern of development: it is hard to develop software! If we can reuse full modules that have been developed already by others in the Holochain community, we can speed up the process of creating a new hApp enourmously, building on top of the shoulders of giants.

With the emergence of [Custom Elements](https://developers.google.com/web/fundamentals/web-components/customelements) as a new standard for developing components that work everywhere, we see an opportunity to start developing web-based frontend modules that work anywhere. These elements can even be downloaded at runtime, instantiated and rendered in the webpage directly, which enables dynamic UIs that fetch the widgets depending on the preferences of the users themselves, rather than having to go back to the SPA code and build it again.
