/*! For license information please see c1e77a4a.cb2e5530.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[171978],{153078:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var t=r(785893),c=r(511151);const s={id:"plugin-catalog-backend",title:"@backstage/plugin-catalog-backend",description:"API Reference for @backstage/plugin-catalog-backend"},a=void 0,l={id:"reference/plugin-catalog-backend",title:"@backstage/plugin-catalog-backend",description:"API Reference for @backstage/plugin-catalog-backend",source:"@site/versioned_docs/version-stable/reference/plugin-catalog-backend.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend",permalink:"/docs/reference/plugin-catalog-backend",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-catalog-backend.md",tags:[],version:"stable",frontMatter:{id:"plugin-catalog-backend",title:"@backstage/plugin-catalog-backend",description:"API Reference for @backstage/plugin-catalog-backend"}},o={},d=[{value:"Classes",id:"classes",level:2},{value:"Functions",id:"functions",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Variables",id:"variables",level:2},{value:"Type Aliases",id:"type-aliases",level:2}];function i(e){const n={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend",children:(0,t.jsx)(n.code,{children:"@backstage/plugin-catalog-backend"})})]}),"\n",(0,t.jsx)(n.p,{children:"The Backstage backend plugin that provides the Backstage catalog"}),"\n",(0,t.jsx)(n.h2,{id:"classes",children:"Classes"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Class"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.annotatelocationentityprocessor",children:"AnnotateLocationEntityProcessor"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.annotatescmslugentityprocessor",children:"AnnotateScmSlugEntityProcessor"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.builtinkindsentityprocessor",children:"BuiltinKindsEntityProcessor"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder",children:"CatalogBuilder"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.p,{children:"A builder that helps wire up all of the component parts of the catalog."}),(0,t.jsx)(n.p,{children:"The touch points where you can replace or extend behavior are as follows:"}),(0,t.jsx)(n.p,{children:"- Entity policies can be added or replaced. These are automatically run after the processors' pre-processing steps. All policies are given the chance to inspect the entity, and all of them have to pass in order for the entity to be considered valid from an overall point of view. - Location analyzers can be added. These are responsible for analyzing repositories when onboarding them into the catalog, by finding catalog-info.yaml files and other artifacts that can help automatically register or create catalog data on the user's behalf. - Placeholder resolvers can be replaced or added. These run on the raw structured data between the parsing and pre-processing steps, to replace dollar-prefixed entries with their actual values (like $file). - Field format validators can be replaced. These check the format of individual core fields such as metadata.name, to ensure that they adhere to certain rules. - Processors can be added or replaced. These implement the functionality of reading, parsing, validating, and processing the entity data before it is persisted in the catalog."})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.codeownersprocessor",children:"CodeOwnersProcessor"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.defaultcatalogcollator",children:"DefaultCatalogCollator"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.filereaderprocessor",children:"FileReaderProcessor"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.locationentityprocessor",children:"LocationEntityProcessor"})}),(0,t.jsx)(n.td,{children:"Legacy processor, should not be used."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.placeholderprocessor",children:"PlaceholderProcessor"})}),(0,t.jsx)(n.td,{children:"Traverses raw entity JSON looking for occurrences of $-prefixed placeholders that it then fills in with actual data."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.urlreaderprocessor",children:"UrlReaderProcessor"})}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Function"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.createrandomprocessinginterval",children:"createRandomProcessingInterval(options)"})}),(0,t.jsx)(n.td,{children:"Creates a function that returns a random processing interval between minSeconds and maxSeconds."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.parseentityyaml",children:"parseEntityYaml(data, location)"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.transformlegacypolicytoprocessor",children:"transformLegacyPolicyToProcessor(policy)"})}),(0,t.jsx)(n.td,{children:"Transform a given entity policy to an entity processor."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"interfaces",children:"Interfaces"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Interface"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.catalogprocessingengine",children:"CatalogProcessingEngine"})}),(0,t.jsx)(n.td,{children:"Represents the engine that drives the processing and stitching loops. Some backend instances may choose to not call start, if they focus only on API interactions."})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"variables",children:"Variables"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Variable"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.catalog_conflicts_topic",children:"CATALOG_CONFLICTS_TOPIC"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.catalog_errors_topic",children:"CATALOG_ERRORS_TOPIC"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.defaultcatalogcollatorentitytransformer",children:"defaultCatalogCollatorEntityTransformer"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.defaultcatalogcollatorfactory",children:"DefaultCatalogCollatorFactory"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.locationspectolocationentity",children:"locationSpecToLocationEntity"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.locationspectometadataname",children:"locationSpecToMetadataName"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.processingresult",children:"processingResult"})}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"type-aliases",children:"Type Aliases"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Type Alias"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.analyzelocationentityfield",children:"AnalyzeLocationEntityField"})}),(0,t.jsx)(n.td,{children:"This is where I get really vague. Something like this perhaps? Or it could be something like a json-schema that contains enough info for the frontend to be able to present a form and explanations"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.analyzelocationexistingentity",children:"AnalyzeLocationExistingEntity"})}),(0,t.jsx)(n.td,{children:"If the folder pointed to already contained catalog info yaml files, they are read and emitted like this so that the frontend can inform the user that it located them and can make sure to register them as well if they weren't already"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.analyzelocationgenerateentity",children:"AnalyzeLocationGenerateEntity"})}),(0,t.jsx)(n.td,{children:"This is some form of representation of what the analyzer could deduce. We should probably have a chat about how this can best be conveyed to the frontend. It'll probably contain a (possibly incomplete) entity, plus enough info for the frontend to know what form data to show to the user for overriding/completing the info."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.analyzelocationrequest",children:"AnalyzeLocationRequest"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.analyzelocationresponse",children:"AnalyzeLocationResponse"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.analyzeoptions",children:"AnalyzeOptions"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.catalogcollatorentitytransformer",children:"CatalogCollatorEntityTransformer"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.catalogenvironment",children:"CatalogEnvironment"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.catalogpermissionruleinput",children:"CatalogPermissionRuleInput"})}),(0,t.jsxs)(n.td,{children:["This is a duplicate of the alpha ",(0,t.jsx)(n.code,{children:"CatalogPermissionRule"})," type, for use in the stable API."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.catalogprocessor",children:"CatalogProcessor"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.catalogprocessorcache",children:"CatalogProcessorCache"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.catalogprocessoremit",children:"CatalogProcessorEmit"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.catalogprocessorentityresult",children:"CatalogProcessorEntityResult"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.catalogprocessorerrorresult",children:"CatalogProcessorErrorResult"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.catalogprocessorlocationresult",children:"CatalogProcessorLocationResult"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.catalogprocessorparser",children:"CatalogProcessorParser"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.catalogprocessorrefreshkeysresult",children:"CatalogProcessorRefreshKeysResult"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.catalogprocessorrelationresult",children:"CatalogProcessorRelationResult"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.catalogprocessorresult",children:"CatalogProcessorResult"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.defaultcatalogcollatorfactoryoptions",children:"DefaultCatalogCollatorFactoryOptions"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.deferredentity",children:"DeferredEntity"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.entitiessearchfilter",children:"EntitiesSearchFilter"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.entityfilter",children:"EntityFilter"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.entityprovider",children:"EntityProvider"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.entityproviderconnection",children:"EntityProviderConnection"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.entityprovidermutation",children:"EntityProviderMutation"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.entityrelationspec",children:"EntityRelationSpec"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.locationanalyzer",children:"LocationAnalyzer"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.locationentityprocessoroptions",children:"LocationEntityProcessorOptions"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.locationspec",children:"LocationSpec"})}),(0,t.jsx)(n.td,{children:"Holds the entity location information."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.placeholderprocessoroptions",children:"PlaceholderProcessorOptions"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.placeholderresolver",children:"PlaceholderResolver"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.placeholderresolverparams",children:"PlaceholderResolverParams"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.placeholderresolverread",children:"PlaceholderResolverRead"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.placeholderresolverresolveurl",children:"PlaceholderResolverResolveUrl"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.processingintervalfunction",children:"ProcessingIntervalFunction"})}),(0,t.jsx)(n.td,{children:"Function that returns the catalog processing interval in seconds."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.scmlocationanalyzer",children:"ScmLocationAnalyzer"})}),(0,t.jsx)(n.td,{})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}},675251:(e,n,r)=>{var t=r(667294),c=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,r){var t,s={},d=null,i=null;for(t in void 0!==r&&(d=""+r),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(i=n.ref),n)a.call(n,t)&&!o.hasOwnProperty(t)&&(s[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===s[t]&&(s[t]=n[t]);return{$$typeof:c,type:e,key:d,ref:i,props:s,_owner:l.current}}n.Fragment=s,n.jsx=d,n.jsxs=d},785893:(e,n,r)=>{e.exports=r(675251)},511151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>a});var t=r(667294);const c={},s=t.createContext(c);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);