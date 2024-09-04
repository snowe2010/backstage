/*! For license information please see c4e9e64d.a40fa160.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[769837],{990180:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>a,frontMatter:()=>c,metadata:()=>o,toc:()=>h});var s=r(785893),t=r(511151);const c={id:"plugin-techdocs-node",title:"@backstage/plugin-techdocs-node",description:"API Reference for @backstage/plugin-techdocs-node"},d=void 0,o={id:"reference/plugin-techdocs-node",title:"@backstage/plugin-techdocs-node",description:"API Reference for @backstage/plugin-techdocs-node",source:"@site/../docs/reference/plugin-techdocs-node.md",sourceDirName:"reference",slug:"/reference/plugin-techdocs-node",permalink:"/docs/next/reference/plugin-techdocs-node",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-techdocs-node.md",tags:[],version:"current",frontMatter:{id:"plugin-techdocs-node",title:"@backstage/plugin-techdocs-node",description:"API Reference for @backstage/plugin-techdocs-node"}},i={},h=[{value:"Classes",id:"classes",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Variables",id:"variables",level:2},{value:"Type Aliases",id:"type-aliases",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-techdocs-node",children:(0,s.jsx)(n.code,{children:"@backstage/plugin-techdocs-node"})})]}),"\n",(0,s.jsx)(n.p,{children:"Common functionalities for TechDocs, to be shared between techdocs-backend plugin and techdocs-cli"}),"\n",(0,s.jsx)(n.h2,{id:"classes",children:"Classes"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Class"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-techdocs-node.directorypreparer",children:"DirectoryPreparer"})}),(0,s.jsx)(n.td,{children:"Preparer used to retrieve documentation files from a local directory"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-techdocs-node.generators",children:"Generators"})}),(0,s.jsx)(n.td,{children:"Collection of docs generators"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-techdocs-node.preparers",children:"Preparers"})}),(0,s.jsx)(n.td,{children:"Collection of docs preparers (dir and url)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-techdocs-node.publisher",children:"Publisher"})}),(0,s.jsxs)(n.td,{children:["Factory class to create a TechDocs publisher based on defined publisher type in app config. Uses ",(0,s.jsx)(n.code,{children:"techdocs.publisher.type"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-techdocs-node.techdocsgenerator",children:"TechdocsGenerator"})}),(0,s.jsx)(n.td,{children:"Generates documentation files"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-techdocs-node.urlpreparer",children:"UrlPreparer"})}),(0,s.jsx)(n.td,{children:"Preparer used to retrieve documentation files from a remote repository"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"interfaces",children:"Interfaces"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Interface"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-techdocs-node.docsbuildstrategy",children:"DocsBuildStrategy"})}),(0,s.jsx)(n.td,{children:"A strategy for when to build TechDocs locally, and when to skip building TechDocs (allowing for an external build)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-techdocs-node.publisherbase",children:"PublisherBase"})}),(0,s.jsx)(n.td,{children:"Base class for a TechDocs publisher (e.g. Local, Google GCS Bucket, AWS S3, etc.) The publisher handles publishing of the generated static files after the prepare and generate steps of TechDocs. It also provides APIs to communicate with the storage service."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-techdocs-node.techdocsbuildsextensionpoint",children:"TechdocsBuildsExtensionPoint"})}),(0,s.jsx)(n.td,{children:"Extension point type for configuring TechDocs builds."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-techdocs-node.techdocscontainerrunner",children:"TechDocsContainerRunner"})}),(0,s.jsx)(n.td,{children:"Handles the running of containers, on behalf of others."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-techdocs-node.techdocsdocument",children:"TechDocsDocument"})}),(0,s.jsx)(n.td,{children:"TechDocs indexable document interface"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-techdocs-node.techdocsgeneratorextensionpoint",children:"TechdocsGeneratorExtensionPoint"})}),(0,s.jsx)(n.td,{children:"Extension point type for configuring a custom TechDocs generator"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-techdocs-node.techdocspreparerextensionpoint",children:"TechdocsPreparerExtensionPoint"})}),(0,s.jsx)(n.td,{children:"Extension point type for configuring a custom TechDocs preparer"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-techdocs-node.techdocspublisherextensionpoint",children:"TechdocsPublisherExtensionPoint"})}),(0,s.jsx)(n.td,{children:"Extension point type for configuring a custom TechDocs publisher"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"variables",children:"Variables"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Variable"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-techdocs-node.getdocfilesfromrepository",children:"getDocFilesFromRepository"})}),(0,s.jsxs)(n.td,{children:["Returns a preparer response ",(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-techdocs-node.preparerresponse",children:"PreparerResponse"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-techdocs-node.getlocationforentity",children:"getLocationForEntity"})}),(0,s.jsx)(n.td,{children:"Returns an entity reference based on the TechDocs annotation type"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-techdocs-node.getmkdocsyml",children:"getMkdocsYml"})}),(0,s.jsx)(n.td,{children:"Finds and loads the contents of an mkdocs.yml, mkdocs.yaml file, a file with a specified name or an ad-hoc created file with minimal config."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-techdocs-node.getmkdocsyml",children:"getMkDocsYml"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-techdocs-node.parsereferenceannotation",children:"parseReferenceAnnotation"})}),(0,s.jsx)(n.td,{children:"Returns a parsed locations annotation"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-techdocs-node.techdocsbuildsextensionpoint",children:"techdocsBuildsExtensionPoint"})}),(0,s.jsx)(n.td,{children:"Extension point for configuring TechDocs builds."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-techdocs-node.techdocsgeneratorextensionpoint",children:"techdocsGeneratorExtensionPoint"})}),(0,s.jsx)(n.td,{children:"Extension point for configuring a custom TechDocs generator"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-techdocs-node.techdocspreparerextensionpoint",children:"techdocsPreparerExtensionPoint"})}),(0,s.jsx)(n.td,{children:"Extension point for configuring a custom TechDocs preparer"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-techdocs-node.techdocspublisherextensionpoint",children:"techdocsPublisherExtensionPoint"})}),(0,s.jsx)(n.td,{children:"Extension point for configuring a custom TechDocs publisher"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-techdocs-node.transformdirlocation",children:"transformDirLocation"})}),(0,s.jsxs)(n.td,{children:["TechDocs references of type ",(0,s.jsx)(n.code,{children:"dir"})," are relative the source location of the entity. This function transforms relative references to absolute ones, based on the location the entity was ingested from. If the entity was registered by a ",(0,s.jsx)(n.code,{children:"url"})," location, it returns a ",(0,s.jsx)(n.code,{children:"url"})," location with a resolved target that points to the targeted subfolder. If the entity was registered by a ",(0,s.jsx)(n.code,{children:"file"})," location, it returns an absolute ",(0,s.jsx)(n.code,{children:"dir"})," location."]})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"type-aliases",children:"Type Aliases"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Type Alias"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-techdocs-node.etag",children:"ETag"})}),(0,s.jsx)(n.td,{children:"A unique identifier of the tree blob, usually the commit SHA or etag from the target."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-techdocs-node.generatorbase",children:"GeneratorBase"})}),(0,s.jsx)(n.td,{children:"Generates documentation files"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-techdocs-node.generatorbuilder",children:"GeneratorBuilder"})}),(0,s.jsx)(n.td,{children:"The generator builder holds the generator ready for run time"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-techdocs-node.generatoroptions",children:"GeneratorOptions"})}),(0,s.jsx)(n.td,{children:"Options for building generators"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-techdocs-node.generatorrunoptions",children:"GeneratorRunOptions"})}),(0,s.jsx)(n.td,{children:"The values that the generator will receive."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-techdocs-node.migraterequest",children:"MigrateRequest"})}),(0,s.jsx)(n.td,{children:"TechDocs entity triplet migration request"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-techdocs-node.parsedlocationannotation",children:"ParsedLocationAnnotation"})}),(0,s.jsx)(n.td,{children:"Parsed location annotation"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-techdocs-node.preparerbase",children:"PreparerBase"})}),(0,s.jsx)(n.td,{children:"Definition of a TechDocs preparer"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-techdocs-node.preparerbuilder",children:"PreparerBuilder"})}),(0,s.jsx)(n.td,{children:"Definition for a TechDocs preparer builder"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-techdocs-node.preparerconfig",children:"PreparerConfig"})}),(0,s.jsx)(n.td,{children:"Options for building preparers"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-techdocs-node.prepareroptions",children:"PreparerOptions"})}),(0,s.jsx)(n.td,{children:"Options for configuring the content preparation process."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-techdocs-node.preparerresponse",children:"PreparerResponse"})}),(0,s.jsx)(n.td,{children:"Result of the preparation step."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-techdocs-node.publisherbuilder",children:"PublisherBuilder"})}),(0,s.jsx)(n.td,{children:"Definition for a TechDocs publisher builder"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-techdocs-node.publisherfactory",children:"PublisherFactory"})}),(0,s.jsx)(n.td,{children:"Options for building publishers"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-techdocs-node.publishertype",children:"PublisherType"})}),(0,s.jsx)(n.td,{children:"Key for all the different types of TechDocs publishers that are supported."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-techdocs-node.publishrequest",children:"PublishRequest"})}),(0,s.jsx)(n.td,{children:"Request publish definition"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-techdocs-node.publishresponse",children:"PublishResponse"})}),(0,s.jsx)(n.td,{children:"Response containing metadata about where files were published and what may have been published or updated."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-techdocs-node.readinessresponse",children:"ReadinessResponse"})}),(0,s.jsx)(n.td,{children:"Result for the validation check."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-techdocs-node.remoteprotocol",children:"RemoteProtocol"})}),(0,s.jsx)(n.td,{children:"Location where documentation files are stored"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-techdocs-node.supportedgeneratorkey",children:"SupportedGeneratorKey"})}),(0,s.jsx)(n.td,{children:"List of supported generator options"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-techdocs-node.techdocsmetadata",children:"TechDocsMetadata"})}),(0,s.jsx)(n.td,{children:"Type to hold metadata found in techdocs_metadata.json and associated with each site"})]})]})]})]})}function a(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},675251:(e,n,r)=>{var s=r(667294),t=Symbol.for("react.element"),c=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function h(e,n,r){var s,c={},h=null,l=null;for(s in void 0!==r&&(h=""+r),void 0!==n.key&&(h=""+n.key),void 0!==n.ref&&(l=n.ref),n)d.call(n,s)&&!i.hasOwnProperty(s)&&(c[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===c[s]&&(c[s]=n[s]);return{$$typeof:t,type:e,key:h,ref:l,props:c,_owner:o.current}}n.Fragment=c,n.jsx=h,n.jsxs=h},785893:(e,n,r)=>{e.exports=r(675251)},511151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>d});var s=r(667294);const t={},c=s.createContext(t);function d(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);