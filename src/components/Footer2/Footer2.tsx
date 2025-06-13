import { Button, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

const Footer2: React.FC = () => {
  const navigate = useNavigate();
  const [socialLinks, setSocialLinks] = useState({
    facebook: "",
    instagram: "",
    twitter: "",
    linkedin: "",
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
    const url = `https://tr3yh6z2.api.sanity.io/v1/data/query/production?query=${query}`;
    const res = await fetch(url).then((res) => res.json());
    setSocialLinks(res?.result?.socialLinks || {});
  };

  useEffect(() => {
    getData();
  }, []);

  const openLink = (url: string) => {
    window.open(url, "_blank");
  };

  const handleButtonClick = (url: string) => {
    navigate(url);
  };

  return (
    <div className="footer2-container">
      <div className="footer2-wrapper1">
        <div>
          <Button
            size={"small"}
            style={{ fontWeight: "500" }}
            onClick={() => {
              handleButtonClick("/");
            }}
          >
            Home
          </Button>
          <Button
            size={"small"}
            style={{ marginLeft: "0.5rem", fontWeight: "500" }}
            onClick={() => {
              handleButtonClick("/about-us");
            }}
          >
            About us
          </Button>
          <Button
            size={"small"}
            style={{ marginLeft: "0.5rem", fontWeight: "500" }}
            onClick={() => {
              handleButtonClick("/events");
            }}
          >
            Events
          </Button>
          <Button
            size={"small"}
            style={{ marginLeft: "0.5rem", fontWeight: "500" }}
            onClick={() => {
              handleButtonClick("/life-at-corpus/index");
            }}
          >
            Life at corpus
          </Button>
          <Button
            size={"small"}
            style={{ marginLeft: "0.5rem", fontWeight: "500" }}
            onClick={() => {
              handleButtonClick("/contact");
            }}
          >
            Contact
          </Button>
        </div>
        <div style={{ textAlign: "center", fontSize: "12px" }}>
          Copyright ©2024 Produced by Corpus Life Science Pvt. Ltd.
        </div>
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
            <FacebookOutlined style={{ fontSize: "1.2rem" }} />
          </a>

          <a
            href="#"
            aria-label="Instagram"
            onClick={(e) => {
              e.preventDefault();
              openLink(socialLinks.instagram);
            }}
          >
            <InstagramOutlined style={{ fontSize: "1.2rem" }} />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            onClick={(e) => {
              e.preventDefault();
              openLink(socialLinks.twitter);
            }}
          >
            <TwitterOutlined style={{ fontSize: "1.2rem" }} />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            onClick={(e) => {
              e.preventDefault();
              openLink(socialLinks.linkedin);
            }}
          >
            <LinkedinOutlined style={{ fontSize: "1.2rem" }} />
          </a>
        </div>
        <div style={{ fontSize: "10px" }}>Designed by: Bitsea Solutions</div>
      </div>
    </div>
  );
};

export default Footer2;
