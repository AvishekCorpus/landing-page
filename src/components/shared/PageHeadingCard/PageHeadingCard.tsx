import { Skeleton } from "antd";
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
              <div
                className="aboutus-image-description"
              >
                <div style={{fontSize:'2rem', color:"var(--brand-color-green)", fontWeight : 700, marginBottom : "1rem"}}>{title}</div>
                {image.description}
              </div>
            </div>
          </>
        )}
      </div>
    );
}

export default PageHeadingCard;
