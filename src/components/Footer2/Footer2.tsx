import React, { useEffect, useState } from "react";
import "./style.css";
import { Button } from "antd";

const Footer2: React.FC = () => {
  const [socialLinks, setSocialLinks] = useState({
    facebook: "",
    instagram: "",
    twitter: "",
    linkedin: ""
  });

  const getData = async () => {
    const query = encodeURIComponent(`*[_type == "homepage"][0]{
      socialLinks {
        facebook,
        instagram,
        twitter,
        linkedin
      }
    }`);
    const url = `https://ichahr2c.api.sanity.io/v1/data/query/production?query=${query}`;
    const res = await fetch(url).then((res) => res.json());
    setSocialLinks(res?.result?.socialLinks || {});
  };

  useEffect(() => {
    getData();
  }, []);

  const openLink = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="footer2-container">
      <div className="footer2-wrapper1">
        <div>
          <Button size={"small"} style={{ fontWeight: "500" }}>
            Home
          </Button>
          <Button
            size={"small"}
            style={{ marginLeft: "0.5rem", fontWeight: "500" }}
          >
            About us
          </Button>
          <Button
            size={"small"}
            style={{ marginLeft: "0.5rem", fontWeight: "500" }}
          >
            Formulations
          </Button>
          <Button
            size={"small"}
            style={{ marginLeft: "0.5rem", fontWeight: "500" }}
          >
            Career
          </Button>
          <Button
            size={"small"}
            style={{ marginLeft: "0.5rem", fontWeight: "500" }}
          >
            Contact
          </Button>
        </div>
        <div>Copyright ©2024 Produced by company name</div>
      </div>
      <div className="footer2-wrapper2">
        <Button size={"middle"}>Download Product catalog</Button>
      </div>
      <div className="footer2-wrapper3">
        <div className="social-icons">
          <a
            href="#"
            aria-label="Facebook"
            onClick={(e) => {
              e.preventDefault();
              openLink(socialLinks.facebook);
            }}
          >
            Fb
          </a>
          <a
            href="#"
            aria-label="Instagram"
            onClick={(e) => {
              e.preventDefault();
              openLink(socialLinks.instagram);
            }}
          >
            In
          </a>
          <a
            href="#"
            aria-label="Twitter"
            onClick={(e) => {
              e.preventDefault();
              openLink(socialLinks.twitter);
            }}
          >
            Tw
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            onClick={(e) => {
              e.preventDefault();
              openLink(socialLinks.linkedin);
            }}
          >
            Ln
          </a>
        </div>
        <div>Designed by: XYZ solutions</div>
      </div>
    </div>
  );
};

export default Footer2;
