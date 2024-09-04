/*! For license information please see 9c8b3097.05333b44.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[711906],{285046:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=t(785893),a=t(511151);const o={id:"plugins",title:"Frontend Plugins",sidebar_label:"Plugins",description:"Frontend plugins"},s=void 0,r={id:"frontend-system/architecture/plugins",title:"Frontend Plugins",description:"Frontend plugins",source:"@site/versioned_docs/version-stable/frontend-system/architecture/15-plugins.md",sourceDirName:"frontend-system/architecture",slug:"/frontend-system/architecture/plugins",permalink:"/docs/frontend-system/architecture/plugins",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/frontend-system/architecture/15-plugins.md",tags:[],version:"stable",sidebarPosition:15,frontMatter:{id:"plugins",title:"Frontend Plugins",sidebar_label:"Plugins",description:"Frontend plugins"},sidebar:"docs",previous:{title:"App",permalink:"/docs/frontend-system/architecture/app"},next:{title:"Extensions",permalink:"/docs/frontend-system/architecture/extensions"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Creating a Plugin",id:"creating-a-plugin",level:2},{value:"<code>pluginId</code> option",id:"pluginid-option",level:3},{value:"<code>extensions</code> option",id:"extensions-option",level:3},{value:"<code>routes</code> and <code>externalRoutes</code> options",id:"routes-and-externalroutes-options",level:3},{value:"<code>featureFlags</code> option",id:"featureflags-option",level:3},{value:"Installing a Plugin in an App",id:"installing-a-plugin-in-an-app",level:2},{value:"Overriding a Plugin",id:"overriding-a-plugin",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"NOTE: The new frontend system is in alpha and is only supported by a small number of plugins."})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(n.p,{children:"Frontend plugins are a foundational building block in Backstage and the frontend system. They are used to encapsulate and provide functionality for a Backstage app, such as new pages, navigational elements, and APIs; as well as extensions and features for other plugins, such as entity page cards and content for the Software Catalog, or result list items for the search plugin."}),"\n",(0,i.jsxs)(n.p,{children:["Each plugin is typically shipped in a separate NPM package, whether that's a published package, or just in the local workspace. The plugin instance should always the ",(0,i.jsx)(n.code,{children:"default"})," export of the package, either via the main entry-point or the ",(0,i.jsx)(n.code,{children:"/alpha"})," sub-path export. Each plugin package is limited to exporting a single plugin instance. In a local workspace you could use a different structure if preferred, but this is considered a non-standard layout and should be avoided in published packages."]}),"\n",(0,i.jsx)(n.h2,{id:"creating-a-plugin",children:"Creating a Plugin"}),"\n",(0,i.jsxs)(n.p,{children:["Frontend plugin instances are created with the ",(0,i.jsx)(n.code,{children:"createFrontendPlugin"})," function, which is provided by the ",(0,i.jsx)(n.code,{children:"@backstage/frontend-plugin-api"})," package. It takes a single options object that provides all of the necessary configuration for the plugin. In particular you will want to provide ",(0,i.jsx)(n.a,{href:"/docs/frontend-system/architecture/extensions",children:"extensions"})," for your plugin, as that is the way that you can provide new functionality to the app."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"// This creates a new extension, see \"Extension Blueprints\" documentation for more details\nconst myPage = PageBlueprint.make({\n  params: {\n    defaultPath: '/my-page',\n    loader: () => import('./MyPage').then(m => <m.MyPage />),\n  },\n});\n\nexport default createFrontendPlugin({\n  id: 'my-plugin',\n  extensions: [myPage],\n});\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"pluginid-option",children:[(0,i.jsx)(n.code,{children:"pluginId"})," option"]}),"\n",(0,i.jsx)(n.p,{children:"Each plugin needs an ID, which is used to uniquely identify the plugin within an entire Backstage system. The ID does not have to be globally unique across all of the NPM ecosystem, although you generally want to strive for that. It is not possible to install multiple plugins with the same ID in a single Backstage app."}),"\n",(0,i.jsxs)(n.p,{children:["The plugin ID should generally be part of the of the package name and use kebab-case. See both the ",(0,i.jsx)(n.a,{href:"/docs/frontend-system/architecture/naming-patterns",children:"frontend naming patterns section"}),", as well as the ",(0,i.jsx)(n.a,{href:"/docs/tooling/package-metadata#name",children:"package metadata section"})," for more information."]}),"\n",(0,i.jsxs)(n.h3,{id:"extensions-option",children:[(0,i.jsx)(n.code,{children:"extensions"})," option"]}),"\n",(0,i.jsxs)(n.p,{children:["These are the ",(0,i.jsx)(n.a,{href:"/docs/frontend-system/architecture/extensions",children:"extensions"})," that the plugin provides to the app. Note that you should not export any of these extensions separately from the plugin package, as they can already by accessed via the ",(0,i.jsx)(n.code,{children:"getExtension"})," method of the plugin instance using the extension ID."]}),"\n",(0,i.jsxs)(n.p,{children:["The extensions that you provide to a plugin will have their ",(0,i.jsx)(n.code,{children:"namespace"})," set to the plugin ID by default. For example, if you create an extension using the ",(0,i.jsx)(n.code,{children:"PageBlueprint"})," without any particular naming options and install that via a plugin with the ID ",(0,i.jsx)(n.code,{children:"my-plugin"}),", the final extension ID will be ",(0,i.jsx)(n.code,{children:"page:my-plugin"}),". You can read more about how this works in the ",(0,i.jsx)(n.a,{href:"/docs/frontend-system/architecture/extensions#extension-structure",children:"extension structure documentation"}),"."]}),"\n",(0,i.jsxs)(n.h3,{id:"routes-and-externalroutes-options",children:[(0,i.jsx)(n.code,{children:"routes"})," and ",(0,i.jsx)(n.code,{children:"externalRoutes"})," options"]}),"\n",(0,i.jsxs)(n.p,{children:["These are the routes that the plugin exposes to the app. The ",(0,i.jsx)(n.code,{children:"routes"})," option declares all of the target routes that your plugin provides, i.e. routes that other plugins link to. The ",(0,i.jsx)(n.code,{children:"externalRoutes"})," option instead declares all the outgoing routes, i.e. routes that your plugins links to, which you can bind to the ",(0,i.jsx)(n.code,{children:"routes"})," of other plugins. See the ",(0,i.jsx)(n.a,{href:"/docs/frontend-system/architecture/routes",children:"routes documentation"})," for more information how to set up cross-plugin navigation."]}),"\n",(0,i.jsxs)(n.h3,{id:"featureflags-option",children:[(0,i.jsx)(n.code,{children:"featureFlags"})," option"]}),"\n",(0,i.jsxs)(n.p,{children:["This is a list of feature flag declarations that your plugin provides to the app. This makes sure that the feature flags are correctly registered and can be toggled in the app. To read a feature flag you can use the feature flags ",(0,i.jsx)(n.a,{href:"/docs/frontend-system/architecture/utility-apis",children:"Utility API"}),", accessible via ",(0,i.jsx)(n.code,{children:"featureFlagsApiRef"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"installing-a-plugin-in-an-app",children:"Installing a Plugin in an App"}),"\n",(0,i.jsxs)(n.p,{children:["A plugin instance is considered a frontend feature and can be installed directly in any Backstage frontend app. See the ",(0,i.jsx)(n.a,{href:"/docs/frontend-system/architecture/app",children:"app documentation"})," for more information about the different ways in which you can install new features in an app."]}),"\n",(0,i.jsx)(n.h2,{id:"overriding-a-plugin",children:"Overriding a Plugin"}),"\n",(0,i.jsxs)(n.p,{children:["A plugin might not always behave exactly the way you want. It could be that you want to remove particular extensions, decorate them a bit, replace them with your own, or simply add new ones. Regardless of your exact use-case, you can use the ",(0,i.jsx)(n.code,{children:"plugin.withOverrides"})," method to create a new copy of the plugin with the desired changes. When doing so you can also access the original extensions provided by the plugin, and use the ",(0,i.jsx)(n.a,{href:"/docs/frontend-system/architecture/extension-overrides",children:"extension override"})," API to make changes to individual extensions:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import plugin from '@backstage/plugin-catalog';\n\nexport default plugin.withOverrides({\n  // These overrides are merged with the original extensions\n  extensions: [\n    // Override the catalog nav item to use a custom icon\n    plugin.getExtension('nav-item:catalog').override({\n      factory: origFactory => [\n        NavItemBlueprint.dataRefs.target({\n          ...origFactory().get(NavItemBlueprint.dataRefs.target),\n          icon: CustomCatalogIcon,\n        }),\n      ],\n    }),\n    // Override the catalog index page with a completely custom implementation\n    PageBlueprint.make({\n      params: {\n        defaultPath: '/catalog',\n        routeRef: plugin.routes.catalogIndex,\n        loader: () => import('./CustomCatalogIndexPage').then(m => <m.Page />),\n      },\n    }),\n  ],\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You can keep the plugin override in your app package, but it can often be a good idea to separate it out into its own package, especially if the overrides are complex or you want distinct ownership of the override. For example, if you are overriding the ",(0,i.jsx)(n.code,{children:"@backstage/plugin-catalog"})," plugin, you might create a new package called ",(0,i.jsx)(n.code,{children:"@internal/plugin-catalog"})," at ",(0,i.jsx)(n.code,{children:"plugins/catalog"})," in your workspace, which exports the overridden plugin instance."]})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},675251:(e,n,t)=>{var i=t(667294),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,r=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var i,o={},c=null,d=null;for(i in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)s.call(n,i)&&!l.hasOwnProperty(i)&&(o[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===o[i]&&(o[i]=n[i]);return{$$typeof:a,type:e,key:c,ref:d,props:o,_owner:r.current}}n.Fragment=o,n.jsx=c,n.jsxs=c},785893:(e,n,t)=>{e.exports=t(675251)},511151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var i=t(667294);const a={},o=i.createContext(a);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);