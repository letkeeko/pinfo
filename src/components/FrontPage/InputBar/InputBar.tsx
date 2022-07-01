import React from "react";
import Wrapper from "./style.InputBar";
import Button from "../../Button/Button";

const InputBar = () => {
  return (
    <Wrapper>
      <span className="url">site.url/</span>
      <form className="form">
        <input className="input" placeholder="yourname" type="text" />
        <Button>START PAGE</Button>
      </form>
    </Wrapper>
  );
};

export default InputBar;
