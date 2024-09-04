/*! For license information please see c8a89670.9fd7109d.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[379200],{509379:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>a});var n=r(785893),c=r(511151);const s={id:"plugin-auth-backend.bitbucketoauthresult",title:"BitbucketOAuthResult",description:"API reference for BitbucketOAuthResult"},o=void 0,u={id:"reference/plugin-auth-backend.bitbucketoauthresult",title:"BitbucketOAuthResult",description:"API reference for BitbucketOAuthResult",source:"@site/versioned_docs/version-stable/reference/plugin-auth-backend.bitbucketoauthresult.md",sourceDirName:"reference",slug:"/reference/plugin-auth-backend.bitbucketoauthresult",permalink:"/docs/reference/plugin-auth-backend.bitbucketoauthresult",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-auth-backend.bitbucketoauthresult.md",tags:[],version:"stable",frontMatter:{id:"plugin-auth-backend.bitbucketoauthresult",title:"BitbucketOAuthResult",description:"API reference for BitbucketOAuthResult"}},i={},a=[];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",p:"p",pre:"pre",strong:"strong",...(0,c.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-auth-backend",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-auth-backend"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-auth-backend.bitbucketoauthresult",children:(0,n.jsx)(t.code,{children:"BitbucketOAuthResult"})})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Warning: This API is now obsolete."}),"\n",(0,n.jsxs)(t.p,{children:["The Bitbucket auth provider was extracted to ",(0,n.jsx)(t.code,{children:"@backstage/plugin-auth-backend-module-bitbucket-provider"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"export type BitbucketOAuthResult = {\n    fullProfile: BitbucketPassportProfile;\n    params: {\n        id_token?: string;\n        scope: string;\n        expires_in: number;\n    };\n    accessToken: string;\n    refreshToken?: string;\n};\n"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"References:"})," ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-auth-backend.bitbucketpassportprofile",children:"BitbucketPassportProfile"})]})]})}function d(e={}){const{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},675251:(e,t,r)=>{var n=r(667294),c=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,r){var n,s={},a=null,l=null;for(n in void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(l=t.ref),t)o.call(t,n)&&!i.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:c,type:e,key:a,ref:l,props:s,_owner:u.current}}t.Fragment=s,t.jsx=a,t.jsxs=a},785893:(e,t,r)=>{e.exports=r(675251)},511151:(e,t,r)=>{r.d(t,{Z:()=>u,a:()=>o});var n=r(667294);const c={},s=n.createContext(c);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);