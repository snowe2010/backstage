/*! For license information please see ae8338b2.03690a87.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[483617],{222199:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var t=r(785893),i=r(511151);const s={id:"integration",title:"@backstage/integration",description:"API Reference for @backstage/integration"},d=void 0,c={id:"reference/integration",title:"@backstage/integration",description:"API Reference for @backstage/integration",source:"@site/versioned_docs/version-stable/reference/integration.md",sourceDirName:"reference",slug:"/reference/integration",permalink:"/docs/reference/integration",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/integration.md",tags:[],version:"stable",frontMatter:{id:"integration",title:"@backstage/integration",description:"API Reference for @backstage/integration"}},a={},o=[{value:"Classes",id:"classes",level:2},{value:"Functions",id:"functions",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Type Aliases",id:"type-aliases",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/integration",children:(0,t.jsx)(n.code,{children:"@backstage/integration"})})]}),"\n",(0,t.jsx)(n.p,{children:"Helpers for managing integrations towards external systems"}),"\n",(0,t.jsx)(n.h2,{id:"classes",children:"Classes"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Class"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.awscodecommitintegration",children:"AwsCodeCommitIntegration"})}),(0,t.jsx)(n.td,{children:"Integrates with AWS CodeCommit."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.awss3integration",children:"AwsS3Integration"})}),(0,t.jsx)(n.td,{children:"Integrates with AWS S3 or compatible solutions."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.azureintegration",children:"AzureIntegration"})}),(0,t.jsx)(n.td,{children:"Microsoft Azure based integration."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.bitbucketcloudintegration",children:"BitbucketCloudIntegration"})}),(0,t.jsx)(n.td,{children:"A Bitbucket Cloud based integration."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.bitbucketintegration",children:"BitbucketIntegration"})}),(0,t.jsx)(n.td,{children:"A Bitbucket based integration."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.bitbucketserverintegration",children:"BitbucketServerIntegration"})}),(0,t.jsx)(n.td,{children:"A Bitbucket Server based integration."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.defaultazuredevopscredentialsprovider",children:"DefaultAzureDevOpsCredentialsProvider"})}),(0,t.jsx)(n.td,{children:"Default implementation of AzureDevOpsCredentialsProvider."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.defaultgithubcredentialsprovider",children:"DefaultGithubCredentialsProvider"})}),(0,t.jsx)(n.td,{children:"Handles the creation and caching of credentials for GitHub integrations."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.defaultgitlabcredentialsprovider",children:"DefaultGitlabCredentialsProvider"})}),(0,t.jsx)(n.td,{children:"Handles the creation and caching of credentials for GitLab integrations."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.gerritintegration",children:"GerritIntegration"})}),(0,t.jsx)(n.td,{children:"A Gerrit based integration."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.giteaintegration",children:"GiteaIntegration"})}),(0,t.jsx)(n.td,{children:"A Gitea based integration."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.githubappcredentialsmux",children:"GithubAppCredentialsMux"})}),(0,t.jsx)(n.td,{children:"Corresponds to a Github installation which internally could hold several GitHub Apps."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.githubintegration",children:"GithubIntegration"})}),(0,t.jsx)(n.td,{children:"A GitHub based integration."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.gitlabintegration",children:"GitLabIntegration"})}),(0,t.jsx)(n.td,{children:"A GitLab based integration."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.harnessintegration",children:"HarnessIntegration"})}),(0,t.jsx)(n.td,{children:"A Harness Code based integration."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.scmintegrations",children:"ScmIntegrations"})}),(0,t.jsx)(n.td,{children:"Exposes the set of supported integrations."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.singleinstancegithubcredentialsprovider",children:"SingleInstanceGithubCredentialsProvider"})}),(0,t.jsx)(n.td,{children:"Handles the creation and caching of credentials for GitHub integrations."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Function"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.buildgerritgitilesarchiveurl",children:"buildGerritGitilesArchiveUrl(config, project, branch, filePath)"})}),(0,t.jsx)(n.td,{children:"Build a Gerrit Gitiles archive url that targets a specific branch and path"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.defaultscmresolveurl",children:"defaultScmResolveUrl(options)"})}),(0,t.jsxs)(n.td,{children:["Default implementation of ",(0,t.jsx)(n.a,{href:"/docs/reference/integration.scmintegration",children:"ScmIntegration"})," ",(0,t.jsx)(n.code,{children:"resolveUrl"}),", that only works with URL pathname based providers."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getazurecommitsurl",children:"getAzureCommitsUrl(url)"})}),(0,t.jsx)(n.td,{children:"Given a URL, return the API URL to fetch commits on the branch."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getazuredownloadurl",children:"getAzureDownloadUrl(url)"})}),(0,t.jsx)(n.td,{children:"Given a URL pointing to a path on a provider, returns a URL that is suitable for downloading the subtree."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getazurefilefetchurl",children:"getAzureFileFetchUrl(url)"})}),(0,t.jsx)(n.td,{children:"Given a URL pointing to a file on a provider, returns a URL that is suitable for fetching the contents of the data."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getazurerequestoptions",children:"getAzureRequestOptions(config, additionalHeaders)"})}),(0,t.jsx)(n.td,{children:"Gets the request options necessary to make requests to a given provider."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getbitbucketclouddefaultbranch",children:"getBitbucketCloudDefaultBranch(url, config)"})}),(0,t.jsx)(n.td,{children:"Given a URL pointing to a path on a provider, returns the default branch."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getbitbucketclouddownloadurl",children:"getBitbucketCloudDownloadUrl(url, config)"})}),(0,t.jsx)(n.td,{children:"Given a URL pointing to a path on a provider, returns a URL that is suitable for downloading the subtree."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getbitbucketcloudfilefetchurl",children:"getBitbucketCloudFileFetchUrl(url, config)"})}),(0,t.jsx)(n.td,{children:"Given a URL pointing to a file on a provider, returns a URL that is suitable for fetching the contents of the data."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getbitbucketcloudrequestoptions",children:"getBitbucketCloudRequestOptions(config)"})}),(0,t.jsx)(n.td,{children:"Gets the request options necessary to make requests to a given provider."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getbitbucketdefaultbranch",children:"getBitbucketDefaultBranch(url, config)"})}),(0,t.jsx)(n.td,{children:"Given a URL pointing to a path on a provider, returns the default branch."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getbitbucketdownloadurl",children:"getBitbucketDownloadUrl(url, config)"})}),(0,t.jsx)(n.td,{children:"Given a URL pointing to a path on a provider, returns a URL that is suitable for downloading the subtree."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getbitbucketfilefetchurl",children:"getBitbucketFileFetchUrl(url, config)"})}),(0,t.jsx)(n.td,{children:"Given a URL pointing to a file on a provider, returns a URL that is suitable for fetching the contents of the data."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getbitbucketrequestoptions",children:"getBitbucketRequestOptions(config)"})}),(0,t.jsx)(n.td,{children:"Gets the request options necessary to make requests to a given provider."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getbitbucketserverdefaultbranch",children:"getBitbucketServerDefaultBranch(url, config)"})}),(0,t.jsx)(n.td,{children:"Given a URL pointing to a path on a provider, returns the default branch."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getbitbucketserverdownloadurl",children:"getBitbucketServerDownloadUrl(url, config)"})}),(0,t.jsx)(n.td,{children:"Given a URL pointing to a path on a provider, returns a URL that is suitable for downloading the subtree."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getbitbucketserverfilefetchurl",children:"getBitbucketServerFileFetchUrl(url, config)"})}),(0,t.jsx)(n.td,{children:"Given a URL pointing to a file on a provider, returns a URL that is suitable for fetching the contents of the data."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getbitbucketserverrequestoptions",children:"getBitbucketServerRequestOptions(config)"})}),(0,t.jsx)(n.td,{children:"Gets the request options necessary to make requests to a given provider."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getgerritbranchapiurl",children:"getGerritBranchApiUrl(config, url)"})}),(0,t.jsx)(n.td,{children:"Return the url to get branch info from the Gerrit API."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getgerritclonerepourl",children:"getGerritCloneRepoUrl(config, url)"})}),(0,t.jsx)(n.td,{children:"Return the url to clone the repo that is referenced by the url."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getgerritfilecontentsapiurl",children:"getGerritFileContentsApiUrl(config, url)"})}),(0,t.jsx)(n.td,{children:"Return the url to fetch the contents of a file using the Gerrit API."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getgerritprojectsapiurl",children:"getGerritProjectsApiUrl(config)"})}),(0,t.jsx)(n.td,{children:"Return the url to query available projects using the Gerrit API."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getgerritrequestoptions",children:"getGerritRequestOptions(config)"})}),(0,t.jsx)(n.td,{children:"Return request headers for a Gerrit provider."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getgiteaarchiveurl",children:"getGiteaArchiveUrl(config, url)"})}),(0,t.jsx)(n.td,{children:"Given a URL pointing to a repository/path, returns a URL for archive contents of the repository."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getgiteaeditcontentsurl",children:"getGiteaEditContentsUrl(config, url)"})}),(0,t.jsx)(n.td,{children:"Given a URL pointing to a file, returns a URL for editing the contents of the data."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getgiteafilecontentsurl",children:"getGiteaFileContentsUrl(config, url)"})}),(0,t.jsx)(n.td,{children:"Given a URL pointing to a file, returns an api URL for fetching the contents of the data."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getgitealatestcommiturl",children:"getGiteaLatestCommitUrl(config, url)"})}),(0,t.jsx)(n.td,{children:"Given a URL pointing to a repository branch, returns a URL for latest commit information."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getgitearequestoptions",children:"getGiteaRequestOptions(config)"})}),(0,t.jsx)(n.td,{children:"Return request headers for a Gitea provider."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getgithubfilefetchurl",children:"getGithubFileFetchUrl(url, config, credentials)"})}),(0,t.jsx)(n.td,{children:"Given a URL pointing to a file on a provider, returns a URL that is suitable for fetching the contents of the data."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getgithubrequestoptions",children:"getGitHubRequestOptions(config, credentials)"})}),(0,t.jsx)(n.td,{children:"Gets the request options necessary to make requests to a given provider."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getgitlabfilefetchurl",children:"getGitLabFileFetchUrl(url, config)"})}),(0,t.jsx)(n.td,{children:"Given a URL pointing to a file on a provider, returns a URL that is suitable for fetching the contents of the data."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getgitlabintegrationrelativepath",children:"getGitLabIntegrationRelativePath(config)"})}),(0,t.jsx)(n.td,{children:"Reads a GitLab integration config, and returns relative path."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getgitlabrequestoptions",children:"getGitLabRequestOptions(config, token)"})}),(0,t.jsx)(n.td,{children:"Gets the request options necessary to make requests to a given provider."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getharnessarchiveurl",children:"getHarnessArchiveUrl(config, url)"})}),(0,t.jsx)(n.td,{children:"Given a URL pointing to a repository/path, returns a URL for archive contents of the repository."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getharnessfilecontentsurl",children:"getHarnessFileContentsUrl(config, url)"})}),(0,t.jsx)(n.td,{children:"Given a file path URL, it returns an API URL which returns the contents of the file ."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getharnesslatestcommiturl",children:"getHarnessLatestCommitUrl(config, url)"})}),(0,t.jsx)(n.td,{children:"Given a URL pointing to a repository branch, returns a URL for latest commit information."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.getharnessrequestoptions",children:"getHarnessRequestOptions(config)"})}),(0,t.jsx)(n.td,{children:"Return request headers for a Harness Code provider."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.parsegerritgitilesurl",children:"parseGerritGitilesUrl(config, url)"})}),(0,t.jsx)(n.td,{children:"Parse a Gitiles URL and return branch, file path and project."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.parsegerritjsonresponse",children:"parseGerritJsonResponse(response)"})}),(0,t.jsx)(n.td,{children:"Parse the json response from Gerrit and strip the magic prefix."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.parsegiteaurl",children:"parseGiteaUrl(config, url)"})}),(0,t.jsx)(n.td,{children:"Return parsed git url properties."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.parseharnessurl",children:"parseHarnessUrl(config, url)"})}),(0,t.jsx)(n.td,{children:"Return parsed git url properties."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.readawscodecommitintegrationconfig",children:"readAwsCodeCommitIntegrationConfig(config)"})}),(0,t.jsx)(n.td,{children:"Reads a single Aws CodeCommit integration config."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.readawscodecommitintegrationconfigs",children:"readAwsCodeCommitIntegrationConfigs(configs)"})}),(0,t.jsx)(n.td,{children:"Reads a set of AWS CodeCommit integration configs, and inserts some defaults for public Amazon AWS if not specified."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.readawss3integrationconfig",children:"readAwsS3IntegrationConfig(config)"})}),(0,t.jsx)(n.td,{children:"Reads a single Aws S3 integration config."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.readawss3integrationconfigs",children:"readAwsS3IntegrationConfigs(configs)"})}),(0,t.jsx)(n.td,{children:"Reads a set of AWS S3 integration configs, and inserts some defaults for public Amazon AWS if not specified."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.readazureintegrationconfig",children:"readAzureIntegrationConfig(config)"})}),(0,t.jsx)(n.td,{children:"Reads a single Azure integration config."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.readazureintegrationconfigs",children:"readAzureIntegrationConfigs(configs)"})}),(0,t.jsx)(n.td,{children:"Reads a set of Azure integration configs, and inserts some defaults for public Azure if not specified."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.readbitbucketcloudintegrationconfig",children:"readBitbucketCloudIntegrationConfig(config)"})}),(0,t.jsx)(n.td,{children:"Reads a single Bitbucket Cloud integration config."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.readbitbucketcloudintegrationconfigs",children:"readBitbucketCloudIntegrationConfigs(configs)"})}),(0,t.jsx)(n.td,{children:"Reads a set of Bitbucket Cloud integration configs, and inserts one for public Bitbucket Cloud if none specified."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.readbitbucketintegrationconfig",children:"readBitbucketIntegrationConfig(config)"})}),(0,t.jsx)(n.td,{children:"Reads a single Bitbucket integration config."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.readbitbucketintegrationconfigs",children:"readBitbucketIntegrationConfigs(configs)"})}),(0,t.jsx)(n.td,{children:"Reads a set of Bitbucket integration configs, and inserts some defaults for public Bitbucket if not specified."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.readbitbucketserverintegrationconfig",children:"readBitbucketServerIntegrationConfig(config)"})}),(0,t.jsx)(n.td,{children:"Reads a single Bitbucket Server integration config."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.readbitbucketserverintegrationconfigs",children:"readBitbucketServerIntegrationConfigs(configs)"})}),(0,t.jsx)(n.td,{children:"Reads a set of Bitbucket Server integration configs."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.readgerritintegrationconfig",children:"readGerritIntegrationConfig(config)"})}),(0,t.jsx)(n.td,{children:"Reads a single Gerrit integration config."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.readgerritintegrationconfigs",children:"readGerritIntegrationConfigs(configs)"})}),(0,t.jsx)(n.td,{children:"Reads a set of Gerrit integration configs."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.readgiteaconfig",children:"readGiteaConfig(config)"})}),(0,t.jsx)(n.td,{children:"Parses a location config block for use in GiteaIntegration"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.readgithubintegrationconfig",children:"readGithubIntegrationConfig(config)"})}),(0,t.jsx)(n.td,{children:"Reads a single GitHub integration config."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.readgithubintegrationconfigs",children:"readGithubIntegrationConfigs(configs)"})}),(0,t.jsx)(n.td,{children:"Reads a set of GitHub integration configs, and inserts some defaults for public GitHub if not specified."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.readgitlabintegrationconfig",children:"readGitLabIntegrationConfig(config)"})}),(0,t.jsx)(n.td,{children:"Reads a single GitLab integration config."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.readgitlabintegrationconfigs",children:"readGitLabIntegrationConfigs(configs)"})}),(0,t.jsx)(n.td,{children:"Reads a set of GitLab integration configs, and inserts some defaults for public GitLab if not specified."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.readgooglegcsintegrationconfig",children:"readGoogleGcsIntegrationConfig(config)"})}),(0,t.jsx)(n.td,{children:"Reads a single Google GCS integration config."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.readharnessconfig",children:"readHarnessConfig(config)"})}),(0,t.jsx)(n.td,{children:"Parses a location config block for use in HarnessIntegration"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.replacegithuburltype",children:"replaceGithubUrlType(url, type)"})}),(0,t.jsx)(n.td,{children:"Takes a GitHub URL and replaces the type part (blob, tree etc)."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.replacegitlaburltype",children:"replaceGitLabUrlType(url, type)"})}),(0,t.jsx)(n.td,{children:"Takes a GitLab URL and replaces the type part (blob, tree etc)."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"interfaces",children:"Interfaces"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Interface"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.azuredevopscredentialsprovider",children:"AzureDevOpsCredentialsProvider"})}),(0,t.jsx)(n.td,{children:"This allows implementations to be provided to retrieve Azure DevOps credentials."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.githubcredentialsprovider",children:"GithubCredentialsProvider"})}),(0,t.jsx)(n.td,{children:"This allows implementations to be provided to retrieve GitHub credentials."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.gitlabcredentialsprovider",children:"GitlabCredentialsProvider"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.integrationsbytype",children:"IntegrationsByType"})}),(0,t.jsx)(n.td,{children:"The set of supported integrations."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.ratelimitinfo",children:"RateLimitInfo"})}),(0,t.jsx)(n.td,{children:"Encapsulates information about the RateLimit state"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.scmintegration",children:"ScmIntegration"})}),(0,t.jsx)(n.td,{children:"Encapsulates a single SCM integration."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.scmintegrationregistry",children:"ScmIntegrationRegistry"})}),(0,t.jsx)(n.td,{children:"Holds all registered SCM integrations, of all types."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.scmintegrationsgroup",children:"ScmIntegrationsGroup"})}),(0,t.jsx)(n.td,{children:"Encapsulates several integrations, that are all of the same type."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"type-aliases",children:"Type Aliases"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Type Alias"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.awscodecommitintegrationconfig",children:"AwsCodeCommitIntegrationConfig"})}),(0,t.jsx)(n.td,{children:"The configuration parameters for a single AWS CodeCommit provider."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.awss3integrationconfig",children:"AwsS3IntegrationConfig"})}),(0,t.jsx)(n.td,{children:"The configuration parameters for a single AWS S3 provider."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.azureclientsecretcredential",children:"AzureClientSecretCredential"})}),(0,t.jsx)(n.td,{children:"A client secret credential that was generated for an App Registration."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.azurecredentialbase",children:"AzureCredentialBase"})}),(0,t.jsx)(n.td,{children:"Common fields for the Azure DevOps credentials."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.azuredevopscredential",children:"AzureDevOpsCredential"})}),(0,t.jsx)(n.td,{children:"Credential used to authenticate to Azure DevOps."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.azuredevopscredentialkind",children:"AzureDevOpsCredentialKind"})}),(0,t.jsx)(n.td,{children:"The kind of Azure DevOps credential."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.azuredevopscredentiallike",children:"AzureDevOpsCredentialLike"})}),(0,t.jsx)(n.td,{children:"The general shape of a credential that can be used to authenticate to Azure DevOps."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.azuredevopscredentials",children:"AzureDevOpsCredentials"})}),(0,t.jsx)(n.td,{children:"A set of credentials for Azure DevOps."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.azuredevopscredentialtype",children:"AzureDevOpsCredentialType"})}),(0,t.jsx)(n.td,{children:"The type of Azure DevOps credential, either bearer or pat."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.azureintegrationconfig",children:"AzureIntegrationConfig"})}),(0,t.jsx)(n.td,{children:"The configuration parameters for a single Azure provider."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.azuremanagedidentitycredential",children:"AzureManagedIdentityCredential"})}),(0,t.jsx)(n.td,{children:"A managed identity credential."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.bitbucketcloudintegrationconfig",children:"BitbucketCloudIntegrationConfig"})}),(0,t.jsx)(n.td,{children:"The configuration parameters for a single Bitbucket Cloud API provider."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.bitbucketintegrationconfig",children:"BitbucketIntegrationConfig"})}),(0,t.jsx)(n.td,{children:"The configuration parameters for a single Bitbucket API provider."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.bitbucketserverintegrationconfig",children:"BitbucketServerIntegrationConfig"})}),(0,t.jsx)(n.td,{children:"The configuration parameters for a single Bitbucket Server API provider."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.gerritintegrationconfig",children:"GerritIntegrationConfig"})}),(0,t.jsx)(n.td,{children:"The configuration parameters for a single Gerrit API provider."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.giteaintegrationconfig",children:"GiteaIntegrationConfig"})}),(0,t.jsx)(n.td,{children:"The configuration for a single Gitea integration."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.githubappconfig",children:"GithubAppConfig"})}),(0,t.jsx)(n.td,{children:"The configuration parameters for authenticating a GitHub Application."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.githubcredentials",children:"GithubCredentials"})}),(0,t.jsx)(n.td,{children:"A set of credentials information for a GitHub integration."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.githubcredentialtype",children:"GithubCredentialType"})}),(0,t.jsx)(n.td,{children:"The type of credentials produced by the credential provider."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.githubintegrationconfig",children:"GithubIntegrationConfig"})}),(0,t.jsx)(n.td,{children:"The configuration parameters for a single GitHub integration."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.gitlabcredentials",children:"GitlabCredentials"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.gitlabintegrationconfig",children:"GitLabIntegrationConfig"})}),(0,t.jsx)(n.td,{children:"The configuration parameters for a single GitLab integration."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.googlegcsintegrationconfig",children:"GoogleGcsIntegrationConfig"})}),(0,t.jsx)(n.td,{children:"The configuration parameters for a single Google Cloud Storage provider."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.harnessintegrationconfig",children:"HarnessIntegrationConfig"})}),(0,t.jsx)(n.td,{children:"The configuration for a single Harness integration."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.personalaccesstokencredential",children:"PersonalAccessTokenCredential"})}),(0,t.jsx)(n.td,{children:"A personal access token credential."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/integration.scmintegrationsfactory",children:"ScmIntegrationsFactory"})}),(0,t.jsx)(n.td,{children:"A factory function that creates an integration group based on configuration."})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},675251:(e,n,r)=>{var t=r(667294),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,r){var t,s={},o=null,l=null;for(t in void 0!==r&&(o=""+r),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(l=n.ref),n)d.call(n,t)&&!a.hasOwnProperty(t)&&(s[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===s[t]&&(s[t]=n[t]);return{$$typeof:i,type:e,key:o,ref:l,props:s,_owner:c.current}}n.Fragment=s,n.jsx=o,n.jsxs=o},785893:(e,n,r)=>{e.exports=r(675251)},511151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>d});var t=r(667294);const i={},s=t.createContext(i);function d(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);