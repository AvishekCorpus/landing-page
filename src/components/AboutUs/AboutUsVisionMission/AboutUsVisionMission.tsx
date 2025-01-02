import React from 'react';
import { Card, Row, Col, Skeleton } from 'antd';
import './style.css';

// Define the types for Vision and Mission Props
interface AboutUsVisionMissionProps {
  vision: {
    image: {
      src: string;
      description: string;
    };
    description: string;
  };
  mission: {
    image: {
      src: string;
      description: string;
    };
    description: string;
  };
}

const AboutUsVisionMission: React.FC<AboutUsVisionMissionProps> = ({ vision, mission }) => {
  // Check if the data is empty or loading
  const isLoading = !vision || !mission;

  return (
    <div className="about-us-section">
      <Row gutter={[16, 16]}>
        {/* Vision Card */}
        <Col xs={24} sm={12}>
          <Card
            hoverable
            cover={
              isLoading ? (
                <Skeleton.Image active style={{width :"100%", height:"50vh"}} />
              ) : (
                <img alt="Vision" src={vision.image.src} className="card-image" />
              )
            }
          >
            <div className="card-title-wrapper">
              <div className="line"></div>
              <h3 className="card-title" style={{ color: 'var(--orange)' }}>
                {isLoading ? <Skeleton.Input active size="small" style={{ width: 100 }} /> : 'Vision'}
              </h3>
              <div className="line"></div>
            </div>
            <p className=''>{isLoading ? <Skeleton paragraph={{ rows: 2 }} active /> : vision.description}</p>
          </Card>
        </Col>

        {/* Mission Card */}
        <Col xs={24} sm={12}>
          <Card
            hoverable
            cover={
              isLoading ? (
                <Skeleton.Image active style={{width :"100%", height:"50vh"}} />
              ) : (
                <img alt="Mission" src={mission.image.src} className="card-image" />
              )
            }
          >
            <div className="card-title-wrapper">
              <div className="line"></div>
              <h3 className="card-title" style={{ color: 'teal' }}>
                {isLoading ? <Skeleton.Input active size="small" style={{ width: 100 }} /> : 'Mission'}
              </h3>
              <div className="line"></div>
            </div>
            <p>{isLoading ? <Skeleton paragraph={{ rows: 2 }} active /> : mission.description}</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AboutUsVisionMission;
