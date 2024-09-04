/*! For license information please see e7299294.88311f35.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[961736],{16620:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>f});var o=r(785893),t=r(511151);const i={id:"plugin-auth-node.profileinfo",title:"ProfileInfo",description:"API reference for ProfileInfo"},s=void 0,c={id:"reference/plugin-auth-node.profileinfo",title:"ProfileInfo",description:"API reference for ProfileInfo",source:"@site/versioned_docs/version-stable/reference/plugin-auth-node.profileinfo.md",sourceDirName:"reference",slug:"/reference/plugin-auth-node.profileinfo",permalink:"/docs/reference/plugin-auth-node.profileinfo",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-auth-node.profileinfo.md",tags:[],version:"stable",frontMatter:{id:"plugin-auth-node.profileinfo",title:"ProfileInfo",description:"API reference for ProfileInfo"}},a={},f=[];function l(e){const n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,o.jsx)(n.a,{href:"/docs/reference/plugin-auth-node",children:(0,o.jsx)(n.code,{children:"@backstage/plugin-auth-node"})})," > ",(0,o.jsx)(n.a,{href:"/docs/reference/plugin-auth-node.profileinfo",children:(0,o.jsx)(n.code,{children:"ProfileInfo"})})]}),"\n",(0,o.jsx)(n.p,{children:"Used to display login information to user, i.e. sidebar popup."}),"\n",(0,o.jsx)(n.p,{children:"It is also temporarily used as the profile of the signed-in user's Backstage identity, but we want to replace that with data from identity and/org catalog service"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"export type ProfileInfo = {\n    email?: string;\n    displayName?: string;\n    picture?: string;\n};\n"})})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},675251:(e,n,r)=>{var o=r(667294),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function f(e,n,r){var o,i={},f=null,l=null;for(o in void 0!==r&&(f=""+r),void 0!==n.key&&(f=""+n.key),void 0!==n.ref&&(l=n.ref),n)s.call(n,o)&&!a.hasOwnProperty(o)&&(i[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===i[o]&&(i[o]=n[o]);return{$$typeof:t,type:e,key:f,ref:l,props:i,_owner:c.current}}n.Fragment=i,n.jsx=f,n.jsxs=f},785893:(e,n,r)=>{e.exports=r(675251)},511151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>s});var o=r(667294);const t={},i=o.createContext(t);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);