import{r as a,j as s,P as z}from"./index-BEVS6Hdy.js";import{C as W,G as q,a as P}from"./index-CE_UOgY7.js";import"./ResizeObserver.es-B1PUzC5B.js";const b=()=>{const[o,v]=a.useState(),[r,S]=a.useState({image:"",description:""}),[y,I]=a.useState(""),[T,i]=a.useState(4),[E,n]=a.useState(300),m=()=>{const e=window.innerWidth;e<=480?i(1):e<=768?i(2):e<=1024?i(3):i(4)},d=()=>{const e=window.innerWidth;e>=1200||e>=768,n(240)};a.useEffect(()=>(L(),m(),d(),window.addEventListener("resize",m),window.addEventListener("resize",d),()=>{window.removeEventListener("resize",m),window.removeEventListener("resize",d)}),[]);const U=({onClick:e})=>s.jsx("div",{className:"custom-arrow custom-prev",onClick:e,children:s.jsx(P,{})}),A=({onClick:e})=>s.jsx("div",{className:"custom-arrow custom-next",onClick:e,children:s.jsx(q,{})}),L=async()=>{var u,l,p,g,w,h,x,f,C,j;const c=`https://tr3yh6z2.api.sanity.io/v1/data/query/production?query=${encodeURIComponent(`*[_type == "lifeAtCorpus"][0] {
      teamCorpus {
        mainImage {
          "imageUrl": asset->url,
        },
        pageImage {
          "imageUrl": asset->url,
        },
        pageImageDescription,
        teamMembers[]{
        "imageUrl": asset->url,
        }
      }
    }`)}`,t=await fetch(c).then(N=>N.json());I((p=(l=(u=t==null?void 0:t.result)==null?void 0:u.teamCorpus)==null?void 0:l.mainImage)==null?void 0:p.imageUrl),v((w=(g=t==null?void 0:t.result)==null?void 0:g.teamCorpus)==null?void 0:w.teamMembers),S({image:(f=(x=(h=t==null?void 0:t.result)==null?void 0:h.teamCorpus)==null?void 0:x.pageImage)==null?void 0:f.imageUrl,description:(j=(C=t==null?void 0:t.result)==null?void 0:C.teamCorpus)==null?void 0:j.pageImageDescription})};return s.jsxs("div",{children:[s.jsx(z,{title:"Team Corpus",image:{description:r==null?void 0:r.description,src:r==null?void 0:r.image}}),s.jsx("div",{className:"teamcorpus-main-image",children:s.jsx("img",{src:y})}),s.jsx(W,{className:"carousel-container",arrows:!0,infinite:!0,prevArrow:s.jsx(U,{}),nextArrow:s.jsx(A,{}),dots:!1,autoplay:!0,autoplaySpeed:3e3,slidesToShow:T,slidesToScroll:1,children:o==null?void 0:o.map((e,c)=>s.jsx("div",{className:"featured-card",children:s.jsx("img",{style:{width:E,margin:"0 auto"},src:e.imageUrl})},c))})]})};export{b as default};
