import"./0d790cd0.js";import{$ as t}from"./b3b2146f.js";
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
</wc-mermaid>`,s=document,c=[{key:"HtmlStory0",story:o}];let u=!1;for(const t of c){const e=s.querySelector(`[mdjs-story-name="${t.key}"]`);e&&(e.story=t.story,e.key=t.key,u=!0,Object.assign(e,{}))}u&&(customElements.get("mdjs-preview")||import("./0d790cd0.js").then((function(t){return t.a})),customElements.get("mdjs-story")||import("./0d790cd0.js").then((function(t){return t.d})));export{o as HtmlStory0};