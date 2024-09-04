/*! For license information please see 24a49a02.f740be9e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[923654],{96694:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var s=n(785893),o=n(511151);const a={id:"locations",sidebar_label:"Locations",title:"Amazon Web Services S3 Locations",description:"Setting up an integration with Amazon Web Services S3"},i=void 0,r={id:"integrations/aws-s3/locations",title:"Amazon Web Services S3 Locations",description:"Setting up an integration with Amazon Web Services S3",source:"@site/../docs/integrations/aws-s3/locations.md",sourceDirName:"integrations/aws-s3",slug:"/integrations/aws-s3/locations",permalink:"/docs/next/integrations/aws-s3/locations",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/integrations/aws-s3/locations.md",tags:[],version:"current",frontMatter:{id:"locations",sidebar_label:"Locations",title:"Amazon Web Services S3 Locations",description:"Setting up an integration with Amazon Web Services S3"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/next/integrations/"},next:{title:"Discovery",permalink:"/docs/next/integrations/aws-s3/discovery"}},c={},l=[{value:"Configuration",id:"configuration",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["The AWS S3 integration supports loading catalog entities from an S3 Bucket.\nEntities can be added to\n",(0,s.jsx)(t.a,{href:"/docs/next/features/software-catalog/configuration",children:"static catalog configuration"}),",\nor registered with the\n",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/catalog-import",children:"catalog-import"}),"\nplugin."]}),"\n",(0,s.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsxs)(t.p,{children:["To use this integration, add configuration to your ",(0,s.jsx)(t.code,{children:"app-config.yaml"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"integrations:\n  awsS3:\n    - accessKeyId: ${AWS_ACCESS_KEY_ID}\n      secretAccessKey: ${AWS_SECRET_ACCESS_KEY}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Then make sure the environment variables ",(0,s.jsx)(t.code,{children:"AWS_ACCESS_KEY_ID"})," and\n",(0,s.jsx)(t.code,{children:"AWS_SECRET_ACCESS_KEY"})," are set when you run Backstage."]}),"\n",(0,s.jsxs)(t.p,{children:["Users with multiple AWS accounts may want to use a role for S3 storage that is\nin a different AWS account. Using the ",(0,s.jsx)(t.code,{children:"roleArn"})," parameter as seen below, you can\ninstruct the AWS S3 reader to assume a role before accessing S3:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"integrations:\n  awsS3:\n    - accessKeyId: ${AWS_ACCESS_KEY_ID}\n      secretAccessKey: ${AWS_SECRET_ACCESS_KEY}\n      roleArn: 'arn:aws:iam::xxxxxxxxxxxx:role/example-role'\n      externalId: 'some-id' # optional\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Configuration allows specifying custom S3 endpoint, along with\n",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/VirtualHosting.html",children:"path-style access"}),"\nto support integration with providers like\n",(0,s.jsx)(t.a,{href:"https://github.com/localstack/localstack",children:"LocalStack"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"integrations:\n  awsS3:\n    - endpoint: 'http://localhost:4566'\n      s3ForcePathStyle: true\n      accessKeyId: ${AWS_ACCESS_KEY_ID}\n      secretAccessKey: ${AWS_SECRET_ACCESS_KEY}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},675251:(e,t,n)=>{var s=n(667294),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,r=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var s,a={},l=null,d=null;for(s in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,s)&&!c.hasOwnProperty(s)&&(a[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===a[s]&&(a[s]=t[s]);return{$$typeof:o,type:e,key:l,ref:d,props:a,_owner:r.current}}t.Fragment=a,t.jsx=l,t.jsxs=l},785893:(e,t,n)=>{e.exports=n(675251)},511151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>i});var s=n(667294);const o={},a=s.createContext(o);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);