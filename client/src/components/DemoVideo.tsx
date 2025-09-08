import React from "react";


const DemoVideo = () => {
  return (
    <div className="video-wrapper">
      <div className="relative pb-[56.25%] h-0">
        <iframe
          id="js_video_iframe"
          src="https://jumpshare.com/embed/5Y9fZ7HgKjBQRHC9zi6D"
          allowFullScreen
          className="absolute t-0; l-0; w-[100%] h-[100%]"
        ></iframe>
      </div>
    </div>
  );
};

export default DemoVideo;
