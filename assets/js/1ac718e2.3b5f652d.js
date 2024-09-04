/*! For license information please see 1ac718e2.3b5f652d.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[444262],{503626:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var t=i(785893),o=i(511151);const r={id:"provider",title:"OneLogin Authentication Provider",sidebar_label:"OneLogin",description:"Adding OneLogin OIDC as an authentication provider in Backstage"},a=void 0,s={id:"auth/onelogin/provider",title:"OneLogin Authentication Provider",description:"Adding OneLogin OIDC as an authentication provider in Backstage",source:"@site/../docs/auth/onelogin/provider.md",sourceDirName:"auth/onelogin",slug:"/auth/onelogin/provider",permalink:"/docs/next/auth/onelogin/provider",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/auth/onelogin/provider.md",tags:[],version:"current",frontMatter:{id:"provider",title:"OneLogin Authentication Provider",sidebar_label:"OneLogin",description:"Adding OneLogin OIDC as an authentication provider in Backstage"},sidebar:"docs",previous:{title:"OAuth 2 Custom Proxy",permalink:"/docs/next/auth/oauth2-proxy/provider"},next:{title:"VMware Cloud",permalink:"/docs/next/auth/vmware-cloud/provider"}},d={},c=[{value:"Create an Application on OneLogin",id:"create-an-application-on-onelogin",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Resolvers",id:"resolvers",level:3},{value:"Backend Installation",id:"backend-installation",level:2},{value:"Adding the provider to the Backstage frontend",id:"adding-the-provider-to-the-backstage-frontend",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["The Backstage ",(0,t.jsx)(n.code,{children:"core-plugin-api"})," package comes with a OneLogin authentication\nprovider that can authenticate users using OpenID Connect."]}),"\n",(0,t.jsx)(n.h2,{id:"create-an-application-on-onelogin",children:"Create an Application on OneLogin"}),"\n",(0,t.jsx)(n.p,{children:"To support OneLogin authentication, you must create an Application:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"From the OneLogin Admin portal, choose Applications"}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.code,{children:"Add App"})," and select ",(0,t.jsx)(n.code,{children:"OpenID Connect"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Display Name: Backstage (or your custom app name)"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Click Save"}),"\n",(0,t.jsxs)(n.li,{children:["Go to the Configuration tab for the Application and set:\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Login Url"}),": ",(0,t.jsx)(n.code,{children:"http://localhost:3000"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Redirect URIs"}),": ",(0,t.jsx)(n.code,{children:"http://localhost:7007/api/auth/onelogin/handler/frame"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Click Save"}),"\n",(0,t.jsxs)(n.li,{children:["Go to the SSO tab for the Application and set:\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Token Endpoint"})," > ",(0,t.jsx)(n.code,{children:"Authentication Method"}),": ",(0,t.jsx)(n.code,{children:"POST"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Click Save"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["The provider configuration can then be added to your ",(0,t.jsx)(n.code,{children:"app-config.yaml"})," under the\nroot ",(0,t.jsx)(n.code,{children:"auth"})," configuration:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"auth:\n  environment: development\n  providers:\n    onelogin:\n      development:\n        clientId: ${AUTH_ONELOGIN_CLIENT_ID}\n        clientSecret: ${AUTH_ONELOGIN_CLIENT_SECRET}\n        issuer: https://<company>.onelogin.com/oidc/2\n        signIn:\n          resolvers:\n            # typically you would pick one of these\n            - resolver: emailMatchingUserEntityProfileEmail\n            - resolver: emailLocalPartMatchingUserEntityName\n            - resolver: usernameMatchingUserEntityName\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The OneLogin provider is a structure with three configuration keys; ",(0,t.jsx)(n.strong,{children:"these are\nfound on the SSO tab"})," for the OneLogin Application:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"clientId"}),": The client ID"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"clientSecret"}),": The client secret"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"issuer"}),": The issuer URL"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"resolvers",children:"Resolvers"}),"\n",(0,t.jsx)(n.p,{children:"This provider includes several resolvers out of the box that you can use:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"emailMatchingUserEntityProfileEmail"}),": Matches the email address from the auth provider with the User entity that has a matching ",(0,t.jsx)(n.code,{children:"spec.profile.email"}),". If no match is found it will throw a ",(0,t.jsx)(n.code,{children:"NotFoundError"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"emailLocalPartMatchingUserEntityName"}),": Matches the ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Email_address#Local-part",children:"local part"})," of the email address from the auth provider with the User entity that has a matching ",(0,t.jsx)(n.code,{children:"name"}),". If no match is found it will throw a ",(0,t.jsx)(n.code,{children:"NotFoundError"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"usernameMatchingUserEntityName"}),": Matches the username from the auth provider with the User entity that has a matching ",(0,t.jsx)(n.code,{children:"name"}),". If no match is found it will throw a ",(0,t.jsx)(n.code,{children:"NotFoundError"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"Note",type:"note",children:(0,t.jsxs)(n.p,{children:["The resolvers will be tried in order, but will only be skipped if they throw a ",(0,t.jsx)(n.code,{children:"NotFoundError"}),"."]})}),"\n",(0,t.jsxs)(n.p,{children:["If these resolvers do not fit your needs you can build a custom resolver, this is covered in the ",(0,t.jsx)(n.a,{href:"/docs/next/auth/identity-resolver#building-custom-resolvers",children:"Building Custom Resolvers"})," section of the Sign-in Identities and Resolvers documentation."]}),"\n",(0,t.jsx)(n.h2,{id:"backend-installation",children:"Backend Installation"}),"\n",(0,t.jsx)(n.p,{children:"To add the provider to the backend we will first need to install the package by running this command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="from your Backstage root directory"',children:"yarn --cwd packages/backend add @backstage/plugin-auth-backend-module-onelogin-provider\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then we will need to add this line:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="in packages/backend/src/index.ts"',children:"backend.add(import('@backstage/plugin-auth-backend'));\n/* highlight-add-start */\nbackend.add(import('@backstage/plugin-auth-backend-module-onelogin-provider'));\n/* highlight-add-end */\n"})}),"\n",(0,t.jsx)(n.h2,{id:"adding-the-provider-to-the-backstage-frontend",children:"Adding the provider to the Backstage frontend"}),"\n",(0,t.jsxs)(n.p,{children:["To add the provider to the frontend, add the ",(0,t.jsx)(n.code,{children:"oneloginAuthApi"})," reference and\n",(0,t.jsx)(n.code,{children:"SignInPage"})," component as shown in\n",(0,t.jsx)(n.a,{href:"/docs/next/auth/#sign-in-configuration",children:"Adding the provider to the sign-in page"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},675251:(e,n,i)=>{var t=i(667294),o=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,i){var t,r={},c=null,l=null;for(t in void 0!==i&&(c=""+i),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(l=n.ref),n)a.call(n,t)&&!d.hasOwnProperty(t)&&(r[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===r[t]&&(r[t]=n[t]);return{$$typeof:o,type:e,key:c,ref:l,props:r,_owner:s.current}}n.Fragment=r,n.jsx=c,n.jsxs=c},785893:(e,n,i)=>{e.exports=i(675251)},511151:(e,n,i)=>{i.d(n,{Z:()=>s,a:()=>a});var t=i(667294);const o={},r=t.createContext(o);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);