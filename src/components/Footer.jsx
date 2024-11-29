import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Footer() {
  const [content, setContent] = useState("© 2024 Company Name. All Rights Reserved.");
  const [currentlyEditing, setCurrentlyEditing] = useState(false);

  const stripHTML = (html) => html.replace(/<\/?[^>]+(>|$)/g, "");

  const saveChanges = () => {
    setCurrentlyEditing(false); // Exit edit mode
    alert("Footer changes saved!");
  };

  return (
    <footer className="footer">
      {currentlyEditing ? (
        <div>
          <ReactQuill
            value={content}
            onChange={setContent}
            modules={{ toolbar: true }}
            placeholder="Enter footer text"
          />
          <button onClick={saveChanges} className="save-button">
            Save
          </button>
        </div>
      ) : (
        <p onClick={() => setCurrentlyEditing(true)}>{stripHTML(content)}</p>
      )}
    </footer>
  );
}

export default Footer;
