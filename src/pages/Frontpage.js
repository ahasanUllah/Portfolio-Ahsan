import React from 'react';
import Header from '../Header/Header';
import Home from '../Home/Home';
import About from '../About/About';
import Skills from '../components/skills/Skills';
import Work from '../components/work/Work';
import Contacts from '../components/contacts/Contacts';

const Frontpage = () => {
   return (
      <div>
         <Header></Header>
         <main className="main">
            <Home></Home>
            <About></About>
            <Skills></Skills>
            <Work></Work>
            <Contacts></Contacts>
         </main>
      </div>
   );
};

export default Frontpage;
