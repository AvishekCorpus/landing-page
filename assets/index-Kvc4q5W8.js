import{r as t,j as e,Z as b,P as A}from"./index-CM4-WPge.js";import{C as P,G as W,a as z}from"./index-DuYMf1ur.js";import{C as y}from"./index-D3MtlbbA.js";import{C as E}from"./col-ViFT8BsW.js";import"./ResizeObserver.es-B1PUzC5B.js";import"./useVariants-Cj_mb5kz.js";const R=({policies:o})=>{const[p,c]=t.useState(5),[u,r]=t.useState(300),h=({onClick:s})=>e.jsx("div",{className:"custom-arrow custom-prev",onClick:s,children:e.jsx(z,{})}),n=({onClick:s})=>e.jsx("div",{className:"custom-arrow custom-next",onClick:s,children:e.jsx(W,{})}),m=()=>{const s=window.innerWidth;s<=480?c(1):s<=768?c(2):s<=1024?c(3):c(4)},a=()=>{const s=window.innerWidth;s>=1200||s>=768,r(240)};return t.useEffect(()=>(m(),a(),window.addEventListener("resize",m),window.addEventListener("resize",a),()=>{window.removeEventListener("resize",m),window.removeEventListener("resize",a)}),[]),e.jsx(P,{className:"carousel-container",arrows:!0,infinite:!0,prevArrow:e.jsx(h,{}),nextArrow:e.jsx(n,{}),dots:!1,autoplay:!0,autoplaySpeed:3e3,slidesToShow:p,slidesToScroll:1,children:o==null?void 0:o.map((s,l)=>e.jsx("div",{className:"policy-card",children:e.jsx(y,{hoverable:!0,cover:e.jsx("img",{alt:"example",src:s.image.imageUrl}),style:{width:u,margin:"0 auto"},children:e.jsxs("div",{className:"product-division",children:[e.jsx("div",{style:{fontSize:"1.2rem",color:"var(--orange)",fontWeight:500},children:s.title}),e.jsx("div",{style:{fontSize:"0.8rem",color:"gray",fontWeight:400},children:s.description})]})})},l))})},T=({imageSrc:o,description:p,title:c})=>e.jsx("div",{style:{padding:"20px"},children:e.jsx(E,{xs:24,sm:12,children:e.jsxs(y,{hoverable:!0,cover:e.jsx("img",{alt:"Vision",src:o,className:"card-image"}),children:[e.jsxs("div",{className:"card-title-wrapper",children:[e.jsx("div",{className:"line"}),e.jsx("h3",{className:"card-title",style:{fontSize:"1.1rem",color:"var(--orange)"},children:c}),e.jsx("div",{className:"line"})]}),e.jsx("p",{className:"",children:p})]})})}),B=()=>{var v,f,j,w;const[o,p]=t.useState({image:"",description:""}),[c,u]=t.useState(""),[r,h]=t.useState({sectionHeading:"",sectionDescription:"",rewardCards:[]}),[n,m]=t.useState({policyDescription:"",policyCards:[]}),[a,s]=t.useState({image:{imageUrl:""},description:""}),[l,D]=t.useState({image:{imageUrl:""},description:""}),S=b(),U=async()=>{var C,N;const x=`https://tr3yh6z2.api.sanity.io/v1/data/query/production?query=${encodeURIComponent(`*[_type == "lifeAtCorpus"][0] {
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
        inspiringPioneer {
          image {
              "imageUrl": asset->url
          },
          description
        },
        ourCulture {
          image {
              "imageUrl": asset->url
          },
          description
        }
      }
    }`)}`,d=await fetch(x).then(L=>L.json()),i=(C=d==null?void 0:d.result)==null?void 0:C.lifeAtCorpusPage;p({image:(N=i==null?void 0:i.pageImage)==null?void 0:N.imageUrl,description:i==null?void 0:i.pageImageDescription}),u(i==null?void 0:i.teamCorpusDescription),h(i==null?void 0:i.rewardsAndRecognition),m(i==null?void 0:i.policy),s(i==null?void 0:i.inspiringPioneer),D(i==null?void 0:i.ourCulture)};return t.useEffect(()=>{document.title="Life at Corpus | Corpus Life Science",U()},[]),e.jsxs("div",{children:[e.jsx(A,{title:"Life at Corpus",image:{description:o.description,src:o.image}}),e.jsxs("div",{className:"lifeatcorpus-teamcorpus",children:[e.jsx("div",{className:"lifeatcorpus-heading",children:"Team Corpus"}),e.jsx("div",{className:"lifeatcorpus-description",children:c}),e.jsx("div",{className:"lifeatcorpus-action",children:e.jsx("button",{onClick:()=>{S("/life-at-corpus/team")},children:"Know more"})})]}),e.jsxs("div",{className:"lifeatcorpus-rewards",children:[e.jsx("div",{className:"lifeatcorpus-heading",children:"Rewards & recognition"}),e.jsx("div",{className:"lifeatcorpus-description",children:r==null?void 0:r.sectionDescription}),e.jsx("div",{className:"lifeatcorpus-rewardcards",children:(f=(v=r==null?void 0:r.rewardCards)==null?void 0:v.slice(0,2))==null?void 0:f.map((g,x)=>{var d;return e.jsx(T,{description:g.description,title:g.title,imageSrc:(d=g.image)==null?void 0:d.imageUrl},x)})})]}),e.jsxs("div",{className:"lifeatcorpus-policies",children:[e.jsxs("div",{className:"lifeatcorpus-policies-header",children:[e.jsx("div",{className:"lifeatcorpus-policies-title",children:e.jsx("div",{className:"lifeatcorpus-heading",children:"Leadership talks"})}),e.jsx("div",{className:"lifeatcorpus-description",style:{fontWeight:"bold"},children:n==null?void 0:n.policyDescription})]}),e.jsx(R,{policies:n==null?void 0:n.policyCards})]}),e.jsx("div",{className:"lifeatcorpus-heading",style:{marginLeft:"2rem"},children:"Inspiring Pioneers"}),e.jsxs("div",{className:"lifeatcorpus-inspiring-pioneer",children:[e.jsx("div",{className:"lifeatcorpus-inspiring-pioneer-image",children:e.jsx("img",{src:(j=a==null?void 0:a.image)==null?void 0:j.imageUrl})}),e.jsx("div",{className:"lifeatcorpus-inspiring-pioneer-description",children:a==null?void 0:a.description})]}),e.jsxs("div",{className:"culture",children:[e.jsx("div",{className:"lifeatcorpus-heading",style:{backgroundColor:"var(--brand-color-green)",color:"white",padding:"2rem",paddingBottom:"1rem"},children:"Our Culture"}),e.jsxs("div",{className:"lifeatcorpus-inspiring-pioneer",style:{backgroundColor:"var(--brand-color-green)"},children:[e.jsx("div",{className:"lifeatcorpus-inspiring-pioneer-description",style:{backgroundColor:"white",color:"var(--brand-color-green)"},children:l==null?void 0:l.description}),e.jsx("div",{className:"lifeatcorpus-inspiring-pioneer-image",children:e.jsx("img",{src:(w=l==null?void 0:l.image)==null?void 0:w.imageUrl})})]})]})]})};export{B as default};
