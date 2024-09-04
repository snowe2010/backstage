/*! For license information please see 2d3710d3.5ef0ff3b.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[610615],{832143:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>l});var s=n(785893),c=n(511151);const t={id:"backend-plugin-api.schedulerservice",title:"SchedulerService",description:"API reference for SchedulerService"},d=void 0,i={id:"reference/backend-plugin-api.schedulerservice",title:"SchedulerService",description:"API reference for SchedulerService",source:"@site/versioned_docs/version-stable/reference/backend-plugin-api.schedulerservice.md",sourceDirName:"reference",slug:"/reference/backend-plugin-api.schedulerservice",permalink:"/docs/reference/backend-plugin-api.schedulerservice",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/backend-plugin-api.schedulerservice.md",tags:[],version:"stable",frontMatter:{id:"backend-plugin-api.schedulerservice",title:"SchedulerService",description:"API reference for SchedulerService"}},a={},l=[{value:"Methods",id:"methods",level:2}];function o(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,s.jsx)(r.a,{href:"/docs/reference/backend-plugin-api",children:(0,s.jsx)(r.code,{children:"@backstage/backend-plugin-api"})})," > ",(0,s.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.schedulerservice",children:(0,s.jsx)(r.code,{children:"SchedulerService"})})]}),"\n",(0,s.jsx)(r.p,{children:"Deals with the scheduling of distributed tasks, for a given plugin."}),"\n",(0,s.jsxs)(r.p,{children:["See the ",(0,s.jsx)(r.a,{href:"https://backstage.io/docs/backend-system/core-services/scheduler",children:"service documentation"})," for more details."]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"export interface SchedulerService \n"})}),"\n",(0,s.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Method"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.schedulerservice.createscheduledtaskrunner",children:"createScheduledTaskRunner(schedule)"})}),(0,s.jsx)(r.td,{children:"Creates a scheduled but dormant recurring task, ready to be launched at a later time."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.schedulerservice.getscheduledtasks",children:"getScheduledTasks()"})}),(0,s.jsx)(r.td,{children:"Returns all scheduled tasks registered to this scheduler."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.schedulerservice.scheduletask",children:"scheduleTask(task)"})}),(0,s.jsx)(r.td,{children:"Schedules a task function for recurring runs."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.schedulerservice.triggertask",children:"triggerTask(id)"})}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.p,{children:"Manually triggers a task by ID."}),(0,s.jsx)(r.p,{children:"If the task doesn't exist, a NotFoundError is thrown. If the task is currently running, a ConflictError is thrown."})]})]})]})]})]})}function h(e={}){const{wrapper:r}={...(0,c.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},675251:(e,r,n)=>{var s=n(667294),c=Symbol.for("react.element"),t=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,n){var s,t={},l=null,o=null;for(s in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(o=r.ref),r)d.call(r,s)&&!a.hasOwnProperty(s)&&(t[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===t[s]&&(t[s]=r[s]);return{$$typeof:c,type:e,key:l,ref:o,props:t,_owner:i.current}}r.Fragment=t,r.jsx=l,r.jsxs=l},785893:(e,r,n)=>{e.exports=n(675251)},511151:(e,r,n)=>{n.d(r,{Z:()=>i,a:()=>d});var s=n(667294);const c={},t=s.createContext(c);function d(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);