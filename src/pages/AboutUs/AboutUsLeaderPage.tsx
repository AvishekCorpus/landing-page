import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/aboutusleader.css";

const AboutUsLeaderPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Extract the 'id' parameter
  const [leader, setLeader] = useState<any>();

  const getData = async () => {
    const query =
      encodeURIComponent(`*[_type == "leader" && guid == '${id}'][0] {
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
      }`);
    const url = `https://tr3yh6z2.api.sanity.io/v1/data/query/production?query=${query}`;
    const res = await fetch(url).then((res) => res.json());
    setLeader(res?.result);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="aboutusleaderpage-container">
      <div className="aboutusleaderpage-image">
        <img src={leader?.image?.asset?.url} alt={leader?.name} />
      </div>
      <div className="aboutusleaderpage-data">
        <h1>{leader?.name}</h1>
        <h4 style={{ color: "var(--orange)" }}>{leader?.designation}</h4>
        <h4 style={{ marginTop: "1rem", color: "gray", lineHeight: "30px" }}>
          {leader?.description}
        </h4>
        <table className="aboutusleaderpage-table">
          <tbody>
            <tr>
              <td>Education</td>
              <td>{leader?.education}</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>{leader?.age}</td>
            </tr>
            <tr>
              <td>Nationality</td>
              <td>{leader?.nationality}</td>
            </tr>
            <tr>
              <td>Appointed</td>
              <td>{leader?.appointed}</td>
            </tr>
            <tr>
              <td>Tenure</td>
              <td>{leader?.tenure}</td>
            </tr>
            <tr>
              <td>Committee Membership</td>
              <td>{leader?.committeeMembership?.map((cm : any,i : any) => {
                return <span key={i}>{cm}{i !== leader?.committeeMembership?.length - 1 ? ',' : ''}</span>
              })}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AboutUsLeaderPage;
