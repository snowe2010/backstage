/*! For license information please see 2f926495.9ec6cf3d.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[155070],{153321:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var n=r(785893),i=r(511151);const s={id:"integration.scmintegration.resolveediturl",title:"ScmIntegration.resolveEditUrl()",description:"API reference for ScmIntegration.resolveEditUrl()"},o=void 0,c={id:"reference/integration.scmintegration.resolveediturl",title:"ScmIntegration.resolveEditUrl()",description:"API reference for ScmIntegration.resolveEditUrl()",source:"@site/versioned_docs/version-stable/reference/integration.scmintegration.resolveediturl.md",sourceDirName:"reference",slug:"/reference/integration.scmintegration.resolveediturl",permalink:"/docs/reference/integration.scmintegration.resolveediturl",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/integration.scmintegration.resolveediturl.md",tags:[],version:"stable",frontMatter:{id:"integration.scmintegration.resolveediturl",title:"ScmIntegration.resolveEditUrl()",description:"API reference for ScmIntegration.resolveEditUrl()"}},a={},l=[{value:"Parameters",id:"parameters",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/integration",children:(0,n.jsx)(t.code,{children:"@backstage/integration"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/integration.scmintegration",children:(0,n.jsx)(t.code,{children:"ScmIntegration"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/integration.scmintegration.resolveediturl",children:(0,n.jsx)(t.code,{children:"resolveEditUrl"})})]}),"\n",(0,n.jsx)(t.p,{children:"Resolves the edit URL for a file within the SCM system."}),"\n",(0,n.jsx)(t.p,{children:"Most SCM systems have a web interface that allows viewing and editing files in the repository. The returned URL directly jumps into the edit mode for the file. If this is not possible, the integration can fall back to a URL to view the file in the web interface."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"resolveEditUrl(url: string): string;\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"url"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"The absolute URL to the file that should be edited."})]})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(t.p,{children:"string"})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},675251:(e,t,r)=>{var n=r(667294),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,s={},l=null,d=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,n)&&!a.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:i,type:e,key:l,ref:d,props:s,_owner:c.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},785893:(e,t,r)=>{e.exports=r(675251)},511151:(e,t,r)=>{r.d(t,{Z:()=>c,a:()=>o});var n=r(667294);const i={},s=n.createContext(i);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);