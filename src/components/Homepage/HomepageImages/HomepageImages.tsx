import React, { useEffect, useState } from "react";
import { Carousel, Skeleton } from "antd";
import "./style.css";
import { Image } from "../../../pages/Homepage";

interface Props {
  images: Image[];
}

const HomepageImages: React.FC<Props> = ({ images }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set loading to false as soon as valid images are available.
    if (images && images.length > 0) {
      setLoading(false);
    }
  }, [images]);

  return (
    <div className="homepage-carousel-container">
      {loading ? (
         <Skeleton.Image active={true} style={{height : "50vh", width:"100vw"}} />
      ) : (
        <Carousel draggable autoplay arrows infinite dots={false}>
          {images.map((image, index) => (
            <div key={index} className="homepage-carousel-slide">
              <img
                src={image?.src}
                alt={`Slide ${index + 1}`}
                className="homepage-carousel-image"
              />
              <div
                className="homepage-carousel-caption"
                dangerouslySetInnerHTML={{ __html: image?.caption }}
              ></div>
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default HomepageImages;
