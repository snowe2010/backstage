/*! For license information please see fe0a4eaf.92dd0875.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[40276],{153950:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>a,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var t=n(785893),o=n(511151);const s={id:"plugin-catalog-backend-module-ldap.usertransformer",title:"UserTransformer",description:"API reference for UserTransformer"},a=void 0,c={id:"reference/plugin-catalog-backend-module-ldap.usertransformer",title:"UserTransformer",description:"API reference for UserTransformer",source:"@site/../docs/reference/plugin-catalog-backend-module-ldap.usertransformer.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend-module-ldap.usertransformer",permalink:"/docs/next/reference/plugin-catalog-backend-module-ldap.usertransformer",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog-backend-module-ldap.usertransformer.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-backend-module-ldap.usertransformer",title:"UserTransformer",description:"API reference for UserTransformer"}},d={},l=[];function i(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-ldap",children:(0,t.jsx)(r.code,{children:"@backstage/plugin-catalog-backend-module-ldap"})})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-ldap.usertransformer",children:(0,t.jsx)(r.code,{children:"UserTransformer"})})]}),"\n",(0,t.jsx)(r.p,{children:"Customize the ingested User entity"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"export type UserTransformer = (vendor: LdapVendor, config: UserConfig, user: SearchEntry) => Promise<UserEntity | undefined>;\n"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"References:"})," ",(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-ldap.ldapvendor",children:"LdapVendor"}),", ",(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-ldap.userconfig",children:"UserConfig"}),", ",(0,t.jsx)(r.a,{href:"/docs/next/reference/catalog-model.userentityv1alpha1",children:"UserEntity"})]})]})}function f(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}},675251:(e,r,n)=>{var t=n(667294),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,n){var t,s={},l=null,i=null;for(t in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(i=r.ref),r)a.call(r,t)&&!d.hasOwnProperty(t)&&(s[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===s[t]&&(s[t]=r[t]);return{$$typeof:o,type:e,key:l,ref:i,props:s,_owner:c.current}}r.Fragment=s,r.jsx=l,r.jsxs=l},785893:(e,r,n)=>{e.exports=n(675251)},511151:(e,r,n)=>{n.d(r,{Z:()=>c,a:()=>a});var t=n(667294);const o={},s=t.createContext(o);function a(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);