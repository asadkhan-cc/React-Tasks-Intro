import React from "react";
import Child4 from "./Child4";
const Child3 = ({ data,getGender }) => {
//   const dataGet = () => {};
//   const dataSet = (e) => {console.log(e)};
// setData={dataSet}  
function getGender3(event) {
    getGender(event);
  }
return (
    <div>
      Child3 <br />
      <Child4 getGender={getGender3} data={data} />
    </div>
  );
};

export default Child3;
