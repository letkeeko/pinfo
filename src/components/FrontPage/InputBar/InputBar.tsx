import React from "react";
import InputBarWrapper from "./style";
import Button from "../../Button/Button";

const InputBar = () => {
  return (
    <InputBarWrapper>
      <span className="url">site.url/</span>
      <form className="form">
        <input className="input" placeholder="yourname" type="text" />
        <Button variant="special">START PAGE</Button>
      </form>
    </InputBarWrapper>
  );
};

export default InputBar;
