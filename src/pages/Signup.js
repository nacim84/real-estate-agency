import React from "react";

export default function Signup() {
  return (
    <div className="flex flex-col w-screen items-center">
      <div className="mt-10 bg-slate-400 w-full max-w-md rounded-lg px-4 py-2">
        <h1 className="text-xl font-bold text-center">Sign Up Form</h1>
        <form
          className="mt-4 flex flex-col space-y-4 w-full"
          action=""
          name="signUpForm"
        >
          <div className="flex flex-col space-y-2">
            <label htmlFor="username">Username</label>
            <input
              className="px-2 py-1 rounded-md "
              id="username"
              name="username"
              type="text"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="password">Password</label>
            <input
              className="px-2 py-1 rounded-md "
              id="password"
              name="password"
              type="password"
            />
          </div>
          <div className="bg-blue-600 rounded-md px-4 py-1 text-center font-bold">
            <button className="">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
