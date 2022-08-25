import React, { useState } from "react";

const Counter = () => {
  const [CounterClock, setCounterClock] = useState(0);

  const addEventHandeler = () => {
    setCounterClock((prev) => prev + 1);
  };
  const latencyAddEventHandeler = () => {
    setTimeout(() => {
      setCounterClock(prev => {
        console.log(prev);
        return prev+1;
      });
    }, 3000);
  };

  return (
    <div>
      <h1>Counter is {CounterClock}</h1>
      <hr />
      <button
        className="p-5 rounded-md m-10 bg-slate-500 hover:bg-slate-900 text-center text-cyan-200"
        onClick={addEventHandeler}
      >
        add
      </button>{" "}
      <button
        className=" p-5 rounded-md m-10 bg-slate-500 hover:bg-slate-900 text-center text-cyan-200 "
        onClick={latencyAddEventHandeler}
      >
        add with latency
      </button>
    </div>
  );
};

export default Counter;
