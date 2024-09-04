/*! For license information please see d75f8813.7f8c9962.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[429391],{160653:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var i=r(785893),s=r(511151);const o={id:"plugin-permission-node",title:"@backstage/plugin-permission-node",description:"API Reference for @backstage/plugin-permission-node"},t=void 0,d={id:"reference/plugin-permission-node",title:"@backstage/plugin-permission-node",description:"API Reference for @backstage/plugin-permission-node",source:"@site/versioned_docs/version-stable/reference/plugin-permission-node.md",sourceDirName:"reference",slug:"/reference/plugin-permission-node",permalink:"/docs/reference/plugin-permission-node",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-permission-node.md",tags:[],version:"stable",frontMatter:{id:"plugin-permission-node",title:"@backstage/plugin-permission-node",description:"API Reference for @backstage/plugin-permission-node"}},c={},l=[{value:"Classes",id:"classes",level:2},{value:"Functions",id:"functions",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Variables",id:"variables",level:2},{value:"Type Aliases",id:"type-aliases",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,i.jsx)(n.a,{href:"/docs/reference/plugin-permission-node",children:(0,i.jsx)(n.code,{children:"@backstage/plugin-permission-node"})})]}),"\n",(0,i.jsx)(n.p,{children:"Common permission and authorization utilities for backend plugins"}),"\n",(0,i.jsx)(n.h2,{id:"classes",children:"Classes"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Class"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/reference/plugin-permission-node.serverpermissionclient",children:"ServerPermissionClient"})}),(0,i.jsxs)(n.td,{children:["A thin wrapper around ",(0,i.jsx)(n.a,{href:"/docs/reference/plugin-permission-common.permissionclient",children:"PermissionClient"})," that allows all service-to-service requests."]})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Function"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/reference/plugin-permission-node.createpermissionintegrationrouter",children:"createPermissionIntegrationRouter(options)"})}),(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.p,{children:["Create an express Router which provides an authorization route to allow integration between the permission backend and other Backstage backend plugins. Plugin owners that wish to support conditional authorization for their resources should add the router created by this function to their express app inside their ",(0,i.jsx)(n.code,{children:"createRouter"})," implementation."]}),(0,i.jsxs)(n.p,{children:["In case the ",(0,i.jsx)(n.code,{children:"permissions"})," option is provided, the router also provides a route that exposes permissions and routes of a plugin."]}),(0,i.jsx)(n.p,{children:"In case resources is provided, the routes can handle permissions for multiple resource types."})]})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"interfaces",children:"Interfaces"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Interface"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/reference/plugin-permission-node.permissionpolicy",children:"PermissionPolicy"})}),(0,i.jsx)(n.td,{children:"A policy to evaluate authorization requests for any permissioned action performed in Backstage."})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"variables",children:"Variables"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Variable"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/reference/plugin-permission-node.createconditionauthorizer",children:"createConditionAuthorizer"})}),(0,i.jsx)(n.td,{children:"Takes some permission conditions and returns a definitive authorization result on the resource to which they apply."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/reference/plugin-permission-node.createconditionexports",children:"createConditionExports"})}),(0,i.jsxs)(n.td,{children:["Creates the recommended condition-related exports for a given plugin based on the built-in ",(0,i.jsx)(n.a,{href:"/docs/reference/plugin-permission-node.permissionrule",children:"PermissionRule"}),"s it supports."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/reference/plugin-permission-node.createconditionfactory",children:"createConditionFactory"})}),(0,i.jsx)(n.td,{children:"Creates a condition factory function for a given authorization rule and parameter types."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/reference/plugin-permission-node.createconditiontransformer",children:"createConditionTransformer"})}),(0,i.jsxs)(n.td,{children:["A higher-order helper function which accepts an array of ",(0,i.jsx)(n.a,{href:"/docs/reference/plugin-permission-node.permissionrule",children:"PermissionRule"}),"s, and returns a ",(0,i.jsx)(n.a,{href:"/docs/reference/plugin-permission-node.conditiontransformer",children:"ConditionTransformer"})," which transforms input conditions into equivalent plugin-specific query fragments using the supplied rules."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/reference/plugin-permission-node.createpermissionrule",children:"createPermissionRule"})}),(0,i.jsxs)(n.td,{children:["Helper function to ensure that ",(0,i.jsx)(n.a,{href:"/docs/reference/plugin-permission-node.permissionrule",children:"PermissionRule"})," definitions are typed correctly."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/reference/plugin-permission-node.isandcriteria",children:"isAndCriteria"})}),(0,i.jsx)(n.td,{children:"Utility function used to parse a PermissionCriteria"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/reference/plugin-permission-node.isnotcriteria",children:"isNotCriteria"})}),(0,i.jsx)(n.td,{children:"Utility function used to parse a PermissionCriteria"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/reference/plugin-permission-node.isorcriteria",children:"isOrCriteria"})}),(0,i.jsx)(n.td,{children:"Utility function used to parse a PermissionCriteria of type"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/reference/plugin-permission-node.makecreatepermissionrule",children:"makeCreatePermissionRule"})}),(0,i.jsx)(n.td,{children:"Helper for making plugin-specific createPermissionRule functions, that have the TResource and TQuery type parameters populated but infer the params from the supplied rule. This helps ensure that rules created for this plugin use consistent types for the resource and query."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"type-aliases",children:"Type Aliases"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Type Alias"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/reference/plugin-permission-node.applyconditionsrequest",children:"ApplyConditionsRequest"})}),(0,i.jsxs)(n.td,{children:["A batch of ",(0,i.jsx)(n.a,{href:"/docs/reference/plugin-permission-node.applyconditionsrequestentry",children:"ApplyConditionsRequestEntry"})," objects."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/reference/plugin-permission-node.applyconditionsrequestentry",children:"ApplyConditionsRequestEntry"})}),(0,i.jsx)(n.td,{children:"A request to load the referenced resource and apply conditions in order to finalize a conditional authorization response."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/reference/plugin-permission-node.applyconditionsresponse",children:"ApplyConditionsResponse"})}),(0,i.jsxs)(n.td,{children:["A batch of ",(0,i.jsx)(n.a,{href:"/docs/reference/plugin-permission-node.applyconditionsresponseentry",children:"ApplyConditionsResponseEntry"})," objects."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/reference/plugin-permission-node.applyconditionsresponseentry",children:"ApplyConditionsResponseEntry"})}),(0,i.jsx)(n.td,{children:"The result of applying the conditions, expressed as a definitive authorize result of ALLOW or DENY."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/reference/plugin-permission-node.condition",children:"Condition"})}),(0,i.jsxs)(n.td,{children:["A utility type for mapping a single ",(0,i.jsx)(n.a,{href:"/docs/reference/plugin-permission-node.permissionrule",children:"PermissionRule"})," to its corresponding ",(0,i.jsx)(n.a,{href:"/docs/reference/plugin-permission-common.permissioncondition",children:"PermissionCondition"}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/reference/plugin-permission-node.conditions",children:"Conditions"})}),(0,i.jsxs)(n.td,{children:["A utility type for mapping ",(0,i.jsx)(n.a,{href:"/docs/reference/plugin-permission-node.permissionrule",children:"PermissionRule"}),"s to their corresponding ",(0,i.jsx)(n.a,{href:"/docs/reference/plugin-permission-common.permissioncondition",children:"PermissionCondition"}),"s."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/reference/plugin-permission-node.conditiontransformer",children:"ConditionTransformer"})}),(0,i.jsxs)(n.td,{children:["A function which accepts ",(0,i.jsx)(n.a,{href:"/docs/reference/plugin-permission-common.permissioncondition",children:"PermissionCondition"}),"s logically grouped in a ",(0,i.jsx)(n.a,{href:"/docs/reference/plugin-permission-common.permissioncriteria",children:"PermissionCriteria"})," object, and transforms the ",(0,i.jsx)(n.a,{href:"/docs/reference/plugin-permission-common.permissioncondition",children:"PermissionCondition"}),"s into plugin specific query fragments while retaining the enclosing criteria shape."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/reference/plugin-permission-node.createpermissionintegrationrouterresourceoptions",children:"CreatePermissionIntegrationRouterResourceOptions"})}),(0,i.jsx)(n.td,{children:"Options for creating a permission integration router specific for a particular resource type."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/reference/plugin-permission-node.metadataresponse",children:"MetadataResponse"})}),(0,i.jsx)(n.td,{children:"Response type for the .metadata endpoint."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/reference/plugin-permission-node.metadataresponseserializedrule",children:"MetadataResponseSerializedRule"})}),(0,i.jsx)(n.td,{children:"Serialized permission rules, with the paramsSchema converted from a ZodSchema to a JsonSchema."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/reference/plugin-permission-node.permissionintegrationrouteroptions",children:"PermissionIntegrationRouterOptions"})}),(0,i.jsx)(n.td,{children:"Options for creating a permission integration router exposing permissions and rules from multiple resource types."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/reference/plugin-permission-node.permissionrule",children:"PermissionRule"})}),(0,i.jsx)(n.td,{children:"A conditional rule that can be provided in an  response to an authorization request."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/reference/plugin-permission-node.policyquery",children:"PolicyQuery"})}),(0,i.jsxs)(n.td,{children:["A query to be evaluated by the ",(0,i.jsx)(n.a,{href:"/docs/reference/plugin-permission-node.permissionpolicy",children:"PermissionPolicy"}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/reference/plugin-permission-node.policyqueryuser",children:"PolicyQueryUser"})}),(0,i.jsx)(n.td,{children:"The context within which a policy query is evaluated."})]})]})]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},675251:(e,n,r)=>{var i=r(667294),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,d=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var i,o={},l=null,a=null;for(i in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(a=n.ref),n)t.call(n,i)&&!c.hasOwnProperty(i)&&(o[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===o[i]&&(o[i]=n[i]);return{$$typeof:s,type:e,key:l,ref:a,props:o,_owner:d.current}}n.Fragment=o,n.jsx=l,n.jsxs=l},785893:(e,n,r)=>{e.exports=r(675251)},511151:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>t});var i=r(667294);const s={},o=i.createContext(s);function t(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);