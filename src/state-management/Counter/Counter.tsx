import { useReducer, useState } from "react";
import counterReducer from "./counterReducer";
import useCounterStore from "./store";

const Counter = () => {
  const { counter, increase, reset } = useCounterStore();

  return (
    <div>
      Counter ({counter})
      <button
        onClick={() => increase()} // despatch function
        className="btn btn-primary mx-1"
      >
        Increment
      </button>
      <button
        onClick={() => reset()} //despatch function in action
        className="btn btn-primary mx-1"
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
