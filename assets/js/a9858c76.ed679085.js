/*! For license information please see a9858c76.ed679085.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[716122],{190461:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=n(785893),s=n(511151);const o={id:"04-authorizing-access-to-paginated-data--old",title:"4. Authorizing access to paginated data",description:"Explains how to authorize access to paginated data in a Backstage plugin"},r=void 0,a={id:"permissions/plugin-authors/04-authorizing-access-to-paginated-data--old",title:"4. Authorizing access to paginated data",description:"Explains how to authorize access to paginated data in a Backstage plugin",source:"@site/../docs/permissions/plugin-authors/04-authorizing-access-to-paginated-data--old.md",sourceDirName:"permissions/plugin-authors",slug:"/permissions/plugin-authors/04-authorizing-access-to-paginated-data--old",permalink:"/docs/next/permissions/plugin-authors/04-authorizing-access-to-paginated-data--old",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/permissions/plugin-authors/04-authorizing-access-to-paginated-data--old.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"04-authorizing-access-to-paginated-data--old",title:"4. Authorizing access to paginated data",description:"Explains how to authorize access to paginated data in a Backstage plugin"}},d={},c=[{value:"Creating the read permission",id:"creating-the-read-permission",level:2},{value:"Using conditional policy decisions",id:"using-conditional-policy-decisions",level:2},{value:"Test the authorized read endpoint",id:"test-the-authorized-read-endpoint",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["This documentation is written for the old backend which has been replaced by ",(0,i.jsx)(t.a,{href:"/docs/next/backend-system/",children:"the new backend system"}),", being the default since Backstage ",(0,i.jsx)(t.a,{href:"/docs/next/releases/v1.24.0",children:"version 1.24"}),". If have migrated to the new backend system, you may want to read ",(0,i.jsx)(t.a,{href:"/docs/next/permissions/plugin-authors/04-authorizing-access-to-paginated-data",children:"its own article"})," instead. Otherwise, ",(0,i.jsx)(t.a,{href:"/docs/next/backend-system/building-backends/migrating",children:"consider migrating"}),"!"]})}),"\n",(0,i.jsxs)(t.p,{children:["Authorizing ",(0,i.jsx)(t.code,{children:"GET /todos"})," is similar to the update endpoint, in that it should be possible to authorize access based on the characteristics of each resource. However, we'll need to authorize a list of resources for this endpoint."]}),"\n",(0,i.jsxs)(t.p,{children:["One possible solution may leverage the batching functionality to authorize all of the todos, and then returning only the ones for which the decision was ",(0,i.jsx)(t.code,{children:"ALLOW"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"router.get('/todos', async (req, res) => {\n  /* highlight-add-next-line */\n  const credentials = await httpAuth.credentials(req, { allow: ['user'] });\n\n  /* highlight-remove-next-line */\n  res.json(getAll());\n  /* highlight-add-start */\n  const items = getAll();\n  const decisions = await permissions.authorize(\n    items.map(({ id }) => ({\n      permission: todoListReadPermission,\n      resourceRef: id,\n    })),\n    { credentials },\n  );\n\n  const filteredItems = decisions.filter(\n    decision => decision.result === AuthorizeResult.ALLOW,\n  );\n  res.json(filteredItems);\n  /* highlight-add-end */\n});\n"})}),"\n",(0,i.jsx)(t.p,{children:"This approach will work for simple cases, but it has a downside: it forces us to retrieve all the elements upfront and authorize them one by one. This forces the plugin implementation to handle concerns like pagination, which is currently handled by the data source."}),"\n",(0,i.jsx)(t.p,{children:"To avoid this situation, the permissions framework has support for filtering items in the data source itself. In this part of the tutorial, we'll describe the steps required to use that behavior."}),"\n",(0,i.jsx)(t.admonition,{title:"Note",type:"note",children:(0,i.jsxs)(t.p,{children:["In order to perform authorization filtering in this way, the data source must allow filters to be logically combined with AND, OR, and NOT operators. The conditional decisions returned by the permissions framework use a ",(0,i.jsx)(t.a,{href:"https://backstage.io/docs/reference/plugin-permission-common.permissioncriteria",children:"nested object"})," to combine conditions. If you're implementing a filter API from scratch, we recommend using the same shape for ease of interoperability. If not, you'll need to implement a function which transforms the nested object into your own format."]})}),"\n",(0,i.jsx)(t.h2,{id:"creating-the-read-permission",children:"Creating the read permission"}),"\n",(0,i.jsx)(t.p,{children:"Let's add another permission to the plugin."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",metastring:'title="plugins/todo-list-backend/src/service/permissions.ts"',children:"import { createPermission } from '@backstage/plugin-permission-common';\n\nexport const TODO_LIST_RESOURCE_TYPE = 'todo-item';\n\nexport const todoListCreatePermission = createPermission({\n  name: 'todo.list.create',\n  attributes: { action: 'create' },\n});\n\nexport const todoListUpdatePermission = createPermission({\n  name: 'todo.list.update',\n  attributes: { action: 'update' },\n  resourceType: TODO_LIST_RESOURCE_TYPE,\n});\n\n/* highlight-add-start */\nexport const todoListReadPermission = createPermission({\n  name: 'todos.list.read',\n  attributes: { action: 'read' },\n  resourceType: TODO_LIST_RESOURCE_TYPE,\n});\n/* highlight-add-end */\n\nexport const todoListPermissions = [\n  todoListCreatePermission,\n  todoListUpdatePermission,\n  /* highlight-add-start */\n  todoListReadPermission,\n  /* highlight-add-end */\n];\n"})}),"\n",(0,i.jsx)(t.h2,{id:"using-conditional-policy-decisions",children:"Using conditional policy decisions"}),"\n",(0,i.jsxs)(t.p,{children:["So far we've only used the ",(0,i.jsx)(t.code,{children:"PermissionsService.authorize"})," method, which will evaluate conditional decisions before returning a result. In this step, we want to evaluate conditional decisions within our plugin, so we'll use ",(0,i.jsx)(t.code,{children:"PermissionsService.authorizeConditional"})," instead."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",metastring:'title="plugins/todo-list-backend/src/service/router.ts"',children:"/* highlight-remove-next-line */\nimport { createPermissionIntegrationRouter } from '@backstage/plugin-permission-node';\n/* highlight-add-start */\nimport {\n  createPermissionIntegrationRouter,\n  createConditionTransformer,\n  ConditionTransformer,\n} from '@backstage/plugin-permission-node';\n/* highlight-add-end */\n/* highlight-remove-next-line */\nimport { add, getAll, getTodo, update } from './todos';\n/* highlight-add-next-line */\nimport { add, getAll, getTodo, TodoFilter, update } from './todos';\nimport {\n  TODO_LIST_RESOURCE_TYPE,\n  todoListCreatePermission,\n  todoListUpdatePermission,\n  /* highlight-add-next-line */\n  todoListReadPermission,\n} from './permissions';\n\n// ...\n\nconst permissionIntegrationRouter = createPermissionIntegrationRouter({\n  /* highlight-remove-next-line */\n  permissions: [todoListCreatePermission, todoListUpdatePermission],\n  /* highlight-add-next-line */\n  permissions: [todoListCreatePermission, todoListUpdatePermission, todoListReadPermission],\n  getResources: async resourceRefs => {\n    return resourceRefs.map(getTodo);\n  },\n  resourceType: TODO_LIST_RESOURCE_TYPE,\n  rules: Object.values(rules),\n});\n\n// ...\n\n/* highlight-add-next-line */\nconst transformConditions: ConditionTransformer<TodoFilter> = createConditionTransformer(Object.values(rules));\n\n/* highlight-remove-next-line */\nrouter.get('/todos', async (_req, res) => {\n/* highlight-add-start */\nrouter.get('/todos', async (req, res) => {\n  const credentials = await httpAuth.credentials(req, { allow: ['user'] });\n\n  const decision = (\n    await permissions.authorizeConditional([{ permission: todoListReadPermission }], {\n      credentials,\n    })\n  )[0];\n\n  if (decision.result === AuthorizeResult.DENY) {\n    throw new NotAllowedError('Unauthorized');\n  }\n\n  if (decision.result === AuthorizeResult.CONDITIONAL) {\n    const filter = transformConditions(decision.conditions);\n    res.json(getAll(filter));\n  } else {\n    res.json(getAll());\n  }\n/* highlight-add-end */\n  /* highlight-remove-next-line */\n  res.json(getAll());\n});\n"})}),"\n",(0,i.jsxs)(t.p,{children:["To make the process of handling conditional decisions easier, the permission framework provides a ",(0,i.jsx)(t.code,{children:"createConditionTransformer"})," helper. This function accepts an array of permission rules, and returns a transformer function which converts the conditions to the format needed by the plugin using the ",(0,i.jsx)(t.code,{children:"toQuery"})," method defined on each rule."]}),"\n",(0,i.jsxs)(t.p,{children:["Since ",(0,i.jsx)(t.code,{children:"TodoFilter"})," used in our plugin matches the structure of the conditions object, we can directly pass the output of our condition transformer. If the filters were structured differently, we'd need to transform it further before passing it to the api."]}),"\n",(0,i.jsx)(t.h2,{id:"test-the-authorized-read-endpoint",children:"Test the authorized read endpoint"}),"\n",(0,i.jsxs)(t.p,{children:["Let's update our permission policy to return a conditional result whenever a ",(0,i.jsx)(t.code,{children:"todoListReadPermission"})," permission is received. In this case, we can reuse the decision returned for the ",(0,i.jsx)(t.code,{children:"todosListCreate"})," permission."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",metastring:'title="packages/backend/src/plugins/permission.ts"',children:"import {\n  todoListCreatePermission,\n  todoListUpdatePermission,\n  /* highlight-add-next-line */\n  todoListReadPermission,\n} from '@internal/plugin-todo-list-common';\n\n/* highlight-remove-next-line */\nif (isPermission(request.permission, todoListUpdatePermission)) {\n/* highlight-add-start */\nif (\n  isPermission(request.permission, todoListUpdatePermission) ||\n  isPermission(request.permission, todoListReadPermission)\n) {\n/* highlight-add-end */\n  return createTodoListConditionalDecision(\n    request.permission,\n    todoListConditions.isOwner({\n      userId: user?.identity.userEntityRef\n    }),\n  );\n}\n"})}),"\n",(0,i.jsx)(t.p,{children:"Once the changes to the permission policy are saved, the UI should show only the todo items you've created."})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},675251:(e,t,n)=>{var i=n(667294),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var i,o={},c=null,l=null;for(i in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)r.call(t,i)&&!d.hasOwnProperty(i)&&(o[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===o[i]&&(o[i]=t[i]);return{$$typeof:s,type:e,key:c,ref:l,props:o,_owner:a.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},785893:(e,t,n)=>{e.exports=n(675251)},511151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>r});var i=n(667294);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);