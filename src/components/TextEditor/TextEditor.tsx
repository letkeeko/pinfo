import React from "react";
import dynamic from "next/dynamic";
import Wrapper from "./style.TextEditor";
import "react-quill/dist/quill.snow.css";
import BrandIcon from "../../svg/brand-icon";
import { TbTrash, TbChevronDown, TbChevronUp } from "react-icons/tb";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const TextEditor = (props: TextEditorProps) => {
  const {
    pinId,
    pins,
    setPins,
    handleDeletePin,
    handleDeletePrompt,
    deletePrompt,
    handleExpandPins,
    expandPins,
  } = props;

  const toolbarOptions = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic"],
      ["link"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["image"],
      ["video"],
    ],
  };

  // find current index's element
  const index = pins.findIndex((p) => pinId === p.id);

  const handleTitleChange = (e: React.FormEvent) => {
    const target = e.target as HTMLInputElement;

    pins[index].title = target.value;

    setPins([...pins]);
  };

  const handleDescriptionChange = (
    _value: string,
    _x: any,
    _y: any,
    content: any
  ) => {
    // getHTML by 4th parameter from quill.js
    pins[index].description = content.getHTML();
    setPins(pins);
  };

  return (
    <Wrapper isExpand={expandPins.includes(pinId)}>
      <div className="title-wrap">
        <BrandIcon className="title-wrap__icon" />
        <input
          className="title-wrap__input"
          type="text"
          placeholder="Question, heading, label, etc."
          onChange={handleTitleChange}
          defaultValue={pins[index].title}
        />
      </div>
      <ReactQuill
        placeholder="Answer, description, etc."
        modules={toolbarOptions}
        onChange={handleDescriptionChange}
        defaultValue={pins[index].description}
      />
      <div className="controls">
        <button
          className="controls__btn controls__btn--lg"
          onClick={() => handleExpandPins(pinId)}
        >
          {expandPins.includes(pinId) ? <TbChevronDown /> : <TbChevronUp />}
        </button>
        <button
          className="controls__btn"
          onClick={() => handleDeletePrompt(pinId)}
        >
          <TbTrash />
        </button>

        {deletePrompt.includes(pinId) && (
          <div className="delete-confirmation">
            <span className="delete-confirmation__label">
              Delete this forever?
            </span>
            <button
              className="delete-confirmation__trigger delete-confirmation__trigger--underline"
              onClick={() => handleDeletePin(pinId)}
            >
              Delete
            </button>
            <button
              className="delete-confirmation__trigger"
              onClick={() => handleDeletePrompt(pinId)}
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

type TextEditorProps = {
  pinId: number;
  handleDeletePin: (id: number) => void;
  handleDeletePrompt: (id: number) => void;
  handleExpandPins: (id: number) => void;
  deletePrompt: number[];
  expandPins: number[];
  setPins: ([]) => void;
  pins: {
    id: number;
    title: string;
    description: string;
  }[];
};

export default TextEditor;