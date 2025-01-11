import { Card, Carousel, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { GoTriangleLeft, GoTriangleRight } from "react-icons/go";
import "./style.css";
const { Title, Paragraph } = Typography;

interface PolicyCard {
  title: string;
  description: string;
  image: any;
}

interface Props {
  policies : PolicyCard[]
}

const PoliciesCarousel: React.FC<Props> = ({policies}) => {
    const [slidesToShow, setSlidesToShow] = useState(5);
    const [cardWidth, setCardWidth] = useState(300);
  
    const CustomPrevArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
      <div className="custom-arrow custom-prev" onClick={onClick}>
        <GoTriangleLeft />
      </div>
    );
  
    const CustomNextArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
      <div className="custom-arrow custom-next" onClick={onClick}>
        <GoTriangleRight />
      </div>
    );
  
    const updateSlidesToShow = () => {
      const width = window.innerWidth;
      if (width <= 480) {
        setSlidesToShow(1);
      } else if (width <= 768) {
        setSlidesToShow(2);
      } else if (width <= 1024) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    };
  
    const updateCardWidth = () => {
      const width = window.innerWidth;
      if (width >= 1200) {
        setCardWidth(240);
      } else if (width >= 768) {
        setCardWidth(240);
      } else {
        setCardWidth(240);
      }
    };
  
    useEffect(() => {
      updateSlidesToShow();
      updateCardWidth();
      window.addEventListener("resize", updateSlidesToShow);
      window.addEventListener("resize", updateCardWidth);
  
      return () => {
        window.removeEventListener("resize", updateSlidesToShow);
        window.removeEventListener("resize", updateCardWidth);
      };
    }, []);
    
    return (
        <Carousel
          className="carousel-container"
          arrows
          infinite
          prevArrow={<CustomPrevArrow />}
          nextArrow={<CustomNextArrow />}
          dots={false}
          autoplay
          autoplaySpeed={3000}
          slidesToShow={slidesToShow}
          slidesToScroll={1}
        >
          {policies?.map((card, index) => (
            <div key={index} className="policy-card">
              <Card
                hoverable
                cover={<img alt="example" src={card.image.imageUrl} />}
                style={{ width: cardWidth, margin: "0 auto" }}
              >
                <div className="product-division">
                  <div style={{fontSize:'1.2rem', color:"var(--orange)", fontWeight : 500}}>{card.title}</div>
                  <div style={{fontSize:'0.8rem', color:"gray", fontWeight : 400}}>{card.description}</div>
                </div>
              </Card>
            </div>
          ))}
        </Carousel>
    );
};

export default PoliciesCarousel;