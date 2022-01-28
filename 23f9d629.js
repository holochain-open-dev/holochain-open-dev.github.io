import"./0d790cd0.js";import{$ as e}from"./b3b2146f.js";const t=()=>e`<wc-mermaid>
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
</wc-mermaid>`,o=document,r=[{key:"HtmlStory0",story:t}];let s=!1;for(const e of r){const t=o.querySelector(`[mdjs-story-name="${e.key}"]`);t&&(t.story=e.story,t.key=e.key,s=!0,Object.assign(t,{}))}s&&(customElements.get("mdjs-preview")||import("./0d790cd0.js").then((function(e){return e.a})),customElements.get("mdjs-story")||import("./0d790cd0.js").then((function(e){return e.d})));export{t as HtmlStory0};
