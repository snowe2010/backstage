/*! For license information please see d956cdc7.dcc8da7c.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[965290],{886554:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var t=n(785893),r=n(511151);const a={id:"release-manifests",title:"@backstage/release-manifests",description:"API Reference for @backstage/release-manifests"},i=void 0,c={id:"reference/release-manifests",title:"@backstage/release-manifests",description:"API Reference for @backstage/release-manifests",source:"@site/versioned_docs/version-stable/reference/release-manifests.md",sourceDirName:"reference",slug:"/reference/release-manifests",permalink:"/docs/reference/release-manifests",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/release-manifests.md",tags:[],version:"stable",frontMatter:{id:"release-manifests",title:"@backstage/release-manifests",description:"API Reference for @backstage/release-manifests"}},l={},o=[{value:"Functions",id:"functions",level:2},{value:"Type Aliases",id:"type-aliases",level:2}];function d(e){const s={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(s.a,{href:"/docs/reference/release-manifests",children:(0,t.jsx)(s.code,{children:"@backstage/release-manifests"})})]}),"\n",(0,t.jsx)(s.p,{children:"Contains mapping between Backstage release and package versions."}),"\n",(0,t.jsx)(s.h2,{id:"functions",children:"Functions"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Function"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/reference/release-manifests.getmanifestbyreleaseline",children:"getManifestByReleaseLine(options)"})}),(0,t.jsx)(s.td,{children:"Returns a release manifest based on supplied release line."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/reference/release-manifests.getmanifestbyversion",children:"getManifestByVersion(options)"})}),(0,t.jsx)(s.td,{children:"Returns a release manifest based on supplied version."})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"type-aliases",children:"Type Aliases"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Type Alias"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/reference/release-manifests.getmanifestbyreleaselineoptions",children:"GetManifestByReleaseLineOptions"})}),(0,t.jsxs)(s.td,{children:["Options for ",(0,t.jsx)(s.a,{href:"/docs/reference/release-manifests.getmanifestbyreleaseline",children:"getManifestByReleaseLine()"}),"."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/reference/release-manifests.getmanifestbyversionoptions",children:"GetManifestByVersionOptions"})}),(0,t.jsxs)(s.td,{children:["Options for ",(0,t.jsx)(s.a,{href:"/docs/reference/release-manifests.getmanifestbyversion",children:"getManifestByVersion()"}),"."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/reference/release-manifests.releasemanifest",children:"ReleaseManifest"})}),(0,t.jsx)(s.td,{children:"Contains mapping between Backstage release and package versions."})]})]})]})]})}function f(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},675251:(e,s,n)=>{var t=n(667294),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function o(e,s,n){var t,a={},o=null,d=null;for(t in void 0!==n&&(o=""+n),void 0!==s.key&&(o=""+s.key),void 0!==s.ref&&(d=s.ref),s)i.call(s,t)&&!l.hasOwnProperty(t)&&(a[t]=s[t]);if(e&&e.defaultProps)for(t in s=e.defaultProps)void 0===a[t]&&(a[t]=s[t]);return{$$typeof:r,type:e,key:o,ref:d,props:a,_owner:c.current}}s.Fragment=a,s.jsx=o,s.jsxs=o},785893:(e,s,n)=>{e.exports=n(675251)},511151:(e,s,n)=>{n.d(s,{Z:()=>c,a:()=>i});var t=n(667294);const r={},a=t.createContext(r);function i(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);