/*! For license information please see 7539577a.65bc7ced.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[788342],{774676:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=n(785893),a=n(511151);const i={id:"plugin-catalog.defaultentitypresentationapirenderer.render",title:"DefaultEntityPresentationApiRenderer.render",description:"API reference for DefaultEntityPresentationApiRenderer.render"},o=void 0,s={id:"reference/plugin-catalog.defaultentitypresentationapirenderer.render",title:"DefaultEntityPresentationApiRenderer.render",description:"API reference for DefaultEntityPresentationApiRenderer.render",source:"@site/../docs/reference/plugin-catalog.defaultentitypresentationapirenderer.render.md",sourceDirName:"reference",slug:"/reference/plugin-catalog.defaultentitypresentationapirenderer.render",permalink:"/docs/next/reference/plugin-catalog.defaultentitypresentationapirenderer.render",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog.defaultentitypresentationapirenderer.render.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog.defaultentitypresentationapirenderer.render",title:"DefaultEntityPresentationApiRenderer.render",description:"API reference for DefaultEntityPresentationApiRenderer.render"}},c={},d=[{value:"Remarks",id:"remarks",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/plugin-catalog",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-catalog"})})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/plugin-catalog.defaultentitypresentationapirenderer",children:(0,r.jsx)(t.code,{children:"DefaultEntityPresentationApiRenderer"})})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/plugin-catalog.defaultentitypresentationapirenderer.render",children:(0,r.jsx)(t.code,{children:"render"})})]}),"\n",(0,r.jsx)(t.p,{children:"The actual render function."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"render: (options: {\n        entityRef: string;\n        loading: boolean;\n        entity: Entity | undefined;\n        context: {\n            defaultKind?: string;\n            defaultNamespace?: string;\n        };\n    }) => {\n        snapshot: Omit<EntityRefPresentationSnapshot, 'entityRef'>;\n    };\n"})}),"\n",(0,r.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsx)(t.p,{children:"This function may be called multiple times."}),"\n",(0,r.jsx)(t.p,{children:"The loading flag signals that the framework MAY be trying to load more entity data from the catalog and call the render function again, if it succeeds. In some cases you may want to render a loading state in that case."}),"\n",(0,r.jsx)(t.p,{children:"The entity may or may not be given. If the caller of the presentation API did present an entity upfront, then that's what will be passed in here. Otherwise, it may be a server-side entity that either comes from a local cache or directly from the server."}),"\n",(0,r.jsx)(t.p,{children:"In either case, the renderer should return a presentation that is the most useful possible for the end user, given the data that is available."})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},675251:(e,t,n)=>{var r=n(667294),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,i={},d=null,l=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)o.call(t,r)&&!c.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:a,type:e,key:d,ref:l,props:i,_owner:s.current}}t.Fragment=i,t.jsx=d,t.jsxs=d},785893:(e,t,n)=>{e.exports=n(675251)},511151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>o});var r=n(667294);const a={},i=r.createContext(a);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);