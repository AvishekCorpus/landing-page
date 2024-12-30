import React, { useState, useEffect } from 'react';
import { Button, Card } from 'antd';
import "./style.css";

interface Props {
  imageUrl: string;
  title: string;
  description: string;
}

const DivisionCard: React.FC<Props> = ({ imageUrl, title, description }) => {
  const [cardWidth, setCardWidth] = useState(300); // Default width for large screens

  // Update the card width based on screen size
  useEffect(() => {
    const updateCardWidth = () => {
      const width = window.innerWidth;
      if (width >= 1200) {
        setCardWidth(300); // Large screens (Desktop)
      } else if (width >= 900) {
        setCardWidth(220); // Tablet
      } else {
        setCardWidth(280); // Mobile
      }
    };

    updateCardWidth(); // Initial width set
    window.addEventListener("resize", updateCardWidth); // Update on resize

    return () => {
      window.removeEventListener("resize", updateCardWidth); // Clean up
    };
  }, []);

  return (
    <Card
      style={{ width: cardWidth, margin:'2rem auto', }}
      cover={
        <img
          alt="example"
          src={imageUrl}
          style={{ height: 150, objectFit: 'cover' }}
        />
      }
      actions={[
        <button className="know-more">Know more</button>
      ]}
    >
      <div className="division-card-title">{title}</div>
      <div className="division-card-description">{description}</div>
    </Card>
  );
};

export default DivisionCard;
