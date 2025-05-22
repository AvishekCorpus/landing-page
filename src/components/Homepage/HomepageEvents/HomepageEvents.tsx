import React, { useState } from "react";
import "./style.css";
import { PiTelevisionLight } from "react-icons/pi";

interface Event {
  icon: any;
  title: string;
  description: string;
}

const HomepageEvents: React.FC = () => {
  const [events] = useState<Event[]>([
    {
      icon: <PiTelevisionLight />,
      title: "CSR",
      description:
        "Our free guidebook provides a comprehensive roadmap to personal success through life coaching. ",
    },
    {
      icon: <PiTelevisionLight />,
      title: "Team",
      description:
        "Our free guidebook provides a comprehensive roadmap to personal success through life coaching. ",
    },
    {
      icon: <PiTelevisionLight />,
      title: "Training and development",
      description:
        "Our free guidebook provides a comprehensive roadmap to personal success through life coaching.  ",
    },
  ]);
  return (
    <div className="homepage-events-container">
      <div className="homepage-events-heading">Events & Participation</div>
      <div className="homepage-events-description">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and s
      </div>
      <div className="homepage-events-cards-container">
        {events.map((ev, key) => {
          return (
            <div key={key} className="homepage-events-card">
              <div className="homepage-events-card-icon">{ev.icon}</div>
              <div className="homepage-events-card-title">{ev.title}</div>
              <div className="homepage-events-card-description">
                {ev.description}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomepageEvents;
