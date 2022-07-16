import React from "react";
import Link from "next/link";
import SignupFormWrapper from "./style";
import Input from "../../Input/Input";
import Button from "../../Button/Button";
import Spacer from "../../Spacer/Spacer";

const LoginForm = () => {
  return (
    <SignupFormWrapper>
      <form>
        <div className="username-input-wrap">
          <span className="absolute-txt">site.url/</span>
          <Input
            type="text"
            placeholder="Username"
            label="Username"
            name="signup_username"
            required
          />
        </div>

        <Spacer length={25} />

        <Input
          type="email"
          label="Email address"
          name="signup_email"
          required
        />

        <Spacer length={25} />

        <Input
          type="password"
          placeholder="★ ★ ★ ★ ★"
          label="Password"
          name="signup_password"
          required
        />

        <Spacer length={25} />

        <div className="checkbox-wrap">
          <input id="terms" type="checkbox" />{" "}
          <label htmlFor="terms">
            By creating an account you are agreeing to our{" "}
            <Link href="/terms-and-conditions">
              <a>Terms and Conditions.</a>
            </Link>
          </label>
        </div>
        <Spacer length={35} />

        <Button align="center" variant="special">
          Sign Up
        </Button>
      </form>
    </SignupFormWrapper>
  );
};

export default LoginForm;
