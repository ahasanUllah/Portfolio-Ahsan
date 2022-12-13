import React from 'react';

const WorkItems = ({ item }) => {
   return (
      <div className="work__card" key={item.id}>
         <img src={item.image} alt="" className="work__img" />
         <h2 className="work__title">{item.title}</h2>
         <a href="#" className="work__button">
            Demo <i className="bx bx-right-arrow-alt work work__button-icon"></i>
         </a>
      </div>
   );
};

export default WorkItems;
