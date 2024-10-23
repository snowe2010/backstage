import{R as r}from"./index-CTjT7uj6.js";import{HeaderWorldClock as s}from"./index-BxJq1lOj.js";import{H as d}from"./Header-_moJnMdN.js";import{w as u}from"./appWrappers-KUpkLAp6.js";import"./HeaderLabel-CoS_qk4f.js";import"./makeStyles-DFHNDtjR.js";import"./defaultTheme-CzJIUhLY.js";import"./Grid-BsFNIMVV.js";import"./hoist-non-react-statics.cjs-yZcCaz5O.js";import"./capitalize-CDPu30qc.js";import"./withStyles-Cy0w16fh.js";import"./Typography-DtBgvzFq.js";import"./Link-GvJop_Qi.js";import"./index-Cqve-NHl.js";import"./lodash-CoGan1YB.js";import"./index-BbmHap-z.js";import"./index-CvMVCH8h.js";import"./ApiRef-BSBwTmJJ.js";import"./interopRequireDefault-BbjLfwJi.js";import"./createSvgIcon-BxRwmj-P.js";import"./useControlled-BQlqYFiW.js";import"./createSvgIcon-ErQpyllY.js";import"./isMuiElement-Cb6QZSLO.js";import"./unstable_useId-B3Hiq1YI.js";import"./useAnalytics-DTrkS1Gy.js";import"./ConfigApi-DBUUc3nU.js";import"./Helmet-DPVyO7__.js";import"./index-BRV0Se7Z.js";import"./Box-4hiNbBw1.js";import"./typography-DzPlb7_1.js";import"./Breadcrumbs-DJ5seHKi.js";import"./react-is.production.min-D0tnNtx9.js";import"./ButtonBase-DtWcvltL.js";import"./TransitionGroupContext-BtzQ-Cv7.js";import"./Popover-CcV6eZ35.js";import"./Modal-DOVkv6yD.js";import"./classCallCheck-BNzALLS0.js";import"./Portal-CTbkfrAU.js";import"./Paper-BK9DXOUE.js";import"./Grow-CYgnIZj0.js";import"./useTheme-C1RDaILZ.js";import"./utils-Vc_NgNiQ.js";import"./List-DYtqLDXv.js";import"./ListContext-DydK1sOh.js";import"./ListItem-BX8d_s0j.js";import"./Page-w3IkmeGv.js";import"./useMediaQuery-JlhfXw1s.js";import"./Tooltip-CVVhu75l.js";import"./Popper-CCoBcT50.js";import"./MockTranslationApi-Bm0rhTQl.js";import"./index-CFaqwFgm.js";import"./inherits-Ax9O35oZ.js";import"./toArray-BIgjzDMT.js";import"./TranslationApi-eOxINumg.js";import"./WebStorage-D5Fgivzj.js";import"./useAsync-CXA3qup_.js";import"./useMountedState-DkESzBh4.js";import"./componentData-CM4hSmEF.js";import"./mapValues-uGpuQnk_.js";import"./toString-bNjqhuyi.js";import"./ApiProvider-CuNQiN7Z.js";import"./CssBaseline-DDRFgeWI.js";import"./ThemeProvider-CVGcooNy.js";import"./jsx-runtime-Cw0GR0a5.js";import"./palettes-B20oCNII.js";const _o={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>u(r.createElement(o,null))]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return r.createElement(d,{title:"Header World Clock",pageTitleOverride:"Home"},r.createElement(s,{clockConfigs:o,customTimeFormat:i}))},t=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return r.createElement(d,{title:"24hr Header World Clock",pageTitleOverride:"Home"},r.createElement(s,{clockConfigs:o,customTimeFormat:i}))};e.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};var m,a,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const clockConfigs: ClockConfig[] = [{
    label: 'NYC',
    timeZone: 'America/New_York'
  }, {
    label: 'UTC',
    timeZone: 'UTC'
  }, {
    label: 'STO',
    timeZone: 'Europe/Stockholm'
  }, {
    label: 'TYO',
    timeZone: 'Asia/Tokyo'
  }];
  const timeFormat: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  };
  return <Header title="Header World Clock" pageTitleOverride="Home">
      <HeaderWorldClock clockConfigs={clockConfigs} customTimeFormat={timeFormat} />
    </Header>;
}`,...(l=(a=e.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var p,c,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const clockConfigs: ClockConfig[] = [{
    label: 'NYC',
    timeZone: 'America/New_York'
  }, {
    label: 'UTC',
    timeZone: 'UTC'
  }, {
    label: 'STO',
    timeZone: 'Europe/Stockholm'
  }, {
    label: 'TYO',
    timeZone: 'Asia/Tokyo'
  }];
  const timeFormat: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  };
  return <Header title="24hr Header World Clock" pageTitleOverride="Home">
      <HeaderWorldClock clockConfigs={clockConfigs} customTimeFormat={timeFormat} />
    </Header>;
}`,...(n=(c=t.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};const Eo=["Default","TwentyFourHourClocks"];export{e as Default,t as TwentyFourHourClocks,Eo as __namedExportsOrder,_o as default};
