/*! For license information please see b3fd34e3.74cd7cd9.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[10404],{753781:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>c,toc:()=>l});var o=r(785893),i=r(511151);const n={id:"plugin-catalog-backend-module-msgraph.microsoftgraphclient.getgroupphotowithsizelimit",title:"MicrosoftGraphClient.getGroupPhotoWithSizeLimit()",description:"API reference for MicrosoftGraphClient.getGroupPhotoWithSizeLimit()"},s=void 0,c={id:"reference/plugin-catalog-backend-module-msgraph.microsoftgraphclient.getgroupphotowithsizelimit",title:"MicrosoftGraphClient.getGroupPhotoWithSizeLimit()",description:"API reference for MicrosoftGraphClient.getGroupPhotoWithSizeLimit()",source:"@site/versioned_docs/version-stable/reference/plugin-catalog-backend-module-msgraph.microsoftgraphclient.getgroupphotowithsizelimit.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend-module-msgraph.microsoftgraphclient.getgroupphotowithsizelimit",permalink:"/docs/reference/plugin-catalog-backend-module-msgraph.microsoftgraphclient.getgroupphotowithsizelimit",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-catalog-backend-module-msgraph.microsoftgraphclient.getgroupphotowithsizelimit.md",tags:[],version:"stable",frontMatter:{id:"plugin-catalog-backend-module-msgraph.microsoftgraphclient.getgroupphotowithsizelimit",title:"MicrosoftGraphClient.getGroupPhotoWithSizeLimit()",description:"API reference for MicrosoftGraphClient.getGroupPhotoWithSizeLimit()"}},a={},l=[{value:"Parameters",id:"parameters",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,o.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-msgraph",children:(0,o.jsx)(t.code,{children:"@backstage/plugin-catalog-backend-module-msgraph"})})," > ",(0,o.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-msgraph.microsoftgraphclient",children:(0,o.jsx)(t.code,{children:"MicrosoftGraphClient"})})," > ",(0,o.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-msgraph.microsoftgraphclient.getgroupphotowithsizelimit",children:(0,o.jsx)(t.code,{children:"getGroupPhotoWithSizeLimit"})})]}),"\n",(0,o.jsxs)(t.p,{children:["Get ",(0,o.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/graph/api/resources/profilephoto",children:"profilePhoto"})," of ",(0,o.jsx)(t.code,{children:"Group"})," from Graph API with size limit"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typescript",children:"getGroupPhotoWithSizeLimit(groupId: string, maxSize: number): Promise<string | undefined>;\n"})}),"\n",(0,o.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Parameter"}),(0,o.jsx)(t.th,{children:"Type"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"groupId"}),(0,o.jsx)(t.td,{children:"string"}),(0,o.jsxs)(t.td,{children:["The unique identifier for the ",(0,o.jsx)(t.code,{children:"Group"})," resource"]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"maxSize"}),(0,o.jsx)(t.td,{children:"number"}),(0,o.jsx)(t.td,{children:"Maximum pixel height of the photo"})]})]})]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,o.jsx)(t.p,{children:"Promise<string | undefined>"})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},675251:(e,t,r)=>{var o=r(667294),i=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var o,n={},l=null,h=null;for(o in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(h=t.ref),t)s.call(t,o)&&!a.hasOwnProperty(o)&&(n[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===n[o]&&(n[o]=t[o]);return{$$typeof:i,type:e,key:l,ref:h,props:n,_owner:c.current}}t.Fragment=n,t.jsx=l,t.jsxs=l},785893:(e,t,r)=>{e.exports=r(675251)},511151:(e,t,r)=>{r.d(t,{Z:()=>c,a:()=>s});var o=r(667294);const i={},n=o.createContext(i);function s(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);