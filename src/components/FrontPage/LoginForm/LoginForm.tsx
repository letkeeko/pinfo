import React from "react";
import Wrapper from "./style.LoginForm";
import Input from "../../Input/Input";
import Button from "../../Button/Button";

const LoginForm = () => {
  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Reset password");
  };

  return (
    <Wrapper>
      <form>
        <Input type="email" label="Email address" required />

        <Input
          type="password"
          placeholder="★ ★ ★ ★ ★"
          label="Password"
          required
        />

        <button className="btn-text" onClick={handleReset}>
          Forgot password?
        </button>

        <Button>SIGN IN</Button>
      </form>
    </Wrapper>
  );
};

export default LoginForm;
