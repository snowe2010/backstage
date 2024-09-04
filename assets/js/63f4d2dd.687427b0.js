/*! For license information please see 63f4d2dd.687427b0.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[406975],{732629:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>l,frontMatter:()=>c,metadata:()=>o,toc:()=>h});var d=n(785893),s=n(511151);const c={id:"plugin-techdocs-addons-test-utils.techdocsaddontester",title:"TechDocsAddonTester",description:"API reference for TechDocsAddonTester"},r=void 0,o={id:"reference/plugin-techdocs-addons-test-utils.techdocsaddontester",title:"TechDocsAddonTester",description:"API reference for TechDocsAddonTester",source:"@site/../docs/reference/plugin-techdocs-addons-test-utils.techdocsaddontester.md",sourceDirName:"reference",slug:"/reference/plugin-techdocs-addons-test-utils.techdocsaddontester",permalink:"/docs/next/reference/plugin-techdocs-addons-test-utils.techdocsaddontester",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-techdocs-addons-test-utils.techdocsaddontester.md",tags:[],version:"current",frontMatter:{id:"plugin-techdocs-addons-test-utils.techdocsaddontester",title:"TechDocsAddonTester",description:"API reference for TechDocsAddonTester"}},i={},h=[{value:"Example",id:"example",level:2},{value:"Constructors",id:"constructors",level:2},{value:"Methods",id:"methods",level:2}];function a(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,d.jsx)(t.a,{href:"/docs/next/reference/plugin-techdocs-addons-test-utils",children:(0,d.jsx)(t.code,{children:"@backstage/plugin-techdocs-addons-test-utils"})})," > ",(0,d.jsx)(t.a,{href:"/docs/next/reference/plugin-techdocs-addons-test-utils.techdocsaddontester",children:(0,d.jsx)(t.code,{children:"TechDocsAddonTester"})})]}),"\n",(0,d.jsx)(t.p,{children:"Utility class for rendering TechDocs Addons end-to-end within the TechDocs reader page, with a set of givens (e.g. page DOM, metadata, etc)."}),"\n",(0,d.jsx)(t.p,{children:(0,d.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-typescript",children:"class TechDocsAddonTester \n"})}),"\n",(0,d.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-tsx",children:"const { getByText } = await TechDocsAddonTester.buildAddonsInTechDocs([<AnAddon />])\n  .withDom(<body>TEST_CONTENT</body>)\n  .renderWithEffects();\n\nexpect(getByText('TEST_CONTENT')).toBeInTheDocument();\n"})}),"\n",(0,d.jsx)(t.h2,{id:"constructors",children:"Constructors"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Constructor"}),(0,d.jsx)(t.th,{children:"Modifiers"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsx)(t.tbody,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"/docs/next/reference/plugin-techdocs-addons-test-utils.techdocsaddontester._constructor_",children:"(constructor)(addons)"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"protected"})}),(0,d.jsxs)(t.td,{children:["Constructs a new instance of the ",(0,d.jsx)(t.code,{children:"TechDocsAddonTester"})," class"]})]})})]}),"\n",(0,d.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Method"}),(0,d.jsx)(t.th,{children:"Modifiers"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"/docs/next/reference/plugin-techdocs-addons-test-utils.techdocsaddontester.atpath",children:"atPath(path)"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"Provide the TechDocs page path at which the Addon is rendered (e.g. the part of the path after the entity namespace/kind/name)."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"/docs/next/reference/plugin-techdocs-addons-test-utils.techdocsaddontester.build",children:"build()"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"Return a fully configured and mocked TechDocs reader page within a test App instance, using the given Addon(s)."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"/docs/next/reference/plugin-techdocs-addons-test-utils.techdocsaddontester.buildaddonsintechdocs",children:"buildAddonsInTechDocs(addons)"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"static"})}),(0,d.jsx)(t.td,{children:"Get a TechDocsAddonTester instance for a given set of Addons."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"/docs/next/reference/plugin-techdocs-addons-test-utils.techdocsaddontester.renderwitheffects",children:"renderWithEffects()"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"Render the Addon within a fully configured and mocked TechDocs reader."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"/docs/next/reference/plugin-techdocs-addons-test-utils.techdocsaddontester.withapis",children:"withApis(apis)"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"Provide mock API implementations if your Addon expects any."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"/docs/next/reference/plugin-techdocs-addons-test-utils.techdocsaddontester.withdom",children:"withDom(dom)"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"Provide mock HTML if your Addon expects it in the shadow DOM."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"/docs/next/reference/plugin-techdocs-addons-test-utils.techdocsaddontester.withentity",children:"withEntity(entity)"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"Provide a mock entity if your Addon needs it. This also controls the base path at which the Addon is rendered."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"/docs/next/reference/plugin-techdocs-addons-test-utils.techdocsaddontester.withmetadata",children:"withMetadata(metadata)"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"Provide mock techdocs_metadata.json values if your Addon needs it."})]})]})]})]})}function l(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},675251:(e,t,n)=>{var d=n(667294),s=Symbol.for("react.element"),c=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function h(e,t,n){var d,c={},h=null,a=null;for(d in void 0!==n&&(h=""+n),void 0!==t.key&&(h=""+t.key),void 0!==t.ref&&(a=t.ref),t)r.call(t,d)&&!i.hasOwnProperty(d)&&(c[d]=t[d]);if(e&&e.defaultProps)for(d in t=e.defaultProps)void 0===c[d]&&(c[d]=t[d]);return{$$typeof:s,type:e,key:h,ref:a,props:c,_owner:o.current}}t.Fragment=c,t.jsx=h,t.jsxs=h},785893:(e,t,n)=>{e.exports=n(675251)},511151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var d=n(667294);const s={},c=d.createContext(s);function r(e){const t=d.useContext(c);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),d.createElement(c.Provider,{value:t},e.children)}}}]);