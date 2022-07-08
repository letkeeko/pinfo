import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { COLOR } from "../variables";
import Link from "next/link";
import { VscSearch, VscAccount, VscArrowLeft } from "react-icons/vsc";
import Text from "../Text/Text";
import BlackOverlay from "../BlankOverlay/BlankOverlay";

const PopupToolAccount = () => {
  return (
    <>
      <Wrapper>
        <div className="nav-item">
          <Link href="/admin/account">
            <a className="nav-item__btn">
              <VscAccount className="icon" /> <Text>My Account</Text>
            </a>
          </Link>
        </div>

        <div className="nav-item nav-item--border">
          <Link href="/admin/seo">
            <a className="nav-item__btn">
              <VscSearch className="icon" /> <Text>SEO</Text>
            </a>
          </Link>
        </div>

        <div className="nav-item nav-item--border">
          <button className="nav-item__btn">
            <VscArrowLeft className="icon" /> <Text>Logout</Text>
          </button>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  box-shadow: 0 0 12px 0 ${COLOR.getBlack(0.125)};
  position: absolute;
  background-color: ${COLOR.white};
  bottom: 36px;
  left: 36px;
  border-radius: 8px;
  z-index: 3;

  .nav-item {
    padding: 25px 75px 25px 25px;

    &__btn {
      display: flex;
      align-items: center;
      line-height: 30px;

      background-color: transparent;
      border: 0;
      color: ${COLOR.blue};
      white-space: pre;
      cursor: pointer;

      .icon {
        margin: 0 20px 0 0;
        font-size: 1.2rem;
      }
    }

    &--border {
      border-top: 1px solid ${COLOR.getBlack(0.125)};
    }
  }
`;

export default PopupToolAccount;
