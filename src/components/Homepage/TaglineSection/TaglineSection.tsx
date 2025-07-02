import React, { useEffect, useRef, useState } from "react";
import { Skeleton } from "antd";
import type { VideoState } from "../../../pages/Homepage";
import "./style.css";

interface Props {
  videoState: VideoState | null;
}

const TaglineSection: React.FC<Props> = ({ videoState }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const buttonTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Check if videoState is null or not loaded yet
  if (!videoState) {
    return (
      <div className="tagline-skeleton-container">
        <div className="tagline-skeleton-text">
          <Skeleton.Input
            active
            style={{ width: "120px", marginBottom: "10px" }}
          />
          <Skeleton active paragraph={{ rows: 3 }} />
          <Skeleton.Button active style={{ width: 120, marginTop: 16 }} />
        </div>
        <div className="tagline-skeleton-video">
          <Skeleton.Image active style={{ width: "100%", height: "200px" }} />
        </div>
      </div>
    );
  }

  // When videoState is loaded, render the content
  return (
    <div className="tagline-section">
      {/* Heading on top */}
      <div className="tagline-heading">
        Welcome to{" "}
        <span className="tagline-heading-highlight">Corpus Life Science</span>
      </div>
      {/* Flex row: text and video */}
      <div className="tagline-flex-row">
        {/* Left: Text */}
        <div className="tagline-text">
          <div className="tagline-description">{videoState?.description}</div>
        </div>
        {/* Right: Video */}
        <div className="tagline-video-container">
          <div className="tagline-video-wrapper">
            <video
              ref={videoRef}
              src={videoState?.url}
              loop
              muted
              playsInline
              controlsList="nodownload nofullscreen noremoteplayback"
              className="tagline-video-element"
            ></video>
            {isButtonVisible && (
              <button
                className="tagline-video-playpause"
                onClick={togglePlayPause}
                onMouseMove={handleMouseActivity}
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    width="32px"
                    height="32px"
                  >
                    <rect x="6" y="4" width="4" height="16" />
                    <rect x="14" y="4" width="4" height="16" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    width="32px"
                    height="32px"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaglineSection;
