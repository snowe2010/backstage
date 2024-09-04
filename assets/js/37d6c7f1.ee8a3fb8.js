/*! For license information please see 37d6c7f1.ee8a3fb8.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[803712],{735805:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>a});var o=t(785893),s=t(511151);const r={id:"plugin-techdocs-module-addons-contrib.textsize",title:"TextSize()",description:"API reference for TextSize()"},c=void 0,i={id:"reference/plugin-techdocs-module-addons-contrib.textsize",title:"TextSize()",description:"API reference for TextSize()",source:"@site/../docs/reference/plugin-techdocs-module-addons-contrib.textsize.md",sourceDirName:"reference",slug:"/reference/plugin-techdocs-module-addons-contrib.textsize",permalink:"/docs/next/reference/plugin-techdocs-module-addons-contrib.textsize",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-techdocs-module-addons-contrib.textsize.md",tags:[],version:"current",frontMatter:{id:"plugin-techdocs-module-addons-contrib.textsize",title:"TextSize()",description:"API reference for TextSize()"}},d={},a=[{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,o.jsx)(n.a,{href:"/docs/next/reference/plugin-techdocs-module-addons-contrib",children:(0,o.jsx)(n.code,{children:"@backstage/plugin-techdocs-module-addons-contrib"})})," > ",(0,o.jsx)(n.a,{href:"/docs/next/reference/plugin-techdocs-module-addons-contrib.textsize",children:(0,o.jsx)(n.code,{children:"TextSize"})})]}),"\n",(0,o.jsx)(n.p,{children:"This TechDocs addon allows users to customize text size on documentation pages, they can select how much they want to increase or decrease the font size via slider or buttons."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"function TextSize(): JSX.Element | null\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,o.jsx)(n.p,{children:"JSX.Element | null"}),"\n",(0,o.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,o.jsxs)(n.p,{children:["The default value for the font size is 100% of the HTML font size, if the theme does not have a ",(0,o.jsx)(n.code,{children:"htmlFontSize"})," in its typography object, the addon will assume 16px as 100%, and remember, this setting is kept in the browser local storage."]}),"\n",(0,o.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(n.p,{children:"Here's a simple example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"import {\n  DefaultTechDocsHome,\n  TechDocsIndexPage,\n  TechDocsReaderPage,\n} from '@backstage/plugin-techdocs';\nimport { TechDocsAddons } from '@backstage/plugin-techdocs-react';\nimport { TextSize } from '@backstage/plugin-techdocs-module-addons-contrib';\n\n\nconst AppRoutes = () => {\n  <FlatRoutes>\n    // other plugin routes\n    <Route path=\"/docs\" element={<TechDocsIndexPage />}>\n      <DefaultTechDocsHome />\n    </Route>\n    <Route\n      path=\"/docs/:namespace/:kind/:name/*\"\n      element={<TechDocsReaderPage />}\n    >\n      <TechDocsAddons>\n        <TextSize />\n      </TechDocsAddons>\n    </Route>\n  </FlatRoutes>;\n};\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},675251:(e,n,t)=>{var o=t(667294),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,t){var o,r={},a=null,l=null;for(o in void 0!==t&&(a=""+t),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(l=n.ref),n)c.call(n,o)&&!d.hasOwnProperty(o)&&(r[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===r[o]&&(r[o]=n[o]);return{$$typeof:s,type:e,key:a,ref:l,props:r,_owner:i.current}}n.Fragment=r,n.jsx=a,n.jsxs=a},785893:(e,n,t)=>{e.exports=t(675251)},511151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>c});var o=t(667294);const s={},r=o.createContext(s);function c(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);