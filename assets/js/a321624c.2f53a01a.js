/*! For license information please see a321624c.2f53a01a.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[426995],{841165:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>t,metadata:()=>a,toc:()=>i});var n=s(785893),o=s(511151);const t={id:"plugin-catalog-backend-module-aws.awseksclusterprocessor.fromconfig",title:"AwsEKSClusterProcessor.fromConfig()",description:"API reference for AwsEKSClusterProcessor.fromConfig()"},c=void 0,a={id:"reference/plugin-catalog-backend-module-aws.awseksclusterprocessor.fromconfig",title:"AwsEKSClusterProcessor.fromConfig()",description:"API reference for AwsEKSClusterProcessor.fromConfig()",source:"@site/versioned_docs/version-stable/reference/plugin-catalog-backend-module-aws.awseksclusterprocessor.fromconfig.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend-module-aws.awseksclusterprocessor.fromconfig",permalink:"/docs/reference/plugin-catalog-backend-module-aws.awseksclusterprocessor.fromconfig",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-catalog-backend-module-aws.awseksclusterprocessor.fromconfig.md",tags:[],version:"stable",frontMatter:{id:"plugin-catalog-backend-module-aws.awseksclusterprocessor.fromconfig",title:"AwsEKSClusterProcessor.fromConfig()",description:"API reference for AwsEKSClusterProcessor.fromConfig()"}},l={},i=[{value:"Parameters",id:"parameters",level:2}];function d(e){const r={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-aws",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-catalog-backend-module-aws"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-aws.awseksclusterprocessor",children:(0,n.jsx)(r.code,{children:"AwsEKSClusterProcessor"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-aws.awseksclusterprocessor.fromconfig",children:(0,n.jsx)(r.code,{children:"fromConfig"})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"static fromConfig(configRoot: Config, options?: {\n        clusterEntityTransformer?: EksClusterEntityTransformer;\n    }): AwsEKSClusterProcessor;\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"configRoot"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/config.config",children:"Config"})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"options"}),(0,n.jsxs)(r.td,{children:["{ clusterEntityTransformer?: ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-aws.eksclusterentitytransformer",children:"EksClusterEntityTransformer"}),"; }"]}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.em,{children:"(Optional)"})})]})]})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-aws.awseksclusterprocessor",children:"AwsEKSClusterProcessor"})})]})}function f(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},675251:(e,r,s)=>{var n=s(667294),o=Symbol.for("react.element"),t=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,s){var n,t={},i=null,d=null;for(n in void 0!==s&&(i=""+s),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(d=r.ref),r)c.call(r,n)&&!l.hasOwnProperty(n)&&(t[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===t[n]&&(t[n]=r[n]);return{$$typeof:o,type:e,key:i,ref:d,props:t,_owner:a.current}}r.Fragment=t,r.jsx=i,r.jsxs=i},785893:(e,r,s)=>{e.exports=s(675251)},511151:(e,r,s)=>{s.d(r,{Z:()=>a,a:()=>c});var n=s(667294);const o={},t=n.createContext(o);function c(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);