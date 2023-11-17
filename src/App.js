import './App.css';
import Desert from './Desert';
import Drink from './Drink';
import Food from './Food';
import Logo from './Logo';
import Navbar from './Navbar';
import Subject from './Subject';

function App() {
  return (
    <div className="App">

      <Navbar/>
      <Logo/>
      <Subject/>
      <Drink/>
      <Food/>
      <Desert/>

    </div>
  );
}

export default App;
