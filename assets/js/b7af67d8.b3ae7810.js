/*! For license information please see b7af67d8.b3ae7810.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[663596],{356049:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>c,metadata:()=>s,toc:()=>a});var n=o(785893),t=o(511151);const c={id:"plugin-catalog-backend-module-github.githuborgreaderprocessor.fromconfig",title:"GithubOrgReaderProcessor.fromConfig()",description:"API reference for GithubOrgReaderProcessor.fromConfig()"},i=void 0,s={id:"reference/plugin-catalog-backend-module-github.githuborgreaderprocessor.fromconfig",title:"GithubOrgReaderProcessor.fromConfig()",description:"API reference for GithubOrgReaderProcessor.fromConfig()",source:"@site/versioned_docs/version-stable/reference/plugin-catalog-backend-module-github.githuborgreaderprocessor.fromconfig.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend-module-github.githuborgreaderprocessor.fromconfig",permalink:"/docs/reference/plugin-catalog-backend-module-github.githuborgreaderprocessor.fromconfig",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-catalog-backend-module-github.githuborgreaderprocessor.fromconfig.md",tags:[],version:"stable",frontMatter:{id:"plugin-catalog-backend-module-github.githuborgreaderprocessor.fromconfig",title:"GithubOrgReaderProcessor.fromConfig()",description:"API reference for GithubOrgReaderProcessor.fromConfig()"}},d={},a=[{value:"Parameters",id:"parameters",level:2}];function g(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-github",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-catalog-backend-module-github"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-github.githuborgreaderprocessor",children:(0,n.jsx)(r.code,{children:"GithubOrgReaderProcessor"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-github.githuborgreaderprocessor.fromconfig",children:(0,n.jsx)(r.code,{children:"fromConfig"})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"static fromConfig(config: Config, options: {\n        logger: LoggerService;\n        githubCredentialsProvider?: GithubCredentialsProvider;\n    }): GithubOrgReaderProcessor;\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"config"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/config.config",children:"Config"})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"options"}),(0,n.jsxs)(r.td,{children:["{ logger: ",(0,n.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.loggerservice",children:"LoggerService"}),"; githubCredentialsProvider?: ",(0,n.jsx)(r.a,{href:"/docs/reference/integration.githubcredentialsprovider",children:"GithubCredentialsProvider"}),"; }"]}),(0,n.jsx)(r.td,{})]})]})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-github.githuborgreaderprocessor",children:"GithubOrgReaderProcessor"})})]})}function l(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}},675251:(e,r,o)=>{var n=o(667294),t=Symbol.for("react.element"),c=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,o){var n,c={},a=null,g=null;for(n in void 0!==o&&(a=""+o),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(g=r.ref),r)i.call(r,n)&&!d.hasOwnProperty(n)&&(c[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===c[n]&&(c[n]=r[n]);return{$$typeof:t,type:e,key:a,ref:g,props:c,_owner:s.current}}r.Fragment=c,r.jsx=a,r.jsxs=a},785893:(e,r,o)=>{e.exports=o(675251)},511151:(e,r,o)=>{o.d(r,{Z:()=>s,a:()=>i});var n=o(667294);const t={},c=n.createContext(t);function i(e){const r=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(c.Provider,{value:r},e.children)}}}]);