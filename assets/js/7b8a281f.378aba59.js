/*! For license information please see 7b8a281f.378aba59.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[62952],{498484:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>i});var n=r(785893),s=r(511151);const d={id:"backend-dev-utils.devdatastore",title:"DevDataStore",description:"API reference for DevDataStore"},a=void 0,o={id:"reference/backend-dev-utils.devdatastore",title:"DevDataStore",description:"API reference for DevDataStore",source:"@site/versioned_docs/version-stable/reference/backend-dev-utils.devdatastore.md",sourceDirName:"reference",slug:"/reference/backend-dev-utils.devdatastore",permalink:"/docs/reference/backend-dev-utils.devdatastore",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/backend-dev-utils.devdatastore.md",tags:[],version:"stable",frontMatter:{id:"backend-dev-utils.devdatastore",title:"DevDataStore",description:"API reference for DevDataStore"}},c={},i=[{value:"Methods",id:"methods",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/backend-dev-utils",children:(0,n.jsx)(t.code,{children:"@backstage/backend-dev-utils"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/backend-dev-utils.devdatastore",children:(0,n.jsx)(t.code,{children:"DevDataStore"})})]}),"\n",(0,n.jsx)(t.p,{children:"A data store that can be used to store temporary data during development."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"class DevDataStore \n"})}),"\n",(0,n.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Method"}),(0,n.jsx)(t.th,{children:"Modifiers"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/backend-dev-utils.devdatastore.get",children:"get()"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"static"})}),(0,n.jsxs)(t.td,{children:["Tries to acquire a DevDataStore instance. This will only succeed when the backend process is being run through the ",(0,n.jsx)(t.code,{children:"@backstage/cli"})," in development mode."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/backend-dev-utils.devdatastore.load",children:"load(key)"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Loads data from the data store."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/backend-dev-utils.devdatastore.save",children:"save(key, data)"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Save data to the data store."})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},675251:(e,t,r)=>{var n=r(667294),s=Symbol.for("react.element"),d=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,r){var n,d={},i=null,l=null;for(n in void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(l=t.ref),t)a.call(t,n)&&!c.hasOwnProperty(n)&&(d[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===d[n]&&(d[n]=t[n]);return{$$typeof:s,type:e,key:i,ref:l,props:d,_owner:o.current}}t.Fragment=d,t.jsx=i,t.jsxs=i},785893:(e,t,r)=>{e.exports=r(675251)},511151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>a});var n=r(667294);const s={},d=n.createContext(s);function a(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);