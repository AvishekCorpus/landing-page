import { Card, Skeleton } from 'antd';
import Meta from 'antd/es/card/Meta';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Leader } from '../../../pages/AboutUs/AboutUsPage';
import './style.css';

interface AboutUsLeadershipProps {
  description: string;
}

const AboutUsLeadership: React.FC<AboutUsLeadershipProps> = ({ description }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [leaders,setLeaders] = useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    const query = encodeURIComponent(`*[_type == "leader"] {
      _id,
      name,
      image {
        asset -> {
          url
        }
      },
      designation,
      guid
    }`);
    const url = `https://tr3yh6z2.api.sanity.io/v1/data/query/production?query=${query}`;
    const res = await fetch(url).then((res) => res.json());

    if (res?.result) {
      console.log(res?.result)
      setLeaders(res?.result);
    }
  };

  useEffect(() => {
    if (description) {
      setIsLoading(false);
    }
    getData();
  }, [description]);

  const handleCardClick = (leader: Leader) => {
    navigate(`/about-us/leaders/${leader.guid}`);  
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
