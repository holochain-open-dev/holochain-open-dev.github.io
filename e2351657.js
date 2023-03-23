import"./0d790cd0.js";import{$ as t}from"./b3b2146f.js";
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
</wc-mermaid>`,s=document,c=[{key:"HtmlStory0",story:o}];let u=!1;for(const t of c){const e=s.querySelector(`[mdjs-story-name="${t.key}"]`);e&&(e.story=t.story,e.key=t.key,u=!0,Object.assign(e,{}))}u&&(customElements.get("mdjs-preview")||import("./0d790cd0.js").then((function(t){return t.a})),customElements.get("mdjs-story")||import("./0d790cd0.js").then((function(t){return t.d})));export{o as HtmlStory0};