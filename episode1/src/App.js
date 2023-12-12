import './App.css';
import { useState } from "react";

function App() {
  const [age, setAge] = useState(0);
  const [showText, setShowText] = useState(true);
  const [number, setNumber] = useState(0);

  const increaseAge = () => {
    setAge(age + 1);
  }

  const changeShowText = () => {
    setShowText(!showText);
  }

  const increaseNumber = () => {
    setNumber(number + 1);
  }

  const decreaseNumber = () => {
    setNumber(number - 1);
  }

  const setNumberToZero = () => {
    setNumber(0);
  }

  return (
    <div className="App">
      {age} <button onClick={increaseAge}> Increase age </button>
      <button onClick={changeShowText}> Show/Hide </button>
      {showText && <h1> HI MY NAME IS MAK </h1>}

      <div>
        <button onClick={increaseNumber}>Increase</button>
        <button onClick={decreaseNumber}>Decrease</button>
        <button onClick={setNumberToZero}>Set to Zero</button>
        <h1> {number} </h1>
      </div>
    </div>
  );
}

export default App;
