/*! For license information please see cd6f7e66.c4f866ca.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[941919],{903538:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>c,metadata:()=>o,toc:()=>a});var r=n(785893),i=n(511151);const c={id:"plugin-scaffolder-backend.createpublishgithubpullrequestaction",title:"createPublishGithubPullRequestAction",description:"API reference for createPublishGithubPullRequestAction"},s=void 0,o={id:"reference/plugin-scaffolder-backend.createpublishgithubpullrequestaction",title:"createPublishGithubPullRequestAction",description:"API reference for createPublishGithubPullRequestAction",source:"@site/../docs/reference/plugin-scaffolder-backend.createpublishgithubpullrequestaction.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-backend.createpublishgithubpullrequestaction",permalink:"/docs/next/reference/plugin-scaffolder-backend.createpublishgithubpullrequestaction",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-scaffolder-backend.createpublishgithubpullrequestaction.md",tags:[],version:"current",frontMatter:{id:"plugin-scaffolder-backend.createpublishgithubpullrequestaction",title:"createPublishGithubPullRequestAction",description:"API reference for createPublishGithubPullRequestAction"}},u={},a=[];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/plugin-scaffolder-backend",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-scaffolder-backend"})})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/plugin-scaffolder-backend.createpublishgithubpullrequestaction",children:(0,r.jsx)(t.code,{children:"createPublishGithubPullRequestAction"})})]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Warning: This API is now obsolete."}),"\n",(0,r.jsxs)(t.p,{children:["use import from ",(0,r.jsx)(t.code,{children:"@backstage/plugin-scaffolder-backend-module-github"})," instead"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:'createPublishGithubPullRequestAction: (options: github.CreateGithubPullRequestActionOptions) => import("@backstage/plugin-scaffolder-node").TemplateAction<{\n    title: string;\n    branchName: string;\n    targetBranchName?: string | undefined;\n    description: string;\n    repoUrl: string;\n    draft?: boolean | undefined;\n    targetPath?: string | undefined;\n    sourcePath?: string | undefined;\n    token?: string | undefined;\n    reviewers?: string[] | undefined;\n    teamReviewers?: string[] | undefined;\n    commitMessage?: string | undefined;\n    update?: boolean | undefined;\n    forceFork?: boolean | undefined;\n    gitAuthorName?: string | undefined;\n    gitAuthorEmail?: string | undefined;\n    forceEmptyGitAuthor?: boolean | undefined;\n}, import("@backstage/types").JsonObject>\n'})})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},675251:(e,t,n)=>{var r=n(667294),i=Symbol.for("react.element"),c=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,n){var r,c={},a=null,l=null;for(r in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,r)&&!u.hasOwnProperty(r)&&(c[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===c[r]&&(c[r]=t[r]);return{$$typeof:i,type:e,key:a,ref:l,props:c,_owner:o.current}}t.Fragment=c,t.jsx=a,t.jsxs=a},785893:(e,t,n)=>{e.exports=n(675251)},511151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>s});var r=n(667294);const i={},c=r.createContext(i);function s(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);