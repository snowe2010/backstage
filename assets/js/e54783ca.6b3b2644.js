/*! For license information please see e54783ca.6b3b2644.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[713756],{761654:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=t(785893),s=t(511151);const a={id:"plugin-auth-backend.authhandler",title:"AuthHandler",description:"API reference for AuthHandler"},o=void 0,c={id:"reference/plugin-auth-backend.authhandler",title:"AuthHandler",description:"API reference for AuthHandler",source:"@site/versioned_docs/version-stable/reference/plugin-auth-backend.authhandler.md",sourceDirName:"reference",slug:"/reference/plugin-auth-backend.authhandler",permalink:"/docs/reference/plugin-auth-backend.authhandler",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-auth-backend.authhandler.md",tags:[],version:"stable",frontMatter:{id:"plugin-auth-backend.authhandler",title:"AuthHandler",description:"API reference for AuthHandler"}},i={},l=[];function u(e){const n={a:"a",blockquote:"blockquote",code:"code",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-auth-backend",children:(0,r.jsx)(n.code,{children:"@backstage/plugin-auth-backend"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-auth-backend.authhandler",children:(0,r.jsx)(n.code,{children:"AuthHandler"})})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Warning: This API is now obsolete."}),"\n",(0,r.jsxs)(n.p,{children:["Use ",(0,r.jsx)(n.code,{children:"createOAuthRouteHandlers"})," from ",(0,r.jsx)(n.code,{children:"@backstage/plugin-auth-node"})," instead"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The AuthHandler function is called every time the user authenticates using the provider."}),"\n",(0,r.jsx)(n.p,{children:"The handler should return a profile that represents the session for the user in the frontend."}),"\n",(0,r.jsx)(n.p,{children:"Throwing an error in the function will cause the authentication to fail, making it possible to use this function as a way to limit access to a certain group of users."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"export type AuthHandler<TAuthResult> = (input: TAuthResult, context: _AuthResolverContext) => Promise<AuthHandlerResult>;\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"References:"})," ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-auth-node.authresolvercontext",children:"_AuthResolverContext"}),", ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-auth-backend.authhandlerresult",children:"AuthHandlerResult"})]})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},675251:(e,n,t)=>{var r=t(667294),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var r,a={},l=null,u=null;for(r in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(u=n.ref),n)o.call(n,r)&&!i.hasOwnProperty(r)&&(a[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===a[r]&&(a[r]=n[r]);return{$$typeof:s,type:e,key:l,ref:u,props:a,_owner:c.current}}n.Fragment=a,n.jsx=l,n.jsxs=l},785893:(e,n,t)=>{e.exports=t(675251)},511151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>o});var r=t(667294);const s={},a=r.createContext(s);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);