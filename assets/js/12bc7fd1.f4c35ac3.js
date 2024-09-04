/*! For license information please see 12bc7fd1.f4c35ac3.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[517946],{286442:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=n(785893),o=n(511151);const s={id:"plugin-techdocs.contentstatetypes",title:"ContentStateTypes",description:"API reference for ContentStateTypes"},c=void 0,a={id:"reference/plugin-techdocs.contentstatetypes",title:"ContentStateTypes",description:"API reference for ContentStateTypes",source:"@site/versioned_docs/version-stable/reference/plugin-techdocs.contentstatetypes.md",sourceDirName:"reference",slug:"/reference/plugin-techdocs.contentstatetypes",permalink:"/docs/reference/plugin-techdocs.contentstatetypes",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-techdocs.contentstatetypes.md",tags:[],version:"stable",frontMatter:{id:"plugin-techdocs.contentstatetypes",title:"ContentStateTypes",description:"API reference for ContentStateTypes"}},i={},d=[];function p(e){const t={a:"a",code:"code",p:"p",pre:"pre",reader:"reader",strong:"strong",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-techdocs",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-techdocs"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-techdocs.contentstatetypes",children:(0,r.jsx)(t.code,{children:"ContentStateTypes"})})]}),"\n",(0,r.jsxs)(t.p,{children:["A state representation that is used to configure the UI of ",(0,r.jsx)(t.reader,{})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"export type ContentStateTypes = \n/** There is nothing to display but a loading indicator */\n'CHECKING'\n/** There is no content yet -> present a full screen loading page */\n | 'INITIAL_BUILD'\n/** There is content, but the backend is about to update it */\n | 'CONTENT_STALE_REFRESHING'\n/** There is content, but after a reload, the content will be different */\n | 'CONTENT_STALE_READY'\n/** There is content, the backend tried to update it, but failed */\n | 'CONTENT_STALE_ERROR'\n/** There is nothing to see but a \"not found\" page. Is also shown on page load errors */\n | 'CONTENT_NOT_FOUND'\n/** There is only the latest and greatest content */\n | 'CONTENT_FRESH';\n"})})]})}function l(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},675251:(e,t,n)=>{var r=n(667294),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,s={},d=null,p=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(p=t.ref),t)c.call(t,r)&&!i.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:o,type:e,key:d,ref:p,props:s,_owner:a.current}}t.Fragment=s,t.jsx=d,t.jsxs=d},785893:(e,t,n)=>{e.exports=n(675251)},511151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>c});var r=n(667294);const o={},s=r.createContext(o);function c(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);