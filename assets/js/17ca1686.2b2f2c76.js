/*! For license information please see 17ca1686.2b2f2c76.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[50114],{828656:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=t(785893),o=t(511151);const r={id:"discovery",title:"Bitbucket Server Discovery",sidebar_label:"Discovery",description:"Automatically discovering catalog entities from repositories in Bitbucket Server"},s=void 0,a={id:"integrations/bitbucketServer/discovery",title:"Bitbucket Server Discovery",description:"Automatically discovering catalog entities from repositories in Bitbucket Server",source:"@site/versioned_docs/version-stable/integrations/bitbucketServer/discovery.md",sourceDirName:"integrations/bitbucketServer",slug:"/integrations/bitbucketServer/discovery",permalink:"/docs/integrations/bitbucketServer/discovery",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/integrations/bitbucketServer/discovery.md",tags:[],version:"stable",frontMatter:{id:"discovery",title:"Bitbucket Server Discovery",sidebar_label:"Discovery",description:"Automatically discovering catalog entities from repositories in Bitbucket Server"},sidebar:"docs",previous:{title:"Locations",permalink:"/docs/integrations/bitbucketServer/locations"},next:{title:"Installation",permalink:"/docs/integrations/datadog-rum/installation"}},c={},l=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Custom location processing",id:"custom-location-processing",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"The Bitbucket Server integration has a special entity provider for discovering\ncatalog files located in Bitbucket Server.\nThe provider will search your Bitbucket Server account and register catalog files matching the configured path\nas Location entity and via following processing steps add all contained catalog entities.\nThis can be useful as an alternative to static locations or manually adding things to the catalog."}),"\n",(0,i.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(n.p,{children:["You will have to add the entity provider in the catalog initialization code of your\nbackend. The provider is not installed by default, therefore you have to add a\ndependency to ",(0,i.jsx)(n.code,{children:"@backstage/plugin-catalog-backend-module-bitbucket-server"})," to your backend\npackage."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="From your Backstage root directory"',children:"yarn --cwd packages/backend add @backstage/plugin-catalog-backend-module-bitbucket-server\n"})}),"\n",(0,i.jsx)(n.p,{children:"And then add the entity provider to your catalog builder:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="packages/backend/src/plugins/catalog.ts"',children:"/* highlight-add-next-line */\nimport { BitbucketServerEntityProvider } from '@backstage/plugin-catalog-backend-module-bitbucket-server';\n\nexport default async function createPlugin(\n  env: PluginEnvironment,\n): Promise<Router> {\n  const builder = await CatalogBuilder.create(env);\n  /* highlight-add-start */\n  builder.addEntityProvider(\n    BitbucketServerEntityProvider.fromConfig(env.config, {\n      logger: env.logger,\n      scheduler: env.scheduler,\n    }),\n  );\n  /* highlight-add-end */\n\n  // ..\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsxs)(n.p,{children:["To use the entity provider, you'll need a ",(0,i.jsx)(n.a,{href:"/docs/integrations/bitbucketServer/locations",children:"Bitbucket Server integration set up"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Additionally, you need to configure your entity provider instance(s):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="app-config.yaml"',children:"catalog:\n  providers:\n    bitbucketServer:\n      yourProviderId: # identifies your ingested dataset\n        host: 'bitbucket.mycompany.com'\n        catalogPath: /catalog-info.yaml # default value\n        filters: # optional\n          projectKey: '^apis-.*$' # optional; RegExp\n          repoSlug: '^service-.*$' # optional; RegExp\n          skipArchivedRepos: true # optional; boolean\n        schedule: # same options as in SchedulerServiceTaskScheduleDefinition\n          # supports cron, ISO duration, \"human duration\" as used in code\n          frequency: { minutes: 30 }\n          # supports ISO duration, \"human duration\" as used in code\n          timeout: { minutes: 3 }\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"host"})}),":\nThe host of the Bitbucket Server instance, ",(0,i.jsx)(n.strong,{children:"note"}),": the host needs to registered as an integration as well, see ",(0,i.jsx)(n.a,{href:"/docs/integrations/bitbucketServer/locations",children:"location"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"catalogPath"})})," ",(0,i.jsx)(n.em,{children:"(optional)"}),":\nDefault: ",(0,i.jsx)(n.code,{children:"/catalog-info.yaml"}),".\nPath where to look for ",(0,i.jsx)(n.code,{children:"catalog-info.yaml"})," files.\nWhen started with ",(0,i.jsx)(n.code,{children:"/"}),", it is an absolute path from the repo root."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"filters"})})," ",(0,i.jsx)(n.em,{children:"(optional)"}),":\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"projectKey"})})," ",(0,i.jsx)(n.em,{children:"(optional)"}),":\nRegular expression used to filter results based on the project key."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"repoSlug"})})," ",(0,i.jsx)(n.em,{children:"(optional)"}),":\nRegular expression used to filter results based on the repo slug."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"skipArchivedRepos"})})," ",(0,i.jsx)(n.em,{children:"(optional)"}),":\nBoolean flag to filter out archived repositories."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"schedule"})}),":\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"frequency"})}),":\nHow often you want the task to run. The system does its best to avoid overlapping invocations."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"timeout"})}),":\nThe maximum amount of time that a single task invocation can take."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"initialDelay"})})," ",(0,i.jsx)(n.em,{children:"(optional)"}),":\nThe amount of time that should pass before the first invocation happens."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"scope"})})," ",(0,i.jsx)(n.em,{children:"(optional)"}),":\n",(0,i.jsx)(n.code,{children:"'global'"})," or ",(0,i.jsx)(n.code,{children:"'local'"}),". Sets the scope of concurrency control."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"custom-location-processing",children:"Custom location processing"}),"\n",(0,i.jsx)(n.p,{children:"The Bitbucket Server Entity Provider will by default emit a location for each\nmatching repository. However, it is possible to override this functionality and take full control of how each\nmatching repository is processed."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"BitbucketServerEntityProvider.fromConfig"})," takes an optional parameter\n",(0,i.jsx)(n.code,{children:"options.parser"})," where you can set your own parser to be used for each matched\nrepository."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"const provider = BitbucketServerEntityProvider.fromConfig(env.config, {\n  logger: env.logger,\n  schedule: env.scheduler,\n  parser: async function* customLocationParser(options: {\n    location: LocationSpec;\n    client: BitbucketServerClient;\n  }) {\n    // Custom logic for interpreting the matching repository\n    // See defaultBitbucketServerLocationParser for an example\n  },\n});\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},675251:(e,n,t)=>{var i=t(667294),o=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var i,r={},l=null,d=null;for(i in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)s.call(n,i)&&!c.hasOwnProperty(i)&&(r[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===r[i]&&(r[i]=n[i]);return{$$typeof:o,type:e,key:l,ref:d,props:r,_owner:a.current}}n.Fragment=r,n.jsx=l,n.jsxs=l},785893:(e,n,t)=>{e.exports=t(675251)},511151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var i=t(667294);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);