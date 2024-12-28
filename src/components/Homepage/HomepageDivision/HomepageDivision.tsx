import React, { useRef, useState, useEffect } from "react";
import { Carousel, Row, Col, Button, Skeleton, Card } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./style.css";
import DivisionCard from "./DivisionCard";
import { Division } from "../../../pages/Homepage";

interface Props {
  divisions?: Division[] | null;
}

const HomepageDivision: React.FC<Props> = ({ divisions }) => {
  const carouselRef = useRef<any>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [chunkSize, setChunkSize] = useState(4); // Default chunk size for laptops

  // Update chunk size based on screen width
  useEffect(() => {
    const updateChunkSize = () => {
      const width = window.innerWidth;
      if (width >= 1000) {
        setChunkSize(4); // Laptop
      } else if (width >= 768) {
        setChunkSize(3); // Tablet
      } else {
        setChunkSize(1); // Mobile
      }
    };

    updateChunkSize();
    window.addEventListener("resize", updateChunkSize);

    return () => {
      window.removeEventListener("resize", updateChunkSize);
    };
  }, []);

  // Divide divisions into chunks based on screen size
  const chunkArray = (arr: Division[] = [], chunkSize: number): Division[][] => {
    return arr.reduce((acc, _, index) => {
      if (index % chunkSize === 0)
        acc.push(arr.slice(index, index + chunkSize));
      return acc;
    }, [] as Division[][]);
  };

  const chunks = chunkArray(divisions || [], chunkSize);

  const handleNext = () => {
    if (currentPage < chunks.length - 1) {
      setCurrentPage((prev) => prev + 1);
      carouselRef.current?.next();
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
      carouselRef.current?.prev();
    }
  };

  if (!divisions || divisions.length === 0) {
    return (
      <div className="division-container">
        <div className="division-heading">Divisions</div>
        <div className="divisions">
          <Row gutter={[16, 16]} justify="center">
            {[...Array(chunkSize)].map((_, index) => (
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
            ))}
          </Row>
        </div>
      </div>
    );
  }

  return (
    <div className="division-container">
      <div className="division-heading">Divisions</div>
      <div className="divisions">
        <Carousel
          draggable
          ref={carouselRef}
          dots={false}
          afterChange={(index) => setCurrentPage(index)}
        >
          {chunks.map((batch, index) => (
            <div key={index}>
              <Row gutter={[16, 16]} justify="center">
                {batch?.map((division, index) => (
                  <Col key={index} xs={24} sm={12} md={8} lg={6}>
                    <DivisionCard
                      imageUrl={division.imageUrl}
                      title={division.title}
                      description={division.description}
                    />
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="custom-pagination">
        <Button
          type="text"
          icon={<LeftOutlined />}
          onClick={handlePrev}
          disabled={currentPage === 0}
        />
        <div className="pagination-dots">
          {chunks.map((_, index) => (
            <div
              key={index}
              className={`dot ${currentPage === index ? "active" : ""}`}
            ></div>
          ))}
        </div>
        <Button
          type="text"
          icon={<RightOutlined />}
          onClick={handleNext}
          disabled={currentPage === chunks.length - 1}
        />
      </div>
    </div>
  );
};

export default HomepageDivision;
