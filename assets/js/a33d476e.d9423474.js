/*! For license information please see a33d476e.d9423474.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[189006],{656745:(e,r,d)=>{d.r(r),d.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var n=d(785893),t=d(511151);const s={id:"dev-utils.devappbuilder",title:"DevAppBuilder",description:"API reference for DevAppBuilder"},i=void 0,l={id:"reference/dev-utils.devappbuilder",title:"DevAppBuilder",description:"API reference for DevAppBuilder",source:"@site/versioned_docs/version-stable/reference/dev-utils.devappbuilder.md",sourceDirName:"reference",slug:"/reference/dev-utils.devappbuilder",permalink:"/docs/reference/dev-utils.devappbuilder",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/dev-utils.devappbuilder.md",tags:[],version:"stable",frontMatter:{id:"dev-utils.devappbuilder",title:"DevAppBuilder",description:"API reference for DevAppBuilder"}},c={},o=[{value:"Methods",id:"methods",level:2}];function a(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/dev-utils",children:(0,n.jsx)(r.code,{children:"@backstage/dev-utils"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/dev-utils.devappbuilder",children:(0,n.jsx)(r.code,{children:"DevAppBuilder"})})]}),"\n",(0,n.jsx)(r.p,{children:"DevApp builder that is similar to the App builder API, but creates an App with the purpose of developing one or more plugins inside it."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"class DevAppBuilder \n"})}),"\n",(0,n.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Method"}),(0,n.jsx)(r.th,{children:"Modifiers"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/dev-utils.devappbuilder.addpage",children:"addPage(opts)"})}),(0,n.jsx)(r.td,{}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.p,{children:"Adds a page component along with accompanying sidebar item."}),(0,n.jsx)(r.p,{children:"If no path is provided one will be generated. If no title is provided, no sidebar item will be created."})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/dev-utils.devappbuilder.addrootchild",children:"addRootChild(node)"})}),(0,n.jsx)(r.td,{}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.p,{children:"Adds a React node to place just inside the App Provider."}),(0,n.jsx)(r.p,{children:"Useful for adding more global components like the AlertDisplay."})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/dev-utils.devappbuilder.addsidebaritem",children:"addSidebarItem(sidebarItem)"})}),(0,n.jsx)(r.td,{}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.p,{children:"Adds a new sidebar item to the dev app."}),(0,n.jsx)(r.p,{children:"Useful for adding only sidebar items without a corresponding page."})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/dev-utils.devappbuilder.addsigninprovider",children:"addSignInProvider(provider)"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"Adds new sign in provider for the dev app"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/dev-utils.devappbuilder.addthemes",children:"addThemes(themes)"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"Adds an array of themes to override the default theme."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/dev-utils.devappbuilder.build",children:"build()"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"Build a DevApp component using the resources registered so far"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/dev-utils.devappbuilder.registerapi",children:"registerApi(factory)"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"Register an API factory to add to the app"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/dev-utils.devappbuilder.registerplugin",children:"registerPlugin(plugins)"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"Register one or more plugins to render in the dev app"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/dev-utils.devappbuilder.render",children:"render()"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"Build and render directory to #root element, with react hot loading."})]})]})]})]})}function p(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},675251:(e,r,d)=>{var n=d(667294),t=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,r,d){var n,s={},o=null,a=null;for(n in void 0!==d&&(o=""+d),void 0!==r.key&&(o=""+r.key),void 0!==r.ref&&(a=r.ref),r)i.call(r,n)&&!c.hasOwnProperty(n)&&(s[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===s[n]&&(s[n]=r[n]);return{$$typeof:t,type:e,key:o,ref:a,props:s,_owner:l.current}}r.Fragment=s,r.jsx=o,r.jsxs=o},785893:(e,r,d)=>{e.exports=d(675251)},511151:(e,r,d)=>{d.d(r,{Z:()=>l,a:()=>i});var n=d(667294);const t={},s=n.createContext(t);function i(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);