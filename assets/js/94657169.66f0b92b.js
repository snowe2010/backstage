/*! For license information please see 94657169.66f0b92b.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[600259],{115128:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(785893),o=n(511151);const r={id:"routes",title:"Frontend Routes",sidebar_label:"Routes",description:"Frontend routes"},i=void 0,s={id:"frontend-system/architecture/routes",title:"Frontend Routes",description:"Frontend routes",source:"@site/versioned_docs/version-stable/frontend-system/architecture/36-routes.md",sourceDirName:"frontend-system/architecture",slug:"/frontend-system/architecture/routes",permalink:"/docs/frontend-system/architecture/routes",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/frontend-system/architecture/36-routes.md",tags:[],version:"stable",sidebarPosition:36,frontMatter:{id:"routes",title:"Frontend Routes",sidebar_label:"Routes",description:"Frontend routes"},sidebar:"docs",previous:{title:"Utility APIs",permalink:"/docs/frontend-system/architecture/utility-apis"},next:{title:"Naming Patterns",permalink:"/docs/frontend-system/architecture/naming-patterns"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Route References",id:"route-references",level:2},{value:"Creating a Route Reference",id:"creating-a-route-reference",level:3},{value:"Providing Route References to Plugins",id:"providing-route-references-to-plugins",level:3},{value:"Defining References with Path Parameters",id:"defining-references-with-path-parameters",level:3},{value:"Using a Route Reference",id:"using-a-route-reference",level:3},{value:"External Route References",id:"external-route-references",level:2},{value:"Binding External Route References",id:"binding-external-route-references",level:3},{value:"Default Targets for External Route References",id:"default-targets-for-external-route-references",level:3},{value:"Sub Route References",id:"sub-route-references",level:2}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"NOTE: The new frontend system is in alpha and is only supported by a small number of plugins."})}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsx)(t.p,{children:"Each Backstage plugin is an isolated piece of functionality that doesn't typically communicate directly with other plugins. In order to achieve this, there are many parts of the frontend system that provide a layer of indirection for cross-plugin communication, and the routing system is one of them."}),"\n",(0,a.jsx)(t.p,{children:"The Backstage routing system makes it possible to implement navigation across plugin boundaries, without each individual plugin knowing the concrete path or location of other plugins in the routing hierarchy, or even its own. This is achieved through the concept of route references, which are opaque reference values that can be shared and used to create concrete links to different parts of an app. The route ref paths can be configured both at plugin level (by plugin developers) and at the app level (by integrators). It is up to plugin developers to create route references for any page content in their plugin that they want it to be possible to link to or from."}),"\n",(0,a.jsx)(t.h2,{id:"route-references",children:"Route References"}),"\n",(0,a.jsxs)(t.p,{children:["Plugin developers create a ",(0,a.jsx)(t.code,{children:"RouteRef"})," to expose a path in Backstage's routing system. You will see below how routes are defined programmatically, but before diving into code, let us explain how to configure them at the app level. In spite of the fact that plugin developers choose a default route path for the routes their plugin provides, paths are configurable, so app integrators can set a custom path to a route whenever they like to (more information in the following sections)."]}),"\n",(0,a.jsx)(t.p,{children:"There are three types of route references: regular route, sub route, and external route, and we will cover both the concept and code definition for each."}),"\n",(0,a.jsx)(t.h3,{id:"creating-a-route-reference",children:"Creating a Route Reference"}),"\n",(0,a.jsx)(t.p,{children:'Route references, also known as "absolute" or "regular" routes, are created as follows:'}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",metastring:'title="plugins/catalog/src/routes.ts"',children:"import { createRouteRef } from '@backstage/frontend-plugin-api';\n\n// Creates a route reference, which is not yet associated with any plugin page\nexport const indexRouteRef = createRouteRef();\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Note that you often want to create the route references themselves in a different file than the one that creates the plugin instance, for example a top-level ",(0,a.jsx)(t.code,{children:"routes.ts"}),". This is to avoid circular imports when you use the route references from other parts of the same plugin."]}),"\n",(0,a.jsx)(t.p,{children:"Route refs do not have any behavior themselves. They are an opaque value that represents route targets in an app, which are bound to specific paths at runtime. Their role is to provide a level of indirection to help link together different pages that otherwise wouldn't know how to route to each other."}),"\n",(0,a.jsx)(t.h3,{id:"providing-route-references-to-plugins",children:"Providing Route References to Plugins"}),"\n",(0,a.jsx)(t.p,{children:"The code snippet in the previous section does not indicate which plugin the route belongs to. To do so, you have to use it in the creation of any kind of routable extension, such as a page extension:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",metastring:'title="plugins/catalog/src/plugin.tsx"',children:"import React from 'react';\nimport {\n  createFrontendPlugin,\n  createPageExtension,\n} from '@backstage/frontend-plugin-api';\nimport { indexRouteRef } from './routes';\n\nconst catalogIndexPage = createPageExtension({\n  // The `name` option is omitted because this is an index page\n  defaultPath: '/entities',\n  // highlight-next-line\n  routeRef: indexRouteRef,\n  loader: () => import('./components').then(m => <m.IndexPage />),\n});\n\nexport default createFrontendPlugin({\n  id: 'catalog',\n  // highlight-start\n  routes: {\n    index: indexRouteRef,\n  },\n  // highlight-end\n  extensions: [catalogIndexPage],\n});\n"})}),"\n",(0,a.jsxs)(t.p,{children:["In the example above we associated the ",(0,a.jsx)(t.code,{children:"indexRouteRef"})," with the ",(0,a.jsx)(t.code,{children:"catalogIndexPage"})," extension and provided both the route ref and page via the Catalog plugin. So, when this plugin is installed in the app, the index page will become associated with the newly created ",(0,a.jsx)(t.code,{children:"RouteRef"}),", making it possible to use the route ref to navigate the page extension."]}),"\n",(0,a.jsxs)(t.p,{children:["It may seem unclear why we configure the ",(0,a.jsx)(t.code,{children:"routes"})," option when creating a plugin as the route has already been passed to the extension. We do that to make it possible for other plugins to route to our page, which is explained in detail in the ",(0,a.jsx)(t.a,{href:"#binding-external-route-references",children:"binding routes"})," section."]}),"\n",(0,a.jsx)(t.h3,{id:"defining-references-with-path-parameters",children:"Defining References with Path Parameters"}),"\n",(0,a.jsxs)(t.p,{children:["Route references optionally accept a ",(0,a.jsx)(t.code,{children:"params"})," option, which will require the listed parameter names to be present in the route path. Here is how you create a reference for a route that requires a ",(0,a.jsx)(t.code,{children:"kind"}),", ",(0,a.jsx)(t.code,{children:"namespace"})," and ",(0,a.jsx)(t.code,{children:"name"})," parameters, like in this path ",(0,a.jsx)(t.code,{children:"/entities/:kind/:namespace/:name"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",metastring:'title="plugins/catalog/src/routes.ts"',children:"import { createRouteRef } from '@backstage/frontend-plugin-api';\n\nexport const detailsRouteRef = createRouteRef({\n  // The parameters that must be included in the path of this route reference\n  // highlight-next-line\n  params: ['kind', 'namespace', 'name'],\n});\n"})}),"\n",(0,a.jsx)(t.h3,{id:"using-a-route-reference",children:"Using a Route Reference"}),"\n",(0,a.jsxs)(t.p,{children:["Route references can be used to link to page in the same plugin, or to pages in different plugins. In this section we will cover the first scenario. If you are interested in linking to a page of a different plugin, please go to the ",(0,a.jsx)(t.a,{href:"#external-route-references",children:"external routes"})," section below."]}),"\n",(0,a.jsx)(t.p,{children:'Suppose we are creating a plugin that renders a Catalog index page with a link to a "Foo" component details page. Here is the code for the index page:'}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",metastring:'title="plugins/catalog/src/components/IndexPage.tsx"',children:"import React from 'react';\nimport { useRouteRef } from '@backstage/frontend-plugin-api';\nimport { detailsRouteRef } from '../routes';\n\nexport const IndexPage = () => {\n  // highlight-next-line\n  const getDetailsPath = useRouteRef(detailsRouteRef);\n  return (\n    <div>\n      <h1>Index Page</h1>\n      {/* highlight-next-line */}\n      {getDetailsPath && (\n        <a\n          {/* highlight-start */}\n          href={getDetailsPath({\n            kind: 'component',\n            namespace: 'default',\n            name: 'foo',\n          })}\n          {/* highlight-end */}\n        >\n          See \"Foo\" details\n        </a>\n      )}\n    </div>\n  );\n};\n"})}),"\n",(0,a.jsxs)(t.p,{children:["We use the ",(0,a.jsx)(t.code,{children:"useRouteRef"})," hook to create a link generator function that returns the details page path. First we need to check whether the route is available, the link generator function will be ",(0,a.jsx)(t.code,{children:"undefined"}),' if it isn\'t. We then call the link generator, passing it an object with the kind, namespace, and name. These parameters are used to construct a concrete path to the "Foo" details page.']}),"\n",(0,a.jsx)(t.p,{children:"Let's see how the details page can get the parameters from the URL:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",metastring:'title="plugins/catalog/src/components/DetailsPage.tsx"',children:"import React from 'react';\nimport { useRouteRefParams } from '@backstage/frontend-plugin-api';\nimport { detailsRouteRef } from '../routes';\n\nexport const DetailsPage = () => {\n  // highlight-next-line\n  const params = useRouteRefParams(detailsRouteRef);\n  return (\n    <div>\n      <h1>Details Page</h1>\n      <ul>\n        {/* highlight-start */}\n        <li>Kind: {params.kind}</li>\n        <li>Namespace: {params.namespace}</li>\n        <li>Name: {params.name}</li>\n        {/* highlight-end */}\n      </ul>\n    </div>\n  );\n};\n"})}),"\n",(0,a.jsxs)(t.p,{children:["In the code above, we are using the ",(0,a.jsx)(t.code,{children:"useRouteRefParams"})," hook to retrieve the entity-composed id from the URL. The parameter object contains three values: kind, namespace, and name. We can display these values or call an API using them."]}),"\n",(0,a.jsx)(t.p,{children:"Since we are linking to pages of the same package, we are using a route ref directly. However, in the following sections, you will see how to link to pages of different plugins."}),"\n",(0,a.jsx)(t.h2,{id:"external-route-references",children:"External Route References"}),"\n",(0,a.jsx)(t.p,{children:"External routes are made for linking to a page of an external plugin.\nFor this section example, let's assume that we want to link from the Catalog entities list page to the Scaffolder create component page."}),"\n",(0,a.jsxs)(t.p,{children:["We don't want to reference the Scaffolder plugin directly, since that would create an unnecessary dependency. It would also provide little flexibility in allowing the app to tie plugins together, with the links instead being dictated by the plugins themselves. To solve this, we use an ",(0,a.jsx)(t.code,{children:"ExternalRouteRef"}),". Much like regular route references, they can be passed to ",(0,a.jsx)(t.code,{children:"useRouteRef"})," to create concrete URLs, but they can not be used in page extensions and instead have to be associated with a target route using route bindings in the app."]}),"\n",(0,a.jsxs)(t.p,{children:["We create a new ",(0,a.jsx)(t.code,{children:"RouteRef"})," inside the Scaffolder plugin, using a neutral name that describes its role in the plugin rather than a specific plugin page that it might be linking to, allowing the app to decide the final target. If the Catalog entity list page for example wants to link the Scaffolder create component page in the header, it might declare an ",(0,a.jsx)(t.code,{children:"ExternalRouteRef"})," similar to this:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",metastring:'title="plugins/catalog/src/routes.ts"',children:"import { createExternalRouteRef } from '@backstage/frontend-plugin-api';\n\nexport const createComponentExternalRouteRef = createExternalRouteRef();\n"})}),"\n",(0,a.jsx)(t.p,{children:"External routes are also used in a similar way as regular routes:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",metastring:'title="plugins/catalog/src/components/IndexPage.tsx"',children:"import React from 'react';\nimport { useRouteRef } from '@backstage/frontend-plugin-api';\nimport { createComponentExternalRouteRef } from '../routes';\n\nexport const IndexPage = () => {\n  // highlight-next-line\n  const getCreateComponentPath = useRouteRef(createComponentExternalRouteRef);\n  return (\n    <div>\n      <h1>Index Page</h1>\n      {/* highlight-start */}\n      {getCreateComponentPath && (\n        <a href={getCreateComponentPath()}>Create Component</a>\n      )}\n      {/* highlight-end */}\n    </div>\n  );\n};\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Given the above binding, using ",(0,a.jsx)(t.code,{children:"useRouteRef(createComponentExternalRouteRef)"})," within the Catalog plugin will let us create a link to whatever path the Scaffolder create component page is mounted at. Note that there is no direct dependency between the Catalog plugin and Scaffolder, that is, we are not importing the ",(0,a.jsx)(t.code,{children:"createComponentExternalRouteRef"})," from the Scaffolder package."]}),"\n",(0,a.jsx)(t.p,{children:"Now the only thing left is to provide the page and external route via a plugin:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",metastring:'title="plugins/catalog/src/plugin.tsx"',children:"import React from 'react';\nimport {\n  createFrontendPlugin,\n  createPageExtension,\n  useRouteRef,\n} from '@backstage/frontend-plugin-api';\nimport { indexRouteRef, createComponentExternalRouteRef } from './routes';\n\nconst catalogIndexPage = createPageExtension({\n  defaultPath: '/entities',\n  routeRef: indexRouteRef,\n  loader: () => import('./components').then(m => <m.IndexPage />),\n});\n\nexport default createFrontendPlugin({\n  id: 'catalog',\n  routes: {\n    index: indexRouteRef,\n  },\n  // highlight-start\n  externalRoutes: {\n    createComponent: createComponentExternalRouteRef,\n  },\n  extensions: [catalogIndexPage],\n  // highlight-end\n});\n"})}),"\n",(0,a.jsx)(t.p,{children:"External routes can also have parameters. For example, if you want to link to an entity's details page from Scaffolder, you'll need to create an external route that receives the same parameters the Catalog details page expects:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",metastring:'title="plugins/scaffolder/src/routes.ts"',children:"import { createExternalRouteRef } from '@backstage/frontend-plugin-api';\n\nexport const entityDetailsExternalRouteRef = createExternalRouteRef({\n  // highlight-next-line\n  params: ['kind', 'namespace', 'name'],\n});\n"})}),"\n",(0,a.jsx)(t.p,{children:"Now let's move on and configure the app to resolve these external routes, so that the Scaffolder links to the Catalog entity page, and the Catalog links to the Scaffolder page."}),"\n",(0,a.jsx)(t.h3,{id:"binding-external-route-references",children:"Binding External Route References"}),"\n",(0,a.jsxs)(t.p,{children:["The association of external routes is controlled by the app. Each ",(0,a.jsx)(t.code,{children:"ExternalRouteRef"})," of a plugin should be bound to an actual ",(0,a.jsx)(t.code,{children:"RouteRef"}),", usually from another plugin. The binding process happens once at app startup, and is then used through the lifetime of the app to help resolve concrete route paths."]}),"\n",(0,a.jsx)(t.p,{children:"Using the above example of the Catalog entities list page to the Scaffolder create component page, we might do something like this in the app configuration file:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",metastring:'title="app-config.yaml"',children:"app:\n  routes:\n    bindings:\n      # point to the Scaffolder create component page when the Catalog create component ref is used\n      # highlight-next-line\n      catalog.createComponent: scaffolder.index\n      # point to the Catalog details page when the Scaffolder component details ref is used\n      # highlight-next-line\n      scaffolder.componentDetails: catalog.details\n"})}),"\n",(0,a.jsxs)(t.p,{children:["We also have the ability to express this in code as an option to ",(0,a.jsx)(t.code,{children:"createApp"}),", but you of course only need to use one of these two methods:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",metastring:'title="packages/app/src/App.tsx"',children:"import { createApp } from '@backstage/frontend-app-api';\nimport catalog from '@backstage/plugin-catalog';\nimport scaffolder from '@backstage/plugin-scaffolder';\n\nconst app = createApp({\n  // highlight-start\n  bindRoutes({ bind }) {\n    bind(catalog.externalRoutes, {\n      createComponent: scaffolder.routes.createComponent,\n    });\n    bind(scaffolder.externalRoutes, {\n      componentDetails: catalog.routes.details,\n    });\n  },\n  // highlight-end\n});\n\nexport default app.createRoot();\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Note that we are not importing and using the ",(0,a.jsx)(t.code,{children:"RouteRef"}),"s directly in the app, and instead rely on the plugin instance to access routes of the plugins. This provides better namespacing and discoverability of routes, as well as reduce the number of separate exports from each plugin package."]}),"\n",(0,a.jsx)(t.p,{children:"Another thing to note is that this indirection in the routing is particularly useful for open source plugins that need to provide flexibility in how they are integrated. For plugins that you build internally for your own Backstage application, you can choose to use direct imports or even concrete route path strings directly. Although there can be some benefits to using the full routing system even in internal plugins: it can help you structure your routes, and as you will see further down it also helps you manage route parameters."}),"\n",(0,a.jsx)(t.h3,{id:"default-targets-for-external-route-references",children:"Default Targets for External Route References"}),"\n",(0,a.jsx)(t.p,{children:"It is possible to define a default target for an external route reference, potentially removing the need to bind the route in the app. This reduces the need for configuration when installing new plugins through providing a sensible default. It is of course still possible to override the route binding in the app."}),"\n",(0,a.jsx)(t.p,{children:"The default target uses the same syntax as the route binding configuration, and will only be used if the target plugin and route exist. For example, this is how the catalog can define a default target for the create component external route in a way that removes the need for the binding in the previous example:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",metastring:'title="plugins/catalog/src/routes.ts"',children:"import { createExternalRouteRef } from '@backstage/frontend-plugin-api';\n\nexport const createComponentExternalRouteRef = createExternalRouteRef({\n  // highlight-next-line\n  defaultTarget: 'scaffolder.createComponent',\n});\n"})}),"\n",(0,a.jsx)(t.h2,{id:"sub-route-references",children:"Sub Route References"}),"\n",(0,a.jsxs)(t.p,{children:["The last kind of route ref that can be created is a ",(0,a.jsx)(t.code,{children:"SubRouteRef"}),", which can be used to create a route ref with a fixed path relative to an absolute ",(0,a.jsx)(t.code,{children:"RouteRef"}),". They are useful if you have a page that internally is mounted at a sub route of a page extension component, and you want other plugins to be able to route to that page. And they can be a useful utility to handle routing within a plugin itself as well."]}),"\n",(0,a.jsx)(t.p,{children:"For example:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",metastring:'title ="plugins/catalog/src/routes.ts"',children:"import {\n  createRouteRef,\n  createSubRouteRef,\n} from '@backstage/frontend-plugin-api';\n\nexport const indexRouteRef = createRouteRef();\n// highlight-start\nexport const detailsSubRouteRef = createSubRouteRef({\n  parent: indexRouteRef,\n  path: '/details',\n});\n// highlight-end\n"})}),"\n",(0,a.jsx)(t.p,{children:"There are substantial differences between creating subroutes and regular or external routes because subroutes are associated with regular routes, and the sub route path must be specified. The path string must include the parameters if this sub route has them:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",metastring:'title ="plugins/catalog/src/routes.ts"',children:"// Omitting rest of the previous example file\nexport const detailsSubRouteRef = createSubRouteRef({\n  parent: indexRouteRef,\n  // highlight-next-line\n  path: '/:name/:namespace/:kind',\n});\n"})}),"\n",(0,a.jsx)(t.p,{children:"Using subroutes in a page extension is as simple as this:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",metastring:'title="plugins/catalog/src/components/IndexPage.tsx"',children:"import React from 'react';\nimport { Routes, Route, useLocation } from 'react-router-dom';\nimport { useRouteRef } from '@backstage/frontend-plugin-api';\nimport { indexRouteRef, detailsSubRouteRef } from '../routes';\nimport { DetailsPage } from './DetailsPage';\n\nexport const IndexPage = () => {\n  const { pathname } = useLocation();\n\n  // highlight-start\n  const getIndexPath = useRouteRef(indexRouteRef);\n  const getDetailsPath = useRouteRef(detailsSubRouteRef);\n  // highlight-end\n\n  return (\n    <div>\n      <h1>Index Page</h1>\n      {/* Linking to the details sub route */}\n      {/* highlight-start */}\n      {pathname === getIndexPath?.() ? (\n        <a\n          {/* Setting the details sub route params */}\n          href={getDetailsPath?.({\n            kind: 'component',\n            namespace: 'default',\n            name: 'foo',\n          })}\n        >\n          Show details\n        </a>\n        {/* highlight-end */}\n      ) : (\n        {/* highlight-next-line */}\n        <a href={getIndexPath?.()}>Hide details</a>\n      )}\n      {/* Registering the details sub route */}\n      <Routes>\n        {/* highlight-next-line */}\n        <Route path={detailsSubRouteRef.path} element={<DetailsPage />} />\n      </Routes>\n    </div>\n  );\n};\n"})}),"\n",(0,a.jsx)(t.p,{children:"This is how you can get the parameters of a sub route URL:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",metastring:'title="plugins/catalog/src/components/DetailsPage.tsx"',children:"import React from 'react';\nimport { useParams } from 'react-router-dom';\n\nexport const DetailsPage = () => {\n  // highlight-next-line\n  const params = useParams();\n  return (\n    <div>\n      <h1>Details Sub Page</h1>\n      <ul>\n        {/* highlight-start */}\n        <li>Kind: {params.kind}</li>\n        <li>Namespace: {params.namespace}</li>\n        <li>Name: {params.name}</li>\n        {/* highlight-end */}\n      </ul>\n    </div>\n  );\n};\n"})}),"\n",(0,a.jsx)(t.p,{children:"Finally, see how a plugin can provide subroutes:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",metastring:'title="plugins/catalog/src/plugin.tsx"',children:"import React from 'react';\nimport {\n  createFrontendPlugin,\n  createPageExtension,\n} from '@backstage/frontend-plugin-api';\nimport { indexRouteRef, detailsSubRouteRef } from './routes';\n\nconst catalogIndexPage = createPageExtension({\n  defaultPath: '/entities',\n  routeRef: indexRouteRef,\n  loader: () => import('./components').then(m => <m.IndexPage />),\n});\n\nexport default createFrontendPlugin({\n  id: 'catalog',\n  routes: {\n    index: indexRouteRef,\n    // highlight-next-line\n    details: detailsSubRouteRef,\n  },\n  extensions: [catalogIndexPage],\n});\n"})})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},675251:(e,t,n)=>{var a=n(667294),o=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var a,r={},c=null,h=null;for(a in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(h=t.ref),t)i.call(t,a)&&!l.hasOwnProperty(a)&&(r[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===r[a]&&(r[a]=t[a]);return{$$typeof:o,type:e,key:c,ref:h,props:r,_owner:s.current}}t.Fragment=r,t.jsx=c,t.jsxs=c},785893:(e,t,n)=>{e.exports=n(675251)},511151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>i});var a=n(667294);const o={},r=a.createContext(o);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);