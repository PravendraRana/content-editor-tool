import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Features({ columns }) {
  const [features, setFeatures] = useState(
    Array(columns)
      .fill()
      .map((_, i) => ({
        heading: `Feature ${i + 1}`,
        description: `Description for feature ${i + 1}`,
      }))
  );
  const [currentlyEditing, setCurrentlyEditing] = useState(null);

  const stripHTML = (html) => html.replace(/<\/?[^>]+(>|$)/g, "");

  const updateFeature = (index, field, value) => {
    const updatedFeatures = [...features];
    updatedFeatures[index][field] = value;
    setFeatures(updatedFeatures);
  };

  const saveChanges = () => {
    setCurrentlyEditing(null); // Exit edit mode
    alert("Feature changes saved!");
  };

  return (
    <section className="features">
      <div className={`features-container columns-${columns}`}>
        {features.map((feature, index) => (
          <div key={index} className="feature">
            {currentlyEditing === `feature-${index}-heading` ? (
              <ReactQuill
                value={feature.heading}
                onChange={(value) => updateFeature(index, "heading", value)}
                modules={{ toolbar: true }}
                placeholder="Feature heading"
              />
            ) : (
              <h3
                onClick={() => setCurrentlyEditing(`feature-${index}-heading`)}
              >
                {stripHTML(feature.heading)}
              </h3>
            )}

            {currentlyEditing === `feature-${index}-description` ? (
              <ReactQuill
                value={feature.description}
                onChange={(value) => updateFeature(index, "description", value)}
                modules={{ toolbar: true }}
                placeholder="Feature description"
              />
            ) : (
              <p
                onClick={() => setCurrentlyEditing(`feature-${index}-description`)}
              >
                {stripHTML(feature.description)}
              </p>
            )}

            {currentlyEditing && (
              <button onClick={saveChanges} className="save-button">
                Save
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
