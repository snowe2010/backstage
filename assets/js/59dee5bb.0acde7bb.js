/*! For license information please see 59dee5bb.0acde7bb.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[296745],{539322:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var c=n(785893),r=n(511151);const o={id:"plugin-scaffolder-backend-module-gitlab.creategitlabprojectaccesstokenaction",title:"createGitlabProjectAccessTokenAction",description:"API reference for createGitlabProjectAccessTokenAction"},a=void 0,s={id:"reference/plugin-scaffolder-backend-module-gitlab.creategitlabprojectaccesstokenaction",title:"createGitlabProjectAccessTokenAction",description:"API reference for createGitlabProjectAccessTokenAction",source:"@site/../docs/reference/plugin-scaffolder-backend-module-gitlab.creategitlabprojectaccesstokenaction.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-backend-module-gitlab.creategitlabprojectaccesstokenaction",permalink:"/docs/next/reference/plugin-scaffolder-backend-module-gitlab.creategitlabprojectaccesstokenaction",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-scaffolder-backend-module-gitlab.creategitlabprojectaccesstokenaction.md",tags:[],version:"current",frontMatter:{id:"plugin-scaffolder-backend-module-gitlab.creategitlabprojectaccesstokenaction",title:"createGitlabProjectAccessTokenAction",description:"API reference for createGitlabProjectAccessTokenAction"}},i={},l=[];function d(e){const t={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,c.jsx)(t.a,{href:"/docs/next/reference/plugin-scaffolder-backend-module-gitlab",children:(0,c.jsx)(t.code,{children:"@backstage/plugin-scaffolder-backend-module-gitlab"})})," > ",(0,c.jsx)(t.a,{href:"/docs/next/reference/plugin-scaffolder-backend-module-gitlab.creategitlabprojectaccesstokenaction",children:(0,c.jsx)(t.code,{children:"createGitlabProjectAccessTokenAction"})})]}),"\n",(0,c.jsxs)(t.p,{children:["Creates a ",(0,c.jsx)(t.code,{children:"gitlab:projectAccessToken:create"})," Scaffolder action."]}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-typescript",children:'createGitlabProjectAccessTokenAction: (options: {\n    integrations: ScmIntegrationRegistry;\n}) => import("@backstage/plugin-scaffolder-node").TemplateAction<{\n    repoUrl: string;\n    projectId: string | number;\n    name?: string | undefined;\n    token?: string | undefined;\n    scopes?: string[] | undefined;\n    expiresAt?: string | undefined;\n    accessLevel?: number | undefined;\n}, {\n    access_token: string;\n}>\n'})})]})}function f(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},675251:(e,t,n)=>{var c=n(667294),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var c,o={},l=null,d=null;for(c in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,c)&&!i.hasOwnProperty(c)&&(o[c]=t[c]);if(e&&e.defaultProps)for(c in t=e.defaultProps)void 0===o[c]&&(o[c]=t[c]);return{$$typeof:r,type:e,key:l,ref:d,props:o,_owner:s.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},785893:(e,t,n)=>{e.exports=n(675251)},511151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>a});var c=n(667294);const r={},o=c.createContext(r);function a(e){const t=c.useContext(o);return c.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),c.createElement(o.Provider,{value:t},e.children)}}}]);