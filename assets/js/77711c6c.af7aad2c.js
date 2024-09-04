/*! For license information please see 77711c6c.af7aad2c.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[354946],{656687:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var a=n(785893),o=n(511151);const s={id:"adding-templates",title:"Adding your own Templates",description:"Documentation on Adding your own Templates"},i=void 0,r={id:"features/software-templates/adding-templates",title:"Adding your own Templates",description:"Documentation on Adding your own Templates",source:"@site/../docs/features/software-templates/adding-templates.md",sourceDirName:"features/software-templates",slug:"/features/software-templates/adding-templates",permalink:"/docs/next/features/software-templates/adding-templates",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/software-templates/adding-templates.md",tags:[],version:"current",frontMatter:{id:"adding-templates",title:"Adding your own Templates",description:"Documentation on Adding your own Templates"},sidebar:"docs",previous:{title:"Configuration",permalink:"/docs/next/features/software-templates/configuration"},next:{title:"Writing Templates",permalink:"/docs/next/features/software-templates/writing-templates"}},l={},c=[];function d(e){const t={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["Templates are stored in the ",(0,a.jsx)(t.strong,{children:"Software Catalog"})," under a kind ",(0,a.jsx)(t.code,{children:"Template"}),". The\nminimum that is needed to define a template is a ",(0,a.jsx)(t.code,{children:"template.yaml"})," file, but it\nwould be good to also have some files in there that can be templated in."]}),"\n",(0,a.jsxs)(t.p,{children:["A simple ",(0,a.jsx)(t.code,{children:"template.yaml"})," definition might look something like this:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"apiVersion: scaffolder.backstage.io/v1beta3\nkind: Template\n# some metadata about the template itself\nmetadata:\n  name: v1beta3-demo\n  title: Test Action template\n  description: scaffolder v1beta3 template demo\nspec:\n  owner: backstage/techdocs-core\n  type: service\n\n  # these are the steps which are rendered in the frontend with the form input\n  parameters:\n    - title: Fill in some steps\n      required:\n        - name\n      properties:\n        name:\n          title: Name\n          type: string\n          description: Unique name of the component\n          ui:autofocus: true\n          ui:options:\n            rows: 5\n    - title: Choose a location\n      required:\n        - repoUrl\n      properties:\n        repoUrl:\n          title: Repository Location\n          type: string\n          ui:field: RepoUrlPicker\n          ui:options:\n            allowedHosts:\n              - github.com\n\n  # here's the steps that are executed in series in the scaffolder backend\n  steps:\n    - id: fetch-base\n      name: Fetch Base\n      action: fetch:template\n      input:\n        url: ./template\n        values:\n          name: ${{ parameters.name }}\n\n    - id: fetch-docs\n      name: Fetch Docs\n      action: fetch:plain\n      input:\n        targetPath: ./community\n        url: https://github.com/backstage/community/tree/main/backstage-community-sessions\n\n    - id: publish\n      name: Publish\n      action: publish:github\n      input:\n        allowedHosts: ['github.com']\n        description: This is ${{ parameters.name }}\n        repoUrl: ${{ parameters.repoUrl }}\n\n    - id: register\n      name: Register\n      action: catalog:register\n      input:\n        repoContentsUrl: ${{ steps['publish'].output.repoContentsUrl }}\n        catalogInfoPath: '/catalog-info.yaml'\n"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/docs/next/features/software-catalog/descriptor-format#kind-template",children:"Template Entity"}),"\ncontains more information about the required fields."]}),"\n",(0,a.jsxs)(t.p,{children:["Once we have a ",(0,a.jsx)(t.code,{children:"template.yaml"})," ready, we can then add it to the software catalog\nfor use by the scaffolder."]}),"\n",(0,a.jsx)(t.admonition,{title:"Note",type:"note",children:(0,a.jsxs)(t.p,{children:["When you add or modify a template, you will need to refresh the location entity.\nOtherwise, Backstage won't display the template in the available templates,\nor it will keep showing the old template. You can refresh the location instance by\ngoing into ",(0,a.jsx)(t.code,{children:"Catalog"})," web page, choosing ",(0,a.jsx)(t.code,{children:"Locations"})," instead of ",(0,a.jsx)(t.code,{children:"Components"}),', and selecting the correct\nlocation entity.\nFrom there, you can click on the refresh icon representing "Scheduled entity refresh" action.\nAfterwards, you should see your template updated.']})}),"\n",(0,a.jsxs)(t.p,{children:["You can add the template files to the catalog through\n",(0,a.jsx)(t.a,{href:"/docs/next/features/software-catalog/configuration#static-location-configuration",children:"static location configuration"}),",\nfor example:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"catalog:\n  locations:\n    - type: url\n      target: https://github.com/backstage/software-templates/blob/main/scaffolder-templates/react-ssr-template/template.yaml\n      rules:\n        - allow: [Template]\n    - type: file\n      target: template.yaml # Backstage will expect the file to be in packages/backend/template.yaml\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Or you can add the template using the ",(0,a.jsx)(t.code,{children:"catalog-import"})," plugin, which unless\nconfigured differently should be running on ",(0,a.jsx)(t.code,{children:"/catalog-import"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["For information about writing your own templates, you can check out the docs\n",(0,a.jsx)(t.a,{href:"/docs/next/features/software-templates/writing-templates",children:"here"})]}),"\n",(0,a.jsxs)(t.p,{children:["If you are looking for a method to discover templates without the need for manual ingestion, there are several options available. One approach is to utilize Discovery providers, such as ",(0,a.jsx)(t.a,{href:"https://backstage.io/docs/integrations/github/discovery",children:"GitHub Discovery"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Alternatively, you can choose to set up an external integration. This involves connecting your system to external sources or platforms that may host templates relevant to your needs, as mentioned in ",(0,a.jsx)(t.a,{href:"https://backstage.io/docs/features/software-catalog/external-integrations/",children:"External Integration"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},675251:(e,t,n)=>{var a=n(667294),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,r=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var a,s={},c=null,d=null;for(a in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,a)&&!l.hasOwnProperty(a)&&(s[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===s[a]&&(s[a]=t[a]);return{$$typeof:o,type:e,key:c,ref:d,props:s,_owner:r.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},785893:(e,t,n)=>{e.exports=n(675251)},511151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>i});var a=n(667294);const o={},s=a.createContext(o);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);