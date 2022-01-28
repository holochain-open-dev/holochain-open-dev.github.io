import{w as e,b as t,d as i,i as s,s as o,$ as r,r as n,x as a}from"./b3b2146f.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const d=2;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class l extends class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}{constructor(t){if(super(t),this.it=e,t.type!==d)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(i){if(i===e||null==i)return this.vt=void 0,this.it=i;if(i===t)return i;if("string"!=typeof i)throw Error(this.constructor.directiveName+"() called with a non-string value");if(i===this.it)return this.vt;this.it=i;const s=[i];return s.raw=s,this.vt={_$litType$:this.constructor.resultType,strings:s,values:[]}}}l.directiveName="unsafeHTML",l.resultType=1,function(){function e(e){var t=0;return function(){return t<e.length?{done:!1,value:e[t++]}:{done:!0}}}if(!ShadowRoot.prototype.createElement){var t,i=window.HTMLElement,s=window.customElements.define,o=window.customElements.get,r=window.customElements,n=new WeakMap,a=new WeakMap,d=new WeakMap,l=new WeakMap;window.CustomElementRegistry=function(){this.l=new Map,this.o=new Map,this.i=new Map,this.h=new Map},window.CustomElementRegistry.prototype.define=function(t,i){if(t=t.toLowerCase(),void 0!==this.j(t))throw new DOMException("Failed to execute 'define' on 'CustomElementRegistry': the name \""+t+'" has already been used with this registry');if(void 0!==this.o.get(i))throw new DOMException("Failed to execute 'define' on 'CustomElementRegistry': this constructor has already been used with this registry");var n=i.prototype.attributeChangedCallback,l=new Set(i.observedAttributes||[]);if(h(i,l,n),n={g:i,connectedCallback:i.prototype.connectedCallback,disconnectedCallback:i.prototype.disconnectedCallback,adoptedCallback:i.prototype.adoptedCallback,attributeChangedCallback:n,observedAttributes:l},this.l.set(t,n),this.o.set(i,n),(l=o.call(r,t))||(l=c(t),s.call(r,t,l)),this===window.customElements&&(d.set(i,n),n.s=l),l=this.h.get(t)){this.h.delete(t);var p="undefined"!=typeof Symbol&&Symbol.iterator&&l[Symbol.iterator];for(l=p?p.call(l):{next:e(l)},p=l.next();!p.done;p=l.next())p=p.value,a.delete(p),u(p,n,!0)}return void 0!==(n=this.i.get(t))&&(n.resolve(i),this.i.delete(t)),i},window.CustomElementRegistry.prototype.upgrade=function(){g.push(this),r.upgrade.apply(r,arguments),g.pop()},window.CustomElementRegistry.prototype.get=function(e){var t;return null==(t=this.l.get(e))?void 0:t.g},window.CustomElementRegistry.prototype.j=function(e){return this.l.get(e)},window.CustomElementRegistry.prototype.whenDefined=function(e){var t=this.j(e);if(void 0!==t)return Promise.resolve(t.g);var i=this.i.get(e);return void 0===i&&((i={}).promise=new Promise((function(e){return i.resolve=e})),this.i.set(e,i)),i.promise},window.CustomElementRegistry.prototype.m=function(e,t,i){var s=this.h.get(t);s||this.h.set(t,s=new Set),i?s.add(e):s.delete(e)},window.HTMLElement=function(){var e=t;if(e)return t=void 0,e;var s=d.get(this.constructor);if(!s)throw new TypeError("Illegal constructor (custom element class must be registered with global customElements registry to be newable)");return e=Reflect.construct(i,[],s.s),Object.setPrototypeOf(e,this.constructor.prototype),n.set(e,s),e},window.HTMLElement.prototype=i.prototype;var c=function(e){function t(){var t=Reflect.construct(i,[],this.constructor);Object.setPrototypeOf(t,HTMLElement.prototype);e:{var s=t.getRootNode();if(!(s===document||s instanceof ShadowRoot)){if((s=g[g.length-1])instanceof CustomElementRegistry){var o=s;break e}(s=s.getRootNode())===document||s instanceof ShadowRoot||(s=(null==(o=l.get(s))?void 0:o.getRootNode())||document)}o=s.customElements}return(s=(o=o||window.customElements).j(e))?u(t,s):a.set(t,o),t}return t.prototype.connectedCallback=function(){var t=n.get(this);t?t.connectedCallback&&t.connectedCallback.apply(this,arguments):a.get(this).m(this,e,!0)},t.prototype.disconnectedCallback=function(){var t=n.get(this);t?t.disconnectedCallback&&t.disconnectedCallback.apply(this,arguments):a.get(this).m(this,e,!1)},t.prototype.adoptedCallback=function(){var e,t;null==(e=n.get(this))||null==(t=e.adoptedCallback)||t.apply(this,arguments)},t},h=function(e,t,i){if(0!==t.size&&void 0!==i){var s=e.prototype.setAttribute;s&&(e.prototype.setAttribute=function(e,o){if(t.has(e)){var r=this.getAttribute(e);s.call(this,e,o),i.call(this,e,r,o)}else s.call(this,e,o)});var o=e.prototype.removeAttribute;o&&(e.prototype.removeAttribute=function(e){if(t.has(e)){var s=this.getAttribute(e);o.call(this,e),i.call(this,e,s,null)}else o.call(this,e)})}},p=function(e){var t=Object.getPrototypeOf(e);if(t!==window.HTMLElement)return t===i?Object.setPrototypeOf(e,window.HTMLElement):p(t)},u=function(e,i,s){s=void 0!==s&&s,Object.setPrototypeOf(e,i.g.prototype),n.set(e,i),t=e;try{new i.g}catch(e){p(i.g),new i.g}i.observedAttributes.forEach((function(t){e.hasAttribute(t)&&i.attributeChangedCallback.call(e,t,null,e.getAttribute(t))})),s&&i.connectedCallback&&e.isConnected&&i.connectedCallback.call(e)},m=Element.prototype.attachShadow;Element.prototype.attachShadow=function(e){var t=m.apply(this,arguments);return e.customElements&&(t.customElements=e.customElements),t};var g=[document],f=function(e,t,i){var s=(i?Object.getPrototypeOf(i):e.prototype)[t];e.prototype[t]=function(){g.push(this);var e=s.apply(i||this,arguments);return void 0!==e&&l.set(e,this),g.pop(),e}};f(ShadowRoot,"createElement",document),f(ShadowRoot,"importNode",document),f(Element,"insertAdjacentHTML");var b=function(e){var t=Object.getOwnPropertyDescriptor(e.prototype,"innerHTML");Object.defineProperty(e.prototype,"innerHTML",Object.assign({},t,{set:function(e){g.push(this),t.set.call(this,e),g.pop()}}))};b(Element),b(ShadowRoot),Object.defineProperty(window,"customElements",{value:new CustomElementRegistry,configurable:!0,writable:!0})}}.call(self);const c=i((e=>class extends e{static get scopedElements(){return{}}static get shadowRootOptions(){return this.__shadowRootOptions}static set shadowRootOptions(e){this.__shadowRootOptions=e}static get elementStyles(){return this.__elementStyles}static set elementStyles(e){this.__elementStyles=e}constructor(...e){super(),this.renderOptions=this.renderOptions||void 0}get registry(){return this.constructor.__registry}set registry(e){this.constructor.__registry=e}createRenderRoot(){const{scopedElements:e,shadowRootOptions:t,elementStyles:i}=this.constructor;this.registry||(this.registry=new CustomElementRegistry,Object.entries(e).forEach((([e,t])=>this.registry.define(e,t))));const o={mode:"open",...t,customElements:this.registry};return this.renderOptions.creationScope=this.attachShadow(o),this.renderOptions.creationScope instanceof ShadowRoot&&(s(this.renderOptions.creationScope,i),this.renderOptions.renderBefore=this.renderOptions.renderBefore||this.renderOptions.creationScope.firstChild),this.renderOptions.creationScope}defineScopedElement(e,t){return this.registry.get(e)||this.registry.define(e,t)}getScopedTagName(e){return e}static getScopedTagName(e){return e}}));customElements.define("mdjs-story",class extends o{static get properties(){return{story:{attribute:!1}}}constructor(){super(),this.story=()=>r`<p>Loading...</p>`}createRenderRoot(){return this}render(){return this.story({shadowRoot:this})}});var h=Object.freeze({__proto__:null});class p extends o{static get properties(){return{focusedIndex:{type:Number},expanded:{type:Array}}}static get styles(){return[n`
        .accordion {
          display: flex;
          flex-direction: column;
        }

        .accordion ::slotted([slot='invoker']) {
          margin: 0;
        }

        .accordion ::slotted([slot='invoker'][expanded]) {
          font-weight: bold;
        }

        .accordion ::slotted([slot='content']) {
          margin: 0;
          visibility: hidden;
          display: none;
        }

        .accordion ::slotted([slot='content'][expanded]) {
          visibility: visible;
          display: block;
        }
      `]}set focusedIndex(e){const t=this.__focusedIndex;this.__focusedIndex=e,this.__updateFocused(),this.dispatchEvent(new Event("focused-changed")),this.requestUpdate("focusedIndex",t)}get focusedIndex(){return this.__focusedIndex}set expanded(e){const t=this.__expanded;this.__expanded=e,this.__updateExpanded(),this.dispatchEvent(new Event("expanded-changed")),this.requestUpdate("expanded",t)}get expanded(){return this.__expanded}constructor(){super(),this.styles={},this.__store=[],this.__focusedIndex=-1,this.__expanded=[]}firstUpdated(e){super.firstUpdated(e),this.__setupSlots()}render(){return r`
      <div class="accordion">
        <slot name="invoker"></slot>
        <slot name="content"></slot>
      </div>
    `}__setupSlots(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("slot[name=invoker]"),i=()=>{this.__cleanStore(),this.__setupStore(),this.__updateFocused(),this.__updateExpanded()};t&&t.addEventListener("slotchange",i)}__setupStore(){const e=Array.from(this.querySelectorAll('[slot="invoker"]')),t=Array.from(this.querySelectorAll('[slot="content"]'));e.length!==t.length&&console.warn(`The amount of invokers (${e.length}) doesn't match the amount of contents (${t.length}).`),e.forEach(((e,i)=>{const s={uid:Math.random().toString(36).substr(2,10),index:i,invoker:e,content:t[i],clickHandler:this.__createInvokerClickHandler(i),keydownHandler:this.__handleInvokerKeydown.bind(this)};this._setupContent(s),this._setupInvoker(s),this._unfocusInvoker(s),this._collapse(s),this.__store.push(s)}))}__createInvokerClickHandler(e){return()=>{this.focusedIndex=e,this.__toggleExpanded(e)}}__handleInvokerKeydown(e){const t=e;switch(t.key){case"ArrowDown":case"ArrowRight":t.preventDefault(),this.focusedIndex+2<=this._pairCount&&(this.focusedIndex+=1);break;case"ArrowUp":case"ArrowLeft":t.preventDefault(),this.focusedIndex>=1&&(this.focusedIndex-=1);break;case"Home":t.preventDefault(),this.focusedIndex=0;break;case"End":t.preventDefault(),this.focusedIndex=this._pairCount-1}}get _pairCount(){return this.__store.length}_setupContent(e){const{content:t,index:i,uid:s}=e;t.style.setProperty("order",`${i+1}`),t.setAttribute("id",`content-${s}`),t.setAttribute("aria-labelledby",`invoker-${s}`)}_setupInvoker(e){const{invoker:t,uid:i,index:s,clickHandler:o,keydownHandler:r}=e;t.style.setProperty("order",`${s+1}`);const n=t.firstElementChild;n&&(n.setAttribute("id",`invoker-${i}`),n.setAttribute("aria-controls",`content-${i}`),n.addEventListener("click",o),n.addEventListener("keydown",r))}_cleanInvoker(e){const{invoker:t,clickHandler:i,keydownHandler:s}=e,o=t.firstElementChild;o&&(o.removeAttribute("id"),o.removeAttribute("aria-controls"),o.removeEventListener("click",i),o.removeEventListener("keydown",s))}_focusInvoker(e){const{invoker:t}=e,i=t.firstElementChild;i&&(i.focus(),i.setAttribute("focused","true"))}_unfocusInvoker(e){const{invoker:t}=e,i=t.firstElementChild;i&&i.removeAttribute("focused")}_collapse(e){const{content:t,invoker:i}=e;t.removeAttribute("expanded"),i.removeAttribute("expanded");const s=i.firstElementChild;s&&(s.removeAttribute("expanded"),s.setAttribute("aria-expanded","false"))}_expand(e){const{content:t,invoker:i}=e;t.setAttribute("expanded","true"),i.setAttribute("expanded","true");const s=i.firstElementChild;s&&(s.setAttribute("expanded","true"),s.setAttribute("aria-expanded","true"))}__updateFocused(){const e=this.__store[this.focusedIndex],t=Array.from(this.__store).find((e=>{var t;return e.invoker&&(null===(t=e.invoker.firstElementChild)||void 0===t?void 0:t.hasAttribute("focused"))}));t&&this._unfocusInvoker(t),e&&this._focusInvoker(e)}__updateExpanded(){this.__store&&this.__store.forEach(((e,t)=>{-1!==this.expanded.indexOf(t)?this._expand(e):this._collapse(e)}))}__toggleExpanded(e){const{expanded:t}=this,i=t.indexOf(e);-1===i?t.push(e):t.splice(i,1),this.expanded=t}__cleanStore(){this.__store&&(this.__store.forEach((e=>{this._cleanInvoker(e)})),this.__store=[])}}const u={platform:"web",size:"webSmall",previewTheme:"light",language:"en",autoHeight:!0,deviceMode:!1,rememberSettings:!1,edgeDistance:!0};let m=[];function g(e){m=m.filter((t=>t!==e))}let f=!1;function b(e){if(f)for(const t of Object.keys(u)){const i=t;e[i]=u[i]}else y(e)}function y(e){let t=!1;for(const i of Object.keys(u)){const s=i;u[s]!==e[s]&&(u[s]=e[s],t=!0,f=!0)}return t}function v(e,t){if(y(e)){!function(){for(const e of Object.keys(u)){const t=e;u.rememberSettings?localStorage.setItem(`mdjsViewerSharedStates-${t}`,u[t].toString()):localStorage.removeItem(`mdjsViewerSharedStates-${t}`)}}();for(const e of m)e!==t&&e()}}function w(e,t){return new URL(e).pathname.slice(1,-1*(t.length+1))}!function(){for(const e of Object.keys(u)){const t=e,i=localStorage.getItem(`mdjsViewerSharedStates-${t}`);if(null!==i){switch(t){case"autoHeight":case"deviceMode":case"rememberSettings":case"edgeDistance":u[t]="true"===i;break;default:u[t]=i}f=!0}}}();class x extends(c(o)){static get scopedElements(){return{"lion-accordion":p}}static get properties(){return{story:{attribute:!1},key:{type:String},deviceMode:{type:Boolean,attribute:"device-mode",reflect:!0},sameSettings:{type:Boolean},contentHeight:{type:Number},simulatorUrl:{type:String},platform:{type:String,reflect:!0},platforms:{type:Array},size:{type:String},sizes:{type:Array},previewTheme:{type:String,reflect:!0,attribute:"preview-theme"},themes:{type:Array},language:{type:String},languages:{type:Array},edgeDistance:{type:Boolean},autoHeight:{type:Boolean},rememberSettings:{type:Boolean},__copyButtonText:{type:String}}}constructor(){var e,t,i;super(),i=()=>{this.__syncUp=!1,b(this),this.__syncUp=!0},(t="onSubscribe")in(e=this)?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,this.story=()=>r` <p>Loading...</p> `,this.key="",this.contentHeight=0,this.simulatorUrl="",this.__supportsClipboard="clipboard"in navigator,this.__copyButtonText="Copy Code",this.previewTheme="light",this.themes=[],this.language="en-US",this.languages=[{key:"en",name:"English"},{key:"en-US",name:"English (United States)"},{key:"en-GB",name:"English (United Kingdom)"},{key:"de",name:"German"},{key:"es",name:"Spanish"},{key:"fi",name:"Finnish"},{key:"fr",name:"French"},{key:"it",name:"Italian"},{key:"nl",name:"Dutch"},{key:"pl",name:"Polish"},{key:"pt",name:"Portuguese"},{key:"ro",name:"Romanian"},{key:"sv",name:"Swedish"}],this.platform="web",this.platforms=[],this.size="webInline",this.sizes=[{key:"webInline",name:"Inline",platform:"web",width:360,height:640,dpr:1},{key:"webSmall",name:"Small",platform:"web",width:360,height:640,dpr:1},{key:"webMedium",name:"Medium",platform:"web",width:640,height:640,dpr:1},{key:"webLarge",name:"Large",platform:"web",width:1024,height:640,dpr:1},{key:"pixel2",name:"Pixel 2",platform:"android",width:411,height:731,dpr:2.6},{key:"galaxyS5",name:"Galaxy S5",platform:"android",width:360,height:640,dpr:3},{key:"iphoneX",name:"iPhone X",platform:"ios",width:375,height:812,dpr:3},{key:"iPad",name:"iPad",platform:"ios",width:768,height:1024,dpr:2}],this.deviceMode=!1,this.autoHeight=!0,this.edgeDistance=!0,this.sameSettings=!0,this.rememberSettings=!1,this.__firstRun=!0,this.__syncUp=!1}connectedCallback(){super.connectedCallback(),this.lightDomRenderTarget||(this.lightDomRenderTarget=document.createElement("div"),this.lightDomRenderTarget.setAttribute("slot","story"),this.appendChild(this.lightDomRenderTarget)),this.sameSettings&&b(this),window.addEventListener("message",(e=>{const t=JSON.parse(e.data);if("mdjs-viewer-resize"===t.action){const e=document.body.querySelector(`[mdjs-story-name="${t.storyKey}"]`);e&&(e.contentHeight=t.height)}}))}get baseUrl(){return document.location.origin}get deviceHeight(){var e;const t=(null===(e=this.sizeData)||void 0===e?void 0:e.height)||50;return this.autoHeight?Math.min(this.contentHeight,t):t}getSizesFor(e){return this.sizes.filter((t=>t.platform===e))}get sizeData(){return this.sizes.find((e=>e.key===this.size))||{width:50,height:50,name:"default"}}update(e){var t;super.update(e),this.sameSettings&&this.__syncUp&&v(this,this.onSubscribe),e.has("sameSettings")&&(this.sameSettings?(t=this.onSubscribe,m.push(t)):g(this.onSubscribe)),this.lightDomRenderTarget&&e.has("story")&&a(this.story({shadowRoot:this}),this.lightDomRenderTarget),(e.has("platform")||e.has("size"))&&(this.deviceMode="web"!==this.platform||"webInline"!==this.size)}disconnectedCallback(){super.disconnectedCallback(),this.sameSettings&&g(this.onSubscribe)}firstUpdated(){this.__syncUp=!0}get iframeUrl(){const e=document.querySelector("script[type=module][mdjs-setup]");if(!e)throw new Error('Could not find a <script type="module" src="..." mdjs-setup><\/script>');const t=new URLSearchParams;t.set("story-file",w(e.src,"js")),t.set("story-key",this.key),t.set("theme",this.previewTheme),t.set("platform",this.platform),t.set("language",this.language),t.set("edge-distance",this.edgeDistance.toString());const i=[...document.querySelectorAll("link[mdjs-use]")];for(const e of i)e.href&&t.append("stylesheets",w(e.href,"css"));const s=[...document.querySelectorAll("script[type=module][mdjs-use]")];for(const e of s)e.src&&t.append("moduleUrls",w(e.src,"js"));return`${this.simulatorUrl}#?${t.toString()}`}changePlatform(e){this.platform=e;const t=this.getSizesFor(this.platform);this.size=t[0].key}async onCopy(){let e=this.children[0];"android"===this.platform&&(e=this.children[1]),"ios"===this.platform&&(e=this.children[2]),e&&e.textContent&&(await navigator.clipboard.writeText(e.textContent.trim()),this.__copyButtonText="Copied ✅",setTimeout((()=>{this.__copyButtonText="Copy code"}),2e3))}renderPlatforms(){if(this.platforms.length)return r`
        <div
          class="segmented-control"
          @change=${e=>{e.target&&this.changePlatform(e.target.value)}}
        >
          ${this.platforms.map((e=>r`
              <label class="${this.platform===e.key?"selected":""}">
                <span>${e.name}</span>
                <input
                  type="radio"
                  name="platform"
                  value="${e.key}"
                  ?checked=${this.platform===e.key}
                />
              </label>
            `))}
        </div>
      `}renderPlatform(){if(this.platforms.length)return r`
        <div>
          <h4>Platform</h4>
          ${this.renderPlatforms()}
        </div>
      `}renderSize(){if(this.sizes.length)return r`
        <div>
          <h4>Size</h4>
          ${this.renderSizes()}
        </div>
      `}renderSizes(){if(this.sizes.length)return r`
        <div
          class="segmented-control"
          @change=${e=>{e.target&&(this.size=e.target.value)}}
        >
          ${this.getSizesFor(this.platform).map((e=>r`
              <label class="${this.size===e.key?"selected":""}">
                <span>${e.name}</span>
                <input
                  type="radio"
                  name="size"
                  value="${e.key}"
                  .checked=${this.size===e.key}
                />
              </label>
            `))}
        </div>
      `}renderViewport(){return r`
      <div>
        <h3>Viewport</h3>
        ${this.renderAutoHeight()}
      </div>
    `}renderThemes(){if(this.themes.length)return r`
        <div
          class="segmented-control"
          @change=${e=>{e.target&&(this.previewTheme=e.target.value)}}
        >
          ${this.themes.map((e=>r`
              <label class="${this.previewTheme===e.key?"selected":""}">
                <span>${e.name}</span>
                <input
                  type="radio"
                  name="theme"
                  value="${e.key}"
                  ?checked=${this.previewTheme===e.key}
                />
              </label>
            `))}
        </div>
      `}renderVisual(){return r`
      <div>
        <h3>Visual</h3>
        ${this.renderThemes()} ${this.renderEdgeDistance()}
      </div>
    `}renderLanguages(){if(this.languages.length)return r`
        <label>
          Language
          <select
            @change=${e=>{e.target&&(this.language=e.target.value)}}
          >
            ${this.languages.map((e=>r`
                <option value="${e.key}" ?selected=${this.language===e.key}>
                  ${e.name}
                </option>
              `))}
          </select>
        </label>
      `}renderLocalization(){return r`
      <div>
        <h3>Localization</h3>
        ${this.renderLanguages()}
      </div>
    `}renderEdgeDistance(){return r`
      <div>
        <label class="${this.edgeDistance?"switch selected":"switch"}">
          Apply distance to edge
          <span part="switch-button"></span>

          <input
            type="checkbox"
            ?checked=${this.edgeDistance}
            @change=${e=>{e.target&&(this.edgeDistance=e.target.checked)}}
          />
        </label>
      </div>
    `}renderAutoHeight(){return r`
      <div>
        <label class="${this.autoHeight?"switch selected":"switch"}">
          Fit height to content
          <span part="switch-button"></span>
          <input
            type="checkbox"
            ?checked=${this.autoHeight}
            @change=${e=>{e.target&&(this.autoHeight=e.target.checked)}}
          />
        </label>
      </div>
    `}renderSameSettings(){return r`
      <div>
        <label class="${this.sameSettings?"switch selected":"switch"}">
          Same settings for all simulations
          <span part="switch-button"></span>
          <input
            type="checkbox"
            ?checked=${this.sameSettings}
            @change=${e=>{e.target&&(this.sameSettings=e.target.checked)}}
          />
        </label>
      </div>
    `}renderRememberSettings(){return this.sameSettings?r`
      <div>
        <label class="${this.rememberSettings?"switch selected":"switch"}">
          Remember settings
          <span part="switch-button"></span>
          <input
            type="checkbox"
            ?checked=${this.rememberSettings}
            @change=${e=>{e.target&&(this.rememberSettings=e.target.checked)}}
          />
        </label>
      </div>
    `:r``}renderSyncSettings(){return r`
      <div>
        <h3>Global</h3>
        ${this.renderSameSettings()} ${this.renderRememberSettings()}
      </div>
    `}render(){return r`
      ${this.simulatorUrl?r`
            <div class="platform-size-controls">${this.renderPlatform()} ${this.renderSize()}</div>
          `:""}
      <div id="wrapper">
        <slot name="story"></slot>
        ${!0===this.deviceMode?r`
              <iframe
                part="iframe"
                csp=${`script-src ${document.location.origin} 'unsafe-inline'; connect-src ws://${document.location.host}/`}
                .src=${this.iframeUrl}
                style=${`width: ${this.sizeData.width}px; height: ${this.deviceHeight}px;`}
              ></iframe>
              <p part="frame-description" style=${`width: ${this.sizeData.width+4}px;`}>
                ${this.sizeData.name} - ${this.deviceHeight}x${this.sizeData.width}
              </p>
            `:e}
      </div>
      <lion-accordion class="options">
        ${this.simulatorUrl?r`
              <h3 slot="invoker">
                <button>Settings</button>
              </h3>
              <div slot="content">
                ${this.deviceMode?"":r`<div>
                      Note: Additional settings become available when not in web inline mode
                    </div>`}
                <div class="settings-wrapper">
                  ${this.deviceMode?r`
                        ${this.renderViewport()} ${this.renderVisual()} ${this.renderLocalization()}
                        ${this.renderSyncSettings()}
                      `:r` ${this.renderSyncSettings()} `}
                </div>
              </div>
            `:""}
        <h3 slot="invoker">
          <button>Code</button>
        </h3>
        <div slot="content">
          <slot id="code-slot"></slot>
          <button part="copy-button" @click="${this.onCopy}" ?hidden="${!this.__supportsClipboard}">
            ${this.__copyButtonText}
          </button>
        </div>
      </lion-accordion>
      ${this.simulatorUrl?r`
            <div class="controls">
              <a href=${this.iframeUrl} target="_blank">Open simulation in new window</a>
            </div>
          `:""}
    `}static get styles(){return n`
      :host {
        display: block;
        padding-bottom: 10px;
      }

      :host([device-mode]) slot[name='story'] {
        display: none;
      }

      :host(:not([device-mode])) #wrapper {
        border: 2px solid var(--primary-lines-color, #4caf50);
      }

      iframe {
        border: 2px solid var(--primary-lines-color, #4caf50);
        background: #fff;
      }

      [part='copy-button'] {
        border: 1px solid var(--primary-color, #3f51b5);
        border-radius: 9px;
        padding: 7px;
        background: none;
        font-weight: bold;
        color: var(--primary-color, #3f51b5);
        text-align: center;
        font-size: 12px;
        line-height: 12px;
        float: right;
        margin-top: -10px;
      }

      [part='copy-button']:hover {
        background-color: var(--primary-color, #3f51b5);
        color: var(--primary-text-inverse-color, #eee);
      }

      .switch {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
      }

      .switch:focus-within [part='switch-button'] {
        box-shadow: 0 0 0 1px hsl(0deg 0% 100% / 40%), 0 0 0 4px rgb(31 117 203 / 48%);
      }

      [part='switch-button'] {
        display: inline-block;
        width: 44px;
        background: var(--switch-unselected-color, #808080);
        height: 25px;
        border-radius: 15px;
        position: relative;
      }

      [part='switch-button']::after {
        content: ' ';
        width: 18px;
        height: 18px;
        border-radius: 10px;
        background: rgb(255, 255, 255);
        display: block;
        position: absolute;
        top: 3px;
        left: 4px;
      }

      .switch.selected [part='switch-button'] {
        background: var(--switch-selected-color, #42b983);
      }

      .switch.selected [part='switch-button']::after {
        left: auto;
        right: 4px;
      }

      [part='frame-description'] {
        margin: -5px 0 10px 0;
        text-align: right;
        font-size: 12px;
        color: var(--primary-text-color, #2c3e50);
      }

      .settings-wrapper {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 20px 40px;
        max-width: 650px;
      }

      @media (min-width: 640px) {
        .settings-wrapper {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      .settings-wrapper h3 {
        margin: 10px 0;
        font-size: 16px;
      }

      .options {
        display: block;
        padding: 15px 0;
      }

      .platform-size-controls {
        display: flex;
        justify-content: flex-start;
      }

      .platform-size-controls > * {
        margin-right: 25px;
      }

      .controls {
        display: flex;
        justify-content: space-between;
      }

      .controls a {
        color: var(--primary-color, #3f51b5);
        font-size: 14px;
        line-height: 37px;
      }

      .simulation-toggle {
        border: 1px solid var(--primary-color, #3f51b5);
        border-radius: 9px;
        padding: 10px;
        background: none;
        font-weight: bold;
        color: var(--primary-color, #3f51b5);
        text-align: center;
      }

      .simulation-toggle:hover {
        background-color: var(--primary-color, #3f51b5);
        color: var(--primary-text-inverse-color, #eee);
      }

      h3[slot='invoker'] button {
        font-size: 16px;
        display: block;
        position: relative;
        padding: 10px;
        border: none;
        border-bottom: 1px solid #bbb;
        width: 100%;
        color: var(--primary-text-color, #2c3e50);
        background: none;
        text-align: left;
        font-weight: bold;
      }

      h3[slot='invoker'] button::after {
        content: '>';
        right: 20px;
        top: 10px;
        position: absolute;
        transform: rotate(90deg);
      }

      h3[slot='invoker'][expanded='true'] button::after {
        transform: rotate(-90deg);
      }

      h3[slot='invoker'][expanded='true'] button {
        border-bottom: none;
      }

      .options > [slot='content'] {
        border-bottom: 1px solid #bbb;
        padding: 10px;
      }

      h3[slot='invoker']:first-child button {
        border-top: 1px solid #bbb;
      }

      h4 {
        font-weight: normal;
        font-size: 14px;
        margin: 5px 0;
      }

      .segmented-control {
        border: 1px solid var(--primary-color, #3f51b5);
        border-radius: 18px;
        display: inline-block;
        font-size: 14px;
        margin-bottom: 10px;
      }

      .segmented-control span {
        padding: 5px 10px;
        display: inline-block;
        border-radius: 18px;
        margin: 2px 0;
      }

      .segmented-control label:first-child span {
        margin-left: 2px;
      }

      .segmented-control label:last-child span {
        margin-right: 2px;
      }

      .segmented-control label.selected span {
        background: var(--primary-color, #3f51b5);
        color: var(--primary-text-inverse-color, #eee);
      }

      .segmented-control label:focus-within span {
        box-shadow: 0 0 0 1px hsl(0deg 0% 100% / 40%), 0 0 0 4px rgb(31 117 203 / 48%);
      }

      .segmented-control input,
      .switch input {
        clip: rect(0 0 0 0);
        clip-path: inset(50%);
        height: 1px;
        overflow: hidden;
        position: absolute;
        white-space: nowrap;
        width: 1px;
      }

      select {
        display: block;
        padding: 5px;
        border: 1px solid #333;
        border-radius: 3px;
      }

      /** Showing/Hiding additional code blocks **/
      ::slotted(pre) {
        display: none;
      }

      :host([platform='web']) ::slotted(pre:nth-child(1)) {
        display: block;
      }
      :host([platform='android']) ::slotted(pre:nth-child(2)) {
        display: block;
      }
      :host([platform='ios']) ::slotted(pre:nth-child(3)) {
        display: block;
      }
    `}}customElements.define("mdjs-preview",x);var k=Object.freeze({__proto__:null});export{k as a,h as d};
