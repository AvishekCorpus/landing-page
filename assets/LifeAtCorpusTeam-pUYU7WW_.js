import{r,j as s,P as z}from"./index-BSgo2x5x.js";import{C as W,G as q,a as P}from"./index-C9TSyrD-.js";import"./ResizeObserver.es-B1PUzC5B.js";const b=()=>{const[o,v]=r.useState([]),[a,S]=r.useState({image:"",description:""}),[y,I]=r.useState(""),[T,i]=r.useState(4),[E,n]=r.useState(300),m=()=>{const t=window.innerWidth;t<=480?i(1):t<=768?i(2):t<=1024?i(3):i(4)},c=()=>{const t=window.innerWidth;t>=1200||t>=768,n(240)};r.useEffect(()=>(L(),m(),c(),window.addEventListener("resize",m),window.addEventListener("resize",c),()=>{window.removeEventListener("resize",m),window.removeEventListener("resize",c)}),[]);const U=({onClick:t})=>s.jsx("div",{className:"custom-arrow custom-prev",onClick:t,children:s.jsx(P,{})}),A=({onClick:t})=>s.jsx("div",{className:"custom-arrow custom-next",onClick:t,children:s.jsx(q,{})}),L=async()=>{var l,u,p,g,w,h,x,f,C,j;const d=`https://tr3yh6z2.api.sanity.io/v1/data/query/production?query=${encodeURIComponent(`*[_type == "lifeAtCorpus"][0] {
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
    }`)}`,e=await fetch(d).then(N=>N.json());console.log(e==null?void 0:e.result),I((p=(u=(l=e==null?void 0:e.result)==null?void 0:l.teamCorpus)==null?void 0:u.mainImage)==null?void 0:p.imageUrl),v((w=(g=e==null?void 0:e.result)==null?void 0:g.teamCorpus)==null?void 0:w.teamMembers),S({image:(f=(x=(h=e==null?void 0:e.result)==null?void 0:h.teamCorpus)==null?void 0:x.pageImage)==null?void 0:f.imageUrl,description:(j=(C=e==null?void 0:e.result)==null?void 0:C.teamCorpus)==null?void 0:j.pageImageDescription})};return s.jsxs("div",{children:[s.jsx(z,{title:"Team Corpus",image:{description:a==null?void 0:a.description,src:a==null?void 0:a.image}}),s.jsx("div",{className:"teamcorpus-main-image",children:s.jsx("img",{src:y})}),s.jsx(W,{className:"carousel-container",arrows:!0,infinite:!0,prevArrow:s.jsx(U,{}),nextArrow:s.jsx(A,{}),dots:!1,autoplay:!0,autoplaySpeed:3e3,slidesToShow:T,slidesToScroll:1,children:o==null?void 0:o.map((t,d)=>s.jsx("div",{className:"featured-card",children:s.jsx("img",{style:{width:E,margin:"0 auto"},src:t.imageUrl})},d))})]})};export{b as default};
