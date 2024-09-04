/*! For license information please see 960b7362.3074d8ff.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[120021],{326601:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>a});var t=n(785893),c=n(511151);const o={id:"core-plugin-api.apifactory",title:"ApiFactory",description:"API reference for ApiFactory"},i=void 0,s={id:"reference/core-plugin-api.apifactory",title:"ApiFactory",description:"API reference for ApiFactory",source:"@site/../docs/reference/core-plugin-api.apifactory.md",sourceDirName:"reference",slug:"/reference/core-plugin-api.apifactory",permalink:"/docs/next/reference/core-plugin-api.apifactory",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-plugin-api.apifactory.md",tags:[],version:"current",frontMatter:{id:"core-plugin-api.apifactory",title:"ApiFactory",description:"API reference for ApiFactory"}},p={},a=[];function f(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/core-plugin-api",children:(0,t.jsx)(r.code,{children:"@backstage/core-plugin-api"})})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/core-plugin-api.apifactory",children:(0,t.jsx)(r.code,{children:"ApiFactory"})})]}),"\n",(0,t.jsx)(r.p,{children:"Describes type returning API implementations."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"export type ApiFactory<Api, Impl extends Api, Deps extends {\n    [name in string]: unknown;\n}> = {\n    api: ApiRef<Api>;\n    deps: TypesToApiRefs<Deps>;\n    factory(deps: Deps): Impl;\n};\n"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"References:"})," ",(0,t.jsx)(r.a,{href:"/docs/next/reference/core-plugin-api.apiref",children:"ApiRef"}),", ",(0,t.jsx)(r.a,{href:"/docs/next/reference/core-plugin-api.typestoapirefs",children:"TypesToApiRefs"})]})]})}function l(e={}){const{wrapper:r}={...(0,c.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},675251:(e,r,n)=>{var t=n(667294),c=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,n){var t,o={},a=null,f=null;for(t in void 0!==n&&(a=""+n),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(f=r.ref),r)i.call(r,t)&&!p.hasOwnProperty(t)&&(o[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===o[t]&&(o[t]=r[t]);return{$$typeof:c,type:e,key:a,ref:f,props:o,_owner:s.current}}r.Fragment=o,r.jsx=a,r.jsxs=a},785893:(e,r,n)=>{e.exports=n(675251)},511151:(e,r,n)=>{n.d(r,{Z:()=>s,a:()=>i});var t=n(667294);const c={},o=t.createContext(c);function i(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);