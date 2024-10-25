import{r as V,R as e}from"./index-CTjT7uj6.js";import{s as me,M as pe}from"./api-CKDuuaL7.js";import{a as de}from"./useAsync-CXA3qup_.js";import{u as fe}from"./useDebounce-4fqASXX_.js";import{u as N,S as ge}from"./SearchContext-BQYqBmky.js";import{A as ve}from"./Autocomplete-DblHtr6J.js";import{T as ye}from"./TextField-BTMZq3km.js";import{C as be}from"./Chip-BVhyNaEx.js";import{m as he}from"./makeStyles-DFHNDtjR.js";import{a as le,F as we}from"./FormLabel-D8pcgbzB.js";import{F as ke}from"./FormControlLabel-Yug0dnOZ.js";import{C as Se}from"./Checkbox-DPpjLukR.js";import{I as qe}from"./InputLabel-bCDtCbdp.js";import{S as Ae}from"./Select-DCm_oyn8.js";import{M as W}from"./MenuItem-B4wltlCe.js";import{T as Ee}from"./Typography-DtBgvzFq.js";import{S as $}from"./Grid-BsFNIMVV.js";import{P as y}from"./Paper-BK9DXOUE.js";import{T as De}from"./TestApiProvider-CoiMLMhd.js";import"./ApiRef-BSBwTmJJ.js";import"./useMountedState-DkESzBh4.js";import"./lodash-CoGan1YB.js";import"./useAnalytics-DTrkS1Gy.js";import"./ConfigApi-DBUUc3nU.js";import"./defaultTheme-CzJIUhLY.js";import"./hoist-non-react-statics.cjs-yZcCaz5O.js";import"./Close-DrL3u_qt.js";import"./createSvgIcon-ErQpyllY.js";import"./capitalize-CDPu30qc.js";import"./withStyles-Cy0w16fh.js";import"./unstable_useId-B3Hiq1YI.js";import"./useControlled-BQlqYFiW.js";import"./index-BbmHap-z.js";import"./isMuiElement-Cb6QZSLO.js";import"./IconButton-8IZUBfhx.js";import"./ButtonBase-DtWcvltL.js";import"./TransitionGroupContext-BtzQ-Cv7.js";import"./Popper-CCoBcT50.js";import"./Portal-CTbkfrAU.js";import"./ListSubheader-vmcZZU0f.js";import"./formControlState-ByiNFc8I.js";import"./useFormControl-F4cJWIkJ.js";import"./SwitchBase-C5p9F8wZ.js";import"./react-is.production.min-D0tnNtx9.js";import"./useTheme-C1RDaILZ.js";import"./Popover-CcV6eZ35.js";import"./Modal-DOVkv6yD.js";import"./classCallCheck-BNzALLS0.js";import"./Grow-CYgnIZj0.js";import"./utils-Vc_NgNiQ.js";import"./List-DYtqLDXv.js";import"./ListContext-DydK1sOh.js";import"./ListItem-BX8d_s0j.js";import"./ApiProvider-CuNQiN7Z.js";import"./index-BRV0Se7Z.js";const _=(n,t,l=[],r=250)=>{const a=V.useRef({}),o=n||(()=>Promise.resolve([])),[f,u]=de(o,[t],{loading:!0});if(fe(()=>{a.current[t]===void 0&&(a.current[t]=u(t).then(c=>(a.current[t]=c,c)))},r,[u,t]),l.length)return{loading:!1,value:l};const m=a.current[t];return Array.isArray(m)?{loading:!1,value:m}:f},j=(n,t)=>{const{setFilters:l}=N();V.useEffect(()=>{t&&[t].flat().length>0&&l(r=>({...r,[n]:t}))},[])},ie=n=>{const{className:t,defaultValue:l,name:r,values:a,valuesDebounceMs:o,label:f,filterSelectedOptions:u,limitTags:m,multiple:c}=n,[b,h]=V.useState("");j(r,l);const w=typeof a=="function"?a:void 0,k=typeof a=="function"?void 0:a,{value:S,loading:s}=_(w,b,k,o),{filters:g,setFilters:q}=N(),C=g[r]||(c?[]:null),v=(p,d)=>{q(x=>{const{[r]:R,...O}=x;return d?{...O,[r]:d}:{...O}})},I=p=>e.createElement(ye,{...p,name:"search",variant:"outlined",label:f,fullWidth:!0}),M=(p,d)=>p.map((x,R)=>e.createElement(be,{label:x,color:"primary",...d({index:R})}));return e.createElement(ve,{filterSelectedOptions:u,limitTags:m,multiple:c,className:t,id:`${c?"multi-":""}select-filter-${r}--select`,options:S||[],loading:s,value:C,onChange:v,onInputChange:(p,d)=>h(d),renderInput:I,renderTags:M})};ie.__docgenInfo={description:"@public",methods:[],displayName:"AutocompleteFilter",props:{className:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},values:{required:!1,tsType:{name:"union",raw:"string[] | ((partial: string) => Promise<string[]>)",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"unknown"}]},description:`Either an array of values directly, or an async function to return a list
of values to be used in the filter. In the autocomplete filter, the last
input value is provided as an input to allow values to be filtered. This
function is debounced and values cached.`},defaultValue:{required:!1,tsType:{name:"union",raw:"string[] | string | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"string"},{name:"null"}]},description:""},valuesDebounceMs:{required:!1,tsType:{name:"number"},description:`Debounce time in milliseconds, used when values is an async callback.
Defaults to 250ms.`},filterSelectedOptions:{required:!1,tsType:{name:"boolean"},description:""},limitTags:{required:!1,tsType:{name:"number"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:""}}};const oe=he({label:{textTransform:"capitalize"},checkboxWrapper:{display:"flex",alignItems:"center",width:"100%"},textWrapper:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}),ue=n=>{const{className:t,defaultValue:l,label:r,name:a,values:o=[],valuesDebounceMs:f}=n,u=oe(),{filters:m,setFilters:c}=N();j(a,l);const b=typeof o=="function"?o:void 0,h=typeof o=="function"?void 0:o,{value:w=[],loading:k}=_(b,"",h,f),S=s=>{const{target:{value:g,checked:q}}=s;c(C=>{const{[a]:v,...I}=C,M=(v||[]).filter(d=>d!==g),p=q?[...M,g]:M;return p.length?{...I,[a]:p}:I})};return e.createElement(le,{className:t,disabled:k,fullWidth:!0,"data-testid":"search-checkboxfilter-next"},r?e.createElement(we,{className:u.label},r):null,w.map(s=>e.createElement(ke,{key:s,classes:{root:u.checkboxWrapper,label:u.textWrapper},label:s,control:e.createElement(Se,{color:"primary",inputProps:{"aria-labelledby":s},value:s,name:s,onChange:S,checked:(m[a]??[]).includes(s)})})))},ce=n=>{const{className:t,defaultValue:l,label:r,name:a,values:o,valuesDebounceMs:f}=n,u=oe();j(a,l);const m=typeof o=="function"?o:void 0,c=typeof o=="function"?void 0:o,{value:b=[],loading:h}=_(m,"",c,f),{filters:w,setFilters:k}=N(),S=s=>{const{target:{value:g}}=s;k(q=>{const{[a]:C,...v}=q;return g?{...v,[a]:g}:v})};return e.createElement(le,{disabled:h,className:t,variant:"filled",fullWidth:!0,"data-testid":"search-selectfilter-next"},r?e.createElement(qe,{className:u.label,margin:"dense"},r):null,e.createElement(Ae,{variant:"outlined",value:w[a]||"",onChange:S},e.createElement(W,{value:""},e.createElement("em",null,"All")),b.map(s=>e.createElement(W,{key:s,value:s},e.createElement(Ee,{variant:"inherit",noWrap:!0},s)))))},i=n=>{const{component:t,...l}=n;return e.createElement(t,{...l})};i.Checkbox=n=>e.createElement(i,{...n,component:ue});i.Select=n=>e.createElement(i,{...n,component:ce});i.Autocomplete=n=>e.createElement(i,{...n,component:ie});ue.__docgenInfo={description:"@public",methods:[],displayName:"CheckboxFilter",props:{className:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},values:{required:!1,tsType:{name:"union",raw:"string[] | ((partial: string) => Promise<string[]>)",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"unknown"}]},description:`Either an array of values directly, or an async function to return a list
of values to be used in the filter. In the autocomplete filter, the last
input value is provided as an input to allow values to be filtered. This
function is debounced and values cached.`},defaultValue:{required:!1,tsType:{name:"union",raw:"string[] | string | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"string"},{name:"null"}]},description:""},valuesDebounceMs:{required:!1,tsType:{name:"number"},description:`Debounce time in milliseconds, used when values is an async callback.
Defaults to 250ms.`}}};ce.__docgenInfo={description:"@public",methods:[],displayName:"SelectFilter",props:{className:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},values:{required:!1,tsType:{name:"union",raw:"string[] | ((partial: string) => Promise<string[]>)",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"unknown"}]},description:`Either an array of values directly, or an async function to return a list
of values to be used in the filter. In the autocomplete filter, the last
input value is provided as an input to allow values to be filtered. This
function is debounced and values cached.`},defaultValue:{required:!1,tsType:{name:"union",raw:"string[] | string | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"string"},{name:"null"}]},description:""},valuesDebounceMs:{required:!1,tsType:{name:"number"},description:`Debounce time in milliseconds, used when values is an async callback.
Defaults to 250ms.`}}};i.__docgenInfo={description:"@public",methods:[{name:"Checkbox",docblock:null,modifiers:["static"],params:[{name:"props",optional:!1,type:{name:"intersection",raw:`Omit<SearchFilterWrapperProps, 'component'> &
SearchFilterComponentProps`,elements:[{name:"Omit",elements:[{name:"intersection",raw:`SearchFilterComponentProps & {
  component: (props: SearchFilterComponentProps) => ReactElement;
  debug?: boolean;
}`,elements:[{name:"signature",type:"object",raw:`{
  className?: string;
  name: string;
  label?: string;
  /**
   * Either an array of values directly, or an async function to return a list
   * of values to be used in the filter. In the autocomplete filter, the last
   * input value is provided as an input to allow values to be filtered. This
   * function is debounced and values cached.
   */
  values?: string[] | ((partial: string) => Promise<string[]>);
  defaultValue?: string[] | string | null;
  /**
   * Debounce time in milliseconds, used when values is an async callback.
   * Defaults to 250ms.
   */
  valuesDebounceMs?: number;
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}},{key:"values",value:{name:"union",raw:"string[] | ((partial: string) => Promise<string[]>)",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"unknown"}],required:!1},description:`Either an array of values directly, or an async function to return a list
of values to be used in the filter. In the autocomplete filter, the last
input value is provided as an input to allow values to be filtered. This
function is debounced and values cached.`},{key:"defaultValue",value:{name:"union",raw:"string[] | string | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"string"},{name:"null"}],required:!1}},{key:"valuesDebounceMs",value:{name:"number",required:!1},description:`Debounce time in milliseconds, used when values is an async callback.
Defaults to 250ms.`}]}},{name:"signature",type:"object",raw:`{
  component: (props: SearchFilterComponentProps) => ReactElement;
  debug?: boolean;
}`,signature:{properties:[{key:"component",value:{name:"signature",type:"function",raw:"(props: SearchFilterComponentProps) => ReactElement",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  className?: string;
  name: string;
  label?: string;
  /**
   * Either an array of values directly, or an async function to return a list
   * of values to be used in the filter. In the autocomplete filter, the last
   * input value is provided as an input to allow values to be filtered. This
   * function is debounced and values cached.
   */
  values?: string[] | ((partial: string) => Promise<string[]>);
  defaultValue?: string[] | string | null;
  /**
   * Debounce time in milliseconds, used when values is an async callback.
   * Defaults to 250ms.
   */
  valuesDebounceMs?: number;
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}},{key:"values",value:{name:"union",raw:"string[] | ((partial: string) => Promise<string[]>)",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"unknown"}],required:!1},description:`Either an array of values directly, or an async function to return a list
of values to be used in the filter. In the autocomplete filter, the last
input value is provided as an input to allow values to be filtered. This
function is debounced and values cached.`},{key:"defaultValue",value:{name:"union",raw:"string[] | string | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"string"},{name:"null"}],required:!1}},{key:"valuesDebounceMs",value:{name:"number",required:!1},description:`Debounce time in milliseconds, used when values is an async callback.
Defaults to 250ms.`}]}},name:"props"}],return:{name:"ReactElement"}},required:!0}},{key:"debug",value:{name:"boolean",required:!1}}]}}]},{name:"literal",value:"'component'"}],raw:"Omit<SearchFilterWrapperProps, 'component'>"},{name:"signature",type:"object",raw:`{
  className?: string;
  name: string;
  label?: string;
  /**
   * Either an array of values directly, or an async function to return a list
   * of values to be used in the filter. In the autocomplete filter, the last
   * input value is provided as an input to allow values to be filtered. This
   * function is debounced and values cached.
   */
  values?: string[] | ((partial: string) => Promise<string[]>);
  defaultValue?: string[] | string | null;
  /**
   * Debounce time in milliseconds, used when values is an async callback.
   * Defaults to 250ms.
   */
  valuesDebounceMs?: number;
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}},{key:"values",value:{name:"union",raw:"string[] | ((partial: string) => Promise<string[]>)",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"unknown"}],required:!1},description:`Either an array of values directly, or an async function to return a list
of values to be used in the filter. In the autocomplete filter, the last
input value is provided as an input to allow values to be filtered. This
function is debounced and values cached.`},{key:"defaultValue",value:{name:"union",raw:"string[] | string | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"string"},{name:"null"}],required:!1}},{key:"valuesDebounceMs",value:{name:"number",required:!1},description:`Debounce time in milliseconds, used when values is an async callback.
Defaults to 250ms.`}]}}]}}],returns:null},{name:"Select",docblock:null,modifiers:["static"],params:[{name:"props",optional:!1,type:{name:"intersection",raw:`Omit<SearchFilterWrapperProps, 'component'> &
SearchFilterComponentProps`,elements:[{name:"Omit",elements:[{name:"intersection",raw:`SearchFilterComponentProps & {
  component: (props: SearchFilterComponentProps) => ReactElement;
  debug?: boolean;
}`,elements:[{name:"signature",type:"object",raw:`{
  className?: string;
  name: string;
  label?: string;
  /**
   * Either an array of values directly, or an async function to return a list
   * of values to be used in the filter. In the autocomplete filter, the last
   * input value is provided as an input to allow values to be filtered. This
   * function is debounced and values cached.
   */
  values?: string[] | ((partial: string) => Promise<string[]>);
  defaultValue?: string[] | string | null;
  /**
   * Debounce time in milliseconds, used when values is an async callback.
   * Defaults to 250ms.
   */
  valuesDebounceMs?: number;
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}},{key:"values",value:{name:"union",raw:"string[] | ((partial: string) => Promise<string[]>)",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"unknown"}],required:!1},description:`Either an array of values directly, or an async function to return a list
of values to be used in the filter. In the autocomplete filter, the last
input value is provided as an input to allow values to be filtered. This
function is debounced and values cached.`},{key:"defaultValue",value:{name:"union",raw:"string[] | string | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"string"},{name:"null"}],required:!1}},{key:"valuesDebounceMs",value:{name:"number",required:!1},description:`Debounce time in milliseconds, used when values is an async callback.
Defaults to 250ms.`}]}},{name:"signature",type:"object",raw:`{
  component: (props: SearchFilterComponentProps) => ReactElement;
  debug?: boolean;
}`,signature:{properties:[{key:"component",value:{name:"signature",type:"function",raw:"(props: SearchFilterComponentProps) => ReactElement",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  className?: string;
  name: string;
  label?: string;
  /**
   * Either an array of values directly, or an async function to return a list
   * of values to be used in the filter. In the autocomplete filter, the last
   * input value is provided as an input to allow values to be filtered. This
   * function is debounced and values cached.
   */
  values?: string[] | ((partial: string) => Promise<string[]>);
  defaultValue?: string[] | string | null;
  /**
   * Debounce time in milliseconds, used when values is an async callback.
   * Defaults to 250ms.
   */
  valuesDebounceMs?: number;
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}},{key:"values",value:{name:"union",raw:"string[] | ((partial: string) => Promise<string[]>)",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"unknown"}],required:!1},description:`Either an array of values directly, or an async function to return a list
of values to be used in the filter. In the autocomplete filter, the last
input value is provided as an input to allow values to be filtered. This
function is debounced and values cached.`},{key:"defaultValue",value:{name:"union",raw:"string[] | string | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"string"},{name:"null"}],required:!1}},{key:"valuesDebounceMs",value:{name:"number",required:!1},description:`Debounce time in milliseconds, used when values is an async callback.
Defaults to 250ms.`}]}},name:"props"}],return:{name:"ReactElement"}},required:!0}},{key:"debug",value:{name:"boolean",required:!1}}]}}]},{name:"literal",value:"'component'"}],raw:"Omit<SearchFilterWrapperProps, 'component'>"},{name:"signature",type:"object",raw:`{
  className?: string;
  name: string;
  label?: string;
  /**
   * Either an array of values directly, or an async function to return a list
   * of values to be used in the filter. In the autocomplete filter, the last
   * input value is provided as an input to allow values to be filtered. This
   * function is debounced and values cached.
   */
  values?: string[] | ((partial: string) => Promise<string[]>);
  defaultValue?: string[] | string | null;
  /**
   * Debounce time in milliseconds, used when values is an async callback.
   * Defaults to 250ms.
   */
  valuesDebounceMs?: number;
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}},{key:"values",value:{name:"union",raw:"string[] | ((partial: string) => Promise<string[]>)",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"unknown"}],required:!1},description:`Either an array of values directly, or an async function to return a list
of values to be used in the filter. In the autocomplete filter, the last
input value is provided as an input to allow values to be filtered. This
function is debounced and values cached.`},{key:"defaultValue",value:{name:"union",raw:"string[] | string | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"string"},{name:"null"}],required:!1}},{key:"valuesDebounceMs",value:{name:"number",required:!1},description:`Debounce time in milliseconds, used when values is an async callback.
Defaults to 250ms.`}]}}]}}],returns:null},{name:"Autocomplete",docblock:`A control surface for a given filter field name, rendered as an autocomplete
textfield. A hard-coded list of values may be provided, or an async function
which returns values may be provided instead.

@public`,modifiers:["static"],params:[{name:"props",optional:!1,type:{name:"intersection",raw:`SearchFilterComponentProps & {
  filterSelectedOptions?: boolean;
  limitTags?: number;
  multiple?: boolean;
}`,elements:[{name:"signature",type:"object",raw:`{
  className?: string;
  name: string;
  label?: string;
  /**
   * Either an array of values directly, or an async function to return a list
   * of values to be used in the filter. In the autocomplete filter, the last
   * input value is provided as an input to allow values to be filtered. This
   * function is debounced and values cached.
   */
  values?: string[] | ((partial: string) => Promise<string[]>);
  defaultValue?: string[] | string | null;
  /**
   * Debounce time in milliseconds, used when values is an async callback.
   * Defaults to 250ms.
   */
  valuesDebounceMs?: number;
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}},{key:"values",value:{name:"union",raw:"string[] | ((partial: string) => Promise<string[]>)",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"unknown"}],required:!1},description:`Either an array of values directly, or an async function to return a list
of values to be used in the filter. In the autocomplete filter, the last
input value is provided as an input to allow values to be filtered. This
function is debounced and values cached.`},{key:"defaultValue",value:{name:"union",raw:"string[] | string | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"string"},{name:"null"}],required:!1}},{key:"valuesDebounceMs",value:{name:"number",required:!1},description:`Debounce time in milliseconds, used when values is an async callback.
Defaults to 250ms.`}]}},{name:"signature",type:"object",raw:`{
  filterSelectedOptions?: boolean;
  limitTags?: number;
  multiple?: boolean;
}`,signature:{properties:[{key:"filterSelectedOptions",value:{name:"boolean",required:!1}},{key:"limitTags",value:{name:"number",required:!1}},{key:"multiple",value:{name:"boolean",required:!1}}]}}],alias:"SearchAutocompleteFilterProps"}}],returns:null,description:`A control surface for a given filter field name, rendered as an autocomplete
textfield. A hard-coded list of values may be provided, or an async function
which returns values may be provided instead.`}],displayName:"SearchFilter",props:{className:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},values:{required:!1,tsType:{name:"union",raw:"string[] | ((partial: string) => Promise<string[]>)",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"unknown"}]},description:`Either an array of values directly, or an async function to return a list
of values to be used in the filter. In the autocomplete filter, the last
input value is provided as an input to allow values to be filtered. This
function is debounced and values cached.`},defaultValue:{required:!1,tsType:{name:"union",raw:"string[] | string | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"string"},{name:"null"}]},description:""},valuesDebounceMs:{required:!1,tsType:{name:"number"},description:`Debounce time in milliseconds, used when values is an async callback.
Defaults to 250ms.`},component:{required:!0,tsType:{name:"signature",type:"function",raw:"(props: SearchFilterComponentProps) => ReactElement",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  className?: string;
  name: string;
  label?: string;
  /**
   * Either an array of values directly, or an async function to return a list
   * of values to be used in the filter. In the autocomplete filter, the last
   * input value is provided as an input to allow values to be filtered. This
   * function is debounced and values cached.
   */
  values?: string[] | ((partial: string) => Promise<string[]>);
  defaultValue?: string[] | string | null;
  /**
   * Debounce time in milliseconds, used when values is an async callback.
   * Defaults to 250ms.
   */
  valuesDebounceMs?: number;
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}},{key:"values",value:{name:"union",raw:"string[] | ((partial: string) => Promise<string[]>)",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"unknown"}],required:!1},description:`Either an array of values directly, or an async function to return a list
of values to be used in the filter. In the autocomplete filter, the last
input value is provided as an input to allow values to be filtered. This
function is debounced and values cached.`},{key:"defaultValue",value:{name:"union",raw:"string[] | string | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"string"},{name:"null"}],required:!1}},{key:"valuesDebounceMs",value:{name:"number",required:!1},description:`Debounce time in milliseconds, used when values is an async callback.
Defaults to 250ms.`}]}},name:"props"}],return:{name:"ReactElement"}}},description:""},debug:{required:!1,tsType:{name:"boolean"},description:""}}};const Pn={title:"Plugins/Search/SearchFilter",component:i,decorators:[n=>e.createElement(De,{apis:[[me,new pe]]},e.createElement(ge,null,e.createElement($,{container:!0,direction:"row"},e.createElement($,{item:!0,xs:4},e.createElement(n,null)))))]},A=()=>e.createElement(y,{style:{padding:10}},e.createElement(i.Checkbox,{name:"Search Checkbox Filter",values:["value1","value2"]})),E=()=>e.createElement(y,{style:{padding:10}},e.createElement(i.Select,{label:"Search Select Filter",name:"select_filter",values:["value1","value2"]})),D=()=>e.createElement(y,{style:{padding:10}},e.createElement(i.Select,{label:"Asynchronous Values",name:"async_values",values:async()=>(await(await fetch("https://swapi.dev/api/planets")).json()).results.map(l=>l.name)})),F=()=>e.createElement(y,{style:{padding:10}},e.createElement(i.Autocomplete,{name:"autocomplete",label:"Single-Select Autocomplete Filter",values:["value1","value2"]})),T=()=>e.createElement(y,{style:{padding:10}},e.createElement(i.Autocomplete,{multiple:!0,name:"autocomplete",label:"Multi-Select Autocomplete Filter",values:["value1","value2"]})),P=()=>e.createElement(y,{style:{padding:10}},e.createElement(i.Autocomplete,{multiple:!0,name:"starwarsPerson",label:"Starwars Character",values:async n=>n===""?[]:(await(await fetch(`https://swapi.dev/api/people?search=${encodeURIComponent(n)}`)).json()).results.map(r=>r.name)}));A.__docgenInfo={description:"",methods:[],displayName:"CheckBoxFilter"};E.__docgenInfo={description:"",methods:[],displayName:"SelectFilter"};D.__docgenInfo={description:"",methods:[],displayName:"AsyncSelectFilter"};F.__docgenInfo={description:"",methods:[],displayName:"Autocomplete"};T.__docgenInfo={description:"",methods:[],displayName:"MultiSelectAutocomplete"};P.__docgenInfo={description:"",methods:[],displayName:"AsyncMultiSelectAutocomplete"};var B,L,U;A.parameters={...A.parameters,docs:{...(B=A.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  return <Paper style={{
    padding: 10
  }}>
      <SearchFilter.Checkbox name="Search Checkbox Filter" values={['value1', 'value2']} />
    </Paper>;
}`,...(U=(L=A.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var z,G,H;E.parameters={...E.parameters,docs:{...(z=E.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  return <Paper style={{
    padding: 10
  }}>
      <SearchFilter.Select label="Search Select Filter" name="select_filter" values={['value1', 'value2']} />
    </Paper>;
}`,...(H=(G=E.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,Q;D.parameters={...D.parameters,docs:{...(J=D.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  return <Paper style={{
    padding: 10
  }}>
      <SearchFilter.Select label="Asynchronous Values" name="async_values" values={async () => {
      const response = await fetch('https://swapi.dev/api/planets');
      const json: {
        results: Array<{
          name: string;
        }>;
      } = await response.json();
      return json.results.map(r => r.name);
    }} />
    </Paper>;
}`,...(Q=(K=D.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;F.parameters={...F.parameters,docs:{...(X=F.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  return <Paper style={{
    padding: 10
  }}>
      <SearchFilter.Autocomplete name="autocomplete" label="Single-Select Autocomplete Filter" values={['value1', 'value2']} />
    </Paper>;
}`,...(Z=(Y=F.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ne,te;T.parameters={...T.parameters,docs:{...(ee=T.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  return <Paper style={{
    padding: 10
  }}>
      <SearchFilter.Autocomplete multiple name="autocomplete" label="Multi-Select Autocomplete Filter" values={['value1', 'value2']} />
    </Paper>;
}`,...(te=(ne=T.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var ae,re,se;P.parameters={...P.parameters,docs:{...(ae=P.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  return <Paper style={{
    padding: 10
  }}>
      <SearchFilter.Autocomplete multiple name="starwarsPerson" label="Starwars Character" values={async partial => {
      if (partial === '') return [];
      const response = await fetch(\`https://swapi.dev/api/people?search=\${encodeURIComponent(partial)}\`);
      const json: {
        results: Array<{
          name: string;
        }>;
      } = await response.json();
      return json.results.map(r => r.name);
    }} />
    </Paper>;
}`,...(se=(re=P.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};const Cn=["CheckBoxFilter","SelectFilter","AsyncSelectFilter","Autocomplete","MultiSelectAutocomplete","AsyncMultiSelectAutocomplete"];export{P as AsyncMultiSelectAutocomplete,D as AsyncSelectFilter,F as Autocomplete,A as CheckBoxFilter,T as MultiSelectAutocomplete,E as SelectFilter,Cn as __namedExportsOrder,Pn as default};
