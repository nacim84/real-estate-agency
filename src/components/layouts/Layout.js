import React from "react";

import Footer from "./Footer";
import HeroArea from "./HeroArea";
import TopBar from "./TopBar";

export default function Layout() {
  return (
    <div className="w-full h-full">
      <TopBar />
      <HeroArea />
      <Footer />
    </div>
  );
}
