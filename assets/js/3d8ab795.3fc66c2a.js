/*! For license information please see 3d8ab795.3fc66c2a.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[341566],{753076:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var t=n(785893),s=n(511151);const o={id:"plugin-catalog-backend-module-ldap.ldaporgentityprovidertransformsextensionpoint.setusertransformer",title:"LdapOrgEntityProviderTransformsExtensionPoint.setUserTransformer()",description:"API reference for LdapOrgEntityProviderTransformsExtensionPoint.setUserTransformer()"},a=void 0,i={id:"reference/plugin-catalog-backend-module-ldap.ldaporgentityprovidertransformsextensionpoint.setusertransformer",title:"LdapOrgEntityProviderTransformsExtensionPoint.setUserTransformer()",description:"API reference for LdapOrgEntityProviderTransformsExtensionPoint.setUserTransformer()",source:"@site/../docs/reference/plugin-catalog-backend-module-ldap.ldaporgentityprovidertransformsextensionpoint.setusertransformer.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend-module-ldap.ldaporgentityprovidertransformsextensionpoint.setusertransformer",permalink:"/docs/next/reference/plugin-catalog-backend-module-ldap.ldaporgentityprovidertransformsextensionpoint.setusertransformer",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog-backend-module-ldap.ldaporgentityprovidertransformsextensionpoint.setusertransformer.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-backend-module-ldap.ldaporgentityprovidertransformsextensionpoint.setusertransformer",title:"LdapOrgEntityProviderTransformsExtensionPoint.setUserTransformer()",description:"API reference for LdapOrgEntityProviderTransformsExtensionPoint.setUserTransformer()"}},d={},c=[{value:"Parameters",id:"parameters",level:2}];function l(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-ldap",children:(0,t.jsx)(r.code,{children:"@backstage/plugin-catalog-backend-module-ldap"})})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-ldap.ldaporgentityprovidertransformsextensionpoint",children:(0,t.jsx)(r.code,{children:"LdapOrgEntityProviderTransformsExtensionPoint"})})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-ldap.ldaporgentityprovidertransformsextensionpoint.setusertransformer",children:(0,t.jsx)(r.code,{children:"setUserTransformer"})})]}),"\n",(0,t.jsx)(r.p,{children:"Set the function that transforms a user entry in LDAP to an entity. Optionally, you can pass separate transformers per provider ID."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"setUserTransformer(transformer: UserTransformer | Record<string, UserTransformer>): void;\n"})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Parameter"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"transformer"}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-ldap.usertransformer",children:"UserTransformer"})," | Record<string, ",(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-ldap.usertransformer",children:"UserTransformer"}),">"]}),(0,t.jsx)(r.td,{})]})})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,t.jsx)(r.p,{children:"void"})]})}function p(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},675251:(e,r,n)=>{var t=n(667294),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,n){var t,o={},c=null,l=null;for(t in void 0!==n&&(c=""+n),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(l=r.ref),r)a.call(r,t)&&!d.hasOwnProperty(t)&&(o[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===o[t]&&(o[t]=r[t]);return{$$typeof:s,type:e,key:c,ref:l,props:o,_owner:i.current}}r.Fragment=o,r.jsx=c,r.jsxs=c},785893:(e,r,n)=>{e.exports=n(675251)},511151:(e,r,n)=>{n.d(r,{Z:()=>i,a:()=>a});var t=n(667294);const s={},o=t.createContext(s);function a(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);