/*! For license information please see ec0ebd0c.96609ccb.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[55884],{254815:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>t,metadata:()=>s,toc:()=>i});var p=r(785893),o=r(511151);const t={id:"core-app-api.appoptions",title:"AppOptions",description:"API reference for AppOptions"},a=void 0,s={id:"reference/core-app-api.appoptions",title:"AppOptions",description:"API reference for AppOptions",source:"@site/versioned_docs/version-stable/reference/core-app-api.appoptions.md",sourceDirName:"reference",slug:"/reference/core-app-api.appoptions",permalink:"/docs/reference/core-app-api.appoptions",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/core-app-api.appoptions.md",tags:[],version:"stable",frontMatter:{id:"core-app-api.appoptions",title:"AppOptions",description:"API reference for AppOptions"}},c={},i=[];function d(e){const n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(n.p,{children:[(0,p.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,p.jsx)(n.a,{href:"/docs/reference/core-app-api",children:(0,p.jsx)(n.code,{children:"@backstage/core-app-api"})})," > ",(0,p.jsx)(n.a,{href:"/docs/reference/core-app-api.appoptions",children:(0,p.jsx)(n.code,{children:"AppOptions"})})]}),"\n",(0,p.jsxs)(n.p,{children:["The options accepted by ",(0,p.jsx)(n.a,{href:"/docs/reference/core-app-api.createspecializedapp",children:"createSpecializedApp()"}),"."]}),"\n",(0,p.jsx)(n.p,{children:(0,p.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:"language-typescript",children:"export type AppOptions = {\n    apis?: Iterable<AnyApiFactory>;\n    defaultApis?: Iterable<AnyApiFactory>;\n    icons: AppIcons & {\n        [key in string]: IconComponent;\n    };\n    plugins?: Array<BackstagePlugin & {\n        output?(): Array<{\n            type: 'feature-flag';\n            name: string;\n        } | {\n            type: string;\n        }>;\n    }>;\n    featureFlags?: (FeatureFlag & Omit<FeatureFlag, 'pluginId'>)[];\n    components: AppComponents;\n    themes: (Partial<AppTheme> & Omit<AppTheme, 'theme'>)[];\n    configLoader?: AppConfigLoader;\n    bindRoutes?(context: {\n        bind: AppRouteBinder;\n    }): void;\n    __experimentalTranslations?: {\n        defaultLanguage?: string;\n        availableLanguages?: string[];\n        resources?: Array<{\n            $$type: '@backstage/TranslationResource';\n            id: string;\n        } | {\n            $$type: '@backstage/TranslationMessages';\n            id: string;\n            full: boolean;\n            messages: Record<string, string>;\n        }>;\n    };\n};\n"})}),"\n",(0,p.jsxs)(n.p,{children:[(0,p.jsx)(n.strong,{children:"References:"})," ",(0,p.jsx)(n.a,{href:"/docs/reference/core-plugin-api.anyapifactory",children:"AnyApiFactory"}),", ",(0,p.jsx)(n.a,{href:"/docs/reference/core-app-api.appicons",children:"AppIcons"}),", ",(0,p.jsx)(n.a,{href:"/docs/reference/core-plugin-api.iconcomponent",children:"IconComponent"}),", ",(0,p.jsx)(n.a,{href:"/docs/reference/core-plugin-api.backstageplugin",children:"BackstagePlugin"}),", ",(0,p.jsx)(n.a,{href:"/docs/reference/core-plugin-api.featureflag",children:"FeatureFlag"}),", ",(0,p.jsx)(n.a,{href:"/docs/reference/core-app-api.appcomponents",children:"AppComponents"}),", ",(0,p.jsx)(n.a,{href:"/docs/reference/core-plugin-api.apptheme",children:"AppTheme"}),", ",(0,p.jsx)(n.a,{href:"/docs/reference/core-app-api.appconfigloader",children:"AppConfigLoader"}),", ",(0,p.jsx)(n.a,{href:"/docs/reference/core-app-api.approutebinder",children:"AppRouteBinder"})]})]})}function l(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,p.jsx)(n,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}},675251:(e,n,r)=>{var p=r(667294),o=Symbol.for("react.element"),t=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,n,r){var p,t={},i=null,d=null;for(p in void 0!==r&&(i=""+r),void 0!==n.key&&(i=""+n.key),void 0!==n.ref&&(d=n.ref),n)a.call(n,p)&&!c.hasOwnProperty(p)&&(t[p]=n[p]);if(e&&e.defaultProps)for(p in n=e.defaultProps)void 0===t[p]&&(t[p]=n[p]);return{$$typeof:o,type:e,key:i,ref:d,props:t,_owner:s.current}}n.Fragment=t,n.jsx=i,n.jsxs=i},785893:(e,n,r)=>{e.exports=r(675251)},511151:(e,n,r)=>{r.d(n,{Z:()=>s,a:()=>a});var p=r(667294);const o={},t=p.createContext(o);function a(e){const n=p.useContext(t);return p.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),p.createElement(t.Provider,{value:n},e.children)}}}]);