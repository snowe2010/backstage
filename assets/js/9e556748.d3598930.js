/*! For license information please see 9e556748.d3598930.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[31901],{295902:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var t=o(785893),i=o(511151);const r={id:"plugin-notifications-node.notificationprocessor.preprocess",title:"NotificationProcessor.preProcess()",description:"API reference for NotificationProcessor.preProcess()"},s=void 0,c={id:"reference/plugin-notifications-node.notificationprocessor.preprocess",title:"NotificationProcessor.preProcess()",description:"API reference for NotificationProcessor.preProcess()",source:"@site/../docs/reference/plugin-notifications-node.notificationprocessor.preprocess.md",sourceDirName:"reference",slug:"/reference/plugin-notifications-node.notificationprocessor.preprocess",permalink:"/docs/next/reference/plugin-notifications-node.notificationprocessor.preprocess",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-notifications-node.notificationprocessor.preprocess.md",tags:[],version:"current",frontMatter:{id:"plugin-notifications-node.notificationprocessor.preprocess",title:"NotificationProcessor.preProcess()",description:"API reference for NotificationProcessor.preProcess()"}},a={},d=[{value:"Parameters",id:"parameters",level:2}];function f(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/next/reference/plugin-notifications-node",children:(0,t.jsx)(n.code,{children:"@backstage/plugin-notifications-node"})})," > ",(0,t.jsx)(n.a,{href:"/docs/next/reference/plugin-notifications-node.notificationprocessor",children:(0,t.jsx)(n.code,{children:"NotificationProcessor"})})," > ",(0,t.jsx)(n.a,{href:"/docs/next/reference/plugin-notifications-node.notificationprocessor.preprocess",children:(0,t.jsx)(n.code,{children:"preProcess"})})]}),"\n",(0,t.jsx)(n.p,{children:"Pre-process notification before sending it to Backstage UI."}),"\n",(0,t.jsx)(n.p,{children:"Can be used to send the notification to external services or to decorate the notification with additional information. The notification is saved to database and sent to Backstage UI after all pre-process functions have run. The notification options passed here are already processed by processOptions functionality."}),"\n",(0,t.jsx)(n.p,{children:"preProcess functions are called for each notification recipient individually or once for broadcast notification BEFORE the notification has been sent to the Backstage UI."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"preProcess?(notification: Notification, options: NotificationSendOptions): Promise<Notification>;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"notification"}),(0,t.jsx)(n.td,{children:"Notification"}),(0,t.jsx)(n.td,{children:"The notification to send"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"options"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/next/reference/plugin-notifications-node.notificationsendoptions",children:"NotificationSendOptions"})}),(0,t.jsx)(n.td,{children:"The options to send the notification"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,t.jsx)(n.p,{children:"Promise<Notification>"}),"\n",(0,t.jsx)(n.p,{children:"The same notification or a modified version of it"})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},675251:(e,n,o)=>{var t=o(667294),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,o){var t,r={},d=null,f=null;for(t in void 0!==o&&(d=""+o),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(f=n.ref),n)s.call(n,t)&&!a.hasOwnProperty(t)&&(r[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===r[t]&&(r[t]=n[t]);return{$$typeof:i,type:e,key:d,ref:f,props:r,_owner:c.current}}n.Fragment=r,n.jsx=d,n.jsxs=d},785893:(e,n,o)=>{e.exports=o(675251)},511151:(e,n,o)=>{o.d(n,{Z:()=>c,a:()=>s});var t=o(667294);const i={},r=t.createContext(i);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);