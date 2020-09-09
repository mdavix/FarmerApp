import React, { useState }  from 'react';
import './App.css';
import { cost } from './cost';
import { isTripValid } from './isTripValid';

function App() {
  const [corn, setCorn] = useState(0);
  const [journeyCost, setJourneyCost] = useState(0);
  const [geese, setGeese] = useState(0);
  const [isJourneyValid, setJourneyValid] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Please enter the amount of bags of corn below:
        </p>
        <input type="text" value={corn} onChange={(e)=>setCorn(e.target.value)}></input>
        <p>
          Please enter the amount of geese below:
        </p>
        <input type="text" value={geese} onChange={(e)=>setGeese(e.target.value)}></input>
        <button onClick={doCalculation}>Press me</button>
        {journeyCost}
        {isJourneyValid}
      </header>
    </div>
  );

  function doCalculation(numberOfBags){
    setJourneyValid(isTripValid(corn, geese) ? "Trip is valid" : "Trip is not valid");
    setJourneyCost(cost(corn, geese));
  }
}

export default App;
