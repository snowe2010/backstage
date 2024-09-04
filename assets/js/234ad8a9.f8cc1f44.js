/*! For license information please see 234ad8a9.f8cc1f44.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[509358],{947462:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>f});var i=t(785893),o=t(511151);const r={id:"frontend-plugin-api.extensiondefinition",title:"ExtensionDefinition",description:"API reference for ExtensionDefinition"},s=void 0,a={id:"reference/frontend-plugin-api.extensiondefinition",title:"ExtensionDefinition",description:"API reference for ExtensionDefinition",source:"@site/../docs/reference/frontend-plugin-api.extensiondefinition.md",sourceDirName:"reference",slug:"/reference/frontend-plugin-api.extensiondefinition",permalink:"/docs/next/reference/frontend-plugin-api.extensiondefinition",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/frontend-plugin-api.extensiondefinition.md",tags:[],version:"current",frontMatter:{id:"frontend-plugin-api.extensiondefinition",title:"ExtensionDefinition",description:"API reference for ExtensionDefinition"}},c={},f=[];function p(n){const e={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,i.jsx)(e.a,{href:"/docs/next/reference/frontend-plugin-api",children:(0,i.jsx)(e.code,{children:"@backstage/frontend-plugin-api"})})," > ",(0,i.jsx)(e.a,{href:"/docs/next/reference/frontend-plugin-api.extensiondefinition",children:(0,i.jsx)(e.code,{children:"ExtensionDefinition"})})]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Signature:"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",children:"export type ExtensionDefinition<T extends ExtensionDefinitionParameters = ExtensionDefinitionParameters> = {\n    $$type: '@backstage/ExtensionDefinition';\n    readonly T: T;\n    override<TExtensionConfigSchema extends {\n        [key in string]: (zImpl: typeof z) => z.ZodType;\n    }, UFactoryOutput extends ExtensionDataValue<any, any>, UNewOutput extends AnyExtensionDataRef, TExtraInputs extends {\n        [inputName in string]: ExtensionInput<AnyExtensionDataRef, {\n            optional: boolean;\n            singleton: boolean;\n        }>;\n    }>(args: {\n        attachTo?: {\n            id: string;\n            input: string;\n        };\n        disabled?: boolean;\n        inputs?: TExtraInputs & {\n            [KName in keyof T['inputs']]?: `Error: Input '${KName & string}' is already defined in parent definition`;\n        };\n        output?: Array<UNewOutput>;\n        config?: {\n            schema: TExtensionConfigSchema & {\n                [KName in keyof T['config']]?: `Error: Config key '${KName & string}' is already defined in parent schema`;\n            };\n        };\n        factory(originalFactory: (context?: {\n            config?: T['config'];\n            inputs?: ResolveInputValueOverrides<NonNullable<T['inputs']>>;\n        }) => ExtensionDataContainer<NonNullable<T['output']>>, context: {\n            node: AppNode;\n            apis: ApiHolder;\n            config: T['config'] & {\n                [key in keyof TExtensionConfigSchema]: z.infer<ReturnType<TExtensionConfigSchema[key]>>;\n            };\n            inputs: Expand<ResolvedExtensionInputs<T['inputs'] & TExtraInputs>>;\n        }): Iterable<UFactoryOutput>;\n    } & VerifyExtensionFactoryOutput<AnyExtensionDataRef extends UNewOutput ? NonNullable<T['output']> : UNewOutput, UFactoryOutput>): ExtensionDefinition<{\n        kind: T['kind'];\n        namespace: T['namespace'];\n        name: T['name'];\n        output: AnyExtensionDataRef extends UNewOutput ? T['output'] : UNewOutput;\n        inputs: T['inputs'] & TExtraInputs;\n        config: T['config'] & {\n            [key in keyof TExtensionConfigSchema]: z.infer<ReturnType<TExtensionConfigSchema[key]>>;\n        };\n        configInput: T['configInput'] & z.input<z.ZodObject<{\n            [key in keyof TExtensionConfigSchema]: ReturnType<TExtensionConfigSchema[key]>;\n        }>>;\n    }>;\n};\n"})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"References:"})," ",(0,i.jsx)(e.a,{href:"/docs/next/reference/frontend-plugin-api.extensiondefinitionparameters",children:"ExtensionDefinitionParameters"}),", ",(0,i.jsx)(e.a,{href:"/docs/next/reference/frontend-plugin-api.extensiondatavalue",children:"ExtensionDataValue"}),", ",(0,i.jsx)(e.a,{href:"/docs/next/reference/frontend-plugin-api.anyextensiondataref",children:"AnyExtensionDataRef"}),", ",(0,i.jsx)(e.a,{href:"/docs/next/reference/frontend-plugin-api.extensioninput",children:"ExtensionInput"}),", ",(0,i.jsx)(e.a,{href:"/docs/next/reference/frontend-plugin-api.resolveinputvalueoverrides",children:"ResolveInputValueOverrides"}),", ",(0,i.jsx)(e.a,{href:"/docs/next/reference/frontend-plugin-api.extensiondatacontainer",children:"ExtensionDataContainer"}),", ",(0,i.jsx)(e.a,{href:"/docs/next/reference/frontend-plugin-api.appnode",children:"AppNode"}),", ",(0,i.jsx)(e.a,{href:"/docs/next/reference/core-plugin-api.apiholder",children:"ApiHolder"}),", ",(0,i.jsx)(e.a,{href:"/docs/next/reference/frontend-plugin-api.resolvedextensioninputs",children:"ResolvedExtensionInputs"}),", ",(0,i.jsx)(e.a,{href:"/docs/next/reference/frontend-plugin-api.extensiondefinition",children:"ExtensionDefinition"})]})]})}function d(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(p,{...n})}):p(n)}},675251:(n,e,t)=>{var i=t(667294),o=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function f(n,e,t){var i,r={},f=null,p=null;for(i in void 0!==t&&(f=""+t),void 0!==e.key&&(f=""+e.key),void 0!==e.ref&&(p=e.ref),e)s.call(e,i)&&!c.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps)void 0===r[i]&&(r[i]=e[i]);return{$$typeof:o,type:n,key:f,ref:p,props:r,_owner:a.current}}e.Fragment=r,e.jsx=f,e.jsxs=f},785893:(n,e,t)=>{n.exports=t(675251)},511151:(n,e,t)=>{t.d(e,{Z:()=>a,a:()=>s});var i=t(667294);const o={},r=i.createContext(o);function s(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:s(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);