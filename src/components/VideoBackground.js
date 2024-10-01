import React from 'react';
import '../VideoBackground.css'; // Make sure the CSS is linked for styling

const VideoBackground = () => {
  return (
    <div className="background-container">
      <video className="background-video" autoPlay loop muted>
        <source src="/videos/start-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1>P7 Provider Youth Talent <br /> best team</h1>
      </div>
    </div>
  );
};

export default VideoBackground;
