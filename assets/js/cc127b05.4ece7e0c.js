/*! For license information please see cc127b05.4ece7e0c.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[908924],{725933:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=n(785893),i=n(511151);const o={id:"plugin-catalog-backend-module-incremental-ingestion.entityiteratorresult",title:"EntityIteratorResult",description:"API reference for EntityIteratorResult"},c=void 0,a={id:"reference/plugin-catalog-backend-module-incremental-ingestion.entityiteratorresult",title:"EntityIteratorResult",description:"API reference for EntityIteratorResult",source:"@site/../docs/reference/plugin-catalog-backend-module-incremental-ingestion.entityiteratorresult.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend-module-incremental-ingestion.entityiteratorresult",permalink:"/docs/next/reference/plugin-catalog-backend-module-incremental-ingestion.entityiteratorresult",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog-backend-module-incremental-ingestion.entityiteratorresult.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-backend-module-incremental-ingestion.entityiteratorresult",title:"EntityIteratorResult",description:"API reference for EntityIteratorResult"}},s={},l=[];function d(e){const t={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/plugin-catalog-backend-module-incremental-ingestion",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-catalog-backend-module-incremental-ingestion"})})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/plugin-catalog-backend-module-incremental-ingestion.entityiteratorresult",children:(0,r.jsx)(t.code,{children:"EntityIteratorResult"})})]}),"\n",(0,r.jsxs)(t.p,{children:["Value returned by an ",(0,r.jsx)(t.a,{href:"/docs/next/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovider",children:"IncrementalEntityProvider"})," to provide a single page of entities to ingest."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"export type EntityIteratorResult<T> = {\n    done: false;\n    entities: DeferredEntity[];\n    cursor: T;\n} | {\n    done: true;\n    entities?: DeferredEntity[];\n    cursor?: T;\n};\n"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"References:"})," ",(0,r.jsx)(t.a,{href:"/docs/next/reference/plugin-catalog-node.deferredentity",children:"DeferredEntity"})]})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},675251:(e,t,n)=>{var r=n(667294),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,o={},l=null,d=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)c.call(t,r)&&!s.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:i,type:e,key:l,ref:d,props:o,_owner:a.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},785893:(e,t,n)=>{e.exports=n(675251)},511151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>c});var r=n(667294);const i={},o=r.createContext(i);function c(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);