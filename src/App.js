import React, { useState }  from 'react';
import './App.css';
import { cost } from './cost';

function App() {
  const [corn, setCorn] = useState(0);
  const [journeyCost, setJourneyCost] = useState(0);
  const [geese, setGeese] = useState(0);

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
      </header>
    </div>
  );

  function doCalculation(numberOfBags){
    setJourneyCost(cost(corn, geese));
  }
}

export default App;
