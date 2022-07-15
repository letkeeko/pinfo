import React from "react";
import LoginFormWrapper from "./style";
import Input from "../../Input/Input";
import Button from "../../Button/Button";
import Spacer from "../../Spacer/Spacer";

const LoginForm = () => {
  const handleReset = (e: React.MouseEvent) => {
    e.preventDefault();
    alert("Reset password");
  };

  return (
    <LoginFormWrapper>
      <form>
        <Input type="email" label="Email address" name="login_email" required />

        <Spacer length={25} />

        <Input
          type="password"
          placeholder="★ ★ ★ ★ ★"
          label="Password"
          name="login_password"
          required
        />

        <Spacer length={25} />

        <button className="btn-text" onClick={handleReset}>
          Forgot password?
        </button>

        <Spacer length={35} />

        <Button align="center" variant="special">
          Sign In
        </Button>
      </form>
    </LoginFormWrapper>
  );
};

export default LoginForm;
