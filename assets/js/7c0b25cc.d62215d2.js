/*! For license information please see 7c0b25cc.d62215d2.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[196136],{442824:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>o});var t=r(785893),c=r(511151);const s={id:"plugin-search-backend-node.searchengine",title:"SearchEngine",description:"API reference for SearchEngine"},a=void 0,i={id:"reference/plugin-search-backend-node.searchengine",title:"SearchEngine",description:"API reference for SearchEngine",source:"@site/../docs/reference/plugin-search-backend-node.searchengine.md",sourceDirName:"reference",slug:"/reference/plugin-search-backend-node.searchengine",permalink:"/docs/next/reference/plugin-search-backend-node.searchengine",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-search-backend-node.searchengine.md",tags:[],version:"current",frontMatter:{id:"plugin-search-backend-node.searchengine",title:"SearchEngine",description:"API reference for SearchEngine"}},d={},o=[{value:"Methods",id:"methods",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/next/reference/plugin-search-backend-node",children:(0,t.jsx)(n.code,{children:"@backstage/plugin-search-backend-node"})})," > ",(0,t.jsx)(n.a,{href:"/docs/next/reference/plugin-search-backend-node.searchengine",children:(0,t.jsx)(n.code,{children:"SearchEngine"})})]}),"\n",(0,t.jsx)(n.p,{children:"Interface that must be implemented by specific search engines, responsible for performing indexing and querying and translating abstract queries into concrete, search engine-specific queries."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"export interface SearchEngine \n"})}),"\n",(0,t.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Method"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/next/reference/plugin-search-backend-node.searchengine.getindexer",children:"getIndexer(type)"})}),(0,t.jsx)(n.td,{children:"Factory method for getting a search engine indexer for a given document type."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/next/reference/plugin-search-backend-node.searchengine.query",children:"query(query, options)"})}),(0,t.jsx)(n.td,{children:"Perform a search query against the SearchEngine."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/next/reference/plugin-search-backend-node.searchengine.settranslator",children:"setTranslator(translator)"})}),(0,t.jsx)(n.td,{children:"Override the default translator provided by the SearchEngine."})]})]})]})]})}function l(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},675251:(e,n,r)=>{var t=r(667294),c=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,r){var t,s={},o=null,h=null;for(t in void 0!==r&&(o=""+r),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(h=n.ref),n)a.call(n,t)&&!d.hasOwnProperty(t)&&(s[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===s[t]&&(s[t]=n[t]);return{$$typeof:c,type:e,key:o,ref:h,props:s,_owner:i.current}}n.Fragment=s,n.jsx=o,n.jsxs=o},785893:(e,n,r)=>{e.exports=r(675251)},511151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>a});var t=r(667294);const c={},s=t.createContext(c);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);