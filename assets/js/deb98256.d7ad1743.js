/*! For license information please see deb98256.d7ad1743.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[35867],{583720:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=r(785893),i=r(511151);const s={id:"plugin-permission-common.permissionevaluator.authorizeconditional",title:"PermissionEvaluator.authorizeConditional()",description:"API reference for PermissionEvaluator.authorizeConditional()"},t=void 0,a={id:"reference/plugin-permission-common.permissionevaluator.authorizeconditional",title:"PermissionEvaluator.authorizeConditional()",description:"API reference for PermissionEvaluator.authorizeConditional()",source:"@site/versioned_docs/version-stable/reference/plugin-permission-common.permissionevaluator.authorizeconditional.md",sourceDirName:"reference",slug:"/reference/plugin-permission-common.permissionevaluator.authorizeconditional",permalink:"/docs/reference/plugin-permission-common.permissionevaluator.authorizeconditional",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-permission-common.permissionevaluator.authorizeconditional.md",tags:[],version:"stable",frontMatter:{id:"plugin-permission-common.permissionevaluator.authorizeconditional",title:"PermissionEvaluator.authorizeConditional()",description:"API reference for PermissionEvaluator.authorizeConditional()"}},c={},l=[{value:"Parameters",id:"parameters",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,o.jsx)(n.a,{href:"/docs/reference/plugin-permission-common",children:(0,o.jsx)(n.code,{children:"@backstage/plugin-permission-common"})})," > ",(0,o.jsx)(n.a,{href:"/docs/reference/plugin-permission-common.permissionevaluator",children:(0,o.jsx)(n.code,{children:"PermissionEvaluator"})})," > ",(0,o.jsx)(n.a,{href:"/docs/reference/plugin-permission-common.permissionevaluator.authorizeconditional",children:(0,o.jsx)(n.code,{children:"authorizeConditional"})})]}),"\n",(0,o.jsxs)(n.p,{children:["Evaluates ",(0,o.jsx)(n.a,{href:"/docs/reference/plugin-permission-common.resourcepermission",children:"ResourcePermissions"})," and returns both definitive and conditional decisions, depending on the configured ",(0,o.jsx)(n.a,{href:"/docs/reference/plugin-permission-node.permissionpolicy",children:"PermissionPolicy"}),". This method is useful when the caller needs more control over the processing of conditional decisions. For example, a plugin backend may want to use ",(0,o.jsx)(n.a,{href:"/docs/reference/plugin-permission-common.permissioncriteria",children:"conditions"})," in a database query instead of evaluating each resource in memory."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"authorizeConditional(requests: QueryPermissionRequest[], options?: EvaluatorRequestOptions & {\n        _ignored?: never;\n    }): Promise<QueryPermissionResponse[]>;\n"})}),"\n",(0,o.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Parameter"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"requests"}),(0,o.jsxs)(n.td,{children:[(0,o.jsx)(n.a,{href:"/docs/reference/plugin-permission-common.querypermissionrequest",children:"QueryPermissionRequest"}),"[]"]}),(0,o.jsx)(n.td,{})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"options"}),(0,o.jsxs)(n.td,{children:[(0,o.jsx)(n.a,{href:"/docs/reference/plugin-permission-common.evaluatorrequestoptions",children:"EvaluatorRequestOptions"})," & { _ignored?: never; }"]}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.em,{children:"(Optional)"})})]})]})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,o.jsxs)(n.p,{children:["Promise<",(0,o.jsx)(n.a,{href:"/docs/reference/plugin-permission-common.querypermissionresponse",children:"QueryPermissionResponse"}),"[]>"]})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},675251:(e,n,r)=>{var o=r(667294),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var o,s={},l=null,d=null;for(o in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)t.call(n,o)&&!c.hasOwnProperty(o)&&(s[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===s[o]&&(s[o]=n[o]);return{$$typeof:i,type:e,key:l,ref:d,props:s,_owner:a.current}}n.Fragment=s,n.jsx=l,n.jsxs=l},785893:(e,n,r)=>{e.exports=r(675251)},511151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>t});var o=r(667294);const i={},s=o.createContext(i);function t(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);