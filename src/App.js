import './App.css';
import MoleContainer from './MoleContainer';
import { useState } from 'react';
import MoleImg from './moleImg';

function App() {
  let [score, setScore] = useState(0)

  const createMoleHills = () => {
    let hills = []
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
      {createMoleHills()}
    </div>
  );
}

export default App;
