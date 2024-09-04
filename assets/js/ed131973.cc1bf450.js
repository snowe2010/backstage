/*! For license information please see ed131973.cc1bf450.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[618957],{383513:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=n(785893),o=n(511151);const r={id:"add-to-directory",title:"Add to Directory",description:"Documentation on Adding Plugin to Plugin Directory"},a=void 0,s={id:"plugins/add-to-directory",title:"Add to Directory",description:"Documentation on Adding Plugin to Plugin Directory",source:"@site/../docs/plugins/add-to-directory.md",sourceDirName:"plugins",slug:"/plugins/add-to-directory",permalink:"/docs/next/plugins/add-to-directory",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/plugins/add-to-directory.md",tags:[],version:"current",frontMatter:{id:"add-to-directory",title:"Add to Directory",description:"Documentation on Adding Plugin to Plugin Directory"},sidebar:"docs",previous:{title:"Publish private",permalink:"/docs/next/plugins/publish-private"},next:{title:"Observability",permalink:"/docs/next/plugins/observability"}},d={},c=[{value:"Adding a Plugin to the Directory",id:"adding-a-plugin-to-the-directory",level:2},{value:"Submission Tips",id:"submission-tips",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"adding-a-plugin-to-the-directory",children:"Adding a Plugin to the Directory"}),"\n",(0,i.jsxs)(t.p,{children:["To add a new plugin to the ",(0,i.jsx)(t.a,{href:"https://backstage.io/plugins",children:"plugin directory"}),"\ncreate a file in\n",(0,i.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/microsite/data/plugins",children:(0,i.jsx)(t.code,{children:"microsite/data/plugins"})}),"\nwith your plugin's information. Example:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"---\ntitle: Your Plugin\nauthor: Your Name\nauthorUrl: # A link to information about the author E.g. Company url, github user profile, etc\ncategory: Monitoring # A single category e.g. CI, Machine Learning, Services, Monitoring\ndescription: A brief description of the plugin. # Max 170 characters\ndocumentation: # A link to your documentation E.g. Your github README\niconUrl: # Used as the src attribute for your logo.\n# You can provide an external url or add your logo under static/img and provide a path\n# relative to static/ e.g. /img/my-logo.png\nnpmPackageName: # Your npm package name E.g. '@backstage/plugin-<etc>' quotes are required\naddedDate: # The date plugin added to directory E.g. '2022-10-01' quotes are required\n"})}),"\n",(0,i.jsx)(t.h2,{id:"submission-tips",children:"Submission Tips"}),"\n",(0,i.jsx)(t.p,{children:"Here are a few tips to help speed up the review process when you submit your plugin:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"For any icon that you use make sure you have the proper rights to use it."}),"\n",(0,i.jsx)(t.li,{children:"Make sure that your package had been published on the NPM registry and that it's public."}),"\n",(0,i.jsx)(t.li,{children:"Make sure your package on NPM has a link back to your code repo, this helps provide confidence that it's the right package."}),"\n",(0,i.jsxs)(t.li,{children:["Where possible, please use an ",(0,i.jsx)(t.a,{href:"https://docs.npmjs.com/about-scopes",children:"NPM scope"})," that matches either your Organization name or user name, this provides trust in the plugin"]}),"\n",(0,i.jsx)(t.li,{children:"If your plugin has both a frontend and backend link the documentation to the frontend package but make sure it mentioned needing to install the backend package."}),"\n",(0,i.jsx)(t.li,{children:"Where possible include a screenshot of the features in you plugin documentation, it really does help when deciding to use a plugin."}),"\n"]})]})}function l(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},675251:(e,t,n)=>{var i=n(667294),o=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var i,r={},c=null,u=null;for(i in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,i)&&!d.hasOwnProperty(i)&&(r[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===r[i]&&(r[i]=t[i]);return{$$typeof:o,type:e,key:c,ref:u,props:r,_owner:s.current}}t.Fragment=r,t.jsx=c,t.jsxs=c},785893:(e,t,n)=>{e.exports=n(675251)},511151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>a});var i=n(667294);const o={},r=i.createContext(o);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);