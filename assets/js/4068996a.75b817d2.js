/*! For license information please see 4068996a.75b817d2.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[395926],{528178:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>o,frontMatter:()=>t,metadata:()=>i,toc:()=>d});var n=s(785893),c=s(511151);const t={id:"plugin-search-backend-module-elasticsearch.elasticsearchclientwrapper",title:"ElasticSearchClientWrapper",description:"API reference for ElasticSearchClientWrapper"},a=void 0,i={id:"reference/plugin-search-backend-module-elasticsearch.elasticsearchclientwrapper",title:"ElasticSearchClientWrapper",description:"API reference for ElasticSearchClientWrapper",source:"@site/versioned_docs/version-stable/reference/plugin-search-backend-module-elasticsearch.elasticsearchclientwrapper.md",sourceDirName:"reference",slug:"/reference/plugin-search-backend-module-elasticsearch.elasticsearchclientwrapper",permalink:"/docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchclientwrapper",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-search-backend-module-elasticsearch.elasticsearchclientwrapper.md",tags:[],version:"stable",frontMatter:{id:"plugin-search-backend-module-elasticsearch.elasticsearchclientwrapper",title:"ElasticSearchClientWrapper",description:"API reference for ElasticSearchClientWrapper"}},l={},d=[{value:"Methods",id:"methods",level:2}];function h(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-search-backend-module-elasticsearch",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-search-backend-module-elasticsearch"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchclientwrapper",children:(0,n.jsx)(r.code,{children:"ElasticSearchClientWrapper"})})]}),"\n",(0,n.jsx)(r.p,{children:"A wrapper class that exposes logical methods that are conditionally fired against either a configured Elasticsearch client or a configured Opensearch client."}),"\n",(0,n.jsx)(r.p,{children:"This is necessary because, despite its intention to be API-compatible, the opensearch client does not support API key-based authentication. This is also the sanest way to accomplish this while making typescript happy."}),"\n",(0,n.jsx)(r.p,{children:"In the future, if the differences between implementations become unmaintainably divergent, we should split out the Opensearch and Elasticsearch search engine implementations."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"class ElasticSearchClientWrapper \n"})}),"\n",(0,n.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Method"}),(0,n.jsx)(r.th,{children:"Modifiers"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchclientwrapper.bulk",children:"bulk(bulkOptions)"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchclientwrapper.createindex",children:"createIndex(options)"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchclientwrapper.deleteindex",children:"deleteIndex(options)"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchclientwrapper.fromclientoptions",children:"fromClientOptions(options)"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"static"})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchclientwrapper.getaliases",children:"getAliases(options)"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchclientwrapper.indexexists",children:"indexExists(options)"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchclientwrapper.listindices",children:"listIndices(options)"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchclientwrapper.putindextemplate",children:"putIndexTemplate(template)"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchclientwrapper.search",children:"search(options)"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchclientwrapper.updatealiases",children:"updateAliases(options)"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{})]})]})]})]})}function o(e={}){const{wrapper:r}={...(0,c.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},675251:(e,r,s)=>{var n=s(667294),c=Symbol.for("react.element"),t=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,s){var n,t={},d=null,h=null;for(n in void 0!==s&&(d=""+s),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(h=r.ref),r)a.call(r,n)&&!l.hasOwnProperty(n)&&(t[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===t[n]&&(t[n]=r[n]);return{$$typeof:c,type:e,key:d,ref:h,props:t,_owner:i.current}}r.Fragment=t,r.jsx=d,r.jsxs=d},785893:(e,r,s)=>{e.exports=s(675251)},511151:(e,r,s)=>{s.d(r,{Z:()=>i,a:()=>a});var n=s(667294);const c={},t=n.createContext(c);function a(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);