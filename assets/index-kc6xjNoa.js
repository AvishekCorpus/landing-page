import{r as a,j as e,Z as E,P}from"./index-CEgSly4K.js";import{C as y,G as S,a as W}from"./index-DVQ-qeZ7.js";import{C as v}from"./index-MBCpGNzC.js";import{C as T}from"./col-Ds-i2w3q.js";import"./ResizeObserver.es-B1PUzC5B.js";import"./useVariants-Cnv_X3xN.js";const N=({policies:o})=>{const[p,t]=a.useState(5),[u,r]=a.useState(300),h=({onClick:s})=>e.jsx("div",{className:"custom-arrow custom-prev",onClick:s,children:e.jsx(W,{})}),n=({onClick:s})=>e.jsx("div",{className:"custom-arrow custom-next",onClick:s,children:e.jsx(S,{})}),l=()=>{const s=window.innerWidth;s<=480?t(1):s<=768?t(2):s<=1024?t(3):t(4)},c=()=>{const s=window.innerWidth;s>=1200||s>=768,r(240)};return a.useEffect(()=>(l(),c(),window.addEventListener("resize",l),window.addEventListener("resize",c),()=>{window.removeEventListener("resize",l),window.removeEventListener("resize",c)}),[]),e.jsx(y,{className:"carousel-container",arrows:!0,infinite:!0,prevArrow:e.jsx(h,{}),nextArrow:e.jsx(n,{}),dots:!1,autoplay:!0,autoplaySpeed:3e3,slidesToShow:p,slidesToScroll:1,children:o==null?void 0:o.map((s,d)=>e.jsx("div",{className:"policy-card",children:e.jsx(v,{hoverable:!0,cover:e.jsx("img",{alt:"example",src:s.image.imageUrl}),style:{width:u,margin:"0 auto"},children:e.jsxs("div",{className:"product-division",children:[e.jsx("div",{style:{fontSize:"1.2rem",color:"var(--orange)",fontWeight:500},children:s.title}),e.jsx("div",{style:{fontSize:"0.8rem",color:"gray",fontWeight:400},children:s.description})]})})},d))})},U=({imageSrc:o,description:p,title:t})=>e.jsx("div",{style:{padding:"20px"},children:e.jsx(T,{xs:24,sm:12,children:e.jsxs(v,{hoverable:!0,cover:e.jsx("img",{alt:"Vision",src:o,className:"card-image"}),children:[e.jsxs("div",{className:"card-title-wrapper",children:[e.jsx("div",{className:"line"}),e.jsx("h3",{className:"card-title",style:{fontSize:"1.1rem",color:"var(--orange)"},children:t}),e.jsx("div",{className:"line"})]}),e.jsx("p",{className:"",children:p})]})})}),I=({section:o})=>{const[p,t]=a.useState(5),[u,r]=a.useState(300),h=({onClick:s})=>e.jsx("div",{className:"custom-arrow custom-prev",onClick:s,children:e.jsx(W,{})}),n=({onClick:s})=>e.jsx("div",{className:"custom-arrow custom-next",onClick:s,children:e.jsx(S,{})}),l=()=>{const s=window.innerWidth;s<=480?t(1):s<=768?t(2):s<=1024?t(3):t(4)},c=()=>{const s=window.innerWidth;s>=1200||s>=768,r(240)};return a.useEffect(()=>(l(),c(),window.addEventListener("resize",l),window.addEventListener("resize",c),()=>{window.removeEventListener("resize",l),window.removeEventListener("resize",c)}),[]),e.jsx(y,{className:"carousel-container",arrows:!0,infinite:!0,prevArrow:e.jsx(h,{}),nextArrow:e.jsx(n,{}),dots:!1,autoplay:!0,autoplaySpeed:3e3,slidesToShow:p,slidesToScroll:1,children:o==null?void 0:o.map((s,d)=>e.jsx("div",{className:"policy-card",children:e.jsx(v,{hoverable:!0,cover:e.jsx("img",{alt:"example",src:s.image.imageUrl}),style:{width:u,margin:"0 auto"},children:e.jsxs("div",{className:"product-division",children:[e.jsx("div",{style:{fontSize:"1.2rem",color:"var(--orange)",fontWeight:500},children:s.title}),e.jsx("div",{style:{fontSize:"0.8rem",color:"gray",fontWeight:400},children:s.description})]})})},d))})},O=()=>{var f,j;const[o,p]=a.useState({image:"",description:""}),[t,u]=a.useState(""),[r,h]=a.useState({sectionHeading:"",sectionDescription:"",rewardCards:[]}),[n,l]=a.useState({policyDescription:"",policyCards:[]}),[c,s]=a.useState({description:"",cards:[]}),[d,D]=a.useState({description:"",cards:[]}),z=E(),A=async()=>{var w,C;const g=`https://tr3yh6z2.api.sanity.io/v1/data/query/production?query=${encodeURIComponent(`*[_type == "lifeAtCorpus"][0] {
      lifeAtCorpusPage {
        pageImage {
          "imageUrl": asset->url,
        },
        pageImageDescription,
        teamCorpusDescription,
        workWithUsDescription,
        rewardsAndRecognition {
          sectionHeading,
          sectionDescription,
          rewardCards[] {
            title,
            description,
            image {
              "imageUrl": asset->url
            }
          }
        },
        policy {
          policyDescription,
          policyCards[] {
            title,
            description,
            image {
              "imageUrl": asset->url
            }
          }
        },
        inspiringPioneers {
          description,
          cards[] {
            title,
            description,
            image {
              "imageUrl": asset->url
            }
          }
        },
        ourCultures {
          description,
          cards[] {
            title,
            description,
            image {
              "imageUrl": asset->url
            }
          }
        }
      }
    }`)}`,m=await fetch(g).then(L=>L.json()),i=(w=m==null?void 0:m.result)==null?void 0:w.lifeAtCorpusPage;p({image:(C=i==null?void 0:i.pageImage)==null?void 0:C.imageUrl,description:i==null?void 0:i.pageImageDescription}),u(i==null?void 0:i.teamCorpusDescription),h(i==null?void 0:i.rewardsAndRecognition),l(i==null?void 0:i.policy),s(i==null?void 0:i.inspiringPioneers),D(i==null?void 0:i.ourCultures)};return a.useEffect(()=>{document.title="Life at Corpus | Corpus Life Science",A()},[]),e.jsxs("div",{children:[e.jsx(P,{title:"Life at Corpus",image:{description:o.description,src:o.image}}),e.jsxs("div",{className:"lifeatcorpus-teamcorpus",children:[e.jsx("div",{className:"lifeatcorpus-heading",children:"Team Corpus"}),e.jsx("div",{className:"lifeatcorpus-description",children:t}),e.jsx("div",{className:"lifeatcorpus-action",children:e.jsx("button",{onClick:()=>{z("/life-at-corpus/team")},children:"Know more"})})]}),e.jsxs("div",{className:"lifeatcorpus-rewards",children:[e.jsx("div",{className:"lifeatcorpus-heading",children:"Rewards & recognition"}),e.jsx("div",{className:"lifeatcorpus-description",children:r==null?void 0:r.sectionDescription}),e.jsx("div",{className:"lifeatcorpus-rewardcards",children:(j=(f=r==null?void 0:r.rewardCards)==null?void 0:f.slice(0,2))==null?void 0:j.map((x,g)=>{var m;return e.jsx(U,{description:x.description,title:x.title,imageSrc:(m=x.image)==null?void 0:m.imageUrl},g)})})]}),e.jsxs("div",{className:"lifeatcorpus-policies",children:[e.jsxs("div",{className:"lifeatcorpus-policies-header",children:[e.jsx("div",{className:"lifeatcorpus-policies-title",children:e.jsx("div",{className:"lifeatcorpus-heading",children:"Leadership talks"})}),e.jsx("div",{className:"lifeatcorpus-description",style:{fontWeight:"bold"},children:n==null?void 0:n.policyDescription})]}),e.jsx(N,{policies:n==null?void 0:n.policyCards})]}),e.jsxs("div",{className:"lifeatcorpus-policies",children:[e.jsxs("div",{className:"lifeatcorpus-policies-header",children:[e.jsx("div",{className:"lifeatcorpus-policies-title",children:e.jsx("div",{className:"lifeatcorpus-heading",children:"Inspiring Pioneers"})}),e.jsx("div",{className:"lifeatcorpus-description",style:{fontWeight:"bold"},children:c.description||"Inspiring Pioneers"})]}),e.jsx(I,{section:c==null?void 0:c.cards})]}),e.jsxs("div",{className:"lifeatcorpus-policies",children:[e.jsxs("div",{className:"lifeatcorpus-policies-header",children:[e.jsx("div",{className:"lifeatcorpus-policies-title",children:e.jsx("div",{className:"lifeatcorpus-heading",children:"Our Culture"})}),e.jsx("div",{className:"lifeatcorpus-description",style:{fontWeight:"bold"},children:(d==null?void 0:d.description)||"Our Culture"})]}),e.jsx(N,{policies:d.cards})]})]})};export{O as default};
