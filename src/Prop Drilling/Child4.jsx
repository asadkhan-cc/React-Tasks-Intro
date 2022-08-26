import React, { useState } from "react";
import GrandChild from "./GrandChild";
const Child4 = ({ data, getGender }) => {
  let males = data.map((e) => e.gender).filter((e) => e == "male");
  let females = data.map((e) => e.gender).filter((e) => e == "female");
  function fire() {
    getGender([males.length, females.length]);
  }

  return (
    <>
      <div className="text-center w-1/2 mx-auto">
        <input
          className=" bg-blue-100 p-2 rounded-lg"
          type="button"
          value="Click Me to get Genders"
          onClick={fire}
        />
      </div>{" "}
      <div className="grid grid-cols-3 mt-16">
        {data.map((elem) => (
          <GrandChild data={elem} key={elem._id}></GrandChild>
        ))}
      </div>
    </>
  );
};

export default Child4;
