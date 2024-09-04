/*! For license information please see 3ce040c3.787db3a9.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[243984],{332688:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(785893),t=n(511151);const o={id:"backend-plugin-api.pluginservicefactoryoptions.initialization",title:"PluginServiceFactoryOptions.initialization",description:"API reference for PluginServiceFactoryOptions.initialization"},a=void 0,s={id:"reference/backend-plugin-api.pluginservicefactoryoptions.initialization",title:"PluginServiceFactoryOptions.initialization",description:"API reference for PluginServiceFactoryOptions.initialization",source:"@site/versioned_docs/version-stable/reference/backend-plugin-api.pluginservicefactoryoptions.initialization.md",sourceDirName:"reference",slug:"/reference/backend-plugin-api.pluginservicefactoryoptions.initialization",permalink:"/docs/reference/backend-plugin-api.pluginservicefactoryoptions.initialization",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/backend-plugin-api.pluginservicefactoryoptions.initialization.md",tags:[],version:"stable",frontMatter:{id:"backend-plugin-api.pluginservicefactoryoptions.initialization",title:"PluginServiceFactoryOptions.initialization",description:"API reference for PluginServiceFactoryOptions.initialization"}},c={},l=[{value:"Remarks",id:"remarks",level:2}];function d(e){const i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(i.a,{href:"/docs/reference/backend-plugin-api",children:(0,r.jsx)(i.code,{children:"@backstage/backend-plugin-api"})})," > ",(0,r.jsx)(i.a,{href:"/docs/reference/backend-plugin-api.pluginservicefactoryoptions",children:(0,r.jsx)(i.code,{children:"PluginServiceFactoryOptions"})})," > ",(0,r.jsx)(i.a,{href:"/docs/reference/backend-plugin-api.pluginservicefactoryoptions.initialization",children:(0,r.jsx)(i.code,{children:"initialization"})})]}),"\n",(0,r.jsxs)(i.p,{children:["The initialization strategy for the service factory. This service is plugin scoped and will use ",(0,r.jsx)(i.code,{children:"lazy"})," by default."]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-typescript",children:"initialization?: 'always' | 'lazy';\n"})}),"\n",(0,r.jsx)(i.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"always"})," - The service will always be initialized regardless if it is used or not. - ",(0,r.jsx)(i.code,{children:"lazy"})," - The service will only be initialized if it is depended on by a different service or feature."]}),"\n"]}),"\n",(0,r.jsxs)(i.p,{children:["Service factories for root scoped services use ",(0,r.jsx)(i.code,{children:"always"})," as the default, while plugin scoped services use ",(0,r.jsx)(i.code,{children:"lazy"}),"."]})]})}function p(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},675251:(e,i,n)=>{var r=n(667294),t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,i,n){var r,o={},l=null,d=null;for(r in void 0!==n&&(l=""+n),void 0!==i.key&&(l=""+i.key),void 0!==i.ref&&(d=i.ref),i)a.call(i,r)&&!c.hasOwnProperty(r)&&(o[r]=i[r]);if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===o[r]&&(o[r]=i[r]);return{$$typeof:t,type:e,key:l,ref:d,props:o,_owner:s.current}}i.Fragment=o,i.jsx=l,i.jsxs=l},785893:(e,i,n)=>{e.exports=n(675251)},511151:(e,i,n)=>{n.d(i,{Z:()=>s,a:()=>a});var r=n(667294);const t={},o=r.createContext(t);function a(e){const i=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(o.Provider,{value:i},e.children)}}}]);