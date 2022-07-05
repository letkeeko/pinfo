import React from "react";
import Wrapper from "./TopBar.style";

const TopBar = () => {
  return (
    <Wrapper>
      <ul className="menu-list">
        <div className="col col--one">
          <li className="menu-list__each menu-list__each--active">
            <button className="btn">Pins</button>
          </li>
          <li className="menu-list__each">
            <button className="btn">Appearance</button>
          </li>
          <li className="menu-list__each">
            <button className="btn">Links</button>
          </li>
        </div>

        <div className="col col--two">
          <li className="menu-list__each list__each--share">
            <button className="btn">Share</button>
          </li>
        </div>
      </ul>
    </Wrapper>
  );
};

export default TopBar;
