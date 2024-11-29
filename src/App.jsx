import React, { useState } from "react";
import Layout1 from "./components/Layouts/Layout1";
import Layout2 from "./components/Layouts/Layout2";
import "./App.css";

function App() {
  const [selectedLayout, setSelectedLayout] = useState("layout1");

  return (
    <div className="App">
      <header>
        <h1>Landing Page Builder</h1>
        <select
          value={selectedLayout}
          onChange={(e) => setSelectedLayout(e.target.value)}
        >
          <option value="layout1">Layout 1</option>
          <option value="layout2">Layout 2</option>
        </select>
      </header>
      {selectedLayout === "layout1" ? <Layout1 /> : <Layout2 />}
    </div>
  );
}

export default App;

