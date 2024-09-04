/*! For license information please see b8a6126b.838791a1.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[539910],{968919:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>d,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var t=n(785893),o=n(511151);const a={id:"plugin-auth-backend-module-oauth2-proxy-provider",title:"@backstage/plugin-auth-backend-module-oauth2-proxy-provider",description:"API Reference for @backstage/plugin-auth-backend-module-oauth2-proxy-provider"},d=void 0,i={id:"reference/plugin-auth-backend-module-oauth2-proxy-provider",title:"@backstage/plugin-auth-backend-module-oauth2-proxy-provider",description:"API Reference for @backstage/plugin-auth-backend-module-oauth2-proxy-provider",source:"@site/../docs/reference/plugin-auth-backend-module-oauth2-proxy-provider.md",sourceDirName:"reference",slug:"/reference/plugin-auth-backend-module-oauth2-proxy-provider",permalink:"/docs/next/reference/plugin-auth-backend-module-oauth2-proxy-provider",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-auth-backend-module-oauth2-proxy-provider.md",tags:[],version:"current",frontMatter:{id:"plugin-auth-backend-module-oauth2-proxy-provider",title:"@backstage/plugin-auth-backend-module-oauth2-proxy-provider",description:"API Reference for @backstage/plugin-auth-backend-module-oauth2-proxy-provider"}},c={},s=[{value:"Variables",id:"variables",level:2},{value:"Type Aliases",id:"type-aliases",level:2}];function u(e){const r={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-auth-backend-module-oauth2-proxy-provider",children:(0,t.jsx)(r.code,{children:"@backstage/plugin-auth-backend-module-oauth2-proxy-provider"})})]}),"\n",(0,t.jsx)(r.p,{children:"The oauth2-proxy-provider backend module for the auth plugin."}),"\n",(0,t.jsx)(r.h2,{id:"variables",children:"Variables"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Variable"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-auth-backend-module-oauth2-proxy-provider.authmoduleoauth2proxyprovider",children:"authModuleOauth2ProxyProvider"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-auth-backend-module-oauth2-proxy-provider.oauth2_proxy_jwt_header",children:"OAUTH2_PROXY_JWT_HEADER"})}),(0,t.jsx)(r.td,{children:"NOTE: This may come in handy if you're doing work on this provider: plugins/auth-backend/examples/docker-compose.oauth2-proxy.yaml"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-auth-backend-module-oauth2-proxy-provider.oauth2proxyauthenticator",children:"oauth2ProxyAuthenticator"})}),(0,t.jsx)(r.td,{})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"type-aliases",children:"Type Aliases"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Type Alias"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-auth-backend-module-oauth2-proxy-provider.oauth2proxyresult",children:"OAuth2ProxyResult"})}),(0,t.jsx)(r.td,{children:"JWT header extraction result, containing the raw value and the parsed JWT payload."})]})})]})]})}function l(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},675251:(e,r,n)=>{var t=n(667294),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function s(e,r,n){var t,a={},s=null,u=null;for(t in void 0!==n&&(s=""+n),void 0!==r.key&&(s=""+r.key),void 0!==r.ref&&(u=r.ref),r)d.call(r,t)&&!c.hasOwnProperty(t)&&(a[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===a[t]&&(a[t]=r[t]);return{$$typeof:o,type:e,key:s,ref:u,props:a,_owner:i.current}}r.Fragment=a,r.jsx=s,r.jsxs=s},785893:(e,r,n)=>{e.exports=n(675251)},511151:(e,r,n)=>{n.d(r,{Z:()=>i,a:()=>d});var t=n(667294);const o={},a=t.createContext(o);function d(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);