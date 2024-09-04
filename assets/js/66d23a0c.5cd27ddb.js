/*! For license information please see 66d23a0c.5cd27ddb.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[307780],{380477:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=a(785893),n=a(511151);const o={id:"roadmap",title:"Roadmap",description:"Roadmap of Backstage"},s=void 0,r={id:"overview/roadmap",title:"Roadmap",description:"Roadmap of Backstage",source:"@site/versioned_docs/version-stable/overview/roadmap.md",sourceDirName:"overview",slug:"/overview/roadmap",permalink:"/docs/overview/roadmap",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/overview/roadmap.md",tags:[],version:"stable",frontMatter:{id:"roadmap",title:"Roadmap",description:"Roadmap of Backstage"},sidebar:"docs",previous:{title:"Architecture overview",permalink:"/docs/overview/architecture-overview"},next:{title:"Vision",permalink:"/docs/overview/vision"}},l={},d=[{value:"The Backstage Roadmap",id:"the-backstage-roadmap",level:2},{value:"2024 Fall Roadmap",id:"2024-fall-roadmap",level:2},{value:"Backend System 1.0",id:"backend-system-10",level:3},{value:"New Frontend System - Ready for Adoption",id:"new-frontend-system---ready-for-adoption",level:3},{value:"Backstage Security Audit",id:"backstage-security-audit",level:3},{value:"Plugin Metadata",id:"plugin-metadata",level:3},{value:"MUI v5 Green-light",id:"mui-v5-green-light",level:3},{value:"Configuration Improvements",id:"configuration-improvements",level:3},{value:"Versioned Documentation",id:"versioned-documentation",level:3},{value:"Rework Pull Request &amp; Issue Process",id:"rework-pull-request--issue-process",level:3},{value:"Catalog Observability",id:"catalog-observability",level:3},{value:"How to influence the roadmap",id:"how-to-influence-the-roadmap",level:2}];function c(e){const t={a:"a",h2:"h2",h3:"h3",p:"p",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"the-backstage-roadmap",children:"The Backstage Roadmap"}),"\n",(0,i.jsx)(t.p,{children:"Backstage is still under rapid development, and this page details the project's\npublic roadmap. This not a complete list of all work happening in and around the\nproject, it only highlights the highest priority initiatives worked on by the\ncore maintainers."}),"\n",(0,i.jsx)(t.h2,{id:"2024-fall-roadmap",children:"2024 Fall Roadmap"}),"\n",(0,i.jsx)(t.p,{children:"The initiatives listed below are planned for release within the next half-year, starting in May 2024. The roadmap is updated every 6 months, and the next update is planned for November 2024."}),"\n",(0,i.jsx)(t.h3,{id:"backend-system-10",children:"Backend System 1.0"}),"\n",(0,i.jsxs)(t.p,{children:["The goal of this initiative is the stable 1.0 release of the ",(0,i.jsx)(t.a,{href:"/docs/backend-system/",children:"new backend system"}),".\nThis includes ensuring that all documentation is up to date, and includes API\nreviews and refactoring efforts to ensure that what is released is both stable\nand evolvable. You can follow along with this work in the ",(0,i.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues/24493",children:"meta issue"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"As part of this initiative, there will also be an exploration on how to\nsimplify extension of backend services. It is not currently possible to augment\nbackend services through declarative integration, they are instead only\ncustomizable through complete replacement. This also limits the ability to\nmodularize services and scale ownership of the implementations. The goal is to\nprovide a more flexible and scalable way to extend backend services."}),"\n",(0,i.jsx)(t.h3,{id:"new-frontend-system---ready-for-adoption",children:"New Frontend System - Ready for Adoption"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.a,{href:"/docs/frontend-system/",children:"new fronted system"})," still needs more work, and\nthe next milestone is to improve it to the point where there is enough\nconfidence in the design to start encouraging adoption in the community. You can\nfollow along with this work in the ",(0,i.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues/19545",children:"meta issue"}),".\nThis milestone also includes reaching and executing ",(0,i.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues/19545#issuecomment-1766069146",children:"rollout phase 2"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Once the initial milestone is reached, the goal is to also build out broader\nsupport for the new frontend system in the core plugins."}),"\n",(0,i.jsx)(t.h3,{id:"backstage-security-audit",children:"Backstage Security Audit"}),"\n",(0,i.jsxs)(t.p,{children:["This is the second security audit of the Backstage project. It is done together,\nand with the support of the ",(0,i.jsx)(t.a,{href:"https://www.cncf.io/",children:"Cloud Native Computing Foundation (CNCF)"}),".\nThis time the audit will in particular focus on the recently introduced\n",(0,i.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/beps/0003-auth-architecture-evolution",children:"authentication system"}),",\nbut also cover other parts of the project."]}),"\n",(0,i.jsx)(t.h3,{id:"plugin-metadata",children:"Plugin Metadata"}),"\n",(0,i.jsx)(t.p,{children:"The goal of this initiative is to provide better machine readable metadata for\nBackstage packages, available both at runtime, at build-time and as part of\npackage registries. We want to surface information such as what packages make up\na particular plugin, what features it provides, and more generally laying the\nfoundation for an evolvable plugin metadata system."}),"\n",(0,i.jsx)(t.h3,{id:"mui-v5-green-light",children:"MUI v5 Green-light"}),"\n",(0,i.jsx)(t.p,{children:"Material-UI v4 is still the officially supported version of MUI in Backstage.\nWhile we have heard that adopters have had success using MUI 5, this is still an\nuntested path with known bugs. The goal of this initiative is to iron out any\nremaining issues or gaps, and then provide a green light for migration to MUI 5."}),"\n",(0,i.jsx)(t.h3,{id:"configuration-improvements",children:"Configuration Improvements"}),"\n",(0,i.jsx)(t.p,{children:"This initiative aims to improve the configuration experience and reliability in\nBackstage. Areas for improvement include the way that configuration schema is\nloaded, the way that plugins access configuration that is not owned by them, how\nplugins read configuration, and how configuration visibility is handled."}),"\n",(0,i.jsx)(t.h3,{id:"versioned-documentation",children:"Versioned Documentation"}),"\n",(0,i.jsxs)(t.p,{children:["The goal of this initiative is to provide versioned documentation at\n",(0,i.jsx)(t.a,{href:"https://backstage.io",children:"backstage.io"}),". This lets us provide documentation that is\nboth up-to-date while at the same time not ahead of the latest release."]}),"\n",(0,i.jsx)(t.h3,{id:"rework-pull-request--issue-process",children:"Rework Pull Request & Issue Process"}),"\n",(0,i.jsx)(t.p,{children:"Our current review and issue triage process is centered around either core- or\nproject area maintainers. The goal of this initiative is to make it simpler for\nmore members of the community to be involved and contribute to this process."}),"\n",(0,i.jsx)(t.h3,{id:"catalog-observability",children:"Catalog Observability"}),"\n",(0,i.jsx)(t.p,{children:"The goal of this initiative is to provide better tools for debugging catalog\ningestion issues and to more generally reduce friction for setting up and\nmaintaining the software catalog."}),"\n",(0,i.jsx)(t.h2,{id:"how-to-influence-the-roadmap",children:"How to influence the roadmap"}),"\n",(0,i.jsx)(t.p,{children:"As we evolve Backstage, we want you to contribute actively in the journey to\ndefine the most effective developer experience in the world."}),"\n",(0,i.jsx)(t.p,{children:"A roadmap is only useful if it captures real needs. If you have success stories,\nfeedback, or ideas, we want to hear from you! If you plan to work (or are\nalready working) on a new or existing feature, please let us know, so that we\ncan update the roadmap accordingly. We are also happy to share knowledge and\ncontext that will help your feature land successfully."}),"\n",(0,i.jsxs)(t.p,{children:["You can also head over to the\n",(0,i.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/CONTRIBUTING.md",children:"CONTRIBUTING"}),"\nguidelines to get started."]}),"\n",(0,i.jsxs)(t.p,{children:["If you have specific questions about the roadmap, please create an\n",(0,i.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues/new/choose",children:"issue"}),", ping us on\n",(0,i.jsx)(t.a,{href:"https://discord.gg/backstage-687207715902193673",children:"Discord"}),", or ",(0,i.jsx)(t.a,{href:"https://info.backstage.spotify.com/office-hours",children:"book time"})," with the Spotify team."]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},675251:(e,t,a)=>{var i=a(667294),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,r=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,a){var i,o={},d=null,c=null;for(i in void 0!==a&&(d=""+a),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)s.call(t,i)&&!l.hasOwnProperty(i)&&(o[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===o[i]&&(o[i]=t[i]);return{$$typeof:n,type:e,key:d,ref:c,props:o,_owner:r.current}}t.Fragment=o,t.jsx=d,t.jsxs=d},785893:(e,t,a)=>{e.exports=a(675251)},511151:(e,t,a)=>{a.d(t,{Z:()=>r,a:()=>s});var i=a(667294);const n={},o=i.createContext(n);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);