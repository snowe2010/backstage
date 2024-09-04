/*! For license information please see 15794a76.655587e8.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[405740],{721544:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var t=r(785893),s=r(511151);const c={id:"core-plugin-api.backstageplugin",title:"BackstagePlugin",description:"API reference for BackstagePlugin"},a=void 0,o={id:"reference/core-plugin-api.backstageplugin",title:"BackstagePlugin",description:"API reference for BackstagePlugin",source:"@site/versioned_docs/version-stable/reference/core-plugin-api.backstageplugin.md",sourceDirName:"reference",slug:"/reference/core-plugin-api.backstageplugin",permalink:"/docs/reference/core-plugin-api.backstageplugin",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/core-plugin-api.backstageplugin.md",tags:[],version:"stable",frontMatter:{id:"core-plugin-api.backstageplugin",title:"BackstagePlugin",description:"API reference for BackstagePlugin"}},i={},l=[];function p(e){const n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api",children:(0,t.jsx)(n.code,{children:"@backstage/core-plugin-api"})})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api.backstageplugin",children:(0,t.jsx)(n.code,{children:"BackstagePlugin"})})]}),"\n",(0,t.jsx)(n.p,{children:"Plugin type."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"export type BackstagePlugin<Routes extends AnyRoutes = {}, ExternalRoutes extends AnyExternalRoutes = {}, _Ignored extends {} = {}> = {\n    getId(): string;\n    getApis(): Iterable<AnyApiFactory>;\n    getFeatureFlags(): Iterable<PluginFeatureFlagConfig>;\n    provide<T>(extension: Extension<T>): T;\n    routes: Routes;\n    externalRoutes: ExternalRoutes;\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"References:"})," ",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api.anyroutes",children:"AnyRoutes"}),", ",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api.anyexternalroutes",children:"AnyExternalRoutes"}),", ",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api.anyapifactory",children:"AnyApiFactory"}),", ",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api.pluginfeatureflagconfig",children:"PluginFeatureFlagConfig"}),", ",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api.extension",children:"Extension"})]})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},675251:(e,n,r)=>{var t=r(667294),s=Symbol.for("react.element"),c=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var t,c={},l=null,p=null;for(t in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(p=n.ref),n)a.call(n,t)&&!i.hasOwnProperty(t)&&(c[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===c[t]&&(c[t]=n[t]);return{$$typeof:s,type:e,key:l,ref:p,props:c,_owner:o.current}}n.Fragment=c,n.jsx=l,n.jsxs=l},785893:(e,n,r)=>{e.exports=r(675251)},511151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>a});var t=r(667294);const s={},c=t.createContext(s);function a(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);