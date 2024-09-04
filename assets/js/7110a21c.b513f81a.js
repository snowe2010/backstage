/*! For license information please see 7110a21c.b513f81a.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[280020],{220750:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=n(785893),r=n(511151);const o={id:"backend-openapi-utils.internal.methodawaredocpath",title:"internal.MethodAwareDocPath",description:"API reference for internal.MethodAwareDocPath"},c=void 0,i={id:"reference/backend-openapi-utils.internal.methodawaredocpath",title:"internal.MethodAwareDocPath",description:"API reference for internal.MethodAwareDocPath",source:"@site/versioned_docs/version-stable/reference/backend-openapi-utils.internal.methodawaredocpath.md",sourceDirName:"reference",slug:"/reference/backend-openapi-utils.internal.methodawaredocpath",permalink:"/docs/reference/backend-openapi-utils.internal.methodawaredocpath",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/backend-openapi-utils.internal.methodawaredocpath.md",tags:[],version:"stable",frontMatter:{id:"backend-openapi-utils.internal.methodawaredocpath",title:"internal.MethodAwareDocPath",description:"API reference for internal.MethodAwareDocPath"}},s={},d=[];function l(e){const t={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,a.jsx)(t.a,{href:"/docs/reference/backend-openapi-utils",children:(0,a.jsx)(t.code,{children:"@backstage/backend-openapi-utils"})})," > ",(0,a.jsx)(t.a,{href:"/docs/reference/backend-openapi-utils.internal",children:(0,a.jsx)(t.code,{children:"internal"})})," > ",(0,a.jsx)(t.a,{href:"/docs/reference/backend-openapi-utils.internal.methodawaredocpath",children:(0,a.jsx)(t.code,{children:"MethodAwareDocPath"})})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"export type MethodAwareDocPath<Doc extends PathDoc, Path extends DocPathTemplate<Doc>, Method extends DocPathTemplateMethod<Doc, Path>> = ValueOf<{\n    [Template in DocPath<Doc>]: Path extends PathTemplate<Template> ? Method extends DocPathTemplateMethod<Doc, Path> ? PathTemplate<Template> : never : never;\n}>;\n"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"References:"})," ",(0,a.jsx)(t.a,{href:"/docs/reference/backend-openapi-utils.internal.pathdoc",children:"PathDoc"}),", ",(0,a.jsx)(t.a,{href:"/docs/reference/backend-openapi-utils.internal.docpathtemplate",children:"DocPathTemplate"}),", ",(0,a.jsx)(t.a,{href:"/docs/reference/backend-openapi-utils.internal.docpathtemplatemethod",children:"DocPathTemplateMethod"}),", ",(0,a.jsx)(t.a,{href:"/docs/reference/backend-openapi-utils.internal.valueof",children:"ValueOf"}),", ",(0,a.jsx)(t.a,{href:"/docs/reference/backend-openapi-utils.internal.docpath",children:"DocPath"}),", ",(0,a.jsx)(t.a,{href:"/docs/reference/backend-openapi-utils.internal.pathtemplate",children:"PathTemplate"})]})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},675251:(e,t,n)=>{var a=n(667294),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var a,o={},d=null,l=null;for(a in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)c.call(t,a)&&!s.hasOwnProperty(a)&&(o[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===o[a]&&(o[a]=t[a]);return{$$typeof:r,type:e,key:d,ref:l,props:o,_owner:i.current}}t.Fragment=o,t.jsx=d,t.jsxs=d},785893:(e,t,n)=>{e.exports=n(675251)},511151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>c});var a=n(667294);const r={},o=a.createContext(r);function c(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);