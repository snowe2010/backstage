/*! For license information please see 1f8a6e66.ce4e1048.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[228860],{252115:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var a=n(785893),s=n(511151);const o={id:"test-case-validation",title:"Validate your OpenAPI spec against test data",description:"Documentation on how to use the `repo schema openapi test` command."},i=void 0,r={id:"openapi/test-case-validation",title:"Validate your OpenAPI spec against test data",description:"Documentation on how to use the `repo schema openapi test` command.",source:"@site/versioned_docs/version-stable/openapi/test-case-validation.md",sourceDirName:"openapi",slug:"/openapi/test-case-validation",permalink:"/docs/openapi/test-case-validation",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/openapi/test-case-validation.md",tags:[],version:"stable",frontMatter:{id:"test-case-validation",title:"Validate your OpenAPI spec against test data",description:"Documentation on how to use the `repo schema openapi test` command."},sidebar:"docs",previous:{title:"Generate a client from your OpenAPI spec",permalink:"/docs/openapi/generate-client"},next:{title:"Proxying",permalink:"/docs/plugins/proxying"}},c={},p=[{value:"OpenAPI Validation using Test Cases",id:"openapi-validation-using-test-cases",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"openapi-validation-using-test-cases",children:"OpenAPI Validation using Test Cases"}),"\n",(0,a.jsxs)(t.p,{children:["This is primarily performed by ",(0,a.jsx)(t.code,{children:"backstage-repo-tools repo schema openapi test"}),". Any errors found in the generated specs can be either"]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Fixed manually, this is usually relevant for request body or response body changes."}),"\n",(0,a.jsxs)(t.li,{children:["Fixed automatically with ",(0,a.jsx)(t.code,{children:"backstage-repo-tools repo schema openapi test --update"}),"."]}),"\n",(0,a.jsx)(t.li,{children:"Fixing the test case. This can happen where a response is mocked as"}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"it('should return the right value', () => {\n  // We will assume that this is the actual response and update the spec accordingly.\n  // Ideally, this should be a fully populated return value.\n  const entity: Entity = {} as any;\n  app.get('/test', () => {\n    return entity;\n  });\n  const response = await request(app).get('/test');\n  expect(response.body).toEqual(entity);\n});\n"})}),"\n",(0,a.jsx)(t.p,{children:"will cause an invalid spec validation. The return value doesn't have all properties as defined in the type. Try to avoid this if possible. Something better would be,"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"it('should return the right value', () => {\n  // We will assume that this is the actual response and update the spec accordingly.\n  // Ideally, this should be a fully populated return value.\n  const entity: Entity = {\n    apiVersion: 'a1',\n    kind: 'k1',\n    metadata: { name: 'n1' },\n  };\n  app.get('/test', () => {\n    return entity;\n  });\n  const response = await request(app).get('/test');\n  expect(response.body).toEqual(entity);\n});\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Additionally, for more advanced use cases, you can run ",(0,a.jsx)(t.code,{children:"yarn optic capture {PATH_TO_OPENAPI_FILE} --update interactive"})," and go through the prompts on the screen. Under the hood, the test validation + updating is done by ",(0,a.jsx)(t.a,{href:"https://github.com/opticdev/optic",children:"Optic"}),", a great project around supporting OpenAPI specs and development. You can find additional options ",(0,a.jsx)(t.a,{href:"https://www.useoptic.com/docs/verify-openapi",children:"here"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},675251:(e,t,n)=>{var a=n(667294),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,r=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,n){var a,o={},p=null,l=null;for(a in void 0!==n&&(p=""+n),void 0!==t.key&&(p=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,a)&&!c.hasOwnProperty(a)&&(o[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===o[a]&&(o[a]=t[a]);return{$$typeof:s,type:e,key:p,ref:l,props:o,_owner:r.current}}t.Fragment=o,t.jsx=p,t.jsxs=p},785893:(e,t,n)=>{e.exports=n(675251)},511151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>i});var a=n(667294);const s={},o=a.createContext(s);function i(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);