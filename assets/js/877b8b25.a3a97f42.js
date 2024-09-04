/*! For license information please see 877b8b25.a3a97f42.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[316008],{18061:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var t=n(785893),a=n(511151);const s={id:"frontend-plugin-api.createrouteref",title:"createRouteRef()",description:"API reference for createRouteRef()"},o=void 0,c={id:"reference/frontend-plugin-api.createrouteref",title:"createRouteRef()",description:"API reference for createRouteRef()",source:"@site/../docs/reference/frontend-plugin-api.createrouteref.md",sourceDirName:"reference",slug:"/reference/frontend-plugin-api.createrouteref",permalink:"/docs/next/reference/frontend-plugin-api.createrouteref",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/frontend-plugin-api.createrouteref.md",tags:[],version:"current",frontMatter:{id:"frontend-plugin-api.createrouteref",title:"createRouteRef()",description:"API reference for createRouteRef()"}},i={},d=[{value:"Parameters",id:"parameters",level:2}];function f(e){const r={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/frontend-plugin-api",children:(0,t.jsx)(r.code,{children:"@backstage/frontend-plugin-api"})})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/frontend-plugin-api.createrouteref",children:(0,t.jsx)(r.code,{children:"createRouteRef"})})]}),"\n",(0,t.jsxs)(r.p,{children:["Create a ",(0,t.jsx)(r.a,{href:"/docs/next/reference/frontend-plugin-api.routeref",children:"RouteRef"})," from a route descriptor."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"function createRouteRef<TParams extends {\n    [param in TParamKeys]: string;\n} | undefined = undefined, TParamKeys extends string = string>(config?: {\n    readonly params: string extends TParamKeys ? (keyof TParams)[] : TParamKeys[];\n}): RouteRef<keyof TParams extends never ? undefined : string extends TParamKeys ? TParams : {\n    [param in TParamKeys]: string;\n}>;\n"})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Parameter"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"config"}),(0,t.jsx)(r.td,{children:"{ readonly params: string extends TParamKeys ? (keyof TParams)[] : TParamKeys[]; }"}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.em,{children:"(Optional)"})," Description of the route reference to be created."]})]})})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/next/reference/frontend-plugin-api.routeref",children:"RouteRef"}),"<keyof TParams extends never ? undefined : string extends TParamKeys ? TParams : { [param in TParamKeys]: string; }>"]})]})}function l(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},675251:(e,r,n)=>{var t=n(667294),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,n){var t,s={},d=null,f=null;for(t in void 0!==n&&(d=""+n),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(f=r.ref),r)o.call(r,t)&&!i.hasOwnProperty(t)&&(s[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===s[t]&&(s[t]=r[t]);return{$$typeof:a,type:e,key:d,ref:f,props:s,_owner:c.current}}r.Fragment=s,r.jsx=d,r.jsxs=d},785893:(e,r,n)=>{e.exports=n(675251)},511151:(e,r,n)=>{n.d(r,{Z:()=>c,a:()=>o});var t=n(667294);const a={},s=t.createContext(a);function o(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);