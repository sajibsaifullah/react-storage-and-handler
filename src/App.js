import logo from './logo.svg';
import './App.css';
import Cosmetics from './component/Cosmetics/Cosmetics';
import Shoes from './component/Shoes/Shoes';

function App() {
  return (
    <div className="App">
      <Cosmetics></Cosmetics>
      <Shoes></Shoes>
    </div>
  );
}

export default App;
