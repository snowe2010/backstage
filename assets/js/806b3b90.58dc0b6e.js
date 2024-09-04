/*! For license information please see 806b3b90.58dc0b6e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[354324],{954836:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var i=s(785893),n=s(511151);const a={id:"v1.5.0",title:"v1.5.0",description:"Backstage Release v1.5.0"},r=void 0,o={id:"releases/v1.5.0",title:"v1.5.0",description:"Backstage Release v1.5.0",source:"@site/../docs/releases/v1.5.0.md",sourceDirName:"releases",slug:"/releases/v1.5.0",permalink:"/docs/next/releases/v1.5.0",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/releases/v1.5.0.md",tags:[],version:"current",frontMatter:{id:"v1.5.0",title:"v1.5.0",description:"Backstage Release v1.5.0"},sidebar:"releases",previous:{title:"v1.6.0",permalink:"/docs/next/releases/v1.6.0"},next:{title:"v1.4.0",permalink:"/docs/next/releases/v1.4.0"}},c={},l=[{value:"Highlights",id:"highlights",level:2},{value:"GitHub Entity Provider",id:"github-entity-provider",level:3},{value:"Experimental Plugin Reconfiguration",id:"experimental-plugin-reconfiguration",level:3},{value:"Experimental Backend System Evolution",id:"experimental-backend-system-evolution",level:3},{value:"New plugin: <code>@aws/aws-proton-plugin-for-backstage</code>",id:"new-plugin-awsaws-proton-plugin-for-backstage",level:3},{value:"New plugin: <code>@backstage/plugin-github-issues</code>",id:"new-plugin-backstageplugin-github-issues",level:3},{value:"New plugin: <code>@backstage/plugin-sonarqube-backend</code>",id:"new-plugin-backstageplugin-sonarqube-backend",level:3},{value:"New module: <code>@backstage/plugin-catalog-backend-module-bitbucket-server</code>",id:"new-module-backstageplugin-catalog-backend-module-bitbucket-server",level:3},{value:"Security Fixes",id:"security-fixes",level:2},{value:"Upgrade path",id:"upgrade-path",level:2},{value:"Links and References",id:"links-and-references",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["These are the release notes for the v1.5.0 release of ",(0,i.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"A huge thanks to the whole team of maintainers and contributors as well as the amazing Backstage Community for the hard work in getting this release developed and done."}),"\n",(0,i.jsx)(t.h2,{id:"highlights",children:"Highlights"}),"\n",(0,i.jsx)(t.h3,{id:"github-entity-provider",children:"GitHub Entity Provider"}),"\n",(0,i.jsxs)(t.p,{children:["Added a new ",(0,i.jsx)(t.code,{children:"GitHubEntityProvider"})," (",(0,i.jsx)(t.a,{href:"https://backstage.io/docs/integrations/github/discovery",children:"documentation"}),"), which allows for automatic discovery of catalog entity definition files out of your GitHub projects. This is an improvement upon the ",(0,i.jsx)(t.code,{children:"GithubDiscoveryProcessor"})," that existed before, and we recommend using entity providers rather than processors for discovery and ingestion when possible. Contributed by ",(0,i.jsx)(t.a,{href:"https://github.com/brentg-telus",children:"@brentg-telus"})," ",(0,i.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/12822",children:"#12822"})]}),"\n",(0,i.jsx)(t.h3,{id:"experimental-plugin-reconfiguration",children:"Experimental Plugin Reconfiguration"}),"\n",(0,i.jsxs)(t.p,{children:["This release adds an experimental API that allows plugin authors to define plugin wide options. These options can then be used by adopters of the plugin to reconfigure it to fit their app. Check out the ",(0,i.jsx)(t.a,{href:"https://backstage.io/docs/plugins/customization",children:"plugin customization"})," docs for more information on how to get started. Feedback is welcome on this new feature! Contributed by ",(0,i.jsx)(t.a,{href:"https://github.com/acierto",children:"@acierto"})," ",(0,i.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/11404",children:"#11404"})]}),"\n",(0,i.jsx)(t.h3,{id:"experimental-backend-system-evolution",children:"Experimental Backend System Evolution"}),"\n",(0,i.jsxs)(t.p,{children:["This release adds the new ",(0,i.jsx)(t.code,{children:"@backstage/backend-defaults"})," package, part of the ",(0,i.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues/11611",children:"evolution of the backend system"}),". This package is highly experimental and we do not recommend using it for any purpose, yet."]}),"\n",(0,i.jsxs)(t.h3,{id:"new-plugin-awsaws-proton-plugin-for-backstage",children:["New plugin: ",(0,i.jsx)(t.code,{children:"@aws/aws-proton-plugin-for-backstage"})]}),"\n",(0,i.jsxs)(t.p,{children:["Interact with AWS Proton in Backstage. Contributed by ",(0,i.jsx)(t.a,{href:"https://github.com/clareliguori",children:"@clareliguori"})," ",(0,i.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/12193",children:"#12193"})]}),"\n",(0,i.jsxs)(t.h3,{id:"new-plugin-backstageplugin-github-issues",children:["New plugin: ",(0,i.jsx)(t.code,{children:"@backstage/plugin-github-issues"})]}),"\n",(0,i.jsxs)(t.p,{children:["This new plugin can be used to display GitHub issues for your entities. Contributed by ",(0,i.jsx)(t.a,{href:"https://github.com/mrwolny",children:"@mrwolny"})," ",(0,i.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/12875",children:"#12875"})]}),"\n",(0,i.jsxs)(t.h3,{id:"new-plugin-backstageplugin-sonarqube-backend",children:["New plugin: ",(0,i.jsx)(t.code,{children:"@backstage/plugin-sonarqube-backend"})]}),"\n",(0,i.jsxs)(t.p,{children:["This new backend for ",(0,i.jsx)(t.code,{children:"@backstage/plugin-sonarqube"})," replaces the Sonarqube proxy configuration; once it is installed, you can remove the ",(0,i.jsx)(t.code,{children:"/sonarqube"})," proxy entry. For more information, see the plugin ",(0,i.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/v1.5.0/plugins/sonarqube-backend/README.md",children:"README.md"}),". Contributed by ",(0,i.jsx)(t.a,{href:"https://github.com/Neemys",children:"@Neemys"})," ",(0,i.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/11925",children:"#11925"})]}),"\n",(0,i.jsxs)(t.h3,{id:"new-module-backstageplugin-catalog-backend-module-bitbucket-server",children:["New module: ",(0,i.jsx)(t.code,{children:"@backstage/plugin-catalog-backend-module-bitbucket-server"})]}),"\n",(0,i.jsxs)(t.p,{children:["This new module for the catalog backend adds the ",(0,i.jsx)(t.code,{children:"BitbucketServerEntityProvider"}),", which allows discovery of entities out of Bitbucket Server installations. Contributed by ",(0,i.jsx)(t.a,{href:"https://github.com/ONordander",children:"@ONordander"})," ",(0,i.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/12835",children:"#12835"})]}),"\n",(0,i.jsx)(t.h2,{id:"security-fixes",children:"Security Fixes"}),"\n",(0,i.jsx)(t.p,{children:"This release does not contain any security fixes."}),"\n",(0,i.jsx)(t.h2,{id:"upgrade-path",children:"Upgrade path"}),"\n",(0,i.jsxs)(t.p,{children:["We recommend that you keep your Backstage project up to date with this latest release. For more guidance on how to upgrade, check out the documentation for ",(0,i.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/keeping-backstage-updated",children:"keeping Backstage updated"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"links-and-references",children:"Links and References"}),"\n",(0,i.jsx)(t.p,{children:"Below you can find a list of links and references to help you learn about and start using this new release."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage official website"}),", ",(0,i.jsx)(t.a,{href:"https://backstage.io/docs/",children:"documentation"}),", and ",(0,i.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/",children:"getting started guide"})]}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/backstage/backstage",children:"GitHub repository"})}),"\n",(0,i.jsxs)(t.li,{children:["Backstage's ",(0,i.jsx)(t.a,{href:"https://backstage.io/docs/overview/versioning-policy",children:"versioning and support policy"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://discord.gg/backstage-687207715902193673",children:"Community Discord"})," for discussions and support"]}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/docs/releases/v1.5.0-changelog.md",children:"Changelog"})}),"\n",(0,i.jsxs)(t.li,{children:["Backstage ",(0,i.jsx)(t.a,{href:"https://backstage.io/demos",children:"Demos"}),", ",(0,i.jsx)(t.a,{href:"https://backstage.io/blog",children:"Blog"}),", ",(0,i.jsx)(t.a,{href:"https://backstage.io/docs/overview/roadmap",children:"Roadmap"})," and ",(0,i.jsx)(t.a,{href:"https://backstage.io/plugins",children:"Plugins"})]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Sign up for our ",(0,i.jsx)(t.a,{href:"https://mailchi.mp/spotify/backstage-community",children:"newsletter"})," if you want to be informed about what is happening in the world of Backstage."]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},675251:(e,t,s)=>{var i=s(667294),n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,s){var i,a={},l=null,d=null;for(i in void 0!==s&&(l=""+s),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)r.call(t,i)&&!c.hasOwnProperty(i)&&(a[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===a[i]&&(a[i]=t[i]);return{$$typeof:n,type:e,key:l,ref:d,props:a,_owner:o.current}}t.Fragment=a,t.jsx=l,t.jsxs=l},785893:(e,t,s)=>{e.exports=s(675251)},511151:(e,t,s)=>{s.d(t,{Z:()=>o,a:()=>r});var i=s(667294);const n={},a=i.createContext(n);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);