/*! For license information please see 2c05f2c6.503ae703.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[550114],{809037:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=r(785893),i=r(511151);const s={id:"catalog-client.queryentitiesinitialrequest",title:"QueryEntitiesInitialRequest",description:"API reference for QueryEntitiesInitialRequest"},c=void 0,o={id:"reference/catalog-client.queryentitiesinitialrequest",title:"QueryEntitiesInitialRequest",description:"API reference for QueryEntitiesInitialRequest",source:"@site/versioned_docs/version-stable/reference/catalog-client.queryentitiesinitialrequest.md",sourceDirName:"reference",slug:"/reference/catalog-client.queryentitiesinitialrequest",permalink:"/docs/reference/catalog-client.queryentitiesinitialrequest",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/catalog-client.queryentitiesinitialrequest.md",tags:[],version:"stable",frontMatter:{id:"catalog-client.queryentitiesinitialrequest",title:"QueryEntitiesInitialRequest",description:"API reference for QueryEntitiesInitialRequest"}},a={},l=[];function u(e){const t={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/catalog-client",children:(0,n.jsx)(t.code,{children:"@backstage/catalog-client"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/catalog-client.queryentitiesinitialrequest",children:(0,n.jsx)(t.code,{children:"QueryEntitiesInitialRequest"})})]}),"\n",(0,n.jsxs)(t.p,{children:["A request type for ",(0,n.jsx)(t.a,{href:"/docs/reference/catalog-client.catalogclient.queryentities",children:"CatalogClient.queryEntities()"}),". The method takes this type in an initial pagination request, when requesting the first batch of entities."]}),"\n",(0,n.jsx)(t.p,{children:"The properties filter, sortField, query and sortFieldOrder, are going to be immutable for the entire lifecycle of the following requests."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"export type QueryEntitiesInitialRequest = {\n    fields?: string[];\n    limit?: number;\n    filter?: EntityFilterQuery;\n    orderFields?: EntityOrderQuery;\n    fullTextFilter?: {\n        term: string;\n        fields?: string[];\n    };\n};\n"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"References:"})," ",(0,n.jsx)(t.a,{href:"/docs/reference/catalog-client.entityfilterquery",children:"EntityFilterQuery"}),", ",(0,n.jsx)(t.a,{href:"/docs/reference/catalog-client.entityorderquery",children:"EntityOrderQuery"})]})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},675251:(e,t,r)=>{var n=r(667294),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,s={},l=null,u=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)c.call(t,n)&&!a.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:i,type:e,key:l,ref:u,props:s,_owner:o.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},785893:(e,t,r)=>{e.exports=r(675251)},511151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>c});var n=r(667294);const i={},s=n.createContext(i);function c(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);