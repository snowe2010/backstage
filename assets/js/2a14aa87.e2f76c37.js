/*! For license information please see 2a14aa87.e2f76c37.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[299896],{480664:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=n(785893),i=n(511151);const s={id:"integration.getgiteafilecontentsurl",title:"getGiteaFileContentsUrl()",description:"API reference for getGiteaFileContentsUrl()"},o=void 0,a={id:"reference/integration.getgiteafilecontentsurl",title:"getGiteaFileContentsUrl()",description:"API reference for getGiteaFileContentsUrl()",source:"@site/versioned_docs/version-stable/reference/integration.getgiteafilecontentsurl.md",sourceDirName:"reference",slug:"/reference/integration.getgiteafilecontentsurl",permalink:"/docs/reference/integration.getgiteafilecontentsurl",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/integration.getgiteafilecontentsurl.md",tags:[],version:"stable",frontMatter:{id:"integration.getgiteafilecontentsurl",title:"getGiteaFileContentsUrl()",description:"API reference for getGiteaFileContentsUrl()"}},c={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/integration",children:(0,r.jsx)(t.code,{children:"@backstage/integration"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/integration.getgiteafilecontentsurl",children:(0,r.jsx)(t.code,{children:"getGiteaFileContentsUrl"})})]}),"\n",(0,r.jsx)(t.p,{children:"Given a URL pointing to a file, returns an api URL for fetching the contents of the data."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"function getGiteaFileContentsUrl(config: GiteaIntegrationConfig, url: string): string;\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"config"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/integration.giteaintegrationconfig",children:"GiteaIntegrationConfig"})}),(0,r.jsx)(t.td,{children:"The relevant provider config"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"url"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"A URL pointing to a file"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,r.jsx)(t.p,{children:"string"}),"\n",(0,r.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsxs)(t.p,{children:["Converts from: ",(0,r.jsx)(t.a,{href:"https://gitea.com/a/b/src/branch/branchname/path/to/c.yaml",children:"https://gitea.com/a/b/src/branch/branchname/path/to/c.yaml"})," to: ",(0,r.jsx)(t.a,{href:"https://gitea.com/api/v1/repos/a/b/contents/path/to/c.yaml?ref=branchname",children:"https://gitea.com/api/v1/repos/a/b/contents/path/to/c.yaml?ref=branchname"})]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},675251:(e,t,n)=>{var r=n(667294),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,s={},l=null,d=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,r)&&!c.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:i,type:e,key:l,ref:d,props:s,_owner:a.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},785893:(e,t,n)=>{e.exports=n(675251)},511151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var r=n(667294);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);