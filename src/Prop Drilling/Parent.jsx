import React,{useState} from "react";
import randData from "./data.json";
import Child1 from "./Child1";

const Parent = () => {

  const [genders, setGenders] = useState([])

  const randJsonData = randData;
  // console.log(`${randJsonData}`)
  function getGender(event) {
    setGenders(event)

  }
  return (
    <div>
      parent Component 
      {
        !genders.length == 0 ?<div className="text-center">No Of Males are {genders[0]} and No Of Females are {genders[1]}</div>:       <div className=" hidden text-center">No Of Males are {genders[0]} and No Of Females are {genders[1]}</div>
      }
      <Child1 data={randJsonData} getGender={getGender} />
    </div>
  );
};

export default Parent;
