/*! For license information please see 2737e8cf.56648104.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[454471],{869572:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=t(785893),i=t(511151);const o={id:"quickstart-app-plugin",title:"Adding Custom Plugin to Existing Monorepo App"},r=void 0,a={id:"tutorials/quickstart-app-plugin",title:"Adding Custom Plugin to Existing Monorepo App",description:"September 15th 2020 - v0.1.1-alpha.21",source:"@site/../docs/tutorials/quickstart-app-plugin.md",sourceDirName:"tutorials",slug:"/tutorials/quickstart-app-plugin",permalink:"/docs/next/tutorials/quickstart-app-plugin",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/tutorials/quickstart-app-plugin.md",tags:[],version:"current",frontMatter:{id:"quickstart-app-plugin",title:"Adding Custom Plugin to Existing Monorepo App"},sidebar:"docs",previous:{title:"Deprecations",permalink:"/docs/next/api/deprecations"},next:{title:"React Router 6.0 Migration",permalink:"/docs/next/tutorials/react-router-stable-migration"}},l={},c=[{value:"September 15th 2020 - v0.1.1-alpha.21",id:"september-15th-2020---v011-alpha21",level:6},{value:"We will add a lot to this file for the sake of ease. Please don&#39;t do this in productional code!",id:"we-will-add-a-lot-to-this-file-for-the-sake-of-ease-please-dont-do-this-in-productional-code",level:6}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h6:"h6",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h6,{id:"september-15th-2020---v011-alpha21",children:"September 15th 2020 - v0.1.1-alpha.21"}),"\n",(0,s.jsx)(n.br,{}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["This document takes you through setting up a new plugin for your existing\nmonorepo with a ",(0,s.jsx)(n.em,{children:"GitHub provider already setup"}),". If you don't have either of\nthose, you can clone\n",(0,s.jsx)(n.a,{href:"https://github.com/johnson-jesse/simple-backstage-app",children:"simple-backstage-app"}),"\nwhich this document builds on."]}),"\n",(0,s.jsx)(n.p,{children:"This document does not cover authoring a plugin for sharing with the Backstage\ncommunity. That will have to be a later discussion."}),"\n",(0,s.jsx)(n.p,{children:"We start with a skeleton plugin install. And after verifying its\nfunctionality, extend the Sidebar to make our life easy. Finally, we add\ncustom code to display GitHub repository information."}),"\n",(0,s.jsxs)(n.p,{children:["This document assumes you have Node.js 16 active along with Yarn and Python.\nPlease note, that at the time of this writing, the current version is\n0.1.1-alpha.21. This guide can still be used with future versions, just,\nverify as you go. If you run into issues, you can compare your setup with mine\nhere >\n",(0,s.jsx)(n.a,{href:"https://github.com/johnson-jesse/simple-backstage-app-plugin",children:"simple-backstage-app-plugin"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h1,{id:"the-skeleton-plugin",children:"The Skeleton Plugin"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Start by using the built-in creator. From the terminal and root of your\nproject run: ",(0,s.jsx)(n.code,{children:"yarn new --select plugin"})]}),"\n",(0,s.jsxs)(n.li,{children:["Enter a plugin ID. I used ",(0,s.jsx)(n.code,{children:"github-playground"})]}),"\n",(0,s.jsxs)(n.li,{children:["When the process finishes, let's start the backend:\n",(0,s.jsx)(n.code,{children:"yarn --cwd packages/backend start"})]}),"\n",(0,s.jsxs)(n.li,{children:["If you see errors starting, refer to\n",(0,s.jsx)(n.a,{href:"https://backstage.io/docs/auth/",children:"Auth Configuration"})," for more information on\nenvironment variables."]}),"\n",(0,s.jsxs)(n.li,{children:["And now the frontend, from a new terminal window and the root of your\nproject: ",(0,s.jsx)(n.code,{children:"yarn start"})]}),"\n",(0,s.jsx)(n.li,{children:"As usual, a browser window should popup loading the App."}),"\n",(0,s.jsxs)(n.li,{children:["Now manually navigate to our plugin page from your browser:\n",(0,s.jsx)(n.code,{children:"http://localhost:3000/github-playground"})]}),"\n",(0,s.jsxs)(n.li,{children:["You should see successful verbiage for this endpoint,\n",(0,s.jsx)(n.code,{children:"Welcome to github-playground!"})]}),"\n"]}),"\n",(0,s.jsx)(n.h1,{id:"the-shortcut",children:"The Shortcut"}),"\n",(0,s.jsx)(n.p,{children:"Let's add a shortcut."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Open and modify ",(0,s.jsx)(n.code,{children:"root: packages > app > src > components > Root.tsx"})," with the\nfollowing:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:'import GitHubIcon from \'@material-ui/icons/GitHub\';\n...\n<SidebarItem icon={GitHubIcon} to="github-playground" text="GitHub Repository" />\n'})}),"\n",(0,s.jsx)(n.p,{children:"Simple! The App will reload with your changes automatically. You should now see\na GitHub icon displayed in the sidebar. Clicking that will link to our new\nplugin. And now, the API fun begins."}),"\n",(0,s.jsx)(n.h1,{id:"the-identity",children:"The Identity"}),"\n",(0,s.jsx)(n.p,{children:"Our first modification will be to extract information from the Identity API."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Start by opening\n",(0,s.jsx)(n.code,{children:"root: plugins > github-playground > src > components > ExampleComponent > ExampleComponent.tsx"})]}),"\n",(0,s.jsx)(n.li,{children:"Add two new imports"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"// Add identityApiRef to the list of imported from core\nimport { identityApiRef, useApi } from '@backstage/core-plugin-api';\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Adjust the ExampleComponent from inline to block"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"from inline:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"const ExampleComponent = () => ( ... )\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"to block:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"const ExampleComponent = () => {\n\n    return (\n        ...\n    )\n}\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:"Now add our hook and const data before the return statement"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"// our API hook\nconst identityApi = useApi(identityApiRef);\n\n// data to use\nconst userId = identityApi.getUserId();\nconst profile = identityApi.getProfile();\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsx)(n.li,{children:"Finally, update the InfoCard's jsx to use our new data"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:'<InfoCard title={userId}>\n  <Typography variant="body1">\n    {`${profile.displayName} | ${profile.email}`}\n  </Typography>\n</InfoCard>\n'})}),"\n",(0,s.jsx)(n.p,{children:"If everything is saved, you should see your name, id, and email on the\ngithub-playground page. Our data accessed is synchronous. So we just grab and\ngo."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/backstage/backstage/tree/master/contrib",children:"https://github.com/backstage/backstage/tree/master/contrib"})}),"\n",(0,s.jsxs)(n.ol,{start:"6",children:["\n",(0,s.jsxs)(n.li,{children:["Here is the entire file for reference\n",(0,s.jsx)(n.a,{href:"https://github.com/backstage/backstage/tree/master/contrib/docs/tutorials/quickstart-app-plugin/ExampleComponent.md",children:"ExampleComponent.tsx"})]}),"\n"]}),"\n",(0,s.jsx)(n.h1,{id:"the-wipe",children:"The Wipe"}),"\n",(0,s.jsx)(n.p,{children:"The last file we will touch is ExampleFetchComponent. Because of the number of\nchanges, let's start by wiping this component clean."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Start by opening\n",(0,s.jsx)(n.code,{children:"root: plugins > github-playground > src > components > ExampleFetchComponent > ExampleFetchComponent.tsx"})]}),"\n",(0,s.jsx)(n.li,{children:"Replace everything in the file with the following:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import React from 'react';\nimport useAsync from 'react-use/lib/useAsync';\nimport Alert from '@material-ui/lab/Alert';\nimport { Table, TableColumn, Progress } from '@backstage/core-components';\nimport { githubAuthApiRef, useApi } from '@backstage/core-plugin-api';\nimport { graphql } from '@octokit/graphql';\n\nexport const ExampleFetchComponent = () => {\n  return <div>Nothing to see yet</div>;\n};\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Save that and ensure you see no errors. Comment out the unused imports if\nyour linter gets in the way."}),"\n"]}),"\n",(0,s.jsx)(n.h6,{id:"we-will-add-a-lot-to-this-file-for-the-sake-of-ease-please-dont-do-this-in-productional-code",children:"We will add a lot to this file for the sake of ease. Please don't do this in productional code!"}),"\n",(0,s.jsx)(n.h1,{id:"the-graph-model",children:"The Graph Model"}),"\n",(0,s.jsx)(n.p,{children:"GitHub has a GraphQL API available for interacting. Let's start by adding our\nbasic repository query"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Add the query const statement outside ExampleFetchComponent"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"const query = `{\n  viewer {\n    repositories(first: 100) {\n      totalCount\n      nodes {\n        name\n        createdAt\n        description\n        diskUsage\n        isFork\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n}`;\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"Using this structure as a guide, we will break our query into type parts"}),"\n",(0,s.jsx)(n.li,{children:"Add the following outside of ExampleFetchComponent"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"type Node = {\n  name: string;\n  createdAt: string;\n  description: string;\n  diskUsage: number;\n  isFork: boolean;\n};\n\ntype Viewer = {\n  repositories: {\n    totalCount: number;\n    nodes: Node[];\n    pageInfo: {\n      endCursor: string;\n      hasNextPage: boolean;\n    };\n  };\n};\n"})}),"\n",(0,s.jsx)(n.h1,{id:"the-table-model",children:"The Table Model"}),"\n",(0,s.jsx)(n.p,{children:"Using Backstage's own component library, let's define a custom table. This\ncomponent will get used if we have data to display."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Add the following outside of ExampleFetchComponent"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"type DenseTableProps = {\n  viewer: Viewer;\n};\n\nexport const DenseTable = ({ viewer }: DenseTableProps) => {\n  const columns: TableColumn[] = [\n    { title: 'Name', field: 'name' },\n    { title: 'Created', field: 'createdAt' },\n    { title: 'Description', field: 'description' },\n    { title: 'Disk Usage', field: 'diskUsage' },\n    { title: 'Fork', field: 'isFork' },\n  ];\n\n  return (\n    <Table\n      title=\"List Of User's Repositories\"\n      options={{ search: false, paging: false }}\n      columns={columns}\n      data={viewer.repositories.nodes}\n    />\n  );\n};\n"})}),"\n",(0,s.jsx)(n.h1,{id:"the-fetch",children:"The Fetch"}),"\n",(0,s.jsx)(n.p,{children:"We're ready to flush out our fetch component"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Add our api hook inside ExampleFetchComponent"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"const auth = useApi(githubAuthApiRef);\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"The access token we need to make our GitHub request and the request itself is\nobtained in an asynchronous manner."}),"\n",(0,s.jsx)(n.li,{children:"Add the useAsync block inside the ExampleFetchComponent"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"const { value, loading, error } = useAsync(async (): Promise<any> => {\n  const token = await auth.getAccessToken();\n\n  const gqlEndpoint = graphql.defaults({\n    // Uncomment baseUrl if using enterprise\n    // baseUrl: 'https://github.MY-BIZ.com/api',\n    headers: {\n      authorization: `token ${token}`,\n    },\n  });\n  const { viewer } = await gqlEndpoint(query);\n  return viewer;\n}, []);\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsxs)(n.li,{children:["The resolved data is conveniently destructured with ",(0,s.jsx)(n.code,{children:"value"})," containing our\nViewer type. ",(0,s.jsx)(n.code,{children:"loading"})," as a boolean, self explanatory. And ",(0,s.jsx)(n.code,{children:"error"})," which is\npresent only if necessary. So let's use those as the first 3 of 4 multi\nreturn statements."]}),"\n",(0,s.jsxs)(n.li,{children:["Add the ",(0,s.jsx)(n.em,{children:"if return"})," blocks below our async block"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:'if (loading) return <Progress />;\nif (error) return <Alert severity="error">{error.message}</Alert>;\nif (value && value.repositories) return <DenseTable viewer={value} />;\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"6",children:["\n",(0,s.jsx)(n.li,{children:"The third line here utilizes our custom table accepting our Viewer type."}),"\n",(0,s.jsxs)(n.li,{children:["Finally, we add our ",(0,s.jsx)(n.em,{children:"else return"})," block to catch any other scenarios."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:'return (\n  <Table\n    title="List Of User\'s Repositories"\n    options={{ search: false, paging: false }}\n    columns={[]}\n    data={[]}\n  />\n);\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"8",children:["\n",(0,s.jsx)(n.li,{children:"After saving that, and given we don't have any errors, you should see a table\nwith basic information on your repositories."}),"\n",(0,s.jsxs)(n.li,{children:["Here is the entire file for reference\n",(0,s.jsx)(n.a,{href:"https://github.com/backstage/backstage/tree/master/contrib/docs/tutorials/quickstart-app-plugin/ExampleFetchComponent.md",children:"ExampleFetchComponent.tsx"})]}),"\n",(0,s.jsxs)(n.li,{children:["We finished! You should see your own GitHub repository's information\ndisplayed in a basic table. If you run into issues, you can compare the repo\nthat backs this document,\n",(0,s.jsx)(n.a,{href:"https://github.com/johnson-jesse/simple-backstage-app-plugin",children:"simple-backstage-app-plugin"})]}),"\n"]}),"\n",(0,s.jsx)(n.h1,{id:"where-to-go-from-here",children:"Where to go from here"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Break apart ExampleFetchComponent into smaller logical parts contained in\ntheir own files. Rename your components to something other than ExampleXxx."}),"\n",(0,s.jsxs)(n.p,{children:["You might be really proud of a plugin you develop. Follow this next tutorial\nfor an in-depth look at publishing and including that for the entire Backstage\ncommunity. ",(0,s.jsx)(n.a,{href:"#",children:"TODO"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},675251:(e,n,t)=>{var s=t(667294),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var s,o={},c=null,d=null;for(s in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)r.call(n,s)&&!l.hasOwnProperty(s)&&(o[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===o[s]&&(o[s]=n[s]);return{$$typeof:i,type:e,key:c,ref:d,props:o,_owner:a.current}}n.Fragment=o,n.jsx=c,n.jsxs=c},785893:(e,n,t)=>{e.exports=t(675251)},511151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var s=t(667294);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);