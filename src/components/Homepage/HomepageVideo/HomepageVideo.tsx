import React, { useRef, useState, useEffect } from "react";
import "./style.css"

const HomepageVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
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
    }, 1000); // Hide button after 1 second of inactivity
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

  return (
    <div className="video-container ">
      {/* <video
        ref={videoRef}
        src="https://res.cloudinary.com/deveshk-dev/video/upload/v1734888538/g0fgq3si2x9yehrz8l64.mp4"

        loop
        muted
        playsInline
        controlsList="nodownload nofullscreen noremoteplayback"
        className="video"
      ></video>
      {isButtonVisible && (
        <button
          onClick={togglePlayPause}
          onMouseMove={handleMouseActivity}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            border: "none",
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="black"
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
              fill="black"
              width="32px"
              height="32px"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
      )} */}
    </div>
  );
};

export default HomepageVideo;
