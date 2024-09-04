/*! For license information please see 854ada30.6ccabd88.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[192068],{280091:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var n=r(785893),s=r(511151);const a={id:"integration.getharnesslatestcommiturl",title:"getHarnessLatestCommitUrl()",description:"API reference for getHarnessLatestCommitUrl()"},o=void 0,i={id:"reference/integration.getharnesslatestcommiturl",title:"getHarnessLatestCommitUrl()",description:"API reference for getHarnessLatestCommitUrl()",source:"@site/../docs/reference/integration.getharnesslatestcommiturl.md",sourceDirName:"reference",slug:"/reference/integration.getharnesslatestcommiturl",permalink:"/docs/next/reference/integration.getharnesslatestcommiturl",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/integration.getharnesslatestcommiturl.md",tags:[],version:"current",frontMatter:{id:"integration.getharnesslatestcommiturl",title:"getHarnessLatestCommitUrl()",description:"API reference for getHarnessLatestCommitUrl()"}},c={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/next/reference/integration",children:(0,n.jsx)(t.code,{children:"@backstage/integration"})})," > ",(0,n.jsx)(t.a,{href:"/docs/next/reference/integration.getharnesslatestcommiturl",children:(0,n.jsx)(t.code,{children:"getHarnessLatestCommitUrl"})})]}),"\n",(0,n.jsx)(t.p,{children:"Given a URL pointing to a repository branch, returns a URL for latest commit information."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"function getHarnessLatestCommitUrl(config: HarnessIntegrationConfig, url: string): string;\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"config"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/next/reference/integration.harnessintegrationconfig",children:"HarnessIntegrationConfig"})}),(0,n.jsx)(t.td,{children:"The relevant provider config"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"url"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"A URL pointing to a repository branch"})]})]})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(t.p,{children:"string"}),"\n",(0,n.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(t.p,{children:["Converts from: ",(0,n.jsx)(t.a,{href:"https://app.harness.io/ng/account/accountId/module/code/orgs/orgName/projects/projectName/repos/repoName/files/branchName",children:"https://app.harness.io/ng/account/accountId/module/code/orgs/orgName/projects/projectName/repos/repoName/files/branchName"})," to: ",(0,n.jsx)(t.a,{href:"https://app.harness.io/gateway/code/api/v1/repos/accountId/orgName/projectName/repoName/+/content?routingId=accountId&amp;include%5C_commit=true&amp;git%5C_ref=refs/heads/branchName",children:"https://app.harness.io/gateway/code/api/v1/repos/accountId/orgName/projectName/repoName/+/content?routingId=accountId&amp;include\\_commit=true&amp;git\\_ref=refs/heads/branchName"})]})]})}function m(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},675251:(e,t,r)=>{var n=r(667294),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,r){var n,a={},d=null,l=null;for(n in void 0!==r&&(d=""+r),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)o.call(t,n)&&!c.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:s,type:e,key:d,ref:l,props:a,_owner:i.current}}t.Fragment=a,t.jsx=d,t.jsxs=d},785893:(e,t,r)=>{e.exports=r(675251)},511151:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>o});var n=r(667294);const s={},a=n.createContext(s);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);