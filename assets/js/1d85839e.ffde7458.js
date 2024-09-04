/*! For license information please see 1d85839e.ffde7458.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[645861],{753605:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var s=t(785893),o=t(511151);const c={id:"cli",title:"TechDocs CLI",description:"TechDocs CLI - a utility command line interface for managing TechDocs sites in Backstage."},i=void 0,a={id:"features/techdocs/cli",title:"TechDocs CLI",description:"TechDocs CLI - a utility command line interface for managing TechDocs sites in Backstage.",source:"@site/../docs/features/techdocs/cli.md",sourceDirName:"features/techdocs",slug:"/features/techdocs/cli",permalink:"/docs/next/features/techdocs/cli",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/techdocs/cli.md",tags:[],version:"current",frontMatter:{id:"cli",title:"TechDocs CLI",description:"TechDocs CLI - a utility command line interface for managing TechDocs sites in Backstage."},sidebar:"docs",previous:{title:"Configuring CI/CD to generate and publish TechDocs sites",permalink:"/docs/next/features/techdocs/configuring-ci-cd"},next:{title:"How-To guides",permalink:"/docs/next/features/techdocs/how-to-guides"}},r={},d=[{value:"Features",id:"features",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Preview TechDocs site locally in a Backstage like environment",id:"preview-techdocs-site-locally-in-a-backstage-like-environment",level:3},{value:"Generate TechDocs site from a documentation project",id:"generate-techdocs-site-from-a-documentation-project",level:3},{value:"Publish generated TechDocs sites",id:"publish-generated-techdocs-sites",level:3},{value:"Publishing from behind a proxy",id:"publishing-from-behind-a-proxy",level:4},{value:"Migrate content for case-insensitive access",id:"migrate-content-for-case-insensitive-access",level:3},{value:"Authentication",id:"authentication",level:4},{value:"Development",id:"development",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Utility command line interface for managing TechDocs sites in\n",(0,s.jsx)(n.a,{href:"https://github.com/backstage/backstage",children:"Backstage"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://backstage.io/docs/features/techdocs/",children:"https://backstage.io/docs/features/techdocs/"})}),"\n",(0,s.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Supports local development/preview of a TechDocs site in a Backstage app."}),"\n",(0,s.jsx)(n.li,{children:"Supports generation and publishing of a documentation site in a CI/CD\nworkflow."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"techdocs-cli --help\nUsage: techdocs-cli [options] [command]\n\nOptions:\n  -V, --version             output the version number\n  -h, --help                display help for command\n\nCommands:\n  generate|build [options]  Generate TechDocs documentation site using mkdocs.\n  publish [options]         Publish generated TechDocs site to an external storage AWS S3,\n                            Google GCS, etc.\n  serve:mkdocs [options]    Serve a documentation project locally using mkdocs serve.\n  serve [options]           Serve a documentation project locally in a Backstage app-like\n                            environment\n  help [command]            display help for command\n"})}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(n.p,{children:["You can always use ",(0,s.jsx)(n.a,{href:"https://github.com/npm/npx",children:(0,s.jsx)(n.code,{children:"npx"})})," to run the latest version\nof ",(0,s.jsx)(n.code,{children:"techdocs-cli"})," -"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npx @techdocs/cli [command]\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Or you can install it using ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/@techdocs/cli",children:"npm"})," -"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install -g @techdocs/cli\ntechdocs-cli [command]\n"})}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.h3,{id:"preview-techdocs-site-locally-in-a-backstage-like-environment",children:"Preview TechDocs site locally in a Backstage like environment"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"techdocs-cli serve\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"A preview of techdocs-cli serve command",src:t(726541).Z+"",width:"1918",height:"1136"})}),"\n",(0,s.jsxs)(n.p,{children:["By default, Docker and\n",(0,s.jsx)(n.a,{href:"https://github.com/backstage/techdocs-container",children:"techdocs-container"})," is used to\nmake sure all the dependencies are installed. However, Docker can be disabled\nwith ",(0,s.jsx)(n.code,{children:"--no-docker"})," flag."]}),"\n",(0,s.jsx)(n.p,{children:"The command starts two local servers - an MkDocs preview server on port 8000 and\na Backstage app server on port 3000. The Backstage app has a custom TechDocs API\nimplementation, which uses the MkDocs preview server as a proxy to fetch the\ngenerated documentation files and assets."}),"\n",(0,s.jsxs)(n.p,{children:["Backstage instances might differ from the provided preview app in appearance and\nbehavior. To preview documentation with a different app, use\n",(0,s.jsx)(n.code,{children:"--preview-app-bundle-path"})," with a path to the bundle of the app to use instead.\nTypically, a ",(0,s.jsx)(n.code,{children:"dist"})," or ",(0,s.jsx)(n.code,{children:"build"})," directory."]}),"\n",(0,s.jsxs)(n.p,{children:["NOTE: When using a custom ",(0,s.jsx)(n.code,{children:"techdocs"})," docker image, make sure the entry point is\nalso ",(0,s.jsx)(n.code,{children:'ENTRYPOINT ["mkdocs"]'})," or override with ",(0,s.jsx)(n.code,{children:"--docker-entrypoint"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Command reference:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'Usage: techdocs-cli serve [options]\n\nServe a documentation project locally in a Backstage app-like environment\n\nOptions:\n  -i, --docker-image <DOCKER_IMAGE>           The mkdocs docker container to use (default: "spotify/techdocs")\n  --docker-entrypoint <DOCKER_ENTRYPOINT>     Override the image entrypoint\n  --docker-option <DOCKER_OPTION...>          Extra options to pass to the docker run command, e.g. "--add-host=internal.host:192.168.11.12"\n                                              (can be added multiple times).\n  --no-docker                                 Do not use Docker, use MkDocs executable in current user environment.\n  --mkdocs-parameter-clean                    Pass "--clean" parameter to mkdocs server running in containerized environment.\n  --mkdocs-parameter-dirtyreload              Pass "--dirtyreload" parameter to mkdocs server running in containerized environment.\n  --mkdocs-parameter-strict                   Pass "--strict" parameter to mkdocs server running in containerized environment.\n  --mkdocs-port <PORT>                        Port for MkDocs server to use (default: "8000")\n  --preview-app-bundle-path <PATH_TO_BUNDLE>  Preview documentation using a web app other than the included one.\n  --preview-app-port <PORT>                   Port where the preview will be served.\n                                              Can only be used with "--preview-app-bundle-path". (default: "3000")\n  -c, --mkdocs-config-file-name <FILENAME>    Yaml file to use as config by mkdocs.\n  -v --verbose                                Enable verbose output. (default: false)\n  -h, --help                                  display help for command\n'})}),"\n",(0,s.jsx)(n.h3,{id:"generate-techdocs-site-from-a-documentation-project",children:"Generate TechDocs site from a documentation project"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"techdocs-cli generate\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Alias: ",(0,s.jsx)(n.code,{children:"techdocs-cli build"})]}),"\n",(0,s.jsxs)(n.p,{children:["The generate command uses the\n",(0,s.jsx)(n.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/techdocs-node",children:(0,s.jsx)(n.code,{children:"@backstage/plugin-techdocs-node"})}),"\npackage from Backstage for consistency. A Backstage app can also generate and\npublish TechDocs sites if ",(0,s.jsx)(n.code,{children:"techdocs.builder"})," is set to ",(0,s.jsx)(n.code,{children:"'local'"})," in\n",(0,s.jsx)(n.code,{children:"app-config.yaml"}),". See\n",(0,s.jsx)(n.a,{href:"https://backstage.io/docs/features/techdocs/configuration",children:"configuration reference"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["By default, this command uses Docker and\n",(0,s.jsx)(n.a,{href:"https://github.com/backstage/techdocs-container",children:"techdocs-container"})," to make\nsure all the dependencies are installed. But it can be disabled using\n",(0,s.jsx)(n.code,{children:"--no-docker"})," flag."]}),"\n",(0,s.jsx)(n.p,{children:"Command reference:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'techdocs-cli generate --help\nUsage: techdocs-cli generate|build [options]\n\nGenerate TechDocs documentation site using MkDocs.\n\nOptions:\n  --source-dir <PATH>             Source directory containing mkdocs.yml and docs/ directory. (default: ".")\n  --output-dir <PATH>             Output directory containing generated TechDocs site. (default: "./site/")\n  --docker-image <DOCKER_IMAGE>   The mkdocs docker container to use (default: "spotify/techdocs:v1.0.3")\n  --no-pull                       Do not pull the latest docker image\n  --no-docker                     Do not use Docker, use MkDocs executable and plugins in current user environment.\n  --techdocs-ref <HOST_TYPE:URL>  The repository hosting documentation source files e.g.\n                                  url:https://ghe.mycompany.net.com/org/repo.\n                                  This value is same as the backstage.io/techdocs-ref annotation of the corresponding\n                                  Backstage entity.\n                                  It is completely fine to skip this as it is only being used to set repo_url in mkdocs.yml\n                                  if not found.\n  --etag <ETAG>                   A unique identifier for the prepared tree e.g. commit SHA. If provided it will be stored\n                                  in techdocs_metadata.json.\n  --defaultPlugin <PLUGIN_NAME>   Plugins which should be added automatically to the mkdocs.yaml file. (default: [])\n  --omitTechdocsCoreMkdocsPlugin  An option to disable automatic addition of techdocs-core plugin to the mkdocs.yaml files.\n                                  Defaults to false, which means that the techdocs-core plugin is always added to the mkdocs file.\n  --legacyCopyReadmeMdToIndexMd   Attempt to ensure an index.md exists falling back to using <docs-dir>/README.md or README.md\n                                  in case a default <docs-dir>/index.md is not provided. (default: false)\n  --runAsDefaultUser              Bypass setting the container user as the same user and group id as host for Linux and MacOS (default: false)\n  -v --verbose                    Enable verbose output. (default: false)\n  -h, --help                      display help for command\n'})}),"\n",(0,s.jsx)(n.h3,{id:"publish-generated-techdocs-sites",children:"Publish generated TechDocs sites"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"techdocs-cli publish --publisher-type <awsS3|googleGcs|azureBlobStorage> --storage-name <bucket/container name> --entity <namespace/kind/name>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["After generating a TechDocs site using ",(0,s.jsx)(n.code,{children:"techdocs-cli generate"}),", use the publish\ncommand to upload the static generated files on a cloud storage (AWS/GCS) bucket\nor (Azure) container which your Backstage app can read from."]}),"\n",(0,s.jsxs)(n.p,{children:["The value for ",(0,s.jsx)(n.code,{children:"--entity"})," must be the Backstage entity which the generated\nTechDocs site belongs to. You can find the values in your Entity's\n",(0,s.jsx)(n.code,{children:"catalog-info.yaml"})," file. If namespace is missing in the ",(0,s.jsx)(n.code,{children:"catalog-info.yaml"}),",\nuse ",(0,s.jsx)(n.code,{children:"default"}),". The directory structure used in the storage bucket is\n",(0,s.jsx)(n.code,{children:"namespace/kind/name/<files>"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Note that the values are case-sensitive. An example for ",(0,s.jsx)(n.code,{children:"--entity"})," is\n",(0,s.jsx)(n.code,{children:"default/Component/<entityName>"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Command reference:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'Usage: techdocs-cli publish [options]\n\nPublish generated TechDocs site to an external storage AWS S3, Google GCS, etc.\n\nOptions:\n  --publisher-type <TYPE>                                       (Required always) awsS3 | googleGcs | azureBlobStorage | openStackSwift - same as techdocs.publisher.type in Backstage app-config.yaml\n  --storage-name <BUCKET/CONTAINER NAME>                        (Required always) In case of AWS/GCS, use the bucket name. In case of Azure, use container name. Same as\n                                                                techdocs.publisher.[TYPE].bucketName\n  --entity <NAMESPACE/KIND/NAME>                                (Required always) Entity uid separated by / in namespace/kind/name order (case-sensitive). Example: default/Component/myEntity\n  --legacyUseCaseSensitiveTripletPaths                          Publishes objects with cased entity triplet prefix when set (e.g. namespace/Kind/name). Only use if your TechDocs backend is configured\n                                                                the same way. (default: false)\n  --azureAccountName <AZURE ACCOUNT NAME>                       (Required for Azure) specify when --publisher-type azureBlobStorage\n  --azureAccountKey <AZURE ACCOUNT KEY>                         Azure Storage Account key to use for authentication. If not specified, you must set AZURE_TENANT_ID, AZURE_CLIENT_ID &\n                                                                AZURE_CLIENT_SECRET as environment variables.\n  --awsRoleArn <AWS ROLE ARN>                                   Optional AWS ARN of role to be assumed.\n  --awsEndpoint <AWS ENDPOINT>                                  Optional AWS endpoint to send requests to.\n  --awsProxy <HTTPS Proxy>                                      Optional Proxy to use for AWS requests.\n  --awsS3sse <AWS SSE>                                          Optional AWS S3 Server Side Encryption.\n  --awsS3ForcePathStyle                                         Optional AWS S3 option to force path style.\n  --awsBucketRootPath <AWS BUCKET ROOT PATH>                    Optional sub-directory to store files in Amazon S3\n  --osCredentialId <OPENSTACK SWIFT APPLICATION CREDENTIAL ID>  (Required for OpenStack) specify when --publisher-type openStackSwift\n  --osSecret <OPENSTACK SWIFT APPLICATION CREDENTIAL SECRET>    (Required for OpenStack) specify when --publisher-type openStackSwift\n  --osAuthUrl <OPENSTACK SWIFT AUTHURL>                         (Required for OpenStack) specify when --publisher-type openStackSwift\n  --osSwiftUrl <OPENSTACK SWIFT SWIFTURL>                       (Required for OpenStack) specify when --publisher-type openStackSwift\n  --gcsBucketRootPath <GCS BUCKET ROOT PATH>                    Optional sub-directory to store files in Google cloud storage\n  --directory <PATH>                                            Path of the directory containing generated files to publish (default: "./site/")\n  -h, --help                                                    display help for command\n'})}),"\n",(0,s.jsx)(n.h4,{id:"publishing-from-behind-a-proxy",children:"Publishing from behind a proxy"}),"\n",(0,s.jsxs)(n.p,{children:["For users attempting to publish TechDocs content behind a proxy, the TechDocs CLI leverages ",(0,s.jsx)(n.code,{children:"global-agent"})," to navigate the proxy to successfully connect to that location. To enable ",(0,s.jsx)(n.code,{children:"global-agent"}),", the following variables need to be set prior to running the techdocs-cli command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"export GLOBAL_AGENT_HTTPS_PROXY=${HTTP_PROXY}\nexport GLOBAL_AGENT_NO_PROXY=${NO_PROXY}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"migrate-content-for-case-insensitive-access",children:"Migrate content for case-insensitive access"}),"\n",(0,s.jsxs)(n.p,{children:["Prior to the beta version of TechDocs (",(0,s.jsx)(n.code,{children:"v[0.11.0]"}),"), TechDocs were stored in\nobject storage using a case-sensitive entity triplet (e.g.\n",(0,s.jsx)(n.code,{children:"default/API/name/index.html"}),"). This resulted in a limitation where that exact\ncase was required in the Backstage URL in order to read/render TechDocs content.\nAs of ",(0,s.jsx)(n.code,{children:"v[0.11.0]"})," of the TechDocs plugin, any case is allowed in the URL (e.g.\n",(0,s.jsx)(n.code,{children:"default/api/name"}),"), matching the behavior of the Catalog plugin."]}),"\n",(0,s.jsxs)(n.p,{children:["Backstage instances created with TechDocs ",(0,s.jsx)(n.code,{children:"v[0.11.0]"})," or later do not need this\ncommand. However, when upgrading to this version from an older version of\nTechDocs, the ",(0,s.jsx)(n.code,{children:"migrate"})," command can be used prior to deployment to ensure docs\nremain accessible without having to rebuild all docs."]}),"\n",(0,s.jsxs)(n.p,{children:["Prior to upgrading to ",(0,s.jsx)(n.code,{children:"v[0.11.0]"})," or greater, run this command to copy all\nassets to their lower-case triplet equivalents like this:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"techdocs-cli migrate --publisher-type <awsS3|googleGcs|azureBlobStorage> --storage-name <bucket/container name> --verbose\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Once migrated and the upgraded version of the Backstage plugin has been\ndeployed, you can clean up the legacy, case-sensitive triplet files by\nre-running the command with the ",(0,s.jsx)(n.code,{children:"--removeOriginal"})," flag passed, which ",(0,s.jsx)(n.em,{children:"moves"}),"\n(rather than copies) the files. Note: this deletes files and is therefore a\ndestructive operation that should performed with caution."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"techdocs-cli migrate --publisher-type <awsS3|googleGcs|azureBlobStorage> --storage-name <bucket/container name> --removeOriginal --verbose\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Afterward, update your TechDocs CLI to ",(0,s.jsx)(n.code,{children:"v[0.7.0]"})," to ensure further publishing\nhappens using a lower-case entity triplet."]}),"\n",(0,s.jsxs)(n.p,{children:["Note: arguments for this command largely match those of the ",(0,s.jsx)(n.code,{children:"publish"})," command,\ndepending on your chosen storage provider. Run ",(0,s.jsx)(n.code,{children:"techdocs-cli migrate --help"})," for\ndetails."]}),"\n",(0,s.jsx)(n.h4,{id:"authentication",children:"Authentication"}),"\n",(0,s.jsxs)(n.p,{children:["You need to make sure that your environment is able to authenticate with the\ntarget cloud provider. ",(0,s.jsx)(n.code,{children:"techdocs-cli"})," uses the official Node.js clients provided\nby AWS (v3), Google Cloud and Azure. You can authenticate using environment\nvariables and/or by other means (",(0,s.jsx)(n.code,{children:"~/.aws/credentials"}),", ",(0,s.jsx)(n.code,{children:"~/.config/gcloud"})," etc.)"]}),"\n",(0,s.jsx)(n.p,{children:"Refer to the Authentication section of the following documentation depending\nupon your cloud storage provider -"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://backstage.io/docs/features/techdocs/using-cloud-storage#configuring-google-gcs-bucket-with-techdocs",children:"Google Cloud Storage"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://backstage.io/docs/features/techdocs/using-cloud-storage#configuring-aws-s3-bucket-with-techdocs",children:"AWS S3"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://backstage.io/docs/features/techdocs/using-cloud-storage#configuring-azure-blob-storage-container-with-techdocs",children:"Azure Blob Storage"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"development",children:"Development"}),"\n",(0,s.jsxs)(n.p,{children:["You are welcome to contribute to TechDocs CLI to improve it and support new\nfeatures! See the project\n",(0,s.jsx)(n.a,{href:"https://github.com/backstage/backstage/blob/main/src/packages/techdocs-cli/README.md",children:"README"}),"\nfor more information."]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},675251:(e,n,t)=>{var s=t(667294),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var s,c={},d=null,l=null;for(s in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)i.call(n,s)&&!r.hasOwnProperty(s)&&(c[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===c[s]&&(c[s]=n[s]);return{$$typeof:o,type:e,key:d,ref:l,props:c,_owner:a.current}}n.Fragment=c,n.jsx=d,n.jsxs=d},785893:(e,n,t)=>{e.exports=t(675251)},726541:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/techdocs-cli-serve-preview-aa54f38162b18cee2747ce73121b0588.png"},511151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var s=t(667294);const o={},c=s.createContext(o);function i(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);