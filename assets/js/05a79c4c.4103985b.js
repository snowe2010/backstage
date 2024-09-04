/*! For license information please see 05a79c4c.4103985b.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[717148],{388019:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var s=r(785893),n=r(511151);const c={id:"backend-test-utils.servicefactorytester.getsubject",title:"ServiceFactoryTester.getSubject()",description:"API reference for ServiceFactoryTester.getSubject()"},i=void 0,o={id:"reference/backend-test-utils.servicefactorytester.getsubject",title:"ServiceFactoryTester.getSubject()",description:"API reference for ServiceFactoryTester.getSubject()",source:"@site/versioned_docs/version-stable/reference/backend-test-utils.servicefactorytester.getsubject.md",sourceDirName:"reference",slug:"/reference/backend-test-utils.servicefactorytester.getsubject",permalink:"/docs/reference/backend-test-utils.servicefactorytester.getsubject",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/backend-test-utils.servicefactorytester.getsubject.md",tags:[],version:"stable",frontMatter:{id:"backend-test-utils.servicefactorytester.getsubject",title:"ServiceFactoryTester.getSubject()",description:"API reference for ServiceFactoryTester.getSubject()"}},a={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,s.jsx)(t.a,{href:"/docs/reference/backend-test-utils",children:(0,s.jsx)(t.code,{children:"@backstage/backend-test-utils"})})," > ",(0,s.jsx)(t.a,{href:"/docs/reference/backend-test-utils.servicefactorytester",children:(0,s.jsx)(t.code,{children:"ServiceFactoryTester"})})," > ",(0,s.jsx)(t.a,{href:"/docs/reference/backend-test-utils.servicefactorytester.getsubject",children:(0,s.jsx)(t.code,{children:"getSubject"})})]}),"\n",(0,s.jsx)(t.p,{children:"Returns the service instance for the subject."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"getSubject(...args: 'root' extends TScope ? [] : [pluginId?: string]): Promise<TInstances extends 'multiton' ? TService[] : TService>;\n"})}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"args"}),(0,s.jsx)(t.td,{children:"'root' extends TScope ? [] : [pluginId?: string]"}),(0,s.jsx)(t.td,{})]})})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,s.jsx)(t.p,{children:"Promise<TInstances extends 'multiton' ? TService[] : TService>"}),"\n",(0,s.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsx)(t.p,{children:"If the subject is a plugin scoped service factory a plugin ID can be provided to instantiate the service for a specific plugin."}),"\n",(0,s.jsx)(t.p,{children:"By default the plugin ID 'test' is used."})]})}function u(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},675251:(e,t,r)=>{var s=r(667294),n=Symbol.for("react.element"),c=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,r){var s,c={},d=null,l=null;for(s in void 0!==r&&(d=""+r),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,s)&&!a.hasOwnProperty(s)&&(c[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===c[s]&&(c[s]=t[s]);return{$$typeof:n,type:e,key:d,ref:l,props:c,_owner:o.current}}t.Fragment=c,t.jsx=d,t.jsxs=d},785893:(e,t,r)=>{e.exports=r(675251)},511151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>i});var s=r(667294);const n={},c=s.createContext(n);function i(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);