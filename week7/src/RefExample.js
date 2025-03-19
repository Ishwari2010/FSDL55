import React, { useState, useRef, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(null); 

  useEffect(() => {
    prevCountRef.current = count; 
  });

  return (
    <div>
      <h2>🔢 Counter Example</h2>
      <p>Current Count: {count}</p>
      <p>Previous Count: {prevCountRef.current}</p> {/* 3️⃣ Access previous value */}
      <button onClick={() => setCount(count + 1)} style={{ margin: "5px" }}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{ margin: "5px" }}>Decrement</button>
    </div>
  );
}
