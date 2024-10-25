import{R as r}from"./index-CTjT7uj6.js";import{HeaderWorldClock as s}from"./index-D3__aLi5.js";import{H as d}from"./Header-C_XjFNEl.js";import{w as u}from"./appWrappers-14oiKdeA.js";import"./HeaderLabel-B6Qg7PKO.js";import"./makeStyles-KqnVMpUC.js";import"./defaultTheme-GyRRohif.js";import"./Grid-BsoumTJs.js";import"./hoist-non-react-statics.cjs-yZcCaz5O.js";import"./capitalize-DNuq4SMo.js";import"./withStyles-hRWsWcSf.js";import"./Typography-CmHU44MI.js";import"./Link-B4vaimuT.js";import"./index-Cqve-NHl.js";import"./lodash-CoGan1YB.js";import"./index-BbmHap-z.js";import"./index-CvMVCH8h.js";import"./ApiRef-BSBwTmJJ.js";import"./interopRequireDefault-BbjLfwJi.js";import"./createSvgIcon-Ex-HcjLW.js";import"./useControlled-BQlqYFiW.js";import"./createSvgIcon-DTKcO19x.js";import"./isMuiElement-Cb6QZSLO.js";import"./unstable_useId-B3Hiq1YI.js";import"./useAnalytics-DTrkS1Gy.js";import"./ConfigApi-DBUUc3nU.js";import"./Helmet-DPVyO7__.js";import"./index-BRV0Se7Z.js";import"./Box-D4ToL4qj.js";import"./typography-ExXZm6u6.js";import"./Breadcrumbs-DrwtEIuE.js";import"./react-is.production.min-D0tnNtx9.js";import"./ButtonBase-COfPTClW.js";import"./TransitionGroupContext-BtzQ-Cv7.js";import"./Popover-DZHz-KmS.js";import"./Modal-CSHh4_fv.js";import"./classCallCheck-BNzALLS0.js";import"./Portal-CTbkfrAU.js";import"./Paper-B582OAtR.js";import"./Grow-BxfQC5ra.js";import"./useTheme-CMxegO7z.js";import"./utils-BftzqEfj.js";import"./List-D2TmsOdo.js";import"./ListContext-DydK1sOh.js";import"./ListItem-B6HiWQmh.js";import"./Page-DW1H3Rrk.js";import"./useMediaQuery-dH3qJauD.js";import"./Tooltip-CuQUXYrD.js";import"./Popper-tLUGtVc3.js";import"./MockTranslationApi-CNdm0swk.js";import"./index-CFaqwFgm.js";import"./inherits-C8kCcQiP.js";import"./toArray-CXCpiclr.js";import"./TranslationApi-eOxINumg.js";import"./WebStorage-D5Fgivzj.js";import"./useAsync-CXA3qup_.js";import"./useMountedState-DkESzBh4.js";import"./componentData-CM4hSmEF.js";import"./mapValues-r4uG88u0.js";import"./toString-C6iK1gA3.js";import"./ApiProvider-CuNQiN7Z.js";import"./CssBaseline-CMoB6S-Y.js";import"./ThemeProvider-DuLntjq3.js";import"./jsx-runtime-Cw0GR0a5.js";import"./palettes-B20oCNII.js";const _o={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>u(r.createElement(o,null))]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return r.createElement(d,{title:"Header World Clock",pageTitleOverride:"Home"},r.createElement(s,{clockConfigs:o,customTimeFormat:i}))},t=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return r.createElement(d,{title:"24hr Header World Clock",pageTitleOverride:"Home"},r.createElement(s,{clockConfigs:o,customTimeFormat:i}))};e.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};var m,a,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
