/*! For license information please see 820200f4.0be3679e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[55189],{343021:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var n=s(785893),c=s(511151);const r={id:"backend-test-utils.testcaches",title:"TestCaches",description:"API reference for TestCaches"},i=void 0,d={id:"reference/backend-test-utils.testcaches",title:"TestCaches",description:"API reference for TestCaches",source:"@site/versioned_docs/version-stable/reference/backend-test-utils.testcaches.md",sourceDirName:"reference",slug:"/reference/backend-test-utils.testcaches",permalink:"/docs/reference/backend-test-utils.testcaches",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/backend-test-utils.testcaches.md",tags:[],version:"stable",frontMatter:{id:"backend-test-utils.testcaches",title:"TestCaches",description:"API reference for TestCaches"}},a={},o=[{value:"Methods",id:"methods",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/backend-test-utils",children:(0,n.jsx)(t.code,{children:"@backstage/backend-test-utils"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/backend-test-utils.testcaches",children:(0,n.jsx)(t.code,{children:"TestCaches"})})]}),"\n",(0,n.jsx)(t.p,{children:"Encapsulates the creation of ephemeral test cache instances for use inside unit or integration tests."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"class TestCaches \n"})}),"\n",(0,n.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Method"}),(0,n.jsx)(t.th,{children:"Modifiers"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/backend-test-utils.testcaches.create",children:"create(options)"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"static"})}),(0,n.jsxs)(t.td,{children:[(0,n.jsxs)(t.p,{children:["Creates an empty ",(0,n.jsx)(t.code,{children:"TestCaches"})," instance, and sets up Jest to clean up all of its acquired resources after all tests finish."]}),(0,n.jsxs)(t.p,{children:["You typically want to create just a single instance like this at the top of your test file or ",(0,n.jsx)(t.code,{children:"describe"})," block, and then call ",(0,n.jsx)(t.code,{children:"init"}),' many times on that instance inside the individual tests. Spinning up a "physical" cache instance takes a considerable amount of time, slowing down tests. But wiping the contents of an instance using ',(0,n.jsx)(t.code,{children:"init"})," is very fast."]})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/backend-test-utils.testcaches.eachsupportedid",children:"eachSupportedId()"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/backend-test-utils.testcaches.init",children:"init(id)"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Returns a fresh, empty cache for the given driver."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/backend-test-utils.testcaches.setdefaults",children:"setDefaults(options)"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"static"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/backend-test-utils.testcaches.supports",children:"supports(id)"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},675251:(e,t,s)=>{var n=s(667294),c=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,s){var n,r={},o=null,l=null;for(n in void 0!==s&&(o=""+s),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,n)&&!a.hasOwnProperty(n)&&(r[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===r[n]&&(r[n]=t[n]);return{$$typeof:c,type:e,key:o,ref:l,props:r,_owner:d.current}}t.Fragment=r,t.jsx=o,t.jsxs=o},785893:(e,t,s)=>{e.exports=s(675251)},511151:(e,t,s)=>{s.d(t,{Z:()=>d,a:()=>i});var n=s(667294);const c={},r=n.createContext(c);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);