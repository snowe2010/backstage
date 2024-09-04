/*! For license information please see c0c253ae.d5067f24.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[303561],{318418:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>t,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>d,toc:()=>l});var n=o(785893),a=o(511151);const c={id:"plugin-catalog-backend-module-ldap.ldaporgreaderprocessor.fromconfig",title:"LdapOrgReaderProcessor.fromConfig()",description:"API reference for LdapOrgReaderProcessor.fromConfig()"},s=void 0,d={id:"reference/plugin-catalog-backend-module-ldap.ldaporgreaderprocessor.fromconfig",title:"LdapOrgReaderProcessor.fromConfig()",description:"API reference for LdapOrgReaderProcessor.fromConfig()",source:"@site/../docs/reference/plugin-catalog-backend-module-ldap.ldaporgreaderprocessor.fromconfig.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend-module-ldap.ldaporgreaderprocessor.fromconfig",permalink:"/docs/next/reference/plugin-catalog-backend-module-ldap.ldaporgreaderprocessor.fromconfig",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog-backend-module-ldap.ldaporgreaderprocessor.fromconfig.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-backend-module-ldap.ldaporgreaderprocessor.fromconfig",title:"LdapOrgReaderProcessor.fromConfig()",description:"API reference for LdapOrgReaderProcessor.fromConfig()"}},t={},l=[{value:"Parameters",id:"parameters",level:2}];function i(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-ldap",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-catalog-backend-module-ldap"})})," > ",(0,n.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-ldap.ldaporgreaderprocessor",children:(0,n.jsx)(r.code,{children:"LdapOrgReaderProcessor"})})," > ",(0,n.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-ldap.ldaporgreaderprocessor.fromconfig",children:(0,n.jsx)(r.code,{children:"fromConfig"})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"static fromConfig(configRoot: Config, options: {\n        logger: LoggerService;\n        groupTransformer?: GroupTransformer;\n        userTransformer?: UserTransformer;\n    }): LdapOrgReaderProcessor;\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"configRoot"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/next/reference/config.config",children:"Config"})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"options"}),(0,n.jsxs)(r.td,{children:["{ logger: ",(0,n.jsx)(r.a,{href:"/docs/next/reference/backend-plugin-api.loggerservice",children:"LoggerService"}),"; groupTransformer?: ",(0,n.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-ldap.grouptransformer",children:"GroupTransformer"}),"; userTransformer?: ",(0,n.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-ldap.usertransformer",children:"UserTransformer"}),"; }"]}),(0,n.jsx)(r.td,{})]})]})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-ldap.ldaporgreaderprocessor",children:"LdapOrgReaderProcessor"})})]})}function p(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}},675251:(e,r,o)=>{var n=o(667294),a=Symbol.for("react.element"),c=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,d=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,t={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,o){var n,c={},l=null,i=null;for(n in void 0!==o&&(l=""+o),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(i=r.ref),r)s.call(r,n)&&!t.hasOwnProperty(n)&&(c[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===c[n]&&(c[n]=r[n]);return{$$typeof:a,type:e,key:l,ref:i,props:c,_owner:d.current}}r.Fragment=c,r.jsx=l,r.jsxs=l},785893:(e,r,o)=>{e.exports=o(675251)},511151:(e,r,o)=>{o.d(r,{Z:()=>d,a:()=>s});var n=o(667294);const a={},c=n.createContext(a);function s(e){const r=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(c.Provider,{value:r},e.children)}}}]);