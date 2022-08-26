import React, { useState } from "react";
// import Logo from "./assets/female.png";
const GrandChild = (props) => {
  const [spanData, setSpanData] = useState();
  const [innerData, setInnerData] = useState("...");
//   console.log("propasdsdaswsdxcs", props.data);
  let data = props.data;

  const spanChanger = (e) => {
    setInnerData(" Less ");
    if (!spanData) {
      setSpanData(data.about.slice(40, -1));
    } else {
      setSpanData("");
      setInnerData("...");
    }
  };
  return (
    
      <div className="text-left w-[90%] relative mx-auto grid-cols-3 my-8 shadow-lg bg-slate-100">
        <div className="absolute top-[-50px] left-[50%] translate-x-[-50px] ">
          {data.gender == "male" ? (
            <img
              className="w-[100px] h-[100px]  rounded-full "
              src={
                data.eyeColor == "brown"
                  ? require("./assets/whiteguy.png")
                  : require("./assets/whiteguybrownhair.png")
              }
              alt={data.name}
            />
          ) : (
            <img
              className="w-[100px] h-[100px]  rounded-full"
              src={
                data.eyeColor == "blue"
                  ? require("./assets/female.png")
                  : require("./assets/whiteguybrownhair.png")
              }
              alt={data.name}
            />
          )}
        </div>
        <div className="ml-4  mt-[60px]">
          <h1 className="font-medium text-xl text-slate-800">
            {data.gender === "male" ? "Mr." : "Ms."} {data.name}
          </h1>
          <p className="w-auto 	">
            {data.about.slice(0, 40)}
            <span
              className="text-blue-500 hover:text-red-300"
              onClick={spanChanger}
            >
              {innerData}
            </span>
            <span>{spanData}</span>
          </p>
          <span className="	"> Age :{data.age}</span>
          <h3>Works At Company : <span className="text-md text-blue-500">{data.company}</span></h3>
          <h3>Email : {data.email}</h3>
          <h3>Phone : {data.phone}</h3>
          <h3>Address : <br /><span>{data.address}</span></h3>
          <p className="text-red-500">Debt : {data.balance}
          </p>
        </div>
      </div>
    
  );
};

export default GrandChild;
