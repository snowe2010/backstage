/*! For license information please see 1ba3b84f.3ca7c5c2.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[366193],{176552:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var a=t(785893),i=t(511151);const o={id:"index",title:"Building Frontend Apps",sidebar_label:"Overview",description:"Building frontend apps using the new frontend system"},s=void 0,r={id:"frontend-system/building-apps/index",title:"Building Frontend Apps",description:"Building frontend apps using the new frontend system",source:"@site/../docs/frontend-system/building-apps/01-index.md",sourceDirName:"frontend-system/building-apps",slug:"/frontend-system/building-apps/index",permalink:"/docs/next/frontend-system/building-apps/index",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/frontend-system/building-apps/01-index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"index",title:"Building Frontend Apps",sidebar_label:"Overview",description:"Building frontend apps using the new frontend system"},sidebar:"docs",previous:{title:"Migration Guide",permalink:"/docs/next/frontend-system/building-plugins/migrating"},next:{title:"Configuring Extensions",permalink:"/docs/next/frontend-system/building-apps/configuring-extensions"}},l={},c=[{value:"Creating a new app",id:"creating-a-new-app",level:2},{value:"The app instance",id:"the-app-instance",level:2},{value:"Configure your app",id:"configure-your-app",level:2},{value:"Bind external routes",id:"bind-external-routes",level:3},{value:"Enable feature discovery",id:"enable-feature-discovery",level:3},{value:"Configure extensions individually",id:"configure-extensions-individually",level:3},{value:"Customize or override built-in extensions",id:"customize-or-override-built-in-extensions",level:3},{value:"Use code to customize the app at a more granular level",id:"use-code-to-customize-the-app-at-a-more-granular-level",level:2},{value:"Install features manually",id:"install-features-manually",level:3},{value:"Using an async features loader",id:"using-an-async-features-loader",level:3},{value:"Lazy load your configuration file",id:"lazy-load-your-configuration-file",level:3}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"NOTE: The new frontend system is in alpha and is only supported by a small number of plugins."})}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"To get set up quickly with your own Backstage project you can create a Backstage App."}),"\n",(0,a.jsx)(n.p,{children:"A Backstage App is a monorepo setup that includes everything you need to run Backstage in your own environment."}),"\n",(0,a.jsx)(n.h2,{id:"creating-a-new-app",children:"Creating a new app"}),"\n",(0,a.jsxs)(n.p,{children:["To create a new Backstage app we recommend using the ",(0,a.jsx)(n.code,{children:"@backstage/create-app"})," command line, and the easiest way to run this package is with ",(0,a.jsx)(n.code,{children:"npx"}),":"]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"The create-app CLI requires Node.js Active LTS Release."})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"# The command bellow creates a Backstage App inside the current folder.\n# The name of the app-folder is the name that was provided when prompted.\nnpx @backstage/create-app@latest\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The created-app is currently templated for legacy frontend system applications, so the app wiring code it creates needs to be migrated, see ",(0,a.jsx)(n.a,{href:"#the-app-instance",children:"the app instance"})," section for an example."]}),"\n",(0,a.jsx)(n.h2,{id:"the-app-instance",children:"The app instance"}),"\n",(0,a.jsxs)(n.p,{children:["The starting point of a frontend app is the ",(0,a.jsx)(n.code,{children:"createApp"})," function, which accepts a single options object as its only parameter. It is imported from ",(0,a.jsx)(n.code,{children:"@backstage/frontend-defaults"}),", which is where you will find most of the common APIs for building apps."]}),"\n",(0,a.jsx)(n.p,{children:"This is how to create a minimal app:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",metastring:'title="in src/index.ts"',children:"import ReactDOM from 'react-dom/client';\nimport { createApp } from '@backstage/frontend-defaults';\nimport catalogPlugin from '@backstage/plugin-catalog/alpha';\n\n// Create your app instance\nconst app = createApp({\n  // Features such as plugins can be installed explicitly, but we will explore other options later on\n  features: [catalogPlugin],\n});\n\n// This creates a React element that renders the entire app\nconst root = app.createRoot();\n\n// Just like any other React we need a root element. No server side rendering is used.\nconst rootEl = document.getElementById('root')!;\n\nReactDOM.createRoot(rootEl).render(root);\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Note that ",(0,a.jsx)(n.code,{children:"createRoot"})," returns the root element that is rendered by React. The above example is installing a catalog plugin and using default settings for the app, as no options other than the ",(0,a.jsx)(n.code,{children:"features"})," array are passed to the ",(0,a.jsx)(n.code,{children:"createApp"})," function."]}),"\n",(0,a.jsxs)(n.p,{children:["Visit the ",(0,a.jsx)(n.a,{href:"#customize-or-override-built-in-extensions",children:"built-in extensions"})," section to see what is installed by default in a Backstage application."]}),"\n",(0,a.jsx)(n.h2,{id:"configure-your-app",children:"Configure your app"}),"\n",(0,a.jsx)(n.h3,{id:"bind-external-routes",children:"Bind external routes"}),"\n",(0,a.jsxs)(n.p,{children:["Linking routes from different plugins requires this configuration. You can do this either through a configuration file or by coding, visit ",(0,a.jsx)(n.a,{href:"https://backstage.io/docs/frontend-system/architecture/routes#binding-external-route-references",children:"this"})," page for instructions."]}),"\n",(0,a.jsx)(n.h3,{id:"enable-feature-discovery",children:"Enable feature discovery"}),"\n",(0,a.jsxs)(n.p,{children:["Use this setting to enable experimental feature discovery when building your app with ",(0,a.jsx)(n.code,{children:"@backstage/cli"}),". With this configuration your application tries to discover and install package extensions automatically, check ",(0,a.jsx)(n.a,{href:"/docs/next/frontend-system/architecture/app#feature-discovery",children:"here"})," for more details."]}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsxs)(n.p,{children:["Remember that package extensions that are not auto-discovered must be manually added to the application when creating an app. See ",(0,a.jsx)(n.a,{href:"#install-features-manually",children:"features"})," for more details."]})}),"\n",(0,a.jsx)(n.h3,{id:"configure-extensions-individually",children:"Configure extensions individually"}),"\n",(0,a.jsxs)(n.p,{children:["It is possible to enable, disable and configure extensions individually in the ",(0,a.jsx)(n.code,{children:"app-config.yaml"})," config file. To get familiar with what is available for app extensions personalization, go to the ",(0,a.jsx)(n.a,{href:"/docs/next/frontend-system/building-apps/built-in-extensions",children:"built-in extensions"})," documentation. For plugin customizations, we recommend that you read the instructions in each plugin's README file."]}),"\n",(0,a.jsx)(n.h3,{id:"customize-or-override-built-in-extensions",children:"Customize or override built-in extensions"}),"\n",(0,a.jsxs)(n.p,{children:["Previously you would customize the application routes, components, apis, sidebar, etc. through the code in ",(0,a.jsx)(n.code,{children:"App.tsx"}),". Now we want to allow the same thing to be achieved while writing less code and instead installing more extensions to customize your Backstage instance. See the ",(0,a.jsx)(n.a,{href:"/docs/next/frontend-system/building-plugins/common-extension-blueprints",children:"extension blueprints"})," section for a list of common extension kinds that are available for you to customize and extend your application."]}),"\n",(0,a.jsx)(n.h2,{id:"use-code-to-customize-the-app-at-a-more-granular-level",children:"Use code to customize the app at a more granular level"}),"\n",(0,a.jsx)(n.h3,{id:"install-features-manually",children:"Install features manually"}),"\n",(0,a.jsxs)(n.p,{children:["A manual installation is required if your packages are not discovered automatically, either because you are not using ",(0,a.jsx)(n.code,{children:"@backstage/cli"})," to build your application or because the features are defined in local modules in the app package. In order to manually install a feature, you must import it and pass it to the ",(0,a.jsx)(n.code,{children:"createApp"})," function:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",metastring:'title="packages/app/src/App.tsx"',children:"import { createApp } from '@backstage/frontend-defaults';\n// This plugin was create as a local module in the app\nimport { somePlugin } from './plugins';\n\nconst app = createApp({\n  features: [somePlugin],\n});\n\nexport default app.createRoot();\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["You can also pass overrides to the features array, for more details, please read the ",(0,a.jsx)(n.a,{href:"/docs/next/frontend-system/architecture/extension-overrides",children:"extension overrides"})," documentation."]})}),"\n",(0,a.jsx)(n.h3,{id:"using-an-async-features-loader",children:"Using an async features loader"}),"\n",(0,a.jsxs)(n.p,{children:["In case you need to perform asynchronous operations before passing features to the ",(0,a.jsx)(n.code,{children:"createApp"})," function, define a ",(0,a.jsx)(n.a,{href:"https://backstage.io/docs/reference/frontend-defaults.createappfeatureloader/",children:"feature loader"})," object and pass it to the ",(0,a.jsx)(n.code,{children:"features"})," option:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",metastring:'title="packages/app/src/App.tsx"',children:"import { createApp } from '@backstage/frontend-defaults';\n\nconst app = createApp({\n  features: {\n    getLoaderName: () => '<your-custom-features-loader-name>',\n    // there is a reference to the config api in the options param\n    load: async _options => {\n      // returning a lazy loaded plugins and overrides array\n      // could be util for module federation\n      return import('./features').then(m => m.default);\n    },\n  },\n});\n\nexport default app.createRoot();\n"})}),"\n",(0,a.jsx)(n.h3,{id:"lazy-load-your-configuration-file",children:"Lazy load your configuration file"}),"\n",(0,a.jsxs)(n.p,{children:["In some cases we want to load our configuration from a backend server and to do so, you can pass an callback to the ",(0,a.jsx)(n.code,{children:"configLoader"})," option when calling the ",(0,a.jsx)(n.code,{children:"createApp"})," function, the callback should return a promise of an object with the config object:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",metastring:'title="packages/app/src/App.tsx"',children:"import { createApp } from '@backstage/frontend-defaults';\nimport { getConfigFromServer } from './utils';\n\n// Example lazy loading the app configuration\nconst app = createApp({\n  // Returns Promise<{ config: ConfigApi }>\n  configLoader: async () => {\n    // Calls an async utility method that fetches the config object from the server\n    const config = await getConfigFromServer();\n    // Feel free to manipulate the config object before returning it\n    // A common example is conditionally modify the config based on the running environment\n    return { config };\n  },\n});\n\nexport default app.createRoot();\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},675251:(e,n,t)=>{var a=t(667294),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,r=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var a,o={},c=null,d=null;for(a in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)s.call(n,a)&&!l.hasOwnProperty(a)&&(o[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===o[a]&&(o[a]=n[a]);return{$$typeof:i,type:e,key:c,ref:d,props:o,_owner:r.current}}n.Fragment=o,n.jsx=c,n.jsxs=c},785893:(e,n,t)=>{e.exports=t(675251)},511151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var a=t(667294);const i={},o=a.createContext(i);function s(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);