/*! For license information please see 5611a06b.a40d56ec.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[560418],{845407:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var s=n(785893),o=n(511151);const a={id:"system-model",title:"System Model",description:"Documentation on System Model"},i=void 0,r={id:"features/software-catalog/system-model",title:"System Model",description:"Documentation on System Model",source:"@site/../docs/features/software-catalog/system-model.md",sourceDirName:"features/software-catalog",slug:"/features/software-catalog/system-model",permalink:"/docs/next/features/software-catalog/system-model",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/software-catalog/system-model.md",tags:[],version:"current",frontMatter:{id:"system-model",title:"System Model",description:"Documentation on System Model"},sidebar:"docs",previous:{title:"Catalog Configuration",permalink:"/docs/next/features/software-catalog/configuration"},next:{title:"YAML File Format",permalink:"/docs/next/features/software-catalog/descriptor-format"}},l={},c=[{value:"Core Entities",id:"core-entities",level:2},{value:"Component",id:"component",level:3},{value:"API",id:"api",level:3},{value:"Resource",id:"resource",level:3},{value:"Organizational Entities",id:"organizational-entities",level:2},{value:"User",id:"user",level:3},{value:"Group",id:"group",level:3},{value:"Ecosystem Modeling",id:"ecosystem-modeling",level:2},{value:"System",id:"system",level:3},{value:"Domain",id:"domain",level:3},{value:"Other",id:"other",level:2},{value:"Location",id:"location",level:3},{value:"Type",id:"type",level:3},{value:"Template",id:"template",level:3}];function d(e){const t={a:"a",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"We believe that a strong shared understanding and terminology around software\nand resources leads to a better Backstage experience."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.em,{children:["This description originates from\n",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues/390",children:"this RFC"}),". Note that some of\nthe concepts are not yet supported in Backstage."]})}),"\n",(0,s.jsx)(t.h2,{id:"core-entities",children:"Core Entities"}),"\n",(0,s.jsx)(t.p,{children:"We model software in the Backstage catalogue using these three core entities\n(further explained below):"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Components"})," are individual pieces of software"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"APIs"})," are the boundaries between different components"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Resources"})," are physical or virtual infrastructure needed to operate a\ncomponent"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(322939).Z+"",width:"740",height:"128"})}),"\n",(0,s.jsx)(t.h3,{id:"component",children:"Component"}),"\n",(0,s.jsx)(t.p,{children:"A component is a piece of software, for example a mobile feature, web site,\nbackend service or data pipeline (list not exhaustive). A component can be\ntracked in source control, or use some existing open source or commercial\nsoftware."}),"\n",(0,s.jsx)(t.p,{children:"A component can implement APIs for other components to consume. In turn it might\nconsume APIs implemented by other components, or directly depend on components or\nresources that are attached to it at runtime."}),"\n",(0,s.jsx)(t.h3,{id:"api",children:"API"}),"\n",(0,s.jsx)(t.p,{children:"APIs form an important (maybe the most important) abstraction that allows large\nsoftware ecosystems to scale. Thus, APIs are a first class citizen in the\nBackstage model and the primary way to discover existing functionality in the\necosystem."}),"\n",(0,s.jsx)(t.p,{children:"APIs are implemented by components and form boundaries between components. They\nmight be defined using an RPC IDL (e.g., Protobuf, GraphQL, ...), a data schema\n(e.g., Avro, TFRecord, ...), or as code interfaces. In any case, APIs exposed by\ncomponents need to be in a known machine-readable format so we can build further\ntooling and analysis on top."}),"\n",(0,s.jsx)(t.p,{children:"APIs have a visibility: they are either public (making them available for any\nother component to consume), restricted (only available to an allowed set of\nconsumers), or private (only available within their system). As public APIs are\ngoing to be the primary way interaction between components, Backstage supports\ndocumenting, indexing and searching all APIs so we can browse them as\ndevelopers."}),"\n",(0,s.jsx)(t.h3,{id:"resource",children:"Resource"}),"\n",(0,s.jsx)(t.p,{children:"Resources are the infrastructure a component needs to operate at runtime, like\nBigTable databases, Pub/Sub topics, S3 buckets or CDNs. Modelling them together\nwith components and systems will better allow us to visualize resource\nfootprint, and create tooling around them."}),"\n",(0,s.jsx)(t.h2,{id:"organizational-entities",children:"Organizational Entities"}),"\n",(0,s.jsx)(t.h3,{id:"user",children:"User"}),"\n",(0,s.jsx)(t.p,{children:"A user describes a person, such as an employee, a contractor, or similar."}),"\n",(0,s.jsx)(t.h3,{id:"group",children:"Group"}),"\n",(0,s.jsx)(t.p,{children:"A group describes an organizational entity, such as for example a team, a\nbusiness unit, or a loose collection of people in an interest group."}),"\n",(0,s.jsx)(t.h2,{id:"ecosystem-modeling",children:"Ecosystem Modeling"}),"\n",(0,s.jsx)(t.p,{children:"A large catalogue of components, APIs and resources can be highly granular and\nhard to understand as a whole. It might thus be convenient to further categorize\nthese entities using the following (optional) concepts:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Systems"})," are a collection of entities that cooperate to perform some\nfunction"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Domains"})," relate entities and systems to part of the business"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(765326).Z+"",width:"802",height:"854"})}),"\n",(0,s.jsx)(t.h3,{id:"system",children:"System"}),"\n",(0,s.jsx)(t.p,{children:"With increasing complexity in software, systems form an important abstraction\nlevel to help us reason about software ecosystems. Systems are a useful concept\nin that they allow us to ignore the implementation details of a certain\nfunctionality for consumers, while allowing the owning team to make changes as\nthey see fit (leading to low coupling)."}),"\n",(0,s.jsx)(t.p,{children:"A system, in this sense, is a collection of resources and components that\nexposes one or several public APIs. The main benefit of modelling a system is\nthat it hides its resources and private APIs between the components for any\nconsumers. This means that as the owner, you can evolve the implementation, in\nterms of components and resources, without your consumers being able to notice.\nTypically, a system will consist of at most a handful of components (see Domain\nfor a grouping of systems)."}),"\n",(0,s.jsx)(t.p,{children:"For example, a playlist management system might encapsulate a backend service to\nupdate playlists, a backend service to query them, and a database to store them.\nIt could expose an RPC API, a daily snapshots dataset, and an event stream of\nplaylist updates."}),"\n",(0,s.jsx)(t.h3,{id:"domain",children:"Domain"}),"\n",(0,s.jsx)(t.p,{children:"While systems are the basic level of encapsulation for related entities, it is\noften useful to group a collection of systems that share terminology, domain\nmodels, metrics, KPIs, business purpose, or documentation, i.e. they form a\nbounded context."}),"\n",(0,s.jsx)(t.p,{children:"For example, it would make sense if the different systems in the \u201cPayments\u201d\ndomain would come with some documentation on how to accept payments for a new\nproduct or use-case, share the same entity types in their APIs, and integrate\nwell with each other. Other domains could be \u201cContent Ingestion\u201d, \u201cAds\u201d or\n\u201cSearch\u201d."}),"\n",(0,s.jsx)(t.p,{children:"In case of a large organization, it might make sense to further group domains\nin a hierarchy, where a domain can be a subdomain of another domain."}),"\n",(0,s.jsx)(t.h2,{id:"other",children:"Other"}),"\n",(0,s.jsx)(t.h3,{id:"location",children:"Location"}),"\n",(0,s.jsx)(t.p,{children:"A location is a marker that references other places to look for catalog data."}),"\n",(0,s.jsx)(t.h3,{id:"type",children:"Type"}),"\n",(0,s.jsxs)(t.p,{children:["The type field in the system has no set meaning. It is up to the user to assign their own types and use them as desired, such as for link validation or creating custom UI components. Some common pre-defined types are depicted in the\n",(0,s.jsx)(t.a,{href:"#ecosystem-modeling",children:"ecosystem modeling diagram"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"template",children:"Template"}),"\n",(0,s.jsx)(t.p,{children:"A template definition describes both the parameters that are rendered in the\nfrontend part of the scaffolding wizard, and the steps that are executed when\nscaffolding that component."})]})}function m(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},675251:(e,t,n)=>{var s=n(667294),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,r=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var s,a={},c=null,d=null;for(s in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,s)&&!l.hasOwnProperty(s)&&(a[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===a[s]&&(a[s]=t[s]);return{$$typeof:o,type:e,key:c,ref:d,props:a,_owner:r.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},785893:(e,t,n)=>{e.exports=n(675251)},322939:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/software-model-core-entities.drawio-51a40db7ca2e0d0026d99f519657677f.svg"},765326:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/software-model-entities.drawio-3ce7f43dd236c3934209fde8f21a4d9e.svg"},511151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>i});var s=n(667294);const o={},a=s.createContext(o);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);