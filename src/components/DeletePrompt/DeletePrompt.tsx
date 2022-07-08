// parent container must have css position:relative
import React from "react";
import Wrapper from "./DeletePrompt.style";

type DeletePrompProps = {
  triggerDelete: () => void;
  triggerCancel: () => void;
};

const DeletePrompt = (props: DeletePrompProps) => {
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

export default DeletePrompt;
