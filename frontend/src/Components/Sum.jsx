import { useState } from "react";

export default function Sum() {
  const [count, setCount] = useState(20);
  const [val, setVal] = useState(0);

  const UpdateCount = (a) => {
    setCount(count + a);
  };
  return (
    <>
      <h1>{count}</h1>
      <input
        type="Number"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <button
        onClick={() => UpdateCount(-1)}
        disabled={count === 0 ? true : false}
      >
        -
      </button>
      <button onClick={() => UpdateCount(1)}>+</button>
    </>
  );
}
// useContext prop drilling
