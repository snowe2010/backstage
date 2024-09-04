/*! For license information please see d068ddfa.c373ba7c.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[869805],{973263:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var i=r(785893),n=r(511151);const o={id:"provider",title:"Bitbucket Server Authentication Provider",sidebar_label:"Bitbucket Server",description:"Adding Bitbucket Server OAuth as an authentication provider in Backstage"},c=void 0,a={id:"auth/bitbucketServer/provider",title:"Bitbucket Server Authentication Provider",description:"Adding Bitbucket Server OAuth as an authentication provider in Backstage",source:"@site/versioned_docs/version-stable/auth/bitbucketServer/provider.md",sourceDirName:"auth/bitbucketServer",slug:"/auth/bitbucketServer/provider",permalink:"/docs/auth/bitbucketServer/provider",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/auth/bitbucketServer/provider.md",tags:[],version:"stable",frontMatter:{id:"provider",title:"Bitbucket Server Authentication Provider",sidebar_label:"Bitbucket Server",description:"Adding Bitbucket Server OAuth as an authentication provider in Backstage"},sidebar:"docs",previous:{title:"Bitbucket",permalink:"/docs/auth/bitbucket/provider"},next:{title:"Cloudflare Access",permalink:"/docs/auth/cloudflare/provider"}},s={},d=[{value:"Create an Application Link in Bitbucket Server",id:"create-an-application-link-in-bitbucket-server",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Adding the provider to the Backstage frontend",id:"adding-the-provider-to-the-backstage-frontend",level:2},{value:"Using Bitbucket Server for sign-in",id:"using-bitbucket-server-for-sign-in",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["The Backstage ",(0,i.jsx)(t.code,{children:"core-plugin-api"})," package comes with a Bitbucket Server authentication provider that can authenticate\nusers using Bitbucket Server. This does ",(0,i.jsx)(t.strong,{children:"NOT"})," work with Bitbucket Cloud."]}),"\n",(0,i.jsx)(t.h2,{id:"create-an-application-link-in-bitbucket-server",children:"Create an Application Link in Bitbucket Server"}),"\n",(0,i.jsxs)(t.p,{children:["To add Bitbucket Server authentication, you must create an incoming application link. Follow the steps described in\nthe ",(0,i.jsx)(t.a,{href:"https://confluence.atlassian.com/bitbucketserver/configure-an-incoming-link-1108483657.html",children:"Bitbucket Server documentation"}),"\nto create one."]}),"\n",(0,i.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsxs)(t.p,{children:["The provider configuration can then be added to your ",(0,i.jsx)(t.code,{children:"app-config.yaml"})," under the root ",(0,i.jsx)(t.code,{children:"auth"})," configuration:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"auth:\n  environment: development\n  providers:\n    bitbucketServer:\n      development:\n        host: bitbucket.org\n        clientId: ${AUTH_BITBUCKET_SERVER_CLIENT_ID}\n        clientSecret: ${AUTH_BITBUCKET_SERVER_CLIENT_SECRET}\n"})}),"\n",(0,i.jsx)(t.p,{children:"The Bitbucket Server provider is a structure with two configuration keys:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"clientId"}),": The client ID that was generated by Bitbucket, e.g. ",(0,i.jsx)(t.code,{children:"b0f868455c15dcdff5c5fb5d173ae684"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"clientSecret"}),": The client secret tied to the generated client ID."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"adding-the-provider-to-the-backstage-frontend",children:"Adding the provider to the Backstage frontend"}),"\n",(0,i.jsxs)(t.p,{children:["To add the provider to the frontend, add the ",(0,i.jsx)(t.code,{children:"bitbucketServerAuthApi"})," reference and ",(0,i.jsx)(t.code,{children:"SignInPage"})," component as shown\nin ",(0,i.jsx)(t.a,{href:"/docs/auth/#sign-in-configuration",children:"Adding the provider to the sign-in page"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"using-bitbucket-server-for-sign-in",children:"Using Bitbucket Server for sign-in"}),"\n",(0,i.jsxs)(t.p,{children:["In order to use the Bitbucket Server provider for sign-in, you must configure it with a ",(0,i.jsx)(t.code,{children:"signIn.resolver"}),". See\nthe ",(0,i.jsx)(t.a,{href:"/docs/auth/identity-resolver",children:"Sign-In Resolver documentation"})," for more details on how this is done. Note that for the\nBitbucket Server provider, you'll want to use ",(0,i.jsx)(t.code,{children:"bitbucketServer"})," as the provider ID,\nand ",(0,i.jsx)(t.code,{children:"providers.bitbucketServer.create"})," for the provider factory."]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"@backstage/plugin-auth-backend"})," plugin also comes with a built-in resolver that can be used if desired.\nThe ",(0,i.jsx)(t.code,{children:"emailMatchingUserEntityProfileEmail"})," identifies users by matching their Bitbucket Server email address to the email\naddress of ",(0,i.jsx)(t.code,{children:"User"})," entities in the catalog. Note that you must populate your catalog with matching entities or users will\nnot be able to sign in with this resolver."]})]})}function l(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},675251:(e,t,r)=>{var i=r(667294),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,r){var i,o={},d=null,u=null;for(i in void 0!==r&&(d=""+r),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(u=t.ref),t)c.call(t,i)&&!s.hasOwnProperty(i)&&(o[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===o[i]&&(o[i]=t[i]);return{$$typeof:n,type:e,key:d,ref:u,props:o,_owner:a.current}}t.Fragment=o,t.jsx=d,t.jsxs=d},785893:(e,t,r)=>{e.exports=r(675251)},511151:(e,t,r)=>{r.d(t,{Z:()=>a,a:()=>c});var i=r(667294);const n={},o=i.createContext(n);function c(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);