/*! For license information please see e58746a2.eff61b8e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[860588],{441911:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var t=r(785893),s=r(511151);const o={id:"plugin-scaffolder-node.commitandpushbranch",title:"commitAndPushBranch()",description:"API reference for commitAndPushBranch()"},c=void 0,i={id:"reference/plugin-scaffolder-node.commitandpushbranch",title:"commitAndPushBranch()",description:"API reference for commitAndPushBranch()",source:"@site/versioned_docs/version-stable/reference/plugin-scaffolder-node.commitandpushbranch.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-node.commitandpushbranch",permalink:"/docs/reference/plugin-scaffolder-node.commitandpushbranch",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-scaffolder-node.commitandpushbranch.md",tags:[],version:"stable",frontMatter:{id:"plugin-scaffolder-node.commitandpushbranch",title:"commitAndPushBranch()",description:"API reference for commitAndPushBranch()"}},a={},d=[{value:"Parameters",id:"parameters",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-node",children:(0,t.jsx)(n.code,{children:"@backstage/plugin-scaffolder-node"})})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-node.commitandpushbranch",children:(0,t.jsx)(n.code,{children:"commitAndPushBranch"})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"function commitAndPushBranch(options: {\n    dir: string;\n    auth: {\n        username: string;\n        password: string;\n    } | {\n        token: string;\n    };\n    logger?: Logger | undefined;\n    commitMessage: string;\n    gitAuthorInfo?: {\n        name?: string;\n        email?: string;\n    };\n    branch?: string;\n    remoteRef?: string;\n    remote?: string;\n}): Promise<{\n    commitHash: string;\n}>;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"options"}),(0,t.jsx)(n.td,{children:"{ dir: string; auth: { username: string; password: string; } | { token: string; }; logger?: Logger | undefined; commitMessage: string; gitAuthorInfo?: { name?: string; email?: string; }; branch?: string; remoteRef?: string; remote?: string; }"}),(0,t.jsx)(n.td,{})]})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,t.jsx)(n.p,{children:"Promise<{ commitHash: string; }>"})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},675251:(e,n,r)=>{var t=r(667294),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,r){var t,o={},d=null,l=null;for(t in void 0!==r&&(d=""+r),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)c.call(n,t)&&!a.hasOwnProperty(t)&&(o[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===o[t]&&(o[t]=n[t]);return{$$typeof:s,type:e,key:d,ref:l,props:o,_owner:i.current}}n.Fragment=o,n.jsx=d,n.jsxs=d},785893:(e,n,r)=>{e.exports=r(675251)},511151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>c});var t=r(667294);const s={},o=t.createContext(s);function c(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);