/*! For license information please see 093684de.4ce80874.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[868577],{656804:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>s,contentTitle:()=>c,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var n=o(785893),t=o(511151);const a={id:"core-app-api.defaultconfigloader",title:"defaultConfigLoader",description:"API reference for defaultConfigLoader"},c=void 0,i={id:"reference/core-app-api.defaultconfigloader",title:"defaultConfigLoader",description:"API reference for defaultConfigLoader",source:"@site/versioned_docs/version-stable/reference/core-app-api.defaultconfigloader.md",sourceDirName:"reference",slug:"/reference/core-app-api.defaultconfigloader",permalink:"/docs/reference/core-app-api.defaultconfigloader",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/core-app-api.defaultconfigloader.md",tags:[],version:"stable",frontMatter:{id:"core-app-api.defaultconfigloader",title:"defaultConfigLoader",description:"API reference for defaultConfigLoader"}},s={},d=[];function f(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/core-app-api",children:(0,n.jsx)(r.code,{children:"@backstage/core-app-api"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/core-app-api.defaultconfigloader",children:(0,n.jsx)(r.code,{children:"defaultConfigLoader"})})]}),"\n",(0,n.jsxs)(r.p,{children:["The default config loader, which expects that config is available at compile-time in ",(0,n.jsx)(r.code,{children:"process.env.APP_CONFIG"}),". APP_CONFIG should be an array of config objects as returned by the config loader."]}),"\n",(0,n.jsx)(r.p,{children:"It will also load runtime config from the __APP_INJECTED_RUNTIME_CONFIG__ string, which can be rewritten at runtime to contain an additional JSON config object. If runtime config is present, it will be placed first in the config array, overriding other config values."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"defaultConfigLoader: AppConfigLoader\n"})})]})}function l(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},675251:(e,r,o)=>{var n=o(667294),t=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,o){var n,a={},d=null,f=null;for(n in void 0!==o&&(d=""+o),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(f=r.ref),r)c.call(r,n)&&!s.hasOwnProperty(n)&&(a[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===a[n]&&(a[n]=r[n]);return{$$typeof:t,type:e,key:d,ref:f,props:a,_owner:i.current}}r.Fragment=a,r.jsx=d,r.jsxs=d},785893:(e,r,o)=>{e.exports=o(675251)},511151:(e,r,o)=>{o.d(r,{Z:()=>i,a:()=>c});var n=o(667294);const t={},a=n.createContext(t);function c(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);