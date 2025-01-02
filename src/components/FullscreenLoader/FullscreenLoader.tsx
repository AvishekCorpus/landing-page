import React from "react";
import "./FullScreenLoader.css";

const FullScreenLoader: React.FC = () => {
  return (
    <div className="fullscreen-loader">
      <div className="spinner"></div>
      <p>Loading, please wait...</p>
    </div>
  );
};

export default FullScreenLoader;
