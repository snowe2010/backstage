/*! For license information please see fc0dfd18.e96725a2.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[62692],{284578:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var n=t(785893),a=t(511151);const o={id:"plugin-catalog-backend.catalogbuilder.addentityprovider",title:"CatalogBuilder.addEntityProvider()",description:"API reference for CatalogBuilder.addEntityProvider()"},i=void 0,d={id:"reference/plugin-catalog-backend.catalogbuilder.addentityprovider",title:"CatalogBuilder.addEntityProvider()",description:"API reference for CatalogBuilder.addEntityProvider()",source:"@site/versioned_docs/version-stable/reference/plugin-catalog-backend.catalogbuilder.addentityprovider.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend.catalogbuilder.addentityprovider",permalink:"/docs/reference/plugin-catalog-backend.catalogbuilder.addentityprovider",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-catalog-backend.catalogbuilder.addentityprovider.md",tags:[],version:"stable",frontMatter:{id:"plugin-catalog-backend.catalogbuilder.addentityprovider",title:"CatalogBuilder.addEntityProvider()",description:"API reference for CatalogBuilder.addEntityProvider()"}},c={},s=[{value:"Parameters",id:"parameters",level:2}];function l(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-catalog-backend"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder",children:(0,n.jsx)(r.code,{children:"CatalogBuilder"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.addentityprovider",children:(0,n.jsx)(r.code,{children:"addEntityProvider"})})]}),"\n",(0,n.jsx)(r.p,{children:"Adds or replaces entity providers. These are responsible for bootstrapping the list of entities out of original data sources. For example, there is one entity source for the config locations, and one for the database stored locations. If you ingest entities out of a third party system, you may want to implement that in terms of an entity provider as well."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"addEntityProvider(...providers: Array<EntityProvider | Array<EntityProvider>>): CatalogBuilder;\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"providers"}),(0,n.jsxs)(r.td,{children:["Array<",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-node.entityprovider",children:"EntityProvider"})," | Array<",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-node.entityprovider",children:"EntityProvider"}),">>"]}),(0,n.jsx)(r.td,{children:"One or more entity providers"})]})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder",children:"CatalogBuilder"})})]})}function p(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},675251:(e,r,t)=>{var n=t(667294),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function s(e,r,t){var n,o={},s=null,l=null;for(n in void 0!==t&&(s=""+t),void 0!==r.key&&(s=""+r.key),void 0!==r.ref&&(l=r.ref),r)i.call(r,n)&&!c.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===o[n]&&(o[n]=r[n]);return{$$typeof:a,type:e,key:s,ref:l,props:o,_owner:d.current}}r.Fragment=o,r.jsx=s,r.jsxs=s},785893:(e,r,t)=>{e.exports=t(675251)},511151:(e,r,t)=>{t.d(r,{Z:()=>d,a:()=>i});var n=t(667294);const a={},o=n.createContext(a);function i(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);