/*! For license information please see 48f0de45.5cc4b132.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[172896],{612065:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=t(785893),r=t(511151);const s={id:"concepts",title:"Search Concepts",description:"Documentation on Backstage Search Concepts"},o=void 0,c={id:"features/search/concepts",title:"Search Concepts",description:"Documentation on Backstage Search Concepts",source:"@site/versioned_docs/version-stable/features/search/concepts.md",sourceDirName:"features/search",slug:"/features/search/concepts",permalink:"/docs/features/search/concepts",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/features/search/concepts.md",tags:[],version:"stable",frontMatter:{id:"concepts",title:"Search Concepts",description:"Documentation on Backstage Search Concepts"},sidebar:"docs",previous:{title:"Getting Started with Search",permalink:"/docs/features/search/getting-started"},next:{title:"Search Architecture",permalink:"/docs/features/search/architecture"}},i={},d=[{value:"Search Engines",id:"search-engines",level:3},{value:"Query Translators",id:"query-translators",level:3},{value:"Documents and Indices",id:"documents-and-indices",level:3},{value:"Collators",id:"collators",level:3},{value:"Decorators",id:"decorators",level:3},{value:"The Scheduler",id:"the-scheduler",level:3},{value:"The Search Page",id:"the-search-page",level:3},{value:"Search Context and Components",id:"search-context-and-components",level:3}];function h(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Backstage Search lets you find the right information you are looking for in the\nBackstage ecosystem."}),"\n",(0,a.jsx)(n.p,{children:"To get started, you should get familiar with these core concepts:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#search-engines",children:"Search Engines"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#query-translators",children:"Query Translators"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#documents-and-indices",children:"Documents and Indices"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#collators",children:"Collators"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#decorators",children:"Decorators"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#the-scheduler",children:"The Scheduler"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#the-search-page",children:"The Search Page"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#search-context-and-components",children:"Search Context and Components"})}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"search-engines",children:"Search Engines"}),"\n",(0,a.jsxs)(n.p,{children:["Backstage Search isn't a search engine itself, rather, it provides an interface\nbetween your Backstage instance and a Search Engine of your choice. More\nconcretely, a ",(0,a.jsx)(n.code,{children:"SearchEngine"})," is an interface whose concrete implementations\nfacilitate communication with different search engines (like Elasticsearch,\nLunr, Solr, etc). This abstraction exists in order to support your\norganization's needs."]}),"\n",(0,a.jsx)(n.p,{children:"Out of the box, Backstage Search comes pre-packaged with an in-memory search\nengine implementation built on top of Lunr."}),"\n",(0,a.jsx)(n.h3,{id:"query-translators",children:"Query Translators"}),"\n",(0,a.jsx)(n.p,{children:"Because you can bring your own search engine, and because search engines have\nvery unique and robust query languages themselves, there needs to be a\ntranslation layer between an abstract search query (containing search terms,\nfilters, and document types) into a concrete search query that is specific to a\nsearch engine."}),"\n",(0,a.jsx)(n.p,{children:"Search Engines come pre-packaged with simple translators that do rudimentary\ntransformations of search terms and filters, but you may want to provide your\nown to help tune search results in the context of your organization."}),"\n",(0,a.jsx)(n.h3,{id:"documents-and-indices",children:"Documents and Indices"}),"\n",(0,a.jsx)(n.p,{children:'"Document" is an abstract concept representing something that can be found by\nsearching for it. A document can represent a software entity, a TechDocs page,\netc. Documents are made up of metadata fields, at a minimum including a title,\ntext, and location (as in a URL).'}),"\n",(0,a.jsx)(n.p,{children:"An index is a collection of such documents of a given type."}),"\n",(0,a.jsx)(n.h3,{id:"collators",children:"Collators"}),"\n",(0,a.jsx)(n.p,{children:"You need to be able to search something! Collators are the way to define what\ncan be searched. Specifically, they're readable object streams of documents that\nconform to a minimum set of fields (including a document title, location, and\ntext), but which can contain any other fields as defined by the collator itself.\nOne collator is responsible for defining and collecting documents of a type."}),"\n",(0,a.jsx)(n.p,{children:'Some plugins, like the Catalog Backend, provide so-called "default" collator\nfactories which you can use out-of-the-box to start searching across Backstage\nquickly.'}),"\n",(0,a.jsx)(n.h3,{id:"decorators",children:"Decorators"}),"\n",(0,a.jsx)(n.p,{children:"Sometimes you want to add extra information to a set of documents in your search\nindex that the collator may not be aware of. For example, the Software Catalog\nknows about software entities, but it may not know about their usage or quality."}),"\n",(0,a.jsx)(n.p,{children:"Decorators are transform streams which sit between a collator (read stream) and\nan indexer (write stream) during the indexing process. It can be used to add\nextra fields to documents as they are being collated and indexed. This extra\nmetadata could then be used to bias search results or otherwise improve the\nsearch experience in your Backstage instance."}),"\n",(0,a.jsx)(n.p,{children:"In addition to adding extra metadata, decorators (like any transform stream) can\nalso be used to remove metadata, filter out, or even add extra documents at\nindex-time."}),"\n",(0,a.jsx)(n.h3,{id:"the-scheduler",children:"The Scheduler"}),"\n",(0,a.jsxs)(n.p,{children:["There are many ways a search index could be built and maintained, but Backstage\nSearch chooses to completely rebuild indices on a schedule. Different collators\ncan be configured to refresh at different intervals, depending on how often the\nsource information is updated. When search indexing is distributed among multiple\nbackend nodes, coordination to prevent clashes is typically handled by a\ndistributed ",(0,a.jsx)(n.code,{children:"SchedulerServiceTaskRunner"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"the-search-page",children:"The Search Page"}),"\n",(0,a.jsx)(n.p,{children:"Search pages are very custom things. Not every Backstage instance will want the\nsame interface! In order to allow you to customize your search experience to\nyour heart's content, the Search Plugin takes care of state management and other\nsearch logic for you, but most of the layout of a search page lives in a search\npage component defined in your Backstage App."}),"\n",(0,a.jsxs)(n.p,{children:["For an example of a simple search page, check\n",(0,a.jsx)(n.a,{href:"/docs/features/search/getting-started#adding-search-to-the-frontend",children:"getting started"})]}),"\n",(0,a.jsx)(n.h3,{id:"search-context-and-components",children:"Search Context and Components"}),"\n",(0,a.jsx)(n.p,{children:"A search experience, like a page, is composed of any number of search\ncomponents, which are all wired up using a search context."}),"\n",(0,a.jsxs)(n.p,{children:["Each search experience's context consists of details like a search term,\nfilters, types, results, and a page cursor for handling pagination. Different\ncomponents use this context in different ways. For example, the ",(0,a.jsx)(n.code,{children:"<SearchBar />"}),"\ncan set the search term, ",(0,a.jsx)(n.code,{children:"<SearchFilter />"})," components can set filters, and\nsearch results can be displayed using the ",(0,a.jsx)(n.code,{children:"<SearchResult />"})," component."]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"<SearchResult />"})," and ",(0,a.jsx)(n.code,{children:"<SearchFilter />"})," components are special, in that\nthey themselves are extensible. For an example of how to extend these\ncomponents, check\n",(0,a.jsx)(n.a,{href:"/docs/features/search/getting-started#adding-search-to-the-frontend",children:"getting started"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"If you need even more customization, you can use the search context like any\nother React context to create custom search components of your own."})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},675251:(e,n,t)=>{var a=t(667294),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var a,s={},d=null,h=null;for(a in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(h=n.ref),n)o.call(n,a)&&!i.hasOwnProperty(a)&&(s[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===s[a]&&(s[a]=n[a]);return{$$typeof:r,type:e,key:d,ref:h,props:s,_owner:c.current}}n.Fragment=s,n.jsx=d,n.jsxs=d},785893:(e,n,t)=>{e.exports=t(675251)},511151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>o});var a=t(667294);const r={},s=a.createContext(r);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);