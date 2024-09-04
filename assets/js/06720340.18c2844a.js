/*! For license information please see 06720340.18c2844a.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[241904],{794678:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var t=n(785893),i=n(511151);const s={id:"integration.parsegiteaurl",title:"parseGiteaUrl()",description:"API reference for parseGiteaUrl()"},a=void 0,o={id:"reference/integration.parsegiteaurl",title:"parseGiteaUrl()",description:"API reference for parseGiteaUrl()",source:"@site/../docs/reference/integration.parsegiteaurl.md",sourceDirName:"reference",slug:"/reference/integration.parsegiteaurl",permalink:"/docs/next/reference/integration.parsegiteaurl",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/integration.parsegiteaurl.md",tags:[],version:"current",frontMatter:{id:"integration.parsegiteaurl",title:"parseGiteaUrl()",description:"API reference for parseGiteaUrl()"}},c={},d=[{value:"Parameters",id:"parameters",level:2}];function l(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/integration",children:(0,t.jsx)(r.code,{children:"@backstage/integration"})})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/integration.parsegiteaurl",children:(0,t.jsx)(r.code,{children:"parseGiteaUrl"})})]}),"\n",(0,t.jsx)(r.p,{children:"Return parsed git url properties."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"function parseGiteaUrl(config: GiteaIntegrationConfig, url: string): {\n    url: string;\n    owner: string;\n    name: string;\n    ref: string;\n    path: string;\n};\n"})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Parameter"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"config"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/reference/integration.giteaintegrationconfig",children:"GiteaIntegrationConfig"})}),(0,t.jsx)(r.td,{children:"A Gitea provider config"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"url"}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{children:"A URL pointing to a repository"})]})]})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,t.jsx)(r.p,{children:"{ url: string; owner: string; name: string; ref: string; path: string; }"})]})}function p(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},675251:(e,r,n)=>{var t=n(667294),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,n){var t,s={},d=null,l=null;for(t in void 0!==n&&(d=""+n),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(l=r.ref),r)a.call(r,t)&&!c.hasOwnProperty(t)&&(s[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===s[t]&&(s[t]=r[t]);return{$$typeof:i,type:e,key:d,ref:l,props:s,_owner:o.current}}r.Fragment=s,r.jsx=d,r.jsxs=d},785893:(e,r,n)=>{e.exports=n(675251)},511151:(e,r,n)=>{n.d(r,{Z:()=>o,a:()=>a});var t=n(667294);const i={},s=t.createContext(i);function a(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);