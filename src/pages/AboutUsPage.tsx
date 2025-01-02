import React, { useEffect, useState } from 'react';
import AboutUsImage from '../components/AboutUs/AboutUsImage/AboutUsImage';
import './styles/aboutus.css';
import AboutUsVisionMission from '../components/AboutUs/AboutUsVisionMission/AboutUsVisionMission';
import AboutUsLeadership from '../components/AboutUs/AboutUsLeadership/AboutUsLeadership';

// Define interface for AboutUs data
export interface AboutUsData {
  title: string;
  image: {
    src: string;
    description: string;
  };
  description: string;
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
  leadership: {
    description: string;
    leaders: Leader[];
  };
}

export interface Leader {
  image: {
    asset: {
      url: string;
    };
    imageDescription: string;
  };
  name: string;
  designation: string;
  tagline: string;
}

const AboutUsPage: React.FC = () => {
  const [aboutUsData, setAboutUsData] = useState<AboutUsData | null>(null);

  const getAboutUsData = async () => {
    const query = encodeURIComponent(`*[_type == "aboutUs"][0] {
      title,
      image {
        asset -> {
          url
        },
        imageDescription
      },
      description,
      vision {
        image {
          asset -> {
            url
          },
          imageDescription
        },
        description
      },
      mission {
        image {
          asset -> {
            url
          },
          imageDescription
        },
        description
      },
      leadership {
        description,
        leaders[] {
          image {
            asset -> {
              url
            },
            imageDescription
          },
          name,
          designation,
          tagline
        }
      }
    }`);
    const url = `https://tr3yh6z2.api.sanity.io/v1/data/query/production?query=${query}`;
    const res = await fetch(url).then((res) => res.json());

    if (res?.result) {
      setAboutUsData(transformAboutUsData(res.result));
    }
  };

  const transformAboutUsData = (data: any): AboutUsData => ({
    title: data?.title || 'No Title',
    image: {
      src: data?.image?.asset?.url || '',
      description: data?.image?.imageDescription || 'No description available',
    },
    description: data?.description || 'No description available',
    vision: {
      image: {
        src: data?.vision?.image?.asset?.url || '',
        description: data?.vision?.image?.imageDescription || 'No image description',
      },
      description: data?.vision?.description || 'No description available',
    },
    mission: {
      image: {
        src: data?.mission?.image?.asset?.url || '',
        description: data?.mission?.image?.imageDescription || 'No image description',
      },
      description: data?.mission?.description || 'No description available',
    },
    leadership: {
      description: data?.leadership?.description || 'No leadership description available',
      leaders: data?.leadership?.leaders || [],
    },
  });

  useEffect(() => {
    getAboutUsData();
  }, []);

  return (
    <div className="aboutuspage-container">
      {aboutUsData ? (
        <>
          <AboutUsImage image={aboutUsData.image} />
          <div className='about-us-page-description'>{aboutUsData.description}</div>
          <AboutUsVisionMission vision={aboutUsData.vision} mission={aboutUsData.mission} />
          <AboutUsLeadership 
            description={aboutUsData.leadership.description} 
            leaders={aboutUsData.leadership.leaders} 
          />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default AboutUsPage;
