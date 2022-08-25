import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
import React from "react";
//  using rafce

const Login = () => {
  const formSubmitHandeler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="m-25 border-b-slate-900">
      <form id="login_form" action="" className="min-w-max block">
        <label htmlFor="userName" className="text-3xl block">
          LOGIN FORM</label>
        <input
          type="text"
          className="inline-block"
          placeholder="User Name"
          name="username"
        />
        <input
          type="password"
          className="inline-block"
          placeholder="Password"
        />
      </form>
    </div>
  );
};

export default Login;

{
  /* <h1 style={{border:"1px solid black",margin:"0px auto",width:"500px" }}>Login</h1>
      <h3>this component uses rafce</h3> */
}
