import About from './About/About';
import './App.css';
import Skills from './components/skills/Skills';
import Header from './Header/Header';
import Home from './Home/Home';

function App() {
   return (
      <div className="App">
         <Header></Header>
         <main className="main">
            <Home></Home>
            <About></About>
            <Skills></Skills>
         </main>
      </div>
   );
}

export default App;
