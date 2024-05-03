import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./features/counterSlice";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.count);

  return (
    <div>
      <h1>Redux Toolkit Example</h1>
      <div>
        <p>Counter: {counter}</p>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(increment())}>Increment</button>
      </div>
    </div>
  );
}

export default App;
