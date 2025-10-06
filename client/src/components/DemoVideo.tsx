import React from "react";

const DemoVideo = () => {
  return (
    <div className="video-wrapper">
      <div className="relative pb-[56.25%] h-0">
        <iframe
          id="js_video_iframe"
          src="https://www.youtube.com/embed/NpJ0JUy4VV0?si=KyJMy8lQBsbPVX7_"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
          style={{ border: "none" }}
        ></iframe>
      </div>
    </div>
  );
};

export default DemoVideo;
