import React from "react";
import Child3 from "./Child3";
const Child2 = ({ data, getGender }) => {
  function getGender2(event) {
    getGender(event);
  }
  // getGender2("data from child2")
  return (
    <div>
      Child2
      <Child3 getGender={getGender2} data={data}/>
    </div>
  );
};

export default Child2;
