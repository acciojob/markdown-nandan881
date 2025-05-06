import React, { useState, useEffect } from "react";
import { marked } from "marked";

function App() {
  const [markdown, setMarkdown] = useState("# Welcome to the Markdown Editor!");
  const [html, setHtml] = useState("");

  useEffect(() => {
    setHtml(marked(markdown));
  }, [markdown]);

  const styles = {
    app: {
      display: "flex",
      height: "100vh",
      fontFamily: "sans-serif",
    },
    textarea: {
      width: "50%",
      padding: "1rem",
      border: "none",
      resize: "none",
      fontSize: "16px",
      outline: "none",
    },
    preview: {
      width: "50%",
      padding: "1rem",
      backgroundColor: "#f5f5f5",
      overflowY: "auto",
    },
  };

  return (
    <div className="app" style={styles.app}>
      <textarea
        className="textarea"
        style={styles.textarea}
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
      <div
        className="preview"
        style={styles.preview}
        dangerouslySetInnerHTML={{ __html: html || "" }}
      />
    </div>
  );
}

export default App;
