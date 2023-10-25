import kinoko from "./kinoko.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header bg-color1">
        <img src={kinoko} className="App-logo" alt="logo" />
        <div className="Logos">
          <img src={kinoko} className="App-logo2" alt="logo" />
          <img src={kinoko} className="App-logo3" alt="logo" />
        </div>
        <p className="text-color2">There are three Goombas.</p>
      </header>
    </div>
  );
}

export default App;
