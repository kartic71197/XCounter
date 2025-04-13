import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex gap-3 items-center justify-start p-3"> 
      Count: {count}
      <button
        className="p-3 bg-gray-400 text-black rounded-lg"
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Increment
      </button>
      <button
        className="p-3 bg-gray-400 text-black rounded-lg"
        onClick={() => {
          setCount((prev) => prev - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default App;
