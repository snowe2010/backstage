/*! For license information please see 9b2d4a15.ff597122.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[263735],{577038:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var n=r(785893),i=r(511151);const o={id:"discovery--old",title:"Gerrit Discovery",sidebar_label:"Discovery",description:"Automatically discovering catalog entities from Gerrit repositories"},s=void 0,a={id:"integrations/gerrit/discovery--old",title:"Gerrit Discovery",description:"Automatically discovering catalog entities from Gerrit repositories",source:"@site/../docs/integrations/gerrit/discovery--old.md",sourceDirName:"integrations/gerrit",slug:"/integrations/gerrit/discovery--old",permalink:"/docs/next/integrations/gerrit/discovery--old",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/integrations/gerrit/discovery--old.md",tags:[],version:"current",frontMatter:{id:"discovery--old",title:"Gerrit Discovery",sidebar_label:"Discovery",description:"Automatically discovering catalog entities from Gerrit repositories"}},c={},d=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["This documentation is written for the old backend which has been replaced by ",(0,n.jsx)(t.a,{href:"/docs/next/backend-system/",children:"the new backend system"}),", being the default since Backstage ",(0,n.jsx)(t.a,{href:"/docs/next/releases/v1.24.0",children:"version 1.24"}),". If have migrated to the new backend system, you may want to read ",(0,n.jsx)(t.a,{href:"/docs/next/integrations/gerrit/discovery",children:"its own article"})," instead. Otherwise, ",(0,n.jsx)(t.a,{href:"/docs/next/backend-system/building-backends/migrating",children:"consider migrating"}),"!"]})}),"\n",(0,n.jsxs)(t.p,{children:['The Gerrit integration has a special entity provider for discovering catalog entities\nfrom Gerrit repositories. The provider uses the "List Projects" API in Gerrit to get\na list of repositories and will automatically ingest all ',(0,n.jsx)(t.code,{children:"catalog-info.yaml"})," files\nstored in the root of the matching projects."]}),"\n",(0,n.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,n.jsx)(t.p,{children:"As this provider is not one of the default providers, you will first need to install\nthe Gerrit provider plugin:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",metastring:'title="From your Backstage root directory"',children:"yarn --cwd packages/backend add @backstage/plugin-catalog-backend-module-gerrit\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Then add the plugin to the plugin catalog ",(0,n.jsx)(t.code,{children:"packages/backend/src/plugins/catalog.ts"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"/* packages/backend/src/plugins/catalog.ts */\nimport { GerritEntityProvider } from '@backstage/plugin-catalog-backend-module-gerrit';\nconst builder = await CatalogBuilder.create(env);\n/** ... other processors and/or providers ... */\nbuilder.addEntityProvider(\n  GerritEntityProvider.fromConfig(env.config, {\n    logger: env.logger,\n    scheduler: env.scheduler,\n  }),\n);\n"})}),"\n",(0,n.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsxs)(t.p,{children:["To use the discovery processor, you'll need a Gerrit integration\n",(0,n.jsx)(t.a,{href:"/docs/next/integrations/gerrit/locations",children:"set up"}),". Then you can add any number of providers."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"# app-config.yaml\ncatalog:\n  providers:\n    gerrit:\n      yourProviderId: # identifies your dataset / provider independent of config changes\n        host: gerrit-your-company.com\n        branch: master # Optional\n        query: 'state=ACTIVE&prefix=webapps'\n        schedule:\n          # supports cron, ISO duration, \"human duration\" as used in code\n          frequency: { minutes: 30 }\n          # supports ISO duration, \"human duration\" as used in code\n          timeout: { minutes: 3 }\n      backend:\n        host: gerrit-your-company.com\n        branch: master # Optional\n        query: 'state=ACTIVE&prefix=backend'\n"})}),"\n",(0,n.jsx)(t.p,{children:"The provider configuration is composed of three parts:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"host"})}),": the host of the Gerrit integration to use."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"branch"})})," ",(0,n.jsx)(t.em,{children:"(optional)"}),': the branch where we will look for catalog entities (defaults to "master").']}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"query"})}),': this string is directly used as the argument to the "List Project" API.\nTypically, you will want to have some filter here to exclude projects that will\nnever contain any catalog files.']}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},675251:(e,t,r)=>{var n=r(667294),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,r){var n,o={},d=null,l=null;for(n in void 0!==r&&(d=""+r),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,n)&&!c.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:i,type:e,key:d,ref:l,props:o,_owner:a.current}}t.Fragment=o,t.jsx=d,t.jsxs=d},785893:(e,t,r)=>{e.exports=r(675251)},511151:(e,t,r)=>{r.d(t,{Z:()=>a,a:()=>s});var n=r(667294);const i={},o=n.createContext(i);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);