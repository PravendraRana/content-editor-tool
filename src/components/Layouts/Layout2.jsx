import React from "react";
import Hero from "../Hero";
import Features from "../Features";
import Footer from "../Footer";

function Layout2() {
  return (
    <div className="layout layout-2">
      <Hero/>
      <Features columns={3} />
      <Footer />
    </div>
  );
}

export default Layout2;
