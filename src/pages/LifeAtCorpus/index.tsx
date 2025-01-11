import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PoliciesCarousel from "../../components/LifeAtCorpus/PoliciesCarousel";
import RewardCard from "../../components/LifeAtCorpus/RewardCard";
import PageHeadingCard from "../../components/shared/PageHeadingCard/PageHeadingCard";
import "../styles/lifeatcorpus.css";

const LifeAtCorpus: React.FC = () => {
  const [pageData, setPageData] = useState({
    image: "",
    description: "",
  });
  const [teamCorpusDescription, setTeamCorpusDesc] = useState("");
  const [workwithusDescription, setWorkwithusDescription] = useState("");
  const [rewardsSection, setRewardsSection] = useState({
    sectionHeading: "",
    sectionDescription: "",
    rewardCards: [],
  });
  const [policySection, setPolicySection] = useState({
    policyDescription: "",
    policyCards: [],
  });
  const [inspiringPioneer, setInspiringPioneer] = useState({
    image: { imageUrl: "" },
    description: "",
  });
  const [ourCulture, setOurCulture] = useState({
    image: { imageUrl: "" },
    description: "",
  });

  const navigate = useNavigate();
  const getData = async () => {
    const query = encodeURIComponent(`*[_type == "lifeAtCorpus"][0] {
      lifeAtCorpusPage {
        pageImage {
          "imageUrl": asset->url,
        },
        pageImageDescription,
        teamCorpusDescription,
        workWithUsDescription,
        rewardsAndRecognition {
          sectionHeading,
          sectionDescription,
          rewardCards[] {
            title,
            description,
            image {
              "imageUrl": asset->url
            }
          }
        },
        policy {
          policyDescription,
          policyCards[] {
            title,
            description,
            image {
              "imageUrl": asset->url
            }
          }
        },
        inspiringPioneer {
          image {
              "imageUrl": asset->url
          },
          description
        },
        ourCulture {
          image {
              "imageUrl": asset->url
          },
          description
        }
      }
    }`);
    const url = `https://tr3yh6z2.api.sanity.io/v1/data/query/production?query=${query}`;
    const res = await fetch(url).then((res) => res.json());
    var result = res?.result?.lifeAtCorpusPage;
    console.log(res?.result);
    setPageData({
      image: result?.pageImage?.imageUrl,
      description: result?.pageImageDescription,
    });
    setTeamCorpusDesc(result?.teamCorpusDescription);
    setWorkwithusDescription(result?.workWithUsDescription);
    setRewardsSection(result?.rewardsAndRecognition);
    setPolicySection(result?.policy);
    setInspiringPioneer(result?.inspiringPioneer);
    setOurCulture(result?.ourCulture);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <PageHeadingCard
        title="Life at Corpus"
        image={{
          description: pageData.description,
          src: pageData.image,
        }}
      />
      <div className="lifeatcorpus-teamcorpus">
        <div className="lifeatcorpus-heading">Team Corpus</div>
        <div className="lifeatcorpus-description">{teamCorpusDescription}</div>
        <div className="lifeatcorpus-action">
          <button
            onClick={() => {
              navigate("/life-at-corpus/team");
            }}
          >
            Know more
          </button>
        </div>
      </div>
      <div className="lifeatcorpus-workwithus">
        <div className="lifeatcorpus-workwithus-heading">
          <div className="lifeatcorpus-heading">Work with us</div>
        </div>
        <div
          className="lifeatcorpus-description"
          style={{ color: "white", fontWeight: 500 }}
        >
          {workwithusDescription}
        </div>
        <div className="lifeatcorpus-joinus">
          <div className="lifeatcorpus-action">
            <button
              onClick={() => {
                navigate("/life-at-corpus/work-with-us");
              }}
            >
              Join us
            </button>
          </div>
        </div>
      </div>
      <div className="lifeatcorpus-rewards">
        <div className="lifeatcorpus-heading">Rewards & recognition</div>
        <div className="lifeatcorpus-description">
          {rewardsSection?.sectionDescription}
        </div>
        <div className="lifeatcorpus-rewardcards">
          {rewardsSection?.rewardCards?.slice(0, 2)?.map((card: any, index) => (
            <RewardCard
              key={index}
              description={card.description}
              title={card.title}
              imageSrc={card.image?.imageUrl}
            />
          ))}
        </div>
      </div>
      <div className="lifeatcorpus-policies">
        <div className="lifeatcorpus-policies-header">
          <div className="lifeatcorpus-policies-title">
            <div className="lifeatcorpus-heading">Policies</div>
          </div>
          <div
            className="lifeatcorpus-description"
            style={{ fontWeight: "bold" }}
          >
            {policySection?.policyDescription}
          </div>
        </div>
        <PoliciesCarousel policies={policySection?.policyCards} />
      </div>
      <div className="lifeatcorpus-heading" style={{ marginLeft: "2rem" }}>
        Inspiring Pioneers
      </div>
      <div className="lifeatcorpus-inspiring-pioneer">
        <div className="lifeatcorpus-inspiring-pioneer-image">
          <img src={inspiringPioneer?.image?.imageUrl} />
        </div>
        <div className="lifeatcorpus-inspiring-pioneer-description">
          {inspiringPioneer?.description}
        </div>
      </div>
      <div className="culture">
        <div
          className="lifeatcorpus-heading"
          style={{
            backgroundColor: "var(--brand-color-green)",
            color: "white",
            padding: "2rem",
            paddingBottom: "1rem",
          }}
        >
          Our Culture
        </div>
        <div
          className="lifeatcorpus-inspiring-pioneer"
          style={{ backgroundColor: "var(--brand-color-green)" }}
        >
          <div
            className="lifeatcorpus-inspiring-pioneer-description"
            style={{
              backgroundColor: "white",
              color: "var(--brand-color-green)",
            }}
          >
            {ourCulture?.description}
          </div>
          <div className="lifeatcorpus-inspiring-pioneer-image">
            <img src={ourCulture?.image?.imageUrl} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeAtCorpus;
