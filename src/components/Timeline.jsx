import React, { useState, useRef, useEffect } from 'react';
import video from '../images/video.mp4'
const Timeline = ({ video, contentData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const contentRef = useRef(null);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % contentData.length;
    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + contentData.length) % contentData.length;
    setCurrentIndex(prevIndex);
  };

  useEffect(() => {
    // Handle content fading transitions
    contentRef.current.style.opacity = 0; 

    // Small delay to allow for fade out before fading in
    setTimeout(() => {
      contentRef.current.style.opacity = 1;
    }, 200); 
  }, [currentIndex, contentData]);

  return (
    <div className="timeline">
      <h1>Company Timeline</h1>
      <div className="video-container">
        <video className="video" src={video} autoPlay loop muted /> {/* Add muted to prevent audio overlap */}
        <div className="content" ref={contentRef} style={{ transition: 'opacity 0.5s ease-in-out' }}>
          {contentData[currentIndex]}
        </div>
      </div>
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Timeline;
