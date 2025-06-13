import{u as D,R as k,r as p,a as z,C as I,c as H,b as V,j as i,S as g,P as B}from"./index-DbDPHvz6.js";import{C as O,M as _}from"./index-VoLG3_oH.js";import{u as G,R as P,C as E}from"./col-VxJGxkhd.js";import"./useVariants-Bs6Ax5J5.js";import"./ResizeObserver.es-B1PUzC5B.js";const F=(e,t)=>{typeof(e==null?void 0:e.addEventListener)<"u"?e.addEventListener("change",t):typeof(e==null?void 0:e.addListener)<"u"&&e.addListener(t)},X=(e,t)=>{typeof(e==null?void 0:e.removeEventListener)<"u"?e.removeEventListener("change",t):typeof(e==null?void 0:e.removeListener)<"u"&&e.removeListener(t)},j=["xxl","xl","lg","md","sm","xs"],J=e=>({xs:`(max-width: ${e.screenXSMax}px)`,sm:`(min-width: ${e.screenSM}px)`,md:`(min-width: ${e.screenMD}px)`,lg:`(min-width: ${e.screenLG}px)`,xl:`(min-width: ${e.screenXL}px)`,xxl:`(min-width: ${e.screenXXL}px)`}),Q=e=>{const t=e,r=[].concat(j).reverse();return r.forEach((a,s)=>{const n=a.toUpperCase(),o=`screen${n}Min`,l=`screen${n}`;if(!(t[o]<=t[l]))throw new Error(`${o}<=${l} fails : !(${t[o]}<=${t[l]})`);if(s<r.length-1){const c=`screen${n}Max`;if(!(t[l]<=t[c]))throw new Error(`${l}<=${c} fails : !(${t[l]}<=${t[c]})`);const d=`screen${r[s+1].toUpperCase()}Min`;if(!(t[c]<=t[d]))throw new Error(`${c}<=${d} fails : !(${t[c]}<=${t[d]})`)}}),e},T=()=>{const[,e]=D(),t=J(Q(e));return k.useMemo(()=>{const r=new Map;let a=-1,s={};return{responsiveMap:t,matchHandlers:{},dispatch(n){return s=n,r.forEach(o=>o(s)),r.size>=1},subscribe(n){return r.size||this.register(),a+=1,r.set(a,n),n(s),a},unsubscribe(n){r.delete(n),r.size||this.unregister()},register(){Object.entries(t).forEach(n=>{let[o,l]=n;const c=d=>{let{matches:h}=d;this.dispatch(Object.assign(Object.assign({},s),{[o]:h}))},u=window.matchMedia(l);F(u,c),this.matchHandlers[l]={mql:u,listener:c},c(u)})},unregister(){Object.values(t).forEach(n=>{const o=this.matchHandlers[n];X(o==null?void 0:o.mql,o==null?void 0:o.listener)}),r.clear()}}},[e])};function K(){const[,e]=p.useReducer(t=>t+1,0);return e}function W(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=p.useRef(t),a=K(),s=T();return z(()=>{const n=s.subscribe(o=>{r.current=o,e&&a()});return()=>s.unsubscribe(n)},[]),r.current}function Y(e,t){const r=[void 0,void 0],a=Array.isArray(e)?e:[e,void 0],s=t||{xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0};return a.forEach((n,o)=>{if(typeof n=="object"&&n!==null)for(let l=0;l<j.length;l++){const c=j[l];if(s[c]&&n[c]!==void 0){r[o]=n[c];break}}else r[o]=n}),r}var Z=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};function U(e,t){const[r,a]=p.useState(typeof e=="string"?e:""),s=()=>{if(typeof e=="string"&&a(e),typeof e=="object")for(let n=0;n<j.length;n++){const o=j[n];if(!t||!t[o])continue;const l=e[o];if(l!==void 0){a(l);return}}};return p.useEffect(()=>{s()},[JSON.stringify(e),t]),r}const q=p.forwardRef((e,t)=>{const{prefixCls:r,justify:a,align:s,className:n,style:o,children:l,gutter:c=0,wrap:u}=e,d=Z(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),{getPrefixCls:h,direction:y}=p.useContext(I),x=W(!0,null),v=U(s,x),b=U(a,x),m=h("row",r),[w,N,$]=G(m),f=Y(c,x),R=H(m,{[`${m}-no-wrap`]:u===!1,[`${m}-${b}`]:b,[`${m}-${v}`]:v,[`${m}-rtl`]:y==="rtl"},n,N,$),C={},M=f[0]!=null&&f[0]>0?f[0]/-2:void 0;M&&(C.marginLeft=M,C.marginRight=M);const[S,L]=f;C.rowGap=L;const A=p.useMemo(()=>({gutter:[S,L],wrap:u}),[S,L,u]);return w(p.createElement(P.Provider,{value:A},p.createElement("div",Object.assign({},d,{className:R,style:Object.assign(Object.assign({},C),o),ref:t}),l)))}),ee=({description:e})=>{const[t,r]=p.useState(!0),[a,s]=p.useState([]),n=V(),o=async()=>{const u=`https://tr3yh6z2.api.sanity.io/v1/data/query/production?query=${encodeURIComponent(`*[_type == "leader"] {
      _id,
      name,
      image {
        asset -> {
          url
        }
      },
      designation,
      guid
    }`)}`,d=await fetch(u).then(h=>h.json());d!=null&&d.result&&s(d==null?void 0:d.result)};p.useEffect(()=>{e&&r(!1),o()},[e]);const l=c=>{n(`/about-us/leaders/${c.guid}`)};return i.jsxs("div",{className:"aboutusleadership-container",children:[i.jsxs("div",{className:"aboutusleadership-title",children:["Our ",i.jsx("span",{children:"Leadership"})]}),i.jsx("div",{className:"aboutusleadership-description",children:t?i.jsx(g,{active:!0,paragraph:{rows:2}}):e||"No leadership description available."}),i.jsx("div",{className:"aboutusleadership-leaders",children:t?i.jsx("div",{className:"aboutusleadership-leaders-skeleton",children:[...Array(3)].map((c,u)=>i.jsx("div",{className:"aboutusleadership-leader-card-skeleton",children:i.jsx(g,{loading:!0,avatar:!0,paragraph:{rows:2}})},u))}):i.jsx("div",{className:"aboutusleadership-leaders-row",children:a.length?a.map((c,u)=>i.jsx("div",{className:"aboutusleadership-leader-card",children:i.jsx(O,{hoverable:!0,cover:i.jsx("img",{className:"aboutusleadership-leader-image",alt:c.name,src:c.image.asset.url}),onClick:()=>l(c),children:i.jsx(_,{title:c.name||"No Name",description:`${c.designation||"No Designation"}`})})},u)):i.jsx("p",{children:"No leaders available"})})})]})},se=({vision:e,mission:t})=>{const r=!e||!t;return i.jsx("div",{className:"about-us-section",children:i.jsxs(q,{gutter:[16,16],children:[i.jsx(E,{xs:24,sm:12,children:i.jsxs(O,{hoverable:!0,cover:r?i.jsx(g.Image,{active:!0,style:{width:"100%",height:"50vh"}}):i.jsx("img",{alt:"Vision",src:e.image.src,className:"card-image"}),children:[i.jsxs("div",{className:"card-title-wrapper",children:[i.jsx("div",{className:"line"}),i.jsx("h3",{className:"card-title",style:{color:"var(--orange)"},children:r?i.jsx(g.Input,{active:!0,size:"small",style:{width:100}}):"Vision"}),i.jsx("div",{className:"line"})]}),i.jsx("p",{style:{lineHeight:"27px",fontSize:"15px",fontFamily:"Raleway"},children:r?i.jsx(g,{paragraph:{rows:2},active:!0}):e.description})]})}),i.jsx(E,{xs:24,sm:12,children:i.jsxs(O,{hoverable:!0,cover:r?i.jsx(g.Image,{active:!0,style:{width:"100%",height:"50vh"}}):i.jsx("img",{alt:"Mission",src:t.image.src,className:"card-image"}),children:[i.jsxs("div",{className:"card-title-wrapper",children:[i.jsx("div",{className:"line"}),i.jsx("h3",{className:"card-title",style:{color:"teal"},children:r?i.jsx(g.Input,{active:!0,size:"small",style:{width:100}}):"Mission"}),i.jsx("div",{className:"line"})]}),i.jsx("p",{style:{lineHeight:"27px",fontSize:"15px",fontFamily:"Raleway"},children:r?i.jsx(g,{paragraph:{rows:2},active:!0}):t.description})]})})]})})},ae=()=>{const[e,t]=p.useState(null),r=async()=>{const n=`https://tr3yh6z2.api.sanity.io/v1/data/query/production?query=${encodeURIComponent(`*[_type == "aboutUs"][0] {
      title,
      image {
        asset -> {
          url
        },
        imageDescription
      },
      description,
      vision {
        image {
          asset -> {
            url
          },
          imageDescription
        },
        description
      },
      mission {
        image {
          asset -> {
            url
          },
          imageDescription
        },
        description
      },
      leadership {
        description,
        leaders[] {
          image {
            asset -> {
              url
            },
            imageDescription
          },
          name,
          designation,
          tagline
        }
      }
    }`)}`,o=await fetch(n).then(l=>l.json());o!=null&&o.result&&t(a(o.result))},a=s=>{var n,o,l,c,u,d,h,y,x,v,b,m,w,N,$,f;return{title:(s==null?void 0:s.title)||"No Title",image:{src:((o=(n=s==null?void 0:s.image)==null?void 0:n.asset)==null?void 0:o.url)||"",description:((l=s==null?void 0:s.image)==null?void 0:l.imageDescription)||"No description available"},description:(s==null?void 0:s.description)||"No description available",vision:{image:{src:((d=(u=(c=s==null?void 0:s.vision)==null?void 0:c.image)==null?void 0:u.asset)==null?void 0:d.url)||"",description:((y=(h=s==null?void 0:s.vision)==null?void 0:h.image)==null?void 0:y.imageDescription)||"No image description"},description:((x=s==null?void 0:s.vision)==null?void 0:x.description)||"No description available"},mission:{image:{src:((m=(b=(v=s==null?void 0:s.mission)==null?void 0:v.image)==null?void 0:b.asset)==null?void 0:m.url)||"",description:((N=(w=s==null?void 0:s.mission)==null?void 0:w.image)==null?void 0:N.imageDescription)||"No image description"},description:(($=s==null?void 0:s.mission)==null?void 0:$.description)||"No description available"},leadership:{description:((f=s==null?void 0:s.leadership)==null?void 0:f.description)||"No leadership description available"}}};return p.useEffect(()=>{document.title="About Us | Corpus Life Science",r()},[]),i.jsx("div",{className:"aboutuspage-container",children:e?i.jsxs(i.Fragment,{children:[i.jsx(B,{image:e.image,title:"About us"}),i.jsx("div",{className:"about-us-page-description",children:e.description}),i.jsx(se,{vision:e.vision,mission:e.mission}),i.jsx(ee,{description:e.leadership.description})]}):i.jsx("p",{children:"Loading..."})})};export{ae as default};
