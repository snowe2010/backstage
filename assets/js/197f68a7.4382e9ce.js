/*! For license information please see 197f68a7.4382e9ce.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[533718],{766742:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var o=n(785893),s=n(511151);const i={id:"autologout",title:"Auto Logout",description:"This section describes how to setup the Auto Logout mechanism in Backstage"},r=void 0,c={id:"auth/autologout",title:"Auto Logout",description:"This section describes how to setup the Auto Logout mechanism in Backstage",source:"@site/../docs/auth/autologout.md",sourceDirName:"auth",slug:"/auth/autologout",permalink:"/docs/next/auth/autologout",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/auth/autologout.md",tags:[],version:"current",frontMatter:{id:"autologout",title:"Auto Logout",description:"This section describes how to setup the Auto Logout mechanism in Backstage"},sidebar:"docs",previous:{title:"Service to Service Auth",permalink:"/docs/next/auth/service-to-service-auth"},next:{title:"Troubleshooting Auth",permalink:"/docs/next/auth/troubleshooting"}},a={},d=[{value:"Summary",id:"summary",level:2},{value:"Quick start",id:"quick-start",level:2}];function l(e){const t={code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"This section describes how to setup the Auto Logout mechanism in Backstage in case your organization needs it."}),"\n",(0,o.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,o.jsx)(t.p,{children:"The Auto Logout feature is an optional added security to Backstage, designed to automatically log out users after a preconfigured duration of inactivity. This capability helps to effectively mitigate the risks associated with unauthorized access through abandoned sessions, especially in shared device scenarios."}),"\n",(0,o.jsxs)(t.p,{children:["The Auto Logout mechanism actively tracks user activity such as mouse movements, clicks, key pressing, and taps. If the system detects no activity over a set time span (idle timeout), it invalidates the user session and redirects to the login page.\n",(0,o.jsx)(t.em,{children:"Inactive users"})," are the ones that don't perform any action on the Backstage app or that are logged in but no Backstage tab is open in the browser."]}),"\n",(0,o.jsx)(t.p,{children:"This feature is particularly beneficial if your application should comply with internal policies within your organization that may require automatic logout after a specific period of inactivity."}),"\n",(0,o.jsx)(t.p,{children:"This is how it looks like:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Auto logout Preview",src:n(375107).Z+"",width:"1920",height:"937"})}),"\n",(0,o.jsx)(t.h2,{id:"quick-start",children:"Quick start"}),"\n",(0,o.jsxs)(t.p,{children:["To enable and configure Auto Logout, you will need to add the ",(0,o.jsx)(t.code,{children:"<AutoLogout>"})," component to your Backstage's instance entry point, located at ",(0,o.jsx)(t.code,{children:"App.tsx"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"Here's how to add it:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { AutoLogout } from '@backstage/core-components';\n\n// ... App.tsx contents\n\nexport default app.createRoot(\n  <>\n    // ...\n    <AutoLogout />\n    <AppRouter>\n      <Root>{routes}</Root>\n    </AppRouter>\n    // ...\n  </>,\n);\n"})}),"\n",(0,o.jsx)(t.p,{children:"##\xa0Configuration"}),"\n",(0,o.jsxs)(t.p,{children:["You can further adjust the Auto Logout settings by tweaking the available ",(0,o.jsx)(t.code,{children:"<AutoLogout>"})," properties:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"<AutoLogout\n  idleTimeoutMinutes={30}\n  useWorkerTimers={false}\n  logoutIfDisconnected={false}\n/>\n"})}),"\n",(0,o.jsxs)(t.p,{children:["If you prefer to have different settings for each Backstage instance deployed at your infrastructure, you can instead leverage your ",(0,o.jsx)(t.code,{children:"app-config"})," and place some configuration properties:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"auth:\n  autologout:\n    enabled: true\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Bear in mind that, properties configured in ",(0,o.jsx)(t.code,{children:"app-config"})," take precedence over the props passed to the ",(0,o.jsx)(t.code,{children:"<AutoLogout/>"})," React component.\nThese are the available settings:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Configuration Key"}),(0,o.jsx)(t.th,{children:"Component Property"}),(0,o.jsx)(t.th,{children:"Description"}),(0,o.jsx)(t.th,{children:"Allowed Values"}),(0,o.jsx)(t.th,{children:"Default Value"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"auth.autologout.enabled"})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"enabled"})}),(0,o.jsx)(t.td,{children:"Enable/disable the Auto Logout feature."}),(0,o.jsxs)(t.td,{children:[(0,o.jsx)(t.code,{children:"true"}),"/",(0,o.jsx)(t.code,{children:"false"})]}),(0,o.jsxs)(t.td,{children:["Default is enabled (",(0,o.jsx)(t.code,{children:"true"}),")"]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"auth.autologout.idleTimeoutMinutes"})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"idleTimeoutMinutes"})}),(0,o.jsx)(t.td,{children:"Sets the idle time (in minutes) after which the user will be logged out."}),(0,o.jsxs)(t.td,{children:[(0,o.jsx)(t.code,{children:">= 0.5"})," minutes"]}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"60"})})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"auth.autologout.promptBeforeIdleSeconds"})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"promptBeforeIdleSeconds"})}),(0,o.jsxs)(t.td,{children:["Determines the time (in seconds) prior to idle state when a prompt will appear. A value of 0 disables the prompt. This must be less than the value of ",(0,o.jsx)(t.code,{children:"idleTimeoutMinutes"}),"."]}),(0,o.jsxs)(t.td,{children:[(0,o.jsx)(t.code,{children:">= 0"})," seconds"]}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"10"})})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"auth.autologout.useWorkerTimers"})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"useWorkerTimers"})}),(0,o.jsx)(t.td,{children:"Enables or disables the use of Node's worker thread timers instead of main thread timers. This can be beneficial if the browser is terminating timers in inactive tabs, like those used by auto logout. In case of browser incompatibility, try setting this to false."}),(0,o.jsxs)(t.td,{children:[(0,o.jsx)(t.code,{children:"true"}),"/",(0,o.jsx)(t.code,{children:"false"})]}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"true"})})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"auth.autologout.logoutIfDisconnected"})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"logoutIfDisconnected"})}),(0,o.jsxs)(t.td,{children:["Enable/disable auto logout for disconnected users. Disconnected users are those who are logged in but do not have any active Backstage tabs open in their browsers. If enabled, such users will be automatically logged out after ",(0,o.jsx)(t.code,{children:"idleTimeoutMinutes"}),"."]}),(0,o.jsxs)(t.td,{children:[(0,o.jsx)(t.code,{children:"true"}),"/",(0,o.jsx)(t.code,{children:"false"})]}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"true"})})]})]})]})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},675251:(e,t,n)=>{var o=n(667294),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,c=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var o,i={},d=null,l=null;for(o in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)r.call(t,o)&&!a.hasOwnProperty(o)&&(i[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===i[o]&&(i[o]=t[o]);return{$$typeof:s,type:e,key:d,ref:l,props:i,_owner:c.current}}t.Fragment=i,t.jsx=d,t.jsxs=d},785893:(e,t,n)=>{e.exports=n(675251)},375107:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/autologout-preview-6fc95154a077e9c991b83df709566722.png"},511151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>r});var o=n(667294);const s={},i=o.createContext(s);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);