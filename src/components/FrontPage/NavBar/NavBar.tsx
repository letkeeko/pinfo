import React from "react";
import Link from "next/link";
import NavBarWrapper from "./style";
import Logo from "../../../svg/logo";

const Navbar = () => {
  return (
    <NavBarWrapper>
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
    </NavBarWrapper>
  );
};

export default Navbar;
