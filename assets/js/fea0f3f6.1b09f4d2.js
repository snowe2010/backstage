/*! For license information please see fea0f3f6.1b09f4d2.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[812426],{262280:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var i=t(785893),r=t(511151);const a={id:"provider",title:"Atlassian Authentication Provider",sidebar_label:"Atlassian",description:"Adding Atlassian as an authentication provider in Backstage"},s=void 0,o={id:"auth/atlassian/provider",title:"Atlassian Authentication Provider",description:"Adding Atlassian as an authentication provider in Backstage",source:"@site/../docs/auth/atlassian/provider.md",sourceDirName:"auth/atlassian",slug:"/auth/atlassian/provider",permalink:"/docs/next/auth/atlassian/provider",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/auth/atlassian/provider.md",tags:[],version:"current",frontMatter:{id:"provider",title:"Atlassian Authentication Provider",sidebar_label:"Atlassian",description:"Adding Atlassian as an authentication provider in Backstage"},sidebar:"docs",previous:{title:"Auth0",permalink:"/docs/next/auth/auth0/provider"},next:{title:"AWS ALB",permalink:"/docs/next/auth/aws-alb/provider"}},d={},l=[{value:"Create an OAuth 2.0 (3LO) app in the Atlassian developer console",id:"create-an-oauth-20-3lo-app-in-the-atlassian-developer-console",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Resolvers",id:"resolvers",level:3},{value:"Backend Installation",id:"backend-installation",level:2},{value:"Adding the provider to the Backstage frontend",id:"adding-the-provider-to-the-backstage-frontend",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["The Backstage ",(0,i.jsx)(n.code,{children:"core-plugin-api"})," package comes with an Atlassian authentication\nprovider that can authenticate users using Atlassian products. This auth\n",(0,i.jsx)(n.strong,{children:"only"})," provides scopes for the following APIs:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Confluence API"}),"\n",(0,i.jsx)(n.li,{children:"User REST API"}),"\n",(0,i.jsx)(n.li,{children:"Jira platform REST API"}),"\n",(0,i.jsx)(n.li,{children:"Jira Service Desk API"}),"\n",(0,i.jsx)(n.li,{children:"Personal data reporting API"}),"\n",(0,i.jsx)(n.li,{children:"User identity API"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"create-an-oauth-20-3lo-app-in-the-atlassian-developer-console",children:"Create an OAuth 2.0 (3LO) app in the Atlassian developer console"}),"\n",(0,i.jsx)(n.p,{children:"To add Atlassian authentication, you must create an OAuth 2.0 (3LO) app."}),"\n",(0,i.jsxs)(n.p,{children:["Go to ",(0,i.jsx)(n.code,{children:"https://developer.atlassian.com/console/myapps/"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Click on the drop down ",(0,i.jsx)(n.code,{children:"Create"}),", and choose ",(0,i.jsx)(n.code,{children:"OAuth 2.0 integration"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Name your integration and click on the ",(0,i.jsx)(n.code,{children:"Create"})," button."]}),"\n",(0,i.jsx)(n.p,{children:"Settings for local development:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Callback URL: ",(0,i.jsx)(n.code,{children:"http://localhost:7007/api/auth/atlassian"})]}),"\n",(0,i.jsx)(n.li,{children:"Use rotating refresh tokens"}),"\n",(0,i.jsxs)(n.li,{children:["For permissions, you ",(0,i.jsx)(n.strong,{children:"must"})," enable ",(0,i.jsx)(n.code,{children:"View user profile"})," for the currently\nlogged-in user, under ",(0,i.jsx)(n.code,{children:"User identity API"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsxs)(n.p,{children:["The provider configuration can then be added to your ",(0,i.jsx)(n.code,{children:"app-config.yaml"})," under the\nroot ",(0,i.jsx)(n.code,{children:"auth"})," configuration:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"auth:\n  environment: development\n  providers:\n    atlassian:\n      development:\n        clientId: ${AUTH_ATLASSIAN_CLIENT_ID}\n        clientSecret: ${AUTH_ATLASSIAN_CLIENT_SECRET}\n        scope: ${AUTH_ATLASSIAN_SCOPES}\n        signIn:\n          resolvers:\n            # typically you would pick one of these\n            - resolver: emailMatchingUserEntityProfileEmail\n            - resolver: emailLocalPartMatchingUserEntityName\n            - resolver: usernameMatchingUserEntityName\n"})}),"\n",(0,i.jsx)(n.p,{children:"The Atlassian provider is a structure with three configuration keys:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"clientId"}),": The Key you generated in the developer console."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"clientSecret"}),": The Secret tied to the generated Key."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"scope"}),": List of scopes the app has permissions for, separated by spaces."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"NOTE:"})," the scopes ",(0,i.jsx)(n.code,{children:"offline_access"}),", ",(0,i.jsx)(n.code,{children:"read:jira-work"}),", and ",(0,i.jsx)(n.code,{children:"read:jira-user"})," are provided by default."]}),"\n",(0,i.jsx)(n.h3,{id:"resolvers",children:"Resolvers"}),"\n",(0,i.jsx)(n.p,{children:"This provider includes several resolvers out of the box that you can use:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"emailMatchingUserEntityProfileEmail"}),": Matches the email address from the auth provider with the User entity that has a matching ",(0,i.jsx)(n.code,{children:"spec.profile.email"}),". If no match is found it will throw a ",(0,i.jsx)(n.code,{children:"NotFoundError"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"emailLocalPartMatchingUserEntityName"}),": Matches the ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Email_address#Local-part",children:"local part"})," of the email address from the auth provider with the User entity that has a matching ",(0,i.jsx)(n.code,{children:"name"}),". If no match is found it will throw a ",(0,i.jsx)(n.code,{children:"NotFoundError"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"usernameMatchingUserEntityName"}),": Matches the username from the auth provider with the User entity that has a matching ",(0,i.jsx)(n.code,{children:"name"}),". If no match is found it will throw a ",(0,i.jsx)(n.code,{children:"NotFoundError"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"Note",type:"note",children:(0,i.jsxs)(n.p,{children:["The resolvers will be tried in order, but will only be skipped if they throw a ",(0,i.jsx)(n.code,{children:"NotFoundError"}),"."]})}),"\n",(0,i.jsxs)(n.p,{children:["If these resolvers do not fit your needs you can build a custom resolver, this is covered in the ",(0,i.jsx)(n.a,{href:"/docs/next/auth/identity-resolver#building-custom-resolvers",children:"Building Custom Resolvers"})," section of the Sign-in Identities and Resolvers documentation."]}),"\n",(0,i.jsx)(n.h2,{id:"backend-installation",children:"Backend Installation"}),"\n",(0,i.jsx)(n.p,{children:"To add the provider to the backend we will first need to install the package by running this command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="from your Backstage root directory"',children:"yarn --cwd packages/backend add @backstage/plugin-auth-backend-module-atlassian-provider\n"})}),"\n",(0,i.jsx)(n.p,{children:"Then we will need to this line:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="in packages/backend/src/index.ts"',children:"backend.add(import('@backstage/plugin-auth-backend'));\n/* highlight-add-start */\nbackend.add(import('@backstage/plugin-auth-backend-module-atlassian-provider'));\n/* highlight-add-end */\n"})}),"\n",(0,i.jsx)(n.h2,{id:"adding-the-provider-to-the-backstage-frontend",children:"Adding the provider to the Backstage frontend"}),"\n",(0,i.jsxs)(n.p,{children:["To add the provider to the frontend, add the ",(0,i.jsx)(n.code,{children:"atlassianAuthApi"})," reference and\n",(0,i.jsx)(n.code,{children:"SignInPage"})," component as shown in\n",(0,i.jsx)(n.a,{href:"/docs/next/auth/#sign-in-configuration",children:"Adding the provider to the sign-in page"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},675251:(e,n,t)=>{var i=t(667294),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var i,a={},l=null,c=null;for(i in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(c=n.ref),n)s.call(n,i)&&!d.hasOwnProperty(i)&&(a[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===a[i]&&(a[i]=n[i]);return{$$typeof:r,type:e,key:l,ref:c,props:a,_owner:o.current}}n.Fragment=a,n.jsx=l,n.jsxs=l},785893:(e,n,t)=>{e.exports=t(675251)},511151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>s});var i=t(667294);const r={},a=i.createContext(r);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);