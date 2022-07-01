import React from "react";
import Link from "next/link";
import Wrapper from "./style.SignupForm";
import Input from "../../Input/Input";
import Button from "../../Button/Button";

const LoginForm = () => {
  return (
    <Wrapper>
      <form>
        <div className="username-input-wrap">
          <span className="absolute-txt">site.url/</span>
          <Input type="text" placeholder="Username" label="Username" required />
        </div>

        <Input type="email" label="Email address" required />

        <Input
          type="password"
          placeholder="★ ★ ★ ★ ★"
          label="Password"
          required
        />

        <div className="checkbox-wrap">
          <input id="terms" type="checkbox" />{" "}
          <label htmlFor="terms">
            By creating an account you are agreeing to our{" "}
            <Link href="/terms-and-conditions">
              <a>Terms and Conditions.</a>
            </Link>
          </label>
        </div>

        <Button>SIGN UP</Button>
      </form>
    </Wrapper>
  );
};

export default LoginForm;
