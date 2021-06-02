import Lector from "./simulator/Lector";
import Scale from "./simulator/Scale";
const App = () => {
  return (
    <div className="App">
      <Lector />
      <br></br>
      <div className="Scale">
        <Scale />
      </div>
    </div>
  );
};

export default App;
