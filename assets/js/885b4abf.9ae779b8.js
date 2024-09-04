/*! For license information please see 885b4abf.9ae779b8.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[728674],{18366:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>a});var i=r(785893),n=r(511151);const s={id:"adrs-overview",title:"Architecture Decision Records (ADR)",sidebar_label:"Overview",description:"Overview of Architecture Decision Records (ADR)"},c=void 0,o={id:"architecture-decisions/adrs-overview",title:"Architecture Decision Records (ADR)",description:"Overview of Architecture Decision Records (ADR)",source:"@site/versioned_docs/version-stable/architecture-decisions/index.md",sourceDirName:"architecture-decisions",slug:"/architecture-decisions/",permalink:"/docs/architecture-decisions/",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/architecture-decisions/index.md",tags:[],version:"stable",frontMatter:{id:"adrs-overview",title:"Architecture Decision Records (ADR)",sidebar_label:"Overview",description:"Overview of Architecture Decision Records (ADR)"},sidebar:"docs",previous:{title:"Setup OpenTelemetry",permalink:"/docs/tutorials/setup-opentelemetry"},next:{title:"ADR001: Architecture Decision Record (ADR) log",permalink:"/docs/architecture-decisions/adrs-adr001"}},d={},a=[{value:"Contributing",id:"contributing",level:2},{value:"Creating an ADR",id:"creating-an-adr",level:3},{value:"Superseding an ADR",id:"superseding-an-adr",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["The substantial architecture decisions made in the Backstage project live here.\nFor more information about ADRs, when to write them, and why, please see\n",(0,i.jsx)(t.a,{href:"https://engineering.atspotify.com/2020/04/14/when-should-i-write-an-architecture-decision-record/",children:"this blog post"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Records are never deleted but can be marked as superseded by new decisions or\ndeprecated."}),"\n",(0,i.jsxs)(t.p,{children:["Records should be stored under the ",(0,i.jsx)(t.code,{children:"architecture-decisions"})," directory."]}),"\n",(0,i.jsx)(t.h2,{id:"contributing",children:"Contributing"}),"\n",(0,i.jsx)(t.h3,{id:"creating-an-adr",children:"Creating an ADR"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Copy ",(0,i.jsx)(t.code,{children:"docs/architecture-decisions/adr000-template.md"})," to\n",(0,i.jsx)(t.code,{children:"docs/architecture-decisions/adr000-my-decision.md"})," (my-decision should be\ndescriptive. Do not assign an ADR number.)"]}),"\n",(0,i.jsx)(t.li,{children:"Fill in the ADR following the guidelines in the template"}),"\n",(0,i.jsx)(t.li,{children:"Submit a pull request"}),"\n",(0,i.jsx)(t.li,{children:"Address and integrate feedback from the community"}),"\n",(0,i.jsx)(t.li,{children:"Eventually, assign a number"}),"\n",(0,i.jsxs)(t.li,{children:["Add the path of the ADR to the microsite sidebar in\n",(0,i.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/microsite/sidebars.json",children:(0,i.jsx)(t.code,{children:"sidebars.json"})})]}),"\n",(0,i.jsxs)(t.li,{children:["Add the path of the ADR to the\n",(0,i.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/mkdocs.yml",children:(0,i.jsx)(t.code,{children:"mkdocs.yml"})})]}),"\n",(0,i.jsx)(t.li,{children:"Merge the pull request"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"superseding-an-adr",children:"Superseding an ADR"}),"\n",(0,i.jsx)(t.p,{children:'If an ADR supersedes an older ADR then the status of the older ADR is changed to\n"superseded by ADR-XXXX", and links to the new ADR.'})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},675251:(e,t,r)=>{var i=r(667294),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,r){var i,s={},a=null,l=null;for(i in void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(l=t.ref),t)c.call(t,i)&&!d.hasOwnProperty(i)&&(s[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===s[i]&&(s[i]=t[i]);return{$$typeof:n,type:e,key:a,ref:l,props:s,_owner:o.current}}t.Fragment=s,t.jsx=a,t.jsxs=a},785893:(e,t,r)=>{e.exports=r(675251)},511151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>c});var i=r(667294);const n={},s=i.createContext(n);function c(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);