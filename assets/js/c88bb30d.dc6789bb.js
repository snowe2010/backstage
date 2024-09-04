/*! For license information please see c88bb30d.dc6789bb.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[290442],{872855:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=t(785893),r=t(511151);const a={id:"enable-public-entry",title:"Enabling a public entry point",description:"A guide for how to experiment with public and protected Backstage app bundles"},o="Enable Public Entry (Experimental)",s={id:"tutorials/enable-public-entry",title:"Enabling a public entry point",description:"A guide for how to experiment with public and protected Backstage app bundles",source:"@site/versioned_docs/version-stable/tutorials/enable-public-entry.md",sourceDirName:"tutorials",slug:"/tutorials/enable-public-entry",permalink:"/docs/tutorials/enable-public-entry",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/tutorials/enable-public-entry.md",tags:[],version:"stable",frontMatter:{id:"enable-public-entry",title:"Enabling a public entry point",description:"A guide for how to experiment with public and protected Backstage app bundles"},sidebar:"docs",previous:{title:"Migrating to New Auth Services",permalink:"/docs/tutorials/auth-service-migration"},next:{title:"Setup OpenTelemetry",permalink:"/docs/tutorials/setup-opentelemetry"}},c={},l=[{value:"Requirements",id:"requirements",level:2},{value:"Step-by-step",id:"step-by-step",level:2},{value:"New Frontend System",id:"new-frontend-system",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"enable-public-entry-experimental",children:"Enable Public Entry (Experimental)"})}),"\n",(0,i.jsx)(n.p,{children:"In this tutorial, you will learn how to restrict access to your main Backstage app bundle to authenticated users only."}),"\n",(0,i.jsx)(n.p,{children:"It is expected that the protected bundle feature will be refined in future development iterations, but for now, here is a simplified explanation of how it works:"}),"\n",(0,i.jsx)(n.p,{children:"Your Backstage app bundle is split into two code entries:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Public entry point containing login pages;"}),"\n",(0,i.jsx)(n.li,{children:"There is also a protected main entry point that contains the code for what you see after signing in."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"With that, Backstage's cli and backend will detect public entry point and serve it to unauthenticated users, while serving the main, protected entry point only to authenticated users."}),"\n",(0,i.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The app needs to be served by the ",(0,i.jsx)(n.code,{children:"app-backend"})," plugin, or this won't work;"]}),"\n",(0,i.jsxs)(n.li,{children:["Also it will only work for those using ",(0,i.jsx)(n.code,{children:"backstage-cli"})," to build and serve their Backstage app."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"step-by-step",children:"Step-by-step"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Create a ",(0,i.jsx)(n.code,{children:"index-public-experimental.tsx"})," in your app ",(0,i.jsx)(n.code,{children:"src"})," folder."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"The filename is a convention, so it is not currently configurable."})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"This file is the public entry point for your application, and it should only contain what unauthenticated users should see:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:'title="in packages/app/src/index-public-experimental.tsx"',children:"import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport { createApp } from '@backstage/app-defaults';\nimport { AppRouter } from '@backstage/core-app-api';\nimport {\n  AlertDisplay,\n  OAuthRequestDialog,\n  SignInPage,\n} from '@backstage/core-components';\nimport {\n  configApiRef,\n  discoveryApiRef,\n  createApiFactory,\n} from '@backstage/core-plugin-api';\nimport { CookieAuthRedirect } from '@backstage/plugin-auth-react';\n\n// Notice that this is only setting up what is needed by the sign-in pages\nconst app = createApp({\n  // If you have any custom APIs that your sign-in page depends on, you need to add them here\n  apis: [],\n  components: {\n    SignInPage: props => {\n      return (\n        <SignInPage\n          {...props}\n          providers={['guest']}\n          title=\"Select a sign-in method\"\n        />\n      );\n    },\n  },\n});\n\nconst App = app.createRoot(\n  <>\n    <AlertDisplay transientTimeoutMs={2500} />\n    <OAuthRequestDialog />\n    <AppRouter>\n      {/* This component triggers an authenticated redirect to the main app, while staying on the same URL */}\n      <CookieAuthRedirect />\n    </AppRouter>\n  </>,\n);\n\nReactDOM.createRoot(document.getElementById('root')!).render(<App />);\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"The frontend will handle cookie refreshing automatically, so you don't have to worry about it."})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Let's verify that everything is working locally. From your project root folder, run the following commands to build the app and start the backend:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"# building the app package\nyarn workspace app start\n# starting the backend api\nyarn start-backend\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Visit ",(0,i.jsx)(n.a,{href:"http://localhost:7007",children:"http://localhost:7007"})," to see the public app and validate that the ",(0,i.jsx)(n.em,{children:"index.html"})," response only contains a minimal application."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Regular app serving will always serve protected apps without authenticating."})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Finally, as soon as you log in, you will be redirected to the main app home page (inspect the page and see that the protected bundle was served from the app backend after the redirect)."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"That's it!"}),"\n",(0,i.jsx)(n.h2,{id:"new-frontend-system",children:"New Frontend System"}),"\n",(0,i.jsxs)(n.p,{children:["If your app uses the new frontend system, you can still use the public entry point feature. The ",(0,i.jsx)(n.code,{children:"index-public-experimental.tsx"})," file does end up looking a bit different in this case:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:'title="in packages/app/src/index-public-experimental.tsx"',children:"import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport { CookieAuthRedirect } from '@backstage/plugin-auth-react';\nimport { createApp } from '@backstage/frontend-app-api';\nimport {\n  coreExtensionData,\n  createExtension,\n  createExtensionOverrides,\n  createSignInPageExtension,\n} from '@backstage/frontend-plugin-api';\n\nconst signInPage = createSignInPageExtension({\n  name: 'guest',\n  loader: async () => props => <SignInPage {...props} providers={['guest']} />,\n});\n\nconst authRedirectExtension = createExtension({\n  namespace: 'app',\n  name: 'layout',\n  attachTo: { id: 'app/root', input: 'children' },\n  output: {\n    element: coreExtensionData.reactElement,\n  },\n  factory: () => ({\n    element: <CookieAuthRedirect />,\n  }),\n});\n\nconst app = createApp({\n  features: [\n    createExtensionOverrides({\n      extensions: [signInPage, authRedirectExtension],\n    }),\n  ],\n});\n\nReactDOM.createRoot(document.getElementById('root')!).render(app.createRoot());\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},675251:(e,n,t)=>{var i=t(667294),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var i,a={},l=null,p=null;for(i in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(p=n.ref),n)o.call(n,i)&&!c.hasOwnProperty(i)&&(a[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===a[i]&&(a[i]=n[i]);return{$$typeof:r,type:e,key:l,ref:p,props:a,_owner:s.current}}n.Fragment=a,n.jsx=l,n.jsxs=l},785893:(e,n,t)=>{e.exports=t(675251)},511151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>o});var i=t(667294);const r={},a=i.createContext(r);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);