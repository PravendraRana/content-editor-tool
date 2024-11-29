import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function About() {
  const [heading, setHeading] = useState("About Us");
  const [content, setContent] = useState(
    "We are committed to delivering the best solutions for your business needs. Our team is passionate about innovation and excellence."
  );
  const [currentlyEditing, setCurrentlyEditing] = useState(null);

  const stripHTML = (html) => html.replace(/<\/?[^>]+(>|$)/g, "");

  const saveChanges = () => {
    setCurrentlyEditing(null); // Exit edit mode
    alert("About changes saved!");
  };

  return (
    <section className="about">
      {currentlyEditing === "about-heading" ? (
        <ReactQuill
          value={heading}
          onChange={setHeading}
          modules={{ toolbar: true }}
          placeholder="About heading"
        />
      ) : (
        <h2 onClick={() => setCurrentlyEditing("about-heading")}>
          {stripHTML(heading)}
        </h2>
      )}

      {currentlyEditing === "about-content" ? (
        <ReactQuill
          value={content}
          onChange={setContent}
          modules={{ toolbar: true }}
          placeholder="About content"
        />
      ) : (
        <p onClick={() => setCurrentlyEditing("about-content")}>
          {stripHTML(content)}
        </p>
      )}

      {currentlyEditing && (
        <button onClick={saveChanges} className="save-button">
          Save
        </button>
      )}
    </section>
  );
}

export default About;
