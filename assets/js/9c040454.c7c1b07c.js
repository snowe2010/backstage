/*! For license information please see 9c040454.c7c1b07c.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[629104],{9082:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>f,contentTitle:()=>c,default:()=>i,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var n=t(785893),s=t(511151);const a={id:"plugin-scaffolder-react.taskstream",title:"TaskStream",description:"API reference for TaskStream"},c=void 0,o={id:"reference/plugin-scaffolder-react.taskstream",title:"TaskStream",description:"API reference for TaskStream",source:"@site/../docs/reference/plugin-scaffolder-react.taskstream.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-react.taskstream",permalink:"/docs/next/reference/plugin-scaffolder-react.taskstream",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-scaffolder-react.taskstream.md",tags:[],version:"current",frontMatter:{id:"plugin-scaffolder-react.taskstream",title:"TaskStream",description:"API reference for TaskStream"}},f={},l=[];function d(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/next/reference/plugin-scaffolder-react",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-scaffolder-react"})})," > ",(0,n.jsx)(r.a,{href:"/docs/next/reference/plugin-scaffolder-react.taskstream",children:(0,n.jsx)(r.code,{children:"TaskStream"})})]}),"\n",(0,n.jsx)(r.p,{children:"A task event from the event stream"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"export type TaskStream = {\n    cancelled: boolean;\n    loading: boolean;\n    error?: Error;\n    stepLogs: {\n        [stepId in string]: string[];\n    };\n    completed: boolean;\n    task?: ScaffolderTask;\n    steps: {\n        [stepId in string]: ScaffolderStep;\n    };\n    output?: ScaffolderTaskOutput;\n};\n"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"References:"})," ",(0,n.jsx)(r.a,{href:"/docs/next/reference/plugin-scaffolder-react.scaffoldertask",children:"ScaffolderTask"}),", ",(0,n.jsx)(r.a,{href:"/docs/next/reference/plugin-scaffolder-react.scaffolderstep",children:"ScaffolderStep"}),", ",(0,n.jsx)(r.a,{href:"/docs/next/reference/plugin-scaffolder-react.scaffoldertaskoutput",children:"ScaffolderTaskOutput"})]})]})}function i(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},675251:(e,r,t)=>{var n=t(667294),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,t){var n,a={},l=null,d=null;for(n in void 0!==t&&(l=""+t),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(d=r.ref),r)c.call(r,n)&&!f.hasOwnProperty(n)&&(a[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===a[n]&&(a[n]=r[n]);return{$$typeof:s,type:e,key:l,ref:d,props:a,_owner:o.current}}r.Fragment=a,r.jsx=l,r.jsxs=l},785893:(e,r,t)=>{e.exports=t(675251)},511151:(e,r,t)=>{t.d(r,{Z:()=>o,a:()=>c});var n=t(667294);const s={},a=n.createContext(s);function c(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);