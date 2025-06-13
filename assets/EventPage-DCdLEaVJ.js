import{r as m,j as e,P as g}from"./index-BEVS6Hdy.js";import{C as v,G as h,a as j}from"./index-CE_UOgY7.js";import{C as f}from"./index-Cwp9NBRZ.js";import"./ResizeObserver.es-B1PUzC5B.js";import"./useVariants-D9jzTGLW.js";const E=()=>{var n,a,c,l;const[s,d]=m.useState(),p=({onClick:t})=>e.jsx("div",{className:"custom-arrow custom-prev",onClick:t,children:e.jsx(j,{})}),u=({onClick:t})=>e.jsx("div",{className:"custom-arrow custom-next",onClick:t,children:e.jsx(h,{})}),x=async()=>{const o=`https://tr3yh6z2.api.sanity.io/v1/data/query/production?query=${encodeURIComponent(`*[_type == "event"][0] {
      title,
      image {
        asset -> {
          url
        },
        imageDescription
      },
      description,
       eventArray[] {
        title,
        image {
          asset -> {
            url
          },
          imageDescription
        },
        description
      }
    }`)}`,i=await fetch(o).then(r=>r.json());d(i==null?void 0:i.result)};return m.useEffect(()=>{document.title="Events | Corpus Life Science",x()},[]),e.jsxs("div",{className:"eventpage-container",children:[e.jsx(g,{image:{src:(a=(n=s==null?void 0:s.image)==null?void 0:n.asset)==null?void 0:a.url,description:(c=s==null?void 0:s.image)==null?void 0:c.imageDescription},title:"Events"}),e.jsx("div",{className:"eventpagedata-description",children:s==null?void 0:s.description}),e.jsx("div",{children:e.jsx(v,{className:"carousel-container",arrows:!0,infinite:!0,prevArrow:e.jsx(p,{}),nextArrow:e.jsx(u,{}),dots:!1,autoplay:!0,autoplaySpeed:3e3,slidesToShow:1,slidesToScroll:1,children:(l=s==null?void 0:s.eventArray)==null?void 0:l.map((t,o)=>{var i,r;return e.jsx("div",{className:"event-card",children:e.jsxs(f,{hoverable:!0,cover:e.jsx("img",{alt:"example",src:(r=(i=t==null?void 0:t.image)==null?void 0:i.asset)==null?void 0:r.url}),style:{margin:"0 auto"},children:[e.jsxs("div",{className:"event-division",children:[e.jsx("div",{className:"event-line"}),e.jsx("div",{style:{flex:.7,fontSize:"1.8rem",color:"var(--orange)",fontWeight:500,width:"fit-content"},children:t.title}),e.jsx("div",{className:"event-line"})]}),e.jsx("div",{style:{color:"gray",fontWeight:400,textAlign:"center",lineHeight:"30px"},children:t.description})]})},o)})})})]})};export{E as default};
