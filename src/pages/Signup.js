import { React, useState } from "react";

export default function Signup() {
  const [signUpFormData, setSignUpFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    newsletters: false,
  });

  const onChangeHandler = (event) => {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    const checked = target.checked;
    const type = target.type;
    const name = target.name;

    const updatedFormData = {
      ...signUpFormData,
      [name]: type !== "checkbox" ? value : checked,
    };

    console.log(updatedFormData);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex flex-col w-full h-full items-center">
      <div className="mt-10 bg-slate-400 w-full max-w-xs sm:max-w-md rounded-lg px-4 py-2 shadow-lg">
        <h1 className="text-xl font-bold text-center">Sign-Up Form</h1>
        <form
          className="mt-4 flex flex-col space-y-4 w-full"
          action=""
          name="signUpForm"
          onSubmit={onSubmitHandler}
        >
          <div className="flex flex-col space-y-2">
            <label htmlFor="username">Username</label>
            <input
              className="px-2 py-1 rounded-md "
              id="username"
              name="username"
              type="text"
              placeholder="Your Username"
              onChange={onChangeHandler}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="email">E-mail</label>
            <input
              className="px-2 py-1 rounded-md "
              id="email"
              name="email"
              type="email"
              placeholder="Your E-mail"
              onChange={onChangeHandler}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="password">Password</label>
            <input
              className="px-2 py-1 rounded-md "
              id="password"
              name="password"
              type="password"
              placeholder="Your Password"
              onChange={onChangeHandler}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              className="px-2 py-1 rounded-md "
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Your confirm Password"
              onChange={onChangeHandler}
            />
          </div>
          <div className="flex flex-row space-x-2 items-center">
            <label htmlFor="confirmPassword">Confirm NewsLetters</label>
            <input
              className="px-2 py-1 rounded-md "
              id="newsletters"
              name="newsletters"
              type="checkbox"
              placeholder="Confirm NewsLetters ?"
              onChange={onChangeHandler}
            />
          </div>
          <div className="bg-blue-600 rounded-md px-4 py-1 text-center font-bold shadow-lg hover:bg-blue-800 hover:text-white">
            <button className="">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
