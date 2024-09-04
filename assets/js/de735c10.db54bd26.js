/*! For license information please see de735c10.db54bd26.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[991862],{283623:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>p,default:()=>l,frontMatter:()=>c,metadata:()=>s,toc:()=>i});var r=t(785893),o=t(511151);const c={id:"core-app-api.appcontext",title:"AppContext",description:"API reference for AppContext"},p=void 0,s={id:"reference/core-app-api.appcontext",title:"AppContext",description:"API reference for AppContext",source:"@site/versioned_docs/version-stable/reference/core-app-api.appcontext.md",sourceDirName:"reference",slug:"/reference/core-app-api.appcontext",permalink:"/docs/reference/core-app-api.appcontext",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/core-app-api.appcontext.md",tags:[],version:"stable",frontMatter:{id:"core-app-api.appcontext",title:"AppContext",description:"API reference for AppContext"}},a={},i=[];function d(e){const n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/core-app-api",children:(0,r.jsx)(n.code,{children:"@backstage/core-app-api"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/core-app-api.appcontext",children:(0,r.jsx)(n.code,{children:"AppContext"})})]}),"\n",(0,r.jsx)(n.p,{children:"The central context providing runtime app specific state that plugin views want to consume."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"export type AppContext = {\n    getPlugins(): BackstagePlugin[];\n    getSystemIcon(key: string): IconComponent | undefined;\n    getSystemIcons(): Record<string, IconComponent>;\n    getComponents(): AppComponents;\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"References:"})," ",(0,r.jsx)(n.a,{href:"/docs/reference/core-plugin-api.backstageplugin",children:"BackstagePlugin"}),", ",(0,r.jsx)(n.a,{href:"/docs/reference/core-plugin-api.iconcomponent",children:"IconComponent"}),", ",(0,r.jsx)(n.a,{href:"/docs/reference/core-app-api.appcomponents",children:"AppComponents"})]})]})}function l(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},675251:(e,n,t)=>{var r=t(667294),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function i(e,n,t){var r,c={},i=null,d=null;for(r in void 0!==t&&(i=""+t),void 0!==n.key&&(i=""+n.key),void 0!==n.ref&&(d=n.ref),n)p.call(n,r)&&!a.hasOwnProperty(r)&&(c[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===c[r]&&(c[r]=n[r]);return{$$typeof:o,type:e,key:i,ref:d,props:c,_owner:s.current}}n.Fragment=c,n.jsx=i,n.jsxs=i},785893:(e,n,t)=>{e.exports=t(675251)},511151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>p});var r=t(667294);const o={},c=r.createContext(o);function p(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:p(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);