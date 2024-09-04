/*! For license information please see e3712a13.9ceeb712.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[283284],{99055:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var t=n(785893),s=n(511151);const o={id:"plugin-permission-node.createpermissionintegrationrouter",title:"createPermissionIntegrationRouter()",description:"API reference for createPermissionIntegrationRouter()"},i=void 0,c={id:"reference/plugin-permission-node.createpermissionintegrationrouter",title:"createPermissionIntegrationRouter()",description:"API reference for createPermissionIntegrationRouter()",source:"@site/../docs/reference/plugin-permission-node.createpermissionintegrationrouter.md",sourceDirName:"reference",slug:"/reference/plugin-permission-node.createpermissionintegrationrouter",permalink:"/docs/next/reference/plugin-permission-node.createpermissionintegrationrouter",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-permission-node.createpermissionintegrationrouter.md",tags:[],version:"current",frontMatter:{id:"plugin-permission-node.createpermissionintegrationrouter",title:"createPermissionIntegrationRouter()",description:"API reference for createPermissionIntegrationRouter()"}},a={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function u(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-permission-node",children:(0,t.jsx)(r.code,{children:"@backstage/plugin-permission-node"})})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-permission-node.createpermissionintegrationrouter",children:(0,t.jsx)(r.code,{children:"createPermissionIntegrationRouter"})})]}),"\n",(0,t.jsxs)(r.p,{children:["Create an express Router which provides an authorization route to allow integration between the permission backend and other Backstage backend plugins. Plugin owners that wish to support conditional authorization for their resources should add the router created by this function to their express app inside their ",(0,t.jsx)(r.code,{children:"createRouter"})," implementation."]}),"\n",(0,t.jsxs)(r.p,{children:["In case the ",(0,t.jsx)(r.code,{children:"permissions"})," option is provided, the router also provides a route that exposes permissions and routes of a plugin."]}),"\n",(0,t.jsx)(r.p,{children:"In case resources is provided, the routes can handle permissions for multiple resource types."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"function createPermissionIntegrationRouter<TResourceType1 extends string, TResource1, TResourceType2 extends string, TResource2, TResourceType3 extends string, TResource3>(options: {\n    permissions: Array<Permission>;\n} | CreatePermissionIntegrationRouterResourceOptions<TResourceType1, TResource1> | PermissionIntegrationRouterOptions<TResourceType1, TResource1, TResourceType2, TResource2, TResourceType3, TResource3>): express.Router;\n"})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Parameter"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"options"}),(0,t.jsxs)(r.td,{children:["{ permissions: Array<",(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-permission-common.permission",children:"Permission"}),">; } | ",(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-permission-node.createpermissionintegrationrouterresourceoptions",children:"CreatePermissionIntegrationRouterResourceOptions"}),"<TResourceType1, TResource1> | ",(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-permission-node.permissionintegrationrouteroptions",children:"PermissionIntegrationRouterOptions"}),"<TResourceType1, TResource1, TResourceType2, TResource2, TResourceType3, TResource3>"]}),(0,t.jsx)(r.td,{})]})})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,t.jsx)(r.p,{children:"express.Router"}),"\n",(0,t.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsxs)(r.p,{children:["To make this concrete, we can use the Backstage software catalog as an example. The catalog has conditional rules around access to specific _entities_ in the catalog. The _type_ of resource is captured here as ",(0,t.jsx)(r.code,{children:"resourceType"}),", a string identifier (",(0,t.jsx)(r.code,{children:"catalog-entity"})," in this example) that can be provided with permission definitions. This is merely a _type_ to verify that conditions in an authorization policy are constructed correctly, not a reference to a specific resource."]}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.code,{children:"rules"})," parameter is an array of ",(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-permission-node.permissionrule",children:"PermissionRule"}),"s that introduce conditional filtering logic for resources; for the catalog, these are things like ",(0,t.jsx)(r.code,{children:"isEntityOwner"})," or ",(0,t.jsx)(r.code,{children:"hasAnnotation"}),". Rules describe how to filter a list of resources, and the ",(0,t.jsx)(r.code,{children:"conditions"})," returned allow these rules to be applied with specific parameters (such as 'group:default/team-a', or 'backstage.io/edit-url')."]}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.code,{children:"getResources"})," argument should load resources based on a reference identifier. For the catalog, this is an . For other plugins, this can be any serialized format. This is used to construct the ",(0,t.jsx)(r.code,{children:"createPermissionIntegrationRouter"}),", a function to add an authorization route to your backend plugin. This function will be called by the ",(0,t.jsx)(r.code,{children:"permission-backend"})," when authorization conditions relating to this plugin need to be evaluated."]})]})}function p(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},675251:(e,r,n)=>{var t=n(667294),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,n){var t,o={},d=null,u=null;for(t in void 0!==n&&(d=""+n),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(u=r.ref),r)i.call(r,t)&&!a.hasOwnProperty(t)&&(o[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===o[t]&&(o[t]=r[t]);return{$$typeof:s,type:e,key:d,ref:u,props:o,_owner:c.current}}r.Fragment=o,r.jsx=d,r.jsxs=d},785893:(e,r,n)=>{e.exports=n(675251)},511151:(e,r,n)=>{n.d(r,{Z:()=>c,a:()=>i});var t=n(667294);const s={},o=t.createContext(s);function i(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);