/*! For license information please see 47842741.3f9ce5ad.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[862914],{336577:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var s=a(785893),t=a(511151);const i={id:"search-engines",title:"Search Engines",description:"Choosing and configuring your search engine for Backstage"},r=void 0,c={id:"features/search/search-engines",title:"Search Engines",description:"Choosing and configuring your search engine for Backstage",source:"@site/../docs/features/search/search-engines.md",sourceDirName:"features/search",slug:"/features/search/search-engines",permalink:"/docs/next/features/search/search-engines",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/search/search-engines.md",tags:[],version:"current",frontMatter:{id:"search-engines",title:"Search Engines",description:"Choosing and configuring your search engine for Backstage"},sidebar:"docs",previous:{title:"Search Architecture",permalink:"/docs/next/features/search/architecture"},next:{title:"Collators",permalink:"/docs/next/features/search/collators"}},o={},h=[{value:"Lunr",id:"lunr",level:2},{value:"Postgres",id:"postgres",level:2},{value:"Optional Configuration",id:"optional-configuration",level:3},{value:"Elasticsearch",id:"elasticsearch",level:2},{value:"Example configurations",id:"example-configurations",level:3},{value:"AWS",id:"aws",level:4},{value:"Elastic.co",id:"elasticco",level:4},{value:"OpenSearch",id:"opensearch",level:4},{value:"Others",id:"others",level:4},{value:"With username and password",id:"with-username-and-password",level:5},{value:"With API key",id:"with-api-key",level:5},{value:"Elasticsearch batch size",id:"elasticsearch-batch-size",level:3}];function l(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Backstage supports 3 search engines by default, an in-memory engine called ",(0,s.jsx)(n.a,{href:"#lunr",children:"Lunr"}),", ",(0,s.jsx)(n.a,{href:"#postgres",children:"Postgres"}),"\nand ",(0,s.jsx)(n.a,{href:"#elasticsearch",children:"Elasticsearch"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"lunr",children:"Lunr"}),"\n",(0,s.jsx)(n.p,{children:"Lunr search engine is enabled by default for your Backstage instance if you have not done additional changes to the scaffolded app."}),"\n",(0,s.jsx)(n.p,{children:"As Lunr is built into the Search backend plugin it can be added like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="From your Backstage root directory"',children:"yarn --cwd packages/backend add @backstage/plugin-search-backend\n"})}),"\n",(0,s.jsx)(n.p,{children:"Then add the following line:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="packages/backend/src/index.ts"',children:"const backend = createBackend();\n\n// Other plugins...\n\n/* highlight-add-start */\nbackend.add(import('@backstage/plugin-search-backend/alpha'));\n/* highlight-add-end */\n\nbackend.start();\n"})}),"\n",(0,s.jsx)(n.admonition,{title:"Note",type:"note",children:(0,s.jsx)(n.p,{children:"Lunr is appropriate as a zero-config search engine when developing\nother parts of Backstage locally, however its use is highly discouraged when\nrunning Backstage in production. When deploying Backstage, use one of the\nother search engines instead."})}),"\n",(0,s.jsx)(n.h2,{id:"postgres",children:"Postgres"}),"\n",(0,s.jsx)(n.p,{children:"The Postgres based search engine only requires that Postgres being configured as\nthe database engine for Backstage. Therefore it targets setups that want to\navoid maintaining another external service like Elasticsearch. The search\nprovides decent results and performs well with ten thousands of indexed\ndocuments. The connection to Postgres is established via the database manager\nalso used by other plugins."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Important"}),": The search plugin requires at least Postgres 12!"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"First we need to add the plugin:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="From your Backstage root directory"',children:"yarn --cwd packages/backend add @backstage/plugin-search-backend-module-pg\n"})}),"\n",(0,s.jsx)(n.p,{children:"Then add the following line:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="packages/backend/src/index.ts"',children:"const backend = createBackend();\n\n// Other plugins...\n\n// search plugin\nbackend.add(import('@backstage/plugin-search-backend/alpha'));\n\n/* highlight-add-start */\nbackend.add(import('@backstage/plugin-search-backend-module-pg/alpha'));\n/* highlight-add-end */\n\nbackend.start();\n"})}),"\n",(0,s.jsx)(n.h3,{id:"optional-configuration",children:"Optional Configuration"}),"\n",(0,s.jsx)(n.p,{children:"The following is an example of the optional configuration that can be applied when using Postgres as the search backend. Currently this is mostly for just the highlight feature:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"search:\n  pg:\n    highlightOptions:\n      useHighlight: true # Used to enable to disable the highlight feature. The default value is true\n      maxWord: 35 # Used to set the longest headlines to output. The default value is 35.\n      minWord: 15 # Used to set the shortest headlines to output. The default value is 15.\n      shortWord: 3 # Words of this length or less will be dropped at the start and end of a headline, unless they are query terms. The default value of three (3) eliminates common English articles.\n      highlightAll: false # If true the whole document will be used as the headline, ignoring the preceding three parameters. The default is false.\n      maxFragments: 0 # Maximum number of text fragments to display. The default value of zero selects a non-fragment-based headline generation method. A value greater than zero selects fragment-based headline generation (see the linked documentation above for more details).\n      fragmentDelimiter: ' ... ' # Delimiter string used to concatenate fragments. Defaults to \" ... \".\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," the highlight search term feature uses ",(0,s.jsx)(n.code,{children:"ts_headline"})," which has been known to potentially impact performance. You only need this minimal config to disable it should you have issues:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"search:\n  pg:\n    highlightOptions:\n      useHighlight: false\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The Postgres documentation on ",(0,s.jsx)(n.a,{href:"https://www.postgresql.org/docs/current/textsearch-controls.html#TEXTSEARCH-HEADLINE",children:"Highlighting Results"})," has more details."]}),"\n",(0,s.jsx)(n.h2,{id:"elasticsearch",children:"Elasticsearch"}),"\n",(0,s.jsx)(n.p,{children:"Backstage supports Elasticsearch (and OpenSearch) search engine connections,\nindexing and querying out of the box. Available configuration options enable\nusage of either AWS or Elastic.co hosted solutions, or a custom self-hosted solution."}),"\n",(0,s.jsx)(n.p,{children:"Similarly to Postgres above, Elasticsearch can be set up as follows."}),"\n",(0,s.jsx)(n.p,{children:"First we need to add the plugin:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="From your Backstage root directory"',children:"yarn --cwd packages/backend add @backstage/plugin-search-backend-module-elasticsearch\n"})}),"\n",(0,s.jsx)(n.p,{children:"Then add the following line:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="packages/backend/src/index.ts"',children:"const backend = createBackend();\n\n// Other plugins...\n\n// search plugin\nbackend.add(import('@backstage/plugin-search-backend/alpha'));\n\n/* highlight-add-start */\nbackend.add(\n  import('@backstage/plugin-search-backend-module-elasticsearch/alpha'),\n);\n/* highlight-add-end */\n\nbackend.start();\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Elasticsearch needs some additional configuration before it is ready to use\nwithin your instance. The configuration options are documented in the\n",(0,s.jsx)(n.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/search-backend-module-elasticsearch/config.d.ts",children:"configuration schema definition file."})]}),"\n",(0,s.jsxs)(n.p,{children:["The underlying functionality uses either the official Elasticsearch client\nversion 7.x (meaning that Elasticsearch version 7 is the only one confirmed to\nbe supported), or the OpenSearch client, when the ",(0,s.jsx)(n.code,{children:"aws"})," or ",(0,s.jsx)(n.code,{children:"opensearch"})," provider\nis configured."]}),"\n",(0,s.jsx)(n.h3,{id:"example-configurations",children:"Example configurations"}),"\n",(0,s.jsx)(n.h4,{id:"aws",children:"AWS"}),"\n",(0,s.jsxs)(n.p,{children:["Using AWS hosted Elasticsearch the only configuration option needed is the URL\nto the Elasticsearch service. The implementation assumes that environment\nvariables for AWS access key id and secret access key are defined in accordance\nto the\n",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-credentials-node.html",children:"default AWS credential chain."}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"search:\n  elasticsearch:\n    provider: aws\n    node: https://my-backstage-search-asdfqwerty.eu-west-1.es.amazonaws.com\n"})}),"\n",(0,s.jsx)(n.h4,{id:"elasticco",children:"Elastic.co"}),"\n",(0,s.jsxs)(n.p,{children:["Elastic Cloud hosted Elasticsearch uses a Cloud ID to determine the instance of\nhosted Elasticsearch to connect to. Additionally, username and password needs to\nbe provided either directly or using environment variables like defined in\n",(0,s.jsx)(n.a,{href:"https://backstage.io/docs/conf/writing#includes-and-dynamic-data",children:"Backstage documentation."})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"search:\n  elasticsearch:\n    provider: elastic\n    cloudId: backstage-elastic:asdfqwertyasdfqwertyasdfqwertyasdfqwerty==\n    auth:\n      username: elastic\n      password: changeme\n"})}),"\n",(0,s.jsx)(n.h4,{id:"opensearch",children:"OpenSearch"}),"\n",(0,s.jsxs)(n.p,{children:["OpenSearch can be self hosted for example with the ",(0,s.jsx)(n.a,{href:"https://hub.docker.com/r/opensearchproject/opensearch",children:"official docker image"}),". The configuration requires only the node and authentication."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"search:\n  elasticsearch:\n    provider: opensearch\n    node: http://0.0.0.0:9200\n    auth:\n      username: opensearch\n      password: changeme\n"})}),"\n",(0,s.jsx)(n.h4,{id:"others",children:"Others"}),"\n",(0,s.jsxs)(n.p,{children:["Other Elasticsearch instances can be connected to by using standard\nElasticsearch authentication methods and exposed URL, provided that the cluster\nsupports that. The configuration options needed are the URL to the node and\nauthentication information. Authentication can be handled by either providing\nusername/password or an API key. For more information how to create an API key,\nsee\n",(0,s.jsx)(n.a,{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/security-api-create-api-key.html",children:"Elastic documentation on API keys"}),"."]}),"\n",(0,s.jsx)(n.h5,{id:"with-username-and-password",children:"With username and password"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"search:\n  elasticsearch:\n    node: http://localhost:9200\n    auth:\n      username: elastic\n      password: changeme\n"})}),"\n",(0,s.jsx)(n.h5,{id:"with-api-key",children:"With API key"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"search:\n  elasticsearch:\n    node: http://localhost:9200\n    auth:\n      apiKey: base64EncodedKey\n"})}),"\n",(0,s.jsx)(n.h3,{id:"elasticsearch-batch-size",children:"Elasticsearch batch size"}),"\n",(0,s.jsxs)(n.p,{children:["Default batch size of the Elasticsearch engine is set to 1000. If you are using a lower spec computing resources (like AWS small instance),\nyou may get an error caused by limited ",(0,s.jsx)(n.code,{children:"thread_pool"})," configuration. ( ",(0,s.jsx)(n.code,{children:"429 Too Many Requests /_bulk"})," )"]}),"\n",(0,s.jsxs)(n.p,{children:["In this case you need to decrease the batch size to index the resources to prevent this kind of error. You can easily decrease\nor increase the batch size in your ",(0,s.jsx)(n.code,{children:"app-config.yaml"})," using the ",(0,s.jsx)(n.code,{children:"batchSize"})," option provided for Elasticsearch configuration."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Set batch size to 100"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"search:\n  elasticsearch:\n    batchSize: 100\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"You can also increase the batch size if you are using a large ES instance."}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},675251:(e,n,a)=>{var s=a(667294),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function h(e,n,a){var s,i={},h=null,l=null;for(s in void 0!==a&&(h=""+a),void 0!==n.key&&(h=""+n.key),void 0!==n.ref&&(l=n.ref),n)r.call(n,s)&&!o.hasOwnProperty(s)&&(i[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===i[s]&&(i[s]=n[s]);return{$$typeof:t,type:e,key:h,ref:l,props:i,_owner:c.current}}n.Fragment=i,n.jsx=h,n.jsxs=h},785893:(e,n,a)=>{e.exports=a(675251)},511151:(e,n,a)=>{a.d(n,{Z:()=>c,a:()=>r});var s=a(667294);const t={},i=s.createContext(t);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);