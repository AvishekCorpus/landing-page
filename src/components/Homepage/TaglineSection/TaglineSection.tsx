import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Skeleton } from "antd";
import { VideoState } from "../../../pages/Homepage";
import "./style.css";

interface Props {
  videoState: VideoState | null;
}

const TaglineSection: React.FC<Props> = ({ videoState }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const buttonTimeout = useRef<NodeJS.Timeout | null>(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMouseActivity = () => {
    setIsButtonVisible(true);
    resetButtonTimeout();
  };

  const resetButtonTimeout = () => {
    if (buttonTimeout.current) {
      clearTimeout(buttonTimeout.current);
    }
    buttonTimeout.current = setTimeout(() => {
      setIsButtonVisible(false);
    }, 3000); // Hide button after 3 seconds of inactivity
  };

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.addEventListener("mousemove", handleMouseActivity);
      videoElement.addEventListener("mouseleave", resetButtonTimeout);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("mousemove", handleMouseActivity);
        videoElement.removeEventListener("mouseleave", resetButtonTimeout);
      }
      if (buttonTimeout.current) {
        clearTimeout(buttonTimeout.current);
      }
    };
  }, []);

  // Check if videoState is null or not loaded yet
  if (!videoState) {
    return (
      <div className="tagline-container">
        <div className="tagline-heading">
          <Skeleton.Input active style={{ width: "120px", marginBottom: "10px" }} />
        </div>
        <div className="tagline-data">
          <div className="tagline-description">
            <Skeleton active paragraph={{ rows: 3 }} />
            <div className="tagling-knowmore-container">
              <Skeleton.Button active style={{ width: 120 }} />
            </div>
          </div>
          <div className="tagline-image-container">
            <Skeleton.Image active style={{ width: "100%", height: "200px" }} />
          </div>
        </div>
      </div>
    );
  }

  // When videoState is loaded, render the content
  return (
    <div className="tagline-container">
      <div className="tagline-heading">
        Welcome to <span>CLS</span>
      </div>
      <div className="tagline-data">
        <div className="tagline-description">
          {videoState?.description}
          <br />
          <div className="tagling-knowmore-container">
            <button className="tagling-knowmore">
              Know more{" "}
              <IoIosArrowRoundForward style={{ fontSize: "1.1rem", marginLeft: "5px" }} />
            </button>
          </div>
        </div>
        <div className="tagline-image-container">
          <div className="tagline-image">
            <video
              ref={videoRef}
              src={videoState?.url}
              loop
              muted
              playsInline
              controlsList="nodownload nofullscreen noremoteplayback"
              className="video"
              height={100}
              width={100}
            ></video>
            {isButtonVisible && (
              <button
                className="tagline-video"
                onClick={togglePlayPause}
                onMouseMove={handleMouseActivity}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  backgroundColor: "var(--orange)",
                  border: "none",
                  borderRadius: "50%",
                  width: "60px",
                  height: "60px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  color: "white",
                }}
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="32px" height="32px">
                    <rect x="6" y="4" width="4" height="16" />
                    <rect x="14" y="4" width="4" height="16" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="32px" height="32px">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
                <span>{!isPlaying ? "Play now" : ""}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaglineSection;
