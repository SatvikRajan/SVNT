import React, { useState, useRef } from 'react';

const ScrollableTimeline = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const timelineRef = useRef(null);

  const handleScroll = (event) => {
    const { scrollLeft, scrollWidth, clientWidth } = event.target;
    const pageWidth = scrollWidth / data.length;
    const newPage = Math.floor(scrollLeft / pageWidth);

    if (currentPage !== newPage) {
      setCurrentPage(newPage);
    }
  };

  const handlePageChange = (pageIndex) => {
    timelineRef.current.scrollTo({
      left: pageIndex * timelineRef.current.offsetWidth / data.length,
      behavior: 'smooth',
    });
  };

  return (
    <div className="timeline-container" ref={timelineRef} onScroll={handleScroll}>
      {data.map((item, index) => (
        <div key={index} className="timeline-item">
          <span className="date-range">{item.dateRange}</span>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
      <ul className="pagination">
        {data.map((item, index) => (
          <li key={index} className={currentPage === index ? 'active' : ''}>
            <button onClick={() => handlePageChange(index)}>Page {index + 1}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScrollableTimeline;