/*! For license information please see 06f46b41.deeeca23.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[390180],{277917:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=t(785893),r=t(511151);const o={id:"plugin-catalog-backend-module-github.githublocationanalyzer.analyze",title:"GithubLocationAnalyzer.analyze()",description:"API reference for GithubLocationAnalyzer.analyze()"},i=void 0,l={id:"reference/plugin-catalog-backend-module-github.githublocationanalyzer.analyze",title:"GithubLocationAnalyzer.analyze()",description:"API reference for GithubLocationAnalyzer.analyze()",source:"@site/versioned_docs/version-stable/reference/plugin-catalog-backend-module-github.githublocationanalyzer.analyze.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend-module-github.githublocationanalyzer.analyze",permalink:"/docs/reference/plugin-catalog-backend-module-github.githublocationanalyzer.analyze",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-catalog-backend-module-github.githublocationanalyzer.analyze.md",tags:[],version:"stable",frontMatter:{id:"plugin-catalog-backend-module-github.githublocationanalyzer.analyze",title:"GithubLocationAnalyzer.analyze()",description:"API reference for GithubLocationAnalyzer.analyze()"}},c={},s=[{value:"Parameters",id:"parameters",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,a.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-github",children:(0,a.jsx)(n.code,{children:"@backstage/plugin-catalog-backend-module-github"})})," > ",(0,a.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-github.githublocationanalyzer",children:(0,a.jsx)(n.code,{children:"GithubLocationAnalyzer"})})," > ",(0,a.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-github.githublocationanalyzer.analyze",children:(0,a.jsx)(n.code,{children:"analyze"})})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:'analyze(options: AnalyzeOptions): Promise<{\n        existing: {\n            location: {\n                type: string;\n                target: string;\n            };\n            isRegistered: boolean;\n            entity: import("@backstage/catalog-model").Entity;\n        }[];\n    }>;\n'})}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Parameter"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"options"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"/docs/reference/plugin-catalog-node.analyzeoptions",children:"AnalyzeOptions"})}),(0,a.jsx)(n.td,{})]})})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,a.jsxs)(n.p,{children:['Promise<{ existing: { location: { type: string; target: string; }; isRegistered: boolean; entity: import("@backstage/catalog-model").',(0,a.jsx)(n.a,{href:"/docs/reference/catalog-model.entity",children:"Entity"}),"; }[]; }>"]})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},675251:(e,n,t)=>{var a=t(667294),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function s(e,n,t){var a,o={},s=null,d=null;for(a in void 0!==t&&(s=""+t),void 0!==n.key&&(s=""+n.key),void 0!==n.ref&&(d=n.ref),n)i.call(n,a)&&!c.hasOwnProperty(a)&&(o[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===o[a]&&(o[a]=n[a]);return{$$typeof:r,type:e,key:s,ref:d,props:o,_owner:l.current}}n.Fragment=o,n.jsx=s,n.jsxs=s},785893:(e,n,t)=>{e.exports=t(675251)},511151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>i});var a=t(667294);const r={},o=a.createContext(r);function i(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);