import React from "react";
import styled from "styled-components";
import { COLOR } from "../variables";
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

const Wrapper = styled.aside`
  background-color: ${COLOR.white};
  position: fixed;
  left: 0;
  height: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgba(60, 60, 60, 0.125);
  min-width: 70px;
  z-index: 3;

  .logo {
    width: 30px;
    display: block;
    margin: 0 auto;
  }

  .badge {
    border: 1px ${COLOR.blue} solid;
    color: ${COLOR.blue};
    background-color: transparent;
    cursor: pointer;
    margin: auto auto 0 auto;
    display: block;
    line-height: 30px;
    width: 44px;
    height: 44px;
    border-radius: 50%;

    &__label {
    }
  }
`;

export default LeftBar;
