import { useReducer, useState } from "react";
import counterReducer from "./counterReducer";

const Counter = () => {
  const [value, despatch] = useReducer(counterReducer, 0); // despatch is like function caller

  return (
    <div>
      Counter ({value})
      <button
        onClick={() => despatch({ type: "Increment" })} // despatch function
        className="btn btn-primary mx-1"
      >
        Increment
      </button>
      <button
        onClick={() => despatch({ type: "Reset" })} //despatch function in action
        className="btn btn-primary mx-1"
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
