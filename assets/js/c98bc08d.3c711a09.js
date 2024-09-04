/*! For license information please see c98bc08d.3c711a09.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[648513],{224622:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>A});var t=n(785893),o=n(511151);const r={id:"adrs-adr005",title:"ADR005: Catalog Core Entities",description:"Architecture Decision Record (ADR) log on Catalog Core Entities"},s=void 0,a={id:"architecture-decisions/adrs-adr005",title:"ADR005: Catalog Core Entities",description:"Architecture Decision Record (ADR) log on Catalog Core Entities",source:"@site/versioned_docs/version-stable/architecture-decisions/adr005-catalog-core-entities.md",sourceDirName:"architecture-decisions",slug:"/architecture-decisions/adrs-adr005",permalink:"/docs/architecture-decisions/adrs-adr005",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/architecture-decisions/adr005-catalog-core-entities.md",tags:[],version:"stable",frontMatter:{id:"adrs-adr005",title:"ADR005: Catalog Core Entities",description:"Architecture Decision Record (ADR) log on Catalog Core Entities"},sidebar:"docs",previous:{title:"ADR004: Module Export Structure",permalink:"/docs/architecture-decisions/adrs-adr004"},next:{title:"ADR006: Avoid React.FC and React.SFC",permalink:"/docs/architecture-decisions/adrs-adr006"}},c={},A=[{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Component",id:"component",level:3},{value:"API",id:"api",level:3},{value:"Resource",id:"resource",level:3},{value:"Consequences",id:"consequences",level:2}];function l(e){const i={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h2,{id:"context",children:"Context"}),"\n",(0,t.jsx)(i.p,{children:"We want to standardize on a few core entities that we are tracking in the\nBackstage catalog. This allows us to build specific plugins around them."}),"\n",(0,t.jsx)(i.h2,{id:"decision",children:"Decision"}),"\n",(0,t.jsx)(i.p,{children:"Backstage should eventually support the following core entities:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Components"})," are individual pieces of software"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"APIs"})," are the boundaries between different components"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Resources"})," are physical or virtual infrastructure needed to operate a\ncomponent"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Catalog Core Entities",src:n(287006).Z+"",width:"930",height:"220"})}),"\n",(0,t.jsx)(i.p,{children:"For now, we'll start by only implementing support for the Component entity in\nthe Backstage catalog. This can later be extended to APIs, Resources and other\npotentially useful entities."}),"\n",(0,t.jsx)(i.h3,{id:"component",children:"Component"}),"\n",(0,t.jsx)(i.p,{children:"A component is a piece of software, for example a mobile application feature,\nweb site, backend service or data pipeline (list not exhaustive). A component\ncan be tracked in source control, or use some existing open source or commercial\nsoftware. It can implement APIs for other components to consume. In turn it\nmight depend on APIs implemented by other components, or resources that are\nattached to it at runtime."}),"\n",(0,t.jsx)(i.p,{children:"Component entities are typically defined in YAML descriptor files next to the\ncode of the component, and could look like this (actual schema will evolve):"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-yaml",children:"apiVersion: backstage.io/v1alpha1\nkind: Component\nmetadata:\n  name: my-component-name\nspec:\n  type: service\n"})}),"\n",(0,t.jsx)(i.h3,{id:"api",children:"API"}),"\n",(0,t.jsx)(i.p,{children:"APIs form an abstraction that allows large software ecosystems to scale. Thus,\nAPIs are a first class citizen in the Backstage model and the primary way to\ndiscover existing functionality in the ecosystem."}),"\n",(0,t.jsx)(i.p,{children:"APIs are implemented by components and make their boundaries explicit. They\nmight be defined using an RPC IDL (e.g. in Protobuf, GraphQL or similar), a data\nschema (e.g. in Avro, TFRecord or similar), or as code interfaces (e.g.\nframework APIs in Swift, Kotlin, Java, C++, TypeScript etc). In any case, APIs\nexposed by components need to be in a known machine-readable format so we can\nbuild further tooling and analysis on top."}),"\n",(0,t.jsx)(i.p,{children:"APIs are typically indexed from existing definitions in source control and thus\nwouldn't need their own descriptor files, but would be stored in the catalog\nsomewhat like this (actual schema will evolve):"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-yaml",children:"apiVersion: backstage.io/v1alpha1\nkind: API\nmetadata:\n  name: my-component-api\nspec:\n  type: grpc\n  definition: >\n    service HelloService {\n      rpc SayHello (HelloRequest) returns (HelloResponse);\n    }\n\n    message HelloRequest {\n      string greeting = 1;\n    }\n\n    message HelloResponse {\n      string reply = 1;\n    }\n"})}),"\n",(0,t.jsx)(i.h3,{id:"resource",children:"Resource"}),"\n",(0,t.jsx)(i.p,{children:"Resources are the infrastructure your software needs to operate at runtime like\nBigtable databases, Pub/Sub topics, S3 buckets or CDNs. Modelling them together\nwith components and APIs will allow us to visualize and create tooling around\nthem in Backstage."}),"\n",(0,t.jsx)(i.p,{children:"Resources are typically indexed from declarative definitions (e.g. Terraform,\nGCP Config Connector, AWS Cloud Formation) and/or inventories from cloud\nproviders (e.g. GCP Asset Inventory) and thus wouldn't need their own descriptor\nfiles, but would be stored in the catalog somewhat like this (actual schema will\nevolve):"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-yaml",children:"apiVersion: backstage.io/v1alpha1\nkind: Resource\nmetadata:\n  name: my-component-db\nspec:\n  type: gcp-spanner\n  url: spanner.googleapis.com/projects/prj/instances/my-component-db/databases/my-db\n"})}),"\n",(0,t.jsx)(i.h2,{id:"consequences",children:"Consequences"}),"\n",(0,t.jsx)(i.p,{children:"We will continue fleshing out support for the Component entity in the Backstage\ncatalog."})]})}function d(e={}){const{wrapper:i}={...(0,o.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},675251:(e,i,n)=>{var t=n(667294),o=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function A(e,i,n){var t,r={},A=null,l=null;for(t in void 0!==n&&(A=""+n),void 0!==i.key&&(A=""+i.key),void 0!==i.ref&&(l=i.ref),i)s.call(i,t)&&!c.hasOwnProperty(t)&&(r[t]=i[t]);if(e&&e.defaultProps)for(t in i=e.defaultProps)void 0===r[t]&&(r[t]=i[t]);return{$$typeof:o,type:e,key:A,ref:l,props:r,_owner:a.current}}i.Fragment=r,i.jsx=A,i.jsxs=A},785893:(e,i,n)=>{e.exports=n(675251)},287006:(e,i,n)=>{n.d(i,{Z:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA6IAAADcCAMAAABd5uyZAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAByFBMVEX///8xbqULU5S216ioqKhQUFBAQEB4eHjv7+/T09NgYGBYWFjDw8OIiIi/v79ERESEhIT7+/usrKxoaGjX19d0dHRcXFzb29vPz89UVFSUlJRkZGTHx8eYmJhMTEzn5+cMDAy0tLQ4ODgEBARsbGywsLBwcHCgoKAUFBQsLCyAgIC4uLgQEBDz8/MgICAAAAAYGBg0NDQkJCQwMDB8fHwICAiQkJAcHBykpKQoKCj39/ecnJzf39/j4+M8PDyMjIzr6+vLy8u8vLxISEilw5ifvJOoxpuz1KWtzaCAmHdyh2mGn3yw0KMOEQ0fJR0zPS8uNiphc1oGBwURFBBvhGdqfWIxOS17kXGOqINFUT88RzdHVEJkdlxNW0dbbFQrMyicuZBCTj0JCggoLyUXGxWDm3lsgGRneV+XsouUr4iIoX6ZtY6ryp11imwaHhiLpIBeb1d4jm8VFRU2NjYdIho2QDJWZU8LDQsDAwMiKCBTYkwUGBI5QzVKWEUJQnZZaVIlLCKRq4Z+lHSiv5Y/SjpVVVUPDw8bGxtQXkqOjo4GKkoSEhJdXV2RkZEhISEJCQkCAgIGK00LCwt+fn4xMTEHBwcgYpsgYpyruSXwAAAAAWJLR0QAiAUdSAAAAAd0SU1FB+UDEBANIuEMkQcAAAABb3JOVAHPoneaAAAbsklEQVR42u3d7UMa57ou8Gevq7XWJLamaV6bmDRpbUzCna7UprE0K21nGETQAUQZxUFxFBlQ9BwUED2iuM/xvO/ztve/ez4MoiYma60mtmF5/T6lVG28el/z/oBSRERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERETv0j/9qZ38E3Njbmcttz+hnfzpvRk15sbcGBlHjbkxN0bG3JgbK8pRY27MjZExN+bGijIy5sbcGBlHjbkxN0bG3JgbK8pRY27MjZExN+bGiv6jRfbBhx0fdSr1cVfHufNKnb/Q/eEnn/YodfHDjs8uKfX5eaVU1yV1ofvTjstXrl775LpS6tKNjstfKKVu3ur4vJejxnljZKcZ2ae3r9/58kvVfffeV1/fvaP6vrl/88LtfnXn9vUH5x4+Ur4+pZR0q47HN/q+/fOTm9/JHXX19mcPvhvoVt8//eHOl884apw3RnaKkQ0O/KiUv+On55eVUveeqT7xK3WvQ/Xf71GDF3oPK9qh1B35Qqkv+9WtD5VS956ry+eU+ukvgxw1zhsjO73IvhC/Ukqpu31KqQfyou+pUqq/Q/088PTGV4PqsKIfKdUtPUp19KuHn/T39394V30gf/76lx6OGueNkZ1iZN3yQimllHyglOoWf5/Pq6i60v/l3adXlK9PqUHpVh39SnWLUqqjX8mH/f39/f1KXf38idzv5Khx3hjZ6UX2k/ysVM+vV32fKqVu3lYHFT1/Xqle30fK16fUpZcqev9zpdTVi+rOVaUuDfzAUeO8MbJTjKzjVqf69GFn/zcfqyu+G62K9vt+Uj89vqm+/XWw88O7xyt64fYXqvfZNXWto1NdvdvNUeO8MbJTjKz3+cA3j8+rnnt3fXdvPGpV9NGvd30DXT2q+/HA3e98xyvac2/g6d1PepX/24GnA/0cNc4bIzvdyHr9PUop1envPPbyC++fB196WSml1CP/i+a3PuKocd4YGUeNuTE3RsbcmBsrylFjbsyNkTE35saKMjLmxtwYGUeNuTG33yUyTQ8AgKHruq4HAAR1jaMGAAgOhYbDrOhvnauDgWJF3044IiMAoIuIiIwGERKTowYA0ZiIxIfeRQrGWOKsVdT0Bmo8wIq+pQkRSXoVtazJmEydRkU72zG3lMSm7bTEZt5BClGxz15F05Y1m5EpVvQtjcqcWF5FAYyJ8+4r2tn/sA1zC8ZkHjDSmQUAyVR2EUDODc9Hh6FlExqQdwvJ6IQBAMPRhI7mK0thANpYdNh7YTE1VoBmiZU8cxUNAUjIMoBidEwDEJ5YySbh/WEpACDphgHXBdykHnWBZDaVBIBkKqGzok26RPISKxxUdPXdV7Sz/9/9e2nD3CakBAABAwiviYisA6aYImKVReIaLFkTkXQYwXERqawAloyLSNVAsiwikwYsmayILIdDIuKcyYquyBxgiUhmCIWSiMgGkHdEpDwEOKIDIoBEarKJDRGRLWBDRGITrKjHli2YkgB0kVB0PfLOD3T/w8MBeS/0/525rRzGsC315HxclmBKOp8Vyc5UZQmWxN1cSbLYkvTOUESGYMlyLpmRHSxLaGZTxmBJrZiLy+7Z3IuWTLMqlV3sSj3vZuLhJZlGI70XRlW28olKRjtSURkdKw6Jk9xxJOnKcq4YKQdZUQAwalLEmIy0LhfNBd71XvTKP//H/9SOe1H7MIaa7AAhGYcpE9ClDFgShSUrwJKMIiM6kJJJWJIA0uLmpKbrS7IGS9aBPQnBPovnopGYyFoSmJUVXR+V4q5URqM5YEdqANYke7SieWBLokBew7Ss6/qm7LKiADAk4jg1kSR0kVBodwd49+eiV7oqbZjbknegWxw2IBIGXHFgigtdHMASG5aEAFdMiACYF9N7xRTXbW7uYIkNWGe1oiFEJZNsXdsNYT0mIqNhV0wAtthHKwovKMA7LhZp/sOZr+ikRBzHKcte81wUp1FRpa60YW6NiuwAxpzYB3vRtZcrug4sydrBXnSvVdEdKen64kzjzFcUa1IreHvRRT2IoDa0HpHVHakZwJok4IiOmVZFp8UGdrMz07LtfT0rCmgV0QEUJRY41Yq25ahNSyQaGpWMhn2pF4fisvpyRcvzuZIkYEk6ORGR+VZFjZqEglYserSik+5ZrGgjIltYkqqeK8cDtuyFg2kZwrJs5bKVjIaSZBtbrYoOSWR+OCLFIVnOz8QjDVYUQErSAIBlSbGir5ynT4mIlOfhXbL1rugeq2haREwDgbSIVFJoVRRuRkRGAocVHRKpnMkruhMiSeyJiGQRqIp3oTtXE5HyMBAVkXT8oKLYFxHZB6aacbOiwKLr3ZfPu4th92Azr7k5VhQAMLOwMuEdbhUP7osWEHaTQN7VYUloZ2XXuy+aat4X1byvgRayJ8Lel3mvDtsTZ6yiOVcDgKKbb8VnDEVTwwAQ3l1ZKgCAu7JrJF3v3iiAZOrgvmhqh/dFz9TTHqeSm/UbL2ic9dz4dBEjY0U5b4yMo9Y8gGVunDdGxtyYGyvKUWNuzI2RMTfmxooa68YbroLbtm3bq2EgZNu2HSoAMFanrO1j637mp62t19wfyGUP/jOrW9ZGDoAbatdRS5y0CnTXtm1795UIQ6996iD7V25PZd+wpKpgF1p/DrRVRccWT/yFVrMAdicALNp5AKFhhBcsa0U7Eu6KC8C2bTuaBIDAimVlg0cisW07qx2ZNLi253ig7m7bVjT1psfMQmXbtqcjJmBWLctadgoIppejC2uZw3tQxl5kI2THJ0/+Ac31VEHTscesWBawzTataPLEv7i1bFmzkdlXbsK/NlXnr2yi0m9Y3qJLq79L4+9nboMnztti/cTfJ5iJLAILJQDTmW0A5V0jXY1mx+MNL9yqbduzlRVARi1rrbIBFGrj2ejISPgwkknLmsvMYCLd2mpaVjpjWdZB4N7W0rbataKFeOFNFXUAYFF2vJkLRhKwqkEAVrX1NdGIBkArD72pohsjBQDzUmzfipon/oKWBaAo2jur6JscqehJMb4PuX3znwdPmLfN1ZPHqz61BeQlACxv1IFcJZjMBAHU1w/DRTQCiAugWBny+hyMh45HMrd+8tj9Q1Q0uwkgGomXXGColhnZ2vB2GaWMs7/X/FUbkmzO3Jwd9NbNNg639bUUAGC4gY3tciS8UItUJsPY23cic3mE4nuV2DrCGe//0ehs21Z0sWwA86V4JAXMzGUiG+nDKcpVAsibmVgpCSQikWUXpo1iqYjFerm8b2BjpSrxIWAhUt70psvYKkdGikAqEi/NA862zDoaMJRGOom8WS5PG1itRWqHfTa2MpEp0bG7HJHxQLIcS8Otlit1/f3KTQZufz348rzpmTBQLEUyK4A2nonbzT1eOupmgoCzi5lyoKIhYWKnkgOQbxyp6FimWVFMTiIUbwDIBY5XdNzGRBqwYxFrLnlQUTsSiW0BzlS8PFmAbQF2JlJNtl1FR7PAUi2PoYymZZbgxiwACNdWsBgxEYq77vxYvWrAtAFjouLuyEtnZJq0jnmtiFtcjC2iEV+F6TQwXUdIxuDKYq65+Y+W2rai0U1gJjOBmdoQ5qaMRtVpHYttLGeB+jYMaxRD5UWMlYOmvVieQLgWRaAehRXfMbYd5GJFLHgPLwwtB7GdxlJkEUNlHTK5OJPOApPbcFxjedtoOKGdjItcuTVR0REtbIneqAyjUErBNhEujyGcnj78K/6X92MhvPzX7pfmLWECWmYVDSeE8clwoO5lN1NpwFkArA0k9pAOYW8FsGRufb55bm+Nuu5uKj59UFG7hLBZMe3i0QOLfdtemysg5CBU041tcZsVXY03sFjZgTNXCI9asC0klhtYihTaraLxeWB8Wtf1kYWFkdaGa75sALaJUMw0M+VUsLmAL2PDFf3lg68ZYMJxnA1Ye0AwDyNXCsFMAQWZCdUAOO7BdyWctq2otQFEq7qub23OSKB1LGUtW5blmEHkg2hsmJiaBlA0zL34GDBR1nU9NQJrCtgRrE8CWA4BwHAmoQNY29J1vZqFJIGxOgqxGTjuTiwM5BvTa7qub7YaWE0AuujhPLBo2rBNGIvAzJ71nu1FH3d91fnyvG1ZQHZE1/WN0YDowISX3fooYI8AS3MYHYO9h3gSQNI2K07eCzduzlVGVtGqqANgeL8qde3YuehoZBchB+NRwMgcVLSgI5yMuHCGgGIMtoWqret6baLdKiou4EQcx3Gyttk6ZA85AEImQg6glSYBmPu6rhutnWa4dV0yWBkCNNe1LFg2YGw4mbl4COY8AHFDDgDH1cT7+v1021bUtAEr4ziOs+cKANc5PBYLOtuYn8uU6ubBSahZqU4CCzHHcZw0LBvQBdY+ANM7dk2UZDmEZS95iA4EMzNjacBxl7yfvFl2HMfZaJ1SDQMQHdFSrLpswzaB0EhspP6eVbTzpHmzbMDOOI7jmMnD7Ixa2XHikoQWK8R0JMv5MlAoAAiMHp5FFGMLrYrumwgEAczUp44f6KYiCDneab5zUNHgVLxsll04OqBLwLbgxB3HcRbabi86DNRTABqFl/ei215Fkaukjlz/qG4DwESsdbwwunZwOm7ZwEJtEZgLwVwAgjLTrCjq04C7G4xH27ais+vA9iiAgHZsL2oBwOhUIZYIY8HE5AaAhGZuNMoTWHUAFBoHFd2fBFAPAUBBhx6VgBkF0ChAdADWdjoEOG4xA8Ad3rIAaK2TrpEFoCD6RLkITNqwTSQrQwb2rff9MhuAqSkgmgYQ0ALeQRcADGXyuq6bs8DISgkwyut7wNYm0NrNWhaARCXXrKjhRJFeP36xzKvovLy6F52u60DZheMCyRhsC6UxACcs+37PK2omgJSjIR8rauWxw3NR21iMNCsKO6MfVnSosmCgGN9A2PVamstYOoJj8WlYNrBeB9xKFuZcENtVHFS0WFkJuyO1UhD2nK7regFJvb0qurIJ5CpFBEe2YU6FW+eik7qur1Z2G5JDsO5gKa7BjQVMG2ORgJYJwVjbPKhoMZaH652LLowEsVgJZB0N+di8V1G3lgkCjhuOjyE4kh0qL0JzEsh7ByAr1SBs0bPLBhbL20jUMVEOohFvh4pmx4HFyjCCc/sYnQxr3rno5CwArMYC2I/vA9iLh4CipILIz00d2f6l6wZkVdeTa7UCxjJLYewsR6G5zYoWdX1nzkTIQciZOXIuumkBSzIMZ9YwNvdgW1ivFlCs5F4Zvfe8oit7gDFVrpe3gWJJ5tJeOLm6lNbWmhU1SqNH7iIs1WKR2LoBXZq353PjIlJbMWDZwEytVB+f3IJp1kqlfKuicKuVWsV0QrBFRMSGY7dXRZMRAAvlenkzCG1canvNioqIOFFgtmyW1jNhbJSrkQmYNmBOYiheite1g4oiUa5WR0IAEB4tz5UTMLYy9cw2vIrCsZrbs/hIxDJgZ6oZy4BlNm8/l0t7ogdGlufmrDUkY5WwWUuPTFfboKL5TBgIlavl0SC0cYnvOwACMW8daDmFeZkHMCYNAEs1kcpk8EhF87EURETKkzqAaEQkNm0gJM2KikhmU0PIAexMbKtV0WS5PrKXTsGZdWpzGmwLwb1MNZPAK6P3nldUiwQBFPQgoA0DmFwBgOAugI2t13xPQw8DwErrUm5BbxzeHPA+3sUMFV7aVml6ELmNw0eSUm12X7Q6DyCsBwBMhIHEy88OaLrRDOPIZ7oYR5IBUNCNo3EcJP/KE1/e55oE9QAA4+ChEM37Uc2fGNSAht4mTxeZuwDCugZgNQiEqm86z2nohTffHfYie/XZjaIOhA/vOIQPPh0m0Pp/ENCDAJLR9nq6aKP14JReGZsZi+UAIFjOziyV59+YlPHGt/U3/9od+o1Am1V0aLP1x9JWft75ez9x5bcK/c3vYPT+VrR4eAFibmrRLaXePpbDB/4OH5RbLi7O1v/6t6432quiwc3WRn94bXmtOQ87k8ujE2+TYLT4D/c4+FTrOdOZ2ZK50K6Pgw92D/7+87bfur+rz46kT2nrZqzMVbe0Np03rjw4g7ld/Vwp/+VXfie/+JkbK8qKvge59Xco1edjRVlRVvR9y+3j7/v7OtXVD5/1Xb3xTd8j1ftj//dXlFI9d/pvdiq/XLnYf7FHKeX//tPz3svf+5lbm49aIWVZqQIA5DasrV0cX7r40pXNFCsKANh95TpPVn/jctDWNYH5t8rtL7fPdT19OvjVk8ddXz2/3fXi59u/dj2/e149eu679+Vjv1/ud5y73aXUxYFr9775TKlzf/762t1f/qjcivvW1KoBADPr1tQuACSnra35114Uwitrbk+88OgOnamKhkvpVKpeKgDZytSYHR8PHl0X9bK1YVb0+LXy1kN87huXg7Y2iMuFt8itx/ejUn7pbh3ofnZNKfXkc3Xh8SPV8+Q7v3yuVJ8MPnp4XakrAw9eyFWlPvr+D8rNKk+HbCdtAAuxqTE7YgETsemF/Yx37zJ04uc3Hl/QN2adPLPaWaroasQADCeBYqUIQHM23lTRZJUVPZnzN94/2V5/u9xefHH9SEWVevTxB74u9es9pdSg8ku3Ut3ivyN3uru7n32tnt6/8PEfldtCOQ+gEF9CvjIBYLEyhLkogIlY+G+t6GtWgqb2z1JFdzMzABYDmN0DACxlwm+oKJzi2a6osxIvbxnYyGJjoxSv5oEhJx5ZONiLprMRqevASiZeOnmfmo+E3yK3H5/evX/jSEWvfiuPP/R1qS/7Dy8XdYu/Tzo6Ojo6LqgrXd+I784fk1t1/eChgw1vw+4GYFoGEE4aABCKb5YjC957UWQ3gO1MpL4IJ4SJkTyGS5HICibKmb2TfrSeCZ6hihprFXPbNYBl79htRnJvqujs+tmuqGwahboNy4YVyWNl2cjF5rEYGYbjwnHhmIFCehoJR8dq+eQHOCLub8/tklwfVI+OVPTPt14o9bxL/fqZUqr7zkFFv5JOpVTvoPIr9fOtb/6Y3KR12j3eepYtWY7sLTSfLghJAm4sCccFbAsJp4HtZTih+XIRjcwqdGf1te+nUJs/QxUFiutzUpo5OMLQxX1TRe21M17RPLBagmXDWgeMTHLd1HXdmjqo6BBgj2NuXdf15aUTf0I6+9tz65aPlbouD1T/t0r1PVXq7vdKXRroUt8/7lU9335+UNFHD/uVujJw/WP5Wanv/6iKukDScZw9mIfPhhbG9uKV9cNz0cn9g4qmU0A4CWcqMwykRnRd3197bUXN6BmqaKAAQJvbw1zzbVNEe1NFs+a7qOij9q0oALcCy4YVAuAsNdeZHlTUBWzzYJXuydNl//bcBp/5uj55/vi6+kp8l7rl6c83bl8+9+fnt9Rgx+PL9++/OKioujjw/PLDWz2q6+G5awM3/5jcMiGg4LqWiVnvUeTFAnQAmKi4ABBqrmFuVrS5i3AypQ1gv5nq6ypq2WeoomtbAJCoI7ocRjAVnK7jjXvR0bev6M//7Xb7VlQDJry9aBQwysnpSQBa4HhFRxI4cfUiAJhvsRdVnR9c/0VdvaTU+b5O9UVfr3pw/eLgT+eVUr/cvDjoPQDY2T2oVO8PN39RSqnzN3/8o+6LTnprt20Tq+UCAMPZnpH84SWhUBXArLcX3bBQTwBGKugkcrEkoiaAgPbaio6vnKXLRZWxMHKlbQRLaw1tNl4peuv09AZ074JH2C1Ac4F8HvDeXeBtKvrov/+P//kv0r4VXUfYXIdlwyoVkKgZbiyHwnL0eEXtkQJylSRy3rbuID1Xg/d2NWfiBEGP780guOpswqiON1DYimgw53IIL8R071zURb5cRCmKhmNhZSSIUNxwQlgvhXMxF8H6BuxJIJc/DDEHJDUAy7tn6Vx0ISJS2TIAbbJSq9Sd6YAuIiKO93YygC4uQtJc4bf8djdGw//rf8u/vBfvk9X/Gys6XopsBmHZsOZqI04RSHhLP49V1LC81YvNg9qD9CQEzGTCZ6SimNmsiETsMKBtSq1SzQHaZEWk5j15EBqpVssJYDVWc6YsGLPlarwIJ4RwaQNj3grU+UocpnUYountghuxs3RFF61FekBQ11BYz7f+xeYrX7qz/Lb3RV/c+T//9/+18V5U17SD06Ggt0I0qJ9w6dZbvbjz6vHYym87DGnPy2zB1pLagq4dvHR4FmV4q0eDzVW4Af3IO/97K1BRCCC/8eoVEQtnq6KvPQZ+9Tkra/WdPLrwoo0r+vdcsbBfOakPL2tnqKLvRPSVD/MwRmZY0dcduszinVS0fXOzWnvMsd3f8v1LC2BF39ZEFqzoqeGoMbczlxsjY27MjRXlqDE35sbImBtzY0XbObIXJ18H7vEPMjfOGyv6HkTW1XXiy37p/tu+/+IDjhrnjZGdYmTnz79dRX19HDXOGyM7xcguXVK9VwcvftCpPu77QqnB7p47P/ibFR180PezUuqSv/eHOz3qlz6/Ukpd7bszqFTnFz0P+i4p9cXjj66qnl/6HvRw1DhvjOyUDnT77t//0vf4U9+XckH55XnHrbsXlV+61SXfs3MPL/eorl8fdzz89dyTZ3fPq57LD689811R3Y+fP3kifercwLOvB799ds53v5OjxnljZKdUUflKdQ4871EfPVN++Vyp6w8f+aVbfXmtR/V+06e6bvvVA/lIqeefqesPf1Lq3CeqW/6i1I37Svn61MWHPerRkwccNc4bIzulij5USvmuK9XnU37pVWrw7ld+6e6VH/x+/4e3VNctpfxyVamuLvXJNb/f3yed3dLpvYmIr0/9LJ89GOSocd4Y2alV1Ne87NPnU37xrgH5pbtbnvp8Pt851dXVfIutri7le+jz+Xy+n7pFtSqq+p7IwLVejhrnjZH9HhV9pFTP3Yt+6b4kV5VSPepYRb/92nvtWEUHVe+Pjy9z1DhvjOz3qOhNpT4YeOGXbvX0hlI99+8dq+hHjzuV+u6bnsOK/qiu+3qUunaLo8Z5Y2S/R0Uf3vhs4KbyS7e6M/Drd0+e/nSsop33fR+dG/jxcC/6/Om9F4+//e7ywC8cNc4bIzuFyM6fV1cuKqUuXlHqykXll58vfHpVqUd9vUr5/9J/vdN7uuFR3yPvD4N9/ReuKtXbp5S6clGpn/7yo+q83n/hCkeN88bIfofI3vaD+jhqzI2RsaKsKHM7u5G97YfGc9SYGyPjqDE35sbImBtzY0U5asyNuf12//qndvJv782o/Vtb5favzK3NcyMiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIior/B/wfixUmz18MifQAAAERlWElmTU0AKgAAAAgAAgESAAMAAAABAAEAAIdpAAQAAAABAAAAJgAAAAAAAqACAAQAAAABAAADoqADAAQAAAABAAAA3AAAAABvBMxMAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTAzLTE2VDE2OjAzOjI2KzAwOjAwm/2R0wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wMy0xNlQxNjowMzoyNiswMDowMOqgKW8AAAASdEVYdGV4aWY6RXhpZk9mZnNldAAzOK24viMAAAAYdEVYdGV4aWY6UGl4ZWxYRGltZW5zaW9uADkzMGMMQhYAAAAYdEVYdGV4aWY6UGl4ZWxZRGltZW5zaW9uADIyMOtNfcAAAAAASUVORK5CYII="},511151:(e,i,n)=>{n.d(i,{Z:()=>a,a:()=>s});var t=n(667294);const o={},r=t.createContext(o);function s(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);