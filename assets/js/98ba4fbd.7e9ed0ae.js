/*! For license information please see 98ba4fbd.7e9ed0ae.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[296368],{28355:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=a(785893),i=a(511151);const s={id:"v1.13.0",title:"v1.13.0",description:"Backstage Release v1.13.0"},r=void 0,o={id:"releases/v1.13.0",title:"v1.13.0",description:"Backstage Release v1.13.0",source:"@site/../docs/releases/v1.13.0.md",sourceDirName:"releases",slug:"/releases/v1.13.0",permalink:"/docs/next/releases/v1.13.0",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/releases/v1.13.0.md",tags:[],version:"current",frontMatter:{id:"v1.13.0",title:"v1.13.0",description:"Backstage Release v1.13.0"},sidebar:"releases",previous:{title:"v1.14.0",permalink:"/docs/next/releases/v1.14.0"},next:{title:"v1.12.0",permalink:"/docs/next/releases/v1.12.0"}},c={},l=[{value:"Highlights",id:"highlights",level:2},{value:"BREAKING: Removed the <code>Tabs</code> core component",id:"breaking-removed-the-tabs-core-component",level:3},{value:"BREAKING: <code>GitlabDiscoveryEntityProvider</code> branch handling",id:"breaking-gitlabdiscoveryentityprovider-branch-handling",level:3},{value:"BREAKING: Kubernetes backend",id:"breaking-kubernetes-backend",level:3},{value:"TypeScript 5",id:"typescript-5",level:3},{value:"Automated orphaned entity cleanup in the catalog",id:"automated-orphaned-entity-cleanup-in-the-catalog",level:3},{value:"Scaffolder Filters",id:"scaffolder-filters",level:3},{value:"Scaffolder Permissions",id:"scaffolder-permissions",level:3},{value:"Experimental CLI <code>onboard</code> command",id:"experimental-cli-onboard-command",level:3},{value:"OpenAPI utilities",id:"openapi-utilities",level:3},{value:"Experimental inline auth flows",id:"experimental-inline-auth-flows",level:3},{value:"New plugin: PuppetDB",id:"new-plugin-puppetdb",level:3},{value:"New catalog entity provider: <code>GithubMultiOrgEntityProvider</code>",id:"new-catalog-entity-provider-githubmultiorgentityprovider",level:3},{value:"New Scaffolder actions",id:"new-scaffolder-actions",level:3},{value:"Search now supports the new backend system!",id:"search-now-supports-the-new-backend-system",level:3},{value:"Security Fixes",id:"security-fixes",level:2},{value:"Upgrade path",id:"upgrade-path",level:2},{value:"Links and References",id:"links-and-references",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["These are the release notes for the v1.13.0 release of ",(0,n.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"A huge thanks to the whole team of maintainers and contributors as well as the amazing Backstage Community for their hard work in getting this release developed and done."}),"\n",(0,n.jsx)(t.h2,{id:"highlights",children:"Highlights"}),"\n",(0,n.jsx)(t.p,{children:"This release has an important security fix, along with a lot of squashed bugs and exciting additions! Enjoy."}),"\n",(0,n.jsxs)(t.h3,{id:"breaking-removed-the-tabs-core-component",children:["BREAKING: Removed the ",(0,n.jsx)(t.code,{children:"Tabs"})," core component"]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"Tabs"})," component was removed from ",(0,n.jsx)(t.code,{children:"@backstage/core-components"}),". It was a thin shim that provided very little value and was considered confusing, when the ",(0,n.jsx)(t.a,{href:"https://v4.mui.com/components/tabs/",children:"native Material UI tabs"})," were already fully usable out of the box. Check out the pull request below for more details."]}),"\n",(0,n.jsxs)(t.p,{children:["Contributed by ",(0,n.jsx)(t.a,{href:"https://github.com/tudi2d",children:"@tudi2d"})," in ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/16587",children:"#16587"})]}),"\n",(0,n.jsxs)(t.h3,{id:"breaking-gitlabdiscoveryentityprovider-branch-handling",children:["BREAKING: ",(0,n.jsx)(t.code,{children:"GitlabDiscoveryEntityProvider"})," branch handling"]}),"\n",(0,n.jsxs)(t.p,{children:["The way that the ",(0,n.jsx)(t.code,{children:"GitlabDiscoveryEntityProvider"})," handles branches has changed, to remove the confusion of whether you want to ",(0,n.jsx)(t.em,{children:"force"})," the use of a certain branch name or whether you just want to provide a ",(0,n.jsx)(t.em,{children:"fallback"})," branch name. If you were passing in the ",(0,n.jsx)(t.code,{children:"branch"})," parameter intending it to be just a fallback, you may want to rename it to ",(0,n.jsx)(t.code,{children:"fallbackBranch"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Contributed by ",(0,n.jsx)(t.a,{href:"https://github.com/Andy2003",children:"@Andy2003"})," in ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/16502",children:"#16502"})]}),"\n",(0,n.jsx)(t.h3,{id:"breaking-kubernetes-backend",children:"BREAKING: Kubernetes backend"}),"\n",(0,n.jsxs)(t.p,{children:["The Kubernetes backend is receiving some really nice overhauls to prepare it for the future and streamlining its interfaces. There are a few breaking changes in there, but not everyone is affected by them. Rather than listing each breaking change individually, check out ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/kubernetes-backend/CHANGELOG.md",children:"the package changelog"})," for more information if you see new type errors after upgrading."]}),"\n",(0,n.jsx)(t.h3,{id:"typescript-5",children:"TypeScript 5"}),"\n",(0,n.jsx)(t.p,{children:"The Backstage project is now built with the new v5 version of TypeScript! This meant making some small adjustments to types here and there, but we do not expect any end user impact besides having even better and clearer TypeScript support."}),"\n",(0,n.jsx)(t.p,{children:"You are now able to upgrade your own project to depend on version 5 of TypeScript, should you desire to - it\u2019s an optional upgrade on your end and our libraries should still work fine with version 4 of TypeScript as well."}),"\n",(0,n.jsxs)(t.p,{children:["Added in ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/17094",children:"#17094"})]}),"\n",(0,n.jsx)(t.h3,{id:"automated-orphaned-entity-cleanup-in-the-catalog",children:"Automated orphaned entity cleanup in the catalog"}),"\n",(0,n.jsxs)(t.p,{children:["There is a new ",(0,n.jsx)(t.code,{children:"catalog.orphanStrategy"})," app-config option for the catalog, allowing adopters to enable automatic cleanup of ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/features/software-catalog/life-of-an-entity#orphaning",children:'so-called "orphaned"'})," entities. This helps with common use cases where catalog-info files are moved around or renamed, or where entities within a single catalog-info file are partially removed."]}),"\n",(0,n.jsxs)(t.p,{children:["The default behavior is unchanged, i.e. if you do not explicitly set this new option to ",(0,n.jsx)(t.code,{children:"'delete'"}),", orphaned entities will still stay around and await manual deletion."]}),"\n",(0,n.jsxs)(t.p,{children:["Added in ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/17363",children:"#17363"})]}),"\n",(0,n.jsx)(t.h3,{id:"scaffolder-filters",children:"Scaffolder Filters"}),"\n",(0,n.jsx)(t.p,{children:"You can now use some new filters in your placeholder expressions in Scaffolder templates. This gives the ability to combine things like:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"${{ parameters.entity | parseEntityRef | pick('name') }}\n"})}),"\n",(0,n.jsx)(t.p,{children:"to get the name of a specific entity, or"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"${{ parameters.repoUrl | parseRepoUrl | pick('owner') }}`\n"})}),"\n",(0,n.jsx)(t.p,{children:"to get the owner of a repo."}),"\n",(0,n.jsxs)(t.p,{children:["Added in ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/17091",children:"#17091"})]}),"\n",(0,n.jsx)(t.h3,{id:"scaffolder-permissions",children:"Scaffolder Permissions"}),"\n",(0,n.jsx)(t.p,{children:"Support for template permissions has finally landed in the Scaffolder!"}),"\n",(0,n.jsxs)(t.p,{children:["This allows you to define a ",(0,n.jsx)(t.code,{children:"backstage:permissions"})," property to parameters and steps which is then used to authorize part of the template using the permissions framework. Docs for this feature ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/17379",children:"is a work in progress"})," still, it\u2019s that fresh out of the oven!"]}),"\n",(0,n.jsxs)(t.p,{children:["Contributed by ",(0,n.jsx)(t.a,{href:"https://github.com/vinzscam",children:"@vinzscam"})," and ",(0,n.jsx)(t.a,{href:"https://github.com/HHogg",children:"@HHogg"})," in ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/15798",children:"#15798"})]}),"\n",(0,n.jsxs)(t.h3,{id:"experimental-cli-onboard-command",children:["Experimental CLI ",(0,n.jsx)(t.code,{children:"onboard"})," command"]}),"\n",(0,n.jsxs)(t.p,{children:["We are experimenting with a new ",(0,n.jsx)(t.code,{children:"onboard"})," command for the Backstage CLI. It\u2019s still early days, but the intent is to help adopters with some common tasks in the early onboarding / evaluation phase."]}),"\n",(0,n.jsxs)(t.p,{children:["Contributed by ",(0,n.jsx)(t.a,{href:"https://github.com/marcuseide",children:"@marcuseide"})," in ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/16526",children:"#16526"})]}),"\n",(0,n.jsx)(t.h3,{id:"openapi-utilities",children:"OpenAPI utilities"}),"\n",(0,n.jsx)(t.p,{children:"Backstage now has experimental support for declaring OpenAPI schemas for your services, and automatically building type safe routers out of them. The Catalog plugin is the first user of these facilities."}),"\n",(0,n.jsxs)(t.p,{children:["This comes in the form of a ",(0,n.jsx)(t.code,{children:"@backstage/backend-openapi-utils"})," Node package assists with the type trickery, and the new ",(0,n.jsx)(t.code,{children:"schema:openapi:verify"})," and ",(0,n.jsx)(t.code,{children:"schema:openapi:generate"})," commands in the ",(0,n.jsx)(t.code,{children:"@backstage/repo-tools"})," CLI package."]}),"\n",(0,n.jsxs)(t.p,{children:["Contributed by ",(0,n.jsx)(t.a,{href:"https://github.com/sennyeya",children:"@sennyeya"})," in ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/15667",children:"#15667"})]}),"\n",(0,n.jsx)(t.h3,{id:"experimental-inline-auth-flows",children:"Experimental inline auth flows"}),"\n",(0,n.jsxs)(t.p,{children:["There\u2019s new support for running auth flows inline in the current page instead of in a separate popup window, enabled via the ",(0,n.jsx)(t.code,{children:"enableExperimentalRedirectFlow"})," app-config parameter. This will allow the use of some providers that do not support popup flows. It\u2019s still an experimental feature, but do try it out if this applies to you!"]}),"\n",(0,n.jsxs)(t.p,{children:["Contributed by ",(0,n.jsx)(t.a,{href:"https://github.com/headphonejames",children:"@headphonejames"})," in ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/15841",children:"#15841"})]}),"\n",(0,n.jsx)(t.h3,{id:"new-plugin-puppetdb",children:"New plugin: PuppetDB"}),"\n",(0,n.jsx)(t.p,{children:"Visualize your data from PuppetDB!"}),"\n",(0,n.jsxs)(t.p,{children:["Contributed by ",(0,n.jsx)(t.a,{href:"https://github.com/tdabasinskas",children:"@tdabasinskas"})," in ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/17260",children:"#17260"})]}),"\n",(0,n.jsxs)(t.h3,{id:"new-catalog-entity-provider-githubmultiorgentityprovider",children:["New catalog entity provider: ",(0,n.jsx)(t.code,{children:"GithubMultiOrgEntityProvider"})]}),"\n",(0,n.jsx)(t.p,{children:"This provider lets you ingest org data (users and groups) into your catalog more easily from multiple orgs in one fell swoop. Give it a try!"}),"\n",(0,n.jsxs)(t.p,{children:["Contributed by ",(0,n.jsx)(t.a,{href:"https://github.com/kuangp",children:"@kuangp"})," in ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/17285",children:"#17285"})]}),"\n",(0,n.jsx)(t.h3,{id:"new-scaffolder-actions",children:"New Scaffolder actions"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"confluence:transform:markdown"}),": This action converts Confluence doc pages to Markdown and can be found in the ",(0,n.jsx)(t.code,{children:"@backstage/plugin-scaffolder-backend-module-confluence-to-markdown"})," package. Contributed by ",(0,n.jsx)(t.a,{href:"https://github.com/tradcliffe-expediagroup",children:"@tradcliffe-expediagroup"})," in ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/16820",children:"#16820"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"fetch:plain:file"})," is the natural sibling to ",(0,n.jsx)(t.code,{children:"fetch:plain"}),", but fetching individual files instead of directories. Contributed by ",(0,n.jsx)(t.a,{href:"https://github.com/gavlyukovskiy",children:"@gavlyukovskiy"})," in ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/16935",children:"#16935"})]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"search-now-supports-the-new-backend-system",children:"Search now supports the new backend system!"}),"\n",(0,n.jsxs)(t.p,{children:["Search is now available to use in the new backend system! The plugin itself has a new ",(0,n.jsx)(t.code,{children:"searchPlugin"})," alpha export, and most of the collators etc are available as modules for it. The following packages have been created or updated as part of this:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"@backstage/plugin-search-backend"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"@backstage/plugin-search-backend-module-explore"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"@backstage/plugin-search-backend-module-elasticsearch"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"@backstage/plugin-search-backend-module-pg"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"@backstage/plugin-search-backend-module-explore"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"@backstage/plugin-search-backend-module-techdocs"})}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["For documentation on how to migrate, check out the convenient ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/features/search/how-to-guides/#how-to-migrate-your-backend-installation-to-use-search-together-with-the-new-backend-system",children:"how-to guide"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Contributed by ",(0,n.jsx)(t.a,{href:"https://github.com/emmaindal",children:"@emmaindal"})," and ",(0,n.jsx)(t.a,{href:"https://github.com/camilaibs",children:"@camilaibs"})," in ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/16710",children:"#16710"})]}),"\n",(0,n.jsx)(t.h2,{id:"security-fixes",children:"Security Fixes"}),"\n",(0,n.jsxs)(t.p,{children:["A ",(0,n.jsxs)(t.a,{href:"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2023-29017",children:["security flaw in the ",(0,n.jsx)(t.code,{children:"vm2"})," package"]})," used by the Scaffolder plugin was patched by our automated security processes in ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/17296",children:"#17296"}),". The fixed version of ",(0,n.jsx)(t.code,{children:"vm2"})," was already covered by the required version range of the Scaffolder plugin, so adopters are able to address this vulnerability separately without upgrading Backstage itself, as part of their regular security processes."]}),"\n",(0,n.jsx)(t.h2,{id:"upgrade-path",children:"Upgrade path"}),"\n",(0,n.jsxs)(t.p,{children:["We recommend that you keep your Backstage project up to date with this latest release. For more guidance on how to upgrade, check out the documentation for ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/keeping-backstage-updated",children:"keeping Backstage updated"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"links-and-references",children:"Links and References"}),"\n",(0,n.jsx)(t.p,{children:"Below you can find a list of links and references to help you learn about and start using this new release."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage official website"}),", ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/",children:"documentation"}),", and ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/",children:"getting started guide"})]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage",children:"GitHub repository"})}),"\n",(0,n.jsxs)(t.li,{children:["Backstage's ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/overview/versioning-policy",children:"versioning and support policy"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://discord.gg/backstage-687207715902193673",children:"Community Discord"})," for discussions and support"]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/docs/releases/v1.13.0-changelog.md",children:"Changelog"})}),"\n",(0,n.jsxs)(t.li,{children:["Backstage ",(0,n.jsx)(t.a,{href:"https://backstage.io/demos",children:"Demos"}),", ",(0,n.jsx)(t.a,{href:"https://backstage.io/blog",children:"Blog"}),", ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/overview/roadmap",children:"Roadmap"})," and ",(0,n.jsx)(t.a,{href:"https://backstage.io/plugins",children:"Plugins"})]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Sign up for our ",(0,n.jsx)(t.a,{href:"https://mailchi.mp/spotify/backstage-community",children:"newsletter"})," if you want to be informed about what is happening in the world of Backstage."]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},675251:(e,t,a)=>{var n=a(667294),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,a){var n,s={},l=null,d=null;for(n in void 0!==a&&(l=""+a),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)r.call(t,n)&&!c.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:i,type:e,key:l,ref:d,props:s,_owner:o.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},785893:(e,t,a)=>{e.exports=a(675251)},511151:(e,t,a)=>{a.d(t,{Z:()=>o,a:()=>r});var n=a(667294);const i={},s=n.createContext(i);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);