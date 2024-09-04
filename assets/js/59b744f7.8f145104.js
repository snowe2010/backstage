/*! For license information please see 59b744f7.8f145104.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[958378],{548482:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var t=n(785893),s=n(511151);const o={id:"frontend-plugin-api.userouteref",title:"useRouteRef()",description:"API reference for useRouteRef()"},c=void 0,i={id:"reference/frontend-plugin-api.userouteref",title:"useRouteRef()",description:"API reference for useRouteRef()",source:"@site/../docs/reference/frontend-plugin-api.userouteref.md",sourceDirName:"reference",slug:"/reference/frontend-plugin-api.userouteref",permalink:"/docs/next/reference/frontend-plugin-api.userouteref",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/frontend-plugin-api.userouteref.md",tags:[],version:"current",frontMatter:{id:"frontend-plugin-api.userouteref",title:"useRouteRef()",description:"API reference for useRouteRef()"}},a={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function d(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/frontend-plugin-api",children:(0,t.jsx)(r.code,{children:"@backstage/frontend-plugin-api"})})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/frontend-plugin-api.userouteref",children:(0,t.jsx)(r.code,{children:"useRouteRef"})})]}),"\n",(0,t.jsx)(r.p,{children:"React hook for constructing URLs to routes."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"function useRouteRef<TParams extends AnyRouteRefParams>(routeRef: RouteRef<TParams> | SubRouteRef<TParams> | ExternalRouteRef<TParams>): RouteFunc<TParams> | undefined;\n"})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Parameter"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"routeRef"}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"/docs/next/reference/frontend-plugin-api.routeref",children:"RouteRef"}),"<TParams> | ",(0,t.jsx)(r.a,{href:"/docs/next/reference/frontend-plugin-api.subrouteref",children:"SubRouteRef"}),"<TParams> | ",(0,t.jsx)(r.a,{href:"/docs/next/reference/frontend-plugin-api.externalrouteref",children:"ExternalRouteRef"}),"<TParams>"]}),(0,t.jsx)(r.td,{children:"The ref to route that should be converted to URL."})]})})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/next/reference/frontend-plugin-api.routefunc",children:"RouteFunc"}),"<TParams> | undefined"]}),"\n",(0,t.jsxs)(r.p,{children:["A function that will in turn return the concrete URL of the ",(0,t.jsx)(r.code,{children:"routeRef"}),", or ",(0,t.jsx)(r.code,{children:"undefined"})," if the route is not available."]}),"\n",(0,t.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsxs)(r.p,{children:["See ",(0,t.jsx)(r.a,{href:"https://backstage.io/docs/plugins/composability#routing-system",children:"https://backstage.io/docs/plugins/composability#routing-system"})]})]})}function f(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},675251:(e,r,n)=>{var t=n(667294),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(e,r,n){var t,o={},u=null,d=null;for(t in void 0!==n&&(u=""+n),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(d=r.ref),r)c.call(r,t)&&!a.hasOwnProperty(t)&&(o[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===o[t]&&(o[t]=r[t]);return{$$typeof:s,type:e,key:u,ref:d,props:o,_owner:i.current}}r.Fragment=o,r.jsx=u,r.jsxs=u},785893:(e,r,n)=>{e.exports=n(675251)},511151:(e,r,n)=>{n.d(r,{Z:()=>i,a:()=>c});var t=n(667294);const s={},o=t.createContext(s);function c(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);