/*! For license information please see f14c7f06.caefb63f.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[439178],{817454:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var n=o(785893),t=o(511151);const i={id:"plugin-catalog-backend-module-msgraph.providerconfigtransformer",title:"ProviderConfigTransformer",description:"API reference for ProviderConfigTransformer"},s=void 0,a={id:"reference/plugin-catalog-backend-module-msgraph.providerconfigtransformer",title:"ProviderConfigTransformer",description:"API reference for ProviderConfigTransformer",source:"@site/versioned_docs/version-stable/reference/plugin-catalog-backend-module-msgraph.providerconfigtransformer.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend-module-msgraph.providerconfigtransformer",permalink:"/docs/reference/plugin-catalog-backend-module-msgraph.providerconfigtransformer",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-catalog-backend-module-msgraph.providerconfigtransformer.md",tags:[],version:"stable",frontMatter:{id:"plugin-catalog-backend-module-msgraph.providerconfigtransformer",title:"ProviderConfigTransformer",description:"API reference for ProviderConfigTransformer"}},c={},d=[];function f(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-msgraph",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-catalog-backend-module-msgraph"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-msgraph.providerconfigtransformer",children:(0,n.jsx)(r.code,{children:"ProviderConfigTransformer"})})]}),"\n",(0,n.jsx)(r.p,{children:"Customize the MSGraph Provider Config Dynamically"}),"\n",(0,n.jsx)(r.p,{children:"Transforming fields that are not used for each scheduled ingestion (e.g., id, schedule) will have no effect."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"export type ProviderConfigTransformer = (provider: MicrosoftGraphProviderConfig) => Promise<MicrosoftGraphProviderConfig>;\n"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"References:"})," ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-msgraph.microsoftgraphproviderconfig",children:"MicrosoftGraphProviderConfig"})]})]})}function l(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},675251:(e,r,o)=>{var n=o(667294),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,o){var n,i={},d=null,f=null;for(n in void 0!==o&&(d=""+o),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(f=r.ref),r)s.call(r,n)&&!c.hasOwnProperty(n)&&(i[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===i[n]&&(i[n]=r[n]);return{$$typeof:t,type:e,key:d,ref:f,props:i,_owner:a.current}}r.Fragment=i,r.jsx=d,r.jsxs=d},785893:(e,r,o)=>{e.exports=o(675251)},511151:(e,r,o)=>{o.d(r,{Z:()=>a,a:()=>s});var n=o(667294);const t={},i=n.createContext(t);function s(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);