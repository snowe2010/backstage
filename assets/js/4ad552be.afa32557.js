/*! For license information please see 4ad552be.afa32557.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[695038],{359913:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>f});var o=n(785893),t=n(511151);const s={id:"plugin-auth-node.profiletransform",title:"ProfileTransform",description:"API reference for ProfileTransform"},i=void 0,c={id:"reference/plugin-auth-node.profiletransform",title:"ProfileTransform",description:"API reference for ProfileTransform",source:"@site/versioned_docs/version-stable/reference/plugin-auth-node.profiletransform.md",sourceDirName:"reference",slug:"/reference/plugin-auth-node.profiletransform",permalink:"/docs/reference/plugin-auth-node.profiletransform",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-auth-node.profiletransform.md",tags:[],version:"stable",frontMatter:{id:"plugin-auth-node.profiletransform",title:"ProfileTransform",description:"API reference for ProfileTransform"}},a={},f=[];function l(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,o.jsx)(r.a,{href:"/docs/reference/plugin-auth-node",children:(0,o.jsx)(r.code,{children:"@backstage/plugin-auth-node"})})," > ",(0,o.jsx)(r.a,{href:"/docs/reference/plugin-auth-node.profiletransform",children:(0,o.jsx)(r.code,{children:"ProfileTransform"})})]}),"\n",(0,o.jsxs)(r.p,{children:["Describes the function that transforms the result of a successful authentication into a ",(0,o.jsx)(r.a,{href:"/docs/reference/plugin-auth-node.profileinfo",children:"ProfileInfo"})," object."]}),"\n",(0,o.jsx)(r.p,{children:"This function may optionally throw an error in order to reject authentication."}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-typescript",children:"export type ProfileTransform<TResult> = (result: TResult, context: AuthResolverContext) => Promise<{\n    profile: ProfileInfo;\n}>;\n"})}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"References:"})," ",(0,o.jsx)(r.a,{href:"/docs/reference/plugin-auth-node.authresolvercontext",children:"AuthResolverContext"}),", ",(0,o.jsx)(r.a,{href:"/docs/reference/plugin-auth-node.profileinfo",children:"ProfileInfo"})]})]})}function d(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},675251:(e,r,n)=>{var o=n(667294),t=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function f(e,r,n){var o,s={},f=null,l=null;for(o in void 0!==n&&(f=""+n),void 0!==r.key&&(f=""+r.key),void 0!==r.ref&&(l=r.ref),r)i.call(r,o)&&!a.hasOwnProperty(o)&&(s[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===s[o]&&(s[o]=r[o]);return{$$typeof:t,type:e,key:f,ref:l,props:s,_owner:c.current}}r.Fragment=s,r.jsx=f,r.jsxs=f},785893:(e,r,n)=>{e.exports=n(675251)},511151:(e,r,n)=>{n.d(r,{Z:()=>c,a:()=>i});var o=n(667294);const t={},s=o.createContext(t);function i(e){const r=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(s.Provider,{value:r},e.children)}}}]);