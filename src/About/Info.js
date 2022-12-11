import React from 'react';

const Info = () => {
   return (
      <div className="about_info grid">
         <div className="about_box">
            <i className="bx bx-award about_icon"></i>
            <h2 className="about_title">Experience</h2>
            <span className="about_subtitle">8 Years Working</span>
         </div>

         <div className="about_box">
            <i className="bx bx-briefcase-alt about_icon"></i>
            <h2 className="about_title">Completed</h2>
            <span className="about_subtitle">48 + Projects</span>
         </div>

         <div className="about_box">
            <i class="bx bx-support about_icon"></i>
            <h2 className="about_title">Support</h2>
            <span className="about_subtitle">Online 24/7</span>
         </div>
      </div>
   );
};

export default Info;
