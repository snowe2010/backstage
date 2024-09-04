/*! For license information please see b1df1e2a.00746d6a.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[797103],{407330:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>l,frontMatter:()=>t,metadata:()=>i,toc:()=>f});var r=o(785893),c=o(511151);const t={id:"config-loader.configsources.toconfig",title:"ConfigSources.toConfig()",description:"API reference for ConfigSources.toConfig()"},s=void 0,i={id:"reference/config-loader.configsources.toconfig",title:"ConfigSources.toConfig()",description:"API reference for ConfigSources.toConfig()",source:"@site/../docs/reference/config-loader.configsources.toconfig.md",sourceDirName:"reference",slug:"/reference/config-loader.configsources.toconfig",permalink:"/docs/next/reference/config-loader.configsources.toconfig",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/config-loader.configsources.toconfig.md",tags:[],version:"current",frontMatter:{id:"config-loader.configsources.toconfig",title:"ConfigSources.toConfig()",description:"API reference for ConfigSources.toConfig()"}},a={},f=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/next/reference/config-loader",children:(0,r.jsx)(n.code,{children:"@backstage/config-loader"})})," > ",(0,r.jsx)(n.a,{href:"/docs/next/reference/config-loader.configsources",children:(0,r.jsx)(n.code,{children:"ConfigSources"})})," > ",(0,r.jsx)(n.a,{href:"/docs/next/reference/config-loader.configsources.toconfig",children:(0,r.jsx)(n.code,{children:"toConfig"})})]}),"\n",(0,r.jsxs)(n.p,{children:["Creates an observable ",(0,r.jsx)(n.a,{href:"/docs/next/reference/config.config",children:"Config"})," implementation from a ",(0,r.jsx)(n.a,{href:"/docs/next/reference/config-loader.configsource",children:"ConfigSource"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"static toConfig(source: ConfigSource): Promise<ClosableConfig>;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"source"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/config-loader.configsource",children:"ConfigSource"})}),(0,r.jsx)(n.td,{children:"The config source to read from"})]})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(n.p,{children:["Promise<",(0,r.jsx)(n.a,{href:"/docs/next/reference/config-loader.closableconfig",children:"ClosableConfig"}),">"]}),"\n",(0,r.jsx)(n.p,{children:"A promise that resolves to a closable config"}),"\n",(0,r.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsx)(n.p,{children:"If you only want to read the config once you can close the returned config immediately."}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const sources = ConfigSources.default(...)\nconst config = await ConfigSources.toConfig(source)\nconfig.close()\nconst example = config.getString(...)\n"})})]})}function l(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},675251:(e,n,o)=>{var r=o(667294),c=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function f(e,n,o){var r,t={},f=null,d=null;for(r in void 0!==o&&(f=""+o),void 0!==n.key&&(f=""+n.key),void 0!==n.ref&&(d=n.ref),n)s.call(n,r)&&!a.hasOwnProperty(r)&&(t[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===t[r]&&(t[r]=n[r]);return{$$typeof:c,type:e,key:f,ref:d,props:t,_owner:i.current}}n.Fragment=t,n.jsx=f,n.jsxs=f},785893:(e,n,o)=>{e.exports=o(675251)},511151:(e,n,o)=>{o.d(n,{Z:()=>i,a:()=>s});var r=o(667294);const c={},t=r.createContext(c);function s(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);