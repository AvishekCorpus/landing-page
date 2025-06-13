import{r as g,j as i,P as d}from"./index-BEVS6Hdy.js";const D=()=>{const[n,m]=g.useState({sectionDescription:null,sectionImage:null,trainings:null});return g.useEffect(()=>{(async()=>{var c;const p=`https://tr3yh6z2.api.sanity.io/v1/data/query/production?query=${encodeURIComponent(`*[_type == "lifeAtCorpus"][0] {
        trainingAndDevelopment {
          sectionDescription,
          sectionImage {
            "imageUrl": asset->url
          },
          trainings[] {
            trainingTitle,
            trainingImage {
              "imageUrl": asset->url,
              trainingDescription
            }
          }
        }
      }`)}`,s=await fetch(p).then(a=>a.json());if((c=s==null?void 0:s.result)!=null&&c.trainingAndDevelopment){const{sectionDescription:a,sectionImage:o,trainings:l}=s.result.trainingAndDevelopment;m({sectionDescription:a||null,sectionImage:o?{src:o.imageUrl}:null,trainings:l?l.map(r=>({title:r.trainingTitle,src:r.trainingImage.imageUrl,description:r.trainingImage.trainingDescription})):null})}})()},[]),i.jsxs("div",{children:[n.sectionImage&&n.sectionDescription&&i.jsx(d,{image:{src:n.sectionImage.src,description:n.sectionDescription},title:"Training & Development"}),n.trainings&&n.trainings.map((e,t)=>i.jsxs("div",{className:t%2===0?"training-card":"training-card inverted",children:[i.jsx("div",{className:"training-image",children:i.jsx("img",{src:e.src,alt:e.title})}),i.jsxs("div",{className:"training-description",children:[i.jsx("h2",{className:t%2===0?"training-title":"training-title-inverted",children:e.title}),i.jsx("p",{children:e.description})]})]},t))]})};export{D as default};
