/*! For license information please see 6b5ef066.11d10ee0.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[308830],{894199:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=r(785893),s=r(511151);const i={id:"integration.getazurerequestoptions",title:"getAzureRequestOptions()",description:"API reference for getAzureRequestOptions()"},o=void 0,c={id:"reference/integration.getazurerequestoptions",title:"getAzureRequestOptions()",description:"API reference for getAzureRequestOptions()",source:"@site/../docs/reference/integration.getazurerequestoptions.md",sourceDirName:"reference",slug:"/reference/integration.getazurerequestoptions",permalink:"/docs/next/reference/integration.getazurerequestoptions",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/integration.getazurerequestoptions.md",tags:[],version:"current",frontMatter:{id:"integration.getazurerequestoptions",title:"getAzureRequestOptions()",description:"API reference for getAzureRequestOptions()"}},a={},d=[{value:"Parameters",id:"parameters",level:2}];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/next/reference/integration",children:(0,n.jsx)(t.code,{children:"@backstage/integration"})})," > ",(0,n.jsx)(t.a,{href:"/docs/next/reference/integration.getazurerequestoptions",children:(0,n.jsx)(t.code,{children:"getAzureRequestOptions"})})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Warning: This API is now obsolete."}),"\n",(0,n.jsxs)(t.p,{children:["Use ",(0,n.jsx)(t.a,{href:"/docs/next/reference/integration.azuredevopscredentialsprovider",children:"AzureDevOpsCredentialsProvider"})," instead."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Gets the request options necessary to make requests to a given provider."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"function getAzureRequestOptions(config: AzureIntegrationConfig, additionalHeaders?: Record<string, string>): Promise<{\n    headers: Record<string, string>;\n}>;\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"config"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/next/reference/integration.azureintegrationconfig",children:"AzureIntegrationConfig"})}),(0,n.jsx)(t.td,{children:"The relevant provider config"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"additionalHeaders"}),(0,n.jsx)(t.td,{children:"Record<string, string>"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.em,{children:"(Optional)"})," Additional headers for the request"]})]})]})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(t.p,{children:"Promise<{ headers: Record<string, string>; }>"})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},675251:(e,t,r)=>{var n=r(667294),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,r){var n,i={},d=null,l=null;for(n in void 0!==r&&(d=""+r),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)o.call(t,n)&&!a.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:s,type:e,key:d,ref:l,props:i,_owner:c.current}}t.Fragment=i,t.jsx=d,t.jsxs=d},785893:(e,t,r)=>{e.exports=r(675251)},511151:(e,t,r)=>{r.d(t,{Z:()=>c,a:()=>o});var n=r(667294);const s={},i=n.createContext(s);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);