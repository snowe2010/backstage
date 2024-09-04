/*! For license information please see f6839a70.590e8bce.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[907834],{9192:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var i=n(785893),r=n(511151);const a={id:"core-app-api.multipleanalyticsapi",title:"MultipleAnalyticsApi",description:"API reference for MultipleAnalyticsApi"},c=void 0,s={id:"reference/core-app-api.multipleanalyticsapi",title:"MultipleAnalyticsApi",description:"API reference for MultipleAnalyticsApi",source:"@site/../docs/reference/core-app-api.multipleanalyticsapi.md",sourceDirName:"reference",slug:"/reference/core-app-api.multipleanalyticsapi",permalink:"/docs/next/reference/core-app-api.multipleanalyticsapi",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-app-api.multipleanalyticsapi.md",tags:[],version:"current",frontMatter:{id:"core-app-api.multipleanalyticsapi",title:"MultipleAnalyticsApi",description:"API reference for MultipleAnalyticsApi"}},l={},p=[{value:"Example",id:"example",level:2},{value:"Methods",id:"methods",level:2}];function o(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,i.jsx)(t.a,{href:"/docs/next/reference/core-app-api",children:(0,i.jsx)(t.code,{children:"@backstage/core-app-api"})})," > ",(0,i.jsx)(t.a,{href:"/docs/next/reference/core-app-api.multipleanalyticsapi",children:(0,i.jsx)(t.code,{children:"MultipleAnalyticsApi"})})]}),"\n",(0,i.jsx)(t.p,{children:"An implementation of the AnalyticsApi that can be used to forward analytics events to multiple concrete implementations."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"class MultipleAnalyticsApi implements AnalyticsApi \n"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Implements:"})," ",(0,i.jsx)(t.a,{href:"/docs/next/reference/core-plugin-api.analyticsapi",children:"AnalyticsApi"})]}),"\n",(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jsx",children:"createApiFactory({\n  api: analyticsApiRef,\n  deps: { configApi: configApiRef, identityApi: identityApiRef, storageApi: storageApiRef },\n  factory: ({ configApi, identityApi, storageApi }) =>\n    MultipleAnalyticsApi.fromApis([\n      VendorAnalyticsApi.fromConfig(configApi, { identityApi }),\n      CustomAnalyticsApi.fromConfig(configApi, { identityApi, storageApi }),\n    ]),\n});\n"})}),"\n",(0,i.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Method"}),(0,i.jsx)(t.th,{children:"Modifiers"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/docs/next/reference/core-app-api.multipleanalyticsapi.captureevent",children:"captureEvent(event)"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Forward the event to all configured analytics API implementations."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/docs/next/reference/core-app-api.multipleanalyticsapi.fromapis",children:"fromApis(actualApis)"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"static"})}),(0,i.jsx)(t.td,{children:"Create an AnalyticsApi implementation from an array of concrete implementations."})]})]})]})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},675251:(e,t,n)=>{var i=n(667294),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,s=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,n){var i,a={},p=null,o=null;for(i in void 0!==n&&(p=""+n),void 0!==t.key&&(p=""+t.key),void 0!==t.ref&&(o=t.ref),t)c.call(t,i)&&!l.hasOwnProperty(i)&&(a[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===a[i]&&(a[i]=t[i]);return{$$typeof:r,type:e,key:p,ref:o,props:a,_owner:s.current}}t.Fragment=a,t.jsx=p,t.jsxs=p},785893:(e,t,n)=>{e.exports=n(675251)},511151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>c});var i=n(667294);const r={},a=i.createContext(r);function c(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);