/*! For license information please see 70e9dd7f.4d89e487.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[862189],{420700:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(785893),o=n(511151);const a={id:"plugin-scaffolder-backend-module-gitlab.creategitlabrepopushaction",title:"createGitlabRepoPushAction",description:"API reference for createGitlabRepoPushAction"},c=void 0,i={id:"reference/plugin-scaffolder-backend-module-gitlab.creategitlabrepopushaction",title:"createGitlabRepoPushAction",description:"API reference for createGitlabRepoPushAction",source:"@site/versioned_docs/version-stable/reference/plugin-scaffolder-backend-module-gitlab.creategitlabrepopushaction.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-backend-module-gitlab.creategitlabrepopushaction",permalink:"/docs/reference/plugin-scaffolder-backend-module-gitlab.creategitlabrepopushaction",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-scaffolder-backend-module-gitlab.creategitlabrepopushaction.md",tags:[],version:"stable",frontMatter:{id:"plugin-scaffolder-backend-module-gitlab.creategitlabrepopushaction",title:"createGitlabRepoPushAction",description:"API reference for createGitlabRepoPushAction"}},s={},l=[];function d(e){const t={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-backend-module-gitlab",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-scaffolder-backend-module-gitlab"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-backend-module-gitlab.creategitlabrepopushaction",children:(0,r.jsx)(t.code,{children:"createGitlabRepoPushAction"})})]}),"\n",(0,r.jsx)(t.p,{children:"Create a new action that commits into a gitlab repository."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:'createGitlabRepoPushAction: (options: {\n    integrations: ScmIntegrationRegistry;\n}) => import("@backstage/plugin-scaffolder-node").TemplateAction<{\n    repoUrl: string;\n    branchName: string;\n    commitMessage: string;\n    sourcePath?: string | undefined;\n    targetPath?: string | undefined;\n    token?: string | undefined;\n    commitAction?: "update" | "delete" | "create" | undefined;\n}, import("@backstage/types").JsonObject>\n'})})]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},675251:(e,t,n)=>{var r=n(667294),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,a={},l=null,d=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)c.call(t,r)&&!s.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:l,ref:d,props:a,_owner:i.current}}t.Fragment=a,t.jsx=l,t.jsxs=l},785893:(e,t,n)=>{e.exports=n(675251)},511151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>c});var r=n(667294);const o={},a=r.createContext(o);function c(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);