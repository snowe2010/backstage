/*! For license information please see 8a6de376.8f2b5e26.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[833738],{658923:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var n=r(785893),s=r(511151);const a={id:"backend-plugin-api.resolvesafechildpath",title:"resolveSafeChildPath()",description:"API reference for resolveSafeChildPath()"},i=void 0,o={id:"reference/backend-plugin-api.resolvesafechildpath",title:"resolveSafeChildPath()",description:"API reference for resolveSafeChildPath()",source:"@site/../docs/reference/backend-plugin-api.resolvesafechildpath.md",sourceDirName:"reference",slug:"/reference/backend-plugin-api.resolvesafechildpath",permalink:"/docs/next/reference/backend-plugin-api.resolvesafechildpath",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-plugin-api.resolvesafechildpath.md",tags:[],version:"current",frontMatter:{id:"backend-plugin-api.resolvesafechildpath",title:"resolveSafeChildPath()",description:"API reference for resolveSafeChildPath()"}},c={},l=[{value:"Parameters",id:"parameters",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/next/reference/backend-plugin-api",children:(0,n.jsx)(t.code,{children:"@backstage/backend-plugin-api"})})," > ",(0,n.jsx)(t.a,{href:"/docs/next/reference/backend-plugin-api.resolvesafechildpath",children:(0,n.jsx)(t.code,{children:"resolveSafeChildPath"})})]}),"\n",(0,n.jsx)(t.p,{children:"Resolves a target path from a base path while guaranteeing that the result is a path that point to or within the base path. This is useful for resolving paths from user input, as it otherwise opens up for vulnerabilities."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"function resolveSafeChildPath(base: string, path: string): string;\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"base"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"The base directory to resolve the path from."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"path"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"The target path, relative or absolute"})]})]})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(t.p,{children:"string"}),"\n",(0,n.jsx)(t.p,{children:"A path that is guaranteed to point to or within the base path."})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},675251:(e,t,r)=>{var n=r(667294),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,a={},l=null,d=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,n)&&!c.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:s,type:e,key:l,ref:d,props:a,_owner:o.current}}t.Fragment=a,t.jsx=l,t.jsxs=l},785893:(e,t,r)=>{e.exports=r(675251)},511151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>i});var n=r(667294);const s={},a=n.createContext(s);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);