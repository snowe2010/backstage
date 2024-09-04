/*! For license information please see 23989a56.bdcf313e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[514166],{101125:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>t,metadata:()=>i,toc:()=>p});var a=n(785893),s=n(511151);const t={id:"backend-plugin-api.backstageuserprincipal",title:"BackstageUserPrincipal",description:"API reference for BackstageUserPrincipal"},c=void 0,i={id:"reference/backend-plugin-api.backstageuserprincipal",title:"BackstageUserPrincipal",description:"API reference for BackstageUserPrincipal",source:"@site/versioned_docs/version-stable/reference/backend-plugin-api.backstageuserprincipal.md",sourceDirName:"reference",slug:"/reference/backend-plugin-api.backstageuserprincipal",permalink:"/docs/reference/backend-plugin-api.backstageuserprincipal",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/backend-plugin-api.backstageuserprincipal.md",tags:[],version:"stable",frontMatter:{id:"backend-plugin-api.backstageuserprincipal",title:"BackstageUserPrincipal",description:"API reference for BackstageUserPrincipal"}},o={},p=[{value:"Remarks",id:"remarks",level:2}];function l(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,a.jsx)(r.a,{href:"/docs/reference/backend-plugin-api",children:(0,a.jsx)(r.code,{children:"@backstage/backend-plugin-api"})})," > ",(0,a.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.backstageuserprincipal",children:(0,a.jsx)(r.code,{children:"BackstageUserPrincipal"})})]}),"\n",(0,a.jsx)(r.p,{children:"Represents a user principal (for example when a user Backstage token issued by the auth backend was given to a request)."}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-typescript",children:"export type BackstageUserPrincipal = {\n    type: 'user';\n    userEntityRef: string;\n};\n"})}),"\n",(0,a.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,a.jsxs)(r.p,{children:["Additional information about the user can be fetched using the ",(0,a.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.userinfoservice",children:"UserInfoService"}),"."]})]})}function d(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},675251:(e,r,n)=>{var a=n(667294),s=Symbol.for("react.element"),t=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function p(e,r,n){var a,t={},p=null,l=null;for(a in void 0!==n&&(p=""+n),void 0!==r.key&&(p=""+r.key),void 0!==r.ref&&(l=r.ref),r)c.call(r,a)&&!o.hasOwnProperty(a)&&(t[a]=r[a]);if(e&&e.defaultProps)for(a in r=e.defaultProps)void 0===t[a]&&(t[a]=r[a]);return{$$typeof:s,type:e,key:p,ref:l,props:t,_owner:i.current}}r.Fragment=t,r.jsx=p,r.jsxs=p},785893:(e,r,n)=>{e.exports=n(675251)},511151:(e,r,n)=>{n.d(r,{Z:()=>i,a:()=>c});var a=n(667294);const s={},t=a.createContext(s);function c(e){const r=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),a.createElement(t.Provider,{value:r},e.children)}}}]);