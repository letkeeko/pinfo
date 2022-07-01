import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Wrapper from "./style.TextEditor";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const TextEditor = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    console.log(e);
  };

  var toolbarOptions = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline"],
      ["link"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["image"],
      ["video"],
    ],
  };

  return (
    <Wrapper>
      <ReactQuill
        placeholder="Enter content here..."
        modules={toolbarOptions}
        value={text}
        onChange={handleChange}
      />
    </Wrapper>
  );
};

export default TextEditor;
