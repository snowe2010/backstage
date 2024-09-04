/*! For license information please see c58c3e62.f8d26548.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[343437],{307711:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>s,default:()=>f,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var n=t(785893),i=t(511151);const c={id:"plugin-scaffolder-backend-module-gerrit.createpublishgerritaction",title:"createPublishGerritAction()",description:"API reference for createPublishGerritAction()"},s=void 0,o={id:"reference/plugin-scaffolder-backend-module-gerrit.createpublishgerritaction",title:"createPublishGerritAction()",description:"API reference for createPublishGerritAction()",source:"@site/../docs/reference/plugin-scaffolder-backend-module-gerrit.createpublishgerritaction.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-backend-module-gerrit.createpublishgerritaction",permalink:"/docs/next/reference/plugin-scaffolder-backend-module-gerrit.createpublishgerritaction",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-scaffolder-backend-module-gerrit.createpublishgerritaction.md",tags:[],version:"current",frontMatter:{id:"plugin-scaffolder-backend-module-gerrit.createpublishgerritaction",title:"createPublishGerritAction()",description:"API reference for createPublishGerritAction()"}},a={},d=[{value:"Parameters",id:"parameters",level:2}];function l(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/next/reference/plugin-scaffolder-backend-module-gerrit",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-scaffolder-backend-module-gerrit"})})," > ",(0,n.jsx)(r.a,{href:"/docs/next/reference/plugin-scaffolder-backend-module-gerrit.createpublishgerritaction",children:(0,n.jsx)(r.code,{children:"createPublishGerritAction"})})]}),"\n",(0,n.jsx)(r.p,{children:"Creates a new action that initializes a git repository of the content in the workspace and publishes it to a Gerrit instance."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:'function createPublishGerritAction(options: {\n    integrations: ScmIntegrationRegistry;\n    config: Config;\n}): import("@backstage/plugin-scaffolder-node").TemplateAction<{\n    repoUrl: string;\n    description: string;\n    defaultBranch?: string | undefined;\n    gitCommitMessage?: string | undefined;\n    gitAuthorName?: string | undefined;\n    gitAuthorEmail?: string | undefined;\n    sourcePath?: string | undefined;\n}, import("@backstage/types").JsonObject>;\n'})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"options"}),(0,n.jsxs)(r.td,{children:["{ integrations: ",(0,n.jsx)(r.a,{href:"/docs/next/reference/integration.scmintegrationregistry",children:"ScmIntegrationRegistry"}),"; config: ",(0,n.jsx)(r.a,{href:"/docs/next/reference/config.config",children:"Config"}),"; }"]}),(0,n.jsx)(r.td,{})]})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsxs)(r.p,{children:['import("@backstage/plugin-scaffolder-node").',(0,n.jsx)(r.a,{href:"/docs/next/reference/plugin-scaffolder-node.templateaction",children:"TemplateAction"}),'<{ repoUrl: string; description: string; defaultBranch?: string | undefined; gitCommitMessage?: string | undefined; gitAuthorName?: string | undefined; gitAuthorEmail?: string | undefined; sourcePath?: string | undefined; }, import("@backstage/types").',(0,n.jsx)(r.a,{href:"/docs/next/reference/types.jsonobject",children:"JsonObject"}),">"]})]})}function f(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},675251:(e,r,t)=>{var n=t(667294),i=Symbol.for("react.element"),c=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,t){var n,c={},d=null,l=null;for(n in void 0!==t&&(d=""+t),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(l=r.ref),r)s.call(r,n)&&!a.hasOwnProperty(n)&&(c[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===c[n]&&(c[n]=r[n]);return{$$typeof:i,type:e,key:d,ref:l,props:c,_owner:o.current}}r.Fragment=c,r.jsx=d,r.jsxs=d},785893:(e,r,t)=>{e.exports=t(675251)},511151:(e,r,t)=>{t.d(r,{Z:()=>o,a:()=>s});var n=t(667294);const i={},c=n.createContext(i);function s(e){const r=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(c.Provider,{value:r},e.children)}}}]);