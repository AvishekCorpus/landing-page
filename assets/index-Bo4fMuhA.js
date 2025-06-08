import{r,j as e,b as A,P as L}from"./index-BpF2ZAOu.js";import{C as P,G as z,a as E}from"./index-DdG1FZsu.js";import{C as S}from"./index-BdKVEBYx.js";import{C as R}from"./col-D3s52P-F.js";import"./ResizeObserver.es-B1PUzC5B.js";import"./useVariants-BG61uM1T.js";const T=({policies:t})=>{const[p,o]=r.useState(5),[h,m]=r.useState(300),x=({onClick:s})=>e.jsx("div",{className:"custom-arrow custom-prev",onClick:s,children:e.jsx(E,{})}),c=({onClick:s})=>e.jsx("div",{className:"custom-arrow custom-next",onClick:s,children:e.jsx(z,{})}),u=()=>{const s=window.innerWidth;s<=480?o(1):s<=768?o(2):s<=1024?o(3):o(4)},a=()=>{const s=window.innerWidth;s>=1200||s>=768,m(240)};return r.useEffect(()=>(u(),a(),window.addEventListener("resize",u),window.addEventListener("resize",a),()=>{window.removeEventListener("resize",u),window.removeEventListener("resize",a)}),[]),e.jsx(P,{className:"carousel-container",arrows:!0,infinite:!0,prevArrow:e.jsx(x,{}),nextArrow:e.jsx(c,{}),dots:!1,autoplay:!0,autoplaySpeed:3e3,slidesToShow:p,slidesToScroll:1,children:t==null?void 0:t.map((s,n)=>e.jsx("div",{className:"policy-card",children:e.jsx(S,{hoverable:!0,cover:e.jsx("img",{alt:"example",src:s.image.imageUrl}),style:{width:h,margin:"0 auto"},children:e.jsxs("div",{className:"product-division",children:[e.jsx("div",{style:{fontSize:"1.2rem",color:"var(--orange)",fontWeight:500},children:s.title}),e.jsx("div",{style:{fontSize:"0.8rem",color:"gray",fontWeight:400},children:s.description})]})})},n))})},I=({imageSrc:t,description:p,title:o})=>e.jsx("div",{style:{padding:"20px"},children:e.jsx(R,{xs:24,sm:12,children:e.jsxs(S,{hoverable:!0,cover:e.jsx("img",{alt:"Vision",src:t,className:"card-image"}),children:[e.jsxs("div",{className:"card-title-wrapper",children:[e.jsx("div",{className:"line"}),e.jsx("h3",{className:"card-title",style:{fontSize:"1.1rem",color:"var(--orange)"},children:o}),e.jsx("div",{className:"line"})]}),e.jsx("p",{className:"",children:p})]})})}),K=()=>{var v,w,N,C;const[t,p]=r.useState({image:"",description:""}),[o,h]=r.useState(""),[m,x]=r.useState(""),[c,u]=r.useState({sectionHeading:"",sectionDescription:"",rewardCards:[]}),[a,s]=r.useState({policyDescription:"",policyCards:[]}),[n,U]=r.useState({image:{imageUrl:""},description:""}),[l,k]=r.useState({image:{imageUrl:""},description:""}),j=A(),W=async()=>{var y,D;const f=`https://tr3yh6z2.api.sanity.io/v1/data/query/production?query=${encodeURIComponent(`*[_type == "lifeAtCorpus"][0] {
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
    }`)}`,d=await fetch(f).then(b=>b.json());var i=(y=d==null?void 0:d.result)==null?void 0:y.lifeAtCorpusPage;p({image:(D=i==null?void 0:i.pageImage)==null?void 0:D.imageUrl,description:i==null?void 0:i.pageImageDescription}),h(i==null?void 0:i.teamCorpusDescription),x(i==null?void 0:i.workWithUsDescription),u(i==null?void 0:i.rewardsAndRecognition),s(i==null?void 0:i.policy),U(i==null?void 0:i.inspiringPioneer),k(i==null?void 0:i.ourCulture)};return r.useEffect(()=>{document.title="Life at Corpus | Corpus Life Science",W()},[]),e.jsxs("div",{children:[e.jsx(L,{title:"Life at Corpus",image:{description:t.description,src:t.image}}),e.jsxs("div",{className:"lifeatcorpus-teamcorpus",children:[e.jsx("div",{className:"lifeatcorpus-heading",children:"Team Corpus"}),e.jsx("div",{className:"lifeatcorpus-description",children:o}),e.jsx("div",{className:"lifeatcorpus-action",children:e.jsx("button",{onClick:()=>{j("/life-at-corpus/team")},children:"Know more"})})]}),e.jsxs("div",{className:"lifeatcorpus-workwithus",children:[e.jsx("div",{className:"lifeatcorpus-workwithus-heading",children:e.jsx("div",{className:"lifeatcorpus-heading",children:"Work with us"})}),e.jsx("div",{className:"lifeatcorpus-description",style:{color:"white",fontWeight:500},children:m}),e.jsx("div",{className:"lifeatcorpus-joinus",children:e.jsx("div",{className:"lifeatcorpus-action",children:e.jsx("button",{onClick:()=>{j("/life-at-corpus/work-with-us")},children:"Join us"})})})]}),e.jsxs("div",{className:"lifeatcorpus-rewards",children:[e.jsx("div",{className:"lifeatcorpus-heading",children:"Rewards & recognition"}),e.jsx("div",{className:"lifeatcorpus-description",children:c==null?void 0:c.sectionDescription}),e.jsx("div",{className:"lifeatcorpus-rewardcards",children:(w=(v=c==null?void 0:c.rewardCards)==null?void 0:v.slice(0,2))==null?void 0:w.map((g,f)=>{var d;return e.jsx(I,{description:g.description,title:g.title,imageSrc:(d=g.image)==null?void 0:d.imageUrl},f)})})]}),e.jsxs("div",{className:"lifeatcorpus-policies",children:[e.jsxs("div",{className:"lifeatcorpus-policies-header",children:[e.jsx("div",{className:"lifeatcorpus-policies-title",children:e.jsx("div",{className:"lifeatcorpus-heading",children:"Policies"})}),e.jsx("div",{className:"lifeatcorpus-description",style:{fontWeight:"bold"},children:a==null?void 0:a.policyDescription})]}),e.jsx(T,{policies:a==null?void 0:a.policyCards})]}),e.jsx("div",{className:"lifeatcorpus-heading",style:{marginLeft:"2rem"},children:"Inspiring Pioneers"}),e.jsxs("div",{className:"lifeatcorpus-inspiring-pioneer",children:[e.jsx("div",{className:"lifeatcorpus-inspiring-pioneer-image",children:e.jsx("img",{src:(N=n==null?void 0:n.image)==null?void 0:N.imageUrl})}),e.jsx("div",{className:"lifeatcorpus-inspiring-pioneer-description",children:n==null?void 0:n.description})]}),e.jsxs("div",{className:"culture",children:[e.jsx("div",{className:"lifeatcorpus-heading",style:{backgroundColor:"var(--brand-color-green)",color:"white",padding:"2rem",paddingBottom:"1rem"},children:"Our Culture"}),e.jsxs("div",{className:"lifeatcorpus-inspiring-pioneer",style:{backgroundColor:"var(--brand-color-green)"},children:[e.jsx("div",{className:"lifeatcorpus-inspiring-pioneer-description",style:{backgroundColor:"white",color:"var(--brand-color-green)"},children:l==null?void 0:l.description}),e.jsx("div",{className:"lifeatcorpus-inspiring-pioneer-image",children:e.jsx("img",{src:(C=l==null?void 0:l.image)==null?void 0:C.imageUrl})})]})]})]})};export{K as default};
