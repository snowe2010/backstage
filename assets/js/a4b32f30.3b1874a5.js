/*! For license information please see a4b32f30.3b1874a5.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[487595],{44813:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var t=o(785893),i=o(511151);const s={id:"plugin-notifications-node.notificationprocessor.postprocess",title:"NotificationProcessor.postProcess()",description:"API reference for NotificationProcessor.postProcess()"},r=void 0,c={id:"reference/plugin-notifications-node.notificationprocessor.postprocess",title:"NotificationProcessor.postProcess()",description:"API reference for NotificationProcessor.postProcess()",source:"@site/../docs/reference/plugin-notifications-node.notificationprocessor.postprocess.md",sourceDirName:"reference",slug:"/reference/plugin-notifications-node.notificationprocessor.postprocess",permalink:"/docs/next/reference/plugin-notifications-node.notificationprocessor.postprocess",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-notifications-node.notificationprocessor.postprocess.md",tags:[],version:"current",frontMatter:{id:"plugin-notifications-node.notificationprocessor.postprocess",title:"NotificationProcessor.postProcess()",description:"API reference for NotificationProcessor.postProcess()"}},a={},d=[{value:"Parameters",id:"parameters",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/next/reference/plugin-notifications-node",children:(0,t.jsx)(n.code,{children:"@backstage/plugin-notifications-node"})})," > ",(0,t.jsx)(n.a,{href:"/docs/next/reference/plugin-notifications-node.notificationprocessor",children:(0,t.jsx)(n.code,{children:"NotificationProcessor"})})," > ",(0,t.jsx)(n.a,{href:"/docs/next/reference/plugin-notifications-node.notificationprocessor.postprocess",children:(0,t.jsx)(n.code,{children:"postProcess"})})]}),"\n",(0,t.jsx)(n.p,{children:"Post process notification after sending it to Backstage UI."}),"\n",(0,t.jsx)(n.p,{children:"Can be used to send the notification to external services."}),"\n",(0,t.jsx)(n.p,{children:"postProcess functions are called for each notification recipient individually or once for broadcast notification AFTER the notification has been sent to the Backstage UI."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"postProcess?(notification: Notification, options: NotificationSendOptions): Promise<void>;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"notification"}),(0,t.jsx)(n.td,{children:"Notification"}),(0,t.jsx)(n.td,{children:"The notification to send"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"options"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/next/reference/plugin-notifications-node.notificationsendoptions",children:"NotificationSendOptions"})}),(0,t.jsx)(n.td,{children:"The options to send the notification"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,t.jsx)(n.p,{children:"Promise<void>"})]})}function f(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},675251:(e,n,o)=>{var t=o(667294),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,o){var t,s={},d=null,p=null;for(t in void 0!==o&&(d=""+o),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(p=n.ref),n)r.call(n,t)&&!a.hasOwnProperty(t)&&(s[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===s[t]&&(s[t]=n[t]);return{$$typeof:i,type:e,key:d,ref:p,props:s,_owner:c.current}}n.Fragment=s,n.jsx=d,n.jsxs=d},785893:(e,n,o)=>{e.exports=o(675251)},511151:(e,n,o)=>{o.d(n,{Z:()=>c,a:()=>r});var t=o(667294);const i={},s=t.createContext(i);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);