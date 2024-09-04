/*! For license information please see 46abe147.2247200a.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[822417],{485004:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>t,metadata:()=>d,toc:()=>i});var n=s(785893),o=s(511151);const t={id:"errors.parseerrorresponsebody",title:"parseErrorResponseBody()",description:"API reference for parseErrorResponseBody()"},c=void 0,d={id:"reference/errors.parseerrorresponsebody",title:"parseErrorResponseBody()",description:"API reference for parseErrorResponseBody()",source:"@site/../docs/reference/errors.parseerrorresponsebody.md",sourceDirName:"reference",slug:"/reference/errors.parseerrorresponsebody",permalink:"/docs/next/reference/errors.parseerrorresponsebody",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/errors.parseerrorresponsebody.md",tags:[],version:"current",frontMatter:{id:"errors.parseerrorresponsebody",title:"parseErrorResponseBody()",description:"API reference for parseErrorResponseBody()"}},a={},i=[{value:"Parameters",id:"parameters",level:2}];function p(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/next/reference/errors",children:(0,n.jsx)(r.code,{children:"@backstage/errors"})})," > ",(0,n.jsx)(r.a,{href:"/docs/next/reference/errors.parseerrorresponsebody",children:(0,n.jsx)(r.code,{children:"parseErrorResponseBody"})})]}),"\n",(0,n.jsx)(r.p,{children:"Attempts to construct an ErrorResponseBody out of a failed server request. Assumes that the response has already been checked to be not ok. This function consumes the body of the response, and assumes that it hasn't been consumed before."}),"\n",(0,n.jsx)(r.p,{children:"The code is forgiving, and constructs a useful synthetic body as best it can if the response body wasn't on the expected form."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"function parseErrorResponseBody(response: ConsumedResponse & {\n    text(): Promise<string>;\n}): Promise<ErrorResponseBody>;\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"response"}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.a,{href:"/docs/next/reference/errors.consumedresponse",children:"ConsumedResponse"})," & { text(): Promise<string>; }"]}),(0,n.jsx)(r.td,{children:"The response of a failed request"})]})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsxs)(r.p,{children:["Promise<",(0,n.jsx)(r.a,{href:"/docs/next/reference/errors.errorresponsebody",children:"ErrorResponseBody"}),">"]})]})}function l(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},675251:(e,r,s)=>{var n=s(667294),o=Symbol.for("react.element"),t=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,d=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,s){var n,t={},i=null,p=null;for(n in void 0!==s&&(i=""+s),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(p=r.ref),r)c.call(r,n)&&!a.hasOwnProperty(n)&&(t[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===t[n]&&(t[n]=r[n]);return{$$typeof:o,type:e,key:i,ref:p,props:t,_owner:d.current}}r.Fragment=t,r.jsx=i,r.jsxs=i},785893:(e,r,s)=>{e.exports=s(675251)},511151:(e,r,s)=>{s.d(r,{Z:()=>d,a:()=>c});var n=s(667294);const o={},t=n.createContext(o);function c(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);