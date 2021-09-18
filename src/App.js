import "./App.css";
import statue from "./assets/david.png"
// import floor from "./assets/floor.png"
import { Aurelius } from "./Aurelius";
function App() {


  const degree = Math.floor((Math.random() * 360));

  return (
    <div className="app">
      <div className="title">
      <p >Ta<br/>eis<br/>heauton</p>
      </div>
      <div className="container">
      <div className="meditations"><img src={statue} className="statue" style={{
        filter: `hue-rotate(${degree}deg)`
      }}/>

      </div>
      <Aurelius />
    </div>
   {/* <img src={floor} className="floor"/> */}
</div>
    
  );
}

export default App;
