/*! For license information please see 6f87e419.7f91b809.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[215430],{841307:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var a=r(785893),c=r(511151);const t={id:"backend-common.legacyplugin",title:"legacyPlugin",description:"API reference for legacyPlugin"},i=void 0,o={id:"reference/backend-common.legacyplugin",title:"legacyPlugin",description:"API reference for legacyPlugin",source:"@site/versioned_docs/version-stable/reference/backend-common.legacyplugin.md",sourceDirName:"reference",slug:"/reference/backend-common.legacyplugin",permalink:"/docs/reference/backend-common.legacyplugin",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/backend-common.legacyplugin.md",tags:[],version:"stable",frontMatter:{id:"backend-common.legacyplugin",title:"legacyPlugin",description:"API reference for legacyPlugin"}},s={},l=[{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,c.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,a.jsx)(n.a,{href:"/docs/reference/backend-common",children:(0,a.jsx)(n.code,{children:"@backstage/backend-common"})})," > ",(0,a.jsx)(n.a,{href:"/docs/reference/backend-common.legacyplugin",children:(0,a.jsx)(n.code,{children:"legacyPlugin"})})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Warning: This API is now obsolete."}),"\n",(0,a.jsx)(n.p,{children:"Fully use the new backend system instead."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Helper function to create a plugin from a legacy createRouter function and register it with the http router based on the plugin id."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:'legacyPlugin: (name: string, createRouterImport: Promise<{\n    default: LegacyCreateRouter<TransformedEnv<{\n        cache: import("@backstage/backend-plugin-api").CacheService;\n        config: import("@backstage/backend-plugin-api").RootConfigService;\n        database: import("@backstage/backend-plugin-api").DatabaseService;\n        discovery: import("@backstage/backend-plugin-api").DiscoveryService;\n        logger: import("@backstage/backend-plugin-api").LoggerService;\n        permissions: import("@backstage/backend-plugin-api").PermissionsService;\n        scheduler: import("@backstage/backend-plugin-api").SchedulerService;\n        tokenManager: import("@backstage/backend-plugin-api").TokenManagerService;\n        reader: import("@backstage/backend-plugin-api").UrlReaderService;\n        identity: import("@backstage/backend-plugin-api").IdentityService;\n    }, {\n        logger: (log: import("@backstage/backend-plugin-api").LoggerService) => import("winston").Logger;\n        cache: (cache: import("@backstage/backend-plugin-api").CacheService) => {\n            getClient(options?: import("@backstage/backend-plugin-api").CacheServiceOptions | undefined): import("@backstage/backend-plugin-api").CacheService;\n        };\n    }>>;\n}>) => import("@backstage/backend-plugin-api").BackendFeatureCompat\n'})}),"\n",(0,a.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,a.jsx)(n.p,{children:"This is intended to be used by plugin authors to ease the transition to the new backend system."}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"backend.add(legacyPlugin('kafka', import('./plugins/kafka')));\n"})})]})}function p(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},675251:(e,n,r)=>{var a=r(667294),c=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var a,t={},l=null,d=null;for(a in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)i.call(n,a)&&!s.hasOwnProperty(a)&&(t[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===t[a]&&(t[a]=n[a]);return{$$typeof:c,type:e,key:l,ref:d,props:t,_owner:o.current}}n.Fragment=t,n.jsx=l,n.jsxs=l},785893:(e,n,r)=>{e.exports=r(675251)},511151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>i});var a=r(667294);const c={},t=a.createContext(c);function i(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);