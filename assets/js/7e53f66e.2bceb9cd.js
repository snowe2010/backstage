/*! For license information please see 7e53f66e.2bceb9cd.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[737292],{948392:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>i});var p=t(785893),o=t(511151);const r={id:"app-defaults.optionalappoptions",title:"OptionalAppOptions",description:"API reference for OptionalAppOptions"},s=void 0,a={id:"reference/app-defaults.optionalappoptions",title:"OptionalAppOptions",description:"API reference for OptionalAppOptions",source:"@site/../docs/reference/app-defaults.optionalappoptions.md",sourceDirName:"reference",slug:"/reference/app-defaults.optionalappoptions",permalink:"/docs/next/reference/app-defaults.optionalappoptions",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/app-defaults.optionalappoptions.md",tags:[],version:"current",frontMatter:{id:"app-defaults.optionalappoptions",title:"OptionalAppOptions",description:"API reference for OptionalAppOptions"}},c={},i=[];function l(e){const n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(n.p,{children:[(0,p.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,p.jsx)(n.a,{href:"/docs/next/reference/app-defaults",children:(0,p.jsx)(n.code,{children:"@backstage/app-defaults"})})," > ",(0,p.jsx)(n.a,{href:"/docs/next/reference/app-defaults.optionalappoptions",children:(0,p.jsx)(n.code,{children:"OptionalAppOptions"})})]}),"\n",(0,p.jsxs)(n.p,{children:["The set of app options that ",(0,p.jsx)(n.a,{href:"/docs/next/reference/app-defaults.createapp",children:"createApp()"})," will provide defaults for if they are not passed in explicitly."]}),"\n",(0,p.jsx)(n.p,{children:(0,p.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:"language-typescript",children:"export type OptionalAppOptions = {\n    icons?: Partial<AppIcons> & {\n        [key in string]: IconComponent;\n    };\n    themes?: (Partial<AppTheme> & Omit<AppTheme, 'theme'>)[];\n    components?: Partial<AppComponents>;\n};\n"})}),"\n",(0,p.jsxs)(n.p,{children:[(0,p.jsx)(n.strong,{children:"References:"})," ",(0,p.jsx)(n.a,{href:"/docs/next/reference/core-app-api.appicons",children:"AppIcons"}),", ",(0,p.jsx)(n.a,{href:"/docs/next/reference/core-plugin-api.iconcomponent",children:"IconComponent"}),", ",(0,p.jsx)(n.a,{href:"/docs/next/reference/core-plugin-api.apptheme",children:"AppTheme"}),", ",(0,p.jsx)(n.a,{href:"/docs/next/reference/core-app-api.appcomponents",children:"AppComponents"})]})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,p.jsx)(n,{...e,children:(0,p.jsx)(l,{...e})}):l(e)}},675251:(e,n,t)=>{var p=t(667294),o=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,n,t){var p,r={},i=null,l=null;for(p in void 0!==t&&(i=""+t),void 0!==n.key&&(i=""+n.key),void 0!==n.ref&&(l=n.ref),n)s.call(n,p)&&!c.hasOwnProperty(p)&&(r[p]=n[p]);if(e&&e.defaultProps)for(p in n=e.defaultProps)void 0===r[p]&&(r[p]=n[p]);return{$$typeof:o,type:e,key:i,ref:l,props:r,_owner:a.current}}n.Fragment=r,n.jsx=i,n.jsxs=i},785893:(e,n,t)=>{e.exports=t(675251)},511151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var p=t(667294);const o={},r=p.createContext(o);function s(e){const n=p.useContext(r);return p.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),p.createElement(r.Provider,{value:n},e.children)}}}]);