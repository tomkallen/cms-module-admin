import React, { Component } from "react";
import CodeMirror from "react-codemirror";
import "codemirror/mode/markdown/markdown";
import "codemirror/lib/codemirror.css";
import "./Editor.css";

class Editor extends Component {
  render() {
    return (
      <div className="Editor">
        <h1>New blog record</h1>
        <div className="Editor-wrapper">
          <h3>Title</h3>
          <input
            type="text"
            className="Editor-title"
            placeholder="Enter title here"
          />
          <h3>Date</h3>
          <input
            disabled
            type="text"
            placeholder={new Date().toLocaleString()}
          />
          <h3>Text</h3>
          <CodeMirror
            value={"zzzzzzzzzzzzzzzzzz"}
            options={{
              lineNumbers: true,
              readOnly: false,
              mode: "markdown"
            }}
          />
        </div>
      </div>
    );
  }
}

export default Editor;
