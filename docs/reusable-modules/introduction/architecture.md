# Introduction >> Architecture ||20

In a general sense, this is what the architecture of each of the modules looks like:

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
    subgraph view
      Element1
      Element2
    end

    Element1-->|requestsAction|Store
    Store-->|updates|Element1
    Element2-->|requestsAction|Store
    Store-->|updates|Element2
    Store-->|executesAction|Service
  end

  subgraph backend
    Service-->|callsZomeFn|Zome
    Zome-->|signals|Store
  end
</wc-mermaid>
```


In the following sections there are detailed explanations about each of the components of the architecture, their technology stack and how to use them.