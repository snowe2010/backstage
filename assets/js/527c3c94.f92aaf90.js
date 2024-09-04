/*! For license information please see 527c3c94.f92aaf90.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[461459],{386545:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>a});var t=n(785893),c=n(511151);const o={id:"core-plugin-api.apptheme",title:"AppTheme",description:"API reference for AppTheme"},p=void 0,i={id:"reference/core-plugin-api.apptheme",title:"AppTheme",description:"API reference for AppTheme",source:"@site/../docs/reference/core-plugin-api.apptheme.md",sourceDirName:"reference",slug:"/reference/core-plugin-api.apptheme",permalink:"/docs/next/reference/core-plugin-api.apptheme",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-plugin-api.apptheme.md",tags:[],version:"current",frontMatter:{id:"core-plugin-api.apptheme",title:"AppTheme",description:"API reference for AppTheme"}},s={},a=[];function l(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/core-plugin-api",children:(0,t.jsx)(r.code,{children:"@backstage/core-plugin-api"})})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/core-plugin-api.apptheme",children:(0,t.jsx)(r.code,{children:"AppTheme"})})]}),"\n",(0,t.jsx)(r.p,{children:"Describes a theme provided by the app."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"export type AppTheme = {\n    id: string;\n    title: string;\n    variant: 'light' | 'dark';\n    icon?: React.ReactElement;\n    Provider(props: {\n        children: ReactNode;\n    }): JSX.Element | null;\n};\n"})})]})}function d(e={}){const{wrapper:r}={...(0,c.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},675251:(e,r,n)=>{var t=n(667294),c=Symbol.for("react.element"),o=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,n){var t,o={},a=null,l=null;for(t in void 0!==n&&(a=""+n),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(l=r.ref),r)p.call(r,t)&&!s.hasOwnProperty(t)&&(o[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===o[t]&&(o[t]=r[t]);return{$$typeof:c,type:e,key:a,ref:l,props:o,_owner:i.current}}r.Fragment=o,r.jsx=a,r.jsxs=a},785893:(e,r,n)=>{e.exports=n(675251)},511151:(e,r,n)=>{n.d(r,{Z:()=>i,a:()=>p});var t=n(667294);const c={},o=t.createContext(c);function p(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:p(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);