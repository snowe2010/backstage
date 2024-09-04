/*! For license information please see f0f6cabb.2ed744e0.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[615147],{884638:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>u,metadata:()=>c,toc:()=>a});var n=r(785893),s=r(511151);const u={id:"plugin-auth-backend.githuboauthresult",title:"GithubOAuthResult",description:"API reference for GithubOAuthResult"},o=void 0,c={id:"reference/plugin-auth-backend.githuboauthresult",title:"GithubOAuthResult",description:"API reference for GithubOAuthResult",source:"@site/../docs/reference/plugin-auth-backend.githuboauthresult.md",sourceDirName:"reference",slug:"/reference/plugin-auth-backend.githuboauthresult",permalink:"/docs/next/reference/plugin-auth-backend.githuboauthresult",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-auth-backend.githuboauthresult.md",tags:[],version:"current",frontMatter:{id:"plugin-auth-backend.githuboauthresult",title:"GithubOAuthResult",description:"API reference for GithubOAuthResult"}},i={},a=[];function l(e){const t={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/next/reference/plugin-auth-backend",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-auth-backend"})})," > ",(0,n.jsx)(t.a,{href:"/docs/next/reference/plugin-auth-backend.githuboauthresult",children:(0,n.jsx)(t.code,{children:"GithubOAuthResult"})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"export type GithubOAuthResult = {\n    fullProfile: PassportProfile;\n    params: {\n        scope: string;\n        expires_in?: string;\n        refresh_token_expires_in?: string;\n    };\n    accessToken: string;\n    refreshToken?: string;\n};\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},675251:(e,t,r)=>{var n=r(667294),s=Symbol.for("react.element"),u=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,r){var n,u={},a=null,l=null;for(n in void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(l=t.ref),t)o.call(t,n)&&!i.hasOwnProperty(n)&&(u[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===u[n]&&(u[n]=t[n]);return{$$typeof:s,type:e,key:a,ref:l,props:u,_owner:c.current}}t.Fragment=u,t.jsx=a,t.jsxs=a},785893:(e,t,r)=>{e.exports=r(675251)},511151:(e,t,r)=>{r.d(t,{Z:()=>c,a:()=>o});var n=r(667294);const s={},u=n.createContext(s);function o(e){const t=n.useContext(u);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(u.Provider,{value:t},e.children)}}}]);