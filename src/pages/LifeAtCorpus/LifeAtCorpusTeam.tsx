import { Carousel } from "antd";
import { useEffect, useState } from "react";
import { GoTriangleLeft, GoTriangleRight } from "react-icons/go";
import PageHeadingCard from "../../components/shared/PageHeadingCard/PageHeadingCard";
import "../styles/teamcorpus.css";

const LifeAtCorpusTeam = () => {
  const [cardData, setCardData] = useState([]);
  const [pageData,setPageData] = useState({
    image : "",
    description : ""
  })
  const [mainImage,setMainImage] = useState("");

  const [slidesToShow, setSlidesToShow] = useState(4);
  const [cardWidth, setCardWidth] = useState(300);
  const updateSlidesToShow = () => {
    const width = window.innerWidth;
    if (width <= 480) {
      setSlidesToShow(1);
    } else if (width <= 768) {
      setSlidesToShow(2);
    } else if (width <= 1024) {
      setSlidesToShow(3);
    } else {
      setSlidesToShow(4);
    }
  };

  const updateCardWidth = () => {
    const width = window.innerWidth;
    if (width >= 1200) {
      setCardWidth(240);
    } else if (width >= 768) {
      setCardWidth(240);
    } else {
      setCardWidth(240);
    }
  };

  useEffect(() => {
    getData();
    updateSlidesToShow();
    updateCardWidth();
    window.addEventListener("resize", updateSlidesToShow);
    window.addEventListener("resize", updateCardWidth);

    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
      window.removeEventListener("resize", updateCardWidth);
    };
  }, []);

  const CustomPrevArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
    <div className="custom-arrow custom-prev" onClick={onClick}>
      <GoTriangleLeft />
    </div>
  );

  const CustomNextArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
    <div className="custom-arrow custom-next" onClick={onClick}>
      <GoTriangleRight />
    </div>
  );

  const getData = async () => {
    const query = encodeURIComponent(`*[_type == "lifeAtCorpus"][0] {
      teamCorpus {
        mainImage {
          "imageUrl": asset->url,
        },
        pageImage {
          "imageUrl": asset->url,
        },
        pageImageDescription,
        teamMembers[]{
        "imageUrl": asset->url,
        }
      }
    }`);
    const url = `https://tr3yh6z2.api.sanity.io/v1/data/query/production?query=${query}`;
    const res = await fetch(url).then((res) => res.json());
    console.log(res?.result);
    setMainImage(res?.result?.teamCorpus?.mainImage?.imageUrl);
    setCardData(res?.result?.teamCorpus?.teamMembers)
    setPageData({image : res?.result?.teamCorpus?.pageImage?.imageUrl , description : res?.result?.teamCorpus?.pageImageDescription})
  };
  return (
    <div>
      <PageHeadingCard
        title="Team Corpus"
        image={{
          description:
            pageData?.description,
          src: pageData?.image,
        }}
      />
      <div className="teamcorpus-main-image">
        <img src={mainImage} />
      </div>
      <Carousel
        className="carousel-container"
        arrows
        infinite
        prevArrow={<CustomPrevArrow />}
        nextArrow={<CustomNextArrow />}
        dots={false}
        autoplay
        autoplaySpeed={3000}
        slidesToShow={slidesToShow}
        slidesToScroll={1}
      >
        {cardData?.map((card: any, index) => (
          <div key={index} className="featured-card">
            <img
              style={{ width: cardWidth, margin: "0 auto" }}
              src={card.imageUrl}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default LifeAtCorpusTeam;
