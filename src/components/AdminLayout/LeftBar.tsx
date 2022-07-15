import React from "react";
import { LeftBarWrapper } from "./style";
import Link from "next/link";
import Logo from "../../svg/monogram";
import useDialogStore from "../../stores/useDialogStore";

const LeftBar = () => {
  const togglePopoverAccount = useDialogStore(
    ({ togglePopoverAccount }) => togglePopoverAccount
  );

  return (
    <LeftBarWrapper>
      <Link href="/admin">
        <a className="logo">
          <Logo />
        </a>
      </Link>

      <div className="avatar">
        <button className="avatar__btn" onClick={togglePopoverAccount}>
          <label className="label">Ke</label>
        </button>
      </div>
    </LeftBarWrapper>
  );
};

export default LeftBar;
