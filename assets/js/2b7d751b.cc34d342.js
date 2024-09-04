/*! For license information please see 2b7d751b.cc34d342.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[178604],{374828:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>i});var t=n(785893),c=n(511151);const o={id:"plugin-search-backend-node.decoratorbase.decorate",title:"DecoratorBase.decorate()",description:"API reference for DecoratorBase.decorate()"},d=void 0,a={id:"reference/plugin-search-backend-node.decoratorbase.decorate",title:"DecoratorBase.decorate()",description:"API reference for DecoratorBase.decorate()",source:"@site/../docs/reference/plugin-search-backend-node.decoratorbase.decorate.md",sourceDirName:"reference",slug:"/reference/plugin-search-backend-node.decoratorbase.decorate",permalink:"/docs/next/reference/plugin-search-backend-node.decoratorbase.decorate",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-search-backend-node.decoratorbase.decorate.md",tags:[],version:"current",frontMatter:{id:"plugin-search-backend-node.decoratorbase.decorate",title:"DecoratorBase.decorate()",description:"API reference for DecoratorBase.decorate()"}},s={},i=[{value:"Parameters",id:"parameters",level:2}];function l(e){const r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-search-backend-node",children:(0,t.jsx)(r.code,{children:"@backstage/plugin-search-backend-node"})})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-search-backend-node.decoratorbase",children:(0,t.jsx)(r.code,{children:"DecoratorBase"})})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-search-backend-node.decoratorbase.decorate",children:(0,t.jsx)(r.code,{children:"decorate"})})]}),"\n",(0,t.jsx)(r.p,{children:"Receives a single indexable document. In your decorate method, you can:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Resolve ",(0,t.jsx)(r.code,{children:"undefined"})," to indicate the record should be omitted. - Resolve a single modified document, which could contain new fields, edited fields, or removed fields. - Resolve an array of indexable documents, if the purpose if the decorator is to convert one document into multiple derivative documents."]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"abstract decorate(document: IndexableDocument): Promise<IndexableDocument | IndexableDocument[] | undefined>;\n"})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Parameter"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"document"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-search-common.indexabledocument",children:"IndexableDocument"})}),(0,t.jsx)(r.td,{})]})})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,t.jsxs)(r.p,{children:["Promise<",(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-search-common.indexabledocument",children:"IndexableDocument"})," | ",(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-search-common.indexabledocument",children:"IndexableDocument"}),"[] | undefined>"]})]})}function h(e={}){const{wrapper:r}={...(0,c.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},675251:(e,r,n)=>{var t=n(667294),c=Symbol.for("react.element"),o=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,n){var t,o={},i=null,l=null;for(t in void 0!==n&&(i=""+n),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(l=r.ref),r)d.call(r,t)&&!s.hasOwnProperty(t)&&(o[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===o[t]&&(o[t]=r[t]);return{$$typeof:c,type:e,key:i,ref:l,props:o,_owner:a.current}}r.Fragment=o,r.jsx=i,r.jsxs=i},785893:(e,r,n)=>{e.exports=n(675251)},511151:(e,r,n)=>{n.d(r,{Z:()=>a,a:()=>d});var t=n(667294);const c={},o=t.createContext(c);function d(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);