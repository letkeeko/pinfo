import React from "react";
import Link from "next/link";
import { TopBarWrapper } from "./style";
import useDialogStore from "../../stores/useDialogStore";
import useActivePage from "../../hooks/useActivePage";

const TopBar = () => {
  const activePage = useActivePage();

  const getActiveClassName = (value: string) => {
    if (activePage === value) {
      return "menu-list__each menu-list__each--active";
    }

    return "menu-list__each";
  };

  const togglePopToolShare = useDialogStore(
    ({ togglePopToolShare }) => togglePopToolShare
  );

  return (
    <TopBarWrapper>
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
            <button className="btn" onClick={togglePopToolShare}>
              Share
            </button>
          </li>
        </div>
      </ul>
    </TopBarWrapper>
  );
};

export default TopBar;
