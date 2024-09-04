/*! For license information please see 538cc5f0.785787d0.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[260174],{826542:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var t=n(785893),o=n(511151);const s={id:"discovery",title:"GitHub Discovery",sidebar_label:"Discovery",description:"Automatically discovering catalog entities from repositories in a GitHub organization"},r=void 0,a={id:"integrations/github/discovery",title:"GitHub Discovery",description:"Automatically discovering catalog entities from repositories in a GitHub organization",source:"@site/versioned_docs/version-stable/integrations/github/discovery.md",sourceDirName:"integrations/github",slug:"/integrations/github/discovery",permalink:"/docs/integrations/github/discovery",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/integrations/github/discovery.md",tags:[],version:"stable",frontMatter:{id:"discovery",title:"GitHub Discovery",sidebar_label:"Discovery",description:"Automatically discovering catalog entities from repositories in a GitHub organization"},sidebar:"docs",previous:{title:"Locations",permalink:"/docs/integrations/github/locations"},next:{title:"Org Data",permalink:"/docs/integrations/github/org"}},c={},l=[{value:"GitHub Provider",id:"github-provider",level:2},{value:"Installation",id:"installation",level:2},{value:"Events Support",id:"events-support",level:2},{value:"Configuration",id:"configuration",level:2},{value:"GitHub API Rate Limits",id:"github-api-rate-limits",level:2}];function d(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.admonition,{type:"info",children:(0,t.jsxs)(i.p,{children:["This documentation is written for ",(0,t.jsx)(i.a,{href:"/docs/backend-system/",children:"the new backend system"})," which is the default since Backstage ",(0,t.jsx)(i.a,{href:"/docs/releases/v1.24.0",children:"version 1.24"}),". If you are still on the old backend system, you may want to read ",(0,t.jsx)(i.a,{href:"/docs/integrations/github/discovery--old",children:"its own article"})," instead, and ",(0,t.jsx)(i.a,{href:"/docs/backend-system/building-backends/migrating",children:"consider migrating"}),"!"]})}),"\n",(0,t.jsx)(i.h2,{id:"github-provider",children:"GitHub Provider"}),"\n",(0,t.jsx)(i.p,{children:"The GitHub integration has a discovery provider for discovering catalog\nentities within a GitHub organization. The provider will crawl the GitHub\norganization and register entities matching the configured path. This can be\nuseful as an alternative to static locations or manually adding things to the\ncatalog. This is the preferred method for ingesting entities into the catalog."}),"\n",(0,t.jsx)(i.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(i.p,{children:["You will have to add the GitHub Entity provider to your backend as it is not installed by default, therefore you have to add a\ndependency on ",(0,t.jsx)(i.code,{children:"@backstage/plugin-catalog-backend-module-github"})," to your backend\npackage."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",metastring:'title="From your Backstage root directory"',children:"yarn --cwd packages/backend add @backstage/plugin-catalog-backend-module-github\n"})}),"\n",(0,t.jsx)(i.p,{children:"And then update your backend by adding the following line:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-ts",metastring:'title="packages/backend/src/index.ts"',children:"backend.add(import('@backstage/plugin-catalog-backend/alpha'));\n/* highlight-add-start */\nbackend.add(import('@backstage/plugin-catalog-backend-module-github/alpha'));\n"})}),"\n",(0,t.jsx)(i.h2,{id:"events-support",children:"Events Support"}),"\n",(0,t.jsxs)(i.p,{children:["The catalog module for GitHub comes with events support enabled.\nThis will make it subscribe to its relevant topics (",(0,t.jsx)(i.code,{children:"github.push"}),",\n",(0,t.jsx)(i.code,{children:"github.repository"}),") and expects these events to be published\nvia the ",(0,t.jsx)(i.code,{children:"EventsService"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["Additionally, you should install the\n",(0,t.jsxs)(i.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/events-backend-module-github/README.md",children:["event router by ",(0,t.jsx)(i.code,{children:"events-backend-module-github"})]}),"\nwhich will route received events from the generic topic ",(0,t.jsx)(i.code,{children:"github"})," to more specific ones\nbased on the event type (e.g., ",(0,t.jsx)(i.code,{children:"github.push"}),")."]}),"\n",(0,t.jsxs)(i.p,{children:["In order to receive Webhook events by GitHub, you have to decide how you want them\nto be ingested into Backstage and published to its ",(0,t.jsx)(i.code,{children:"EventsService"}),".\nYou can decide between the following options (extensible):"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/events-backend/README.md",children:"via HTTP endpoint"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/events-backend-module-aws-sqs/README.md",children:"via an AWS SQS queue"})}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["You can check the official docs to ",(0,t.jsx)(i.a,{href:"https://docs.github.com/en/developers/webhooks-and-events/webhooks/creating-webhooks",children:"configure your webhook"})," and to ",(0,t.jsx)(i.a,{href:"https://docs.github.com/en/developers/webhooks-and-events/webhooks/securing-your-webhooks",children:"secure your request"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["The webhook(s) will need to be configured to react to ",(0,t.jsx)(i.code,{children:"push"})," and\n",(0,t.jsx)(i.code,{children:"repository"})," events."]}),"\n",(0,t.jsxs)(i.p,{children:["Certain actions like ",(0,t.jsx)(i.code,{children:"transferred"})," by the ",(0,t.jsx)(i.code,{children:"repository"})," event type\nwill not be supported when you use repository webhooks.\nPlease check the GitHubs documentation for these event types and\nits actions."]}),"\n",(0,t.jsx)(i.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(i.p,{children:["To use the discovery provider, you'll need a GitHub integration\n",(0,t.jsx)(i.a,{href:"/docs/integrations/github/locations",children:"set up"})," with either a ",(0,t.jsx)(i.a,{href:"/docs/getting-started/config/authentication",children:"Personal Access Token"})," or ",(0,t.jsx)(i.a,{href:"/docs/integrations/github/github-apps",children:"GitHub Apps"}),". For Personal Access Tokens you should pay attention to the ",(0,t.jsx)(i.a,{href:"https://backstage.io/docs/integrations/github/locations/#token-scopes",children:"required scopes"}),", where you will need at least the ",(0,t.jsx)(i.code,{children:"repo"})," scope for reading components. For GitHub Apps you will need to grant it the ",(0,t.jsx)(i.a,{href:"https://backstage.io/docs/integrations/github/github-apps#app-permissions",children:"required permissions"})," instead, where you will need at least the ",(0,t.jsx)(i.code,{children:"Contents: Read-only"})," permissions for reading components."]}),"\n",(0,t.jsxs)(i.p,{children:["Then you can add a ",(0,t.jsx)(i.code,{children:"github"})," config to the catalog providers configuration:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-yaml",children:"catalog:\n  providers:\n    github:\n      # the provider ID can be any camelCase string\n      providerId:\n        organization: 'backstage' # string\n        catalogPath: '/catalog-info.yaml' # string\n        filters:\n          branch: 'main' # string\n          repository: '.*' # Regex\n        schedule: # same options as in SchedulerServiceTaskScheduleDefinition\n          # supports cron, ISO duration, \"human duration\" as used in code\n          frequency: { minutes: 30 }\n          # supports ISO duration, \"human duration\" as used in code\n          timeout: { minutes: 3 }\n      customProviderId:\n        organization: 'new-org' # string\n        catalogPath: '/custom/path/catalog-info.yaml' # string\n        filters: # optional filters\n          branch: 'develop' # optional string\n          repository: '.*' # optional Regex\n      wildcardProviderId:\n        organization: 'new-org' # string\n        catalogPath: '/groups/**/*.yaml' # this will search all folders for files that end in .yaml\n        filters: # optional filters\n          branch: 'develop' # optional string\n          repository: '.*' # optional Regex\n      topicProviderId:\n        organization: 'backstage' # string\n        catalogPath: '/catalog-info.yaml' # string\n        filters:\n          branch: 'main' # string\n          repository: '.*' # Regex\n          topic: 'backstage-exclude' # optional string\n      topicFilterProviderId:\n        organization: 'backstage' # string\n        catalogPath: '/catalog-info.yaml' # string\n        filters:\n          branch: 'main' # string\n          repository: '.*' # Regex\n          topic:\n            include: ['backstage-include'] # optional array of strings\n            exclude: ['experiments'] # optional array of strings\n      validateLocationsExist:\n        organization: 'backstage' # string\n        catalogPath: '/catalog-info.yaml' # string\n        filters:\n          branch: 'main' # string\n          repository: '.*' # Regex\n        validateLocationsExist: true # optional boolean\n      visibilityProviderId:\n        organization: 'backstage' # string\n        catalogPath: '/catalog-info.yaml' # string\n        filters:\n          visibility:\n            - public\n            - internal\n      enterpriseProviderId:\n        host: ghe.example.net\n        organization: 'backstage' # string\n        catalogPath: '/catalog-info.yaml' # string\n"})}),"\n",(0,t.jsx)(i.p,{children:"This provider supports multiple organizations via unique provider IDs."}),"\n",(0,t.jsx)(i.admonition,{title:"Note",type:"note",children:(0,t.jsxs)(i.p,{children:["It is possible but certainly not recommended to skip the provider ID level.\nIf you do so, ",(0,t.jsx)(i.code,{children:"default"})," will be used as provider ID."]})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.code,{children:"catalogPath"})})," ",(0,t.jsx)(i.em,{children:"(optional)"}),":\nDefault: ",(0,t.jsx)(i.code,{children:"/catalog-info.yaml"}),".\nPath where to look for ",(0,t.jsx)(i.code,{children:"catalog-info.yaml"})," files.\nYou can use wildcards - ",(0,t.jsx)(i.code,{children:"*"})," or ",(0,t.jsx)(i.code,{children:"**"})," - to search the path and/or the filename.\nWildcards cannot be used if the ",(0,t.jsx)(i.code,{children:"validateLocationsExist"})," option is set to ",(0,t.jsx)(i.code,{children:"true"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.code,{children:"filters"})})," ",(0,t.jsx)(i.em,{children:"(optional)"}),":\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.code,{children:"branch"})})," ",(0,t.jsx)(i.em,{children:"(optional)"}),":\nString used to filter results based on the branch name.\nDefaults to the default Branch of the repository."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.code,{children:"repository"})})," ",(0,t.jsx)(i.em,{children:"(optional)"}),":\nRegular expression used to filter results based on the repository name."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.code,{children:"topic"})})," ",(0,t.jsx)(i.em,{children:"(optional)"}),":\nBoth of the filters below may be used at the same time but the exclusion filter has the highest priority.\nIn the example above, a repository with the ",(0,t.jsx)(i.code,{children:"backstage-include"})," topic would still be excluded\nif it were also carrying the ",(0,t.jsx)(i.code,{children:"experiments"})," topic.\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.code,{children:"include"})})," ",(0,t.jsx)(i.em,{children:"(optional)"}),":\nAn array of strings used to filter in results based on their associated GitHub topics.\nIf configured, only repositories with one (or more) topic(s) present in the inclusion filter will be ingested"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.code,{children:"exclude"})})," ",(0,t.jsx)(i.em,{children:"(optional)"}),":\nAn array of strings used to filter out results based on their associated GitHub topics.\nIf configured, all repositories ",(0,t.jsx)(i.em,{children:"except"})," those with one (or more) topics(s) present in the exclusion filter will be ingested."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.code,{children:"visibility"})})," ",(0,t.jsx)(i.em,{children:"(optional)"}),":\nAn array of strings used to filter results based on their visibility. Available options are ",(0,t.jsx)(i.code,{children:"private"}),", ",(0,t.jsx)(i.code,{children:"internal"}),", ",(0,t.jsx)(i.code,{children:"public"}),". If configured (non empty), only repositories with visibility present in the filter will be ingested"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.code,{children:"host"})})," ",(0,t.jsx)(i.em,{children:"(optional)"}),":\nThe hostname of your GitHub Enterprise instance. It must match a host defined in ",(0,t.jsx)(i.a,{href:"/docs/integrations/github/locations",children:"integrations.github"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.code,{children:"organization"})}),":\nName of your organization account/workspace.\nIf you want to add multiple organizations, you need to add one provider config each."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.code,{children:"validateLocationsExist"})})," ",(0,t.jsx)(i.em,{children:"(optional)"}),":\nWhether to validate locations that exist before emitting them.\nThis option avoids generating locations for catalog info files that do not exist in the source repository.\nDefaults to ",(0,t.jsx)(i.code,{children:"false"}),".\nDue to limitations in the GitHub API's ability to query for repository objects, this option cannot be used in\nconjunction with wildcards in the ",(0,t.jsx)(i.code,{children:"catalogPath"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.code,{children:"schedule"})}),":\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.code,{children:"frequency"})}),":\nHow often you want the task to run. The system does its best to avoid overlapping invocations."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.code,{children:"timeout"})}),":\nThe maximum amount of time that a single task invocation can take."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.code,{children:"initialDelay"})})," ",(0,t.jsx)(i.em,{children:"(optional)"}),":\nThe amount of time that should pass before the first invocation happens."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.code,{children:"scope"})})," ",(0,t.jsx)(i.em,{children:"(optional)"}),":\n",(0,t.jsx)(i.code,{children:"'global'"})," or ",(0,t.jsx)(i.code,{children:"'local'"}),". Sets the scope of concurrency control."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"github-api-rate-limits",children:"GitHub API Rate Limits"}),"\n",(0,t.jsxs)(i.p,{children:["GitHub ",(0,t.jsx)(i.a,{href:"https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting",children:"rate limits"})," API requests to 5,000 per hour (or more for Enterprise\naccounts). The snippet below refreshes the Backstage catalog data every 35 minutes, which issues an API request for each discovered location."]}),"\n",(0,t.jsxs)(i.p,{children:["If your requests are too frequent then you may get throttled by\nrate limiting. You can change the refresh frequency of the catalog in your ",(0,t.jsx)(i.code,{children:"app-config.yaml"})," file by controlling the ",(0,t.jsx)(i.code,{children:"schedule"}),"."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-yaml",children:"schedule:\n  frequency: { minutes: 35 }\n  timeout: { minutes: 3 }\n"})}),"\n",(0,t.jsxs)(i.p,{children:["More information about scheduling can be found on the ",(0,t.jsx)(i.a,{href:"https://backstage.io/docs/reference/backend-plugin-api.schedulerservicetaskscheduledefinition",children:"SchedulerServiceTaskScheduleDefinition"})," page."]}),"\n",(0,t.jsxs)(i.p,{children:["Alternatively, or additionally, you can configure ",(0,t.jsx)(i.a,{href:"/docs/integrations/github/github-apps",children:"github-apps"})," authentication\nwhich carries a much higher rate limit at GitHub."]}),"\n",(0,t.jsx)(i.p,{children:"This is true for any method of adding GitHub entities to the catalog, but\nespecially easy to hit with automatic discovery."})]})}function h(e={}){const{wrapper:i}={...(0,o.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},675251:(e,i,n)=>{var t=n(667294),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,i,n){var t,s={},l=null,d=null;for(t in void 0!==n&&(l=""+n),void 0!==i.key&&(l=""+i.key),void 0!==i.ref&&(d=i.ref),i)r.call(i,t)&&!c.hasOwnProperty(t)&&(s[t]=i[t]);if(e&&e.defaultProps)for(t in i=e.defaultProps)void 0===s[t]&&(s[t]=i[t]);return{$$typeof:o,type:e,key:l,ref:d,props:s,_owner:a.current}}i.Fragment=s,i.jsx=l,i.jsxs=l},785893:(e,i,n)=>{e.exports=n(675251)},511151:(e,i,n)=>{n.d(i,{Z:()=>a,a:()=>r});var t=n(667294);const o={},s=t.createContext(o);function r(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);