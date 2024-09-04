/*! For license information please see c6eb8b55.71164f66.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[869018],{265027:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>h});var n=r(785893),c=r(511151);const s={id:"integration-react.scmauth.forgithub",title:"ScmAuth.forGithub()",description:"API reference for ScmAuth.forGithub()"},i=void 0,o={id:"reference/integration-react.scmauth.forgithub",title:"ScmAuth.forGithub()",description:"API reference for ScmAuth.forGithub()",source:"@site/../docs/reference/integration-react.scmauth.forgithub.md",sourceDirName:"reference",slug:"/reference/integration-react.scmauth.forgithub",permalink:"/docs/next/reference/integration-react.scmauth.forgithub",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/integration-react.scmauth.forgithub.md",tags:[],version:"current",frontMatter:{id:"integration-react.scmauth.forgithub",title:"ScmAuth.forGithub()",description:"API reference for ScmAuth.forGithub()"}},a={},h=[{value:"Parameters",id:"parameters",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/next/reference/integration-react",children:(0,n.jsx)(t.code,{children:"@backstage/integration-react"})})," > ",(0,n.jsx)(t.a,{href:"/docs/next/reference/integration-react.scmauth",children:(0,n.jsx)(t.code,{children:"ScmAuth"})})," > ",(0,n.jsx)(t.a,{href:"/docs/next/reference/integration-react.scmauth.forgithub",children:(0,n.jsx)(t.code,{children:"forGithub"})})]}),"\n",(0,n.jsx)(t.p,{children:"Creates a new ScmAuth instance that handles authentication towards GitHub."}),"\n",(0,n.jsxs)(t.p,{children:["The host option determines which URLs that are handled by this instance and defaults to ",(0,n.jsx)(t.code,{children:"github.com"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"The default scopes are:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"repo read:org read:user"})}),"\n",(0,n.jsxs)(t.p,{children:["If the additional ",(0,n.jsx)(t.code,{children:"repoWrite"})," permission is requested, these scopes are added:"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"gist"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"static forGithub(githubAuthApi: OAuthApi, options?: {\n        host?: string;\n    }): ScmAuth;\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"githubAuthApi"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/next/reference/core-plugin-api.oauthapi",children:"OAuthApi"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"options"}),(0,n.jsx)(t.td,{children:"{ host?: string; }"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.em,{children:"(Optional)"})})]})]})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"/docs/next/reference/integration-react.scmauth",children:"ScmAuth"})})]})}function u(e={}){const{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},675251:(e,t,r)=>{var n=r(667294),c=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function h(e,t,r){var n,s={},h=null,d=null;for(n in void 0!==r&&(h=""+r),void 0!==t.key&&(h=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,n)&&!a.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:c,type:e,key:h,ref:d,props:s,_owner:o.current}}t.Fragment=s,t.jsx=h,t.jsxs=h},785893:(e,t,r)=>{e.exports=r(675251)},511151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>i});var n=r(667294);const c={},s=n.createContext(c);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);