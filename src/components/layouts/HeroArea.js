import React from "react";
import { Outlet } from "react-router-dom";

export default function HeroArea() {
  return (
    <div className=" bg-slate-500">
      <Outlet />
    </div>
  );
}
