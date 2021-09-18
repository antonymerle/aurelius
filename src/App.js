import "./App.css";
import statue from "./assets/statue.png"
import { Aurelius } from "./Aurelius";
function App() {
  return (
    <div className="container">
      
      <img src={statue} className="statue"/>
      <Aurelius />
    </div>
  );
}

export default App;
