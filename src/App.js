import React, { useState }  from 'react';
import './App.css';
import { cost } from './cost';
import { isTripValid } from './isTripValid';

function App() {
  const [corn, setCorn] = useState("");
  const [geese, setGeese] = useState("");
  const [journeyCost, setJourneyCost] = useState(0);
  const [isJourneyValid, setJourneyValid] = useState("Please enter values");

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
        {isJourneyValid}
      </header>
    </div>
  );

  function doCalculation(numberOfBags){
    setJourneyValid(isTripValid(parseInt(corn), parseInt(geese)) ? "Journey is valid and will cost £" + journeyCost : "Journey is invalid");
    setJourneyCost(cost(parseInt(corn), parseInt(geese)));
  }
}

export default App;
