import "./App.css";
import statue from "./assets/statue.png"
import floor from "./assets/floor.png"
import { Aurelius } from "./Aurelius";
function App() {
  return (
    <div className="app">
      <div className="title">
      <p >Aurelius <br/>meditations</p>
      </div>
      <div className="container">
      <div className="meditations"><img src={statue} className="statue"/>
      </div>
      <Aurelius />
    </div>
    {/* <img src={floor} className="floor"/> */}

      </div>
  );
}

export default App;
