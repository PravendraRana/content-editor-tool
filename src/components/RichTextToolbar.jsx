import React from "react";

function RichTextToolbar({ editor, setEditorValue }) {
  const applyFormat = (format) => {
    editor.format(format);
  };

  const insertLink = () => {
    const url = prompt("Enter the link URL");
    if (url) {
      editor.format("link", url);
    }
  };

  const insertImage = () => {
    const imageUrl = prompt("Enter Image URL");
    if (imageUrl) {
      editor.format("image", imageUrl);
    }
  };

  return (
    <div className="rich-text-toolbar">
      <button onClick={() => applyFormat("bold")}>B</button>
      <button onClick={() => applyFormat("italic")}>I</button>
      <button onClick={() => applyFormat("underline")}>U</button>
      <button onClick={insertLink}>Link</button>
      <button onClick={() => applyFormat("list")}>• Bullet</button>
      <button onClick={() => applyFormat("heading1")}>H1</button>
      <button onClick={() => applyFormat("heading2")}>H2</button>
      <button onClick={() => applyFormat("heading3")}>H3</button>
      <button onClick={insertImage}>Image</button>
    </div>
  );
}

export default RichTextToolbar;
