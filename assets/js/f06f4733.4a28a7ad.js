/*! For license information please see f06f4733.4a28a7ad.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[790333],{134771:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>l,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var n=s(785893),o=s(511151);const c={id:"concepts",title:"Concepts",description:"Documentation on concepts that are introduced with Spotify's docs-like-code solution in Backstage"},r=void 0,i={id:"features/techdocs/concepts",title:"Concepts",description:"Documentation on concepts that are introduced with Spotify's docs-like-code solution in Backstage",source:"@site/versioned_docs/version-stable/features/techdocs/concepts.md",sourceDirName:"features/techdocs",slug:"/features/techdocs/concepts",permalink:"/docs/features/techdocs/concepts",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/features/techdocs/concepts.md",tags:[],version:"stable",frontMatter:{id:"concepts",title:"Concepts",description:"Documentation on concepts that are introduced with Spotify's docs-like-code solution in Backstage"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/features/techdocs/getting-started"},next:{title:"TechDocs Addons",permalink:"/docs/features/techdocs/addons"}},a={},d=[{value:"Generating TechDocs Steps",id:"generating-techdocs-steps",level:2},{value:"TechDocs Preparer",id:"techdocs-preparer",level:3},{value:"TechDocs Generator",id:"techdocs-generator",level:3},{value:"TechDocs Publisher",id:"techdocs-publisher",level:3},{value:"TechDocs Build Strategy",id:"techdocs-build-strategy",level:2},{value:"TechDocs Container",id:"techdocs-container",level:2},{value:"TechDocs Core Plugin",id:"techdocs-core-plugin",level:2},{value:"TechDocs CLI",id:"techdocs-cli",level:2},{value:"TechDocs Reader",id:"techdocs-reader",level:2},{value:"Transformers",id:"transformers",level:2},{value:"TechDocs Addons",id:"techdocs-addons",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"This page describes concepts that are introduced with Spotify's docs-like-code\nsolution in Backstage."}),"\n",(0,n.jsx)(t.h2,{id:"generating-techdocs-steps",children:"Generating TechDocs Steps"}),"\n",(0,n.jsx)(t.h3,{id:"techdocs-preparer",children:"TechDocs Preparer"}),"\n",(0,n.jsx)(t.p,{children:"Preparing is the first step of generating documentation for an entity. It\nfetches the source markdown files from the source code hosting provider (GitHub,\nGitLab, etc.) and passes the files to the generator for next steps."}),"\n",(0,n.jsx)(t.p,{children:"There are two kinds of preparers available -"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Common Git Preparer - Uses ",(0,n.jsx)(t.code,{children:"git clone"})," on any repository URL."]}),"\n",(0,n.jsx)(t.li,{children:"URL Reader - Uses source code hosting provider's API to download files.\n(Faster and recommended)"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"techdocs-generator",children:"TechDocs Generator"}),"\n",(0,n.jsxs)(t.p,{children:["Generating is the second step after preparing the markdown source files. This\nstep either runs the TechDocs container (defined below) or runs ",(0,n.jsx)(t.code,{children:"mkdocs"})," CLI to\ngenerate static HTML files and its assets."]}),"\n",(0,n.jsx)(t.h3,{id:"techdocs-publisher",children:"TechDocs Publisher"}),"\n",(0,n.jsx)(t.p,{children:"Publishing is the third and final step after preparing and generating docs.\nTechDocs Publisher uploads the generated files to a storage."}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"techdocs-backend"})," plugin currently comes with two publishers - Google Cloud\nStorage and Local Filesystem. You can configure them in your Backstage app.\n",(0,n.jsx)(t.a,{href:"/docs/features/techdocs/configuration",children:"See here"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["A TechDocs publisher is responsible for two things (two-way communication\nbetween ",(0,n.jsx)(t.code,{children:"techdocs-backend"})," and the storage)"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Publish generated static files to a storage (Configured by\n",(0,n.jsx)(t.code,{children:"techdocs.builder"}),")"]}),"\n",(0,n.jsx)(t.li,{children:"Read files from the storage when users visit a TechDocs site"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/techdocs-backend",children:"TechDocs Backend"})}),"\n",(0,n.jsx)(t.h2,{id:"techdocs-build-strategy",children:"TechDocs Build Strategy"}),"\n",(0,n.jsx)(t.p,{children:"To accommodate more complex logic surrounding whether or not to build TechDocs, the TechDocs backend\nsupports selecting a Build Strategy.\nThe Build Strategy is responsible for deciding whether the documentation requested should be built locally\nby the TechDocs backend or not.\nCustomization of the Build Strategy allows for more complex behaviour regarding whether the TechDocs backend\nis responsible for building TechDocs, whether an external process is responsible, or whether a combination\nof local builds and an external process is responsible, on an entity-by-entity basis."}),"\n",(0,n.jsxs)(t.p,{children:["The default Build Strategy results in the TechDocs backend building documentation locally if the\n",(0,n.jsx)(t.code,{children:"techdocs.builder"})," configuration option is set to ",(0,n.jsx)(t.code,{children:"'local'"}),", and skipping any building otherwise.\nHowever any logic that satisfies the Build Strategy interface can be implemented, using the Backstage\nconfig as well as the entity being processed to make a decision."]}),"\n",(0,n.jsxs)(t.p,{children:["For an example of how the Build Strategy can be used to implement a 'hybrid' build model, refer to\nthe ",(0,n.jsx)(t.a,{href:"/docs/features/techdocs/how-to-guides#how-to-implement-a-hybrid-build-strategy",children:"How to implement a hybrid build strategy"})," guide."]}),"\n",(0,n.jsx)(t.h2,{id:"techdocs-container",children:"TechDocs Container"}),"\n",(0,n.jsxs)(t.p,{children:["The TechDocs container is a Docker container available at\n",(0,n.jsx)(t.a,{href:"https://hub.docker.com/r/spotify/techdocs",children:"DockerHub"}),". It builds static HTML\npages, including stylesheets and scripts from Python flavored Markdown, through\nMkDocs."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/backstage/techdocs-container",children:"TechDocs Container"})}),"\n",(0,n.jsx)(t.h2,{id:"techdocs-core-plugin",children:"TechDocs Core Plugin"}),"\n",(0,n.jsxs)(t.p,{children:["The TechDocs Core Plugin is an ",(0,n.jsx)(t.a,{href:"https://www.mkdocs.org/",children:"MkDocs"})," plugin created\nas a wrapper around multiple MkDocs plugins and Python Markdown extensions to\nstandardize the configuration of MkDocs used for TechDocs."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/backstage/mkdocs-techdocs-core",children:"TechDocs Core"})}),"\n",(0,n.jsx)(t.h2,{id:"techdocs-cli",children:"TechDocs CLI"}),"\n",(0,n.jsx)(t.p,{children:"The TechDocs CLI was created to make it easy to write, generate and preview\ndocumentation for publishing. Currently it mostly acts as a wrapper around the\nTechDocs container and provides an easy-to-use interface for our docker\ncontainer."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/backstage/techdocs-cli",children:"TechDocs CLI"})}),"\n",(0,n.jsx)(t.h2,{id:"techdocs-reader",children:"TechDocs Reader"}),"\n",(0,n.jsx)(t.p,{children:"Documentation generated by TechDocs is generated as static HTML sites. The\nTechDocs Reader was therefore created to be able to integrate pre-generated HTML\nsites with the Backstage UI."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/techdocs/src/reader/README.md",children:"TechDocs Reader"})}),"\n",(0,n.jsx)(t.h2,{id:"transformers",children:"Transformers"}),"\n",(0,n.jsx)(t.p,{children:"Transformers are different pieces of functionality used inside the TechDocs\nReader. The reason why transformers were introduced was to provide a way to\ntransform the HTML content on pre and post render (e.g. rewrite docs links or\nmodify css)."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/techdocs/src/reader/README.md",children:"Transformers API docs"})}),"\n",(0,n.jsx)(t.h2,{id:"techdocs-addons",children:"TechDocs Addons"}),"\n",(0,n.jsx)(t.p,{children:"Addons (introduced in Backstage v1.2) are client-side, React-based extensions\nthat can be used to augment the TechDocs experience at read-time. They offer a\nmechanism for configuring the TechDocs Reader to better suit your\norganization's needs."}),"\n",(0,n.jsx)(t.p,{children:"Addons can dynamically load and display information anywhere in the TechDocs\nReader, including within the statically generated content itself."}),"\n",(0,n.jsxs)(t.p,{children:["Addons should not be confused with ",(0,n.jsx)(t.code,{children:"mkdocs"})," plugins, which may be used to\ncustomize a TechDocs site's content at build-time. While it's possible to take\nadvantage of some ",(0,n.jsx)(t.code,{children:"mkdocs"})," plugins, not all such plugins play well with\nTechDocs (primarily, but not exclusively, for security reasons). Addons offer\nan alternative."]})]})}function l(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},675251:(e,t,s)=>{var n=s(667294),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,s){var n,c={},d=null,h=null;for(n in void 0!==s&&(d=""+s),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(h=t.ref),t)r.call(t,n)&&!a.hasOwnProperty(n)&&(c[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===c[n]&&(c[n]=t[n]);return{$$typeof:o,type:e,key:d,ref:h,props:c,_owner:i.current}}t.Fragment=c,t.jsx=d,t.jsxs=d},785893:(e,t,s)=>{e.exports=s(675251)},511151:(e,t,s)=>{s.d(t,{Z:()=>i,a:()=>r});var n=s(667294);const o={},c=n.createContext(o);function r(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);