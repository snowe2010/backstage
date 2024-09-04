/*! For license information please see dce523f9.164f1a37.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[695809],{842605:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>u,toc:()=>a});var n=r(785893),s=r(511151);const c={id:"plugin-auth-backend.bitbucketserveroauthresult",title:"BitbucketServerOAuthResult",description:"API reference for BitbucketServerOAuthResult"},o=void 0,u={id:"reference/plugin-auth-backend.bitbucketserveroauthresult",title:"BitbucketServerOAuthResult",description:"API reference for BitbucketServerOAuthResult",source:"@site/versioned_docs/version-stable/reference/plugin-auth-backend.bitbucketserveroauthresult.md",sourceDirName:"reference",slug:"/reference/plugin-auth-backend.bitbucketserveroauthresult",permalink:"/docs/reference/plugin-auth-backend.bitbucketserveroauthresult",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-auth-backend.bitbucketserveroauthresult.md",tags:[],version:"stable",frontMatter:{id:"plugin-auth-backend.bitbucketserveroauthresult",title:"BitbucketServerOAuthResult",description:"API reference for BitbucketServerOAuthResult"}},i={},a=[];function l(e){const t={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-auth-backend",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-auth-backend"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-auth-backend.bitbucketserveroauthresult",children:(0,n.jsx)(t.code,{children:"BitbucketServerOAuthResult"})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"export type BitbucketServerOAuthResult = {\n    fullProfile: PassportProfile;\n    params: {\n        scope: string;\n        access_token?: string;\n        token_type?: string;\n        expires_in?: number;\n    };\n    accessToken: string;\n    refreshToken?: string;\n};\n"})})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},675251:(e,t,r)=>{var n=r(667294),s=Symbol.for("react.element"),c=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,r){var n,c={},a=null,l=null;for(n in void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(l=t.ref),t)o.call(t,n)&&!i.hasOwnProperty(n)&&(c[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===c[n]&&(c[n]=t[n]);return{$$typeof:s,type:e,key:a,ref:l,props:c,_owner:u.current}}t.Fragment=c,t.jsx=a,t.jsxs=a},785893:(e,t,r)=>{e.exports=r(675251)},511151:(e,t,r)=>{r.d(t,{Z:()=>u,a:()=>o});var n=r(667294);const s={},c=n.createContext(s);function o(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);