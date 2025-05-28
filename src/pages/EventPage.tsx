import { Card, Carousel } from "antd";
import React, { useEffect, useState } from "react";
import { GoTriangleLeft, GoTriangleRight } from "react-icons/go";
import PageHeadingCard from "../components/shared/PageHeadingCard/PageHeadingCard";
import "./styles/eventpage.css";

interface Props {}

const EventPage: React.FC<Props> = () => {
  const [eventData, setEventData] = useState<any>();

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
    const query = encodeURIComponent(`*[_type == "event"][0] {
      title,
      image {
        asset -> {
          url
        },
        imageDescription
      },
      description,
       eventArray[] {
        title,
        image {
          asset -> {
            url
          },
          imageDescription
        },
        description
      }
    }`);
    const url = `https://tr3yh6z2.api.sanity.io/v1/data/query/production?query=${query}`;
    const res = await fetch(url).then((res) => res.json());
    setEventData(res?.result);
  };

  useEffect(() => {
    document.title = "Events | Corpus Life Science";
    getData();
  }, []);

  return (
    <div className="eventpage-container">
      <PageHeadingCard
        image={{
          src: eventData?.image?.asset?.url,
          description: eventData?.image?.imageDescription,
        }}
        title="Events"
      />
      <div className="eventpagedata-description">{eventData?.description}</div>
      <div>
        <Carousel
          className="carousel-container"
          arrows
          infinite
          prevArrow={<CustomPrevArrow />}
          nextArrow={<CustomNextArrow />}
          dots={false}
          autoplay
          autoplaySpeed={3000}
          slidesToShow={1}
          slidesToScroll={1}
        >
          {eventData?.eventArray?.map((card: any, index: any) => (
            <div key={index} className="event-card">
              <Card
                hoverable
                cover={<img alt="example" src={card?.image?.asset?.url} />}
                style={{ margin: "0 auto" }}
              >
                <div className="event-division">
                  <div className="event-line"></div>
                  <div
                    style={{
                      flex: 0.7,
                      fontSize: "1.8rem",
                      color: "var(--orange)",
                      fontWeight: 500,
                      width: "fit-content",
                    }}
                  >
                    {card.title}
                  </div>
                  <div className="event-line"></div>
                </div>
                <div
                  style={{
                    color: "gray",
                    fontWeight: 400,
                    textAlign: "center",
                    lineHeight: "30px",
                  }}
                >
                  {card.description}
                </div>
              </Card>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default EventPage;
