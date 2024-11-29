import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Hero({ sideContent = false }) {
  const [heading, setHeading] = useState("Welcome to Our Product");
  const [subheading, setSubheading] = useState("Transform your business today!");
  const [currentlyEditing, setCurrentlyEditing] = useState(null);

  const stripHTML = (html) => html.replace(/<\/?[^>]+(>|$)/g, "");

  const saveChanges = () => {
    setCurrentlyEditing(null); // Exit edit mode
    alert("Changes saved!");
  };

  return (
    <section className={`hero ${sideContent ? "hero-side-content" : ""}`}>
      <div className="hero-content">
        {currentlyEditing === "heading" ? (
          <ReactQuill
            value={heading}
            onChange={setHeading}
            modules={{ toolbar: true }}
            placeholder="Enter heading"
          />
        ) : (
          <h1 onClick={() => setCurrentlyEditing("heading")}>{stripHTML(heading)}</h1>
        )}

        {currentlyEditing === "subheading" ? (
          <ReactQuill
            value={subheading}
            onChange={setSubheading}
            modules={{ toolbar: true }}
            placeholder="Enter subheading"
          />
        ) : (
          <p onClick={() => setCurrentlyEditing("subheading")}>{stripHTML(subheading)}</p>
        )}

        {currentlyEditing && (
          <button onClick={saveChanges} className="save-button">
            Save
          </button>
        )}
      </div>
      {sideContent && (
        <div className="hero-image">
          <img src="https://via.placeholder.com/400" alt="Hero Side Content" />
        </div>
      )}
    </section>
  );
}

export default Hero;
