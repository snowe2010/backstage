/*! For license information please see 11c234d0.e7515a59.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[726477],{812473:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>l,frontMatter:()=>t,metadata:()=>i,toc:()=>f});var o=r(785893),c=r(511151);const t={id:"config-loader.configschema",title:"ConfigSchema",description:"API reference for ConfigSchema"},s=void 0,i={id:"reference/config-loader.configschema",title:"ConfigSchema",description:"API reference for ConfigSchema",source:"@site/../docs/reference/config-loader.configschema.md",sourceDirName:"reference",slug:"/reference/config-loader.configschema",permalink:"/docs/next/reference/config-loader.configschema",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/config-loader.configschema.md",tags:[],version:"current",frontMatter:{id:"config-loader.configschema",title:"ConfigSchema",description:"API reference for ConfigSchema"}},a={},f=[];function d(e){const n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,c.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,o.jsx)(n.a,{href:"/docs/next/reference/config-loader",children:(0,o.jsx)(n.code,{children:"@backstage/config-loader"})})," > ",(0,o.jsx)(n.a,{href:"/docs/next/reference/config-loader.configschema",children:(0,o.jsx)(n.code,{children:"ConfigSchema"})})]}),"\n",(0,o.jsx)(n.p,{children:"A loaded configuration schema that is ready to process configuration data."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"export type ConfigSchema = {\n    process(appConfigs: AppConfig[], options?: ConfigSchemaProcessingOptions): AppConfig[];\n    serialize(): JsonObject;\n};\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"References:"})," ",(0,o.jsx)(n.a,{href:"/docs/next/reference/config.appconfig",children:"AppConfig"}),", ",(0,o.jsx)(n.a,{href:"/docs/next/reference/config-loader.configschemaprocessingoptions",children:"ConfigSchemaProcessingOptions"}),", ",(0,o.jsx)(n.a,{href:"/docs/next/reference/types.jsonobject",children:"JsonObject"})]})]})}function l(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},675251:(e,n,r)=>{var o=r(667294),c=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function f(e,n,r){var o,t={},f=null,d=null;for(o in void 0!==r&&(f=""+r),void 0!==n.key&&(f=""+n.key),void 0!==n.ref&&(d=n.ref),n)s.call(n,o)&&!a.hasOwnProperty(o)&&(t[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===t[o]&&(t[o]=n[o]);return{$$typeof:c,type:e,key:f,ref:d,props:t,_owner:i.current}}n.Fragment=t,n.jsx=f,n.jsxs=f},785893:(e,n,r)=>{e.exports=r(675251)},511151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>s});var o=r(667294);const c={},t=o.createContext(c);function s(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);