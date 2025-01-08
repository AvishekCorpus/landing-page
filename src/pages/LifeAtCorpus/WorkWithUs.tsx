import { Typography } from "antd";
import React, { useEffect, useState } from "react";
import PageHeadingCard from "../../components/shared/PageHeadingCard/PageHeadingCard";
import WorkWithUsJobOpeningsCard from "../../components/WorkWithUs/WorkWithUsJobOpeningCard/WorkWithUsJobOpeningsCard";

const { Title } = Typography;

type JobOpening = {
  title: string;
  description: string;
  postedDate: string;
  desiredKeySkills: string[];
  location: string;
};

const WorkWithUs: React.FC = () => {
  const [workWithUsData, setWorkWithUsData] = useState<{
    image: { src: string; description: string };
    title: string;
  } | null>(null);

  const [jobOpenings, setJobOpenings] = useState<JobOpening[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const query = encodeURIComponent(`*[_type == "lifeAtCorpus"][0] {
      workWithUs {
        workImage {
          "imageUrl": asset->url,
          imageDescription
        }
      },
      jobOpenings[] {
        jobTitle,
        jobDescription,
        postedDate,
        desiredKeyskills,
        jobLocation
      }
    }`);
    const url = `https://tr3yh6z2.api.sanity.io/v1/data/query/production?query=${query}`;
    const res = await fetch(url).then((res) => res.json());

    if (res?.result) {
      const { workWithUs, jobOpenings } = res.result;

      if (workWithUs?.workImage) {
        const { imageUrl, imageDescription } = workWithUs.workImage;
        setWorkWithUsData({
          image: { src: imageUrl, description: imageDescription },
          title: "Work with us",
        });
      }

      if (jobOpenings) {
        const formattedJobOpenings = jobOpenings.map((job: any) => ({
          title: job.jobTitle,
          description: job.jobDescription,
          postedDate: job.postedDate,
          desiredKeySkills: job.desiredKeyskills,
          location: job.jobLocation,
        }));
        setJobOpenings(formattedJobOpenings);
      }
    }
  };

  return (
    <div className="work-with-us">
      {workWithUsData && (
        <PageHeadingCard
          image={workWithUsData.image}
          title={workWithUsData.title}
        />
      )}
      <div className="work-with-us-jobs">
        <Title level={4} style={{ color: "orange" }}>
          Current Openings
        </Title>
        <div>
          {jobOpenings.length === 0 ? (
            <div style={{marginTop : '0.7rem'}}>There are no openings currently. Please check back soon</div>
          ) : (
            <WorkWithUsJobOpeningsCard jobOpenings={jobOpenings} />
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkWithUs;
