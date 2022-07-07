import React from "react";
import styled from "styled-components";
import useStore from "../Links/Links.store";
import { COLOR } from "../../variables";
import { useDebouncedCallback } from "use-debounce";
import { TbTrash } from "react-icons/tb";
import DeletePrompt from "../../DeletePrompt/DeletePrompt";

const LinkField = (props: LinkField) => {
  const {
    value,
    label,
    url,
    isDeletePrompted,
    handleDeletePrompt,
    handleDeleteLink,
  } = props;

  const handleChange = useStore(({ handleChange }) => handleChange);

  const invalidUrls = useStore(({ invalidUrls }) => invalidUrls);

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
    <Wrapper isInvalidUrl={invalidUrls.includes(value)}>
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
    </Wrapper>
  );
};

type WrapperTypes = {
  isInvalidUrl: boolean;
};

const Wrapper = styled.div<WrapperTypes>`
  background-color: ${COLOR.white};
  border: ${({ isInvalidUrl }) =>
    isInvalidUrl ? `1px solid ${COLOR.red}` : `1px solid ${COLOR.white}`};

  border-radius: 5px;
  display: flex;
  align-items: center;
  box-shadow: 0 5px 12px -2px rgba(60, 60, 60, 0.075);
  position: relative;

  .platform {
    border-right: 1px solid rgba(60, 60, 60, 0.125);
    padding: 6px 20px;
    line-height: 30px;
    min-width: 125px;
    max-width: 125px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &__label {
      font-weight: 300;
      font-size: 0.9rem;
    }
  }

  .input {
    background-color: ${COLOR.white};
    border: 0;
    border-radius: 5px;
    padding: 10px 12px 10px 18px;
    line-height: 30px;
    display: block;
    width: 100%;
    font-size: 16px;
    font-weight: 300;
    color: rgba(60, 60, 60, 0.5);
    outline: none;
    &::placeholder {
      color: rgba(60, 60, 60, 0.35);
    }

    &:focus {
      color: ${COLOR.black};
    }
  }

  .delete-btn {
    color: ${COLOR.blue};
    cursor: pointer;
    background-color: transparent;
    border: 0;
    line-height: 30px;
    font-size: 1rem;
    margin: 0 18px 0 0;
    padding: 0;
  }
`;

type LinkField = {
  value: string;
  label: string;
  url: string;
  isDeletePrompted: boolean;
  handleDeletePrompt: (value: string) => void;
  handleDeleteLink: (value: string) => void;
};

export default LinkField;
