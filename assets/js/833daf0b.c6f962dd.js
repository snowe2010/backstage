/*! For license information please see 833daf0b.c6f962dd.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[284922],{673059:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=t(785893),c=t(511151);const o={id:"core-compat-api.convertlegacyrouteref",title:"convertLegacyRouteRef()",description:"API reference for convertLegacyRouteRef()"},a=void 0,s={id:"reference/core-compat-api.convertlegacyrouteref",title:"convertLegacyRouteRef()",description:"API reference for convertLegacyRouteRef()",source:"@site/versioned_docs/version-stable/reference/core-compat-api.convertlegacyrouteref.md",sourceDirName:"reference",slug:"/reference/core-compat-api.convertlegacyrouteref",permalink:"/docs/reference/core-compat-api.convertlegacyrouteref",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/core-compat-api.convertlegacyrouteref.md",tags:[],version:"stable",frontMatter:{id:"core-compat-api.convertlegacyrouteref",title:"convertLegacyRouteRef()",description:"API reference for convertLegacyRouteRef()"}},i={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function l(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/core-compat-api",children:(0,n.jsx)(r.code,{children:"@backstage/core-compat-api"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/core-compat-api.convertlegacyrouteref",children:(0,n.jsx)(r.code,{children:"convertLegacyRouteRef"})})]}),"\n",(0,n.jsx)(r.p,{children:"A temporary helper to convert a legacy route ref to the new system."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"function convertLegacyRouteRef<TParams extends AnyRouteRefParams>(ref: LegacyRouteRef<TParams>): RouteRef<TParams>;\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ref"}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api.routeref",children:"LegacyRouteRef"}),"<TParams>"]}),(0,n.jsx)(r.td,{})]})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/frontend-plugin-api.routeref",children:"RouteRef"}),"<TParams>"]}),"\n",(0,n.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsx)(r.p,{children:"In the future the legacy createRouteRef will instead create refs compatible with both systems."})]})}function f(e={}){const{wrapper:r}={...(0,c.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},675251:(e,r,t)=>{var n=t(667294),c=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,t){var n,o={},d=null,l=null;for(n in void 0!==t&&(d=""+t),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(l=r.ref),r)a.call(r,n)&&!i.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===o[n]&&(o[n]=r[n]);return{$$typeof:c,type:e,key:d,ref:l,props:o,_owner:s.current}}r.Fragment=o,r.jsx=d,r.jsxs=d},785893:(e,r,t)=>{e.exports=t(675251)},511151:(e,r,t)=>{t.d(r,{Z:()=>s,a:()=>a});var n=t(667294);const c={},o=n.createContext(c);function a(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);