import React from 'react';
import './Work.css';

const WorkItems = ({ item }) => {
   return (
      <div className="work__card" key={item.id}>
         <img src={item.image} alt="" className="work__img" />
         <h2 className="work__title">{item.title}</h2>
         <div className="work__flex">
            <a href={item.liveWebsite} target="_blank" rel="noreferrer" className="work__button">
               Live <i className="bx bx-right-arrow-alt work work__button-icon"></i>
            </a>
            <a href={item.githubClient} target="_blank" rel="noreferrer" className="work__button">
               Github Client <i className="bx bx-right-arrow-alt work work__button-icon"></i>
            </a>
            {item.githubServer ? (
               <a href={item.githubServer} target="_blank" rel="noreferrer" className="work__button">
                  Github Server <i className="bx bx-right-arrow-alt work work__button-icon"></i>
               </a>
            ) : (
               ''
            )}
         </div>
      </div>
   );
};

export default WorkItems;
