import React from "react";
import Wrapper from "./style.LeftBar";
import Link from "next/link";

import Logo from "../../svg/monogram";

const LeftBar = () => {
  const handleClick = () => {
    alert("Show tool pop");
  };

  return (
    <Wrapper>
      <Link href="/admin">
        <a className="logo">
          <Logo />
        </a>
      </Link>

      <button className="badge" onClick={handleClick}>
        <span className="badge__label">Ke</span>
      </button>
    </Wrapper>
  );
};

export default LeftBar;
