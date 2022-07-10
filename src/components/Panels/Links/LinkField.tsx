import React from "react";
import useLinksStore from "../../../stores/useLinksStore";
import { LinkFieldWrapper } from "./style";
import { useDebouncedCallback } from "use-debounce";
import { TbTrash } from "react-icons/tb";
import DeletePrompt from "../../DeletePrompt/DeletePrompt";

type LinkFieldProps = {
  value: string;
  label: string;
  url: string;
  isDeletePrompted: boolean;
  handleDeletePrompt: (value: string) => void;
  handleDeleteLink: (value: string) => void;
};

const LinkField = (props: LinkFieldProps) => {
  const {
    value,
    label,
    url,
    isDeletePrompted,
    handleDeletePrompt,
    handleDeleteLink,
  } = props;

  const handleChange = useLinksStore(({ handleChange }) => handleChange);

  const invalidUrls = useLinksStore(({ invalidUrls }) => invalidUrls);

  const debouncedHandleChange = useDebouncedCallback(
    (value: string, url: string) => {
      handleChange(value, url);
    },
    600
  );

  const handleFocusBack = () => {
    if (isDeletePrompted) {
      handleDeletePrompt(value);
    }
  };

  return (
    <LinkFieldWrapper isInvalidUrl={invalidUrls.includes(value)}>
      <div className="platform">
        <span className="platform__label">{label}</span>
      </div>
      <input
        className="input"
        type="text"
        defaultValue={url}
        onChange={(e) => debouncedHandleChange(value, e.target.value)}
        placeholder="https://"
        onFocus={handleFocusBack}
      />

      <button className="delete-btn" onClick={() => handleDeletePrompt(value)}>
        <TbTrash />
      </button>

      {isDeletePrompted && (
        <DeletePrompt
          triggerDelete={() => handleDeleteLink(value)}
          triggerCancel={() => handleDeletePrompt(value)}
        />
      )}
    </LinkFieldWrapper>
  );
};

export default LinkField;
