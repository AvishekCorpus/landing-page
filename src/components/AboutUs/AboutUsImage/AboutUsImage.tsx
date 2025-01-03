import React, { useState, useEffect } from "react";
import { Card, Skeleton } from "antd";
import "./style.css";

interface AboutUsImageProps {
  image: {
    src: string;
    description: string;
  };
}

const AboutUsImage: React.FC<AboutUsImageProps> = ({ image }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="aboutus-image-container">
      {isLoading ? (
        <div className="aboutus-image-skeleton">
          <Skeleton.Image active style={{ width: "100vw", height: 600 }} />
          <Skeleton
            active
            title={false}
            paragraph={{ rows: 10, width: "100vw" }}
          />
        </div>
      ) : (
        <>
          <div>
            <img src={image.src} alt="About Us" />
            <Card
              className="aboutus-image-description"
              title={<h1>About Us</h1>}
            >
              {image.description}
            </Card>
          </div>
        </>
      )}
    </div>
  );
};

export default AboutUsImage;
