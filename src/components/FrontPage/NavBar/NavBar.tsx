import React from "react";
import Link from "next/link";
import Wrapper from "./style.NavBar";
import Logo from "../../../svg/logo";

const Navbar = () => {
  return (
    <Wrapper>
      <Link href="/">
        <a className="logo">
          <Logo />
        </a>
      </Link>
      <div className="bar">
        <a
          className="link"
          href="https://github.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          Demo
        </a>
        <Link href="/login">
          <a className="link">Login</a>
        </Link>
      </div>
    </Wrapper>
  );
};

export default Navbar;
