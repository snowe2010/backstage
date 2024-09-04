/*! For license information please see 5e67749e.98e952aa.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[962420],{820853:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=t(785893),s=t(511151);const o={id:"plugin-auth-react.usecookieauthrefresh",title:"useCookieAuthRefresh()",description:"API reference for useCookieAuthRefresh()"},i=void 0,c={id:"reference/plugin-auth-react.usecookieauthrefresh",title:"useCookieAuthRefresh()",description:"API reference for useCookieAuthRefresh()",source:"@site/versioned_docs/version-stable/reference/plugin-auth-react.usecookieauthrefresh.md",sourceDirName:"reference",slug:"/reference/plugin-auth-react.usecookieauthrefresh",permalink:"/docs/reference/plugin-auth-react.usecookieauthrefresh",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-auth-react.usecookieauthrefresh.md",tags:[],version:"stable",frontMatter:{id:"plugin-auth-react.usecookieauthrefresh",title:"useCookieAuthRefresh()",description:"API reference for useCookieAuthRefresh()"}},a={},u=[{value:"Parameters",id:"parameters",level:2}];function h(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-auth-react",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-auth-react"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-auth-react.usecookieauthrefresh",children:(0,n.jsx)(r.code,{children:"useCookieAuthRefresh"})})]}),"\n",(0,n.jsx)(r.p,{children:"A hook that will refresh the cookie when it is about to expire."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"function useCookieAuthRefresh(options: {\n    pluginId: string;\n}): {\n    status: 'loading';\n} | {\n    status: 'error';\n    error: Error;\n    retry: () => void;\n} | {\n    status: 'success';\n    data: {\n        expiresAt: string;\n    };\n};\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"options"}),(0,n.jsx)(r.td,{children:"{ pluginId: string; }"}),(0,n.jsx)(r.td,{children:"Options for configuring the refresh cookie endpoint"})]})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(r.p,{children:"{ status: 'loading'; } | { status: 'error'; error: Error; retry: () => void; } | { status: 'success'; data: { expiresAt: string; }; }"})]})}function d(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},675251:(e,r,t)=>{var n=t(667294),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(e,r,t){var n,o={},u=null,h=null;for(n in void 0!==t&&(u=""+t),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(h=r.ref),r)i.call(r,n)&&!a.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===o[n]&&(o[n]=r[n]);return{$$typeof:s,type:e,key:u,ref:h,props:o,_owner:c.current}}r.Fragment=o,r.jsx=u,r.jsxs=u},785893:(e,r,t)=>{e.exports=t(675251)},511151:(e,r,t)=>{t.d(r,{Z:()=>c,a:()=>i});var n=t(667294);const s={},o=n.createContext(s);function i(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);