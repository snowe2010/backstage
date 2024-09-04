/*! For license information please see 4645f1e1.455c6cc0.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[209235],{793836:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>a});var r=n(785893),o=n(511151);const c={id:"core-plugin-api.elementcollection.selectbycomponentdata",title:"ElementCollection.selectByComponentData()",description:"API reference for ElementCollection.selectByComponentData()"},l=void 0,i={id:"reference/core-plugin-api.elementcollection.selectbycomponentdata",title:"ElementCollection.selectByComponentData()",description:"API reference for ElementCollection.selectByComponentData()",source:"@site/../docs/reference/core-plugin-api.elementcollection.selectbycomponentdata.md",sourceDirName:"reference",slug:"/reference/core-plugin-api.elementcollection.selectbycomponentdata",permalink:"/docs/next/reference/core-plugin-api.elementcollection.selectbycomponentdata",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-plugin-api.elementcollection.selectbycomponentdata.md",tags:[],version:"current",frontMatter:{id:"core-plugin-api.elementcollection.selectbycomponentdata",title:"ElementCollection.selectByComponentData()",description:"API reference for ElementCollection.selectByComponentData()"}},s={},a=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/core-plugin-api",children:(0,r.jsx)(t.code,{children:"@backstage/core-plugin-api"})})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/core-plugin-api.elementcollection",children:(0,r.jsx)(t.code,{children:"ElementCollection"})})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/core-plugin-api.elementcollection.selectbycomponentdata",children:(0,r.jsx)(t.code,{children:"selectByComponentData"})})]}),"\n",(0,r.jsxs)(t.p,{children:["Narrows the set of selected components by doing a deep traversal and only including those that have defined component data for the given ",(0,r.jsx)(t.code,{children:"key"}),"."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"selectByComponentData(query: {\n        key: string;\n        withStrictError?: string;\n    }): ElementCollection;\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"query"}),(0,r.jsx)(t.td,{children:"{ key: string; withStrictError?: string; }"}),(0,r.jsx)(t.td,{children:"Filtering query."})]})})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/next/reference/core-plugin-api.elementcollection",children:"ElementCollection"})}),"\n",(0,r.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsxs)(t.p,{children:["Whether an element in the tree has component data set for the given key is determined by whether ",(0,r.jsx)(t.code,{children:"getComponentData"})," returns undefined."]}),"\n",(0,r.jsx)(t.p,{children:"The traversal does not continue deeper past elements that match the criteria, and it also includes the root children in the selection, meaning that if the, of all the currently selected elements contain data for the given key, this method is a no-op."}),"\n",(0,r.jsxs)(t.p,{children:["If ",(0,r.jsx)(t.code,{children:"withStrictError"})," is set, the resulting selection must be a full match, meaning there may be no elements that were excluded in the selection. If the selection is not a clean match, an error will be throw with ",(0,r.jsx)(t.code,{children:"withStrictError"})," as the message."]})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},675251:(e,t,n)=>{var r=n(667294),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,n){var r,c={},a=null,d=null;for(r in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(d=t.ref),t)l.call(t,r)&&!s.hasOwnProperty(r)&&(c[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===c[r]&&(c[r]=t[r]);return{$$typeof:o,type:e,key:a,ref:d,props:c,_owner:i.current}}t.Fragment=c,t.jsx=a,t.jsxs=a},785893:(e,t,n)=>{e.exports=n(675251)},511151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>l});var r=n(667294);const o={},c=r.createContext(o);function l(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);