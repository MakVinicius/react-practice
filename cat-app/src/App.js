import "./App.css";
import { useState, useEffect } from 'react';
import Axios from 'axios';

function App() {
  // fetch("https://catfact.ninja/fact")
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  // });
  const [catfact, setCatFact] = useState("");

  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  };

  useEffect(() => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  }, []);

  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState(null);

  const fetchAge = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setPredictedAge(res.data);
    });
  }
  

  return (
    <div className="App">
      <button onClick={fetchCatFact}> Generate Cat Fact</button>
      <p> {catfact} </p>
      <br />

      <input placeholder="Your Name" type="text" onChange={(value) => {setName(value.target.value)}} />
      <button onClick={fetchAge}> Predict Age </button>

      <h1> Name: {predictedAge?.name}</h1>
      <h1> Predicted Age: {predictedAge?.age}</h1>
      <h1> Predicted Count: {predictedAge?.count}</h1>
    </div>
  );
}

export default App;