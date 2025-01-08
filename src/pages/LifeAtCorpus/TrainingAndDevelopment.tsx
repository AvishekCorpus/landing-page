import React, { useEffect, useState } from "react";
import PageHeadingCard from "../../components/shared/PageHeadingCard/PageHeadingCard";
import "../styles/traininganddevelopment.css";

const TrainingAndDevelopment: React.FC = () => {
  const [trainingAndDevelopmentData, setTrainingAndDevelopmentData] = useState<{
    sectionDescription: string | null;
    sectionImage: { src: string } | null;
    trainings: Array<{ title: string; src: string; description: string }> | null;
  }>({
    sectionDescription: null,
    sectionImage: null,
    trainings: null,
  });

  useEffect(() => {
    const getData = async () => {
      const query = encodeURIComponent(`*[_type == "lifeAtCorpus"][0] {
        trainingAndDevelopment {
          sectionDescription,
          sectionImage {
            "imageUrl": asset->url
          },
          trainings[] {
            trainingTitle,
            trainingImage {
              "imageUrl": asset->url,
              trainingDescription
            }
          }
        }
      }`);
      const url = `https://tr3yh6z2.api.sanity.io/v1/data/query/production?query=${query}`;
      const res = await fetch(url).then((res) => res.json());

      if (res?.result?.trainingAndDevelopment) {
        const { sectionDescription, sectionImage, trainings } =
          res.result.trainingAndDevelopment;

        setTrainingAndDevelopmentData({
          sectionDescription: sectionDescription || null,
          sectionImage: sectionImage ? { src: sectionImage.imageUrl } : null,
          trainings: trainings
            ? trainings.map((training: any) => ({
                title: training.trainingTitle,
                src: training.trainingImage.imageUrl,
                description: training.trainingImage.trainingDescription,
              }))
            : null,
        });
      }
      console.log(trainingAndDevelopmentData);
    };

    getData();
  }, []);

  return (
    <div>
      {trainingAndDevelopmentData.sectionImage &&
        trainingAndDevelopmentData.sectionDescription && (
          <PageHeadingCard
            image={{
              src: trainingAndDevelopmentData.sectionImage.src,
              description: trainingAndDevelopmentData.sectionDescription,
            }}
            title="Training & Development"
          />
        )}
      {trainingAndDevelopmentData.trainings && trainingAndDevelopmentData.trainings.map((training, index) => {
        return (
            <div key={index} className={index % 2 === 0 ? "training-card" : "training-card inverted"}>
                <div className="training-image">
                    <img src={training.src} alt={training.title} />
                </div>
                <div className="training-description">
                    <h2 className={index % 2 === 0 ? "training-title" : "training-title-inverted"}>{training.title}</h2>
                    <p>{training.description}</p>
                </div>
            </div>
        );
      })}
    </div>
  );
};

export default TrainingAndDevelopment;