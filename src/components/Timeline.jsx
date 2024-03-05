import React, { useState } from 'react';
import cloud from './cloud.jpg';

const ImageTextPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3; // Assuming you have 3 pages

  const prevPage = () => {
    setCurrentPage(prevPage => (prevPage === 1 ? totalPages : prevPage - 1));
  };

  const nextPage = () => {
    setCurrentPage(prevPage => (prevPage === totalPages ? 1 : prevPage + 1));
  };

  return (
    <div className="video-container">
      <img src={cloud} className="cloud" alt="" />
      <div className="content">
        <p style={{ display: currentPage === 1 ? 'block' : 'none' }}>This is page 1</p>
        <p style={{ display: currentPage === 2 ? 'block' : 'none' }}>This is page 2</p>
        <p style={{ display: currentPage === 3 ? 'block' : 'none' }}>This is page 3</p>
        <div className="pagination">
          <button onClick={prevPage}>Prev</button>
          <span>{currentPage} of {totalPages}</span>
          <button onClick={nextPage}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default ImageTextPagination;
