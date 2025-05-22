import React, { useState, useEffect } from "react";
import "./style.css";
import { Card, Carousel, Col, Skeleton } from "antd";
import { GoTriangleLeft, GoTriangleRight } from "react-icons/go";
import type { Products } from "../../../pages/Homepage";

interface Props {
  cardData: Products[] | null;
}

const HomepageProducts: React.FC<Props> = ({ cardData }) => {
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

  if ( !cardData || cardData.length === 0) {
    return (
      <div className="featured-product-container">
        <div className="featured-title">
          Featured <span>Product</span>
        </div>
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
          {/* Skeleton loaders mimicking cards */}
          {[...Array(slidesToShow)].map((_, index) => (
            <div key={index} className="featured-card">
               <Col key={index} xs={24} sm={12} md={8} lg={6}>
                <Card
                  style={{ width: 220, margin: "2rem auto" }}
                  cover={<Skeleton.Image active style={{ height: 150, width:"100%" }} />}
                  loading
                  actions={[<Skeleton.Button active />]}
                >
                  <Skeleton active paragraph={{ rows: 1 }} />
                </Card>
              </Col>
            </div>
          ))}
        </Carousel>
      </div>
    );
  }

  return (
    <div className="featured-product-container">
      <div className="featured-title">
        Featured <span>Product</span>
      </div>
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
        {cardData.map((card, index) => (
          <div key={index} className="featured-card">
            <Card
              title={
                <div className="card-header">
                  <span className="card-title">{card.title}</span>
                  <a href="#" className="card-more">
                    More
                  </a>
                </div>
              }
              hoverable
              cover={<img alt="example" src={card.imageUrl} />}
              style={{ width: cardWidth, margin: "0 auto" }}
            >
              <div className="product-division">
                <div>Division</div>
                <div>{card.division}</div>
              </div>
            </Card>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HomepageProducts;
