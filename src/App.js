import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';

function App() {
   return (
      <div className="App">
         <Header></Header>
         <main className="main">
            <Home></Home>
         </main>
      </div>
   );
}

export default App;
