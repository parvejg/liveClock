import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="App">
      <h1>Live Clock + Counter</h1>
      <h2>{time.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
      })}</h2>
      <h2>{time.toLocaleDateString()}</h2>

      <h3>Counter: {count}</h3>
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => count >0 &&  setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Rest</button>
      </div>
    </div>
  );
}

export default App;
