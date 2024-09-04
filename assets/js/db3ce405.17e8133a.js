/*! For license information please see db3ce405.17e8133a.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[50530],{705302:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=t(785893),s=t(511151);const a={id:"catalog-model.parseentityref",title:"parseEntityRef()",description:"API reference for parseEntityRef()"},c=void 0,i={id:"reference/catalog-model.parseentityref",title:"parseEntityRef()",description:"API reference for parseEntityRef()",source:"@site/../docs/reference/catalog-model.parseentityref.md",sourceDirName:"reference",slug:"/reference/catalog-model.parseentityref",permalink:"/docs/next/reference/catalog-model.parseentityref",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/catalog-model.parseentityref.md",tags:[],version:"current",frontMatter:{id:"catalog-model.parseentityref",title:"parseEntityRef()",description:"API reference for parseEntityRef()"}},o={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/next/reference/catalog-model",children:(0,r.jsx)(n.code,{children:"@backstage/catalog-model"})})," > ",(0,r.jsx)(n.a,{href:"/docs/next/reference/catalog-model.parseentityref",children:(0,r.jsx)(n.code,{children:"parseEntityRef"})})]}),"\n",(0,r.jsx)(n.p,{children:"Parses an entity reference, either on string or compound form, and returns a structure with a name, and optional kind and namespace."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function parseEntityRef(ref: string | {\n    kind?: string;\n    namespace?: string;\n    name: string;\n}, context?: {\n    defaultKind?: string;\n    defaultNamespace?: string;\n}): CompoundEntityRef;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ref"}),(0,r.jsx)(n.td,{children:"string | { kind?: string; namespace?: string; name: string; }"}),(0,r.jsx)(n.td,{children:"The reference to parse"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"context"}),(0,r.jsx)(n.td,{children:"{ defaultKind?: string; defaultNamespace?: string; }"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"(Optional)"})," The context of defaults that the parsing happens within"]})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/catalog-model.compoundentityref",children:"CompoundEntityRef"})}),"\n",(0,r.jsx)(n.p,{children:"The compound form of the reference"}),"\n",(0,r.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsx)(n.p,{children:"The context object can contain default values for the kind and namespace, that will be used if the input reference did not specify any."})]})}function f(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},675251:(e,n,t)=>{var r=t(667294),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var r,a={},d=null,l=null;for(r in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)c.call(n,r)&&!o.hasOwnProperty(r)&&(a[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===a[r]&&(a[r]=n[r]);return{$$typeof:s,type:e,key:d,ref:l,props:a,_owner:i.current}}n.Fragment=a,n.jsx=d,n.jsxs=d},785893:(e,n,t)=>{e.exports=t(675251)},511151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>c});var r=t(667294);const s={},a=r.createContext(s);function c(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);