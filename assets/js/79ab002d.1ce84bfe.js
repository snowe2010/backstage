/*! For license information please see 79ab002d.1ce84bfe.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[493489],{497828:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var s=n(785893),t=n(511151);const o={id:"integration.parsegerritjsonresponse",title:"parseGerritJsonResponse()",description:"API reference for parseGerritJsonResponse()"},i=void 0,a={id:"reference/integration.parsegerritjsonresponse",title:"parseGerritJsonResponse()",description:"API reference for parseGerritJsonResponse()",source:"@site/versioned_docs/version-stable/reference/integration.parsegerritjsonresponse.md",sourceDirName:"reference",slug:"/reference/integration.parsegerritjsonresponse",permalink:"/docs/reference/integration.parsegerritjsonresponse",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/integration.parsegerritjsonresponse.md",tags:[],version:"stable",frontMatter:{id:"integration.parsegerritjsonresponse",title:"parseGerritJsonResponse()",description:"API reference for parseGerritJsonResponse()"}},c={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function d(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,s.jsx)(r.a,{href:"/docs/reference/integration",children:(0,s.jsx)(r.code,{children:"@backstage/integration"})})," > ",(0,s.jsx)(r.a,{href:"/docs/reference/integration.parsegerritjsonresponse",children:(0,s.jsx)(r.code,{children:"parseGerritJsonResponse"})})]}),"\n",(0,s.jsx)(r.p,{children:"Parse the json response from Gerrit and strip the magic prefix."}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"function parseGerritJsonResponse(response: Response): Promise<unknown>;\n"})}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Parameter"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"response"}),(0,s.jsx)(r.td,{children:"Response"}),(0,s.jsx)(r.td,{children:"An API response."})]})})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,s.jsx)(r.p,{children:"Promise<unknown>"}),"\n",(0,s.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsx)(r.p,{children:"To prevent against XSSI attacks the JSON response body from Gerrit starts with a magic prefix that must be stripped before it can be fed to a JSON parser."})]})}function l(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},675251:(e,r,n)=>{var s=n(667294),t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function p(e,r,n){var s,o={},p=null,d=null;for(s in void 0!==n&&(p=""+n),void 0!==r.key&&(p=""+r.key),void 0!==r.ref&&(d=r.ref),r)i.call(r,s)&&!c.hasOwnProperty(s)&&(o[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===o[s]&&(o[s]=r[s]);return{$$typeof:t,type:e,key:p,ref:d,props:o,_owner:a.current}}r.Fragment=o,r.jsx=p,r.jsxs=p},785893:(e,r,n)=>{e.exports=n(675251)},511151:(e,r,n)=>{n.d(r,{Z:()=>a,a:()=>i});var s=n(667294);const t={},o=s.createContext(t);function i(e){const r=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);