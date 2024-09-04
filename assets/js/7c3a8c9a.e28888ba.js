/*! For license information please see 7c3a8c9a.e28888ba.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[570557],{423356:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var i=n(785893),o=n(511151);const a={id:"logging-in",title:"Logging into Backstage",description:"Getting up and running with Backstage and your identity provider"},r=void 0,s={id:"getting-started/logging-in",title:"Logging into Backstage",description:"Getting up and running with Backstage and your identity provider",source:"@site/../docs/getting-started/logging-in.md",sourceDirName:"getting-started",slug:"/getting-started/logging-in",permalink:"/docs/next/getting-started/logging-in",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/getting-started/logging-in.md",tags:[],version:"current",frontMatter:{id:"logging-in",title:"Logging into Backstage",description:"Getting up and running with Backstage and your identity provider"},sidebar:"docs",previous:{title:"Backstage homepage - Setup and Customization",permalink:"/docs/next/getting-started/homepage"},next:{title:"Registering a Component",permalink:"/docs/next/getting-started/register-a-component"}},c={},d=[{value:"Summary",id:"summary",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"1. Login to Backstage",id:"1-login-to-backstage",level:2},{value:"2. Verify that you&#39;re logged in",id:"2-verify-that-youre-logged-in",level:2}];function g(e){const t={a:"a",code:"code",h2:"h2",img:"img",p:"p",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Audience: All"}),"\n",(0,i.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsx)(t.p,{children:"This guide will provide a quick tutorial on how to log in to your Backstage instance. It should be used as both an introduction to Backstage's authentication system as well as a debugging guide for any issues you may have while logging in."}),"\n",(0,i.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(t.p,{children:["You should have already ",(0,i.jsx)(t.a,{href:"/docs/next/getting-started/",children:"have a standalone app"})," and completed the Github OAuth app setup defined in ",(0,i.jsx)(t.a,{href:"/docs/next/getting-started/config/authentication",children:"the authentication tutorial"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"1-login-to-backstage",children:"1. Login to Backstage"}),"\n",(0,i.jsxs)(t.p,{children:["Run your Backstage app with ",(0,i.jsx)(t.code,{children:"yarn dev"}),". Navigate to ",(0,i.jsx)(t.code,{children:"http://localhost:3000"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"If you're not already logged in, you should see a login screen like this,"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Screenshot of the login screen",src:n(402420).Z+"",width:"1662",height:"547"})}),"\n",(0,i.jsxs)(t.p,{children:['To login, you should choose the "Github" provider and click the "Sign in" button. This will redirect you to a Github OAuth page. Verify that the scopes mentioned on that page match the setup you did in ',(0,i.jsx)(t.a,{href:"/docs/next/getting-started/config/authentication",children:"the authentication tutorial"}),'. Once you click "Confirm", you will be brought back to the Backstage interface and signed in!']}),"\n",(0,i.jsx)(t.p,{children:"If you are already logged in, you will be automatically brought to your Backstage instance."}),"\n",(0,i.jsx)(t.h2,{id:"2-verify-that-youre-logged-in",children:"2. Verify that you're logged in"}),"\n",(0,i.jsx)(t.p,{children:"Once you've logged in, find the \"Settings\" item in the navigation bar to the left. Click it and you will see your profile. If you see your profile picture and name from Github here, congratulations! You've successfully set up a Github authentication integration."}),"\n",(0,i.jsxs)(t.p,{children:["If you don't see your profile picture and name, check that you followed all of the steps in ",(0,i.jsx)(t.a,{href:"/docs/next/getting-started/config/authentication",children:"the authentication tutorial"}),". If you have, search for similar issues on ",(0,i.jsx)(t.a,{href:"https://discord.gg/backstage-687207715902193673",children:"the Discord server"}),"."]})]})}function l(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},675251:(e,t,n)=>{var i=n(667294),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var i,a={},d=null,g=null;for(i in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(g=t.ref),t)r.call(t,i)&&!c.hasOwnProperty(i)&&(a[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===a[i]&&(a[i]=t[i]);return{$$typeof:o,type:e,key:d,ref:g,props:a,_owner:s.current}}t.Fragment=a,t.jsx=d,t.jsxs=d},785893:(e,t,n)=>{e.exports=n(675251)},402420:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/login-screen-069a2e993b088b6a866dc73bb8c3d287.png"},511151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>r});var i=n(667294);const o={},a=i.createContext(o);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);