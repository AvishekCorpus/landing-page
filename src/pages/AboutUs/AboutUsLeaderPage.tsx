import React from 'react';
import { useLocation } from 'react-router-dom';
import HomepageManagement from '../../components/Homepage/HomepageManagement/HomepageManagement';
import { Management } from '../Homepage';
import { Leader } from './AboutUsPage';

const AboutUsLeaderPage: React.FC = () => {
  const location = useLocation();
  const leaders: Leader[] = location.state?.leaders || [];

  // Mapper function to convert Leader to Management
  const mapLeadersToManagement = (leaders: Leader[]): Management[] => {
    return leaders.map((leader) => ({
      name: leader.name,
      position: leader.designation,
      image: leader.image.asset.url,
      description: leader.image.imageDescription || leader.tagline,
    }));
  };

  const managementList = mapLeadersToManagement(leaders);

  if (!leaders.length) {  
    return <div>No leader data available</div>;
  }

  return (
    <div>
      <HomepageManagement management={false}  managementData={managementList} />
    </div>
  );
};

export default AboutUsLeaderPage;
