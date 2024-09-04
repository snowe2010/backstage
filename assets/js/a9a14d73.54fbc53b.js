/*! For license information please see a9a14d73.54fbc53b.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[761428],{434301:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var t=r(785893),i=r(511151);const o={id:"frontend-plugin-api.pageblueprint",title:"PageBlueprint",description:"API reference for PageBlueprint"},a=void 0,s={id:"reference/frontend-plugin-api.pageblueprint",title:"PageBlueprint",description:"API reference for PageBlueprint",source:"@site/versioned_docs/version-stable/reference/frontend-plugin-api.pageblueprint.md",sourceDirName:"reference",slug:"/reference/frontend-plugin-api.pageblueprint",permalink:"/docs/reference/frontend-plugin-api.pageblueprint",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/frontend-plugin-api.pageblueprint.md",tags:[],version:"stable",frontMatter:{id:"frontend-plugin-api.pageblueprint",title:"PageBlueprint",description:"API reference for PageBlueprint"}},p={},c=[];function l(e){const n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api",children:(0,t.jsx)(n.code,{children:"@backstage/frontend-plugin-api"})})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.pageblueprint",children:(0,t.jsx)(n.code,{children:"PageBlueprint"})})]}),"\n",(0,t.jsx)(n.p,{children:"Createx extensions that are routable React page components."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'PageBlueprint: import("../wiring").ExtensionBlueprint<{\n    kind: "page";\n    namespace: undefined;\n    name: undefined;\n}, {\n    defaultPath: string;\n    loader: () => Promise<JSX.Element>;\n    routeRef?: RouteRef<import("../routing").AnyRouteRefParams> | undefined;\n}, import("../wiring").ConfigurableExtensionDataRef<import("react").JSX.Element, "core.reactElement", {}> | import("../wiring").ConfigurableExtensionDataRef<string, "core.routing.path", {}> | import("../wiring").ConfigurableExtensionDataRef<RouteRef<import("../routing").AnyRouteRefParams>, "core.routing.ref", {\n    optional: true;\n}>, {}, {\n    path: string | undefined;\n}, {\n    path?: string | undefined;\n}, never>\n'})})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},675251:(e,n,r)=>{var t=r(667294),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,r){var t,o={},c=null,l=null;for(t in void 0!==r&&(c=""+r),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(l=n.ref),n)a.call(n,t)&&!p.hasOwnProperty(t)&&(o[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===o[t]&&(o[t]=n[t]);return{$$typeof:i,type:e,key:c,ref:l,props:o,_owner:s.current}}n.Fragment=o,n.jsx=c,n.jsxs=c},785893:(e,n,r)=>{e.exports=r(675251)},511151:(e,n,r)=>{r.d(n,{Z:()=>s,a:()=>a});var t=r(667294);const i={},o=t.createContext(i);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);