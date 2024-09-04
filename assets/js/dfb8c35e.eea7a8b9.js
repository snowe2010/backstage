/*! For license information please see dfb8c35e.eea7a8b9.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[179010],{491126:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var t=n(785893),a=n(511151);const s={id:"frontend-plugin-api.createexternalrouteref",title:"createExternalRouteRef()",description:"API reference for createExternalRouteRef()"},o=void 0,i={id:"reference/frontend-plugin-api.createexternalrouteref",title:"createExternalRouteRef()",description:"API reference for createExternalRouteRef()",source:"@site/../docs/reference/frontend-plugin-api.createexternalrouteref.md",sourceDirName:"reference",slug:"/reference/frontend-plugin-api.createexternalrouteref",permalink:"/docs/next/reference/frontend-plugin-api.createexternalrouteref",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/frontend-plugin-api.createexternalrouteref.md",tags:[],version:"current",frontMatter:{id:"frontend-plugin-api.createexternalrouteref",title:"createExternalRouteRef()",description:"API reference for createExternalRouteRef()"}},c={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function l(e){const r={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/frontend-plugin-api",children:(0,t.jsx)(r.code,{children:"@backstage/frontend-plugin-api"})})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/frontend-plugin-api.createexternalrouteref",children:(0,t.jsx)(r.code,{children:"createExternalRouteRef"})})]}),"\n",(0,t.jsx)(r.p,{children:"Creates a route descriptor, to be later bound to a concrete route by the app. Used to implement cross-plugin route references."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"function createExternalRouteRef<TParams extends {\n    [param in TParamKeys]: string;\n} | undefined = undefined, TParamKeys extends string = string>(options?: {\n    readonly params?: string extends TParamKeys ? (keyof TParams)[] : TParamKeys[];\n    defaultTarget?: string;\n}): ExternalRouteRef<keyof TParams extends never ? undefined : string extends TParamKeys ? TParams : {\n    [param in TParamKeys]: string;\n}>;\n"})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Parameter"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"options"}),(0,t.jsx)(r.td,{children:"{ readonly params?: string extends TParamKeys ? (keyof TParams)[] : TParamKeys[]; defaultTarget?: string; }"}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.em,{children:"(Optional)"})," Description of the route reference to be created."]})]})})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/next/reference/frontend-plugin-api.externalrouteref",children:"ExternalRouteRef"}),"<keyof TParams extends never ? undefined : string extends TParamKeys ? TParams : { [param in TParamKeys]: string; }>"]}),"\n",(0,t.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsxs)(r.p,{children:["See ",(0,t.jsx)(r.a,{href:"https://backstage.io/docs/plugins/composability#routing-system",children:"https://backstage.io/docs/plugins/composability#routing-system"}),"."]})]})}function f(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},675251:(e,r,n)=>{var t=n(667294),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,n){var t,s={},d=null,l=null;for(t in void 0!==n&&(d=""+n),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(l=r.ref),r)o.call(r,t)&&!c.hasOwnProperty(t)&&(s[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===s[t]&&(s[t]=r[t]);return{$$typeof:a,type:e,key:d,ref:l,props:s,_owner:i.current}}r.Fragment=s,r.jsx=d,r.jsxs=d},785893:(e,r,n)=>{e.exports=n(675251)},511151:(e,r,n)=>{n.d(r,{Z:()=>i,a:()=>o});var t=n(667294);const a={},s=t.createContext(a);function o(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);