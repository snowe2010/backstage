/*! For license information please see 33477c1f.54baabe6.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[242747],{552424:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>l,frontMatter:()=>t,metadata:()=>i,toc:()=>h});var c=r(785893),s=r(511151);const t={id:"plugin-search-backend-node.batchsearchengineindexer",title:"BatchSearchEngineIndexer",description:"API reference for BatchSearchEngineIndexer"},d=void 0,i={id:"reference/plugin-search-backend-node.batchsearchengineindexer",title:"BatchSearchEngineIndexer",description:"API reference for BatchSearchEngineIndexer",source:"@site/versioned_docs/version-stable/reference/plugin-search-backend-node.batchsearchengineindexer.md",sourceDirName:"reference",slug:"/reference/plugin-search-backend-node.batchsearchengineindexer",permalink:"/docs/reference/plugin-search-backend-node.batchsearchengineindexer",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-search-backend-node.batchsearchengineindexer.md",tags:[],version:"stable",frontMatter:{id:"plugin-search-backend-node.batchsearchengineindexer",title:"BatchSearchEngineIndexer",description:"API reference for BatchSearchEngineIndexer"}},a={},h=[{value:"Constructors",id:"constructors",level:2},{value:"Methods",id:"methods",level:2}];function o(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,c.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node",children:(0,c.jsx)(n.code,{children:"@backstage/plugin-search-backend-node"})})," > ",(0,c.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node.batchsearchengineindexer",children:(0,c.jsx)(n.code,{children:"BatchSearchEngineIndexer"})})]}),"\n",(0,c.jsx)(n.p,{children:"Base class encapsulating batch-based stream processing. Useful as a base class for search engine indexers."}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-typescript",children:"abstract class BatchSearchEngineIndexer extends Writable \n"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Extends:"})," Writable"]}),"\n",(0,c.jsx)(n.h2,{id:"constructors",children:"Constructors"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Constructor"}),(0,c.jsx)(n.th,{children:"Modifiers"}),(0,c.jsx)(n.th,{children:"Description"})]})}),(0,c.jsx)(n.tbody,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node.batchsearchengineindexer._constructor_",children:"(constructor)(options)"})}),(0,c.jsx)(n.td,{}),(0,c.jsxs)(n.td,{children:["Constructs a new instance of the ",(0,c.jsx)(n.code,{children:"BatchSearchEngineIndexer"})," class"]})]})})]}),"\n",(0,c.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Method"}),(0,c.jsx)(n.th,{children:"Modifiers"}),(0,c.jsx)(n.th,{children:"Description"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node.batchsearchengineindexer.finalize",children:"finalize()"})}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"abstract"})}),(0,c.jsx)(n.td,{children:"Any asynchronous teardown tasks can be performed here."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node.batchsearchengineindexer.index",children:"index(documents)"})}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"abstract"})}),(0,c.jsx)(n.td,{children:"Receives an array of indexable documents (of size this.batchSize) which should be written to the search engine. This method won't be called again at least until it resolves."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node.batchsearchengineindexer.initialize",children:"initialize()"})}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"abstract"})}),(0,c.jsx)(n.td,{children:"Any asynchronous setup tasks can be performed here."})]})]})]})]})}function l(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}},675251:(e,n,r)=>{var c=r(667294),s=Symbol.for("react.element"),t=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,i=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function h(e,n,r){var c,t={},h=null,o=null;for(c in void 0!==r&&(h=""+r),void 0!==n.key&&(h=""+n.key),void 0!==n.ref&&(o=n.ref),n)d.call(n,c)&&!a.hasOwnProperty(c)&&(t[c]=n[c]);if(e&&e.defaultProps)for(c in n=e.defaultProps)void 0===t[c]&&(t[c]=n[c]);return{$$typeof:s,type:e,key:h,ref:o,props:t,_owner:i.current}}n.Fragment=t,n.jsx=h,n.jsxs=h},785893:(e,n,r)=>{e.exports=r(675251)},511151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>d});var c=r(667294);const s={},t=c.createContext(s);function d(e){const n=c.useContext(t);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),c.createElement(t.Provider,{value:n},e.children)}}}]);