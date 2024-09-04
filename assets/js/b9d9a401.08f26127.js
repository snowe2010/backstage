/*! For license information please see b9d9a401.08f26127.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[160226],{807994:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var r=i(785893),t=i(511151);const a={id:"backend-openapi-utils.internal.mapdiscriminatedunion",title:"internal.MapDiscriminatedUnion",description:"API reference for internal.MapDiscriminatedUnion"},s=void 0,c={id:"reference/backend-openapi-utils.internal.mapdiscriminatedunion",title:"internal.MapDiscriminatedUnion",description:"API reference for internal.MapDiscriminatedUnion",source:"@site/versioned_docs/version-stable/reference/backend-openapi-utils.internal.mapdiscriminatedunion.md",sourceDirName:"reference",slug:"/reference/backend-openapi-utils.internal.mapdiscriminatedunion",permalink:"/docs/reference/backend-openapi-utils.internal.mapdiscriminatedunion",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/backend-openapi-utils.internal.mapdiscriminatedunion.md",tags:[],version:"stable",frontMatter:{id:"backend-openapi-utils.internal.mapdiscriminatedunion",title:"internal.MapDiscriminatedUnion",description:"API reference for internal.MapDiscriminatedUnion"}},o={},d=[];function p(e){const n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/backend-openapi-utils",children:(0,r.jsx)(n.code,{children:"@backstage/backend-openapi-utils"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/backend-openapi-utils.internal",children:(0,r.jsx)(n.code,{children:"internal"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/backend-openapi-utils.internal.mapdiscriminatedunion",children:(0,r.jsx)(n.code,{children:"MapDiscriminatedUnion"})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"export type MapDiscriminatedUnion<T extends Record<K, string>, K extends keyof T> = {\n    [V in T[K]]: DiscriminateUnion<T, K, V>;\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"References:"})," ",(0,r.jsx)(n.a,{href:"/docs/reference/backend-openapi-utils.internal.discriminateunion",children:"DiscriminateUnion"})]})]})}function l(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},675251:(e,n,i)=>{var r=i(667294),t=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,i){var r,a={},d=null,p=null;for(r in void 0!==i&&(d=""+i),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(p=n.ref),n)s.call(n,r)&&!o.hasOwnProperty(r)&&(a[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===a[r]&&(a[r]=n[r]);return{$$typeof:t,type:e,key:d,ref:p,props:a,_owner:c.current}}n.Fragment=a,n.jsx=d,n.jsxs=d},785893:(e,n,i)=>{e.exports=i(675251)},511151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>s});var r=i(667294);const t={},a=r.createContext(t);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);