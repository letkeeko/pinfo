import React from "react";
import useScrollDirection from "../../hooks/useScrollDirection";
import Link from "next/link";
import { NavBarWrapper } from "./style";
import Logo from "../../svg/logo";

const Navbar = () => {
  const scrollDir = useScrollDirection();

  return (
    <NavBarWrapper isSticky={scrollDir === "up"}>
      <div className="inner-wrapper inner-wrapper--flex-nav">
        <Link href="/">
          <a className="logo">
            <Logo />
          </a>
        </Link>

        <ul className="menu-list">
          <li className="menu-list__each">
            <a className="link" href="#about">
              About
            </a>
          </li>

          <li className="menu-list__each">
            <Link href="/login">
              <a className="link">Log In</a>
            </Link>
          </li>

          <li className="menu-list__each">
            <Link href="/signup">
              <a className="link">Sign Up</a>
            </Link>
          </li>
        </ul>
      </div>
    </NavBarWrapper>
  );
};

export default Navbar;
