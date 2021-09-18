import "./App.css";
import statue from "./assets/statue.png"
import floor from "./assets/floor.png"
import { Aurelius } from "./Aurelius";
function App() {
  return (
    <div className="container">
      <div className="title">
      <p >Aurelius <br/>meditations</p>
      </div>
      <div className="meditations"><img src={statue} className="statue"/>
      {/* <img src={floor} className="floor"/> */}
      <Aurelius />
    </div>
      </div>
  );
}

export default App;
