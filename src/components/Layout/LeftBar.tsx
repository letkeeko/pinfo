import React from "react";
import styled from "styled-components";
import { COLOR } from "../variables";
import Link from "next/link";
import Logo from "../../svg/monogram";
import PopupToolAccount from "../PopupTool/PopupToolAccount";
import useToggle from "../../hooks/useToggle";

const LeftBar = () => {
  const [isPopupTool, togglePopupTool] = useToggle();

  return (
    <Wrapper>
      <Link href="/admin">
        <a className="logo">
          <Logo />
        </a>
      </Link>

      <div className="avatar">
        <button className="avatar__btn" onClick={togglePopupTool}>
          <label className="label">Ke</label>
        </button>

        {isPopupTool && <PopupToolAccount />}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  background-color: ${COLOR.white};
  border-right: 1px solid ${COLOR.getBlack(0.125)};
  position: fixed;
  left: 0;
  height: 100%;
  padding: 20px 0 25px 0;
  display: flex;
  flex-direction: column;
  min-width: 70px;
  z-index: 4;

  .logo {
    width: 28px;
    display: block;
    margin: 0 auto;
  }

  .avatar {
    margin: auto auto 0 auto;
    position: relative;
    z-index: 2;

    &__btn {
      border: 1px solid ${COLOR.blue};
      background-color: ${COLOR.white};
      color: ${COLOR.blue};
      font-size: 1.18rem;

      cursor: pointer;
      text-align: center;
      display: flex;
      line-height: 30px;
      width: 45px;
      height: 45px;
      border-radius: 50%;

      .label {
        margin: auto;
        pointer-events: none;
      }
    }
  }
`;

export default LeftBar;
