// parent container must have css position:relative
import React from "react";
import Wrapper from "./DeletePrompt.style";

const DeletePrompt = (props: DeletePrompTypes) => {
  const { triggerDelete, triggerCancel } = props;
  return (
    <Wrapper>
      <button className="prompt-btn prompt-btn--danger" onClick={triggerDelete}>
        Delete
      </button>
      <button className="prompt-btn" onClick={triggerCancel}>
        Cancel
      </button>
    </Wrapper>
  );
};

type DeletePrompTypes = {
  triggerDelete: () => void;
  triggerCancel: () => void;
};

export default DeletePrompt;
