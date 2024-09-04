/*! For license information please see 55d4349a.44ac2a3e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[617683],{759360:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>c,toc:()=>i});var a=t(785893),s=t(511151);const n={id:"core-app-api.localstoragefeatureflags",title:"LocalStorageFeatureFlags",description:"API reference for LocalStorageFeatureFlags"},o=void 0,c={id:"reference/core-app-api.localstoragefeatureflags",title:"LocalStorageFeatureFlags",description:"API reference for LocalStorageFeatureFlags",source:"@site/../docs/reference/core-app-api.localstoragefeatureflags.md",sourceDirName:"reference",slug:"/reference/core-app-api.localstoragefeatureflags",permalink:"/docs/next/reference/core-app-api.localstoragefeatureflags",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-app-api.localstoragefeatureflags.md",tags:[],version:"current",frontMatter:{id:"core-app-api.localstoragefeatureflags",title:"LocalStorageFeatureFlags",description:"API reference for LocalStorageFeatureFlags"}},l={},i=[{value:"Methods",id:"methods",level:2}];function d(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,a.jsx)(r.a,{href:"/docs/next/reference/core-app-api",children:(0,a.jsx)(r.code,{children:"@backstage/core-app-api"})})," > ",(0,a.jsx)(r.a,{href:"/docs/next/reference/core-app-api.localstoragefeatureflags",children:(0,a.jsx)(r.code,{children:"LocalStorageFeatureFlags"})})]}),"\n",(0,a.jsx)(r.p,{children:"A feature flags implementation that stores the flags in the browser's local storage."}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-typescript",children:"class LocalStorageFeatureFlags implements FeatureFlagsApi \n"})}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"Implements:"})," ",(0,a.jsx)(r.a,{href:"/docs/next/reference/core-plugin-api.featureflagsapi",children:"FeatureFlagsApi"})]}),"\n",(0,a.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Method"}),(0,a.jsx)(r.th,{children:"Modifiers"}),(0,a.jsx)(r.th,{children:"Description"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.a,{href:"/docs/next/reference/core-app-api.localstoragefeatureflags.getregisteredflags",children:"getRegisteredFlags()"})}),(0,a.jsx)(r.td,{}),(0,a.jsx)(r.td,{})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.a,{href:"/docs/next/reference/core-app-api.localstoragefeatureflags.isactive",children:"isActive(name)"})}),(0,a.jsx)(r.td,{}),(0,a.jsx)(r.td,{})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.a,{href:"/docs/next/reference/core-app-api.localstoragefeatureflags.registerflag",children:"registerFlag(flag)"})}),(0,a.jsx)(r.td,{}),(0,a.jsx)(r.td,{})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.a,{href:"/docs/next/reference/core-app-api.localstoragefeatureflags.save",children:"save(options)"})}),(0,a.jsx)(r.td,{}),(0,a.jsx)(r.td,{})]})]})]})]})}function p(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},675251:(e,r,t)=>{var a=t(667294),s=Symbol.for("react.element"),n=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,t){var a,n={},i=null,d=null;for(a in void 0!==t&&(i=""+t),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(d=r.ref),r)o.call(r,a)&&!l.hasOwnProperty(a)&&(n[a]=r[a]);if(e&&e.defaultProps)for(a in r=e.defaultProps)void 0===n[a]&&(n[a]=r[a]);return{$$typeof:s,type:e,key:i,ref:d,props:n,_owner:c.current}}r.Fragment=n,r.jsx=i,r.jsxs=i},785893:(e,r,t)=>{e.exports=t(675251)},511151:(e,r,t)=>{t.d(r,{Z:()=>c,a:()=>o});var a=t(667294);const s={},n=a.createContext(s);function o(e){const r=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(n.Provider,{value:r},e.children)}}}]);