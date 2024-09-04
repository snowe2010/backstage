/*! For license information please see f67d20fe.98dd0636.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[853983],{909914:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>a});var t=n(785893),s=n(511151);const c={id:"plugin-kubernetes-node.kubernetesfetcher.fetchpodmetricsbynamespaces",title:"KubernetesFetcher.fetchPodMetricsByNamespaces()",description:"API reference for KubernetesFetcher.fetchPodMetricsByNamespaces()"},d=void 0,i={id:"reference/plugin-kubernetes-node.kubernetesfetcher.fetchpodmetricsbynamespaces",title:"KubernetesFetcher.fetchPodMetricsByNamespaces()",description:"API reference for KubernetesFetcher.fetchPodMetricsByNamespaces()",source:"@site/versioned_docs/version-stable/reference/plugin-kubernetes-node.kubernetesfetcher.fetchpodmetricsbynamespaces.md",sourceDirName:"reference",slug:"/reference/plugin-kubernetes-node.kubernetesfetcher.fetchpodmetricsbynamespaces",permalink:"/docs/reference/plugin-kubernetes-node.kubernetesfetcher.fetchpodmetricsbynamespaces",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-kubernetes-node.kubernetesfetcher.fetchpodmetricsbynamespaces.md",tags:[],version:"stable",frontMatter:{id:"plugin-kubernetes-node.kubernetesfetcher.fetchpodmetricsbynamespaces",title:"KubernetesFetcher.fetchPodMetricsByNamespaces()",description:"API reference for KubernetesFetcher.fetchPodMetricsByNamespaces()"}},o={},a=[{value:"Parameters",id:"parameters",level:2}];function l(e){const r={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-node",children:(0,t.jsx)(r.code,{children:"@backstage/plugin-kubernetes-node"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-node.kubernetesfetcher",children:(0,t.jsx)(r.code,{children:"KubernetesFetcher"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-node.kubernetesfetcher.fetchpodmetricsbynamespaces",children:(0,t.jsx)(r.code,{children:"fetchPodMetricsByNamespaces"})})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"fetchPodMetricsByNamespaces(clusterDetails: ClusterDetails, credential: KubernetesCredential, namespaces: Set<string>, labelSelector?: string): Promise<FetchResponseWrapper>;\n"})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Parameter"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"clusterDetails"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-node.clusterdetails",children:"ClusterDetails"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"credential"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-node.kubernetescredential",children:"KubernetesCredential"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"namespaces"}),(0,t.jsx)(r.td,{children:"Set<string>"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"labelSelector"}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.em,{children:"(Optional)"})})]})]})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,t.jsxs)(r.p,{children:["Promise<",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-node.fetchresponsewrapper",children:"FetchResponseWrapper"}),">"]})]})}function h(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},675251:(e,r,n)=>{var t=n(667294),s=Symbol.for("react.element"),c=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,n){var t,c={},a=null,l=null;for(t in void 0!==n&&(a=""+n),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(l=r.ref),r)d.call(r,t)&&!o.hasOwnProperty(t)&&(c[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===c[t]&&(c[t]=r[t]);return{$$typeof:s,type:e,key:a,ref:l,props:c,_owner:i.current}}r.Fragment=c,r.jsx=a,r.jsxs=a},785893:(e,r,n)=>{e.exports=n(675251)},511151:(e,r,n)=>{n.d(r,{Z:()=>i,a:()=>d});var t=n(667294);const s={},c=t.createContext(s);function d(e){const r=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(c.Provider,{value:r},e.children)}}}]);