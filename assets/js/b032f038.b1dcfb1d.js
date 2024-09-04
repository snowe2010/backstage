/*! For license information please see b032f038.b1dcfb1d.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[524434],{762273:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=t(785893),i=t(511151);const o={id:"integration.githubappconfig",title:"GithubAppConfig",description:"API reference for GithubAppConfig"},c=void 0,s={id:"reference/integration.githubappconfig",title:"GithubAppConfig",description:"API reference for GithubAppConfig",source:"@site/versioned_docs/version-stable/reference/integration.githubappconfig.md",sourceDirName:"reference",slug:"/reference/integration.githubappconfig",permalink:"/docs/reference/integration.githubappconfig",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/integration.githubappconfig.md",tags:[],version:"stable",frontMatter:{id:"integration.githubappconfig",title:"GithubAppConfig",description:"API reference for GithubAppConfig"}},a={},p=[{value:"Remarks",id:"remarks",level:2}];function f(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/integration",children:(0,r.jsx)(n.code,{children:"@backstage/integration"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/integration.githubappconfig",children:(0,r.jsx)(n.code,{children:"GithubAppConfig"})})]}),"\n",(0,r.jsx)(n.p,{children:"The configuration parameters for authenticating a GitHub Application."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"export type GithubAppConfig = {\n    appId: number;\n    privateKey: string;\n    webhookSecret: string;\n    clientId: string;\n    clientSecret: string;\n    allowedInstallationOwners?: string[];\n};\n"})}),"\n",(0,r.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsxs)(n.p,{children:["A GitHub Apps configuration can be generated using the ",(0,r.jsx)(n.code,{children:"backstage-cli create-github-app"})," command."]})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},675251:(e,n,t)=>{var r=t(667294),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function p(e,n,t){var r,o={},p=null,f=null;for(r in void 0!==t&&(p=""+t),void 0!==n.key&&(p=""+n.key),void 0!==n.ref&&(f=n.ref),n)c.call(n,r)&&!a.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:i,type:e,key:p,ref:f,props:o,_owner:s.current}}n.Fragment=o,n.jsx=p,n.jsxs=p},785893:(e,n,t)=>{e.exports=t(675251)},511151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>c});var r=t(667294);const i={},o=r.createContext(i);function c(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);