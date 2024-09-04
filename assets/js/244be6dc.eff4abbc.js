/*! For license information please see 244be6dc.eff4abbc.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[841638],{69858:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var c=r(785893),t=r(511151);const i={id:"backend-dynamic-feature-service.legacybackendplugininstaller",title:"LegacyBackendPluginInstaller",description:"API reference for LegacyBackendPluginInstaller"},s=void 0,a={id:"reference/backend-dynamic-feature-service.legacybackendplugininstaller",title:"LegacyBackendPluginInstaller",description:"API reference for LegacyBackendPluginInstaller",source:"@site/../docs/reference/backend-dynamic-feature-service.legacybackendplugininstaller.md",sourceDirName:"reference",slug:"/reference/backend-dynamic-feature-service.legacybackendplugininstaller",permalink:"/docs/next/reference/backend-dynamic-feature-service.legacybackendplugininstaller",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-dynamic-feature-service.legacybackendplugininstaller.md",tags:[],version:"current",frontMatter:{id:"backend-dynamic-feature-service.legacybackendplugininstaller",title:"LegacyBackendPluginInstaller",description:"API reference for LegacyBackendPluginInstaller"}},d={},l=[{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}];function o(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,c.jsx)(n.a,{href:"/docs/next/reference/backend-dynamic-feature-service",children:(0,c.jsx)(n.code,{children:"@backstage/backend-dynamic-feature-service"})})," > ",(0,c.jsx)(n.a,{href:"/docs/next/reference/backend-dynamic-feature-service.legacybackendplugininstaller",children:(0,c.jsx)(n.code,{children:"LegacyBackendPluginInstaller"})})]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"Warning: This API is now obsolete."}),"\n",(0,c.jsx)(n.p,{children:"Support for the legacy backend system will be removed in the future."}),"\n",(0,c.jsx)(n.p,{children:"When adding a legacy plugin installer entrypoint in your plugin, you should always take the opportunity to also implement support for the new backend system if not already done."}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-typescript",children:"export interface LegacyBackendPluginInstaller \n"})}),"\n",(0,c.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Property"}),(0,c.jsx)(n.th,{children:"Modifiers"}),(0,c.jsx)(n.th,{children:"Type"}),(0,c.jsx)(n.th,{children:"Description"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/next/reference/backend-dynamic-feature-service.legacybackendplugininstaller.kind",children:"kind"})}),(0,c.jsx)(n.td,{}),(0,c.jsx)(n.td,{children:"'legacy'"}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/next/reference/backend-dynamic-feature-service.legacybackendplugininstaller.permissions",children:"permissions?"})}),(0,c.jsx)(n.td,{}),(0,c.jsxs)(n.td,{children:["{ policy?: ",(0,c.jsx)(n.a,{href:"/docs/next/reference/plugin-permission-node.permissionpolicy",children:"PermissionPolicy"}),"; }"]}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.em,{children:"(Optional)"})})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/next/reference/backend-dynamic-feature-service.legacybackendplugininstaller.router",children:"router?"})}),(0,c.jsx)(n.td,{}),(0,c.jsxs)(n.td,{children:["{ pluginID: string; createPlugin(env: ",(0,c.jsx)(n.a,{href:"/docs/next/reference/backend-dynamic-feature-service.legacypluginenvironment",children:"LegacyPluginEnvironment"}),"): Promise<Router>; }"]}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.em,{children:"(Optional)"})})]})]})]}),"\n",(0,c.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Method"}),(0,c.jsx)(n.th,{children:"Description"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/next/reference/backend-dynamic-feature-service.legacybackendplugininstaller.catalog",children:"catalog(builder, env)?"})}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.em,{children:"(Optional)"})})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/next/reference/backend-dynamic-feature-service.legacybackendplugininstaller.events",children:"events(eventsBackend, env)?"})}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.em,{children:"(Optional)"})})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/next/reference/backend-dynamic-feature-service.legacybackendplugininstaller.scaffolder",children:"scaffolder(env)?"})}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.em,{children:"(Optional)"})})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/next/reference/backend-dynamic-feature-service.legacybackendplugininstaller.search",children:"search(indexBuilder, schedule, env)?"})}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.em,{children:"(Optional)"})})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}},675251:(e,n,r)=>{var c=r(667294),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var c,i={},l=null,o=null;for(c in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(o=n.ref),n)s.call(n,c)&&!d.hasOwnProperty(c)&&(i[c]=n[c]);if(e&&e.defaultProps)for(c in n=e.defaultProps)void 0===i[c]&&(i[c]=n[c]);return{$$typeof:t,type:e,key:l,ref:o,props:i,_owner:a.current}}n.Fragment=i,n.jsx=l,n.jsxs=l},785893:(e,n,r)=>{e.exports=r(675251)},511151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>s});var c=r(667294);const t={},i=c.createContext(t);function s(e){const n=c.useContext(i);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),c.createElement(i.Provider,{value:n},e.children)}}}]);