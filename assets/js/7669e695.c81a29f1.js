/*! For license information please see 7669e695.c81a29f1.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[428731],{946600:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>i,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(785893),t=n(511151);const a={id:"plugin-catalog-backend-module-ldap.grouptransformer",title:"GroupTransformer",description:"API reference for GroupTransformer"},c=void 0,s={id:"reference/plugin-catalog-backend-module-ldap.grouptransformer",title:"GroupTransformer",description:"API reference for GroupTransformer",source:"@site/../docs/reference/plugin-catalog-backend-module-ldap.grouptransformer.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend-module-ldap.grouptransformer",permalink:"/docs/next/reference/plugin-catalog-backend-module-ldap.grouptransformer",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog-backend-module-ldap.grouptransformer.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-backend-module-ldap.grouptransformer",title:"GroupTransformer",description:"API reference for GroupTransformer"}},d={},l=[];function p(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,o.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-ldap",children:(0,o.jsx)(r.code,{children:"@backstage/plugin-catalog-backend-module-ldap"})})," > ",(0,o.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-ldap.grouptransformer",children:(0,o.jsx)(r.code,{children:"GroupTransformer"})})]}),"\n",(0,o.jsx)(r.p,{children:"Customize the ingested Group entity"}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-typescript",children:"export type GroupTransformer = (vendor: LdapVendor, config: GroupConfig, group: SearchEntry) => Promise<GroupEntity | undefined>;\n"})}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"References:"})," ",(0,o.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-ldap.ldapvendor",children:"LdapVendor"}),", ",(0,o.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-ldap.groupconfig",children:"GroupConfig"}),", ",(0,o.jsx)(r.a,{href:"/docs/next/reference/catalog-model.groupentityv1alpha1",children:"GroupEntity"})]})]})}function i(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},675251:(e,r,n)=>{var o=n(667294),t=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,n){var o,a={},l=null,p=null;for(o in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(p=r.ref),r)c.call(r,o)&&!d.hasOwnProperty(o)&&(a[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===a[o]&&(a[o]=r[o]);return{$$typeof:t,type:e,key:l,ref:p,props:a,_owner:s.current}}r.Fragment=a,r.jsx=l,r.jsxs=l},785893:(e,r,n)=>{e.exports=n(675251)},511151:(e,r,n)=>{n.d(r,{Z:()=>s,a:()=>c});var o=n(667294);const t={},a=o.createContext(t);function c(e){const r=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),o.createElement(a.Provider,{value:r},e.children)}}}]);