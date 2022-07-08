import React from "react";
import Link from "next/link";
import { COLOR } from "../variables";
import styled from "styled-components";
import { useRouter } from "next/router";
import PopupToolShare from "../PopupTool/PopupToolShare";
import useToggle from "../../hooks/useToggle";

const TopBar = () => {
  const [isPopupTool, togglePopupTool] = useToggle();
  const router = useRouter();

  const getActiveClassName = (value: string) => {
    if (router.pathname === value) {
      return "menu-list__each menu-list__each--active";
    }

    return "menu-list__each";
  };

  return (
    <Wrapper>
      <ul className="menu-list">
        <div className="col col--one">
          <li className={getActiveClassName("/admin")}>
            <Link href="/admin">
              <a className="btn">Pins</a>
            </Link>
          </li>
          <li className={getActiveClassName("/admin/appearance")}>
            <Link href="/admin/appearance">
              <a className="btn">Appearance</a>
            </Link>
          </li>
          <li className={getActiveClassName("/admin/links")}>
            <Link href="/admin/links">
              <a className="btn">Links</a>
            </Link>
          </li>
          <li className={getActiveClassName("/admin/views")}>
            <Link href="/admin/views">
              <a className="btn">Views</a>
            </Link>
          </li>
        </div>

        <div className="col col--two">
          <li className="menu-list__each menu-list__each--share">
            <button className="btn" onClick={togglePopupTool}>
              Share
            </button>
            {isPopupTool && <PopupToolShare />}
          </li>
        </div>
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  background-color: ${COLOR.white};
  border-bottom: 1px solid ${COLOR.getBlack(0.125)};
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  z-index: 3;

  .menu-list {
    width: 100%;
    display: flex;
    padding: 0 0 0 70px; // this padding-left is based on left bar width

    &__each {
      position: relative;
      display: block;

      .btn {
        color: ${COLOR.blue};
        cursor: pointer;
        background-color: transparent;
        border: 0;
        font-size: 0.925rem;
        line-height: 30px;
        padding: 0 48px;
      }

      &--active {
        &::after {
          background-color: ${COLOR.blue};
          content: "";
          height: 2px;
          width: 100%;
          position: absolute;
          left: 0;
          bottom: -20px;
        }
      }

      &--share {
        padding: 0 48px 0 0;

        .btn {
          border: 1px solid ${COLOR.getBlack(0.125)};
          position: relative;
          padding: 3px 24px;
          border-radius: 5px;
        }
      }
    }

    .col {
      display: flex;
      height: 70px;
      align-items: center;

      &--one {
        width: 50%;
      }

      &--two {
        border-left: 1px solid ${COLOR.getBlack(0.125)};
        justify-content: flex-end;
        width: 50%;
      }
    }
  }
`;

export default TopBar;
