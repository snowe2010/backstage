/*! For license information please see 68776ec3.12a32561.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[408925],{563835:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>i});var n=r(785893),a=r(511151);const d={id:"backend-dev-utils.devdatastore.load",title:"DevDataStore.load()",description:"API reference for DevDataStore.load()"},s=void 0,o={id:"reference/backend-dev-utils.devdatastore.load",title:"DevDataStore.load()",description:"API reference for DevDataStore.load()",source:"@site/versioned_docs/version-stable/reference/backend-dev-utils.devdatastore.load.md",sourceDirName:"reference",slug:"/reference/backend-dev-utils.devdatastore.load",permalink:"/docs/reference/backend-dev-utils.devdatastore.load",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/backend-dev-utils.devdatastore.load.md",tags:[],version:"stable",frontMatter:{id:"backend-dev-utils.devdatastore.load",title:"DevDataStore.load()",description:"API reference for DevDataStore.load()"}},c={},i=[{value:"Parameters",id:"parameters",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/backend-dev-utils",children:(0,n.jsx)(t.code,{children:"@backstage/backend-dev-utils"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/backend-dev-utils.devdatastore",children:(0,n.jsx)(t.code,{children:"DevDataStore"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/backend-dev-utils.devdatastore.load",children:(0,n.jsx)(t.code,{children:"load"})})]}),"\n",(0,n.jsx)(t.p,{children:"Loads data from the data store."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"load<T>(key: string): Promise<{\n        loaded: boolean;\n        data: T;\n    }>;\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"key"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"The key used to identify the data."})]})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(t.p,{children:"Promise<{ loaded: boolean; data: T; }>"}),"\n",(0,n.jsx)(t.p,{children:"A promise that resolves to a result object that indicates whether the data was loaded, as well as the data."})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},675251:(e,t,r)=>{var n=r(667294),a=Symbol.for("react.element"),d=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,r){var n,d={},i=null,l=null;for(n in void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,n)&&!c.hasOwnProperty(n)&&(d[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===d[n]&&(d[n]=t[n]);return{$$typeof:a,type:e,key:i,ref:l,props:d,_owner:o.current}}t.Fragment=d,t.jsx=i,t.jsxs=i},785893:(e,t,r)=>{e.exports=r(675251)},511151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>s});var n=r(667294);const a={},d=n.createContext(a);function s(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);