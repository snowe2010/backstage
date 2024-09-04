/*! For license information please see d830e230.8e8a03d2.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[87581],{679876:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var n=t(785893),c=t(511151);const s={id:"backend-plugin-api.createservicefactory",title:"createServiceFactory()",description:"API reference for createServiceFactory()"},o=void 0,a={id:"reference/backend-plugin-api.createservicefactory",title:"createServiceFactory()",description:"API reference for createServiceFactory()",source:"@site/versioned_docs/version-stable/reference/backend-plugin-api.createservicefactory.md",sourceDirName:"reference",slug:"/reference/backend-plugin-api.createservicefactory",permalink:"/docs/reference/backend-plugin-api.createservicefactory",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/backend-plugin-api.createservicefactory.md",tags:[],version:"stable",frontMatter:{id:"backend-plugin-api.createservicefactory",title:"createServiceFactory()",description:"API reference for createServiceFactory()"}},i={},d=[{value:"Parameters",id:"parameters",level:2}];function l(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/backend-plugin-api",children:(0,n.jsx)(r.code,{children:"@backstage/backend-plugin-api"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.createservicefactory",children:(0,n.jsx)(r.code,{children:"createServiceFactory"})})]}),"\n",(0,n.jsx)(r.p,{children:"Creates a root scoped service factory without options."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"function createServiceFactory<TService, TInstances extends 'singleton' | 'multiton', TImpl extends TService, TDeps extends {\n    [name in string]: ServiceRef<unknown, 'root'>;\n}, TOpts extends object | undefined = undefined>(options: RootServiceFactoryOptions<TService, TInstances, TImpl, TDeps>): ServiceFactoryCompat<TService, 'root', TInstances>;\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"options"}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.rootservicefactoryoptions",children:"RootServiceFactoryOptions"}),"<TService, TInstances, TImpl, TDeps>"]}),(0,n.jsx)(r.td,{children:"The service factory configuration."})]})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.servicefactorycompat",children:"ServiceFactoryCompat"}),"<TService, 'root', TInstances>"]})]})}function p(e={}){const{wrapper:r}={...(0,c.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},675251:(e,r,t)=>{var n=t(667294),c=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,t){var n,s={},d=null,l=null;for(n in void 0!==t&&(d=""+t),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(l=r.ref),r)o.call(r,n)&&!i.hasOwnProperty(n)&&(s[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===s[n]&&(s[n]=r[n]);return{$$typeof:c,type:e,key:d,ref:l,props:s,_owner:a.current}}r.Fragment=s,r.jsx=d,r.jsxs=d},785893:(e,r,t)=>{e.exports=t(675251)},511151:(e,r,t)=>{t.d(r,{Z:()=>a,a:()=>o});var n=t(667294);const c={},s=n.createContext(c);function o(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);