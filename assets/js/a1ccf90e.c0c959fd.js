/*! For license information please see a1ccf90e.c0c959fd.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[37828],{491754:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var n=s(785893),a=s(511151);const r={id:"backend-test-utils.testdatabases",title:"TestDatabases",description:"API reference for TestDatabases"},c=void 0,d={id:"reference/backend-test-utils.testdatabases",title:"TestDatabases",description:"API reference for TestDatabases",source:"@site/../docs/reference/backend-test-utils.testdatabases.md",sourceDirName:"reference",slug:"/reference/backend-test-utils.testdatabases",permalink:"/docs/next/reference/backend-test-utils.testdatabases",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-test-utils.testdatabases.md",tags:[],version:"current",frontMatter:{id:"backend-test-utils.testdatabases",title:"TestDatabases",description:"API reference for TestDatabases"}},i={},o=[{value:"Methods",id:"methods",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/next/reference/backend-test-utils",children:(0,n.jsx)(t.code,{children:"@backstage/backend-test-utils"})})," > ",(0,n.jsx)(t.a,{href:"/docs/next/reference/backend-test-utils.testdatabases",children:(0,n.jsx)(t.code,{children:"TestDatabases"})})]}),"\n",(0,n.jsx)(t.p,{children:"Encapsulates the creation of ephemeral test database instances for use inside unit or integration tests."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"class TestDatabases \n"})}),"\n",(0,n.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Method"}),(0,n.jsx)(t.th,{children:"Modifiers"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/next/reference/backend-test-utils.testdatabases.create",children:"create(options)"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"static"})}),(0,n.jsxs)(t.td,{children:[(0,n.jsxs)(t.p,{children:["Creates an empty ",(0,n.jsx)(t.code,{children:"TestDatabases"})," instance, and sets up Jest to clean up all of its acquired resources after all tests finish."]}),(0,n.jsxs)(t.p,{children:["You typically want to create just a single instance like this at the top of your test file or ",(0,n.jsx)(t.code,{children:"describe"})," block, and then call ",(0,n.jsx)(t.code,{children:"init"}),' many times on that instance inside the individual tests. Spinning up a "physical" database instance takes a considerable amount of time, slowing down tests. But initializing a new logical database inside that instance using ',(0,n.jsx)(t.code,{children:"init"})," is very fast."]})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/next/reference/backend-test-utils.testdatabases.eachsupportedid",children:"eachSupportedId()"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/next/reference/backend-test-utils.testdatabases.init",children:"init(id)"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Returns a fresh, unique, empty logical database on an instance of the given database ID platform."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/next/reference/backend-test-utils.testdatabases.setdefaults",children:"setDefaults(options)"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"static"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/next/reference/backend-test-utils.testdatabases.supports",children:"supports(id)"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},675251:(e,t,s)=>{var n=s(667294),a=Symbol.for("react.element"),r=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,d=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,s){var n,r={},o=null,l=null;for(n in void 0!==s&&(o=""+s),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(l=t.ref),t)c.call(t,n)&&!i.hasOwnProperty(n)&&(r[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===r[n]&&(r[n]=t[n]);return{$$typeof:a,type:e,key:o,ref:l,props:r,_owner:d.current}}t.Fragment=r,t.jsx=o,t.jsxs=o},785893:(e,t,s)=>{e.exports=s(675251)},511151:(e,t,s)=>{s.d(t,{Z:()=>d,a:()=>c});var n=s(667294);const a={},r=n.createContext(a);function c(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);