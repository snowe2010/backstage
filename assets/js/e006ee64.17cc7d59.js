/*! For license information please see e006ee64.17cc7d59.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[337134],{288535:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var o=t(785893),r=t(511151);const s={id:"plugin-scaffolder-react.fieldextensionoptions",title:"FieldExtensionOptions",description:"API reference for FieldExtensionOptions"},i=void 0,c={id:"reference/plugin-scaffolder-react.fieldextensionoptions",title:"FieldExtensionOptions",description:"API reference for FieldExtensionOptions",source:"@site/versioned_docs/version-stable/reference/plugin-scaffolder-react.fieldextensionoptions.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-react.fieldextensionoptions",permalink:"/docs/reference/plugin-scaffolder-react.fieldextensionoptions",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-scaffolder-react.fieldextensionoptions.md",tags:[],version:"stable",frontMatter:{id:"plugin-scaffolder-react.fieldextensionoptions",title:"FieldExtensionOptions",description:"API reference for FieldExtensionOptions"}},l={},a=[];function d(e){const n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,o.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-react",children:(0,o.jsx)(n.code,{children:"@backstage/plugin-scaffolder-react"})})," > ",(0,o.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-react.fieldextensionoptions",children:(0,o.jsx)(n.code,{children:"FieldExtensionOptions"})})]}),"\n",(0,o.jsx)(n.p,{children:"Type for the Custom Field Extension with the name and components and validation function."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"export type FieldExtensionOptions<TFieldReturnValue = unknown, TUiOptions = unknown> = {\n    name: string;\n    component: (props: FieldExtensionComponentProps<TFieldReturnValue, TUiOptions>) => JSX.Element | null;\n    validation?: CustomFieldValidator<TFieldReturnValue, TUiOptions>;\n    schema?: CustomFieldExtensionSchema;\n};\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"References:"})," ",(0,o.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-react.fieldextensioncomponentprops",children:"FieldExtensionComponentProps"}),", ",(0,o.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-react.customfieldvalidator",children:"CustomFieldValidator"}),", ",(0,o.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-react.customfieldextensionschema",children:"CustomFieldExtensionSchema"})]})]})}function f(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},675251:(e,n,t)=>{var o=t(667294),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,t){var o,s={},a=null,d=null;for(o in void 0!==t&&(a=""+t),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(d=n.ref),n)i.call(n,o)&&!l.hasOwnProperty(o)&&(s[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===s[o]&&(s[o]=n[o]);return{$$typeof:r,type:e,key:a,ref:d,props:s,_owner:c.current}}n.Fragment=s,n.jsx=a,n.jsxs=a},785893:(e,n,t)=>{e.exports=t(675251)},511151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>i});var o=t(667294);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);