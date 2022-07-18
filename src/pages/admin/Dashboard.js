import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="flex flex-col items-center">
      <button className="bg-green-500 px-3 py-2 rounded-md shadow-lg hover:bg-gree-700 focus:border-green-700 focus:border-2">
        <Link to="announce/new">Add Announce</Link>
      </button>
      <Outlet />
    </div>
  );
}
