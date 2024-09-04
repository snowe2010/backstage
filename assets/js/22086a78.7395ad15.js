/*! For license information please see 22086a78.7395ad15.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[508681],{841522:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var a=t(785893),o=t(511151);const i={id:"installation",title:"Datadog RUM Installation",sidebar_label:"Installation",description:"Adding Datadog Real User Monitoring (RUM) to Your App"},s=void 0,r={id:"integrations/datadog-rum/installation",title:"Datadog RUM Installation",description:"Adding Datadog Real User Monitoring (RUM) to Your App",source:"@site/../docs/integrations/datadog-rum/installation.md",sourceDirName:"integrations/datadog-rum",slug:"/integrations/datadog-rum/installation",permalink:"/docs/next/integrations/datadog-rum/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/integrations/datadog-rum/installation.md",tags:[],version:"current",frontMatter:{id:"installation",title:"Datadog RUM Installation",sidebar_label:"Installation",description:"Adding Datadog Real User Monitoring (RUM) to Your App"},sidebar:"docs",previous:{title:"Discovery",permalink:"/docs/next/integrations/bitbucketServer/discovery"},next:{title:"Locations",permalink:"/docs/next/integrations/gerrit/locations"}},d={},c=[];function l(e){const n={a:"a",admonition:"admonition",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Datadog Real User Monitoring (RUM) allows you to visualize and analyze the\nreal-time performance and user journeys of your application's individual users.\nThis is an option to profile and monitor the user experience of your Backstage\ninstallation."}),"\n",(0,a.jsxs)(n.p,{children:["There is a basic ",(0,a.jsx)(n.a,{href:"https://docs.datadoghq.com/real_user_monitoring/",children:"Datadog RUM"}),"\nintegration built into Backstage. You can enable it by adding the following to\nyour ",(0,a.jsx)(n.code,{children:"app-config.yaml"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"app:\n  datadogRum:\n    clientToken: '123456789'\n    applicationId: qwerty\n  #   site: datadoghq.eu\n  #   env: 'staging'\n  #   sessionSampleRate: 100\n  #   sessionReplaySampleRate: 0\n"})}),"\n",(0,a.jsxs)(n.p,{children:["If your ",(0,a.jsx)(n.a,{href:"https://github.com/backstage/backstage/blob/e0506af8fc54074a160fb91c83d6cae8172d3bb3/app-config.yaml#L5",children:(0,a.jsx)(n.code,{children:"app-config.yaml"})})," file does not have this configuration, you may have to adjust your ",(0,a.jsx)(n.a,{href:"https://github.com/backstage/backstage/blob/e0506af8fc54074a160fb91c83d6cae8172d3bb3/packages/app/public/index.html#L69",children:(0,a.jsx)(n.code,{children:"packages/app/public/index.html"})})," to include the Datadog RUM ",(0,a.jsx)(n.code,{children:"init()"})," section manually."]}),"\n",(0,a.jsx)(n.p,{children:"Please note that the env value MUST be specified at build time"}),"\n",(0,a.jsxs)(n.admonition,{type:"note",children:[(0,a.jsxs)(n.p,{children:["In case after a proper configuration, the events still are not being captured: Copy and paste this section in to your ",(0,a.jsx)(n.code,{children:"packages/app/public/index.html"})," under the ",(0,a.jsx)(n.code,{children:"<head>"})," tag."]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:"<% if (config.has('app.datadogRum')) { %>\n<script>\n  (function (h, o, u, n, d) {\n    h = h[d] = h[d] || {\n      q: [],\n      onReady: function (c) {\n        h.q.push(c);\n      },\n    };\n    d = o.createElement(u);\n    d.async = 1;\n    d.src = n;\n    n = o.getElementsByTagName(u)[0];\n    n.parentNode.insertBefore(d, n);\n  })(\n    window,\n    document,\n    'script',\n    'https://www.datadoghq-browser-agent.com/datadog-rum-v3.js',\n    'DD_RUM',\n  );\n  DD_RUM.onReady(function () {\n    DD_RUM.init({\n      clientToken: '<%= config.getString(\"app.datadogRum.clientToken\") %>',\n      applicationId: '<%= config.getString(\"app.datadogRum.applicationId\") %>',\n      site: '<%= config.getOptionalString(\"app.datadogRum.site\") || \"datadoghq.com\" %>',\n      service: 'backstage',\n      env: '<%= config.getString(\"app.datadogRum.env\") %>',\n      sampleRate:\n        '<%= config.getOptionalNumber(\"app.datadogRum.sessionSampleRate\") || 100 %>',\n      sessionReplaySampleRate:\n        '<%= config.getOptionalNumber(\"app.datadogRum.sessionReplaySampleRate\") || 0 %>',\n      trackInteractions: true,\n    });\n  });\n<\/script>\n<% } %>\n"})}),(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"clientToken"})," and ",(0,a.jsx)(n.code,{children:"applicationId"})," are generated from the Datadog RUM page\nfollowing\n",(0,a.jsx)(n.a,{href:"https://docs.datadoghq.com/real_user_monitoring/browser/",children:"these instructions"}),"."]}),(0,a.jsx)(n.p,{children:"There are two optional arguments:"}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"site"}),": The Datadog site of your organization; defaults to ",(0,a.jsx)(n.code,{children:"datadoghq.com"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"env"}),": The application environment for Datadog events (no default)"]}),"\n"]})]})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},675251:(e,n,t)=>{var a=t(667294),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,r=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var a,i={},c=null,l=null;for(a in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(l=n.ref),n)s.call(n,a)&&!d.hasOwnProperty(a)&&(i[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===i[a]&&(i[a]=n[a]);return{$$typeof:o,type:e,key:c,ref:l,props:i,_owner:r.current}}n.Fragment=i,n.jsx=c,n.jsxs=c},785893:(e,n,t)=>{e.exports=t(675251)},511151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var a=t(667294);const o={},i=a.createContext(o);function s(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);