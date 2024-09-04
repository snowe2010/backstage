/*! For license information please see cd59354b.e1eec7ac.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[381132],{359125:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var o=t(785893),n=t(511151);const c={id:"plugin-catalog-backend-module-github.githubmultiorgreaderprocessor.readlocation",title:"GithubMultiOrgReaderProcessor.readLocation()",description:"API reference for GithubMultiOrgReaderProcessor.readLocation()"},a=void 0,i={id:"reference/plugin-catalog-backend-module-github.githubmultiorgreaderprocessor.readlocation",title:"GithubMultiOrgReaderProcessor.readLocation()",description:"API reference for GithubMultiOrgReaderProcessor.readLocation()",source:"@site/versioned_docs/version-stable/reference/plugin-catalog-backend-module-github.githubmultiorgreaderprocessor.readlocation.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend-module-github.githubmultiorgreaderprocessor.readlocation",permalink:"/docs/reference/plugin-catalog-backend-module-github.githubmultiorgreaderprocessor.readlocation",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-catalog-backend-module-github.githubmultiorgreaderprocessor.readlocation.md",tags:[],version:"stable",frontMatter:{id:"plugin-catalog-backend-module-github.githubmultiorgreaderprocessor.readlocation",title:"GithubMultiOrgReaderProcessor.readLocation()",description:"API reference for GithubMultiOrgReaderProcessor.readLocation()"}},s={},d=[{value:"Parameters",id:"parameters",level:2}];function l(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,o.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-github",children:(0,o.jsx)(r.code,{children:"@backstage/plugin-catalog-backend-module-github"})})," > ",(0,o.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-github.githubmultiorgreaderprocessor",children:(0,o.jsx)(r.code,{children:"GithubMultiOrgReaderProcessor"})})," > ",(0,o.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-github.githubmultiorgreaderprocessor.readlocation",children:(0,o.jsx)(r.code,{children:"readLocation"})})]}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-typescript",children:"readLocation(location: LocationSpec, _optional: boolean, emit: CatalogProcessorEmit): Promise<boolean>;\n"})}),"\n",(0,o.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Parameter"}),(0,o.jsx)(r.th,{children:"Type"}),(0,o.jsx)(r.th,{children:"Description"})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"location"}),(0,o.jsx)(r.td,{children:(0,o.jsx)(r.a,{href:"/docs/reference/plugin-catalog-node.locationspec",children:"LocationSpec"})}),(0,o.jsx)(r.td,{})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"_optional"}),(0,o.jsx)(r.td,{children:"boolean"}),(0,o.jsx)(r.td,{})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"emit"}),(0,o.jsx)(r.td,{children:(0,o.jsx)(r.a,{href:"/docs/reference/plugin-catalog-node.catalogprocessoremit",children:"CatalogProcessorEmit"})}),(0,o.jsx)(r.td,{})]})]})]}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,o.jsx)(r.p,{children:"Promise<boolean>"})]})}function u(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},675251:(e,r,t)=>{var o=t(667294),n=Symbol.for("react.element"),c=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,t){var o,c={},d=null,l=null;for(o in void 0!==t&&(d=""+t),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(l=r.ref),r)a.call(r,o)&&!s.hasOwnProperty(o)&&(c[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===c[o]&&(c[o]=r[o]);return{$$typeof:n,type:e,key:d,ref:l,props:c,_owner:i.current}}r.Fragment=c,r.jsx=d,r.jsxs=d},785893:(e,r,t)=>{e.exports=t(675251)},511151:(e,r,t)=>{t.d(r,{Z:()=>i,a:()=>a});var o=t(667294);const n={},c=o.createContext(n);function a(e){const r=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),o.createElement(c.Provider,{value:r},e.children)}}}]);