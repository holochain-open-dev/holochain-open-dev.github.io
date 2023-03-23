# Introduction >> Architecture ||20

In a general sense, this is what the architecture of each module looks like:

```js script
import "@mdjs/mdjs-story/define";
import "@mdjs/mdjs-preview/define";
import "wc-mermaid/wc-mermaid";

import { html } from "@mdjs/mdjs-story";
```

```html story
<wc-mermaid>
  flowchart BT

  subgraph frontend 
    Store
    subgraph view
      Element1
      Element2
    end


    Element1-->|subscribes|Store
    Element2-->|subscribes|Store
    Element2-->|requestAction|Client
    Store-.->|update|Element1
    Store-.->|update|Element2
    Store-->|fetchData|Client
    Client
  end

  subgraph backend
    Zome
    Zome-->|signal|Store
    Client-->|callsZomeFn|Zome
  end
</wc-mermaid>
```


- [Clients](../../frontend/using/#clients): typescript wrapper classes around all the zome functions that a zome exposes.
- [Stores](../../frontend/using/#stores): maintain backend state synched and always up-to-date for any element to subscribe to it.
- [Elements](../../frontend/using/#elements): custom elements that are reusable in any framework, they export common UI interfaces to the zome's domain data.

In the following sections there are detailed explanations about each of the components of the architecture, their technology stack and how to use them.