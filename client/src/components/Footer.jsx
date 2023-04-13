import React from "react";
import "../../css/footer.css";

const Footer = () => {
  return (
    <div className="footer_">
      <div className="foot">
        <div className="foot_top">
          <div className="left_footer">
            <p className="foot_app">BlogApp</p>
            <p id="title_">Share your thoughts, connect with the world</p>
          </div>
          <div className="right_footer">
            <p className="foot_links">Home</p>
            <p className="foot_links">Explore</p>
            <p className="foot_links">Create</p>
          </div>
        </div>
      </div>
      <hr className="bar_foot" />
      <div className="policy_">
        <p>Copyright@2023 BlogApp Inc. All rights reserved </p>
        <p>Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
