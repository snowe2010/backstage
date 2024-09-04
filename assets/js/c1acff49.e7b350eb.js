/*! For license information please see c1acff49.e7b350eb.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[486740],{481809:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=n(785893),r=n(511151);const a={id:"provider",title:"AWS ALB Proxy Provider",sidebar_label:"AWS ALB",description:"Adding AWS ALB as an authentication provider in Backstage"},o=void 0,s={id:"auth/aws-alb/provider",title:"AWS ALB Proxy Provider",description:"Adding AWS ALB as an authentication provider in Backstage",source:"@site/../docs/auth/aws-alb/provider.md",sourceDirName:"auth/aws-alb",slug:"/auth/aws-alb/provider",permalink:"/docs/next/auth/aws-alb/provider",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/auth/aws-alb/provider.md",tags:[],version:"current",frontMatter:{id:"provider",title:"AWS ALB Proxy Provider",sidebar_label:"AWS ALB",description:"Adding AWS ALB as an authentication provider in Backstage"},sidebar:"docs",previous:{title:"Atlassian",permalink:"/docs/next/auth/atlassian/provider"},next:{title:"Azure",permalink:"/docs/next/auth/microsoft/provider"}},d={},l=[{value:"Configuration",id:"configuration",level:2},{value:"Resolvers",id:"resolvers",level:3},{value:"Backend Installation",id:"backend-installation",level:2},{value:"Adding the provider to the Backstage frontend",id:"adding-the-provider-to-the-backstage-frontend",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Backstage can de deployed behind ",(0,i.jsx)(t.a,{href:"https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html",children:"AWS Application Load Balancer"}),"\nand get the user seamlessly authenticated."]}),"\n",(0,i.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsxs)(t.p,{children:["The provider configuration can be added to your ",(0,i.jsx)(t.code,{children:"app-config.yaml"})," under the root\n",(0,i.jsx)(t.code,{children:"auth"})," configuration, similar to the following example:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",metastring:'title="app-config.yaml"',children:"auth:\n  providers:\n    awsalb:\n      # this is the URL of the IdP you configured\n      issuer: 'https://example.okta.com/oauth2/default'\n      # this is the ARN of your ALB instance\n      signer: 'arn:aws:elasticloadbalancing:us-east-2:123456789012:loadbalancer/app/my-load-balancer/1234567890123456'\n      # this is the region where your ALB instance resides\n      region: 'us-west-2'\n      signIn:\n        resolvers:\n          # typically you would pick one of these\n          - resolver: emailMatchingUserEntityProfileEmail\n          - resolver: emailLocalPartMatchingUserEntityName\n"})}),"\n",(0,i.jsx)(t.p,{children:"Ensure that you have set the signer correctly. It is also recommended that you restrict your target groups' security policy to only accept connections from that ALB."}),"\n",(0,i.jsx)(t.h3,{id:"resolvers",children:"Resolvers"}),"\n",(0,i.jsx)(t.p,{children:"This provider includes several resolvers out of the box that you can use:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"emailMatchingUserEntityProfileEmail"}),": Matches the email address from the auth provider with the User entity that has a matching ",(0,i.jsx)(t.code,{children:"spec.profile.email"}),". If no match is found it will throw a ",(0,i.jsx)(t.code,{children:"NotFoundError"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"emailLocalPartMatchingUserEntityName"}),": Matches the ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Email_address#Local-part",children:"local part"})," of the email address from the auth provider with the User entity that has a matching ",(0,i.jsx)(t.code,{children:"name"}),". If no match is found it will throw a ",(0,i.jsx)(t.code,{children:"NotFoundError"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{title:"Note",type:"note",children:(0,i.jsxs)(t.p,{children:["The resolvers will be tried in order, but will only be skipped if they throw a ",(0,i.jsx)(t.code,{children:"NotFoundError"}),"."]})}),"\n",(0,i.jsxs)(t.p,{children:["If these resolvers do not fit your needs you can build a custom resolver, this is covered in the ",(0,i.jsx)(t.a,{href:"/docs/next/auth/identity-resolver#building-custom-resolvers",children:"Building Custom Resolvers"})," section of the Sign-in Identities and Resolvers documentation."]}),"\n",(0,i.jsx)(t.h2,{id:"backend-installation",children:"Backend Installation"}),"\n",(0,i.jsx)(t.p,{children:"To add the provider to the backend we will first need to install the package by running this command:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",metastring:'title="from your Backstage root directory"',children:"yarn --cwd packages/backend add @backstage/plugin-auth-backend-module-aws-alb-provider\n"})}),"\n",(0,i.jsx)(t.p,{children:"Then we will need to add this line:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",metastring:'title="in packages/backend/src/index.ts"',children:"backend.add(import('@backstage/plugin-auth-backend'));\n/* highlight-add-start */\nbackend.add(import('@backstage/plugin-auth-backend-module-aws-alb-provider'));\n/* highlight-add-end */\n"})}),"\n",(0,i.jsx)(t.h2,{id:"adding-the-provider-to-the-backstage-frontend",children:"Adding the provider to the Backstage frontend"}),"\n",(0,i.jsxs)(t.p,{children:["See ",(0,i.jsx)(t.a,{href:"/docs/next/auth/#sign-in-with-proxy-providers",children:"Sign-In with Proxy Providers"})," for pointers on how to set up the sign-in page, and to also make it work smoothly for local development. You'll use ",(0,i.jsx)(t.code,{children:"awsalb"})," as the provider name."]}),"\n",(0,i.jsxs)(t.p,{children:["If you ",(0,i.jsx)(t.a,{href:"https://backstage.io/docs/auth/identity-resolver#building-custom-resolvers",children:"provide a custom sign in resolver"}),", you can skip the ",(0,i.jsx)(t.code,{children:"signIn"})," block entirely."]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},675251:(e,t,n)=>{var i=n(667294),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var i,a={},l=null,c=null;for(i in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)o.call(t,i)&&!d.hasOwnProperty(i)&&(a[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===a[i]&&(a[i]=t[i]);return{$$typeof:r,type:e,key:l,ref:c,props:a,_owner:s.current}}t.Fragment=a,t.jsx=l,t.jsxs=l},785893:(e,t,n)=>{e.exports=n(675251)},511151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>o});var i=n(667294);const r={},a=i.createContext(r);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);