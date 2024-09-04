/*! For license information please see 76a4e7bb.fa95c3cb.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[289040],{614209:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=n(785893),a=n(511151);const o={id:"discovery",title:"GitLab Discovery",sidebar_label:"Discovery",description:"Automatically discovering catalog entities from repositories in GitLab"},s=void 0,r={id:"integrations/gitlab/discovery",title:"GitLab Discovery",description:"Automatically discovering catalog entities from repositories in GitLab",source:"@site/versioned_docs/version-stable/integrations/gitlab/discovery.md",sourceDirName:"integrations/gitlab",slug:"/integrations/gitlab/discovery",permalink:"/docs/integrations/gitlab/discovery",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/integrations/gitlab/discovery.md",tags:[],version:"stable",frontMatter:{id:"discovery",title:"GitLab Discovery",sidebar_label:"Discovery",description:"Automatically discovering catalog entities from repositories in GitLab"},sidebar:"docs",previous:{title:"Locations",permalink:"/docs/integrations/gitlab/locations"},next:{title:"Org Data",permalink:"/docs/integrations/gitlab/org"}},l={},c=[{value:"Installation",id:"installation",level:2},{value:"Installation with New Backend System",id:"installation-with-new-backend-system",level:3},{value:"Installation with Legacy Backend System",id:"installation-with-legacy-backend-system",level:3},{value:"Installation without Events Support",id:"installation-without-events-support",level:4},{value:"Installation with Events Support",id:"installation-with-events-support",level:4},{value:"Configuration",id:"configuration",level:2},{value:"Alternative processor",id:"alternative-processor",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"The GitLab integration has a special entity provider for discovering catalog\nentities from GitLab. The entity provider will crawl the GitLab instance and register\nentities matching the configured paths. This can be useful as an alternative to\nstatic locations or manually adding things to the catalog."}),"\n",(0,i.jsxs)(t.p,{children:["This provider can also be configured to ingest GitLab data based on ",(0,i.jsx)(t.a,{href:"https://docs.gitlab.com/ee/user/project/integrations/webhooks.html#configure-a-webhook-in-gitlab",children:"GitLab Webhooks"}),". The events currently accepted are:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://docs.gitlab.com/ee/user/project/integrations/webhook_events.html#push-events",children:(0,i.jsx)(t.code,{children:"push"})}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(t.p,{children:"As this provider is not one of the default providers, you will first need to install\nthe gitlab catalog plugin:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",metastring:'title="From your Backstage root directory"',children:"yarn --cwd packages/backend add @backstage/plugin-catalog-backend-module-gitlab\n"})}),"\n",(0,i.jsx)(t.h3,{id:"installation-with-new-backend-system",children:"Installation with New Backend System"}),"\n",(0,i.jsx)(t.p,{children:"Then add the following to your backend initialization:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",metastring:'title="packages/backend/src/index.ts',children:"// optional if you want HTTP endpoints to receive external events\n// backend.add(import('@backstage/plugin-events-backend/alpha'));\n// optional if you want to use AWS SQS instead of HTTP endpoints to receive external events\n// backend.add(import('@backstage/plugin-events-backend-module-aws-sqs/alpha'));\n// optional - event router for gitlab. See.: https://github.com/backstage/backstage/blob/master/plugins/events-backend-module-gitlab/README.md\n// backend.add(eventsModuleGitlabEventRouter());\n// optional - token validator for the gitlab topic\n// backend.add(eventsModuleGitlabWebhook());\nbackend.add(import('@backstage/plugin-catalog-backend-module-gitlab/alpha'));\n"})}),"\n",(0,i.jsx)(t.p,{children:"You need to decide how you want to receive events from external sources like"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/events-backend/README.md#configuration",children:"via HTTP endpoint"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/events-backend-module-aws-sqs/README.md",children:"via an AWS SQS queue"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Further documentation:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/events-backend/README.md",children:"Events Plugin"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/events-backend-module-gitlab/README.md",children:"GitLab Module for the Events Plugin"})}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"installation-with-legacy-backend-system",children:"Installation with Legacy Backend System"}),"\n",(0,i.jsx)(t.h4,{id:"installation-without-events-support",children:"Installation without Events Support"}),"\n",(0,i.jsxs)(t.p,{children:["Add the segment below to ",(0,i.jsx)(t.code,{children:"packages/backend/src/plugins/catalog.ts"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",metastring:'title="packages/backend/src/plugins/catalog.ts"',children:"/* highlight-add-next-line */\nimport { GitlabDiscoveryEntityProvider } from '@backstage/plugin-catalog-backend-module-gitlab';\n\nexport default async function createPlugin(\n  env: PluginEnvironment,\n): Promise<Router> {\n  const builder = await CatalogBuilder.create(env);\n  /* highlight-add-start */\n  builder.addEntityProvider(\n    ...GitlabDiscoveryEntityProvider.fromConfig(env.config, {\n      logger: env.logger,\n      // optional: alternatively, use scheduler with schedule defined in app-config.yaml\n      schedule: env.scheduler.createScheduledTaskRunner({\n        frequency: { minutes: 30 },\n        timeout: { minutes: 3 },\n      }),\n      // optional: alternatively, use schedule\n      scheduler: env.scheduler,\n    }),\n  );\n  /* highlight-add-end */\n  // ..\n}\n"})}),"\n",(0,i.jsx)(t.h4,{id:"installation-with-events-support",children:"Installation with Events Support"}),"\n",(0,i.jsx)(t.p,{children:"Please follow the installation instructions at"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/events-backend/README.md",children:"Events Plugin"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/events-backend-module-gitlab/README.md",children:"GitLab Module for the Events Plugin"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Additionally, you need to decide how you want to receive events from external sources like"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/events-backend/README.md",children:"via HTTP endpoint"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/events-backend-module-aws-sqs/README.md",children:"via an AWS SQS queue"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Set up your provider"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",metastring:'title="packages/backend/src/plugins/catalog.ts"',children:"import { CatalogBuilder } from '@backstage/plugin-catalog-backend';\n/* highlight-add-next-line */\nimport { GitlabDiscoveryEntityProvider } from '@backstage/plugin-catalog-backend-module-gitlab';\nimport { ScaffolderEntitiesProcessor } from '@backstage/plugin-scaffolder-backend';\nimport { Router } from 'express';\nimport { PluginEnvironment } from '../types';\n\nexport default async function createPlugin(\n  env: PluginEnvironment,\n): Promise<Router> {\n  const builder = await CatalogBuilder.create(env);\n  builder.addProcessor(new ScaffolderEntitiesProcessor());\n  /* highlight-add-start */\n  const gitlabProvider = GitlabDiscoveryEntityProvider.fromConfig(env.config, {\n    logger: env.logger,\n    // optional: alternatively, use scheduler with schedule defined in app-config.yaml\n    schedule: env.scheduler.createScheduledTaskRunner({\n      frequency: { minutes: 30 },\n      timeout: { minutes: 3 },\n    }),\n    // optional: alternatively, use schedule\n    scheduler: env.scheduler,\n    events: env.events,\n  });\n  builder.addEntityProvider(gitlabProvider);\n  /* highlight-add-end */\n  const { processingEngine, router } = await builder.build();\n  await processingEngine.start();\n  return router;\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsxs)(t.p,{children:["To use the discovery provider, you'll need a GitLab integration\n",(0,i.jsx)(t.a,{href:"/docs/integrations/gitlab/locations",children:"set up"})," with a ",(0,i.jsx)(t.code,{children:"token"}),". Then you can add a provider config per group\nto the catalog configuration."]}),"\n",(0,i.jsx)(t.admonition,{title:"Note",type:"note",children:(0,i.jsxs)(t.p,{children:["If you are using the New Backend System, the ",(0,i.jsx)(t.code,{children:"schedule"})," has to be setup in the config, as shown below."]})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",metastring:'title="app-config.yaml"',children:'catalog:\n  providers:\n    gitlab:\n      yourProviderId:\n        host: gitlab-host # Identifies one of the hosts set up in the integrations\n        branch: main # Optional. Used to discover on a specific branch\n        fallbackBranch: master # Optional. Fallback to be used if there is no default branch configured at the Gitlab repository. It is only used, if `branch` is undefined. Uses `master` as default\n        skipForkedRepos: false # Optional. If the project is a fork, skip repository\n        group: example-group # Optional. Group and subgroup (if needed) to look for repositories. If not present the whole instance will be scanned\n        entityFilename: catalog-info.yaml # Optional. Defaults to `catalog-info.yaml`\n        projectPattern: \'[\\s\\S]*\' # Optional. Filters found projects based on provided patter. Defaults to `[\\s\\S]*`, which means to not filter anything\n        excludeRepos: [] # Optional. A list of project paths that should be excluded from discovery, e.g. group/subgroup/repo. Should not start or end with a slash.\n        schedule: # Same options as in SchedulerServiceTaskScheduleDefinition. Optional for the Legacy Backend System\n          # supports cron, ISO duration, "human duration" as used in code\n          frequency: { minutes: 30 }\n          # supports ISO duration, "human duration" as used in code\n          timeout: { minutes: 3 }\n'})}),"\n",(0,i.jsx)(t.h2,{id:"alternative-processor",children:"Alternative processor"}),"\n",(0,i.jsxs)(t.p,{children:["As alternative to the entity provider ",(0,i.jsx)(t.code,{children:"GitlabDiscoveryEntityProvider"}),"\nyou can still use the ",(0,i.jsx)(t.code,{children:"GitLabDiscoveryProcessor"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Note the ",(0,i.jsx)(t.code,{children:"gitlab-discovery"})," type, as this is not a regular ",(0,i.jsx)(t.code,{children:"url"})," processor."]}),"\n",(0,i.jsx)(t.p,{children:"The target is composed of three parts:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["The base URL, ",(0,i.jsx)(t.code,{children:"https://gitlab.com"})," in this case"]}),"\n",(0,i.jsxs)(t.li,{children:["The group path, ",(0,i.jsx)(t.code,{children:"group/subgroup"})," in this case. This is optional: If you omit\nthis path the processor will scan the entire GitLab instance instead."]}),"\n",(0,i.jsxs)(t.li,{children:["The path within each repository to find the catalog YAML file. This will\nusually be ",(0,i.jsx)(t.code,{children:"/blob/main/catalog-info.yaml"}),", ",(0,i.jsx)(t.code,{children:"/blob/master/catalog-info.yaml"})," or\na similar variation for catalog files stored in the root directory of each\nrepository. If you want to use the repository's default branch use the ",(0,i.jsx)(t.code,{children:"*"}),"\nwildcard, e.g.: ",(0,i.jsx)(t.code,{children:"/blob/*/catalog-info.yaml"})]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Finally, you will have to add the processor in the catalog initialization code\nof your backend."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",metastring:'title="packages/backend/src/plugins/catalog.ts"',children:"/* highlight-add-next-line */\nimport { GitLabDiscoveryProcessor } from '@backstage/plugin-catalog-backend-module-gitlab';\n\nexport default async function createPlugin(\n  env: PluginEnvironment,\n): Promise<Router> {\n  const builder = await CatalogBuilder.create(env);\n  /* highlight-add-start */\n  builder.addProcessor(\n    GitLabDiscoveryProcessor.fromConfig(env.config, { logger: env.logger }),\n  );\n  /* highlight-add-end */\n\n  // ..\n}\n"})}),"\n",(0,i.jsx)(t.p,{children:"And add the following to your app-config.yaml"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"catalog:\n  locations:\n    - type: gitlab-discovery\n      target: https://gitlab.com/group/subgroup/blob/main/catalog-info.yaml\n"})}),"\n",(0,i.jsxs)(t.p,{children:["If you don't want create location object if file with component definition do not exists in project, you can set the ",(0,i.jsx)(t.code,{children:"skipReposWithoutExactFileMatch"})," option. That can reduce count of request to gitlab with 404 status code."]}),"\n",(0,i.jsxs)(t.p,{children:["If you don't want to create location object if the project is a fork, you can set the ",(0,i.jsx)(t.code,{children:"skipForkedRepos"})," option."]})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},675251:(e,t,n)=>{var i=n(667294),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,r=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var i,o={},c=null,d=null;for(i in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,i)&&!l.hasOwnProperty(i)&&(o[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===o[i]&&(o[i]=t[i]);return{$$typeof:a,type:e,key:c,ref:d,props:o,_owner:r.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},785893:(e,t,n)=>{e.exports=n(675251)},511151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>s});var i=n(667294);const a={},o=i.createContext(a);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);