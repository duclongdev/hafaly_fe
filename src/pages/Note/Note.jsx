import React, { useState, Component,useEffect } from "react";
import CardNote from "./components/CardNote";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
export default function Note() {
  
    useEffect(() => {
      console.log('Editor is ready to use!');
    }, []);
  
    const handleEditorChange = (event, editor) => {
      const data = editor.getData();
      console.log({ event, editor, data });
    };
  
    const handleBlur = (event, editor) => {
      console.log('Blur.', editor);
    };
  
    const handleFocus = (event, editor) => {
      console.log('Focus.', editor);
    };
  return (
    <div className="Note_Page">
      <div className="Note_list">
        <CardNote />
        <CardNote />
        <CardNote />
        <CardNote />
      </div>
      <button
        className="e-btn e-outline e-primary"
        style={{ marginLeft: "230px", marginTop: "10px" }}
      >
        Add New Note
      </button>
      <div className="Editor_Component">
        <h2>Make your Note</h2>
        <CKEditor
          editor={ClassicEditor}
          data="<p>Write your Note here....</p>"
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={handleEditorChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
      </div>
    </div>
  );
}
