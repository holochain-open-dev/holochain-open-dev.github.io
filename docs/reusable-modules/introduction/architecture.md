# Introduction >> Architecture ||20

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
