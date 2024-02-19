import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>Quick Links</h3>
            <p>Email: info@example.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
          <div className="col-md-6">
            <h3>Get In Touch</h3>
            <p>Facebook | Twitter | Instagram</p>
          </div>
        </div>
      </div>
      <div className="bottom-bar">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
