/*! For license information please see 513bf226.733ec8ee.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[82226],{502851:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var a=s(785893),n=s(511151);const r={id:"v1.9.0",title:"v1.9.0",description:"Backstage Release v1.9.0"},i=void 0,o={id:"releases/v1.9.0",title:"v1.9.0",description:"Backstage Release v1.9.0",source:"@site/versioned_docs/version-stable/releases/v1.9.0.md",sourceDirName:"releases",slug:"/releases/v1.9.0",permalink:"/docs/releases/v1.9.0",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/releases/v1.9.0.md",tags:[],version:"stable",frontMatter:{id:"v1.9.0",title:"v1.9.0",description:"Backstage Release v1.9.0"},sidebar:"releases",previous:{title:"v1.10.0",permalink:"/docs/releases/v1.10.0"},next:{title:"v1.8.0",permalink:"/docs/releases/v1.8.0"}},c={},l=[{value:"Highlights",id:"highlights",level:2},{value:"Catalog Batch Fetching",id:"catalog-batch-fetching",level:3},{value:"New plugin: AWS Credentials Provider",id:"new-plugin-aws-credentials-provider",level:3},{value:"Events",id:"events",level:3},{value:"New Plugin: Incremental Ingestion",id:"new-plugin-incremental-ingestion",level:3},{value:"Scaffolder Custom Field Explorer",id:"scaffolder-custom-field-explorer",level:3},{value:"Scaffolder concurrent task execution",id:"scaffolder-concurrent-task-execution",level:3},{value:"Deprecating Catalog Prometheus metrics for OpenTelemetry",id:"deprecating-catalog-prometheus-metrics-for-opentelemetry",level:3},{value:"Updated API for <code>createApp</code>",id:"updated-api-for-createapp",level:3},{value:"Advancements on the New Backend System",id:"advancements-on-the-new-backend-system",level:3},{value:"New package: <code>@backstage/repo-tools</code>",id:"new-package-backstagerepo-tools",level:3},{value:"Security Fixes",id:"security-fixes",level:2},{value:"Upgrade path",id:"upgrade-path",level:2},{value:"Links and References",id:"links-and-references",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["These are the release notes for the v1.9.0 release of ",(0,a.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"A huge thanks to the whole team of maintainers and contributors as well as the amazing Backstage Community for the hard work in getting this release developed and done."}),"\n",(0,a.jsx)(t.h2,{id:"highlights",children:"Highlights"}),"\n",(0,a.jsx)(t.h3,{id:"catalog-batch-fetching",children:"Catalog Batch Fetching"}),"\n",(0,a.jsxs)(t.p,{children:["The catalog client has a new ",(0,a.jsx)(t.code,{children:"getEntitiesByRefs"})," method, and the catalog backend has a corresponding new ",(0,a.jsxs)(t.a,{href:"https://backstage.io/docs/features/software-catalog/software-catalog-api",children:[(0,a.jsx)(t.code,{children:"/entities/by-refs"})," endpoint"]}),". These allow for the efficient batch fetching of entities by their refs, which may be useful e.g. in GraphQL resolvers or similar contexts where you need to fetch large numbers of entities at the same time."]}),"\n",(0,a.jsx)(t.h3,{id:"new-plugin-aws-credentials-provider",children:"New plugin: AWS Credentials Provider"}),"\n",(0,a.jsxs)(t.p,{children:["The management of AWS credentials in the backend saw some significant improvement, through the introduction of the ",(0,a.jsx)(t.code,{children:"@backstage/integration-aws-node"})," package and its corresponding ",(0,a.jsx)(t.code,{children:"AwsCredentialsManager"})," interface. This is leveraged e.g. in the ",(0,a.jsx)(t.a,{href:"https://backstage.io/docs/features/techdocs/using-cloud-storage",children:"TechDocs S3 publisher"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Contributed by ",(0,a.jsx)(t.a,{href:"https://github.com/clareliguori",children:"@clareliguori"})," in ",(0,a.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/14125",children:"#14125"})]}),"\n",(0,a.jsx)(t.h3,{id:"events",children:"Events"}),"\n",(0,a.jsxs)(t.p,{children:["There was further work to advance the ",(0,a.jsxs)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/events-backend",children:[(0,a.jsx)(t.code,{children:"events"})," backend"]})," functionality, which propagates and processes events such as webhooks. It has modules for ",(0,a.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/events-backend-module-aws-sqs",children:"AWS SQS"}),", ",(0,a.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/events-backend-module-azure",children:"Azure"}),", ",(0,a.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/events-backend-module-bitbucket-cloud",children:"Bitbucket Cloud"}),", ",(0,a.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/events-backend-module-gerrit",children:"Gerrit"}),", ",(0,a.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/events-backend-module-github",children:"GitHub"}),", and ",(0,a.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/events-backend-module-gitlab",children:"Gitlab"}),", along with other improvements."]}),"\n",(0,a.jsxs)(t.p,{children:["Contributed by ",(0,a.jsx)(t.a,{href:"https://github.com/pjungermann",children:"@pjungermann"})," and others in the community."]}),"\n",(0,a.jsx)(t.h3,{id:"new-plugin-incremental-ingestion",children:"New Plugin: Incremental Ingestion"}),"\n",(0,a.jsx)(t.p,{children:"Introduces incremental entity providers, which are used for streaming very large data sources into the catalog."}),"\n",(0,a.jsxs)(t.p,{children:["Contributed by ",(0,a.jsx)(t.a,{href:"https://github.com/dekoding",children:"@dekoding"})," ",(0,a.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/14356",children:"#14356"})]}),"\n",(0,a.jsx)(t.h3,{id:"scaffolder-custom-field-explorer",children:"Scaffolder Custom Field Explorer"}),"\n",(0,a.jsx)(t.p,{children:"The new custom field explorer lets you view and play around with available installed custom field extensions."}),"\n",(0,a.jsxs)(t.p,{children:["Contributed by ",(0,a.jsx)(t.a,{href:"https://github.com/kuangp",children:"@kuangp"})," in ",(0,a.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/14008",children:"#14008"})]}),"\n",(0,a.jsx)(t.h3,{id:"scaffolder-concurrent-task-execution",children:"Scaffolder concurrent task execution"}),"\n",(0,a.jsxs)(t.p,{children:["Individual Scaffolder task workers can now run multiple (defaults to 10) tasks concurrently using the ",(0,a.jsx)(t.code,{children:"concurrentTasksLimit"})," option, leading to more efficient resource usage."]}),"\n",(0,a.jsxs)(t.p,{children:["Contributed by ",(0,a.jsx)(t.a,{href:"https://github.com/howlowck",children:"@howlowck"})," in ",(0,a.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/13817",children:"#13817"})]}),"\n",(0,a.jsx)(t.h3,{id:"deprecating-catalog-prometheus-metrics-for-opentelemetry",children:"Deprecating Catalog Prometheus metrics for OpenTelemetry"}),"\n",(0,a.jsxs)(t.p,{children:["We have started working on phasing out the Prometheus Metrics exposed using the ",(0,a.jsx)(t.code,{children:"prom-client"})," in favor of replacement metrics using ",(0,a.jsx)(t.a,{href:"https://opentelemetry.io/",children:"OpenTelemetery"}),". The ",(0,a.jsx)(t.code,{children:"prom-client"})," metrics have always been a band-aid and never fully established but we want to notify existing users of their future removal. Backstage does not provide any default exporter or instructions on how to export the new metrics yet but you should expect documentation shortly. We hope to fully incorporate OpenTelemetry into other plugins once we gain confidence and establish patterns. Added in ",(0,a.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/15145",children:"#15145"}),"."]}),"\n",(0,a.jsxs)(t.h3,{id:"updated-api-for-createapp",children:["Updated API for ",(0,a.jsx)(t.code,{children:"createApp"})]}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"getProvider"})," and ",(0,a.jsx)(t.code,{children:"getRouter"})," methods of the main app instance from ",(0,a.jsx)(t.code,{children:"@backstage/core-app-api"})," have been deprecated. Instead, there is now an ",(0,a.jsx)(t.code,{children:"AppRouter"})," component that is a drop-in replacement for the router, and a new ",(0,a.jsx)(t.code,{children:"createRoot"})," method for creating the root app component. This change will simplify the internal logic of the app, and also makes it more clear that the app is created from a React element tree."]}),"\n",(0,a.jsx)(t.h3,{id:"advancements-on-the-new-backend-system",children:"Advancements on the New Backend System"}),"\n",(0,a.jsx)(t.p,{children:"Work has progressed with the new system and we have been able to add a couple of new features, most notable are shutdown lifecycle events and stop functionality to the Backend."}),"\n",(0,a.jsxs)(t.p,{children:["All core service references are now exported via a single ",(0,a.jsx)(t.code,{children:"coreServices"})," object. For example, the ",(0,a.jsx)(t.code,{children:"loggerServiceRef"})," is now accessed via ",(0,a.jsx)(t.code,{children:"coreServices.logger"})," instead, ",(0,a.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/14986",children:"#14986"}),".\nAll service interfaces are now suffixed with ",(0,a.jsx)(t.code,{children:"*Service"}),". Root scoped services are now always initialized, whether they are depended directly on by others or not; this allows features such as the metrics exporter to work correctly."]}),"\n",(0,a.jsxs)(t.h3,{id:"new-package-backstagerepo-tools",children:["New package: ",(0,a.jsx)(t.code,{children:"@backstage/repo-tools"})]}),"\n",(0,a.jsx)(t.p,{children:"This new package is part of an ongoing effort to make more of the repository tooling in the main Backstage repository available to the rest of the community. The main piece that has been added so far is the tooling needed to use API reports."}),"\n",(0,a.jsx)(t.h2,{id:"security-fixes",children:"Security Fixes"}),"\n",(0,a.jsx)(t.p,{children:"This release does not contain any security fixes."}),"\n",(0,a.jsx)(t.h2,{id:"upgrade-path",children:"Upgrade path"}),"\n",(0,a.jsxs)(t.p,{children:["We recommend that you keep your Backstage project up to date with this latest release. For more guidance on how to upgrade, check out the documentation for ",(0,a.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/keeping-backstage-updated",children:"keeping Backstage updated"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"links-and-references",children:"Links and References"}),"\n",(0,a.jsx)(t.p,{children:"Below you can find a list of links and references to help you learn about and start using this new release."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage official website"}),", ",(0,a.jsx)(t.a,{href:"https://backstage.io/docs/",children:"documentation"}),", and ",(0,a.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/",children:"getting started guide"})]}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/backstage/backstage",children:"GitHub repository"})}),"\n",(0,a.jsxs)(t.li,{children:["Backstage's ",(0,a.jsx)(t.a,{href:"https://backstage.io/docs/overview/versioning-policy",children:"versioning and support policy"})]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://discord.gg/backstage-687207715902193673",children:"Community Discord"})," for discussions and support"]}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/docs/releases/v1.9.0-changelog.md",children:"Changelog"})}),"\n",(0,a.jsxs)(t.li,{children:["Backstage ",(0,a.jsx)(t.a,{href:"https://backstage.io/demos",children:"Demos"}),", ",(0,a.jsx)(t.a,{href:"https://backstage.io/blog",children:"Blog"}),", ",(0,a.jsx)(t.a,{href:"https://backstage.io/docs/overview/roadmap",children:"Roadmap"})," and ",(0,a.jsx)(t.a,{href:"https://backstage.io/plugins",children:"Plugins"})]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["Sign up for our ",(0,a.jsx)(t.a,{href:"https://mailchi.mp/spotify/backstage-community",children:"newsletter"})," if you want to be informed about what is happening in the world of Backstage."]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},675251:(e,t,s)=>{var a=s(667294),n=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,s){var a,r={},l=null,d=null;for(a in void 0!==s&&(l=""+s),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,a)&&!c.hasOwnProperty(a)&&(r[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===r[a]&&(r[a]=t[a]);return{$$typeof:n,type:e,key:l,ref:d,props:r,_owner:o.current}}t.Fragment=r,t.jsx=l,t.jsxs=l},785893:(e,t,s)=>{e.exports=s(675251)},511151:(e,t,s)=>{s.d(t,{Z:()=>o,a:()=>i});var a=s(667294);const n={},r=a.createContext(n);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);