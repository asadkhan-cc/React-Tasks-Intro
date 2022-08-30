import React, { useState } from "react";
// import obj from "../database/profile.json";
const Profile = () => {
  const obj = {
    name: "",
    position: "",
    age: "",
    cast: "",
  };
  const [defaultobj, setDefaultobj] = useState(obj);

  const profileFormSubmilHandler = (e) => {
    e.preventDefault();
    console.log(
      e.target[0].value,
      e.target[1].value,
      e.target[2].value,
      e.target[3].value
    );

    setDefaultobj({
      name: e.target[0].value,
      position: e.target[1].value,
      age: e.target[2].value,
      cast: e.target[3].value,
    });

    e.target[0].value = "";
    e.target[1].value = "";
    e.target[2].value = "";
    e.target[3].value = "";
    // setDefaultobj((prev) => {
    //   prev.name = e.target[0].value;
    //   prev.position = e.target[1].value;
    //   prev.age = e.target[2].value;
    //   prev.cast = e.target[3].value;
    //   //   return prev;
    // });
  };
  console.log(defaultobj);
  return (
    <>
      <form
        className="border border-l-violet-600 bg-cyan-100 w-1/2 m-auto text-center"
        onSubmit={profileFormSubmilHandler}
      >
        <span className="text-2xl">Add Person in database</span>
        <br />
        <label className="w-40 my-5 mr-8 text-left" htmlFor="name">
          Name :
        </label>
        <input className="w-60 my-5 " type="text" name="name" id="" />
        <br />
        <label className="w-40 my-5 mr-5 text-left" htmlFor="position">
          Position :
        </label>
        <input className="w-60 my-5 " type="text" name="position" id="" />
        <br />
        <label className="w-40 my-5 mr-8 text-left" htmlFor="age">
          Age :
        </label>
        <input className="w-60 my-5 " type="number" name="age" id="" />
        <br />
        <label className="w-40 my-5 mr-8 text-left" htmlFor="cast">
          Cast :
        </label>
        <input className="w-60 my-5 " type="text" name="cast" id="" />
        <br />
        <button
          type="submit"
          className="p-2 bg-gray-500 hover:bg-gray-900 text-white rounded-sm my-5"
        >
          Update
        </button>
      </form>
      {/* <div>Profile {obj.name}</div> */}
      <hr className="my-6" />
      {defaultobj.name === "" &&
      defaultobj.position === "" &&
      defaultobj.age === "" &&
      defaultobj.cast === "" ? (
        <div className="border border-blue-600 w-1/2 m-auto text-center">
          <h1 className="text-2xl">Profile Data</h1>
          <h1 className="text-xl bg-red-400 text-red-100">
            NO Profile Data Found
          </h1>
        </div>
      ) : (
        <div className="border border-blue-600 w-1/2 m-auto text-center">
          <h1 className="text-2xl">Profile Data</h1>
          <h1 className="text-xl w-1/3 overflow-hidden mx-auto">
            Name:
            {!defaultobj.name === "" ? (
              defaultobj.name
            ) : (
              <span className="text-2xl"> - </span>
            )}
          </h1>
          <h1 className="text-xl w-1/3 overflow-hidden mx-auto">
            Position:
            {!defaultobj.position === "" ? (
              defaultobj.position
            ) : (
              <span className="text-2xl"> - </span>
            )}
          </h1>
          <h1 className="text-xl w-1/3 overflow-hidden mx-auto ">
            age:
            {!defaultobj.age === "" ? (
              defaultobj.age
            ) : (
              <span className="text-2xl"> - </span>
            )}
          </h1>
          <h1 className="text-xl w-1/3 overflow-hidden mx-auto">
            Cast:
            {!defaultobj.cast === "" ? (
              defaultobj.cast
            ) : (
              <span className="text-2xl"> - </span>
            )}
          </h1>
        </div>
      )}
    </>
  );
};

export default Profile;
