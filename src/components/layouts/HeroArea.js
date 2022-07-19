import React from "react";
import { Outlet } from "react-router-dom";

export default function HeroArea() {
  return (
    <div className="bg-slate-500 min-w-full min-h-full mb-0">
      <main className="w-full h-full">
        <Outlet />
      </main>
    </div>
  );
}
