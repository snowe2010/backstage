/*! For license information please see 825019b9.24fff951.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[345429],{260454:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=t(785893),c=t(511151);const o={id:"backend-plugin-api.servicefactorycompat",title:"ServiceFactoryCompat",description:"API reference for ServiceFactoryCompat"},s=void 0,i={id:"reference/backend-plugin-api.servicefactorycompat",title:"ServiceFactoryCompat",description:"API reference for ServiceFactoryCompat",source:"@site/versioned_docs/version-stable/reference/backend-plugin-api.servicefactorycompat.md",sourceDirName:"reference",slug:"/reference/backend-plugin-api.servicefactorycompat",permalink:"/docs/reference/backend-plugin-api.servicefactorycompat",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/backend-plugin-api.servicefactorycompat.md",tags:[],version:"stable",frontMatter:{id:"backend-plugin-api.servicefactorycompat",title:"ServiceFactoryCompat",description:"API reference for ServiceFactoryCompat"}},a={},d=[];function p(e){const r={a:"a",blockquote:"blockquote",code:"code",p:"p",pre:"pre",strong:"strong",...(0,c.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/backend-plugin-api",children:(0,n.jsx)(r.code,{children:"@backstage/backend-plugin-api"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.servicefactorycompat",children:(0,n.jsx)(r.code,{children:"ServiceFactoryCompat"})})]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"Warning: This API is now obsolete."}),"\n",(0,n.jsxs)(r.p,{children:["This type exists only as a helper for old code that relied on ",(0,n.jsx)(r.code,{children:"createServiceFactory"})," to return ",(0,n.jsx)(r.code,{children:"() => ServiceFactory"})," instead of ",(0,n.jsx)(r.code,{children:"ServiceFactory"}),". You should remove the ",(0,n.jsx)(r.code,{children:"()"})," parentheses at the end of your usages. This type will be removed in a future release."]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"export interface ServiceFactoryCompat<TService = unknown, TScope extends 'plugin' | 'root' = 'plugin' | 'root', TInstances extends 'singleton' | 'multiton' = 'singleton' | 'multiton', TOpts extends object | undefined = undefined> extends ServiceFactory<TService, TScope, TInstances> \n"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Extends:"})," ",(0,n.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.servicefactory",children:"ServiceFactory"}),"<TService, TScope, TInstances>"]})]})}function l(e={}){const{wrapper:r}={...(0,c.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},675251:(e,r,t)=>{var n=t(667294),c=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,t){var n,o={},d=null,p=null;for(n in void 0!==t&&(d=""+t),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(p=r.ref),r)s.call(r,n)&&!a.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===o[n]&&(o[n]=r[n]);return{$$typeof:c,type:e,key:d,ref:p,props:o,_owner:i.current}}r.Fragment=o,r.jsx=d,r.jsxs=d},785893:(e,r,t)=>{e.exports=t(675251)},511151:(e,r,t)=>{t.d(r,{Z:()=>i,a:()=>s});var n=t(667294);const c={},o=n.createContext(c);function s(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);