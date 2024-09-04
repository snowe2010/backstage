/*! For license information please see 6940ebd5.bb7c76a7.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[227183],{176814:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var s=i(785893),t=i(511151);const o={id:"03-adding-a-resource-permission-check",title:"3. Adding a resource permission check",description:"Explains how to add a resource permission check to a Backstage plugin"},r=void 0,d={id:"permissions/plugin-authors/03-adding-a-resource-permission-check",title:"3. Adding a resource permission check",description:"Explains how to add a resource permission check to a Backstage plugin",source:"@site/../docs/permissions/plugin-authors/03-adding-a-resource-permission-check.md",sourceDirName:"permissions/plugin-authors",slug:"/permissions/plugin-authors/03-adding-a-resource-permission-check",permalink:"/docs/next/permissions/plugin-authors/03-adding-a-resource-permission-check",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/permissions/plugin-authors/03-adding-a-resource-permission-check.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"03-adding-a-resource-permission-check",title:"3. Adding a resource permission check",description:"Explains how to add a resource permission check to a Backstage plugin"},sidebar:"docs",previous:{title:"2. Adding a basic permission check",permalink:"/docs/next/permissions/plugin-authors/02-adding-a-basic-permission-check"},next:{title:"4. Authorizing access to paginated data",permalink:"/docs/next/permissions/plugin-authors/04-authorizing-access-to-paginated-data"}},a={},c=[{value:"Creating the update permission",id:"creating-the-update-permission",level:2},{value:"Setting up authorization for the update permission",id:"setting-up-authorization-for-the-update-permission",level:2},{value:"Adding support for conditional decisions",id:"adding-support-for-conditional-decisions",level:2},{value:"Provide utilities for policy authors",id:"provide-utilities-for-policy-authors",level:2},{value:"Test the authorized update endpoint",id:"test-the-authorized-update-endpoint",level:2}];function l(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["This documentation is written for ",(0,s.jsx)(n.a,{href:"/docs/next/backend-system/",children:"the new backend system"})," which is the default since Backstage ",(0,s.jsx)(n.a,{href:"/docs/next/releases/v1.24.0",children:"version 1.24"}),". If you are still on the old backend system, you may want to read ",(0,s.jsx)(n.a,{href:"/docs/next/permissions/plugin-authors/03-adding-a-resource-permission-check--old",children:"its own article"})," instead, and ",(0,s.jsx)(n.a,{href:"/docs/next/backend-system/building-backends/migrating",children:"consider migrating"}),"!"]})}),"\n",(0,s.jsxs)(n.p,{children:["When performing updates (or other operations) on specific ",(0,s.jsx)(n.a,{href:"/docs/next/references/glossary#resource-permission-plugin",children:"resources"}),", the permissions framework allows for the decision to be based on characteristics of the resource itself. This means that it's possible to write policies that (for example) allow the operation for users that own a resource, and deny the operation otherwise."]}),"\n",(0,s.jsx)(n.h2,{id:"creating-the-update-permission",children:"Creating the update permission"}),"\n",(0,s.jsxs)(n.p,{children:["Let's add a new permission to the file ",(0,s.jsx)(n.code,{children:"plugins/todo-list-common/src/permissions.ts"})," from ",(0,s.jsx)(n.a,{href:"/docs/next/permissions/plugin-authors/02-adding-a-basic-permission-check",children:"the previous section"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="plugins/todo-list-common/src/permissions.ts"',children:"import { createPermission } from '@backstage/plugin-permission-common';\n\n/* highlight-add-next-line */\nexport const TODO_LIST_RESOURCE_TYPE = 'todo-item';\n\nexport const todoListCreatePermission = createPermission({\n  name: 'todo.list.create',\n  attributes: { action: 'create' },\n});\n\n/* highlight-add-start */\nexport const todoListUpdatePermission = createPermission({\n  name: 'todo.list.update',\n  attributes: { action: 'update' },\n  resourceType: TODO_LIST_RESOURCE_TYPE,\n});\n/* highlight-add-end */\n\n/* highlight-remove-next-line */\nexport const todoListPermissions = [todoListCreatePermission];\n/* highlight-add-start */\nexport const todoListPermissions = [\n  todoListCreatePermission,\n  todoListUpdatePermission,\n];\n/* highlight-add-end */\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Notice that unlike ",(0,s.jsx)(n.code,{children:"todoListCreatePermission"}),", the ",(0,s.jsx)(n.code,{children:"todoListUpdatePermission"})," permission contains a ",(0,s.jsx)(n.code,{children:"resourceType"})," field. This field indicates to the permission framework that this permission is intended to be authorized in the context of a resource with type ",(0,s.jsx)(n.code,{children:"'todo-item'"}),". You can use whatever string you like as the resource type, as long as you use the same value consistently for each type of resource."]}),"\n",(0,s.jsx)(n.h2,{id:"setting-up-authorization-for-the-update-permission",children:"Setting up authorization for the update permission"}),"\n",(0,s.jsxs)(n.p,{children:["To start, let's edit ",(0,s.jsx)(n.code,{children:"plugins/todo-list-backend/src/service/router.ts"})," in the same manner as we did in the previous section:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="plugins/todo-list-backend/src/service/router.ts"',children:"/* highlight-remove-next-line */\nimport { todoListCreatePermission } from '@internal/plugin-todo-list-common';\n/* highlight-add-start */\nimport {\n  todoListCreatePermission,\n  todoListUpdatePermission,\n} from '@internal/plugin-todo-list-common';\n/* highlight-add-end */\n\n// ...\n\nconst permissionIntegrationRouter = createPermissionIntegrationRouter({\n  /* highlight-remove-next-line */\n  permissions: [todoListCreatePermission],\n  /* highlight-add-next-line */\n  permissions: [todoListCreatePermission, todoListUpdatePermission],\n});\n\n// ...\n\nrouter.put('/todos', async (req, res) => {\n  /* highlight-add-start */\n  const credentials = await httpAuth.credentials(req, { allow: ['user'] });\n  /* highlight-add-end */\n\n  if (!isTodoUpdateRequest(req.body)) {\n    throw new InputError('Invalid payload');\n  }\n  /* highlight-add-start */\n  const decision = (\n    await permissions.authorize(\n      [{ permission: todoListUpdatePermission, resourceRef: req.body.id }],\n      { credentials },\n    )\n  )[0];\n\n  if (decision.result !== AuthorizeResult.ALLOW) {\n    throw new NotAllowedError('Unauthorized');\n  }\n  /* highlight-add-end */\n\n  res.json(update(req.body));\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Important:"})," Notice that we are passing an extra ",(0,s.jsx)(n.code,{children:"resourceRef"})," field, with the ",(0,s.jsx)(n.code,{children:"id"})," of the todo item as the value."]}),"\n",(0,s.jsx)(n.p,{children:"This enables decisions based on characteristics of the resource, but it's important to note that policy authors will not have access to the resource ref inside of their permission policies. Instead, the policies will return conditional decisions, which we need to now support in our plugin."}),"\n",(0,s.jsx)(n.h2,{id:"adding-support-for-conditional-decisions",children:"Adding support for conditional decisions"}),"\n",(0,s.jsx)(n.p,{children:"Install the missing module:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ yarn workspace @internal/plugin-todo-list-backend add zod\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Create a new ",(0,s.jsx)(n.code,{children:"plugins/todo-list-backend/src/service/rules.ts"})," file and append the following code:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:'title="plugins/todo-list-backend/src/service/rules.ts"',children:"import { makeCreatePermissionRule } from '@backstage/plugin-permission-node';\nimport { TODO_LIST_RESOURCE_TYPE } from '@internal/plugin-todo-list-common';\nimport { z } from 'zod';\nimport { Todo, TodoFilter } from './todos';\n\nexport const createTodoListPermissionRule = makeCreatePermissionRule<\n  Todo,\n  TodoFilter,\n  typeof TODO_LIST_RESOURCE_TYPE\n>();\n\nexport const isOwner = createTodoListPermissionRule({\n  name: 'IS_OWNER',\n  description: 'Should allow only if the todo belongs to the user',\n  resourceType: TODO_LIST_RESOURCE_TYPE,\n  paramsSchema: z.object({\n    userId: z.string().describe('User ID to match on the resource'),\n  }),\n  apply: (resource: Todo, { userId }) => {\n    return resource.author === userId;\n  },\n  toQuery: ({ userId }) => {\n    return {\n      property: 'author',\n      values: [userId],\n    };\n  },\n});\n\nexport const rules = { isOwner };\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"makeCreatePermissionRule"})," is a helper used to ensure that rules created for this plugin use consistent types for the resource and query."]}),"\n",(0,s.jsx)(n.admonition,{title:"Note",type:"note",children:(0,s.jsxs)(n.p,{children:["To support custom rules defined by Backstage integrators, you must export ",(0,s.jsx)(n.code,{children:"createTodoListPermissionRule"})," from the backend package and provide some way for custom rules to be passed in before the backend starts, likely via ",(0,s.jsx)(n.code,{children:"extension point"}),"."]})}),"\n",(0,s.jsxs)(n.p,{children:["We have created a new ",(0,s.jsx)(n.code,{children:"isOwner"})," rule, which is going to be automatically used by the permission framework whenever a conditional response is returned in response to an authorized request with an attached ",(0,s.jsx)(n.code,{children:"resourceRef"}),".\nSpecifically, the ",(0,s.jsx)(n.code,{children:"apply"})," function is used to understand whether the passed resource should be authorized or not."]}),"\n",(0,s.jsxs)(n.p,{children:["Let's skip the ",(0,s.jsx)(n.code,{children:"toQuery"})," function for now, we'll come back to that in the next section."]}),"\n",(0,s.jsxs)(n.p,{children:["Now, let's create the new endpoint by editing ",(0,s.jsx)(n.code,{children:"plugins/todo-list-backend/src/service/router.ts"}),". This uses the ",(0,s.jsx)(n.code,{children:"createPermissionIntegrationRouter"})," helper to add the APIs needed by the permission framework to your plugin. You'll need to supply:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"getResources"}),": a function that accepts an array of ",(0,s.jsx)(n.code,{children:"resourceRefs"})," in the same format you expect to be passed to ",(0,s.jsx)(n.code,{children:"authorize"}),", and returns an array of the corresponding resources."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"resourceType"}),": the same value used in the permission rule above."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"permissions"}),": the list of permissions that your plugin accepts."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"rules"}),": an array of all the permission rules you want to support in conditional decisions."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="plugins/todo-list-backend/src/service/router.ts"',children:"// ...\nimport {\n  /* highlight-add-next-line */\n  TODO_LIST_RESOURCE_TYPE,\n  todoListCreatePermission,\n  todoListUpdatePermission,\n} from '@internal/plugin-todo-list-common';\n/* highlight-remove-next-line */\nimport { add, getAll, update } from './todos';\n/* highlight-add-start */\nimport { add, getAll, getTodo, update } from './todos';\nimport { rules } from './rules';\n/* highlight-add-end */\n\nexport async function createRouter(\n  options: RouterOptions,\n): Promise<express.Router> {\n  const { logger, identity, permissions } = options;\n\n  const permissionIntegrationRouter = createPermissionIntegrationRouter({\n    permissions: [todoListCreatePermission, todoListUpdatePermission],\n    /* highlight-add-start */\n    getResources: async resourceRefs => {\n      return resourceRefs.map(getTodo);\n    },\n    resourceType: TODO_LIST_RESOURCE_TYPE,\n    rules: Object.values(rules),\n    /* highlight-add-end */\n  });\n\n  const router = Router();\n  router.use(express.json());\n\n  // ...\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"provide-utilities-for-policy-authors",children:"Provide utilities for policy authors"}),"\n",(0,s.jsx)(n.p,{children:"Now that we have a new resource type and a corresponding rule, we need to export some utilities for policy authors to reference them."}),"\n",(0,s.jsxs)(n.p,{children:["Create a new ",(0,s.jsx)(n.code,{children:"plugins/todo-list-backend/src/conditionExports.ts"})," file and add the following code:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:'title="plugins/todo-list-backend/src/conditionExports.ts"',children:"import { TODO_LIST_RESOURCE_TYPE } from '@internal/plugin-todo-list-common';\nimport { createConditionExports } from '@backstage/plugin-permission-node';\nimport { rules } from './service/rules';\n\nconst { conditions, createConditionalDecision } = createConditionExports({\n  pluginId: 'todolist',\n  resourceType: TODO_LIST_RESOURCE_TYPE,\n  rules,\n});\n\nexport const todoListConditions = conditions;\n\nexport const createTodoListConditionalDecision = createConditionalDecision;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Make sure ",(0,s.jsx)(n.code,{children:"todoListConditions"})," and ",(0,s.jsx)(n.code,{children:"createTodoListConditionalDecision"})," are exported from the ",(0,s.jsx)(n.code,{children:"todo-list-backend"})," package by editing ",(0,s.jsx)(n.code,{children:"plugins/todo-list-backend/src/index.ts"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="plugins/todo-list-backend/src/index.ts"',children:"export * from './service/router';\n/* highlight-add-next-line */\nexport * from './conditionExports';\nexport { exampleTodoListPlugin } from './plugin';\n"})}),"\n",(0,s.jsx)(n.h2,{id:"test-the-authorized-update-endpoint",children:"Test the authorized update endpoint"}),"\n",(0,s.jsxs)(n.p,{children:["Let's go back to the permission policy's handle function and try to authorize our new permission with an ",(0,s.jsx)(n.code,{children:"isOwner"})," condition."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="packages/backend/src/plugins/permission.ts"',children:"import {\n  IdentityClient\n} from '@backstage/plugin-auth-node';\nimport {\n  PermissionPolicy,\n  PolicyQuery,\n  PolicyQueryUser,\n} from '@backstage/plugin-permission-node';\nimport { isPermission } from '@backstage/plugin-permission-common';\n/* highlight-remove-next-line */\nimport { todoListCreatePermission } from '@internal/plugin-todo-list-common';\n/* highlight-add-start */\nimport {\n  todoListCreatePermission,\n  todoListUpdatePermission,\n} from '@internal/plugin-todo-list-common';\nimport {\n  todoListConditions,\n  createTodoListConditionalDecision,\n} from '@internal/plugin-todo-list-backend';\n/* highlight-add-end */\n\n\nasync handle(\n  request: PolicyQuery,\n  /* highlight-remove-next-line */\n  _user?: PolicyQueryUser,\n  /* highlight-add-next-line */\n  user?: PolicyQueryUser,\n): Promise<PolicyDecision> {\n  if (isPermission(request.permission, todoListCreatePermission)) {\n    return {\n      result: AuthorizeResult.ALLOW,\n    };\n  }\n  /* highlight-add-start */\n  if (isPermission(request.permission, todoListUpdatePermission)) {\n    return createTodoListConditionalDecision(\n      request.permission,\n      todoListConditions.isOwner({\n        userId: user?.info.userEntityRef ?? '',\n      }),\n    );\n  }\n  /* highlight-add-end */\n\n  return {\n    result: AuthorizeResult.ALLOW,\n  };\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["For any incoming update requests, we now return a ",(0,s.jsx)(n.em,{children:"Conditional Decision"}),". We are saying:"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Hey permission framework, I can't make a decision alone. Please go to the plugin with id ",(0,s.jsx)(n.code,{children:"todolist"})," and ask it to apply these conditions."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"To check that everything works as expected, you should now see an error in the UI whenever you try to edit an item that wasn\u2019t created by you. Success!"})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},675251:(e,n,i)=>{var s=i(667294),t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,d=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,i){var s,o={},c=null,l=null;for(s in void 0!==i&&(c=""+i),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(l=n.ref),n)r.call(n,s)&&!a.hasOwnProperty(s)&&(o[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===o[s]&&(o[s]=n[s]);return{$$typeof:t,type:e,key:c,ref:l,props:o,_owner:d.current}}n.Fragment=o,n.jsx=c,n.jsxs=c},785893:(e,n,i)=>{e.exports=i(675251)},511151:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>r});var s=i(667294);const t={},o=s.createContext(t);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);