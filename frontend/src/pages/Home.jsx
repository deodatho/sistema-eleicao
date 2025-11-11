import {useState} from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2 className="text-xl font-bold">Contador: {count}</h2>
      <button onClick={() => setCount(count + 1)} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
        Incrementar
      </button>
    </>
  );
}