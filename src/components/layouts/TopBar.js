import React from "react";
import { Link } from "react-router-dom";

export default function TopBar() {
  return (
    <header className="fixed top-0 w-full h-12 bg-slate-700 shadow-lg flex flex-row justify-between items-center">
      <div className="text-left text-2xl font-bold text-indigo-300 ml-10">
        <Link to="/">Real Estate Agency</Link>
      </div>
      <nav className="mr-10">
        <ul className="flex flex-row text-md text-white space-x-6">
          <li>
            <Link to="contact">Contact</Link>
          </li>
          <li>
            <Link to="favorites">Favorites</Link>
          </li>
          <li>
            <Link to="signup">Signup</Link>
          </li>
          <li>
            <Link to="login">Login</Link>
          </li>
          <li>
            <Link to="dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
