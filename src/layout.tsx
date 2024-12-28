import React from "react";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Footer2 from "./components/Footer2/Footer2";
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
        <div className="iso-container">An ISO 9001:2015 Certified Company</div>
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
