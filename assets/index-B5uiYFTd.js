import{r as o,j as e,Z as L,P as E}from"./index-DfNNJleS.js";import{C as y,G as S,a as W}from"./index-CQrgcIJR.js";import{C as v}from"./index-utLsOLZ_.js";import{C as T}from"./col-2QMw6-0S.js";import"./ResizeObserver.es-B1PUzC5B.js";import"./useVariants-rWG0T-Vj.js";const N=({policies:t})=>{const[m,a]=o.useState(5),[u,r]=o.useState(300),h=({onClick:s})=>e.jsx("div",{className:"custom-arrow custom-prev",onClick:s,children:e.jsx(W,{})}),n=({onClick:s})=>e.jsx("div",{className:"custom-arrow custom-next",onClick:s,children:e.jsx(S,{})}),l=()=>{const s=window.innerWidth;s<=480?a(1):s<=768?a(2):s<=1024?a(3):a(4)},c=()=>{const s=window.innerWidth;s>=1200||s>=768,r(240)};return o.useEffect(()=>(l(),c(),window.addEventListener("resize",l),window.addEventListener("resize",c),()=>{window.removeEventListener("resize",l),window.removeEventListener("resize",c)}),[]),e.jsx(y,{className:"carousel-container",arrows:!0,infinite:!0,prevArrow:e.jsx(h,{}),nextArrow:e.jsx(n,{}),dots:!1,autoplay:!0,autoplaySpeed:3e3,slidesToShow:m,slidesToScroll:1,children:t==null?void 0:t.map((s,p)=>e.jsx("div",{className:"policy-card",children:e.jsx(v,{hoverable:!0,cover:e.jsx("img",{alt:"example",src:s.image.imageUrl}),style:{width:u,margin:"0 auto"},children:e.jsxs("div",{className:"product-division",children:[e.jsx("div",{style:{fontSize:"1.2rem",color:"var(--orange)",fontWeight:500},children:s.title}),e.jsx("div",{style:{fontSize:"0.8rem",color:"gray",fontWeight:400},children:s.description})]})})},p))})},U=({imageSrc:t,description:m,title:a})=>e.jsx("div",{style:{padding:"20px"},children:e.jsx(T,{xs:24,sm:12,children:e.jsxs(v,{hoverable:!0,cover:e.jsx("img",{alt:"Vision",src:t,className:"card-image"}),children:[e.jsxs("div",{className:"card-title-wrapper",children:[e.jsx("div",{className:"line"}),e.jsx("h3",{className:"card-title",style:{fontSize:"1.1rem",color:"var(--orange)"},children:a}),e.jsx("div",{className:"line"})]}),e.jsx("p",{className:"",children:m})]})})}),I=({section:t})=>{const[m,a]=o.useState(5),[u,r]=o.useState(300),h=({onClick:s})=>e.jsx("div",{className:"custom-arrow custom-prev",onClick:s,children:e.jsx(W,{})}),n=({onClick:s})=>e.jsx("div",{className:"custom-arrow custom-next",onClick:s,children:e.jsx(S,{})}),l=()=>{const s=window.innerWidth;s<=480?a(1):s<=768?a(2):s<=1024?a(3):a(4)},c=()=>{const s=window.innerWidth;s>=1200||s>=768,r(240)};return o.useEffect(()=>(console.log(t),l(),c(),window.addEventListener("resize",l),window.addEventListener("resize",c),()=>{window.removeEventListener("resize",l),window.removeEventListener("resize",c)}),[]),e.jsx(y,{className:"carousel-container",arrows:!0,infinite:!0,prevArrow:e.jsx(h,{}),nextArrow:e.jsx(n,{}),dots:!1,autoplay:!0,autoplaySpeed:3e3,slidesToShow:m,slidesToScroll:1,children:t==null?void 0:t.map((s,p)=>e.jsx("div",{className:"policy-card",children:e.jsx(v,{hoverable:!0,cover:e.jsx("img",{alt:"example",src:s.image.imageUrl}),style:{width:u,margin:"0 auto"},children:e.jsxs("div",{className:"product-division",children:[e.jsx("div",{style:{fontSize:"1.2rem",color:"var(--orange)",fontWeight:500},children:s.title}),e.jsx("div",{style:{fontSize:"0.8rem",color:"gray",fontWeight:400},children:s.description})]})})},p))})},H=()=>{var f,j;const[t,m]=o.useState({image:"",description:""}),[a,u]=o.useState(""),[r,h]=o.useState({sectionHeading:"",sectionDescription:"",rewardCards:[]}),[n,l]=o.useState({policyDescription:"",policyCards:[]}),[c,s]=o.useState({description:"",cards:[]}),[p,D]=o.useState({description:"",cards:[]}),P=L(),z=async()=>{var w,C;const x=`https://tr3yh6z2.api.sanity.io/v1/data/query/production?query=${encodeURIComponent(`*[_type == "lifeAtCorpus"][0] {
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
    }`)}`,d=await fetch(x).then(A=>A.json()),i=(w=d==null?void 0:d.result)==null?void 0:w.lifeAtCorpusPage;console.log(d==null?void 0:d.result),m({image:(C=i==null?void 0:i.pageImage)==null?void 0:C.imageUrl,description:i==null?void 0:i.pageImageDescription}),u(i==null?void 0:i.teamCorpusDescription),h(i==null?void 0:i.rewardsAndRecognition),l(i==null?void 0:i.policy),s(i==null?void 0:i.inspiringPioneers),console.log("Inspiring Pioneers",i==null?void 0:i.inspiringPioneers),console.log("Our Cultures",i==null?void 0:i.ourCultures),D(i==null?void 0:i.ourCultures)};return o.useEffect(()=>{document.title="Life at Corpus | Corpus Life Science",z()},[]),e.jsxs("div",{children:[e.jsx(E,{title:"Life at Corpus",image:{description:t.description,src:t.image}}),e.jsxs("div",{className:"lifeatcorpus-teamcorpus",children:[e.jsx("div",{className:"lifeatcorpus-heading",children:"Team Corpus"}),e.jsx("div",{className:"lifeatcorpus-description",children:a}),e.jsx("div",{className:"lifeatcorpus-action",children:e.jsx("button",{onClick:()=>{P("/life-at-corpus/team")},children:"Know more"})})]}),e.jsxs("div",{className:"lifeatcorpus-rewards",children:[e.jsx("div",{className:"lifeatcorpus-heading",children:"Rewards & recognition"}),e.jsx("div",{className:"lifeatcorpus-description",children:r==null?void 0:r.sectionDescription}),e.jsx("div",{className:"lifeatcorpus-rewardcards",children:(j=(f=r==null?void 0:r.rewardCards)==null?void 0:f.slice(0,2))==null?void 0:j.map((g,x)=>{var d;return e.jsx(U,{description:g.description,title:g.title,imageSrc:(d=g.image)==null?void 0:d.imageUrl},x)})})]}),e.jsxs("div",{className:"lifeatcorpus-policies",children:[e.jsxs("div",{className:"lifeatcorpus-policies-header",children:[e.jsx("div",{className:"lifeatcorpus-policies-title",children:e.jsx("div",{className:"lifeatcorpus-heading",children:"Leadership talks"})}),e.jsx("div",{className:"lifeatcorpus-description",style:{fontWeight:"bold"},children:n==null?void 0:n.policyDescription})]}),e.jsx(N,{policies:n==null?void 0:n.policyCards})]}),e.jsxs("div",{className:"lifeatcorpus-policies",children:[e.jsxs("div",{className:"lifeatcorpus-policies-header",children:[e.jsx("div",{className:"lifeatcorpus-policies-title",children:e.jsx("div",{className:"lifeatcorpus-heading",children:"Inspiring Pioneers"})}),e.jsx("div",{className:"lifeatcorpus-description",style:{fontWeight:"bold"},children:c.description||"Inspiring Pioneers"})]}),e.jsx(I,{section:c==null?void 0:c.cards})]}),e.jsxs("div",{className:"lifeatcorpus-policies",children:[e.jsxs("div",{className:"lifeatcorpus-policies-header",children:[e.jsx("div",{className:"lifeatcorpus-policies-title",children:e.jsx("div",{className:"lifeatcorpus-heading",children:"Our Culture"})}),e.jsx("div",{className:"lifeatcorpus-description",style:{fontWeight:"bold"},children:(p==null?void 0:p.description)||"Our Culture"})]}),e.jsx(N,{policies:p.cards})]})]})};export{H as default};
