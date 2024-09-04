/*! For license information please see 74fd473b.78533a67.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[118818],{806636:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=i(785893),t=i(511151);const o={id:"plugin-notifications.usenotificationsapi",title:"useNotificationsApi()",description:"API reference for useNotificationsApi()"},s=void 0,a={id:"reference/plugin-notifications.usenotificationsapi",title:"useNotificationsApi()",description:"API reference for useNotificationsApi()",source:"@site/../docs/reference/plugin-notifications.usenotificationsapi.md",sourceDirName:"reference",slug:"/reference/plugin-notifications.usenotificationsapi",permalink:"/docs/next/reference/plugin-notifications.usenotificationsapi",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-notifications.usenotificationsapi.md",tags:[],version:"current",frontMatter:{id:"plugin-notifications.usenotificationsapi",title:"useNotificationsApi()",description:"API reference for useNotificationsApi()"}},c={},d=[{value:"Parameters",id:"parameters",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-notifications",children:(0,r.jsx)(n.code,{children:"@backstage/plugin-notifications"})})," > ",(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-notifications.usenotificationsapi",children:(0,r.jsx)(n.code,{children:"useNotificationsApi"})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function useNotificationsApi<T>(f: (api: NotificationsApi) => Promise<T>, deps?: any[]): {\n    retry: () => void;\n    loading: boolean;\n    error?: undefined;\n    value?: undefined;\n} | {\n    retry: () => void;\n    loading: false;\n    error: Error;\n    value?: undefined;\n} | {\n    retry: () => void;\n    loading: true;\n    error?: Error | undefined;\n    value?: T | undefined;\n} | {\n    retry: () => void;\n    loading: false;\n    error?: undefined;\n    value: T;\n};\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"f"}),(0,r.jsxs)(n.td,{children:["(api: ",(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-notifications.notificationsapi",children:"NotificationsApi"}),") => Promise<T>"]}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"deps"}),(0,r.jsx)(n.td,{children:"any[]"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"(Optional)"})})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,r.jsx)(n.p,{children:"{ retry: () => void; loading: boolean; error?: undefined; value?: undefined; } | { retry: () => void; loading: false; error: Error; value?: undefined; } | { retry: () => void; loading: true; error?: Error | undefined; value?: T | undefined; } | { retry: () => void; loading: false; error?: undefined; value: T; }"})]})}function f(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},675251:(e,n,i)=>{var r=i(667294),t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,i){var r,o={},d=null,l=null;for(r in void 0!==i&&(d=""+i),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)s.call(n,r)&&!c.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:t,type:e,key:d,ref:l,props:o,_owner:a.current}}n.Fragment=o,n.jsx=d,n.jsxs=d},785893:(e,n,i)=>{e.exports=i(675251)},511151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>s});var r=i(667294);const t={},o=r.createContext(t);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);