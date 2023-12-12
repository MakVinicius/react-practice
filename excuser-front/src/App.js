import './App.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';

function App() {
  const [url, setUrl] = useState('https://excuser-three.vercel.app/v1/excuse/');
  const [excuse, setExcuse] = useState('');

  const fetchExcuse = (excuse) => {
    Axios.get(url + excuse + "/").then((res) => {
      setExcuse(res.data[0].excuse);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Generate an Excuse</h1>
        <button name="party" onClick={() => fetchExcuse("party")}>Party</button>
        <button name="family" onClick={() => fetchExcuse("family")}>Family</button>
        <button name="office" onClick={() => fetchExcuse("office")}>Office</button>
        <p>{excuse}</p>
      </header>
    </div>
  );
}

export default App;
