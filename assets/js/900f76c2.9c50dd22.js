/*! For license information please see 900f76c2.9c50dd22.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[675423],{209886:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>o,default:()=>l,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var t=n(785893),s=n(511151);const c={id:"plugin-kubernetes-backend.createrouter",title:"createRouter()",description:"API reference for createRouter()"},o=void 0,i={id:"reference/plugin-kubernetes-backend.createrouter",title:"createRouter()",description:"API reference for createRouter()",source:"@site/versioned_docs/version-stable/reference/plugin-kubernetes-backend.createrouter.md",sourceDirName:"reference",slug:"/reference/plugin-kubernetes-backend.createrouter",permalink:"/docs/reference/plugin-kubernetes-backend.createrouter",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-kubernetes-backend.createrouter.md",tags:[],version:"stable",frontMatter:{id:"plugin-kubernetes-backend.createrouter",title:"createRouter()",description:"API reference for createRouter()"}},a={},d=[{value:"Parameters",id:"parameters",level:2}];function u(e){const r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend",children:(0,t.jsx)(r.code,{children:"@backstage/plugin-kubernetes-backend"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.createrouter",children:(0,t.jsx)(r.code,{children:"createRouter"})})]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"Warning: This API is now obsolete."}),"\n",(0,t.jsx)(r.p,{children:"Please use the new KubernetesBuilder instead like this"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"import { KubernetesBuilder } from '@backstage/plugin-kubernetes-backend';\nconst { router } = await KubernetesBuilder.createBuilder({\n  logger,\n  config,\n}).build();\n"})}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"creates and configure a new router for handling the kubernetes backend APIs"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"function createRouter(options: RouterOptions): Promise<express.Router>;\n"})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Parameter"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"options"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.routeroptions",children:"RouterOptions"})}),(0,t.jsx)(r.td,{children:"specifies the options required by this plugin"})]})})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,t.jsx)(r.p,{children:"Promise<express.Router>"}),"\n",(0,t.jsx)(r.p,{children:"a new router"})]})}function l(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},675251:(e,r,n)=>{var t=n(667294),s=Symbol.for("react.element"),c=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,n){var t,c={},d=null,u=null;for(t in void 0!==n&&(d=""+n),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(u=r.ref),r)o.call(r,t)&&!a.hasOwnProperty(t)&&(c[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===c[t]&&(c[t]=r[t]);return{$$typeof:s,type:e,key:d,ref:u,props:c,_owner:i.current}}r.Fragment=c,r.jsx=d,r.jsxs=d},785893:(e,r,n)=>{e.exports=n(675251)},511151:(e,r,n)=>{n.d(r,{Z:()=>i,a:()=>o});var t=n(667294);const s={},c=t.createContext(s);function o(e){const r=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(c.Provider,{value:r},e.children)}}}]);