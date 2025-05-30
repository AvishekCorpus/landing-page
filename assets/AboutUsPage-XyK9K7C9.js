import{u as D,R as k,r as p,a as z,C as I,c as H,b as V,j as i,S as g,P as B}from"./index-BSgo2x5x.js";import{C as O,M as _}from"./index-CXziUocg.js";import{u as G,R as P,C as E}from"./col-BLwjrRg1.js";import"./useVariants-BzHtHaj7.js";import"./ResizeObserver.es-B1PUzC5B.js";const F=(e,t)=>{typeof(e==null?void 0:e.addEventListener)<"u"?e.addEventListener("change",t):typeof(e==null?void 0:e.addListener)<"u"&&e.addListener(t)},X=(e,t)=>{typeof(e==null?void 0:e.removeEventListener)<"u"?e.removeEventListener("change",t):typeof(e==null?void 0:e.removeListener)<"u"&&e.removeListener(t)},j=["xxl","xl","lg","md","sm","xs"],J=e=>({xs:`(max-width: ${e.screenXSMax}px)`,sm:`(min-width: ${e.screenSM}px)`,md:`(min-width: ${e.screenMD}px)`,lg:`(min-width: ${e.screenLG}px)`,xl:`(min-width: ${e.screenXL}px)`,xxl:`(min-width: ${e.screenXXL}px)`}),Q=e=>{const t=e,r=[].concat(j).reverse();return r.forEach((c,s)=>{const n=c.toUpperCase(),o=`screen${n}Min`,l=`screen${n}`;if(!(t[o]<=t[l]))throw new Error(`${o}<=${l} fails : !(${t[o]}<=${t[l]})`);if(s<r.length-1){const a=`screen${n}Max`;if(!(t[l]<=t[a]))throw new Error(`${l}<=${a} fails : !(${t[l]}<=${t[a]})`);const u=`screen${r[s+1].toUpperCase()}Min`;if(!(t[a]<=t[u]))throw new Error(`${a}<=${u} fails : !(${t[a]}<=${t[u]})`)}}),e},T=()=>{const[,e]=D(),t=J(Q(e));return k.useMemo(()=>{const r=new Map;let c=-1,s={};return{responsiveMap:t,matchHandlers:{},dispatch(n){return s=n,r.forEach(o=>o(s)),r.size>=1},subscribe(n){return r.size||this.register(),c+=1,r.set(c,n),n(s),c},unsubscribe(n){r.delete(n),r.size||this.unregister()},register(){Object.entries(t).forEach(n=>{let[o,l]=n;const a=u=>{let{matches:h}=u;this.dispatch(Object.assign(Object.assign({},s),{[o]:h}))},d=window.matchMedia(l);F(d,a),this.matchHandlers[l]={mql:d,listener:a},a(d)})},unregister(){Object.values(t).forEach(n=>{const o=this.matchHandlers[n];X(o==null?void 0:o.mql,o==null?void 0:o.listener)}),r.clear()}}},[e])};function K(){const[,e]=p.useReducer(t=>t+1,0);return e}function W(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=p.useRef(t),c=K(),s=T();return z(()=>{const n=s.subscribe(o=>{r.current=o,e&&c()});return()=>s.unsubscribe(n)},[]),r.current}function Y(e,t){const r=[void 0,void 0],c=Array.isArray(e)?e:[e,void 0],s=t||{xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0};return c.forEach((n,o)=>{if(typeof n=="object"&&n!==null)for(let l=0;l<j.length;l++){const a=j[l];if(s[a]&&n[a]!==void 0){r[o]=n[a];break}}else r[o]=n}),r}var Z=function(e,t){var r={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(r[c]=e[c]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,c=Object.getOwnPropertySymbols(e);s<c.length;s++)t.indexOf(c[s])<0&&Object.prototype.propertyIsEnumerable.call(e,c[s])&&(r[c[s]]=e[c[s]]);return r};function U(e,t){const[r,c]=p.useState(typeof e=="string"?e:""),s=()=>{if(typeof e=="string"&&c(e),typeof e=="object")for(let n=0;n<j.length;n++){const o=j[n];if(!t||!t[o])continue;const l=e[o];if(l!==void 0){c(l);return}}};return p.useEffect(()=>{s()},[JSON.stringify(e),t]),r}const q=p.forwardRef((e,t)=>{const{prefixCls:r,justify:c,align:s,className:n,style:o,children:l,gutter:a=0,wrap:d}=e,u=Z(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),{getPrefixCls:h,direction:y}=p.useContext(I),x=W(!0,null),v=U(s,x),b=U(c,x),m=h("row",r),[w,N,$]=G(m),f=Y(a,x),R=H(m,{[`${m}-no-wrap`]:d===!1,[`${m}-${b}`]:b,[`${m}-${v}`]:v,[`${m}-rtl`]:y==="rtl"},n,N,$),C={},M=f[0]!=null&&f[0]>0?f[0]/-2:void 0;M&&(C.marginLeft=M,C.marginRight=M);const[S,L]=f;C.rowGap=L;const A=p.useMemo(()=>({gutter:[S,L],wrap:d}),[S,L,d]);return w(p.createElement(P.Provider,{value:A},p.createElement("div",Object.assign({},u,{className:R,style:Object.assign(Object.assign({},C),o),ref:t}),l)))}),ee=({description:e})=>{const[t,r]=p.useState(!0),[c,s]=p.useState([]),n=V(),o=async()=>{const d=`https://tr3yh6z2.api.sanity.io/v1/data/query/production?query=${encodeURIComponent(`*[_type == "leader"] {
      _id,
      name,
      image {
        asset -> {
          url
        }
      },
      designation,
      guid
    }`)}`,u=await fetch(d).then(h=>h.json());u!=null&&u.result&&(console.log(u==null?void 0:u.result),s(u==null?void 0:u.result))};p.useEffect(()=>{e&&r(!1),o()},[e]);const l=a=>{n(`/about-us/leaders/${a.guid}`)};return i.jsxs("div",{className:"aboutusleadership-container",children:[i.jsxs("div",{className:"aboutusleadership-title",children:["Our ",i.jsx("span",{children:"Leadership"})]}),i.jsx("div",{className:"aboutusleadership-description",children:t?i.jsx(g,{active:!0,paragraph:{rows:2}}):e||"No leadership description available."}),i.jsx("div",{className:"aboutusleadership-leaders",children:t?i.jsx("div",{className:"aboutusleadership-leaders-skeleton",children:[...Array(3)].map((a,d)=>i.jsx("div",{className:"aboutusleadership-leader-card-skeleton",children:i.jsx(g,{loading:!0,avatar:!0,paragraph:{rows:2}})},d))}):i.jsx("div",{className:"aboutusleadership-leaders-row",children:c.length?c.map((a,d)=>i.jsx("div",{className:"aboutusleadership-leader-card",children:i.jsx(O,{hoverable:!0,cover:i.jsx("img",{className:"aboutusleadership-leader-image",alt:a.name,src:a.image.asset.url}),onClick:()=>l(a),children:i.jsx(_,{title:a.name||"No Name",description:`${a.designation||"No Designation"}`})})},d)):i.jsx("p",{children:"No leaders available"})})})]})},se=({vision:e,mission:t})=>{const r=!e||!t;return i.jsx("div",{className:"about-us-section",children:i.jsxs(q,{gutter:[16,16],children:[i.jsx(E,{xs:24,sm:12,children:i.jsxs(O,{hoverable:!0,cover:r?i.jsx(g.Image,{active:!0,style:{width:"100%",height:"50vh"}}):i.jsx("img",{alt:"Vision",src:e.image.src,className:"card-image"}),children:[i.jsxs("div",{className:"card-title-wrapper",children:[i.jsx("div",{className:"line"}),i.jsx("h3",{className:"card-title",style:{color:"var(--orange)"},children:r?i.jsx(g.Input,{active:!0,size:"small",style:{width:100}}):"Vision"}),i.jsx("div",{className:"line"})]}),i.jsx("p",{style:{lineHeight:"27px",fontSize:"15px",fontFamily:"Raleway"},children:r?i.jsx(g,{paragraph:{rows:2},active:!0}):e.description})]})}),i.jsx(E,{xs:24,sm:12,children:i.jsxs(O,{hoverable:!0,cover:r?i.jsx(g.Image,{active:!0,style:{width:"100%",height:"50vh"}}):i.jsx("img",{alt:"Mission",src:t.image.src,className:"card-image"}),children:[i.jsxs("div",{className:"card-title-wrapper",children:[i.jsx("div",{className:"line"}),i.jsx("h3",{className:"card-title",style:{color:"teal"},children:r?i.jsx(g.Input,{active:!0,size:"small",style:{width:100}}):"Mission"}),i.jsx("div",{className:"line"})]}),i.jsx("p",{style:{lineHeight:"27px",fontSize:"15px",fontFamily:"Raleway"},children:r?i.jsx(g,{paragraph:{rows:2},active:!0}):t.description})]})})]})})},ce=()=>{const[e,t]=p.useState(null),r=async()=>{const n=`https://tr3yh6z2.api.sanity.io/v1/data/query/production?query=${encodeURIComponent(`*[_type == "aboutUs"][0] {
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
    }`)}`,o=await fetch(n).then(l=>l.json());o!=null&&o.result&&t(c(o.result))},c=s=>{var n,o,l,a,d,u,h,y,x,v,b,m,w,N,$,f;return{title:(s==null?void 0:s.title)||"No Title",image:{src:((o=(n=s==null?void 0:s.image)==null?void 0:n.asset)==null?void 0:o.url)||"",description:((l=s==null?void 0:s.image)==null?void 0:l.imageDescription)||"No description available"},description:(s==null?void 0:s.description)||"No description available",vision:{image:{src:((u=(d=(a=s==null?void 0:s.vision)==null?void 0:a.image)==null?void 0:d.asset)==null?void 0:u.url)||"",description:((y=(h=s==null?void 0:s.vision)==null?void 0:h.image)==null?void 0:y.imageDescription)||"No image description"},description:((x=s==null?void 0:s.vision)==null?void 0:x.description)||"No description available"},mission:{image:{src:((m=(b=(v=s==null?void 0:s.mission)==null?void 0:v.image)==null?void 0:b.asset)==null?void 0:m.url)||"",description:((N=(w=s==null?void 0:s.mission)==null?void 0:w.image)==null?void 0:N.imageDescription)||"No image description"},description:(($=s==null?void 0:s.mission)==null?void 0:$.description)||"No description available"},leadership:{description:((f=s==null?void 0:s.leadership)==null?void 0:f.description)||"No leadership description available"}}};return p.useEffect(()=>{document.title="About Us | Corpus Life Science",r()},[]),i.jsx("div",{className:"aboutuspage-container",children:e?i.jsxs(i.Fragment,{children:[i.jsx(B,{image:e.image,title:"About us"}),i.jsx("div",{className:"about-us-page-description",children:e.description}),i.jsx(se,{vision:e.vision,mission:e.mission}),i.jsx(ee,{description:e.leadership.description})]}):i.jsx("p",{children:"Loading..."})})};export{ce as default};
