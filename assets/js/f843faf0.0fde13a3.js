/*! For license information please see f843faf0.0fde13a3.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[327717],{903290:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var r=n(785893),o=n(511151);const c={id:"catalog-model.getentitysourcelocation",title:"getEntitySourceLocation()",description:"API reference for getEntitySourceLocation()"},s=void 0,i={id:"reference/catalog-model.getentitysourcelocation",title:"getEntitySourceLocation()",description:"API reference for getEntitySourceLocation()",source:"@site/versioned_docs/version-stable/reference/catalog-model.getentitysourcelocation.md",sourceDirName:"reference",slug:"/reference/catalog-model.getentitysourcelocation",permalink:"/docs/reference/catalog-model.getentitysourcelocation",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/catalog-model.getentitysourcelocation.md",tags:[],version:"stable",frontMatter:{id:"catalog-model.getentitysourcelocation",title:"getEntitySourceLocation()",description:"API reference for getEntitySourceLocation()"}},a={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/catalog-model",children:(0,r.jsx)(t.code,{children:"@backstage/catalog-model"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/catalog-model.getentitysourcelocation",children:(0,r.jsx)(t.code,{children:"getEntitySourceLocation"})})]}),"\n",(0,r.jsx)(t.p,{children:"Returns the source code location of the Entity, to the extent that one exists."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"function getEntitySourceLocation(entity: Entity): {\n    type: string;\n    target: string;\n};\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"entity"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/catalog-model.entity",children:"Entity"})}),(0,r.jsx)(t.td,{})]})})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,r.jsx)(t.p,{children:"{ type: string; target: string; }"}),"\n",(0,r.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsxs)(t.p,{children:["If the returned location type is of type 'url', the target should be readable at least using the UrlReader from ",(0,r.jsx)(t.code,{children:"@backstage/backend-common"}),". If it is not of type 'url', the caller needs to have explicit handling of each location type or signal that it is not supported."]})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},675251:(e,t,n)=>{var r=n(667294),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,c={},l=null,d=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,r)&&!a.hasOwnProperty(r)&&(c[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===c[r]&&(c[r]=t[r]);return{$$typeof:o,type:e,key:l,ref:d,props:c,_owner:i.current}}t.Fragment=c,t.jsx=l,t.jsxs=l},785893:(e,t,n)=>{e.exports=n(675251)},511151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>s});var r=n(667294);const o={},c=r.createContext(o);function s(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);