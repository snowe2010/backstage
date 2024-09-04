/*! For license information please see 9471776c.dcb32eea.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[564811],{871304:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=t(785893),s=t(511151);const o={id:"plugin-auth-node.authresolvercataloguserquery",title:"AuthResolverCatalogUserQuery",description:"API reference for AuthResolverCatalogUserQuery"},a=void 0,i={id:"reference/plugin-auth-node.authresolvercataloguserquery",title:"AuthResolverCatalogUserQuery",description:"API reference for AuthResolverCatalogUserQuery",source:"@site/versioned_docs/version-stable/reference/plugin-auth-node.authresolvercataloguserquery.md",sourceDirName:"reference",slug:"/reference/plugin-auth-node.authresolvercataloguserquery",permalink:"/docs/reference/plugin-auth-node.authresolvercataloguserquery",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-auth-node.authresolvercataloguserquery.md",tags:[],version:"stable",frontMatter:{id:"plugin-auth-node.authresolvercataloguserquery",title:"AuthResolverCatalogUserQuery",description:"API reference for AuthResolverCatalogUserQuery"}},l={},c=[];function u(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-auth-node",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-auth-node"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-auth-node.authresolvercataloguserquery",children:(0,n.jsx)(r.code,{children:"AuthResolverCatalogUserQuery"})})]}),"\n",(0,n.jsx)(r.p,{children:"A query for a single user in the catalog."}),"\n",(0,n.jsxs)(r.p,{children:["If ",(0,n.jsx)(r.code,{children:"entityRef"})," is used, the default kind is ",(0,n.jsx)(r.code,{children:"'User'"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["If ",(0,n.jsx)(r.code,{children:"annotations"})," are used, all annotations must be present and match the provided value exactly. Only entities of kind ",(0,n.jsx)(r.code,{children:"'User'"})," will be considered."]}),"\n",(0,n.jsxs)(r.p,{children:["If ",(0,n.jsx)(r.code,{children:"filter"})," are used, only entities of kind ",(0,n.jsx)(r.code,{children:"'User'"})," will be considered unless it is explicitly specified differently in the filter."]}),"\n",(0,n.jsx)(r.p,{children:"Regardless of the query method, the query must match exactly one entity in the catalog, or an error will be thrown."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"export type AuthResolverCatalogUserQuery = {\n    entityRef: string | {\n        kind?: string;\n        namespace?: string;\n        name: string;\n    };\n} | {\n    annotations: Record<string, string>;\n} | {\n    filter: EntityFilterQuery;\n};\n"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"References:"})," ",(0,n.jsx)(r.a,{href:"/docs/reference/catalog-client.entityfilterquery",children:"EntityFilterQuery"})]})]})}function d(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},675251:(e,r,t)=>{var n=t(667294),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,t){var n,o={},c=null,u=null;for(n in void 0!==t&&(c=""+t),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(u=r.ref),r)a.call(r,n)&&!l.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===o[n]&&(o[n]=r[n]);return{$$typeof:s,type:e,key:c,ref:u,props:o,_owner:i.current}}r.Fragment=o,r.jsx=c,r.jsxs=c},785893:(e,r,t)=>{e.exports=t(675251)},511151:(e,r,t)=>{t.d(r,{Z:()=>i,a:()=>a});var n=t(667294);const s={},o=n.createContext(s);function a(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);