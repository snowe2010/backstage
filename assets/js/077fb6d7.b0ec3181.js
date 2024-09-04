/*! For license information please see 077fb6d7.b0ec3181.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[500474],{603720:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=n(785893),s=n(511151);const o={id:"discovery",title:"Bitbucket Cloud Discovery",sidebar_label:"Discovery",description:"Automatically discovering catalog entities from repositories in Bitbucket Cloud"},a=void 0,r={id:"integrations/bitbucketCloud/discovery",title:"Bitbucket Cloud Discovery",description:"Automatically discovering catalog entities from repositories in Bitbucket Cloud",source:"@site/versioned_docs/version-stable/integrations/bitbucketCloud/discovery.md",sourceDirName:"integrations/bitbucketCloud",slug:"/integrations/bitbucketCloud/discovery",permalink:"/docs/integrations/bitbucketCloud/discovery",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/integrations/bitbucketCloud/discovery.md",tags:[],version:"stable",frontMatter:{id:"discovery",title:"Bitbucket Cloud Discovery",sidebar_label:"Discovery",description:"Automatically discovering catalog entities from repositories in Bitbucket Cloud"},sidebar:"docs",previous:{title:"Locations",permalink:"/docs/integrations/bitbucketCloud/locations"},next:{title:"Locations",permalink:"/docs/integrations/bitbucketServer/locations"}},l={},c=[{value:"Installation",id:"installation",level:2},{value:"Installation with New Backend System",id:"installation-with-new-backend-system",level:3},{value:"Installation with Legacy Backend System",id:"installation-with-legacy-backend-system",level:3},{value:"Installation without Events Support",id:"installation-without-events-support",level:4},{value:"Installation with Events Support",id:"installation-with-events-support",level:4},{value:"Configuration",id:"configuration",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["The Bitbucket Cloud integration has a special entity provider for discovering\ncatalog files located in ",(0,i.jsx)(t.a,{href:"https://bitbucket.org",children:"Bitbucket Cloud"}),".\nThe provider will search your Bitbucket Cloud account and register catalog files matching the configured path\nas Location entity and via following processing steps add all contained catalog entities.\nThis can be useful as an alternative to static locations or manually adding things to the catalog."]}),"\n",(0,i.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(t.p,{children:["You will have to add the entity provider in the catalog initialization code of your\nbackend. The provider is not installed by default, therefore you have to add a\ndependency to ",(0,i.jsx)(t.code,{children:"@backstage/plugin-catalog-backend-module-bitbucket-cloud"})," to your backend\npackage."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",metastring:'title="From your Backstage root directory"',children:"yarn --cwd packages/backend add @backstage/plugin-catalog-backend-module-bitbucket-cloud\n"})}),"\n",(0,i.jsx)(t.h3,{id:"installation-with-new-backend-system",children:"Installation with New Backend System"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"// optional if you want HTTP endpoints to receive external events\n// backend.add(import('@backstage/plugin-events-backend/alpha'));\n// optional if you want to use AWS SQS instead of HTTP endpoints to receive external events\n// backend.add(import('@backstage/plugin-events-backend-module-aws-sqs/alpha'));\nbackend.add(\n  import('@backstage/plugin-events-backend-module-bitbucket-cloud/alpha'),\n);\nbackend.add(\n  import('@backstage/plugin-catalog-backend-module-bitbucket-cloud/alpha'),\n);\n"})}),"\n",(0,i.jsx)(t.p,{children:"You need to decide how you want to receive events from external sources like"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/events-backend/README.md",children:"via HTTP endpoint"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/events-backend-module-aws-sqs/README.md",children:"via an AWS SQS queue"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Further documentation:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/events-backend/README.md",children:"https://github.com/backstage/backstage/tree/master/plugins/events-backend/README.md"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/events-backend-module-aws-sqs/README.md",children:"https://github.com/backstage/backstage/tree/master/plugins/events-backend-module-aws-sqs/README.md"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/events-backend-module-bitbucket-cloud/README.md",children:"https://github.com/backstage/backstage/tree/master/plugins/events-backend-module-bitbucket-cloud/README.md"})}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"installation-with-legacy-backend-system",children:"Installation with Legacy Backend System"}),"\n",(0,i.jsx)(t.h4,{id:"installation-without-events-support",children:"Installation without Events Support"}),"\n",(0,i.jsx)(t.p,{children:"And then add the entity provider to your catalog builder:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",metastring:'title="packages/backend/src/plugins/catalog.ts"',children:"/* highlight-add-next-line */\nimport { BitbucketCloudEntityProvider } from '@backstage/plugin-catalog-backend-module-bitbucket-cloud';\n\nexport default async function createPlugin(\n  env: PluginEnvironment,\n): Promise<Router> {\n  const builder = await CatalogBuilder.create(env);\n  /* highlight-add-start */\n  builder.addEntityProvider(\n    BitbucketCloudEntityProvider.fromConfig(env.config, {\n      logger: env.logger,\n      scheduler: env.scheduler,\n    }),\n  );\n  /* highlight-add-end */\n\n  // ..\n}\n"})}),"\n",(0,i.jsx)(t.h4,{id:"installation-with-events-support",children:"Installation with Events Support"}),"\n",(0,i.jsx)(t.p,{children:"Please follow the installation instructions at"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/events-backend/README.md",children:"https://github.com/backstage/backstage/tree/master/plugins/events-backend/README.md"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/events-backend-module-bitbucket-cloud/README.md",children:"https://github.com/backstage/backstage/tree/master/plugins/events-backend-module-bitbucket-cloud/README.md"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Additionally, you need to decide how you want to receive events from external sources like"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/events-backend/README.md",children:"via HTTP endpoint"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/events-backend-module-aws-sqs/README.md",children:"via an AWS SQS queue"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Set up your provider"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",metastring:'title="packages/backend/src/plugins/catalog.ts"',children:"import { CatalogBuilder } from '@backstage/plugin-catalog-backend';\n/* highlight-add-start */\nimport { BitbucketCloudEntityProvider } from '@backstage/plugin-catalog-backend-module-bitbucket-cloud';\n/* highlight-add-end */\n\nimport { ScaffolderEntitiesProcessor } from '@backstage/plugin-scaffolder-backend';\nimport { Router } from 'express';\nimport { PluginEnvironment } from '../types';\n\nexport default async function createPlugin(\n  env: PluginEnvironment,\n): Promise<Router> {\n  const builder = await CatalogBuilder.create(env);\n  builder.addProcessor(new ScaffolderEntitiesProcessor());\n  /* highlight-add-start */\n  const bitbucketCloudProvider = BitbucketCloudEntityProvider.fromConfig(\n    env.config,\n    {\n      catalogApi: new CatalogClient({ discoveryApi: env.discovery }),\n      events: env.events,\n      logger: env.logger,\n      scheduler: env.scheduler,\n      tokenManager: env.tokenManager,\n    },\n  );\n  env.eventBroker.subscribe(bitbucketCloudProvider);\n  builder.addEntityProvider(bitbucketCloudProvider);\n  /* highlight-add-end */\n  const { processingEngine, router } = await builder.build();\n  await processingEngine.start();\n  return router;\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Attention:"}),"\n",(0,i.jsx)(t.code,{children:"catalogApi"})," and ",(0,i.jsx)(t.code,{children:"tokenManager"})," are required at this variant\ncompared to the one without events support."]}),"\n",(0,i.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsxs)(t.p,{children:["To use the entity provider, you'll need a ",(0,i.jsx)(t.a,{href:"/docs/integrations/bitbucketCloud/locations",children:"Bitbucket Cloud integration set up"}),".\nVery likely a ",(0,i.jsx)(t.code,{children:"username"})," and ",(0,i.jsx)(t.code,{children:"appPassword"})," will be required\n(you are restricted to public repositories and a very low rate limit otherwise)."]}),"\n",(0,i.jsx)(t.p,{children:"Additionally, you need to configure your entity provider instance(s):"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",metastring:'title="app-config.yaml"',children:"catalog:\n  providers:\n    bitbucketCloud:\n      yourProviderId: # identifies your ingested dataset\n        catalogPath: /catalog-info.yaml # default value\n        filters: # optional\n          projectKey: '^apis-.*$' # optional; RegExp\n          repoSlug: '^service-.*$' # optional; RegExp\n        schedule: # same options as in SchedulerServiceTaskScheduleDefinition\n          # supports cron, ISO duration, \"human duration\" as used in code\n          frequency: { minutes: 30 }\n          # supports ISO duration, \"human duration\" as used in code\n          timeout: { minutes: 3 }\n        workspace: workspace-name\n"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note:"})," It is possible but certainly not recommended to skip the provider ID level.\nIf you do so, ",(0,i.jsx)(t.code,{children:"default"})," will be used as provider ID."]}),"\n"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"catalogPath"})})," ",(0,i.jsx)(t.em,{children:"(optional)"}),":\nDefault: ",(0,i.jsx)(t.code,{children:"/catalog-info.yaml"}),".\nPath where to look for ",(0,i.jsx)(t.code,{children:"catalog-info.yaml"})," files.\nWhen started with ",(0,i.jsx)(t.code,{children:"/"}),", it is an absolute path from the repo root.\nIt supports values as allowed by the ",(0,i.jsx)(t.code,{children:"path"})," filter/modifier\n",(0,i.jsx)(t.a,{href:"https://confluence.atlassian.com/bitbucket/code-search-in-bitbucket-873876782.html#Search-Pathmodifier",children:"at Bitbucket Cloud's code search"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"filters"})})," ",(0,i.jsx)(t.em,{children:"(optional)"}),":\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"projectKey"})})," ",(0,i.jsx)(t.em,{children:"(optional)"}),":\nRegular expression used to filter results based on the project key."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"repoSlug"})})," ",(0,i.jsx)(t.em,{children:"(optional)"}),":\nRegular expression used to filter results based on the repo slug."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"schedule"})}),":\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"frequency"})}),":\nHow often you want the task to run. The system does its best to avoid overlapping invocations."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"timeout"})}),":\nThe maximum amount of time that a single task invocation can take."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"initialDelay"})})," ",(0,i.jsx)(t.em,{children:"(optional)"}),":\nThe amount of time that should pass before the first invocation happens."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"scope"})})," ",(0,i.jsx)(t.em,{children:"(optional)"}),":\n",(0,i.jsx)(t.code,{children:"'global'"})," or ",(0,i.jsx)(t.code,{children:"'local'"}),". Sets the scope of concurrency control."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"workspace"})}),":\nName of your organization account/workspace.\nIf you want to add multiple workspaces, you need to add one provider config each."]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},675251:(e,t,n)=>{var i=n(667294),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,r=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var i,o={},c=null,d=null;for(i in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,i)&&!l.hasOwnProperty(i)&&(o[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===o[i]&&(o[i]=t[i]);return{$$typeof:s,type:e,key:c,ref:d,props:o,_owner:r.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},785893:(e,t,n)=>{e.exports=n(675251)},511151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>a});var i=n(667294);const s={},o=i.createContext(s);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);