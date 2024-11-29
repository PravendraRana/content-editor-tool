import React from "react";
import Hero from "../Hero";
import Features from "../Features";
import About from "../About";

function Layout1() {
  return (
    <div className="layout layout-1">
      <Hero />
      <Features columns={2} />
      <About />
    </div>
  );
}

export default Layout1;
