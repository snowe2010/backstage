import{r as p,R as e}from"./index-CTjT7uj6.js";import{d as V}from"./ExpandMore-PrXkC_Ga.js";import{i as L}from"./interopRequireDefault-BbjLfwJi.js";import{r as R,i as D}from"./createSvgIcon-BxRwmj-P.js";import{u as P}from"./useAsync-CXA3qup_.js";import{m as v}from"./makeStyles-DFHNDtjR.js";import{u as h}from"./SearchContext-BQYqBmky.js";import{s as j}from"./api-CKDuuaL7.js";import{C as z,a as J}from"./CardContent-DkZms0rz.js";import{C as M}from"./CardHeader-zP9t5-2f.js";import{A as W,a as X,b as H}from"./AccordionDetails-B1XIbjxN.js";import{L as $}from"./List-DYtqLDXv.js";import{D as O}from"./Divider-YusUzn_w.js";import{L as F}from"./ListItem-BX8d_s0j.js";import{L as U}from"./ListItemIcon-B2thsom9.js";import{L as A}from"./ListItemText-DDba65AT.js";import{u as B}from"./ApiRef-BSBwTmJJ.js";import{T as G,a as K}from"./Tabs-CxUO7Kvs.js";import{a as Q}from"./FormLabel-D8pcgbzB.js";import{I as Y}from"./InputLabel-bCDtCbdp.js";import{S as Z}from"./Select-DCm_oyn8.js";import{C as ee}from"./Chip-BVhyNaEx.js";import{M as ae}from"./MenuItem-B4wltlCe.js";import{C as re}from"./Checkbox-DPpjLukR.js";var te=function(a){p.useEffect(a,[])},b={},ne=L,se=D;Object.defineProperty(b,"__esModule",{value:!0});var C=b.default=void 0,ie=se(p),oe=ne(R()),le=(0,oe.default)(ie.createElement("path",{d:"M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z"}),"FontDownload");C=b.default=le;const ce=v(a=>({card:{backgroundColor:"rgba(0, 0, 0, .11)"},cardContent:{paddingTop:a.spacing(1)},icon:{color:a.palette.text.primary},list:{width:"100%"},listItemIcon:{width:"24px",height:"24px"},accordion:{backgroundColor:a.palette.background.paper},accordionSummary:{minHeight:"auto","&.Mui-expanded":{minHeight:"auto"}},accordionSummaryContent:{margin:a.spacing(2,0),"&.Mui-expanded":{margin:a.spacing(2,0)}},accordionDetails:{padding:a.spacing(0,0,1)}})),S=a=>{const t=ce(),{filters:o,setPageCursor:d,setTypes:c,term:l,types:s}=h(),u=B(j),[y,n]=p.useState(!0),{defaultValue:i,name:x,showCounts:T,types:w}=a,I=()=>n(r=>!r),N=r=>()=>{c(r!==""?[r]:[]),d(void 0)};p.useEffect(()=>{i&&c([i])},[]);const f=[{value:"",name:"All",icon:e.createElement(C,null)},...w],_=s[0]||"",{value:q}=P(async()=>{if(!T)return{};const r=await Promise.all(f.map(m=>m.value).map(async m=>{const{numberOfResults:g}=await u.query({term:l,types:m?[m]:[],filters:s.includes(m)||!s.length&&!m?o:{},pageLimit:0});return[m,g!==void 0?`${g>=1e4?">10000":g} results`:" -- "]}));return Object.fromEntries(r)},[o,T,l,s]);return e.createElement(z,{className:t.card},e.createElement(M,{title:x,titleTypographyProps:{variant:"overline"}}),e.createElement(J,{className:t.cardContent},e.createElement(W,{className:t.accordion,expanded:y,onChange:I},e.createElement(X,{classes:{root:t.accordionSummary,content:t.accordionSummaryContent},expandIcon:e.createElement(V,{className:t.icon}),IconButtonProps:{size:"small"}},y?"Collapse":f.filter(r=>r.value===_)[0].name),e.createElement(H,{classes:{root:t.accordionDetails}},e.createElement($,{className:t.list,component:"nav","aria-label":"filter by type",disablePadding:!0,dense:!0},f.map(r=>e.createElement(p.Fragment,{key:r.value},e.createElement(O,null),e.createElement(F,{selected:s[0]===r.value||s.length===0&&r.value==="",onClick:N(r.value),button:!0},e.createElement(U,null,p.cloneElement(r.icon,{className:t.listItemIcon})),e.createElement(A,{primary:r.name,secondary:q&&q[r.value]})))))))))};S.__docgenInfo={description:"",methods:[],displayName:"SearchTypeAccordion",props:{name:{required:!0,tsType:{name:"string"},description:""},types:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  name: string;
  icon: JSX.Element;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"icon",value:{name:"JSX.Element",required:!0}}]}}],raw:`Array<{
  value: string;
  name: string;
  icon: JSX.Element;
}>`},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},showCounts:{required:!1,tsType:{name:"boolean"},description:""}}};const ue=v(a=>({tabs:{borderBottom:`1px solid ${a.palette.textVerySubtle}`},tab:{height:"50px",fontWeight:a.typography.fontWeightBold,fontSize:a.typography.pxToRem(13),color:a.palette.text.primary,minWidth:"130px"}})),k=a=>{const t=ue(),{setPageCursor:o,setTypes:d,types:c}=h(),{defaultValue:l,types:s}=a,u=(n,i)=>{d(i!==""?[i]:[]),o(void 0)};p.useEffect(()=>{l&&d([l])},[]);const y=[{value:"",name:"All"},...s];return e.createElement(G,{"aria-label":"List of search types tabs",className:t.tabs,indicatorColor:"primary",value:c.length===0?"":c[0],onChange:u},y.map((n,i)=>e.createElement(K,{key:i,className:t.tab,label:n.name,value:n.value})))};k.__docgenInfo={description:"",methods:[],displayName:"SearchTypeTabs",props:{types:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  name: string;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}}]}}],raw:`Array<{
  value: string;
  name: string;
}>`},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""}}};const me=v(a=>({label:{textTransform:"capitalize"},chips:{display:"flex",flexWrap:"wrap",marginTop:a.spacing(1)},chip:{margin:2}})),E=a=>{const{className:t,defaultValue:o,name:d,values:c=[]}=a,l=me(),{types:s,setTypes:u}=h();te(()=>{s.length||(o&&Array.isArray(o)?u(o):o&&u([o]))});const y=n=>{const i=n.target.value;u(i)};return e.createElement(Q,{className:t,variant:"filled",fullWidth:!0,"data-testid":"search-typefilter-next"},e.createElement(Y,{className:l.label,margin:"dense"},d),e.createElement(Z,{multiple:!0,variant:"outlined",value:s,onChange:y,placeholder:"All Results",renderValue:n=>e.createElement("div",{className:l.chips},n.map(i=>e.createElement(ee,{key:i,label:i,className:l.chip,size:"small"})))},c.map(n=>e.createElement(ae,{key:n,value:n},e.createElement(re,{checked:s.indexOf(n)>-1}),e.createElement(A,{primary:n})))))};E.Accordion=a=>e.createElement(S,{...a});E.Tabs=a=>e.createElement(k,{...a});E.__docgenInfo={description:"@public",methods:[{name:"Accordion",docblock:`A control surface for the search query's "types" property, displayed as a
single-select collapsible accordion suitable for use in faceted search UIs.
@public`,modifiers:["static"],params:[{name:"props",optional:!1,type:{name:"signature",type:"object",raw:`{
  name: string;
  types: Array<{
    value: string;
    name: string;
    icon: JSX.Element;
  }>;
  defaultValue?: string;
  showCounts?: boolean;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"types",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  name: string;
  icon: JSX.Element;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"icon",value:{name:"JSX.Element",required:!0}}]}}],raw:`Array<{
  value: string;
  name: string;
  icon: JSX.Element;
}>`,required:!0}},{key:"defaultValue",value:{name:"string",required:!1}},{key:"showCounts",value:{name:"boolean",required:!1}}]},alias:"SearchTypeAccordionProps"}}],returns:null,description:`A control surface for the search query's "types" property, displayed as a
single-select collapsible accordion suitable for use in faceted search UIs.`},{name:"Tabs",docblock:`A control surface for the search query's "types" property, displayed as a
tabs suitable for use in faceted search UIs.
@public`,modifiers:["static"],params:[{name:"props",optional:!1,type:{name:"signature",type:"object",raw:`{
  types: Array<{
    value: string;
    name: string;
  }>;
  defaultValue?: string;
}`,signature:{properties:[{key:"types",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  name: string;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}}]}}],raw:`Array<{
  value: string;
  name: string;
}>`,required:!0}},{key:"defaultValue",value:{name:"string",required:!1}}]},alias:"SearchTypeTabsProps"}}],returns:null,description:`A control surface for the search query's "types" property, displayed as a
tabs suitable for use in faceted search UIs.`}],displayName:"SearchType",props:{className:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},values:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"string[] | string | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"string"},{name:"null"}]},description:""}}};export{E as S};
