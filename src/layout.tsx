import React from "react";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Footer2 from "./components/Footer2/Footer2";
import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

interface Props {
  children: React.ReactNode;
  displayIsoCertification?: boolean;
}

const Layout: React.FC<Props> = ({
  children,
  displayIsoCertification = false,
}) => {
  return (
    <div className="layout">
      {displayIsoCertification ? (
        <div className="iso-container">
          <div>An ISO 9001:2015 Certified Company</div>
          <div>
            <span>
              <FiPhone style={{ fontSize: "1.1rem", marginRight: "0.5rem" }} />
              +91 8420112846 | +91 8902036365 | +91 33 2694 4604 / 4605
            </span>
            <span>
              <AiOutlineMail
                style={{
                  fontSize: "1.1rem",
                  marginRight: "0.5rem",
                  marginLeft: "0.5rem",
                }}
              />{" "}
              info@corpuslifescience.com{" "}
            </span>
          </div>
        </div>
      ) : (
        ""
      )}
      <Navigation />
      <div className="layout-children">{children}</div>
      {/* <Footer /> */}
      <Footer2 />
    </div>
  );
};

export default Layout;
