import React, { useState, useRef } from "react";
import GrandChild from "./GrandChild";
const Child4 = ({ data, getGender }) => {
  const _ID = useRef();

  let males = data.map((e) => e.gender).filter((e) => e === "male");
  let females = data.map((e) => e.gender).filter((e) => e === "female");
  function fire() {
    _ID.current.disabled = "disabled";
    _ID.current.className = _ID.current.className + " hidden";
    console.log(_ID.current);
    getGender([males.length, females.length]);
  }

  return (
    <>
      <div className="text-center w-1/2 mx-auto">
        <input
          ref={_ID}
          className=" bg-blue-100 p-2 rounded-lg"
          type="button"
          value="Click Me to get Genders"
          onClick={fire}
        />
      </div>{" "}
      <div className="grid  sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-16">
        {data.map((elem) => (
          <GrandChild data={elem} key={elem._id}></GrandChild>
        ))}
      </div>
    </>
  );
};

export default Child4;
