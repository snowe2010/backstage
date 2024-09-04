/*! For license information please see 420ff0d9.92848467.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[749289],{943217:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var n=r(785893),i=r(511151);const a={id:"plugin-events-backend-module-github.creategithubsignaturevalidator",title:"createGithubSignatureValidator()",description:"API reference for createGithubSignatureValidator()"},s=void 0,o={id:"reference/plugin-events-backend-module-github.creategithubsignaturevalidator",title:"createGithubSignatureValidator()",description:"API reference for createGithubSignatureValidator()",source:"@site/../docs/reference/plugin-events-backend-module-github.creategithubsignaturevalidator.md",sourceDirName:"reference",slug:"/reference/plugin-events-backend-module-github.creategithubsignaturevalidator",permalink:"/docs/next/reference/plugin-events-backend-module-github.creategithubsignaturevalidator",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-events-backend-module-github.creategithubsignaturevalidator.md",tags:[],version:"current",frontMatter:{id:"plugin-events-backend-module-github.creategithubsignaturevalidator",title:"createGithubSignatureValidator()",description:"API reference for createGithubSignatureValidator()"}},c={},d=[{value:"Parameters",id:"parameters",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/next/reference/plugin-events-backend-module-github",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-events-backend-module-github"})})," > ",(0,n.jsx)(t.a,{href:"/docs/next/reference/plugin-events-backend-module-github.creategithubsignaturevalidator",children:(0,n.jsx)(t.code,{children:"createGithubSignatureValidator"})})]}),"\n",(0,n.jsxs)(t.p,{children:["Validates that the request received is the expected GitHub request using the signature received with the ",(0,n.jsx)(t.code,{children:"x-hub-signature-256"})," header which is based on a secret token configured at GitHub and here."]}),"\n",(0,n.jsxs)(t.p,{children:["See ",(0,n.jsx)(t.a,{href:"https://docs.github.com/en/developers/webhooks-and-events/webhooks/securing-your-webhooks",children:"https://docs.github.com/en/developers/webhooks-and-events/webhooks/securing-your-webhooks"})," for more details."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"function createGithubSignatureValidator(config: Config): RequestValidator;\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"config"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/next/reference/config.config",children:"Config"})}),(0,n.jsx)(t.td,{children:"root config"})]})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"/docs/next/reference/plugin-events-node.requestvalidator",children:"RequestValidator"})})]})}function l(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},675251:(e,t,r)=>{var n=r(667294),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,r){var n,a={},d=null,u=null;for(n in void 0!==r&&(d=""+r),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,n)&&!c.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:i,type:e,key:d,ref:u,props:a,_owner:o.current}}t.Fragment=a,t.jsx=d,t.jsxs=d},785893:(e,t,r)=>{e.exports=r(675251)},511151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>s});var n=r(667294);const i={},a=n.createContext(i);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);