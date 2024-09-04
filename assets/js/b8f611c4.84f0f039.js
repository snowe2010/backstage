/*! For license information please see b8f611c4.84f0f039.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[917006],{254253:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var t=n(785893),r=n(511151);const o={id:"feature-loaders",title:"Backend Feature Loaders",sidebar_label:"Feature Loaders",description:"Backend feature loaders"},c=void 0,s={id:"backend-system/architecture/feature-loaders",title:"Backend Feature Loaders",description:"Backend feature loaders",source:"@site/../docs/backend-system/architecture/07-feature-loaders.md",sourceDirName:"backend-system/architecture",slug:"/backend-system/architecture/feature-loaders",permalink:"/docs/next/backend-system/architecture/feature-loaders",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/backend-system/architecture/07-feature-loaders.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"feature-loaders",title:"Backend Feature Loaders",sidebar_label:"Feature Loaders",description:"Backend feature loaders"},sidebar:"docs",previous:{title:"Modules",permalink:"/docs/next/backend-system/architecture/modules"},next:{title:"Naming Patterns",permalink:"/docs/next/backend-system/architecture/naming-patterns"}},i={},l=[{value:"Examples",id:"examples",level:2},{value:"Simple list of features",id:"simple-list-of-features",level:3},{value:"Conditional loading",id:"conditional-loading",level:3},{value:"Dynamic logic",id:"dynamic-logic",level:3}];function d(e){const a={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.p,{children:"Backend feature loaders are used to programmatically select and install features in a Backstage backend. They can service a wide range of use cases, such as enabling or disabling features based on static configuration, dynamically load features at runtime, or conditionally load features based on the state of a system."}),"\n",(0,t.jsxs)(a.p,{children:["Feature loaders are defined using the ",(0,t.jsx)(a.code,{children:"createBackendFeatureLoader"})," function, exported by ",(0,t.jsx)(a.code,{children:"@backstage/backend-plugin-api"}),". It accepts a ",(0,t.jsx)(a.code,{children:"loader"})," function, as well as an optional ",(0,t.jsx)(a.code,{children:"deps"})," object for declaring service dependencies. Unlike plugins and modules, feature loaders are limited to only depending on root-scoped services, but that still allows access to for example the ",(0,t.jsx)(a.a,{href:"/docs/next/backend-system/core-services/root-config",children:"root config"})," and ",(0,t.jsx)(a.a,{href:"/docs/next/backend-system/core-services/root-logger",children:"root logger"})," services."]}),"\n",(0,t.jsxs)(a.p,{children:["The ",(0,t.jsx)(a.code,{children:"loader"})," function can be defined in many different ways, with the main requirement being that it returns a list of ",(0,t.jsx)(a.code,{children:"BackendFeature"}),"s in some form. A backend feature is the kind of object that you can pass to ",(0,t.jsx)(a.code,{children:"backend.add(...)"}),", for example services factories, plugins, modules, or even other feature loaders. The ",(0,t.jsx)(a.code,{children:"loader"})," function can be synchronous or asynchronous, and can be defined as a generator function to allow for more complex logic."]}),"\n",(0,t.jsx)(a.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(a.p,{children:"The following are a few example of how feature loaders can be used:"}),"\n",(0,t.jsx)(a.h3,{id:"simple-list-of-features",children:"Simple list of features"}),"\n",(0,t.jsx)(a.p,{children:"A feature loader can simply return a list of features to be installed:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-ts",children:"export default createBackendFeatureLoader({\n  loader() {\n    return [\n      import('@backstage/plugin-search-backend/alpha'),\n      import('@backstage/plugin-search-backend-module-catalog/alpha'),\n      import('@backstage/plugin-search-backend-module-explore/alpha'),\n      import('@backstage/plugin-search-backend-module-techdocs/alpha'),\n    ];\n  },\n});\n"})}),"\n",(0,t.jsx)(a.p,{children:"It can also encapsulate a collection of custom features:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-ts",children:"export default createBackendFeatureLoader({\n  // Async loader is fine too\n  async loader() {\n    return [\n      createBackendPlugin({\n        ...\n      }),\n      createBackendModule({\n        ...\n      }),\n    ]\n  },\n});\n"})}),"\n",(0,t.jsx)(a.h3,{id:"conditional-loading",children:"Conditional loading"}),"\n",(0,t.jsx)(a.p,{children:"A feature loader can access root-scoped services, such as the config service. This allows for conditional loading of features based on configuration. It is often convenient to use a generator function for this purpose:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-ts",children:"export default createBackendFeatureLoader({\n  deps: {\n    config: coreServices.rootConfig,\n  },\n  // The `*` in front of the function name makes it a generator function\n  *loader({ config }) {\n    // Example of a custom config flag to enable search\n    if (config.getOptionalString('customFeatureToggle.search')) {\n      yield import('@backstage/plugin-search-backend/alpha');\n      yield import('@backstage/plugin-search-backend-module-catalog/alpha');\n      yield import('@backstage/plugin-search-backend-module-explore/alpha');\n      yield import('@backstage/plugin-search-backend-module-techdocs/alpha');\n    }\n  },\n});\n"})}),"\n",(0,t.jsx)(a.h3,{id:"dynamic-logic",children:"Dynamic logic"}),"\n",(0,t.jsx)(a.p,{children:"A feature loader can also be asynchronous, and for example fetch data from an external source to determine which features to load:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-ts",children:"export default createBackendFeatureLoader({\n  // The `async *` in front of the function name makes it an async generator function.\n  async *loader() {\n    const localMetadata = await readMetadataFromDisk();\n\n    if (localMetadata.enableSearch) {\n      yield import('@backstage/plugin-search-backend/alpha');\n      yield import('@backstage/plugin-search-backend-module-catalog/alpha');\n\n      const remoteMetadata = await fetchMetadata();\n\n      if (remoteMetadata.enableExplore) {\n        yield import('@backstage/plugin-search-backend-module-explore/alpha');\n      }\n      if (remoteMetadata.enableTechDocs) {\n        yield import('@backstage/plugin-search-backend-module-techdocs/alpha');\n      }\n    }\n  },\n});\n"})})]})}function u(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},675251:(e,a,n)=>{var t=n(667294),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,a,n){var t,o={},l=null,d=null;for(t in void 0!==n&&(l=""+n),void 0!==a.key&&(l=""+a.key),void 0!==a.ref&&(d=a.ref),a)c.call(a,t)&&!i.hasOwnProperty(t)&&(o[t]=a[t]);if(e&&e.defaultProps)for(t in a=e.defaultProps)void 0===o[t]&&(o[t]=a[t]);return{$$typeof:r,type:e,key:l,ref:d,props:o,_owner:s.current}}a.Fragment=o,a.jsx=l,a.jsxs=l},785893:(e,a,n)=>{e.exports=n(675251)},511151:(e,a,n)=>{n.d(a,{Z:()=>s,a:()=>c});var t=n(667294);const r={},o=t.createContext(r);function c(e){const a=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(o.Provider,{value:a},e.children)}}}]);