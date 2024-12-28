import React, { useEffect, useState } from "react";
import "./style.css";
import { Management } from "../../../pages/Homepage";
import { Skeleton } from "antd"; // Importing Ant Design Skeleton

interface Props {
  managementData: Management[] // Allowing null to handle empty state
}

const HomepageManagement: React.FC<Props> = ({ managementData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState("");

  const handleNext = () => {
    setAnimationDirection("fade-in");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % managementData.length);
  };

  const handlePrev = () => {
    setAnimationDirection("fade-in");
    setCurrentIndex((prevIndex) => (prevIndex - 1 + managementData.length) % managementData.length);
  };

  if (!managementData || managementData.length === 0) {
    // Skeleton loader when managementData is empty or null
    return (
      <div className="management-carousel-container">
        <h2 className="management-carousel-title">
          <span>Key</span> Management
        </h2>
        <div className="management-carousel-card">
          <div className="management-carousel-actions">
            <button className="management-carousel-btn-left">
              &lt;
            </button>
            <Skeleton.Image active style={{ width: 100, height: 100 }} />
            <button className="management-carousel-btn-right">
              &gt;
            </button>
          </div>
          <div className="management-carousel-profile">
            <Skeleton.Button active style={{ width: 150, marginBottom: 10 }} />
          </div>
          <Skeleton active paragraph={{ rows: 3 }} />
        </div>
      </div>
    );
  }

  return (
    <div className="management-carousel-container">
      <h2 className="management-carousel-title">
        <span>Key</span> Management
      </h2>
      <div
        className={`management-carousel-card ${animationDirection}`}
        onAnimationEnd={() => setAnimationDirection("")}
      >
        <div className="mgmt-1"></div>
        <div className="mgmt-2"></div>
        <div className="management-carousel-actions">
          <button className="management-carousel-btn-left" onClick={handlePrev}>
            &lt;
          </button>
          <img
            src={managementData[currentIndex].image}
            alt={managementData[currentIndex].name}
            className="management-carousel-image"
          />
          <button
            className="management-carousel-btn-right"
            onClick={handleNext}
          >
            &gt;
          </button>
        </div>
        <div className="management-carousel-profile">
          <h3 className="management-carousel-name">
            {managementData[currentIndex].name}
          </h3>
          <p className="management-carousel-position">
            {managementData[currentIndex].position}
          </p>
        </div>
        <p className="management-carousel-description">
          {managementData[currentIndex].description}
        </p>
        <div className="mgmt-3"></div>
        <div className="mgmt-4"></div>
      </div>
    </div>
  );
};

export default HomepageManagement;
