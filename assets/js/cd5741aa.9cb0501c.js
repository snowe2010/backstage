/*! For license information please see cd5741aa.9cb0501c.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[251454],{43670:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=t(785893),s=t(511151);const i={id:"plugin-app-node",title:"@backstage/plugin-app-node",description:"API Reference for @backstage/plugin-app-node"},a=void 0,c={id:"reference/plugin-app-node",title:"@backstage/plugin-app-node",description:"API Reference for @backstage/plugin-app-node",source:"@site/../docs/reference/plugin-app-node.md",sourceDirName:"reference",slug:"/reference/plugin-app-node",permalink:"/docs/next/reference/plugin-app-node",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-app-node.md",tags:[],version:"current",frontMatter:{id:"plugin-app-node",title:"@backstage/plugin-app-node",description:"API Reference for @backstage/plugin-app-node"}},o={},d=[{value:"Functions",id:"functions",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Variables",id:"variables",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-app-node",children:(0,r.jsx)(n.code,{children:"@backstage/plugin-app-node"})})]}),"\n",(0,r.jsx)(n.p,{children:"Node.js library for the app plugin."}),"\n",(0,r.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Function"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-app-node.loadcompiledconfigschema",children:"loadCompiledConfigSchema(appDistDir)"})}),(0,r.jsx)(n.td,{children:"Loads the config schema that is embedded in the frontend build."})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"interfaces",children:"Interfaces"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Interface"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-app-node.configschemaextensionpoint",children:"ConfigSchemaExtensionPoint"})}),(0,r.jsxs)(n.td,{children:["The interface for ",(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-app-node.configschemaextensionpoint",children:"configSchemaExtensionPoint"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-app-node.staticfallbackhandlerextensionpoint",children:"StaticFallbackHandlerExtensionPoint"})}),(0,r.jsxs)(n.td,{children:["The interface for ",(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-app-node.staticfallbackhandlerextensionpoint",children:"staticFallbackHandlerExtensionPoint"}),"."]})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"variables",children:"Variables"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Variable"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-app-node.configschemaextensionpoint",children:"configSchemaExtensionPoint"})}),(0,r.jsx)(n.td,{children:"An extension point the exposes the ability to override the config schema used by the frontend application."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-app-node.staticfallbackhandlerextensionpoint",children:"staticFallbackHandlerExtensionPoint"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.p,{children:"An extension point the exposes the ability to configure a static fallback handler for the app backend."}),(0,r.jsx)(n.p,{children:"The static fallback handler is a request handler to handle requests for static content that is not present in the app bundle."}),(0,r.jsx)(n.p,{children:"This can be used to avoid issues with clients on older deployment versions trying to access lazy loaded content that is no longer present. Typically the requests would fall back to a long-term object store where all recently deployed versions of the app are present."}),(0,r.jsxs)(n.p,{children:["Another option is to provide a ",(0,r.jsx)(n.code,{children:"database"})," that will take care of storing the static assets instead."]}),(0,r.jsxs)(n.p,{children:["If both ",(0,r.jsx)(n.code,{children:"database"})," and ",(0,r.jsx)(n.code,{children:"staticFallbackHandler"})," are provided, the ",(0,r.jsx)(n.code,{children:"database"})," will attempt to serve static assets first, and if they are not found, the ",(0,r.jsx)(n.code,{children:"staticFallbackHandler"})," will be called."]})]})]})]})]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},675251:(e,n,t)=>{var r=t(667294),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var r,i={},d=null,l=null;for(r in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)a.call(n,r)&&!o.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:s,type:e,key:d,ref:l,props:i,_owner:c.current}}n.Fragment=i,n.jsx=d,n.jsxs=d},785893:(e,n,t)=>{e.exports=t(675251)},511151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>a});var r=t(667294);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);