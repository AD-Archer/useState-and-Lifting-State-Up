import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      <h1 className="text-2xl font-bold mb-4">useState and Lifting State Up</h1>
      <Counter count={count} setCount={setCount} />
      {/* Decided to pass in count and setcount as props here */}
    </div>
  );
}

export default App;