import React, { useState } from "react";
import json from "../database/users.json";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  //   console.log(json);
  const [Flag, setFlag] = useState(true);
  const [Redirect, setRedirect] = useState(false);
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const Navigate = useNavigate();

  //==================form submit handeler===================
  const formSubmitHandeler = (event) => {
    alert("eventhandeler triggered");
    event.preventDefault();
    if (json.userName === UserName && json.password == Password) {
      alert("sucess");
      setRedirect(true);
      Navigate("/home");
      //routercode here
    } else {
      //   window.location.reload(false);
      setFlag(false);
      console.log("login failed");
    }
    // console.log(Flag);
  }
  return (
    <>
      <div className="w-full max-w-xs mx-auto  mt-40">
        <form
          className="bg-slate-100 shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={formSubmitHandeler}
        >
          {Flag ? (
            <p className="hidden">Username or password Incorrect.</p>
          ) : (
            <p className="text-red-500 text-sm bg-red-100 italic">
              Username or password Incorrect.
            </p>
          )}

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline isvalid:border-red-500"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Log In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
