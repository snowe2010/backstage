/*! For license information please see df235d32.5e7f0fd4.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[923811],{249922:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>h});var s=a(785893),n=a(511151);const i={id:"v1.11.0",title:"v1.11.0",description:"Backstage Release v1.11.0"},r=void 0,o={id:"releases/v1.11.0",title:"v1.11.0",description:"Backstage Release v1.11.0",source:"@site/versioned_docs/version-stable/releases/v1.11.0.md",sourceDirName:"releases",slug:"/releases/v1.11.0",permalink:"/docs/releases/v1.11.0",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/releases/v1.11.0.md",tags:[],version:"stable",frontMatter:{id:"v1.11.0",title:"v1.11.0",description:"Backstage Release v1.11.0"},sidebar:"releases",previous:{title:"v1.12.0",permalink:"/docs/releases/v1.12.0"},next:{title:"v1.10.0",permalink:"/docs/releases/v1.10.0"}},c={},h=[{value:"Highlights",id:"highlights",level:2},{value:"Scaffolder Alpha",id:"scaffolder-alpha",level:3},{value:"Backend System Alpha",id:"backend-system-alpha",level:3},{value:"New package: <code>@backstage/eslint-plugin</code>",id:"new-package-backstageeslint-plugin",level:3},{value:"New plugin: Entity Feedback",id:"new-plugin-entity-feedback",level:3},{value:"New plugin: Entity Validator",id:"new-plugin-entity-validator",level:3},{value:"New Plugin: Microsoft Calendar",id:"new-plugin-microsoft-calendar",level:3},{value:"New plugin: GraphQL Voyager",id:"new-plugin-graphql-voyager",level:3},{value:"New plugin: Linguist",id:"new-plugin-linguist",level:3},{value:"Lighthouse Backend",id:"lighthouse-backend",level:3},{value:"Security Fixes",id:"security-fixes",level:2},{value:"Upgrade path",id:"upgrade-path",level:2},{value:"Links and References",id:"links-and-references",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["These are the release notes for the v1.11.0 release of ",(0,s.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"A huge thanks to the whole team of maintainers and contributors as well as the amazing Backstage Community for the hard work in getting this release developed and done."}),"\n",(0,s.jsx)(t.h2,{id:"highlights",children:"Highlights"}),"\n",(0,s.jsx)(t.h3,{id:"scaffolder-alpha",children:"Scaffolder Alpha"}),"\n",(0,s.jsxs)(t.p,{children:["With this release, we\u2019ve been working on getting things ready for testing for the upcoming Scaffolder v2.0.0 release, and there\u2019s now the ability to test the upcoming version in the form of an alpha! It would be great if you have the time to test out the new release to see if all your templates work as expected. There\u2019s some documentation on how to test out the new version and what\u2019s new under ",(0,s.jsx)(t.a,{href:"https://backstage.io/docs/features/software-templates/testing-scaffolder-alpha",children:"testing scaffolder alpha"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["We\u2019d love to hear if you have any issues when testing the new version, please reach out on Discord or ",(0,s.jsx)(t.a,{href:"http://github.com/backstage/backstage/issues/new",children:"create a new issue"})," if there\u2019s anything you find!"]}),"\n",(0,s.jsx)(t.h3,{id:"backend-system-alpha",children:"Backend System Alpha"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.a,{href:"https://backstage.io/docs/backend-system/",children:"new Backend System"})," is now in alpha. We encourage plugin owners to try out the new system by adding support for it in their plugin backends, but we do not yet recommend migrating over to using this new system for production backend deployments."]}),"\n",(0,s.jsx)(t.p,{children:"This new system aims to greatly simplify the setup and wiring of Backstage backends. It formalizes and simplifies how common services and plugins are installed and interact with each other, and restructures both plugins and backends to make them much easier to maintain."}),"\n",(0,s.jsxs)(t.p,{children:["The documentation starts ",(0,s.jsx)(t.a,{href:"https://backstage.io/docs/backend-system/",children:"here"}),". Migration guides exist to help you get your ",(0,s.jsx)(t.a,{href:"https://backstage.io/docs/backend-system/building-backends/migrating",children:"backend"})," and ",(0,s.jsx)(t.a,{href:"https://backstage.io/docs/backend-system/building-plugins-and-modules/migrating",children:"plugins"})," migrated, but you don\u2019t have to do it all in one go - the path forward can be incremental."]}),"\n",(0,s.jsx)(t.p,{children:"If you were already using the new backend system before this release, you may also be interested in the following."}),"\n",(0,s.jsx)(t.p,{children:"There have been a number of tweaks to types and exports, following a thorough API review before its alpha release. Notably,"}),"\n",(0,s.jsxs)(t.p,{children:["Service factories are now exported with the pattern ",(0,s.jsx)(t.code,{children:"<id>ServiceFactory"})," instead of ",(0,s.jsx)(t.code,{children:"<id>Factory"}),", e.g. ",(0,s.jsx)(t.code,{children:"configServiceFactory"}),"\nThe ",(0,s.jsx)(t.code,{children:"createBackendPlugin"})," parameter that used to be named ",(0,s.jsx)(t.code,{children:"id"})," is now ",(0,s.jsx)(t.code,{children:"pluginId"}),"\nThe interface of the ",(0,s.jsx)(t.code,{children:"CacheService"})," has changed slightly, so you may want to use the new ",(0,s.jsx)(t.code,{children:"cacheToPluginCacheManager"})," to get compatibility with your not-yet-converted backend plugins\nThe ",(0,s.jsx)(t.code,{children:"scaffolderCatalogModule"})," that was exported from the Scaffolder backend is renamed to ",(0,s.jsx)(t.code,{children:"catalogModuleTemplateKind"}),", to fit the proper naming patterns"]}),"\n",(0,s.jsxs)(t.p,{children:["There are a few smaller tweaks as well, that you can read about in the ",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/packages/backend-app-api/CHANGELOG.md",children:(0,s.jsx)(t.code,{children:"@backstage/backend-app-api"})})," and ",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/packages/backend-plugin-api/CHANGELOG.md",children:(0,s.jsx)(t.code,{children:"@backstage/backend-plugin-api"})})," changelogs."]}),"\n",(0,s.jsxs)(t.h3,{id:"new-package-backstageeslint-plugin",children:["New package: ",(0,s.jsx)(t.code,{children:"@backstage/eslint-plugin"})]}),"\n",(0,s.jsxs)(t.p,{children:["We created a separate ESlint plugin package that houses some rules that are helpful for Backstage monorepos. Not only does it make a convenient bundle of them all, it also comes with a pretty healthy speed boost. ",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/16174",children:"The pull request"})," contains some more details."]}),"\n",(0,s.jsx)(t.h3,{id:"new-plugin-entity-feedback",children:"New plugin: Entity Feedback"}),"\n",(0,s.jsxs)(t.p,{children:["A plugin that allows users to rate the quality of entities in your Backstage catalog. Allowing your users to rate entities brings them into the feedback loop that can help notify owners if something is wrong with their entity (i.e. taking inspiration from the feedback model of TechDocs). Check out ",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/v1.11.0/plugins/entity-feedback",children:"the README"}),"!"]}),"\n",(0,s.jsxs)(t.p,{children:["Contributed by ",(0,s.jsx)(t.a,{href:"https://github.com/kuangp",children:"@kuangp"})," in ",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/15881",children:"#15881"})]}),"\n",(0,s.jsx)(t.h3,{id:"new-plugin-entity-validator",children:"New plugin: Entity Validator"}),"\n",(0,s.jsxs)(t.p,{children:["This plugin helps users create and edit their YAML definitions of entities, with live validation. It leverages the actual catalog backend for checks, so that you can submit catalog info file changes that fit your particular organization with greater confidence. Installation instructions and details are in ",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/v1.11.0/plugins/entity-validation",children:"the README"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Contributed by ",(0,s.jsx)(t.a,{href:"https://github.com/ivangonzalezacuna",children:"@ivangonzalezacuna"})," in ",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/16050",children:"#16050"})]}),"\n",(0,s.jsx)(t.h3,{id:"new-plugin-microsoft-calendar",children:"New Plugin: Microsoft Calendar"}),"\n",(0,s.jsxs)(t.p,{children:["This plugin lets you show your MS calendars directly in Backstage. More information and installation instructions in ",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/v1.11.0/plugins/microsoft-calendar",children:"the README"}),"!"]}),"\n",(0,s.jsxs)(t.p,{children:["Contributed by ",(0,s.jsx)(t.a,{href:"https://github.com/Abhay-soni-developer",children:"@Abhay-soni-developer"})," in ",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/16101",children:"#16101"})]}),"\n",(0,s.jsx)(t.h3,{id:"new-plugin-graphql-voyager",children:"New plugin: GraphQL Voyager"}),"\n",(0,s.jsxs)(t.p,{children:["This nifty plugin presents a graph structure of your entire GraphQL API. Check out ",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/v1.11.0/plugins/graphql-voyager",children:"its README"})," for a screenshot and instructions on installing it."]}),"\n",(0,s.jsxs)(t.p,{children:["Contributed by ",(0,s.jsx)(t.a,{href:"https://github.com/MitchWijt",children:"@MitchWijt"})," in ",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/16015",children:"#16015"})]}),"\n",(0,s.jsx)(t.h3,{id:"new-plugin-linguist",children:"New plugin: Linguist"}),"\n",(0,s.jsxs)(t.p,{children:["This plugin lets you see a nice visual representation of the breakdown of languages that a component\u2019s repository is using, similar to the repository information that e.g. GitHub presents. More about that ",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/v1.11.0/plugins/linguist",children:"in the README"}),"!"]}),"\n",(0,s.jsxs)(t.p,{children:["Contributed by ",(0,s.jsx)(t.a,{href:"https://github.com/ahhhndre",children:"@ahhhndre"})," in ",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/14718",children:"#14718"})]}),"\n",(0,s.jsx)(t.h3,{id:"lighthouse-backend",children:"Lighthouse Backend"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/v1.11.0/plugins/lighthouse",children:"Lighthouse plugin"})," now has a ",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/v1.11.0/plugins/lighthouse-backend",children:"corresponding backend"}),". This allows you to conveniently schedule audits from within Backstage."]}),"\n",(0,s.jsxs)(t.p,{children:["Note that as part of this, a ",(0,s.jsx)(t.code,{children:"@backstage/plugin-lighthouse-common"})," package was also created, and types that were common to the frontend and backend were moved there. This means that if you were explicitly importing types from the frontend package, you may see compilation errors and need to add a dependency on the new common package and point your imports there instead."]}),"\n",(0,s.jsxs)(t.p,{children:["Contributed by ",(0,s.jsx)(t.a,{href:"https://github.com/dpfaffenbauer",children:"@dpfaffenbauer"})," in ",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/15846",children:"#15846"})]}),"\n",(0,s.jsx)(t.h2,{id:"security-fixes",children:"Security Fixes"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"@backstage/core-components"}),", ",(0,s.jsx)(t.code,{children:"@backstage/catalog-model"}),", and ",(0,s.jsx)(t.code,{children:"@backstage/plugin-catalog-backend"}),", have all had precautionary validation added, please upgrade to the latest versions of these packages. Special thanks to Philip Olausson (",(0,s.jsx)(t.a,{href:"https://www.programmatic.se/",children:"Programmatic"}),") who found these issues as part of ",(0,s.jsx)(t.a,{href:"https://roadie.io/",children:"Roadie's"})," regular third-party pen testing."]}),"\n",(0,s.jsx)(t.h2,{id:"upgrade-path",children:"Upgrade path"}),"\n",(0,s.jsxs)(t.p,{children:["We recommend that you keep your Backstage project up to date with this latest release. For more guidance on how to upgrade, check out the documentation for ",(0,s.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/keeping-backstage-updated",children:"keeping Backstage updated"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"links-and-references",children:"Links and References"}),"\n",(0,s.jsx)(t.p,{children:"Below you can find a list of links and references to help you learn about and start using this new release."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage official website"}),", ",(0,s.jsx)(t.a,{href:"https://backstage.io/docs/",children:"documentation"}),", and ",(0,s.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/",children:"getting started guide"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage",children:"GitHub repository"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Backstage's ",(0,s.jsx)(t.a,{href:"https://backstage.io/docs/overview/versioning-policy",children:"versioning and support policy"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://discord.gg/backstage-687207715902193673",children:"Community Discord"})," for discussions and support"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/docs/releases/v1.11.0-changelog.md",children:"Changelog"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Backstage ",(0,s.jsx)(t.a,{href:"https://backstage.io/demos",children:"Demos"}),", ",(0,s.jsx)(t.a,{href:"https://backstage.io/blog",children:"Blog"}),", ",(0,s.jsx)(t.a,{href:"https://backstage.io/docs/overview/roadmap",children:"Roadmap"})," and ",(0,s.jsx)(t.a,{href:"https://backstage.io/plugins",children:"Plugins"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Sign up for our ",(0,s.jsx)(t.a,{href:"https://mailchi.mp/spotify/backstage-community",children:"newsletter"})," if you want to be informed about what is happening in the world of Backstage."]})]})}function d(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},675251:(e,t,a)=>{var s=a(667294),n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function h(e,t,a){var s,i={},h=null,l=null;for(s in void 0!==a&&(h=""+a),void 0!==t.key&&(h=""+t.key),void 0!==t.ref&&(l=t.ref),t)r.call(t,s)&&!c.hasOwnProperty(s)&&(i[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===i[s]&&(i[s]=t[s]);return{$$typeof:n,type:e,key:h,ref:l,props:i,_owner:o.current}}t.Fragment=i,t.jsx=h,t.jsxs=h},785893:(e,t,a)=>{e.exports=a(675251)},511151:(e,t,a)=>{a.d(t,{Z:()=>o,a:()=>r});var s=a(667294);const n={},i=s.createContext(n);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);