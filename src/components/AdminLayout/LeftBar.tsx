import React from "react";
import { LeftBarWrapper } from "./style";
import Link from "next/link";
import Logo from "../../svg/monogram";
import { RiImageLine } from "react-icons/ri";
import useMediaStore from "../../stores/useMediaStore";
import useDialogStore from "../../stores/useDialogStore";

const LeftBar = () => {
  const togglePopoverAccount = useDialogStore(
    ({ togglePopoverAccount }) => togglePopoverAccount
  );

  const toggleMediaModal = useMediaStore(
    ({ toggleMediaModal }) => toggleMediaModal
  );

  return (
    <LeftBarWrapper>
      <Link href="/admin">
        <a className="logo">
          <Logo />
        </a>
      </Link>

      <div className="bot">
        <button
          className="bot__btn bot__btn--media"
          onClick={() => toggleMediaModal("sidebar")}
        >
          <RiImageLine className="icon" />
        </button>

        <button
          className="bot__btn bot__btn--avatar"
          onClick={togglePopoverAccount}
        >
          <label className="label">Ke</label>
        </button>
      </div>
    </LeftBarWrapper>
  );
};

export default LeftBar;
