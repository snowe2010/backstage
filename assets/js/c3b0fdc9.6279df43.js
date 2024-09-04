/*! For license information please see c3b0fdc9.6279df43.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[30084],{574546:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>a});var n=t(785893),o=t(511151);const c={id:"core-app-api.fetchmiddlewares.resolvepluginprotocol",title:"FetchMiddlewares.resolvePluginProtocol()",description:"API reference for FetchMiddlewares.resolvePluginProtocol()"},s=void 0,i={id:"reference/core-app-api.fetchmiddlewares.resolvepluginprotocol",title:"FetchMiddlewares.resolvePluginProtocol()",description:"API reference for FetchMiddlewares.resolvePluginProtocol()",source:"@site/../docs/reference/core-app-api.fetchmiddlewares.resolvepluginprotocol.md",sourceDirName:"reference",slug:"/reference/core-app-api.fetchmiddlewares.resolvepluginprotocol",permalink:"/docs/next/reference/core-app-api.fetchmiddlewares.resolvepluginprotocol",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-app-api.fetchmiddlewares.resolvepluginprotocol.md",tags:[],version:"current",frontMatter:{id:"core-app-api.fetchmiddlewares.resolvepluginprotocol",title:"FetchMiddlewares.resolvePluginProtocol()",description:"API reference for FetchMiddlewares.resolvePluginProtocol()"}},l={},a=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function d(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/next/reference/core-app-api",children:(0,n.jsx)(r.code,{children:"@backstage/core-app-api"})})," > ",(0,n.jsx)(r.a,{href:"/docs/next/reference/core-app-api.fetchmiddlewares",children:(0,n.jsx)(r.code,{children:"FetchMiddlewares"})})," > ",(0,n.jsx)(r.a,{href:"/docs/next/reference/core-app-api.fetchmiddlewares.resolvepluginprotocol",children:(0,n.jsx)(r.code,{children:"resolvePluginProtocol"})})]}),"\n",(0,n.jsxs)(r.p,{children:["Handles translation from ",(0,n.jsx)(r.code,{children:"plugin://"})," URLs to concrete http(s) URLs based on the discovery API."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"static resolvePluginProtocol(options: {\n        discoveryApi: DiscoveryApi;\n    }): FetchMiddleware;\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"options"}),(0,n.jsxs)(r.td,{children:["{ discoveryApi: ",(0,n.jsx)(r.a,{href:"/docs/next/reference/core-plugin-api.discoveryapi",children:"DiscoveryApi"}),"; }"]}),(0,n.jsx)(r.td,{})]})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/docs/next/reference/core-app-api.fetchmiddleware",children:"FetchMiddleware"})}),"\n",(0,n.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(r.p,{children:["If the request is for ",(0,n.jsx)(r.code,{children:"plugin://catalog/entities?filter=x=y"}),", the discovery API will be queried for ",(0,n.jsx)(r.code,{children:"'catalog'"}),". If it returned ",(0,n.jsx)(r.code,{children:"https://backstage.example.net/api/catalog"}),", the resulting query would be ",(0,n.jsx)(r.code,{children:"https://backstage.example.net/api/catalog/entities?filter=x=y"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["If the incoming URL protocol was not ",(0,n.jsx)(r.code,{children:"plugin"}),", the request is just passed through verbatim to the underlying implementation."]})]})}function p(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},675251:(e,r,t)=>{var n=t(667294),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,t){var n,c={},a=null,d=null;for(n in void 0!==t&&(a=""+t),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(d=r.ref),r)s.call(r,n)&&!l.hasOwnProperty(n)&&(c[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===c[n]&&(c[n]=r[n]);return{$$typeof:o,type:e,key:a,ref:d,props:c,_owner:i.current}}r.Fragment=c,r.jsx=a,r.jsxs=a},785893:(e,r,t)=>{e.exports=t(675251)},511151:(e,r,t)=>{t.d(r,{Z:()=>i,a:()=>s});var n=t(667294);const o={},c=n.createContext(o);function s(e){const r=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(c.Provider,{value:r},e.children)}}}]);