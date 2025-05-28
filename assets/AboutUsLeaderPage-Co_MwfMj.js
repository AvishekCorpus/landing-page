import{d as j,r as o,j as s}from"./index-c4Cqf08r.js";const l=()=>{var i,c,r;const{id:d}=j(),[t,h]=o.useState(),x=async()=>{const n=`https://tr3yh6z2.api.sanity.io/v1/data/query/production?query=${encodeURIComponent(`*[_type == "leader" && guid == '${d}'][0] {
        name,
        image {
          asset -> {
            url
          }
        },
        designation,
        description,
        education,
        age,
        nationality,
        appointed,
        tenure,
        committeeMembership
      }`)}`,e=await fetch(n).then(u=>u.json());h(e==null?void 0:e.result)};return o.useEffect(()=>{x()},[]),s.jsxs("div",{className:"aboutusleaderpage-container",children:[s.jsx("div",{className:"aboutusleaderpage-image",children:s.jsx("img",{src:(c=(i=t==null?void 0:t.image)==null?void 0:i.asset)==null?void 0:c.url,alt:t==null?void 0:t.name})}),s.jsxs("div",{className:"aboutusleaderpage-data",children:[s.jsx("h1",{children:t==null?void 0:t.name}),s.jsx("h4",{style:{color:"var(--orange)"},children:t==null?void 0:t.designation}),s.jsx("h4",{style:{marginTop:"1rem",color:"gray",lineHeight:"30px"},children:t==null?void 0:t.description}),s.jsx("table",{className:"aboutusleaderpage-table",children:s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:"Education"}),s.jsx("td",{children:t==null?void 0:t.education})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"Age"}),s.jsx("td",{children:t==null?void 0:t.age})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"Nationality"}),s.jsx("td",{children:t==null?void 0:t.nationality})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"Appointed"}),s.jsx("td",{children:t==null?void 0:t.appointed})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"Tenure"}),s.jsx("td",{children:t==null?void 0:t.tenure})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"Committee Membership"}),s.jsx("td",{children:(r=t==null?void 0:t.committeeMembership)==null?void 0:r.map((a,n)=>{var e;return s.jsxs("span",{children:[a,n!==((e=t==null?void 0:t.committeeMembership)==null?void 0:e.length)-1?",":""]},n)})})]})]})})]})]})};export{l as default};
