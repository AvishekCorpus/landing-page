import{u as D,R as z,r as p,a as k,C as H,c as I,j as o,S as x,P as V}from"./index-CEgSly4K.js";import{u as B,R as G,C as S}from"./col-Ds-i2w3q.js";import{C as L}from"./index-MBCpGNzC.js";import"./useVariants-Cnv_X3xN.js";import"./ResizeObserver.es-B1PUzC5B.js";const P=(e,i)=>{typeof(e==null?void 0:e.addEventListener)<"u"?e.addEventListener("change",i):typeof(e==null?void 0:e.addListener)<"u"&&e.addListener(i)},F=(e,i)=>{typeof(e==null?void 0:e.removeEventListener)<"u"?e.removeEventListener("change",i):typeof(e==null?void 0:e.removeListener)<"u"&&e.removeListener(i)},b=["xxl","xl","lg","md","sm","xs"],X=e=>({xs:`(max-width: ${e.screenXSMax}px)`,sm:`(min-width: ${e.screenSM}px)`,md:`(min-width: ${e.screenMD}px)`,lg:`(min-width: ${e.screenLG}px)`,xl:`(min-width: ${e.screenXL}px)`,xxl:`(min-width: ${e.screenXXL}px)`}),J=e=>{const i=e,t=[].concat(b).reverse();return t.forEach((c,s)=>{const r=c.toUpperCase(),n=`screen${r}Min`,l=`screen${r}`;if(!(i[n]<=i[l]))throw new Error(`${n}<=${l} fails : !(${i[n]}<=${i[l]})`);if(s<t.length-1){const a=`screen${r}Max`;if(!(i[l]<=i[a]))throw new Error(`${l}<=${a} fails : !(${i[l]}<=${i[a]})`);const d=`screen${t[s+1].toUpperCase()}Min`;if(!(i[a]<=i[d]))throw new Error(`${a}<=${d} fails : !(${i[a]}<=${i[d]})`)}}),e},Q=()=>{const[,e]=D(),i=X(J(e));return z.useMemo(()=>{const t=new Map;let c=-1,s={};return{responsiveMap:i,matchHandlers:{},dispatch(r){return s=r,t.forEach(n=>n(s)),t.size>=1},subscribe(r){return t.size||this.register(),c+=1,t.set(c,r),r(s),c},unsubscribe(r){t.delete(r),t.size||this.unregister()},register(){Object.entries(i).forEach(r=>{let[n,l]=r;const a=d=>{let{matches:g}=d;this.dispatch(Object.assign(Object.assign({},s),{[n]:g}))},u=window.matchMedia(l);P(u,a),this.matchHandlers[l]={mql:u,listener:a},a(u)})},unregister(){Object.values(i).forEach(r=>{const n=this.matchHandlers[r];F(n==null?void 0:n.mql,n==null?void 0:n.listener)}),t.clear()}}},[e])};function T(){const[,e]=p.useReducer(i=>i+1,0);return e}function _(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const t=p.useRef(i),c=T(),s=Q();return k(()=>{const r=s.subscribe(n=>{t.current=n,e&&c()});return()=>s.unsubscribe(r)},[]),t.current}function K(e,i){const t=[void 0,void 0],c=Array.isArray(e)?e:[e,void 0],s=i||{xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0};return c.forEach((r,n)=>{if(typeof r=="object"&&r!==null)for(let l=0;l<b.length;l++){const a=b[l];if(s[a]&&r[a]!==void 0){t[n]=r[a];break}}else t[n]=r}),t}var W=function(e,i){var t={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&i.indexOf(c)<0&&(t[c]=e[c]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,c=Object.getOwnPropertySymbols(e);s<c.length;s++)i.indexOf(c[s])<0&&Object.prototype.propertyIsEnumerable.call(e,c[s])&&(t[c[s]]=e[c[s]]);return t};function U(e,i){const[t,c]=p.useState(typeof e=="string"?e:""),s=()=>{if(typeof e=="string"&&c(e),typeof e=="object")for(let r=0;r<b.length;r++){const n=b[r];if(!i||!i[n])continue;const l=e[n];if(l!==void 0){c(l);return}}};return p.useEffect(()=>{s()},[JSON.stringify(e),i]),t}const Y=p.forwardRef((e,i)=>{const{prefixCls:t,justify:c,align:s,className:r,style:n,children:l,gutter:a=0,wrap:u}=e,d=W(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),{getPrefixCls:g,direction:j}=p.useContext(H),h=_(!0,null),v=U(s,h),y=U(c,h),m=g("row",t),[w,$,N]=B(m),f=K(a,h),R=I(m,{[`${m}-no-wrap`]:u===!1,[`${m}-${y}`]:y,[`${m}-${v}`]:v,[`${m}-rtl`]:j==="rtl"},r,$,N),M={},C=f[0]!=null&&f[0]>0?f[0]/-2:void 0;C&&(M.marginLeft=C,M.marginRight=C);const[E,O]=f;M.rowGap=O;const A=p.useMemo(()=>({gutter:[E,O],wrap:u}),[E,O,u]);return w(p.createElement(G.Provider,{value:A},p.createElement("div",Object.assign({},d,{className:R,style:Object.assign(Object.assign({},M),n),ref:i}),l)))}),Z=({vision:e,mission:i})=>{const t=!e||!i;return o.jsx("div",{className:"about-us-section",children:o.jsxs(Y,{gutter:[16,16],children:[o.jsx(S,{xs:24,sm:12,children:o.jsxs(L,{hoverable:!0,cover:t?o.jsx(x.Image,{active:!0,style:{width:"100%",height:"50vh"}}):o.jsx("img",{alt:"Vision",src:e.image.src,className:"card-image"}),children:[o.jsxs("div",{className:"card-title-wrapper",children:[o.jsx("div",{className:"line"}),o.jsx("h3",{className:"card-title",style:{color:"var(--orange)"},children:t?o.jsx(x.Input,{active:!0,size:"small",style:{width:100}}):"Vision"}),o.jsx("div",{className:"line"})]}),o.jsx("p",{style:{lineHeight:"27px",fontSize:"15px",fontFamily:"Raleway"},children:t?o.jsx(x,{paragraph:{rows:2},active:!0}):e.description})]})}),o.jsx(S,{xs:24,sm:12,children:o.jsxs(L,{hoverable:!0,cover:t?o.jsx(x.Image,{active:!0,style:{width:"100%",height:"50vh"}}):o.jsx("img",{alt:"Mission",src:i.image.src,className:"card-image"}),children:[o.jsxs("div",{className:"card-title-wrapper",children:[o.jsx("div",{className:"line"}),o.jsx("h3",{className:"card-title",style:{color:"teal"},children:t?o.jsx(x.Input,{active:!0,size:"small",style:{width:100}}):"Mission"}),o.jsx("div",{className:"line"})]}),o.jsx("p",{style:{lineHeight:"27px",fontSize:"15px",fontFamily:"Raleway"},children:t?o.jsx(x,{paragraph:{rows:2},active:!0}):i.description})]})})]})})},re=()=>{const[e,i]=p.useState(null),t=async()=>{const r=`https://tr3yh6z2.api.sanity.io/v1/data/query/production?query=${encodeURIComponent(`*[_type == "aboutUs"][0] {
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
    }`)}`,n=await fetch(r).then(l=>l.json());n!=null&&n.result&&i(c(n.result))},c=s=>{var r,n,l,a,u,d,g,j,h,v,y,m,w,$,N,f;return{title:(s==null?void 0:s.title)||"No Title",image:{src:((n=(r=s==null?void 0:s.image)==null?void 0:r.asset)==null?void 0:n.url)||"",description:((l=s==null?void 0:s.image)==null?void 0:l.imageDescription)||"No description available"},description:(s==null?void 0:s.description)||"No description available",vision:{image:{src:((d=(u=(a=s==null?void 0:s.vision)==null?void 0:a.image)==null?void 0:u.asset)==null?void 0:d.url)||"",description:((j=(g=s==null?void 0:s.vision)==null?void 0:g.image)==null?void 0:j.imageDescription)||"No image description"},description:((h=s==null?void 0:s.vision)==null?void 0:h.description)||"No description available"},mission:{image:{src:((m=(y=(v=s==null?void 0:s.mission)==null?void 0:v.image)==null?void 0:y.asset)==null?void 0:m.url)||"",description:(($=(w=s==null?void 0:s.mission)==null?void 0:w.image)==null?void 0:$.imageDescription)||"No image description"},description:((N=s==null?void 0:s.mission)==null?void 0:N.description)||"No description available"},leadership:{description:((f=s==null?void 0:s.leadership)==null?void 0:f.description)||"No leadership description available"}}};return p.useEffect(()=>{document.title="About Us | Corpus Life Science",t()},[]),o.jsx("div",{className:"aboutuspage-container",children:e?o.jsxs(o.Fragment,{children:[o.jsx(V,{image:e.image,title:"About us"}),o.jsx("div",{className:"about-us-page-description",children:e.description}),o.jsx(Z,{vision:e.vision,mission:e.mission})]}):o.jsx("p",{children:"Loading..."})})};export{re as default};
