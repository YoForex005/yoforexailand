import React from "react";


const DemoVideo = () => {
  return (
    <div style={{ position: "relative", paddingBottom: "56.25%", height: "0" }}>
      <iframe
        id="js_video_iframe"
        src="https://jumpshare.com/embed/86mqZ8zjykZo2OK86YkJ"
        frameBorder="0"
        allowFullScreen
        style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }}
      ></iframe>
    </div>
  );
};

export default DemoVideo;
