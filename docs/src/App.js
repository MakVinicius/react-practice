import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}
function App() {
  const [count, setCount] = useState(0);

  function handleCount() {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <MyButton count={count} onClick={handleCount} />
      <MyButton count={count} onClick={handleCount} />
    </div>
  );
}

export default App;
