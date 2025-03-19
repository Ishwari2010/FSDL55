import React, { useState } from "react";

export default function HooksExample() {
  const [count, setCount] = useState(0); // State to track the counter

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>🔢 Counter</h2>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)} style={{ margin: "5px" }}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{ margin: "5px" }}>Decrement</button>
      <button onClick={() => setCount(0)} style={{ margin: "5px" }}>Reset</button>
    </div>
  );
}
