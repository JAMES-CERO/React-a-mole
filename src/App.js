import logo from './logo.svg';
import './App.css';
import MoleContainer from './MoleContainer';
import EmptySlot from './EmptySlot';
import { useState } from 'react';

function App() {
  let [score, setScore] = useState(0)
  const createMoleHills = () => {
    hills = []
    for( let i = 0; i< 9; i++){
      hills.push(
        <MoleContainer key={i} setScore={setScore} score={score} />
      )
    }
    return (
      <div>
        {hills}
      </div>
    )
  }
  return (
    <div className="App">
      <h1>React a Mole!</h1>
      {score}
      {createMoleHills}
    </div>
  );
}

export default App;
