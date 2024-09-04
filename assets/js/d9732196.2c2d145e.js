/*! For license information please see d9732196.2c2d145e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[313002],{195734:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var t=n(785893),s=n(511151);const a={id:"core-plugin-api.storageapi.observe_",title:"StorageApi.observe$()",description:"API reference for StorageApi.observe$()"},o=void 0,i={id:"reference/core-plugin-api.storageapi.observe_",title:"StorageApi.observe$()",description:"API reference for StorageApi.observe$()",source:"@site/versioned_docs/version-stable/reference/core-plugin-api.storageapi.observe_.md",sourceDirName:"reference",slug:"/reference/core-plugin-api.storageapi.observe_",permalink:"/docs/reference/core-plugin-api.storageapi.observe_",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/core-plugin-api.storageapi.observe_.md",tags:[],version:"stable",frontMatter:{id:"core-plugin-api.storageapi.observe_",title:"StorageApi.observe$()",description:"API reference for StorageApi.observe$()"}},c={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function d(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/core-plugin-api",children:(0,t.jsx)(r.code,{children:"@backstage/core-plugin-api"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/core-plugin-api.storageapi",children:(0,t.jsx)(r.code,{children:"StorageApi"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/core-plugin-api.storageapi.observe_",children:(0,t.jsx)(r.code,{children:"observe$"})})]}),"\n",(0,t.jsx)(r.p,{children:"Observe the value over time for a particular key in the current bucket."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"observe$<T extends JsonValue>(key: string): Observable<StorageValueSnapshot<T>>;\n"})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Parameter"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"key"}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{children:"Unique key associated with the data"})]})})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/types.observable",children:"Observable"}),"<",(0,t.jsx)(r.a,{href:"/docs/reference/core-plugin-api.storagevaluesnapshot",children:"StorageValueSnapshot"}),"<T>>"]}),"\n",(0,t.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsx)(r.p,{children:"The observable will only emit values when the value changes in the underlying storage, although multiple values with the same shape may be emitted in a row."}),"\n",(0,t.jsxs)(r.p,{children:["If a ",(0,t.jsx)(r.a,{href:"/docs/reference/core-plugin-api.storageapi.snapshot",children:"StorageApi.snapshot()"})," of a key is retrieved and the presence is ",(0,t.jsx)(r.code,{children:"'unknown'"}),", then you are guaranteed to receive a snapshot with a known presence, as long as you observe the key within the same tick."]}),"\n",(0,t.jsx)(r.p,{children:"Since the emitted values are shared across all subscribers, it is important not to mutate the returned values. The values may be frozen as a precaution."})]})}function p(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},675251:(e,r,n)=>{var t=n(667294),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,n){var t,a={},l=null,d=null;for(t in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(d=r.ref),r)o.call(r,t)&&!c.hasOwnProperty(t)&&(a[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===a[t]&&(a[t]=r[t]);return{$$typeof:s,type:e,key:l,ref:d,props:a,_owner:i.current}}r.Fragment=a,r.jsx=l,r.jsxs=l},785893:(e,r,n)=>{e.exports=n(675251)},511151:(e,r,n)=>{n.d(r,{Z:()=>i,a:()=>o});var t=n(667294);const s={},a=t.createContext(s);function o(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);