/*! For license information please see 4a7a6d09.cdc608d3.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[412347],{752723:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>d,toc:()=>l});var s=r(785893),t=r(511151);const c={id:"plugin-kubernetes-common",title:"@backstage/plugin-kubernetes-common",description:"API Reference for @backstage/plugin-kubernetes-common"},o=void 0,d={id:"reference/plugin-kubernetes-common",title:"@backstage/plugin-kubernetes-common",description:"API Reference for @backstage/plugin-kubernetes-common",source:"@site/versioned_docs/version-stable/reference/plugin-kubernetes-common.md",sourceDirName:"reference",slug:"/reference/plugin-kubernetes-common",permalink:"/docs/reference/plugin-kubernetes-common",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-kubernetes-common.md",tags:[],version:"stable",frontMatter:{id:"plugin-kubernetes-common",title:"@backstage/plugin-kubernetes-common",description:"API Reference for @backstage/plugin-kubernetes-common"}},i={},l=[{value:"Interfaces",id:"interfaces",level:2},{value:"Variables",id:"variables",level:2},{value:"Type Aliases",id:"type-aliases",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common",children:(0,s.jsx)(n.code,{children:"@backstage/plugin-kubernetes-common"})})]}),"\n",(0,s.jsxs)(n.p,{children:["Common functionalities for Kubernetes, to be shared between the ",(0,s.jsx)(n.code,{children:"kubernetes"})," and ",(0,s.jsx)(n.code,{children:"kubernetes-backend"})," plugins"]}),"\n",(0,s.jsx)(n.h2,{id:"interfaces",children:"Interfaces"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Interface"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.clientcontainerstatus",children:"ClientContainerStatus"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.clientcurrentresourceusage",children:"ClientCurrentResourceUsage"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.clientpodstatus",children:"ClientPodStatus"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.clusterattributes",children:"ClusterAttributes"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.clusterobjects",children:"ClusterObjects"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.configmapfetchresponse",children:"ConfigMapFetchResponse"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.cronjobsfetchresponse",children:"CronJobsFetchResponse"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.customobjectsbyentityrequest",children:"CustomObjectsByEntityRequest"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.customresourcefetchresponse",children:"CustomResourceFetchResponse"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.customresourcematcher",children:"CustomResourceMatcher"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.daemonsetsfetchresponse",children:"DaemonSetsFetchResponse"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.deploymentfetchresponse",children:"DeploymentFetchResponse"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.deploymentresources",children:"DeploymentResources"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.detectederror",children:"DetectedError"})}),(0,s.jsx)(n.td,{children:"Represents an error found on a Kubernetes object"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.docssolution",children:"DocsSolution"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.errormapper",children:"ErrorMapper"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.eventssolution",children:"EventsSolution"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.groupedresponses",children:"GroupedResponses"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.horizontalpodautoscalersfetchresponse",children:"HorizontalPodAutoscalersFetchResponse"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.ingressesfetchresponse",children:"IngressesFetchResponse"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.jobsfetchresponse",children:"JobsFetchResponse"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.kubernetesrequestbody",children:"KubernetesRequestBody"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.limitrangefetchresponse",children:"LimitRangeFetchResponse"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.logsolution",children:"LogSolution"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.objectsbyentityresponse",children:"ObjectsByEntityResponse"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.podfetchresponse",children:"PodFetchResponse"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.podstatusfetchresponse",children:"PodStatusFetchResponse"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.proposedfixbase",children:"ProposedFixBase"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.rawfetcherror",children:"RawFetchError"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.replicasetsfetchresponse",children:"ReplicaSetsFetchResponse"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.resourcequotafetchresponse",children:"ResourceQuotaFetchResponse"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.resourceref",children:"ResourceRef"})}),(0,s.jsx)(n.td,{children:"A reference to a Kubernetes object"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.servicefetchresponse",children:"ServiceFetchResponse"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.statefulsetsfetchresponse",children:"StatefulSetsFetchResponse"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.statuserror",children:"StatusError"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.workloadsbyentityrequest",children:"WorkloadsByEntityRequest"})}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"variables",children:"Variables"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Variable"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.annotation_kubernetes_api_server_ca",children:"ANNOTATION_KUBERNETES_API_SERVER_CA"})}),(0,s.jsx)(n.td,{children:"Annotation for specifying the Certificate Authority of an API server for a Kubernetes cluster"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.annotation_kubernetes_api_server",children:"ANNOTATION_KUBERNETES_API_SERVER"})}),(0,s.jsx)(n.td,{children:"Annotation for specifying the API server of a Kubernetes cluster"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.annotation_kubernetes_auth_provider",children:"ANNOTATION_KUBERNETES_AUTH_PROVIDER"})}),(0,s.jsx)(n.td,{children:"Annotation for specifying the auth provider for a Kubernetes cluster"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.annotation_kubernetes_aws_assume_role",children:"ANNOTATION_KUBERNETES_AWS_ASSUME_ROLE"})}),(0,s.jsx)(n.td,{children:"Annotation for specifying the assume role use to authenticate with AWS."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.annotation_kubernetes_aws_cluster_id",children:"ANNOTATION_KUBERNETES_AWS_CLUSTER_ID"})}),(0,s.jsx)(n.td,{children:"Annotation for specifying the AWS ID of a cluster when signing STS tokens"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.annotation_kubernetes_aws_external_id",children:"ANNOTATION_KUBERNETES_AWS_EXTERNAL_ID"})}),(0,s.jsx)(n.td,{children:"Annotation for specifying an external id when communicating with AWS"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.annotation_kubernetes_dashboard_app",children:"ANNOTATION_KUBERNETES_DASHBOARD_APP"})}),(0,s.jsx)(n.td,{children:"Annotation for specifying the dashboard app for a Kubernetes cluster."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.annotation_kubernetes_dashboard_parameters",children:"ANNOTATION_KUBERNETES_DASHBOARD_PARAMETERS"})}),(0,s.jsx)(n.td,{children:"Annotation for specifying the dashboard app parameters for a Kubernetes cluster."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.annotation_kubernetes_dashboard_url",children:"ANNOTATION_KUBERNETES_DASHBOARD_URL"})}),(0,s.jsx)(n.td,{children:"Annotation for specifying the dashboard url for a Kubernetes cluster."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.annotation_kubernetes_oidc_token_provider",children:"ANNOTATION_KUBERNETES_OIDC_TOKEN_PROVIDER"})}),(0,s.jsx)(n.td,{children:"Annotation for specifying the oidc provider used to get id tokens for a Kubernetes cluster"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.annotation_kubernetes_skip_metrics_lookup",children:"ANNOTATION_KUBERNETES_SKIP_METRICS_LOOKUP"})}),(0,s.jsx)(n.td,{children:"Annotation for specifying boolean value for skip metric lookup."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.annotation_kubernetes_skip_tls_verify",children:"ANNOTATION_KUBERNETES_SKIP_TLS_VERIFY"})}),(0,s.jsx)(n.td,{children:"Annotation for specifying boolean value for skip tls verify."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.detecterrors",children:"detectErrors"})}),(0,s.jsx)(n.td,{children:"For each cluster try to find errors in each of the object types provided returning a map of cluster names to errors in that cluster"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.groupresponses",children:"groupResponses"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.kubernetespermissions",children:"kubernetesPermissions"})}),(0,s.jsx)(n.td,{children:"List of all Kubernetes permissions."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.kubernetesproxypermission",children:"kubernetesProxyPermission"})}),(0,s.jsx)(n.td,{children:"This permission is used to check access to the proxy endpoint"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"type-aliases",children:"Type Aliases"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Type Alias"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.authprovidertype",children:"AuthProviderType"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.detectederrorsbycluster",children:"DetectedErrorsByCluster"})}),(0,s.jsx)(n.td,{children:"A list of errors keyed by Cluster name"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.errorseverity",children:"ErrorSeverity"})}),(0,s.jsx)(n.td,{children:"Severity of the error, where 10 is critical and 0 is very low."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.fetchresponse",children:"FetchResponse"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.kuberneteserrortypes",children:"KubernetesErrorTypes"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.kubernetesfetcherror",children:"KubernetesFetchError"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.kubernetesrequestauth",children:"KubernetesRequestAuth"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.proposedfix",children:"ProposedFix"})}),(0,s.jsx)(n.td,{})]})]})]})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},675251:(e,n,r)=>{var s=r(667294),t=Symbol.for("react.element"),c=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,d=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var s,c={},l=null,h=null;for(s in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(h=n.ref),n)o.call(n,s)&&!i.hasOwnProperty(s)&&(c[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===c[s]&&(c[s]=n[s]);return{$$typeof:t,type:e,key:l,ref:h,props:c,_owner:d.current}}n.Fragment=c,n.jsx=l,n.jsxs=l},785893:(e,n,r)=>{e.exports=r(675251)},511151:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>o});var s=r(667294);const t={},c=s.createContext(t);function o(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);