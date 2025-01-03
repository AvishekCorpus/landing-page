import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Skeleton } from 'antd';
import Meta from 'antd/es/card/Meta';
import './style.css';
import { Leader } from '../../../pages/AboutUsPage';

interface AboutUsLeadershipProps {
  description: string;
  leaders: Leader[];
}

const AboutUsLeadership: React.FC<AboutUsLeadershipProps> = ({ description, leaders }) => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (description && leaders.length) {
      setIsLoading(false);
    }
  }, [description, leaders]);

  const handleCardClick = (leader: Leader) => {
    navigate('/about-us/leaders', { state: { leaders } });
  };

  return (
    <div className="aboutusleadership-container">
      <div className="aboutusleadership-title">
        Our <span>Leadership</span>
      </div>
      <div className="aboutusleadership-description">
        {isLoading ? (
          <Skeleton active paragraph={{ rows: 2 }} />
        ) : (
          description || 'No leadership description available.'
        )}
      </div>
      <div className="aboutusleadership-leaders">
        {isLoading ? (
          <div className="aboutusleadership-leaders-skeleton">
            {[...Array(3)].map((_, index) => (
              <div className="aboutusleadership-leader-card-skeleton" key={index}>
                <Skeleton loading={true} avatar paragraph={{ rows: 2 }} />
              </div>
            ))}
          </div>
        ) : (
          <div className="aboutusleadership-leaders-row">
            {leaders.length ? (
              leaders.map((leader, index) => (
                <div className="aboutusleadership-leader-card" key={index}>
                  <Card
                    hoverable
                    cover={<img className="aboutusleadership-leader-image" alt={leader.name} src={leader.image.asset.url} />}
                    onClick={() => handleCardClick(leader)}
                  >
                    <Meta
                      title={leader.name || 'No Name'}
                      description={`${leader.designation || 'No Designation'}`}
                    />
                  </Card>
                </div>
              ))
            ) : (
              <p>No leaders available</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutUsLeadership;
