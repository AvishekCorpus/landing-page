import { Card, Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import "./style.css";

interface AboutUsImageProps {
    image: {
      src: string;
      description: string;
    },
    title : string;
  }
const PageHeadingCard : React.FC<AboutUsImageProps> = ({image, title}) => {
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
                title={<h1>{title}</h1>}
              >
                {image.description}
              </Card>
            </div>
          </>
        )}
      </div>
    );
}

export default PageHeadingCard;
