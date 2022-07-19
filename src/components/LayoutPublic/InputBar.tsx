import React, { useState } from "react";
import { useRouter } from "next/router";
import { InputBarWrapper } from "./style";
import Button from "../Button/Button";

const InputBar = () => {
  const [username, setUserName] = useState("");

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    router.push({
      pathname: "/signup",
      query: { username },
    });
  };

  return (
    <InputBarWrapper>
      <span className="url">site.url/</span>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          placeholder="yourname"
          type="text"
          value={username}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUserName(e.target.value)
          }
        />
        <Button variant="special">Start My Page</Button>
      </form>
    </InputBarWrapper>
  );
};

export default InputBar;
