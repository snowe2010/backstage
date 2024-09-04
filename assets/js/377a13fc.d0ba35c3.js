/*! For license information please see 377a13fc.d0ba35c3.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[441074],{814481:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var r=t(785893),i=t(511151);const o={id:"plugin-scaffolder-backend-module-github.creategithubrepopushaction",title:"createGithubRepoPushAction()",description:"API reference for createGithubRepoPushAction()"},s=void 0,d={id:"reference/plugin-scaffolder-backend-module-github.creategithubrepopushaction",title:"createGithubRepoPushAction()",description:"API reference for createGithubRepoPushAction()",source:"@site/versioned_docs/version-stable/reference/plugin-scaffolder-backend-module-github.creategithubrepopushaction.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-backend-module-github.creategithubrepopushaction",permalink:"/docs/reference/plugin-scaffolder-backend-module-github.creategithubrepopushaction",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-scaffolder-backend-module-github.creategithubrepopushaction.md",tags:[],version:"stable",frontMatter:{id:"plugin-scaffolder-backend-module-github.creategithubrepopushaction",title:"createGithubRepoPushAction()",description:"API reference for createGithubRepoPushAction()"}},a={},c=[{value:"Parameters",id:"parameters",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-backend-module-github",children:(0,r.jsx)(n.code,{children:"@backstage/plugin-scaffolder-backend-module-github"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-backend-module-github.creategithubrepopushaction",children:(0,r.jsx)(n.code,{children:"createGithubRepoPushAction"})})]}),"\n",(0,r.jsx)(n.p,{children:"Creates a new action that initializes a git repository of the content in the workspace and publishes it to GitHub."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'function createGithubRepoPushAction(options: {\n    integrations: ScmIntegrationRegistry;\n    config: Config;\n    githubCredentialsProvider?: GithubCredentialsProvider;\n}): import("@backstage/plugin-scaffolder-node").TemplateAction<{\n    repoUrl: string;\n    description?: string | undefined;\n    defaultBranch?: string | undefined;\n    protectDefaultBranch?: boolean | undefined;\n    protectEnforceAdmins?: boolean | undefined;\n    gitCommitMessage?: string | undefined;\n    gitAuthorName?: string | undefined;\n    gitAuthorEmail?: string | undefined;\n    requireCodeOwnerReviews?: boolean | undefined;\n    dismissStaleReviews?: boolean | undefined;\n    bypassPullRequestAllowances?: {\n        users?: string[];\n        teams?: string[];\n        apps?: string[];\n    } | undefined;\n    requiredApprovingReviewCount?: number | undefined;\n    restrictions?: {\n        users: string[];\n        teams: string[];\n        apps?: string[];\n    } | undefined;\n    requiredStatusCheckContexts?: string[] | undefined;\n    requireBranchesToBeUpToDate?: boolean | undefined;\n    requiredConversationResolution?: boolean | undefined;\n    sourcePath?: string | undefined;\n    token?: string | undefined;\n    requiredCommitSigning?: boolean | undefined;\n    requireLastPushApproval?: boolean | undefined;\n}, import("@backstage/types").JsonObject>;\n'})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"options"}),(0,r.jsxs)(n.td,{children:["{ integrations: ",(0,r.jsx)(n.a,{href:"/docs/reference/integration.scmintegrationregistry",children:"ScmIntegrationRegistry"}),"; config: ",(0,r.jsx)(n.a,{href:"/docs/reference/config.config",children:"Config"}),"; githubCredentialsProvider?: ",(0,r.jsx)(n.a,{href:"/docs/reference/integration.githubcredentialsprovider",children:"GithubCredentialsProvider"}),"; }"]}),(0,r.jsx)(n.td,{})]})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(n.p,{children:['import("@backstage/plugin-scaffolder-node").',(0,r.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-node.templateaction",children:"TemplateAction"}),'<{ repoUrl: string; description?: string | undefined; defaultBranch?: string | undefined; protectDefaultBranch?: boolean | undefined; protectEnforceAdmins?: boolean | undefined; gitCommitMessage?: string | undefined; gitAuthorName?: string | undefined; gitAuthorEmail?: string | undefined; requireCodeOwnerReviews?: boolean | undefined; dismissStaleReviews?: boolean | undefined; bypassPullRequestAllowances?: { users?: string[]; teams?: string[]; apps?: string[]; } | undefined; requiredApprovingReviewCount?: number | undefined; restrictions?: { users: string[]; teams: string[]; apps?: string[]; } | undefined; requiredStatusCheckContexts?: string[] | undefined; requireBranchesToBeUpToDate?: boolean | undefined; requiredConversationResolution?: boolean | undefined; sourcePath?: string | undefined; token?: string | undefined; requiredCommitSigning?: boolean | undefined; requireLastPushApproval?: boolean | undefined; }, import("@backstage/types").',(0,r.jsx)(n.a,{href:"/docs/reference/types.jsonobject",children:"JsonObject"}),">"]})]})}function l(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},675251:(e,n,t)=>{var r=t(667294),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,o={},c=null,u=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(u=n.ref),n)s.call(n,r)&&!a.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:i,type:e,key:c,ref:u,props:o,_owner:d.current}}n.Fragment=o,n.jsx=c,n.jsxs=c},785893:(e,n,t)=>{e.exports=t(675251)},511151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>s});var r=t(667294);const i={},o=r.createContext(i);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);