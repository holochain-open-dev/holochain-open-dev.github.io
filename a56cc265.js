import"./0d790cd0.js";import{$ as e}from"./b3b2146f.js";const t=()=>e`<sl-tab-group>
  <sl-tab slot="nav" panel="vue"> Vue </sl-tab>
  <sl-tab slot="nav" panel="react">React</sl-tab>
  <sl-tab slot="nav" panel="angular">Angular</sl-tab>
  <sl-tab slot="nav" panel="svelte">Svelte</sl-tab>
  <sl-tab slot="nav" panel="lit">Lit</sl-tab>

  <sl-tab-panel name="vue">
    <div style="display: flex; flex-direction: column">
      <iframe
        src="https://stackblitz.com/edit/vitejs-vite-tabmaq?embed=1&file=src/App.vue&terminal=dev&view=both&ctl=1"
        style="width: 100%; height: 600px;"
      ></iframe>
      <br />
      <span>Notice:</span>
      <ul>
        <li>
          Vue needs special configuration to recognize Custom Elements, you can
          find it in vite.config.js.
        </li>
        <li>
          Read more about Vue and WebComponents
          <a href="https://v3.vuejs.org/guide/web-components.html">here</a>.
        </li>
      </ul>
    </div>
  </sl-tab-panel>
  <sl-tab-panel name="react">
    <div style="display: flex; flex-direction: column">
      <iframe
        src="https://stackblitz.com/edit/vitejs-vite-suesw9?ctl=1&embed=1&file=src/App.jsx&terminal=dev&view=both"
        style="width: 100%; height: 600px;"
      ></iframe>
      <br />
      <span>Notice:</span>
      <ul>
        <li>
          React has just recently introduced support for native custom elements,
          but it's still in
          <a
            href="https://github.com/facebook/react/issues/11347#issuecomment-988970952"
            >their experimental release</a
          >. Until that support lands, we are using
          <a href="https://www.npmjs.com/package/@lit-labs/react"
            >@lit-labs/react</a
          >
          for the integration, which is very cumbersome. When support lands in
          react stable, then we won't need @lit-labs/react anymore.
        </li>
        <li>
          The "ProfilePrompt" element doesn't work correctly in React (TBD:
          why?). You can import the "CreateProfile" element and recreate its
          same behavior in your React app.
        </li>
      </ul>
    </div>
  </sl-tab-panel>
  <sl-tab-panel name="angular">
    <div style="display: flex; flex-direction: column">
      <iframe
        src="https://codesandbox.io/embed/holochain-open-dev-profiles-in-angular-ib9n0?fontsize=14&hidenavigation=1&theme=dark&view=split&module=/src/app/app.component.ts,/src/app/app.component.html"
        style="width: 100%; height:600px; border:0; border-radius: 4px; overflow:hidden;"
        title="@holochain-open-dev/profiles in Angular"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>
      <br />
      <span>Notice:</span>
      <ul>
        <li>
          You need to import the "CUSTOM_ELEMENTS_SCHEMA" in your "NgModule".
        </li>
        <li>
          <a
            href="https://vaadin.com/learn/tutorials/using-web-components-in-angular"
            >This is a good tutorial</a
          >
          about how to integrate Custom Elements in Angular.
        </li>
      </ul>
    </div>
  </sl-tab-panel>
  <sl-tab-panel name="svelte">
    <iframe
      src="https://stackblitz.com/edit/vitejs-vite-kjr8dw?embed=1&file=src/App.svelte&terminal=dev&view=both&ctl=1"
      style="width: 100%; height: 600px;"
    ></iframe>
  </sl-tab-panel>
  <sl-tab-panel name="lit">
    <iframe
      src="https://stackblitz.com/edit/vitejs-vite-pqy9ar?ctl=1&embed=1&file=src/my-element.js&view=both&terminal=dev"
      style="width: 100%; height: 600px;"
    ></iframe>
  </sl-tab-panel>
</sl-tab-group>`,a=document,l=[{key:"HtmlStory0",story:t}];let i=!1;for(const e of l){const t=a.querySelector(`[mdjs-story-name="${e.key}"]`);t&&(t.story=e.story,t.key=e.key,i=!0,Object.assign(t,{}))}i&&(customElements.get("mdjs-preview")||import("./0d790cd0.js").then((function(e){return e.a})),customElements.get("mdjs-story")||import("./0d790cd0.js").then((function(e){return e.d})));export{t as HtmlStory0};
