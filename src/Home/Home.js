import React from 'react';
import Data from './Data';
import './Home.css';
import Social from './Social';

const Home = () => {
   return (
      <section className="home section" id="home">
         <div className="home_container container grid">
            <div className="home_content grid">
               <Social></Social>

               <div className="home_img"></div>
               <Data></Data>
            </div>
         </div>
      </section>
   );
};

export default Home;
