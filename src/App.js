import React, { useState }  from 'react';
import './App.css';
import { cost } from './cost';
import { isTripValid } from './isTripValid';
import { tripPlanner } from './tripPlanner';

function App() {
  const [corn, setCorn] = useState("");
  const [geese, setGeese] = useState("");
  const [resultMessage, setResultMessage] = useState("Please enter values");

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://i.ytimg.com/vi/fsAgC8BpEu0/maxresdefault.jpg" alt="farmer"></img>
        <p>
          Please enter the amount of bags of corn below:
        </p>
        <input type="text" value={corn} onChange={(e)=>setCorn(e.target.value)}></input>
        <p>
          Please enter the amount of geese below:
        </p>
        <input type="text" value={geese} onChange={(e)=>setGeese(e.target.value)}></input>
        <button onClick={doCalculation}>Press me</button>
        {resultMessage}
      </header>
    </div>
  );

  function doCalculation(){
    const costOfJourney = cost({ bagsOfCorn: parseInt(corn), numberOfGeese: parseInt(geese) });
    const listOfCrossings = tripPlanner({ bagsOfCorn: parseInt(corn), numberOfGeese: parseInt(geese) });
    
    setResultMessage(isTripValid(parseInt(corn), parseInt(geese)) 
      ? "You should " + listOfCrossings.crossings.join(", then ") + " and it will cost you £" + costOfJourney.cost
      : "Journey is invalid");
  }
}

export default App;
