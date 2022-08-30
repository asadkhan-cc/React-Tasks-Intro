import React from "react";

const ArrayTask = () => {
  function isObjEqual(a, b) {
    // const x = JSON.stringify(a);
    // const y = JSON.stringify(b);

    // return x === y;
    return a === b;
  }
  /////////
  const pureArr = [
    {
      id: 1,
      name: "A",
    },
    {
      id: 2,
      name: "B",
    },
    {
      id: 3,
      name: "C",
    },
    {
      id: 4,
      name: "D",
    },
  ];
  const matchArr = [
    {
      id: 5,
      name: "E",
    },
    {
      id: 1,
      name: "F",
    },
    {
      id: 7,
      name: "G",
    },
    {
      id: 3,
      name: "H",
    },
  ];
  //=======================
  const arr = [
    {
      id: 1,
      name: "A",
    },
    {
      id: 2,
      name: "B",
    },
    {
      id: 3,
      name: "C",
    },
    {
      id: 4,
      name: "D",
    },
  ];
  const required_value_Arr = [1, 3];
  const ans1 = arr.filter(
    (elem) =>
      elem.id === required_value_Arr[0] || elem.id === required_value_Arr[1]
  );
  console.log(ans1);

  // task 2
  // function checker(array1,array2) {
  //   const arr1=[]
  //   for (let element of array1) {
  //     alert(element.id);
  //     arr1.push(array2.filter((objInArr) => isObjEqual(objInArr.id, element.id)))

  //   }
  //   return arr1;
  // }
  //   const arr1 = checker(pureArr,matchArr)
  //   console.log("ans2",arr1)

  var result = matchArr.filter(function (obj) {
    return pureArr.some(function (obj2) {
      return obj.id === obj2.id;
    });
  });
  console.log("try 2", result);

  // const matchObject = (arr1, arr2) => {
  //   var result = arr1.filter(function (obj) {
  //     return arr2.some(function (obj2) {
  //       return obj.id === obj2.id;
  //     });
  //   });
  //   return result;
  // };

  return (
    <div className="text-center">
      <h1 className="text-3xl text-center my-8 font-bold">
        {" "}
        Array Task 3 and 4.
      </h1>
      <h2 className="text-2xl mb-2 text-center"> Task 3 Arrays given below.</h2>
      <p>
        arr :{JSON.stringify(arr)} <br /> And <br /> required_value_Arr :
        {JSON.stringify(required_value_Arr)}
      </p>
      <p className="text-blue-500 underline my-4">ANSWER</p>
      {ans1.map((e, index) => (
        <div key={index}>{e.name}</div>
      ))}
      <h2 className="text-2xl mb-2 text-center"> Task 4 Arrays given below.</h2>
      <p>
        pureArr:{JSON.stringify(pureArr)} <br /> And <br /> matchArr:
        {JSON.stringify(matchArr)}
      </p>
      <p className="text-blue-500 underline my-4">ANSWER</p>
      {result.map((e , index) => (
        <div key={index}>{e.name}</div>
      ))}
    </div>
  );
};

export default ArrayTask;
