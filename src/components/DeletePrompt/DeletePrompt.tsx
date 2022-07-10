// parent container must have css position:relative
import React from "react";
import DeletePromptWrapper from "./style";

type DeletePrompProps = {
  triggerDelete: () => void;
  triggerCancel: () => void;
};

const DeletePrompt = (props: DeletePrompProps) => {
  const { triggerDelete, triggerCancel } = props;
  return (
    <DeletePromptWrapper>
      <button className="prompt-btn prompt-btn--danger" onClick={triggerDelete}>
        Delete
      </button>
      <button className="prompt-btn" onClick={triggerCancel}>
        Cancel
      </button>
    </DeletePromptWrapper>
  );
};

export default DeletePrompt;
