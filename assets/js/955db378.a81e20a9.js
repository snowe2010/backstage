/*! For license information please see 955db378.a81e20a9.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[643824],{133200:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>a});var t=r(785893),i=r(511151);const o={id:"frontend-plugin-api.themeblueprint",title:"ThemeBlueprint",description:"API reference for ThemeBlueprint"},s=void 0,p={id:"reference/frontend-plugin-api.themeblueprint",title:"ThemeBlueprint",description:"API reference for ThemeBlueprint",source:"@site/versioned_docs/version-stable/reference/frontend-plugin-api.themeblueprint.md",sourceDirName:"reference",slug:"/reference/frontend-plugin-api.themeblueprint",permalink:"/docs/reference/frontend-plugin-api.themeblueprint",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/frontend-plugin-api.themeblueprint.md",tags:[],version:"stable",frontMatter:{id:"frontend-plugin-api.themeblueprint",title:"ThemeBlueprint",description:"API reference for ThemeBlueprint"}},c={},a=[];function l(e){const n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api",children:(0,t.jsx)(n.code,{children:"@backstage/frontend-plugin-api"})})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.themeblueprint",children:(0,t.jsx)(n.code,{children:"ThemeBlueprint"})})]}),"\n",(0,t.jsx)(n.p,{children:"Creates an extension that adds/replaces an app theme."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'ThemeBlueprint: import("../wiring").ExtensionBlueprint<{\n    kind: "theme";\n    namespace: "app";\n    name: undefined;\n}, {\n    theme: AppTheme;\n}, import("../wiring").ConfigurableExtensionDataRef<AppTheme, "core.theme.theme", {}>, {}, {}, {}, {\n    theme: import("../wiring").ConfigurableExtensionDataRef<AppTheme, "core.theme.theme", {}>;\n}>\n'})})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},675251:(e,n,r)=>{var t=r(667294),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,p=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,r){var t,o={},a=null,l=null;for(t in void 0!==r&&(a=""+r),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(l=n.ref),n)s.call(n,t)&&!c.hasOwnProperty(t)&&(o[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===o[t]&&(o[t]=n[t]);return{$$typeof:i,type:e,key:a,ref:l,props:o,_owner:p.current}}n.Fragment=o,n.jsx=a,n.jsxs=a},785893:(e,n,r)=>{e.exports=r(675251)},511151:(e,n,r)=>{r.d(n,{Z:()=>p,a:()=>s});var t=r(667294);const i={},o=t.createContext(i);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function p(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);