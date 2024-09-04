/*! For license information please see 3c95013f.3d238553.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[925858],{866626:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var o=n(785893),t=n(511151);const i={id:"plugin-auth-node.authproviderfactory",title:"AuthProviderFactory",description:"API reference for AuthProviderFactory"},c=void 0,a={id:"reference/plugin-auth-node.authproviderfactory",title:"AuthProviderFactory",description:"API reference for AuthProviderFactory",source:"@site/../docs/reference/plugin-auth-node.authproviderfactory.md",sourceDirName:"reference",slug:"/reference/plugin-auth-node.authproviderfactory",permalink:"/docs/next/reference/plugin-auth-node.authproviderfactory",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-auth-node.authproviderfactory.md",tags:[],version:"current",frontMatter:{id:"plugin-auth-node.authproviderfactory",title:"AuthProviderFactory",description:"API reference for AuthProviderFactory"}},s={},d=[];function u(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,o.jsx)(r.a,{href:"/docs/next/reference/plugin-auth-node",children:(0,o.jsx)(r.code,{children:"@backstage/plugin-auth-node"})})," > ",(0,o.jsx)(r.a,{href:"/docs/next/reference/plugin-auth-node.authproviderfactory",children:(0,o.jsx)(r.code,{children:"AuthProviderFactory"})})]}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-typescript",children:"export type AuthProviderFactory = (options: {\n    providerId: string;\n    globalConfig: AuthProviderConfig;\n    config: Config;\n    logger: LoggerService;\n    resolverContext: AuthResolverContext;\n    baseUrl: string;\n    appUrl: string;\n    isOriginAllowed: (origin: string) => boolean;\n    cookieConfigurer?: CookieConfigurer;\n}) => AuthProviderRouteHandlers;\n"})}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"References:"})," ",(0,o.jsx)(r.a,{href:"/docs/next/reference/plugin-auth-node.authproviderconfig",children:"AuthProviderConfig"}),", ",(0,o.jsx)(r.a,{href:"/docs/next/reference/config.config",children:"Config"}),", ",(0,o.jsx)(r.a,{href:"/docs/next/reference/backend-plugin-api.loggerservice",children:"LoggerService"}),", ",(0,o.jsx)(r.a,{href:"/docs/next/reference/plugin-auth-node.authresolvercontext",children:"AuthResolverContext"}),", ",(0,o.jsx)(r.a,{href:"/docs/next/reference/plugin-auth-node.cookieconfigurer",children:"CookieConfigurer"}),", ",(0,o.jsx)(r.a,{href:"/docs/next/reference/plugin-auth-node.authproviderroutehandlers",children:"AuthProviderRouteHandlers"})]})]})}function f(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},675251:(e,r,n)=>{var o=n(667294),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,n){var o,i={},d=null,u=null;for(o in void 0!==n&&(d=""+n),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(u=r.ref),r)c.call(r,o)&&!s.hasOwnProperty(o)&&(i[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===i[o]&&(i[o]=r[o]);return{$$typeof:t,type:e,key:d,ref:u,props:i,_owner:a.current}}r.Fragment=i,r.jsx=d,r.jsxs=d},785893:(e,r,n)=>{e.exports=n(675251)},511151:(e,r,n)=>{n.d(r,{Z:()=>a,a:()=>c});var o=n(667294);const t={},i=o.createContext(t);function c(e){const r=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),o.createElement(i.Provider,{value:r},e.children)}}}]);