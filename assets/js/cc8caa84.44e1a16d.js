/*! For license information please see cc8caa84.44e1a16d.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[268589],{397432:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=t(785893),s=t(511151);const i={id:"user-info",title:"User Info Service",sidebar_label:"User Info",description:"Documentation for the User Info service"},o=void 0,c={id:"backend-system/core-services/user-info",title:"User Info Service",description:"Documentation for the User Info service",source:"@site/versioned_docs/version-stable/backend-system/core-services/user-info.md",sourceDirName:"backend-system/core-services",slug:"/backend-system/core-services/user-info",permalink:"/docs/backend-system/core-services/user-info",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/backend-system/core-services/user-info.md",tags:[],version:"stable",frontMatter:{id:"user-info",title:"User Info Service",sidebar_label:"User Info",description:"Documentation for the User Info service"},sidebar:"docs",previous:{title:"Url Reader",permalink:"/docs/backend-system/core-services/url-reader"},next:{title:"Introduction",permalink:"/docs/frontend-system/"}},a={},d=[{value:"Using the Service",id:"using-the-service",level:2},{value:"Getting User Info",id:"getting-user-info",level:3}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"This service lets you extract more information about a set of user credentials.\nSpecifically, it can be used to extract the ownership entity refs for a user\nprincipal."}),"\n",(0,r.jsxs)(n.p,{children:["See also the ",(0,r.jsx)(n.a,{href:"/docs/backend-system/core-services/auth",children:(0,r.jsx)(n.code,{children:"auth"})})," and ",(0,r.jsx)(n.a,{href:"/docs/backend-system/core-services/http-auth",children:(0,r.jsx)(n.code,{children:"httpAuth"})})," services for\ngeneral credentials handling."]}),"\n",(0,r.jsx)(n.h2,{id:"using-the-service",children:"Using the Service"}),"\n",(0,r.jsxs)(n.p,{children:["In the following code examples, the ",(0,r.jsx)(n.code,{children:"userInfo"}),", ",(0,r.jsx)(n.code,{children:"auth"}),", and ",(0,r.jsx)(n.code,{children:"httpAuth"})," variables are assumed\nto be dependency-injected instances of the ",(0,r.jsx)(n.code,{children:"coreServices.userInfo"})," and\n",(0,r.jsx)(n.code,{children:"coreServices.httpAuth"})," service, respectively. For a backend plugin, it might\nlook like this:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default createBackendPlugin({\n  pluginId: 'my-plugin',\n  register(env) {\n    env.registerInit({\n      deps: {\n        auth: coreServices.auth,\n        httpAuth: coreServices.httpAuth,\n        httpRouter: coreServices.httpRouter,\n        userInfo: coreServices.userInfo,\n      },\n      async init({ auth, httpAuth, httpRouter, userInfo }) {\n        // Your code goes here\n      },\n    });\n  },\n});\n"})}),"\n",(0,r.jsx)(n.h3,{id:"getting-user-info",children:"Getting User Info"}),"\n",(0,r.jsx)(n.p,{children:"This example extracts some user credentials out of a request and fetches\nadditional information about that principal."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"router.get('/some-request', async (req, res) => {\n  const credentials = await httpAuth.credentials(req, { allow: ['user'] });\n  const info = await userInfo.getUserInfo(credentials);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"userInfo"})," service only deals with credentials that contain user principals,\nit won't accept requests for service principals. In our example code the initial\ncredentials extraction limits it to user credentials upfront. If you have an\nendpoint that allows both user and service credentials, you may want to wrap\nyour user info extraction in a principal type check:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"router.get('/some-request', async (req, res) => {\n  const credentials = await httpAuth.credentials(req);\n  if (auth.isPrincipal(credentials, 'user')) {\n    const info = await userInfo.getUserInfo(credentials);\n    // ...\n"})}),"\n",(0,r.jsx)(n.p,{children:"The user info contains data that was extracted during sign-in for the given\nuser."})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},675251:(e,n,t)=>{var r=t(667294),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var r,i={},d=null,l=null;for(r in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)o.call(n,r)&&!a.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:s,type:e,key:d,ref:l,props:i,_owner:c.current}}n.Fragment=i,n.jsx=d,n.jsxs=d},785893:(e,n,t)=>{e.exports=t(675251)},511151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>o});var r=t(667294);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);