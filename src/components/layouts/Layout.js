import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import TopBar from "./TopBar";

export default function Layout() {
  return (
    <div>
      <TopBar />
      <main className="my-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
