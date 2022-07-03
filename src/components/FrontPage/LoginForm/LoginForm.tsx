import React from "react";
import Wrapper from "./style.LoginForm";
import Input from "../../Input/Input";
import Button from "../../Button/Button";
import Spacer from "../../Spacer/Spacer";

const LoginForm = () => {
  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Reset password");
  };

  return (
    <Wrapper>
      <form>
        <Input type="email" label="Email address" required />

        <Spacer mt={25} />

        <Input
          type="password"
          placeholder="★ ★ ★ ★ ★"
          label="Password"
          required
        />

        <Spacer mt={25} />

        <button className="btn-text" onClick={handleReset}>
          Forgot password?
        </button>

        <Spacer mt={35} />

        <Button align="center">SIGN IN</Button>
      </form>
    </Wrapper>
  );
};

export default LoginForm;
