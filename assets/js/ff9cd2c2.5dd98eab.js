/*! For license information please see ff9cd2c2.5dd98eab.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[744842],{851390:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var t=n(785893),i=n(511151);const a={},r=void 0,l={id:"publishing",title:"publishing",description:"npm",source:"@site/versioned_docs/version-stable/publishing.md",sourceDirName:".",slug:"/publishing",permalink:"/docs/publishing",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/publishing.md",tags:[],version:"stable",frontMatter:{}},c={},o=[{value:"npm",id:"npm",level:2},{value:"Creating a new release",id:"creating-a-new-release",level:3},{value:"Next Line Release Process",id:"next-line-release-process",level:2},{value:"Main Line Release Process",id:"main-line-release-process",level:2},{value:"Switching Release Modes",id:"switching-release-modes",level:2},{value:"Emergency Release Process",id:"emergency-release-process",level:2},{value:"Old Process",id:"old-process",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"When the release workflow is not triggered for some reason, such as a GitHub incident",id:"when-the-release-workflow-is-not-triggered-for-some-reason-such-as-a-github-incident",level:3},{value:"The release successfully published packages but failed when finalizing the release",id:"the-release-successfully-published-packages-but-failed-when-finalizing-the-release",level:3}];function h(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",input:"input",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"npm",children:"npm"}),"\n",(0,t.jsxs)(s.p,{children:["npm packages are published through CI/CD in the\n",(0,t.jsx)(s.a,{href:"https://github.com/backstage/backstage/blob/master/.github/workflows/deploy_packages.yml",children:(0,t.jsx)(s.code,{children:".github/workflows/deploy_packages.yml"})}),"\nworkflow. Every commit that is merged to master will be checked for new versions\nof all public packages, and any new versions will automatically be published to\nnpm."]}),"\n",(0,t.jsx)(s.h3,{id:"creating-a-new-release",children:"Creating a new release"}),"\n",(0,t.jsx)(s.p,{children:'Releases are handled by changesets and trigger whenever the "Version Packages"\nPR is merged. This is typically done every Tuesday around noon CET.'}),"\n",(0,t.jsx)(s.h2,{id:"next-line-release-process",children:"Next Line Release Process"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"PR Checks: Notify the teams & ensure there are no outstanding PRs pending to be merged for this version. This should be done in time to ensure a smooth release day. If there are any, reach out to maintainers and relevant owners of the affected code reminding them of the deadline for the release."}),"\n",(0,t.jsxs)(s.li,{children:["Lock main branch\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Lock the main branch to prevent any new merges by other maintainers. Do not unlock the main branch until the release was published successfully"}),"\n",(0,t.jsx)(s.li,{children:"Core maintainers can still merge last PRs using their admin override including the Version Packages PR"}),"\n",(0,t.jsx)(s.li,{children:"Note: Admin rights are required to lock the branch. If you lack the necessary permissions, contact a core maintainer to perform this action on your behalf."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Check ",(0,t.jsxs)(s.a,{href:"https://github.com/backstage/backstage/pulls?q=is%3Aopen+is%3Apr+in%3Atitle+%22Version+Packages+%28next%29%22",children:[(0,t.jsx)(s.code,{children:"Version Packages (next)"})," Pull Request"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:'Verify the version we are shipping is correct, by looking at the version packages PR title. It should be "Version Packages (next)"'}),"\n",(0,t.jsxs)(s.li,{children:["Check ",(0,t.jsx)(s.code,{children:"pre.json"})," in ",(0,t.jsxs)(s.a,{href:"https://github.com/backstage/backstage/blob/master/.changeset",children:["the ",(0,t.jsx)(s.code,{children:".changeset"})," folder"]})," - it should have ",(0,t.jsx)(s.code,{children:'"mode": "pre"'})," near the top. If you encounter ",(0,t.jsx)(s.code,{children:'"mode": "exit"'})," or if the file doesn't exist, it indicates a mainline release."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Verify that there are no active/unfinished ",(0,t.jsx)(s.code,{children:"sync_version-packages"})," actions running (",(0,t.jsx)(s.a,{href:"https://github.com/backstage/backstage/actions/workflows/sync_version-packages.yml",children:"https://github.com/backstage/backstage/actions/workflows/sync_version-packages.yml"}),")\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Locking the main branch will prevent new ones to be created, but be sure to check for running actions again after unlocking, since it may cause pending auto-merge PRs to be merged."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Check ",(0,t.jsxs)(s.a,{href:"https://github.com/backstage/backstage/pulls?q=is%3Aopen+is%3Apr+in%3Atitle+%22Version+Packages+%28next%29%22",children:[(0,t.jsx)(s.code,{children:"Version Packages (next)"})," Pull Request"]})," for sufficient approval to be merged\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Check generated ",(0,t.jsx)(s.code,{children:"changelog"})," in the changed files of the pull request under ",(0,t.jsx)(s.code,{children:"docs/releases"})," to see if there are any unexpected major bumps e.g. by searching the file"]}),"\n",(0,t.jsx)(s.li,{children:"Review & approve changes"}),"\n",(0,t.jsx)(s.li,{children:"Reach out to core maintainer to merge the pull request"}),"\n",(0,t.jsxs)(s.li,{children:["Heads-up: The microsite building step can be skipped as long as the ",(0,t.jsx)(s.code,{children:"prettier"})," task passes & everything else looks green"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Merging the ",(0,t.jsx)(s.code,{children:"Version Packages (next)"})," Pull Request will trigger the deployment workflows. Follow along the ",(0,t.jsx)(s.a,{href:"https://github.com/backstage/backstage/actions/workflows/deploy_packages.yml",children:"deployment workflow"}),". If you notice flakiness (e.g. if the build is flaky or if the release step runs into an error with releasing to npm) just restart the workflow."]}),"\n",(0,t.jsxs)(s.p,{children:["Congratulations on the release! There should be now a post in the ",(0,t.jsxs)(s.a,{href:"https://discord.com/channels/687207715902193673/705123584468582400",children:[(0,t.jsx)(s.code,{children:"#announcements"})," channel"]})," in Discord linking to the release tag - check if links & tag look as expected. Once the notification has gone out on Discord you can unlock the main branch & the release is complete."]}),"\n",(0,t.jsx)(s.h2,{id:"main-line-release-process",children:"Main Line Release Process"}),"\n",(0,t.jsx)(s.p,{children:"Additional steps for the main line release"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"#switching-release-modes",children:"Switch Release Mode"})," to exit pre-release mode. This can be done at any time after the last Next Line Release.\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Check ",(0,t.jsx)(s.code,{children:".changeset/pre.json"}),"  if the ",(0,t.jsx)(s.code,{children:"mode"})," is set to ",(0,t.jsx)(s.code,{children:"exit"}),". If you encounter ",(0,t.jsx)(s.code,{children:'mode: "pre"'})," it indicates a next line release."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Check ",(0,t.jsxs)(s.a,{href:"https://github.com/backstage/backstage/pulls?q=is%3Aopen+is%3Apr+in%3Atitle+%22Version+Packages",children:[(0,t.jsx)(s.code,{children:"Version Packages"})," Pull Request"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:'Check for mentions of "major" & "breaking" and if they are expected in the current release'}),"\n",(0,t.jsx)(s.li,{children:"Verify the version we are shipping is correct"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Create Release Notes\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["There exists a ",(0,t.jsx)(s.a,{href:"/docs/v1.1.0",children:"release notes template"})," for creating the release notes. It can already be created after the last main line release to keep track of major changes during the month"]}),"\n",(0,t.jsx)(s.li,{children:"The content is picked by relevancy showcasing the work of the community during the month of the release"}),"\n",(0,t.jsx)(s.li,{children:"Mention newly added packages or features"}),"\n",(0,t.jsx)(s.li,{children:"Mention any security fixes"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Create Release Notes PR\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Add the release note file as ",(0,t.jsx)(s.a,{href:"./releases",children:(0,t.jsx)(s.code,{children:"/docs/releases/vx.y.0.md"})})]}),"\n",(0,t.jsxs)(s.li,{children:["Add an entry to ",(0,t.jsx)(s.a,{href:"https://github.com/backstage/backstage/blob/master/microsite/sidebars.json",children:(0,t.jsx)(s.code,{children:"/microsite/sidebar.json"})})," for the release note"]}),"\n",(0,t.jsxs)(s.li,{children:["Update the navigation bar item in ",(0,t.jsx)(s.a,{href:"https://github.com/backstage/backstage/blob/master/microsite/docusaurus.config.ts",children:(0,t.jsx)(s.code,{children:"/microsite/docusaurus.config.ts"})})," to point to the new release note"]}),"\n",(0,t.jsxs)(s.li,{children:["Finally copy the content, without the metadata header, into the description of the ",(0,t.jsxs)(s.a,{href:"https://github.com/backstage/backstage/pulls?q=is%3Aopen+is%3Apr+in%3Atitle+%22Version+Packages",children:[(0,t.jsx)(s.code,{children:"Version Packages"})," Pull Request"]})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Once the release has been published edit the newly created release in the ",(0,t.jsx)(s.a,{href:"https://github.com/backstage/backstage/releases",children:"GitHub repository"})," and replace the text content with the release notes."]}),"\n",(0,t.jsx)(s.h2,{id:"switching-release-modes",children:"Switching Release Modes"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["To enter pre-release mode: ",(0,t.jsx)(s.code,{children:"yarn changeset pre enter next"})," & create PR + merge changes"]}),"\n",(0,t.jsxs)(s.li,{children:["To exit pre-release mode: ",(0,t.jsx)(s.code,{children:"yarn changeset pre exit"})," & create PR + merge changes\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Has to be done before the mainline release"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.li,{children:"It's not time critical; Affects the next release happening"}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"emergency-release-process",children:"Emergency Release Process"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"This emergency release process is intended only for the Backstage\nmaintainers."})}),"\n",(0,t.jsx)(s.p,{children:"Given one or more PRs towards master that we want to create a patch release for, run the following script from the repo root:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"./scripts/patch-release-for-pr.js <pr-number> <pr-number-2> ...\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Wait until the script has finished executing, at the end of the output you will find a link of the format ",(0,t.jsx)(s.code,{children:"https://github.com/backstage/backstage/pull/new/patch-release-pr-..."}),'. Open this link in your browser to create a PR for the patch release. Finish the sentence "This release fixes an issue where..." and create the PR.']}),"\n",(0,t.jsxs)(s.p,{children:["Once the PR has been approved and merged, the patch release will be automatically created. The patch release is complete when a notification has been posted to Discord in the ",(0,t.jsx)(s.code,{children:"#announcements"}),' channel. Keep an eye on "Deploy Packages" workflow and re-trigger if it fails. It is safe to re-trigger any part of this workflow, including the release step.']}),"\n",(0,t.jsx)(s.p,{children:"If the above process fails, you can fall back to the manual process documented below."}),"\n",(0,t.jsx)(s.h3,{id:"old-process",children:"Old Process"}),"\n",(0,t.jsx)(s.p,{children:"This is the old and manual process that we used before the patch script, provided here as a reference:"}),"\n",(0,t.jsxs)(s.p,{children:["For this example we will be using the ",(0,t.jsx)(s.code,{children:"@backstage/plugin-foo"})," package as an\nexample and assume that it is currently version ",(0,t.jsx)(s.code,{children:"6.5.0"})," in the master branch."]}),"\n",(0,t.jsxs)(s.p,{children:["In the event of a severe bug being introduced in version ",(0,t.jsx)(s.code,{children:"6.5.0"})," of the\n",(0,t.jsx)(s.code,{children:"@backstage/plugin-foo"})," released in the ",(0,t.jsx)(s.code,{children:"v1.18.0"})," Backstage release, the following\nprocess is used to release an emergency fix as version ",(0,t.jsx)(s.code,{children:"6.5.1"})," in the patch release ",(0,t.jsx)(s.code,{children:"v1.18.1"}),":"]}),"\n",(0,t.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," Identify the release or releases that need to be patched. We should always\npatch the most recent major or minor main-line release if needed, which in this example\nwould be ",(0,t.jsx)(s.code,{children:"v1.18.0"}),". The fix may also need backporting to older major\nversions, in which case we will want to patch the main-line release just\nbefore the one that bumped the package to each new major version."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," Repeat the following steps for each release that needs to be patched:"]}),"\n",(0,t.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," Make sure a patch branch exists for the release that is being patched.\nIf a patch already exists, reuse the existing branch. The branch ",(0,t.jsx)(s.strong,{children:"must\nalways"})," be named exactly ",(0,t.jsx)(s.code,{children:"patch/<release>"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"git checkout v1.18.0\ngit checkout -b patch/v1.18.0\ngit push --set-upstream origin patch/v1.18.0\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," With the ",(0,t.jsx)(s.code,{children:"patch/v1.18.0"})," branch as a base, create a new\nbranch for your fix. This branch can be named anything, but the\nfollowing naming pattern may be suitable:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"git checkout -b ${USER}/plugin-foo-v1.18.0-fix\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," Create a single commit that applies fix, nothing else."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," Create a changeset for the affected package(s), then run ",(0,t.jsx)(s.code,{children:"yarn release"})," in the root\nof the repo in order to convert your changeset into package version bumps and changelog entries.\nCommit these changes as a second ",(0,t.jsx)(s.code,{children:'"Generated release"'})," commit."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," Create PR towards the base branch (",(0,t.jsx)(s.code,{children:"patch/v1.18.0"}),") containing the two commits."]}),"\n",(0,t.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0}),' Add a PR body, it will be used as the release description. Typically something like "This release fixes ...".']}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," Review/Merge the PR into ",(0,t.jsx)(s.code,{children:"patch/v1.18.0"}),". This will automatically trigger a release."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," Look up the new version of our package in the patch PR as well as the new release\nversion, these can be found in the package ",(0,t.jsx)(s.code,{children:"package.json"})," and the root ",(0,t.jsx)(s.code,{children:"package.json"}),", and\nwill in this case be ",(0,t.jsx)(s.code,{children:"6.5.1"})," and ",(0,t.jsx)(s.code,{children:"v1.18.1"}),". You will need these versions later."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," Make sure you have the latest versions of the patch branch fetched, after merging the PR: ",(0,t.jsx)(s.code,{children:"git fetch"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," Once fixes have been created for each release, the fix should be applied to the\nmaster branch as well. Create a PR that contains the following:"]}),"\n",(0,t.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," The fix, which you can likely cherry-pick from your patch branch: ",(0,t.jsx)(s.code,{children:"git cherry-pick origin/patch/v1.18.0^"})]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," An updated ",(0,t.jsx)(s.code,{children:"CHANGELOG.md"})," of all patched packages from the tip of the patch branch, ",(0,t.jsx)(s.code,{children:"git checkout origin/patch/v1.18.0 -- {packages,plugins}/*/CHANGELOG.md"}),". Note that if the patch happens after any next-line releases you'll need to restore those entries in the changelog, placing the patch release entry beneath any next-line release entries."]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0}),' A changeset with the message "Applied the fix from version ',(0,t.jsx)(s.code,{children:"6.5.1"})," of this package, which is part of the ",(0,t.jsx)(s.code,{children:"v1.18.1"}),' release of Backstage."']}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,t.jsx)(s.h3,{id:"when-the-release-workflow-is-not-triggered-for-some-reason-such-as-a-github-incident",children:"When the release workflow is not triggered for some reason, such as a GitHub incident"}),"\n",(0,t.jsxs)(s.p,{children:["Ask one of the maintainers to trigger ",(0,t.jsx)(s.a,{href:"https://github.com/backstage/backstage/actions/workflows/deploy_packages.yml",children:"the Deploy packages"}),' workflow with the "Unconditionally trigger the release job to run" checkbox set, on the ',(0,t.jsx)(s.code,{children:"master"})," branch. Please validate first that nothing substantial has been pushed to master since the original failed release attempt! For this reason, it is wise to have the master branch locked until each release has gone through."]}),"\n",(0,t.jsx)(s.h3,{id:"the-release-successfully-published-packages-but-failed-when-finalizing-the-release",children:"The release successfully published packages but failed when finalizing the release"}),"\n",(0,t.jsx)(s.p,{children:"If it's an intermittent failure then it is safe to re-trigger the release workflow again."}),"\n",(0,t.jsx)(s.p,{children:"If re-triggering doesn't or won't help, the following steps can be taken to complete the release:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Manually create a git tag for the release if it doesn't already exist"}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Manually create a ",(0,t.jsx)(s.a,{href:"https://github.com/backstage/backstage/releases/new",children:"new GitHub release"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Trigger the repository dispatch workflow using the following request, replace ",(0,t.jsx)(s.code,{children:"<VERSION>"})," with the release version ",(0,t.jsx)(s.strong,{children:"without"})," the ",(0,t.jsx)(s.code,{children:"v"})," prefix:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:'curl -L \\\n  -X POST \\\n  -H "Accept: application/vnd.github+json" \\\n  -H "Authorization: Bearer $(gh auth token)" \\\n  -H "X-GitHub-Api-Version: 2022-11-28" \\\n  https://api.github.com/repos/backstage/backstage/dispatches \\\n  -d \'{"event_type":"release-published","client_payload":{"version":"<VERSION>"}}\'\n'})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Manually post a message on Discord in the #announcements channel"}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},675251:(e,s,n)=>{var t=n(667294),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,s,n){var t,a={},o=null,h=null;for(t in void 0!==n&&(o=""+n),void 0!==s.key&&(o=""+s.key),void 0!==s.ref&&(h=s.ref),s)r.call(s,t)&&!c.hasOwnProperty(t)&&(a[t]=s[t]);if(e&&e.defaultProps)for(t in s=e.defaultProps)void 0===a[t]&&(a[t]=s[t]);return{$$typeof:i,type:e,key:o,ref:h,props:a,_owner:l.current}}s.Fragment=a,s.jsx=o,s.jsxs=o},785893:(e,s,n)=>{e.exports=n(675251)},511151:(e,s,n)=>{n.d(s,{Z:()=>l,a:()=>r});var t=n(667294);const i={},a=t.createContext(i);function r(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);