// I decided to combine the increase and decrease buttons into a single component
interface CounterProps {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
  }
  
  function Counter({ count, setCount }: CounterProps) {
    return (
      <div className="bg-white shadow-md rounded-lg p-6 mb-4 w-64 text-center">
        <h2 className="text-xl font-semibold mb-2">Counter: {count}</h2>
        <div className="flex justify-between">
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            onClick={() => setCount(count + 1)}
          >
            Increment
          </button>
          <button 
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            onClick={() => setCount(count - 1)}
          >
            Decrement
          </button>
        </div>
      </div>
    );
  }
  
  export default Counter;