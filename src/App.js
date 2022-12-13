import About from './About/About';
import './App.css';
import Contacts from './components/contacts/Contacts';
import Skills from './components/skills/Skills';
import Work from './components/work/Work';
import Header from './Header/Header';
import Home from './Home/Home';
import { Toaster } from 'react-hot-toast';

function App() {
   return (
      <div className="App">
         <Header></Header>
         <main className="main">
            <Home></Home>
            <About></About>
            <Skills></Skills>
            <Work></Work>
            <Contacts></Contacts>
         </main>
         <Toaster />
      </div>
   );
}

export default App;
