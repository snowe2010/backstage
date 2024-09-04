/*! For license information please see 67eb61ff.5cec4dbc.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[835972],{206063:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var i=n(785893),s=n(511151);const t={id:"backend-plugin-api.discoveryservice",title:"DiscoveryService",description:"API reference for DiscoveryService"},c=void 0,o={id:"reference/backend-plugin-api.discoveryservice",title:"DiscoveryService",description:"API reference for DiscoveryService",source:"@site/versioned_docs/version-stable/reference/backend-plugin-api.discoveryservice.md",sourceDirName:"reference",slug:"/reference/backend-plugin-api.discoveryservice",permalink:"/docs/reference/backend-plugin-api.discoveryservice",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/backend-plugin-api.discoveryservice.md",tags:[],version:"stable",frontMatter:{id:"backend-plugin-api.discoveryservice",title:"DiscoveryService",description:"API reference for DiscoveryService"}},a={},d=[{value:"Remarks",id:"remarks",level:2},{value:"Methods",id:"methods",level:2}];function l(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,i.jsx)(r.a,{href:"/docs/reference/backend-plugin-api",children:(0,i.jsx)(r.code,{children:"@backstage/backend-plugin-api"})})," > ",(0,i.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.discoveryservice",children:(0,i.jsx)(r.code,{children:"DiscoveryService"})})]}),"\n",(0,i.jsx)(r.p,{children:"The DiscoveryService is used to provide a mechanism for backend plugins to discover the endpoints for itself or other backend plugins."}),"\n",(0,i.jsxs)(r.p,{children:["See the ",(0,i.jsx)(r.a,{href:"https://backstage.io/docs/backend-system/core-services/discovery",children:"service documentation"})," for more details."]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"export interface DiscoveryService \n"})}),"\n",(0,i.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,i.jsx)(r.p,{children:"The purpose of the discovery API is to allow for many different deployment setups and routing methods through a central configuration, instead of letting each individual plugin manage that configuration."}),"\n",(0,i.jsx)(r.p,{children:"Implementations of the discovery API can be as simple as a URL pattern using the pluginId, but could also have overrides for individual plugins, or query a separate discovery service."}),"\n",(0,i.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Method"}),(0,i.jsx)(r.th,{children:"Description"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.discoveryservice.getbaseurl",children:"getBaseUrl(pluginId)"})}),(0,i.jsx)(r.td,{children:"Returns the internal HTTP base URL for a given plugin, without a trailing slash."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.discoveryservice.getexternalbaseurl",children:"getExternalBaseUrl(pluginId)"})}),(0,i.jsx)(r.td,{children:"Returns the external HTTP base backend URL for a given plugin, without a trailing slash."})]})]})]})]})}function p(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},675251:(e,r,n)=>{var i=n(667294),s=Symbol.for("react.element"),t=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,n){var i,t={},d=null,l=null;for(i in void 0!==n&&(d=""+n),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(l=r.ref),r)c.call(r,i)&&!a.hasOwnProperty(i)&&(t[i]=r[i]);if(e&&e.defaultProps)for(i in r=e.defaultProps)void 0===t[i]&&(t[i]=r[i]);return{$$typeof:s,type:e,key:d,ref:l,props:t,_owner:o.current}}r.Fragment=t,r.jsx=d,r.jsxs=d},785893:(e,r,n)=>{e.exports=n(675251)},511151:(e,r,n)=>{n.d(r,{Z:()=>o,a:()=>c});var i=n(667294);const s={},t=i.createContext(s);function c(e){const r=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(t.Provider,{value:r},e.children)}}}]);