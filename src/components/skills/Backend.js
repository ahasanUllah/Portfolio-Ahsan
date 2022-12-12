import React from 'react';

const Backend = () => {
   return (
      <div className="skills_content">
         <h2 className="sills_title">Backend Developer</h2>
         <div className="skills_box">
            <div className="skills_group">
               <div className="skills_data">
                  <i class="bx bx-badge-check"></i>

                  <div>
                     <h3 className="skills_name">Node</h3>
                     <span className="skills_level">Basic</span>
                  </div>
               </div>

               <div className="skills_data">
                  <i class="bx bx-badge-check"></i>

                  <div>
                     <h3 className="skills_name">Express</h3>
                     <span className="skills_level">Intermediate</span>
                  </div>
               </div>

               <div className="skills_data">
                  <i class="bx bx-badge-check"></i>

                  <div>
                     <h3 className="skills_name">MongoDB</h3>
                     <span className="skills_level">Intermediate</span>
                  </div>
               </div>
            </div>

            <div className="skills_group">
               <div className="skills_data">
                  <i class="bx bx-badge-check"></i>

                  <div>
                     <h3 className="skills_name">Firebase</h3>
                     <span className="skills_level">Intermediate</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Backend;
