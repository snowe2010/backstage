/*! For license information please see 7c7a7c8a.d949cb00.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[949083],{908123:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>x,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var t=r(785893),s=r(511151);const o={id:"version-bridge.createversionedcontext",title:"createVersionedContext()",description:"API reference for createVersionedContext()"},i=void 0,c={id:"reference/version-bridge.createversionedcontext",title:"createVersionedContext()",description:"API reference for createVersionedContext()",source:"@site/versioned_docs/version-stable/reference/version-bridge.createversionedcontext.md",sourceDirName:"reference",slug:"/reference/version-bridge.createversionedcontext",permalink:"/docs/reference/version-bridge.createversionedcontext",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/version-bridge.createversionedcontext.md",tags:[],version:"stable",frontMatter:{id:"version-bridge.createversionedcontext",title:"createVersionedContext()",description:"API reference for createVersionedContext()"}},d={},a=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/version-bridge",children:(0,t.jsx)(n.code,{children:"@backstage/version-bridge"})})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/version-bridge.createversionedcontext",children:(0,t.jsx)(n.code,{children:"createVersionedContext"})})]}),"\n",(0,t.jsx)(n.p,{children:"Get the existing or create a new versioned React context that's stored inside a global singleton."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"function createVersionedContext<Versions extends {\n    [version in number]: unknown;\n}>(key: string): Context<VersionedValue<Versions> | undefined>;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"key"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"A key that uniquely identifies the context."})]})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,t.jsxs)(n.p,{children:["Context<",(0,t.jsx)(n.a,{href:"/docs/reference/version-bridge.versionedvalue",children:"VersionedValue"}),"<Versions> | undefined>"]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const MyContext = createVersionedContext<{ 1: string }>('my-context');\n\nconst MyContextProvider = ({children}) => (\n  <MyContext.Provider value={createVersionedValueMap({ 1: 'value-for-version-1' })}>\n    {children}\n  <MyContext.Provider>\n)\n"})})]})}function x(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},675251:(e,n,r)=>{var t=r(667294),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,r){var t,o={},a=null,l=null;for(t in void 0!==r&&(a=""+r),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(l=n.ref),n)i.call(n,t)&&!d.hasOwnProperty(t)&&(o[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===o[t]&&(o[t]=n[t]);return{$$typeof:s,type:e,key:a,ref:l,props:o,_owner:c.current}}n.Fragment=o,n.jsx=a,n.jsxs=a},785893:(e,n,r)=>{e.exports=r(675251)},511151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>i});var t=r(667294);const s={},o=t.createContext(s);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);