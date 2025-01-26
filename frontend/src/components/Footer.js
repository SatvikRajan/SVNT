import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row d-flex align-items-center justify-content-between">
          <div className="col-md-6 fs-5 foot">
            <span>SVNT Infotech Pvt. Ltd.</span>
          </div>
          <div className="col-md-6 p-2 foot">
            <div
              style={{ gap: "30px", marginBottom: "10px" }}
              className="d-flex align-items-start footer-email"
            >
              <svg
                width="22"
                height="17"
                viewBox="0 0 22 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.09313 16.9994C1.50824 16.9994 1.01316 16.8093 0.607896 16.429C0.202632 16.0488 0 15.5843 0 15.0355V2.66705C0 2.11827 0.202632 1.65375 0.607896 1.2735C1.01316 0.893249 1.50824 0.703125 2.09313 0.703125H19.9069C20.4918 0.703125 20.9868 0.893249 21.3921 1.2735C21.7974 1.65375 22 2.11827 22 2.66705V15.0355C22 15.5843 21.7974 16.0488 21.3921 16.429C20.9868 16.8093 20.4918 16.9994 19.9069 16.9994H2.09313ZM11 9.45712L20.2632 3.89965L20.085 2.33273L11 7.76485L1.91496 2.33273L1.73682 3.89965L11 9.45712Z"
                  fill="white"
                />
              </svg>
              <span><Link className="mail1"to="mailto:info@svntech.com">info@svntech.com</Link></span>
            </div>
            <div style={{ gap: "30px" }} className="d-flex footer-email">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.8154 19.1113C15.7091 19.0981 13.5962 18.5952 11.4767 17.6025C9.35722 16.6098 7.41111 15.2159 5.63839 13.4208C3.87285 11.6258 2.50705 9.66417 1.54099 7.53599C0.574936 5.40779 0.0985111 3.29055 0.111716 1.18427C0.113818 0.848979 0.227344 0.568484 0.452293 0.342783C0.677243 0.117064 0.957362 0.00525509 1.29265 0.00735713L4.93779 0.0302098C5.22007 0.0319795 5.46845 0.125605 5.68295 0.311086C5.89744 0.496568 6.0332 0.724894 6.09023 0.996064L6.7101 4.28845C6.75262 4.59393 6.74166 4.85609 6.67723 5.07492C6.61282 5.29374 6.49847 5.47715 6.33418 5.62515L3.73715 8.12148C4.14792 8.88492 4.61804 9.60755 5.14753 10.2894C5.67702 10.9712 6.25075 11.6228 6.86873 12.2443C7.47816 12.8614 8.12655 13.435 8.81389 13.9652C9.50123 14.4954 10.244 14.9894 11.0421 15.4472L13.5662 12.9332C13.7421 12.7524 13.9546 12.6262 14.2037 12.5547C14.4527 12.4831 14.7111 12.4668 14.9788 12.5058L18.0784 13.1571C18.3602 13.2334 18.5896 13.3788 18.7667 13.5934C18.9437 13.8081 19.0314 14.0508 19.0297 14.3216L19.007 17.9452C19.0049 18.2805 18.8896 18.5592 18.6611 18.7813C18.4326 19.0034 18.1507 19.1134 17.8154 19.1113Z"
                  fill="white"
                />
              </svg>

              <span ><a style={{filter: 'invert(1)', fontWeight: '500'}} target="blank" href="https://wa.me/8800630726">+91 88006 30726</a></span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container bottom-bar d-flex"
      >
        <p>
          Legal Disclaimer |&nbsp; Disclaimer: Fraud Recruitment Offers |&nbsp;
          A Group Company{" "}
        </p>
        <p className="justify-content-end">&copy; 2025 All rights reserved. SVNT Infotech Pvt Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;
