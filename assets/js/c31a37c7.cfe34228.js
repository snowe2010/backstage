/*! For license information please see c31a37c7.cfe34228.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[17877],{946130:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>i,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=t(785893),n=t(511151);const s={id:"backend-common.setrootlogger",title:"setRootLogger()",description:"API reference for setRootLogger()"},c=void 0,a={id:"reference/backend-common.setrootlogger",title:"setRootLogger()",description:"API reference for setRootLogger()",source:"@site/versioned_docs/version-stable/reference/backend-common.setrootlogger.md",sourceDirName:"reference",slug:"/reference/backend-common.setrootlogger",permalink:"/docs/reference/backend-common.setrootlogger",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/backend-common.setrootlogger.md",tags:[],version:"stable",frontMatter:{id:"backend-common.setrootlogger",title:"setRootLogger()",description:"API reference for setRootLogger()"}},i={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function l(e){const o={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(o.a,{href:"/docs/reference/backend-common",children:(0,r.jsx)(o.code,{children:"@backstage/backend-common"})})," > ",(0,r.jsx)(o.a,{href:"/docs/reference/backend-common.setrootlogger",children:(0,r.jsx)(o.code,{children:"setRootLogger"})})]}),"\n",(0,r.jsxs)(o.blockquote,{children:["\n",(0,r.jsx)(o.p,{children:"Warning: This API is now obsolete."}),"\n",(0,r.jsxs)(o.p,{children:["As we are going to deprecate the legacy backend, this function will be removed in the future. If you need to set the root logger in the new system, please check out this documentation: ",(0,r.jsx)(o.a,{href:"https://backstage.io/docs/backend-system/core-services/logger",children:"https://backstage.io/docs/backend-system/core-services/logger"})]}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:'Sets a completely custom default "root" logger.'}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-typescript",children:"function setRootLogger(newLogger: winston.Logger): void;\n"})}),"\n",(0,r.jsx)(o.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"Parameter"}),(0,r.jsx)(o.th,{children:"Type"}),(0,r.jsx)(o.th,{children:"Description"})]})}),(0,r.jsx)(o.tbody,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"newLogger"}),(0,r.jsx)(o.td,{children:"winston.Logger"}),(0,r.jsx)(o.td,{})]})})]}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.strong,{children:"Returns:"})}),"\n",(0,r.jsx)(o.p,{children:"void"}),"\n",(0,r.jsx)(o.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsx)(o.p,{children:"This is the logger instance that will be the foundation for all other logger instances passed to plugins etc, in a given backend."}),"\n",(0,r.jsxs)(o.p,{children:["Only use this if you absolutely need to make a completely custom logger. Normally if you want to make light adaptations to the default logger behavior, you would instead call ",(0,r.jsx)(o.a,{href:"/docs/reference/backend-common.createrootlogger",children:"createRootLogger()"}),"."]})]})}function g(e={}){const{wrapper:o}={...(0,n.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},675251:(e,o,t)=>{var r=t(667294),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function d(e,o,t){var r,s={},d=null,l=null;for(r in void 0!==t&&(d=""+t),void 0!==o.key&&(d=""+o.key),void 0!==o.ref&&(l=o.ref),o)c.call(o,r)&&!i.hasOwnProperty(r)&&(s[r]=o[r]);if(e&&e.defaultProps)for(r in o=e.defaultProps)void 0===s[r]&&(s[r]=o[r]);return{$$typeof:n,type:e,key:d,ref:l,props:s,_owner:a.current}}o.Fragment=s,o.jsx=d,o.jsxs=d},785893:(e,o,t)=>{e.exports=t(675251)},511151:(e,o,t)=>{t.d(o,{Z:()=>a,a:()=>c});var r=t(667294);const n={},s=r.createContext(n);function c(e){const o=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),r.createElement(s.Provider,{value:o},e.children)}}}]);