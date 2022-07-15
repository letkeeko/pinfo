import React, { useRef, useState } from "react";
import ReactQuill from "react-quill";
import ModalMediaLibrary from "../Modal/ModalMediaLibrary";
import TextEditorWrapper from "./style";
import "react-quill/dist/quill.snow.css";
import BrandIcon from "../../svg/brand-icon";
import { TbTrash, TbChevronDown, TbChevronUp } from "react-icons/tb";
import DeletePrompt from "../DeletePrompt/DeletePrompt";

type TextEditorProps = {
  pinId: number;
  handleDeletePin: (id: number) => void;
  handleDeletePrompt: (id: number) => void;
  handleExpandPins: (id: number) => void;
  isDeletePrompted: boolean;
  expandPins: number[];
  setPins: ([]) => void;
  pins: {
    id: number;
    title: string;
    description: string;
  }[];
};

const TextEditor = (props: TextEditorProps) => {
  const {
    pinId,
    pins,
    setPins,
    handleDeletePin,
    handleDeletePrompt,
    isDeletePrompted,
    handleExpandPins,
    expandPins,
  } = props;

  const [isMediaModal, setIsMediaModal] = useState(false);

  const [rangeIndex, setRangeIndex] = useState<any>(null);

  // use quill ref for custom image handler
  const quillRef = useRef<any>(null);

  // add url instead but there's a bug with toolbar
  const imageHandler = () => {
    // get current range index
    const range = quillRef.current.getEditor().getSelection();

    setRangeIndex(range.index);

    setIsMediaModal(true);
  };

  // select image src url from media library modal
  const selectImage = (src: string) => {
    quillRef.current.getEditor().insertEmbed(rangeIndex, "image", src);

    closeMediaModal();
  };

  // resets by selection or closing
  const closeMediaModal = () => {
    setIsMediaModal(false);
    setRangeIndex(null);
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

  const toolbarOptions = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic"],
        ["link"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["image"],
        ["video"],
      ],
      handlers: {
        image: imageHandler,
      },
    },
  };

  return (
    <>
      <TextEditorWrapper isExpand={expandPins.includes(pinId)}>
        <div className="title-wrap">
          <BrandIcon className="title-wrap__icon" />
          <input
            className="title-wrap__input"
            type="text"
            placeholder="Question / Title"
            onChange={handleTitleChange}
            defaultValue={pins[index].title}
          />
        </div>
        <ReactQuill
          placeholder="Answer / Description"
          modules={toolbarOptions}
          onChange={handleDescriptionChange}
          defaultValue={pins[index].description}
          ref={quillRef}
        />
        <div className="controls">
          <button
            className="controls__btn controls__btn--lg"
            onClick={() => handleExpandPins(pinId)}
          >
            {expandPins.includes(pinId) ? <TbChevronDown /> : <TbChevronUp />}
          </button>

          {pins.length > 1 && (
            <button
              className="controls__btn"
              onClick={() => handleDeletePrompt(pinId)}
            >
              <TbTrash />
            </button>
          )}

          {isDeletePrompted && (
            <DeletePrompt
              triggerDelete={() => handleDeletePin(pinId)}
              triggerCancel={() => handleDeletePrompt(pinId)}
            />
          )}
        </div>
      </TextEditorWrapper>

      {isMediaModal && (
        <ModalMediaLibrary
          selectImage={selectImage}
          closeMediaModal={closeMediaModal}
        />
      )}
    </>
  );
};

export default TextEditor;
