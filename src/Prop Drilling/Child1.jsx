import React from "react";
import Child2 from "./Child2";
const Child1 = ({ data, getGender }) => {
  function getGender1(event) {
    getGender(event);
 }
//   getGender("asad");

  return (
    <div>
      Child1
      <Child2 getGender={getGender1} data={data} />
    </div>
  );
};

export default Child1;
