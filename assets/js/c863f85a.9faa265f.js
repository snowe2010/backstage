/*! For license information please see c863f85a.9faa265f.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[983058],{500647:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>l,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var n=r(785893),o=r(511151);const c={id:"core-plugin-api.oauthapi",title:"OAuthApi",description:"API reference for OAuthApi"},s=void 0,i={id:"reference/core-plugin-api.oauthapi",title:"OAuthApi",description:"API reference for OAuthApi",source:"@site/../docs/reference/core-plugin-api.oauthapi.md",sourceDirName:"reference",slug:"/reference/core-plugin-api.oauthapi",permalink:"/docs/next/reference/core-plugin-api.oauthapi",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-plugin-api.oauthapi.md",tags:[],version:"current",frontMatter:{id:"core-plugin-api.oauthapi",title:"OAuthApi",description:"API reference for OAuthApi"}},a={},p=[];function u(e){const t={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/next/reference/core-plugin-api",children:(0,n.jsx)(t.code,{children:"@backstage/core-plugin-api"})})," > ",(0,n.jsx)(t.a,{href:"/docs/next/reference/core-plugin-api.oauthapi",children:(0,n.jsx)(t.code,{children:"OAuthApi"})})]}),"\n",(0,n.jsx)(t.p,{children:"This API provides access to OAuth 2 credentials. It lets you request access tokens, which can be used to act on behalf of the user when talking to APIs."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"export type OAuthApi = {\n    getAccessToken(scope?: OAuthScope, options?: AuthRequestOptions): Promise<string>;\n};\n"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"References:"})," ",(0,n.jsx)(t.a,{href:"/docs/next/reference/core-plugin-api.oauthscope",children:"OAuthScope"}),", ",(0,n.jsx)(t.a,{href:"/docs/next/reference/core-plugin-api.authrequestoptions",children:"AuthRequestOptions"})]})]})}function l(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},675251:(e,t,r)=>{var n=r(667294),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,r){var n,c={},p=null,u=null;for(n in void 0!==r&&(p=""+r),void 0!==t.key&&(p=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,n)&&!a.hasOwnProperty(n)&&(c[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===c[n]&&(c[n]=t[n]);return{$$typeof:o,type:e,key:p,ref:u,props:c,_owner:i.current}}t.Fragment=c,t.jsx=p,t.jsxs=p},785893:(e,t,r)=>{e.exports=r(675251)},511151:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>s});var n=r(667294);const o={},c=n.createContext(o);function s(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);