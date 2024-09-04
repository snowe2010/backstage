/*! For license information please see 488d55f7.d4fdc2b3.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[765416],{547391:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=n(785893),i=n(511151);const s={id:"test-utils.mockfetchapioptions",title:"MockFetchApiOptions",description:"API reference for MockFetchApiOptions"},c=void 0,o={id:"reference/test-utils.mockfetchapioptions",title:"MockFetchApiOptions",description:"API reference for MockFetchApiOptions",source:"@site/../docs/reference/test-utils.mockfetchapioptions.md",sourceDirName:"reference",slug:"/reference/test-utils.mockfetchapioptions",permalink:"/docs/next/reference/test-utils.mockfetchapioptions",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/test-utils.mockfetchapioptions.md",tags:[],version:"current",frontMatter:{id:"test-utils.mockfetchapioptions",title:"MockFetchApiOptions",description:"API reference for MockFetchApiOptions"}},d={},l=[{value:"Properties",id:"properties",level:2}];function a(e){const t={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/test-utils",children:(0,r.jsx)(t.code,{children:"@backstage/test-utils"})})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/test-utils.mockfetchapioptions",children:(0,r.jsx)(t.code,{children:"MockFetchApiOptions"})})]}),"\n",(0,r.jsxs)(t.p,{children:["The options given when constructing a ",(0,r.jsx)(t.a,{href:"/docs/next/reference/test-utils.mockfetchapi",children:"MockFetchApi"}),"."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"export interface MockFetchApiOptions \n"})}),"\n",(0,r.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Property"}),(0,r.jsx)(t.th,{children:"Modifiers"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/next/reference/test-utils.mockfetchapioptions.baseimplementation",children:"baseImplementation?"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"undefined | 'none' | typeof crossFetch"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.em,{children:"(Optional)"})," Define the underlying base ",(0,r.jsx)(t.code,{children:"fetch"})," implementation."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/next/reference/test-utils.mockfetchapioptions.injectidentityauth",children:"injectIdentityAuth?"})}),(0,r.jsx)(t.td,{}),(0,r.jsxs)(t.td,{children:["undefined | { token: string; } | { identityApi: Pick<",(0,r.jsx)(t.a,{href:"/docs/next/reference/core-plugin-api.identityapi",children:"IdentityApi"}),", 'getCredentials'>; }"]}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.em,{children:"(Optional)"})," Add token based Authorization headers to requests, basically simulating what ",(0,r.jsx)(t.a,{href:"/docs/next/reference/core-app-api.fetchmiddlewares.injectidentityauth",children:"FetchMiddlewares.injectIdentityAuth()"})," does."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/next/reference/test-utils.mockfetchapioptions.resolvepluginprotocol",children:"resolvePluginProtocol?"})}),(0,r.jsx)(t.td,{}),(0,r.jsxs)(t.td,{children:["undefined | { discoveryApi: Pick<",(0,r.jsx)(t.a,{href:"/docs/next/reference/core-plugin-api.discoveryapi",children:"DiscoveryApi"}),", 'getBaseUrl'>; }"]}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.em,{children:"(Optional)"})," Add translation from ",(0,r.jsx)(t.code,{children:"plugin://"})," URLs to concrete http(s) URLs, basically simulating what ",(0,r.jsx)(t.a,{href:"/docs/next/reference/core-app-api.fetchmiddlewares.resolvepluginprotocol",children:"FetchMiddlewares.resolvePluginProtocol()"})," does."]})]})]})]})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},675251:(e,t,n)=>{var r=n(667294),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,s={},l=null,a=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(a=t.ref),t)c.call(t,r)&&!d.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:i,type:e,key:l,ref:a,props:s,_owner:o.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},785893:(e,t,n)=>{e.exports=n(675251)},511151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>c});var r=n(667294);const i={},s=r.createContext(i);function c(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);