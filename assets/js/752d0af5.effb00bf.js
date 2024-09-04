/*! For license information please see 752d0af5.effb00bf.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[863695],{687903:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>i});var r=n(785893),s=n(511151);const o={id:"plugin-auth-backend.oauthresult",title:"OAuthResult",description:"API reference for OAuthResult"},c=void 0,u={id:"reference/plugin-auth-backend.oauthresult",title:"OAuthResult",description:"API reference for OAuthResult",source:"@site/../docs/reference/plugin-auth-backend.oauthresult.md",sourceDirName:"reference",slug:"/reference/plugin-auth-backend.oauthresult",permalink:"/docs/next/reference/plugin-auth-backend.oauthresult",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-auth-backend.oauthresult.md",tags:[],version:"current",frontMatter:{id:"plugin-auth-backend.oauthresult",title:"OAuthResult",description:"API reference for OAuthResult"}},a={},i=[];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/plugin-auth-backend",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-auth-backend"})})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/plugin-auth-backend.oauthresult",children:(0,r.jsx)(t.code,{children:"OAuthResult"})})]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Warning: This API is now obsolete."}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"OAuthAuthenticatorResult<PassportProfile>"})," from ",(0,r.jsx)(t.code,{children:"@backstage/plugin-auth-node"})," instead"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"export type OAuthResult = {\n    fullProfile: PassportProfile;\n    params: {\n        id_token?: string;\n        scope: string;\n        token_type?: string;\n        expires_in: number;\n    };\n    accessToken: string;\n    refreshToken?: string;\n};\n"})})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},675251:(e,t,n)=>{var r=n(667294),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,u=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,n){var r,o={},i=null,l=null;for(r in void 0!==n&&(i=""+n),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(l=t.ref),t)c.call(t,r)&&!a.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:s,type:e,key:i,ref:l,props:o,_owner:u.current}}t.Fragment=o,t.jsx=i,t.jsxs=i},785893:(e,t,n)=>{e.exports=n(675251)},511151:(e,t,n)=>{n.d(t,{Z:()=>u,a:()=>c});var r=n(667294);const s={},o=r.createContext(s);function c(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);