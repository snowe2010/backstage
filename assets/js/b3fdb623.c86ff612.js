/*! For license information please see b3fdb623.c86ff612.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[448937],{338219:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var s=n(785893),o=n(511151);const a={id:"modules",title:"Plugin Modules",sidebar_label:"Modules",description:"Modules for backend plugins"},i=void 0,r={id:"backend-system/architecture/modules",title:"Plugin Modules",description:"Modules for backend plugins",source:"@site/versioned_docs/version-stable/backend-system/architecture/06-modules.md",sourceDirName:"backend-system/architecture",slug:"/backend-system/architecture/modules",permalink:"/docs/backend-system/architecture/modules",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/backend-system/architecture/06-modules.md",tags:[],version:"stable",sidebarPosition:6,frontMatter:{id:"modules",title:"Plugin Modules",sidebar_label:"Modules",description:"Modules for backend plugins"},sidebar:"docs",previous:{title:"Extension Points",permalink:"/docs/backend-system/architecture/extension-points"},next:{title:"Feature Loaders",permalink:"/docs/backend-system/architecture/feature-loaders"}},l={},c=[{value:"A Practical Example",id:"a-practical-example",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Backend modules are used to extend ",(0,s.jsx)(t.a,{href:"/docs/backend-system/architecture/plugins",children:"plugins"})," or sometimes other modules with additional features or change existing behavior. They must always be installed in the same backend instance as the plugin that they extend, and may only extend a single plugin. Modules interact with their target plugin using the ",(0,s.jsx)(t.a,{href:"/docs/backend-system/architecture/extension-points",children:"extension points"})," registered by the plugin, while also being able to depend on the ",(0,s.jsx)(t.a,{href:"/docs/backend-system/architecture/services",children:"services"})," of that plugin."]}),"\n",(0,s.jsxs)(t.p,{children:["Both modules and plugins register an ",(0,s.jsx)(t.code,{children:"init"})," method that is called during startup. In order to ensure that modules have registered all their extensions before the plugin starts up, all modules for each plugin are completely initialized before the plugin itself is initialized. In practice this means that all promises returned by each ",(0,s.jsx)(t.code,{children:"init"})," method of the modules need to resolve before the plugin ",(0,s.jsx)(t.code,{children:"init"})," method is called. This also means that it is not possible to further interact with the extension points once the ",(0,s.jsx)(t.code,{children:"init"})," method has resolved."]}),"\n",(0,s.jsxs)(t.p,{children:["A module depends on the extension points exported by the target plugin's library package, for example ",(0,s.jsx)(t.code,{children:"@backstage/plugin-catalog-node"}),", and does not directly declare a dependency on the plugin package itself. This is to avoid a direct dependency and potentially cause duplicate installations of the plugin package, while duplicate installations of library packages should always be supported."]}),"\n",(0,s.jsx)(t.h2,{id:"a-practical-example",children:"A Practical Example"}),"\n",(0,s.jsxs)(t.p,{children:["The following is an example on how to create a module that adds a new processor using the ",(0,s.jsx)(t.code,{children:"catalogProcessingExtensionPoint"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"// plugins/catalog-backend-module-example-processor/src/module.ts\nimport { createBackendModule } from '@backstage/backend-plugin-api';\nimport { catalogProcessingExtensionPoint } from '@backstage/plugin-catalog-node';\nimport { MyCustomProcessor } from './MyCustomProcessor';\n\nexport const catalogModuleExampleCustomProcessor = createBackendModule({\n  pluginId: 'catalog',\n  moduleId: 'example-custom-processor',\n  register(env) {\n    env.registerInit({\n      deps: {\n        catalog: catalogProcessingExtensionPoint,\n        logger: coreServices.logger,\n      },\n      async init({ catalog }) {\n        catalog.addProcessor(new MyCustomProcessor(logger));\n      },\n    });\n  },\n});\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Notice that we're placing the extension point we want to interact with in the ",(0,s.jsx)(t.code,{children:"deps"})," option, while also depending on the logger service at the same time. When initializing modules we can depend on both extension points and services interchangeably. You can also depend on multiple extension points at once, in case the implementation of the module requires it."]}),"\n",(0,s.jsx)(t.p,{children:"Just like plugins there is a convention that every module package should export its module instance as the default export from the package:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"// plugins/catalog-backend-module-example-processor/src/index.ts\nexport { catalogModuleExampleCustomProcessor as default } from './module.ts';\n"})}),"\n",(0,s.jsx)(t.p,{children:"This allows you to install the module in your backend instance by just referencing the package:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"backend.add(\n  import('@internal/backstage-plugin-catalog-backend-module-example-processor'),\n);\n"})}),"\n",(0,s.jsx)(t.p,{children:"Each module package should only contain a single module, but this module may extend multiple extension points. A module may also use configuration to conditionally enable or disable certain extensions. This pattern should only be used for extensions that are related to each other, otherwise it is best to create a separate module package with its own module."})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},675251:(e,t,n)=>{var s=n(667294),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,r=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var s,a={},c=null,d=null;for(s in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,s)&&!l.hasOwnProperty(s)&&(a[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===a[s]&&(a[s]=t[s]);return{$$typeof:o,type:e,key:c,ref:d,props:a,_owner:r.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},785893:(e,t,n)=>{e.exports=n(675251)},511151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>i});var s=n(667294);const o={},a=s.createContext(o);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);