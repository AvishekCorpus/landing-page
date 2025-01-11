import { Card, Col } from "antd";
import React from "react";
import "./style.css";

interface Props {
    imageSrc:string;
    description : string;
    title : string;
}

const RewardCard: React.FC<Props> = ({imageSrc,description,title}) => {
  return (
    <div style={{ padding: "20px" }}>
        {/* Card 1 */}
        <Col xs={24} sm={12}>
          <Card
            hoverable
            cover={
              <img alt="Vision" src={imageSrc} className="card-image" />
            }
          >
            <div className="card-title-wrapper">
              <div className="line"></div>
              <h3 className="card-title" style={{ fontSize:"1.1rem",color: "var(--orange)" }}>
                {title}
              </h3>
              <div className="line"></div>
            </div>
            <p className="">{description}</p>
          </Card>
        </Col>
    </div>
  );
};

export default RewardCard;
