import React from "react";

import Footer from "./Footer";
import HeroArea from "./HeroArea";
import TopBar from "./TopBar";

export default function Layout() {
  return (
    <div>
      <TopBar />
      <HeroArea />
      <Footer />
    </div>
  );
}
