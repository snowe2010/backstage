/*! For license information please see 07a3196b.f1eab72e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[504232],{133598:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var t=n(785893),s=n(511151);const o={id:"plugin-kubernetes-react.kubernetesproxyclient.getpodlogs",title:"KubernetesProxyClient.getPodLogs()",description:"API reference for KubernetesProxyClient.getPodLogs()"},c=void 0,i={id:"reference/plugin-kubernetes-react.kubernetesproxyclient.getpodlogs",title:"KubernetesProxyClient.getPodLogs()",description:"API reference for KubernetesProxyClient.getPodLogs()",source:"@site/versioned_docs/version-stable/reference/plugin-kubernetes-react.kubernetesproxyclient.getpodlogs.md",sourceDirName:"reference",slug:"/reference/plugin-kubernetes-react.kubernetesproxyclient.getpodlogs",permalink:"/docs/reference/plugin-kubernetes-react.kubernetesproxyclient.getpodlogs",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-kubernetes-react.kubernetesproxyclient.getpodlogs.md",tags:[],version:"stable",frontMatter:{id:"plugin-kubernetes-react.kubernetesproxyclient.getpodlogs",title:"KubernetesProxyClient.getPodLogs()",description:"API reference for KubernetesProxyClient.getPodLogs()"}},a={},l=[{value:"Parameters",id:"parameters",level:2}];function d(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react",children:(0,t.jsx)(r.code,{children:"@backstage/plugin-kubernetes-react"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.kubernetesproxyclient",children:(0,t.jsx)(r.code,{children:"KubernetesProxyClient"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.kubernetesproxyclient.getpodlogs",children:(0,t.jsx)(r.code,{children:"getPodLogs"})})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"getPodLogs({ podName, namespace, clusterName, containerName, previous, }: {\n        podName: string;\n        namespace: string;\n        clusterName: string;\n        containerName: string;\n        previous?: boolean;\n    }): Promise<{\n        text: string;\n    }>;\n"})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Parameter"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"{ podName, namespace, clusterName, containerName, previous, }"}),(0,t.jsx)(r.td,{children:"{ podName: string; namespace: string; clusterName: string; containerName: string; previous?: boolean; }"}),(0,t.jsx)(r.td,{})]})})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,t.jsx)(r.p,{children:"Promise<{ text: string; }>"})]})}function p(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},675251:(e,r,n)=>{var t=n(667294),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,n){var t,o={},l=null,d=null;for(t in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(d=r.ref),r)c.call(r,t)&&!a.hasOwnProperty(t)&&(o[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===o[t]&&(o[t]=r[t]);return{$$typeof:s,type:e,key:l,ref:d,props:o,_owner:i.current}}r.Fragment=o,r.jsx=l,r.jsxs=l},785893:(e,r,n)=>{e.exports=n(675251)},511151:(e,r,n)=>{n.d(r,{Z:()=>i,a:()=>c});var t=n(667294);const s={},o=t.createContext(s);function c(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);