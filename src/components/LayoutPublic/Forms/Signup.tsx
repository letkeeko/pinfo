import React, { useState, useEffect } from "react";
import { usernamePattern, passwordPattern, emailPattern } from "./regex";
import { useDebouncedCallback } from "use-debounce";
import { useRouter } from "next/router";
import Link from "next/link";
import { SignupWrapper } from "./style";
import Input from "../../Input/Input";
import Button from "../../Button/Button";
import Spacer from "../../Spacer/Spacer";
import Loading from "../../Loading/Loading";

const existingUsernames = ["keeko", "kate"];

const existingEmails = ["keeko@gmail.com", "kate@gmail.com"];

const SignupForm = () => {
  const router = useRouter();

  const [userInput, setUserInput] = useState<any>({
    signup_username: router.query.username || "",
    signup_email: "",
    signup_password: "",
    signup_is_terms_consent: false,
  });

  const [isLoading, setIsLoading] = useState(false);

  const [inputWarning, setInputWarning] = useState<any>({
    usernameWarning: "",
    emailWarning: "",
    passwordWarning: "",
  });

  const {
    signup_username,
    signup_email,
    signup_password,
    signup_is_terms_consent,
  } = userInput;

  const { usernameWarning, emailWarning, passwordWarning } = inputWarning;

  const isSubmitDisable =
    usernameWarning === null &&
    emailWarning === null &&
    passwordWarning === null &&
    signup_is_terms_consent;

  const handleChange = (key: string, value: string | boolean) => {
    userInput[key] = value;

    setUserInput({ ...userInput });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitDisable) {
      setIsLoading(true);
    }
  };

  const handleValidation = () => {
    let usernameWarning = null;
    let emailWarning = null;
    let passwordWarning = null;

    // if empty remove warning
    if (userInput.signup_username === "") {
      usernameWarning = "";
    }

    // don't run check if empty
    if (userInput.signup_username !== "") {
      // invalid username input

      if (!usernamePattern.test(userInput.signup_username)) {
        usernameWarning =
          "Usernames may only contain letters, numbers, underscores and periods.";
      }

      if (userInput.signup_username.length < 3) {
        usernameWarning = "Usernames must be longer than 2 characters";
      }

      // username already exist
      if (existingUsernames.includes(userInput.signup_username.toLowerCase())) {
        usernameWarning = `The username "${userInput.signup_username}" is already taken.`;
      }
    }

    if (userInput.signup_email === "") {
      emailWarning = "";
    }

    // don't run check if empty
    if (userInput.signup_email !== "") {
      // invalid email input
      if (!emailPattern.test(userInput.signup_email)) {
        emailWarning = "Please enter a valid email address.";
      }

      // email already exist
      if (existingEmails.includes(userInput.signup_email.toLowerCase())) {
        emailWarning = `Email "${userInput.signup_email}" has already been used.`;
      }
    }

    if (userInput.signup_password === "") {
      passwordWarning = "";
    }

    // don't run check if empty
    if (userInput.signup_password !== "") {
      if (!passwordPattern.test(userInput.signup_password)) {
        passwordWarning =
          "Password must be at least 8 characters with a number.";
      }
    }

    // all null if all valid
    setInputWarning({
      usernameWarning,
      emailWarning,
      passwordWarning,
    });
  };

  const debouncedValidation = useDebouncedCallback(() => {
    handleValidation();
  }, 1000);

  useEffect(() => {
    debouncedValidation();
  }, [debouncedValidation, userInput]);

  return (
    <SignupWrapper>
      <form onSubmit={handleSubmit}>
        <div className="username-input-wrap">
          <span className="absolute-txt">site.url/</span>
          <Input
            type="text"
            placeholder="username"
            label="Username"
            name="signup_username"
            value={signup_username}
            warning={usernameWarning}
            handleChange={handleChange}
          />
        </div>

        <Spacer length={25} />

        <Input
          type="text"
          label="Email address"
          name="signup_email"
          value={signup_email}
          warning={emailWarning}
          handleChange={handleChange}
        />

        <Spacer length={25} />

        <Input
          type="text"
          placeholder="★ ★ ★ ★ ★"
          label="Password"
          name="signup_password"
          value={signup_password}
          warning={passwordWarning}
          handleChange={handleChange}
        />

        <Spacer length={25} />

        <div className="checkbox-wrap">
          <input
            id="terms"
            type="checkbox"
            name="signup_is_terms_consent"
            defaultChecked={signup_is_terms_consent}
            onChange={(e) => {
              handleChange(e.target.name, e.target.checked);
            }}
          />

          <label htmlFor="terms">
            By creating an account you are agreeing to our{" "}
            <Link href="/terms-and-conditions">
              <a>Terms and Conditions.</a>
            </Link>
          </label>
        </div>

        <Spacer length={35} />

        <Button align="center" variant="special" disabled={!isSubmitDisable}>
          Sign Up
        </Button>
      </form>

      {isLoading && <Loading />}
    </SignupWrapper>
  );
};

export default SignupForm;
