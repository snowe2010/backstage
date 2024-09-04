/*! For license information please see 7e07f1aa.3e01ecc6.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[542764],{641159:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(785893),c=n(511151);const o={id:"plugin-scaffolder-node.createtemplateaction",title:"createTemplateAction",description:"API reference for createTemplateAction"},a=void 0,s={id:"reference/plugin-scaffolder-node.createtemplateaction",title:"createTemplateAction",description:"API reference for createTemplateAction",source:"@site/../docs/reference/plugin-scaffolder-node.createtemplateaction.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-node.createtemplateaction",permalink:"/docs/next/reference/plugin-scaffolder-node.createtemplateaction",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-scaffolder-node.createtemplateaction.md",tags:[],version:"current",frontMatter:{id:"plugin-scaffolder-node.createtemplateaction",title:"createTemplateAction",description:"API reference for createTemplateAction"}},i={},p=[];function d(e){const t={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/plugin-scaffolder-node",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-scaffolder-node"})})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/plugin-scaffolder-node.createtemplateaction",children:(0,r.jsx)(t.code,{children:"createTemplateAction"})})]}),"\n",(0,r.jsx)(t.p,{children:"This function is used to create new template actions to get type safety. Will convert zod schemas to json schemas for use throughout the system."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"createTemplateAction: <TInputParams extends JsonObject = JsonObject, TOutputParams extends JsonObject = JsonObject, TInputSchema extends z.ZodType<any, z.ZodTypeDef, any> | Schema = {}, TOutputSchema extends z.ZodType<any, z.ZodTypeDef, any> | Schema = {}, TActionInput extends JsonObject = TInputSchema extends z.ZodType<any, any, infer IReturn> ? IReturn : TInputParams, TActionOutput extends JsonObject = TOutputSchema extends z.ZodType<any, any, infer IReturn_1> ? IReturn_1 : TOutputParams>(action: TemplateActionOptions<TActionInput, TActionOutput, TInputSchema, TOutputSchema>) => TemplateAction<TActionInput, TActionOutput>\n"})})]})}function l(e={}){const{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},675251:(e,t,n)=>{var r=n(667294),c=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,n){var r,o={},p=null,d=null;for(r in void 0!==n&&(p=""+n),void 0!==t.key&&(p=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,r)&&!i.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:c,type:e,key:p,ref:d,props:o,_owner:s.current}}t.Fragment=o,t.jsx=p,t.jsxs=p},785893:(e,t,n)=>{e.exports=n(675251)},511151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>a});var r=n(667294);const c={},o=r.createContext(c);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);