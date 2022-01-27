# Frontend >> Integration with UI frameworks ||20

```js script
import "@mdjs/mdjs-story/define";
import "@mdjs/mdjs-preview/define";
import { html } from "@mdjs/mdjs-story";
```

```html story
<sl-tab-group>
  <sl-tab slot="nav" panel="vue"> Vue </sl-tab>
  <sl-tab slot="nav" panel="react">React</sl-tab>
  <sl-tab slot="nav" panel="angular">Angular</sl-tab>
  <sl-tab slot="nav" panel="svelte">Svelte</sl-tab>
  <sl-tab slot="nav" panel="lit">Lit</sl-tab>

  <sl-tab-panel name="vue">
    <div style="display: flex; flex-direction: column">
      <iframe
        src="https://stackblitz.com/edit/vitejs-vite-tabmaq?embed=1&file=src/App.vue&terminal=dev&view=both&ctl=1"
        width="1200"
        height="600"
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
        width="1200"
        height="600"
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
        src="https://stackblitz.com/edit/angular-ivy-6weh8u?ctl=1&embed=1&file=src/app/app.component.ts&hideNavigation=1&view=editor"
        width="1200"
        height="600"
      ></iframe>

      <br />
      <span>Notice:</span>
      <ul>
        <li>
          The preview doesn't work at the moment because of a Stackblitz build
          issue. This exact code should work fine in your local machine.
        </li>
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
      width="1200"
      height="600"
    ></iframe>
  </sl-tab-panel>
  <sl-tab-panel name="lit">
    <iframe
      src="https://stackblitz.com/edit/vitejs-vite-pqy9ar?ctl=1&embed=1&file=src/my-element.js&view=both&terminal=dev"
      width="1200"
      height="600"
    ></iframe>
  </sl-tab-panel>
</sl-tab-group>
```
