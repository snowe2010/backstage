/*! For license information please see b359d8b1.ab80e01f.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[763807],{103804:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var t=n(785893),s=n(511151);const a={id:"plugin-catalog-backend-module-msgraph",title:"@backstage/plugin-catalog-backend-module-msgraph",description:"API Reference for @backstage/plugin-catalog-backend-module-msgraph"},o=void 0,c={id:"reference/plugin-catalog-backend-module-msgraph",title:"@backstage/plugin-catalog-backend-module-msgraph",description:"API Reference for @backstage/plugin-catalog-backend-module-msgraph",source:"@site/../docs/reference/plugin-catalog-backend-module-msgraph.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend-module-msgraph",permalink:"/docs/next/reference/plugin-catalog-backend-module-msgraph",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog-backend-module-msgraph.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-backend-module-msgraph",title:"@backstage/plugin-catalog-backend-module-msgraph",description:"API Reference for @backstage/plugin-catalog-backend-module-msgraph"}},i={},d=[{value:"Classes",id:"classes",level:2},{value:"Functions",id:"functions",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Variables",id:"variables",level:2},{value:"Type Aliases",id:"type-aliases",level:2}];function l(e){const r={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph",children:(0,t.jsx)(r.code,{children:"@backstage/plugin-catalog-backend-module-msgraph"})})]}),"\n",(0,t.jsx)(r.p,{children:"A Backstage catalog backend module that helps integrate towards Microsoft Graph"}),"\n",(0,t.jsx)(r.h2,{id:"classes",children:"Classes"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Class"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.microsoftgraphclient",children:"MicrosoftGraphClient"})}),(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.p,{children:["A HTTP Client that communicates with Microsoft Graph API. Simplify Authentication and API calls to get ",(0,t.jsx)(r.code,{children:"User"})," and ",(0,t.jsx)(r.code,{children:"Group"})," from Microsoft Graph"]}),(0,t.jsxs)(r.p,{children:["Uses ",(0,t.jsx)(r.code,{children:"msal-node"})," for authentication"]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.microsoftgraphorgentityprovider",children:"MicrosoftGraphOrgEntityProvider"})}),(0,t.jsx)(r.td,{children:"Reads user and group entries out of Microsoft Graph, and provides them as User and Group entities for the catalog."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.microsoftgraphorgreaderprocessor",children:"MicrosoftGraphOrgReaderProcessor"})}),(0,t.jsx)(r.td,{children:"Extracts teams and users out of the Microsoft Graph API."})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"functions",children:"Functions"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Function"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.defaultgrouptransformer",children:"defaultGroupTransformer(group, groupPhoto)"})}),(0,t.jsx)(r.td,{children:"The default implementation of the transformation from a graph group entry to a Group entity."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.defaultorganizationtransformer",children:"defaultOrganizationTransformer(organization)"})}),(0,t.jsx)(r.td,{children:"The default implementation of the transformation from a graph organization entry to a Group entity."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.defaultusertransformer",children:"defaultUserTransformer(user, userPhoto)"})}),(0,t.jsx)(r.td,{children:"The default implementation of the transformation from a graph user entry to a User entity."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.normalizeentityname",children:"normalizeEntityName(name)"})}),(0,t.jsx)(r.td,{children:"Takes an input string and cleans it up to become suitable as an entity name."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.readmicrosoftgraphconfig",children:"readMicrosoftGraphConfig(config)"})}),(0,t.jsx)(r.td,{children:"Parses configuration."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.readmicrosoftgraphorg",children:"readMicrosoftGraphOrg(client, tenantId, options)"})}),(0,t.jsx)(r.td,{children:"Reads an entire org as Group and User entities."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.readproviderconfig",children:"readProviderConfig(id, config)"})}),(0,t.jsx)(r.td,{children:"Parses a single configured provider by id."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.readproviderconfigs",children:"readProviderConfigs(config)"})}),(0,t.jsx)(r.td,{children:"Parses all configured providers."})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"interfaces",children:"Interfaces"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Interface"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.microsoftgraphorgentityproviderlegacyoptions",children:"MicrosoftGraphOrgEntityProviderLegacyOptions"})}),(0,t.jsxs)(r.td,{children:["Legacy options for ",(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.microsoftgraphorgentityprovider",children:"MicrosoftGraphOrgEntityProvider"})," based on ",(0,t.jsx)(r.code,{children:"catalog.processors.microsoftGraphOrg"}),"."]})]})})]}),"\n",(0,t.jsx)(r.h2,{id:"variables",children:"Variables"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Variable"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.microsoft_email_annotation",children:"MICROSOFT_EMAIL_ANNOTATION"})}),(0,t.jsx)(r.td,{children:"The (primary) user email. Also used by the Microsoft auth provider to resolve the User entity."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.microsoft_graph_group_id_annotation",children:"MICROSOFT_GRAPH_GROUP_ID_ANNOTATION"})}),(0,t.jsx)(r.td,{children:"The group id used by the Microsoft Graph API"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.microsoft_graph_tenant_id_annotation",children:"MICROSOFT_GRAPH_TENANT_ID_ANNOTATION"})}),(0,t.jsx)(r.td,{children:"The tenant id used by the Microsoft Graph API"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.microsoft_graph_user_id_annotation",children:"MICROSOFT_GRAPH_USER_ID_ANNOTATION"})}),(0,t.jsx)(r.td,{children:"The user id used by the Microsoft Graph API"})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"type-aliases",children:"Type Aliases"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Type Alias"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.groupmember",children:"GroupMember"})}),(0,t.jsx)(r.td,{children:"Extends the base msgraph types to include the odata type."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.grouptransformer",children:"GroupTransformer"})}),(0,t.jsx)(r.td,{children:"Customize the ingested Group entity"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.microsoftgraphorgentityprovideroptions",children:"MicrosoftGraphOrgEntityProviderOptions"})}),(0,t.jsxs)(r.td,{children:["Options for ",(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.microsoftgraphorgentityprovider",children:"MicrosoftGraphOrgEntityProvider"}),"."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.microsoftgraphproviderconfig",children:"MicrosoftGraphProviderConfig"})}),(0,t.jsx)(r.td,{children:"The configuration parameters for a single Microsoft Graph provider."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.odataquery",children:"ODataQuery"})}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.p,{children:"OData (Open Data Protocol) Query"}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"https://docs.microsoft.com/en-us/odata/concepts/queryoptions-overview",children:"https://docs.microsoft.com/en-us/odata/concepts/queryoptions-overview"})," ",(0,t.jsx)(r.a,{href:"https://docs.microsoft.com/en-us/graph/query-parameters",children:"https://docs.microsoft.com/en-us/graph/query-parameters"})]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.organizationtransformer",children:"OrganizationTransformer"})}),(0,t.jsx)(r.td,{children:"Customize the ingested organization Group entity"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.providerconfigtransformer",children:"ProviderConfigTransformer"})}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.p,{children:"Customize the MSGraph Provider Config Dynamically"}),(0,t.jsx)(r.p,{children:"Transforming fields that are not used for each scheduled ingestion (e.g., id, schedule) will have no effect."})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.usertransformer",children:"UserTransformer"})}),(0,t.jsx)(r.td,{children:"Customize the ingested User entity"})]})]})]})]})}function h(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},675251:(e,r,n)=>{var t=n(667294),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,n){var t,a={},d=null,l=null;for(t in void 0!==n&&(d=""+n),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(l=r.ref),r)o.call(r,t)&&!i.hasOwnProperty(t)&&(a[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===a[t]&&(a[t]=r[t]);return{$$typeof:s,type:e,key:d,ref:l,props:a,_owner:c.current}}r.Fragment=a,r.jsx=d,r.jsxs=d},785893:(e,r,n)=>{e.exports=n(675251)},511151:(e,r,n)=>{n.d(r,{Z:()=>c,a:()=>o});var t=n(667294);const s={},a=t.createContext(s);function o(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);