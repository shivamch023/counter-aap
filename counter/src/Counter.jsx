import React, { useState } from "react";
import "./Counter.css";


const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="Counter">
      <div className="counter-app">
        <h1>This is Counter app</h1>
        <div className="count">
        <p>Count : </p>
        <h3>{count}</h3>
        </div>
        

        <div className="btn">
        <button onClick={decrement}>DEC -</button>
        <button onClick={increment}>INC +</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
