import"./0d790cd0.js";import{$ as e}from"./b3b2146f.js";const{mermaid:{mermaidAPI:t}}=window;class r extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.__renderGraph=this.__renderGraph.bind(this),t.initialize({logLevel:"none",startOnLoad:!1})}get __textNodes(){return Array.from(this.childNodes).filter((e=>e.nodeType===this.TEXT_NODE))}get __textContent(){return this.__textNodes.map((e=>{var t;return null===(t=e.textContent)||void 0===t?void 0:t.trim()})).join("")}__renderGraph(){this.updated=new Promise((e=>{try{""!==this.__textContent?t.render("graph",this.__textContent,(t=>{this.shadowRoot&&(this.shadowRoot.innerHTML=t),e()})):(this.shadowRoot&&(this.shadowRoot.innerHTML=""),e())}catch(t){e()}}))}__observeTextNodes(){this.__textNodeObservers&&this.__cleanTextNodeObservers(),this.__textNodeObservers=this.__textNodes.map((e=>{const t=new MutationObserver(this.__renderGraph);return t.observe(e,{characterData:!0}),t}))}__cleanTextNodeObservers(){this.__textNodeObservers&&this.__textNodeObservers.forEach((e=>e.disconnect()))}connectedCallback(){this.__observer=new MutationObserver((()=>{this.__observeTextNodes(),this.__renderGraph()})),this.__observer.observe(this,{childList:!0}),this.__observeTextNodes(),this.__renderGraph()}disconnectedCallback(){this.__cleanTextNodeObservers(),this.__observer&&(this.__observer.disconnect(),this.__observer=null)}}window.customElements.define("wc-mermaid",r);const s=()=>e`<wc-mermaid>
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
</wc-mermaid>`,o=document,n=[{key:"HtmlStory0",story:s}];let i=!1;for(const e of n){const t=o.querySelector(`[mdjs-story-name="${e.key}"]`);t&&(t.story=e.story,t.key=e.key,i=!0,Object.assign(t,{}))}i&&(customElements.get("mdjs-preview")||import("./0d790cd0.js").then((function(e){return e.a})),customElements.get("mdjs-story")||import("./0d790cd0.js").then((function(e){return e.d})));export{s as HtmlStory0};
