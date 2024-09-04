/*! For license information please see 3d4ac485.7a42863e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[444233],{974088:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>f,frontMatter:()=>c,metadata:()=>o,toc:()=>u});var n=t(785893),a=t(511151);const c={id:"core-plugin-api.createsubrouteref",title:"createSubRouteRef()",description:"API reference for createSubRouteRef()"},s=void 0,o={id:"reference/core-plugin-api.createsubrouteref",title:"createSubRouteRef()",description:"API reference for createSubRouteRef()",source:"@site/versioned_docs/version-stable/reference/core-plugin-api.createsubrouteref.md",sourceDirName:"reference",slug:"/reference/core-plugin-api.createsubrouteref",permalink:"/docs/reference/core-plugin-api.createsubrouteref",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/core-plugin-api.createsubrouteref.md",tags:[],version:"stable",frontMatter:{id:"core-plugin-api.createsubrouteref",title:"createSubRouteRef()",description:"API reference for createSubRouteRef()"}},i={},u=[{value:"Parameters",id:"parameters",level:2}];function d(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api",children:(0,n.jsx)(r.code,{children:"@backstage/core-plugin-api"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api.createsubrouteref",children:(0,n.jsx)(r.code,{children:"createSubRouteRef"})})]}),"\n",(0,n.jsxs)(r.p,{children:["Create a ",(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api.subrouteref",children:"SubRouteRef"})," from a route descriptor."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"function createSubRouteRef<Path extends string, ParentParams extends AnyParams = never>(config: {\n    id: string;\n    path: Path;\n    parent: RouteRef<ParentParams>;\n}): MakeSubRouteRef<PathParams<Path>, ParentParams>;\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"config"}),(0,n.jsxs)(r.td,{children:["{ id: string; path: Path; parent: ",(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api.routeref",children:"RouteRef"}),"<ParentParams>; }"]}),(0,n.jsx)(r.td,{children:"Description of the route reference to be created."})]})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api.makesubrouteref",children:"MakeSubRouteRef"}),"<",(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api.pathparams",children:"PathParams"}),"<Path>, ParentParams>"]})]})}function f(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},675251:(e,r,t)=>{var n=t(667294),a=Symbol.for("react.element"),c=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function u(e,r,t){var n,c={},u=null,d=null;for(n in void 0!==t&&(u=""+t),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(d=r.ref),r)s.call(r,n)&&!i.hasOwnProperty(n)&&(c[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===c[n]&&(c[n]=r[n]);return{$$typeof:a,type:e,key:u,ref:d,props:c,_owner:o.current}}r.Fragment=c,r.jsx=u,r.jsxs=u},785893:(e,r,t)=>{e.exports=t(675251)},511151:(e,r,t)=>{t.d(r,{Z:()=>o,a:()=>s});var n=t(667294);const a={},c=n.createContext(a);function s(e){const r=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(c.Provider,{value:r},e.children)}}}]);