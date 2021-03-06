import React from "react";
import Link from "next/link";
import { VscSearch, VscAccount, VscArrowLeft } from "react-icons/vsc";
import Text from "../Text/Text";
import useActivePage from "../../hooks/useActivePage";
import { PopoverAccountWrapper } from "./style";
import BlankOverlay from "../BlankOverlay/BlankOverlay";
import useDialogStore from "../../stores/useDialogStore";

const PopoverAccount = () => {
  const activePage = useActivePage();

  const getActiveClassName = (value: string) => {
    if (activePage === value) {
      return "nav-item__btn nav-item__btn--active";
    }

    return "nav-item__btn";
  };

  const togglePopoverAccount = useDialogStore(
    ({ togglePopoverAccount }) => togglePopoverAccount
  );

  return (
    <>
      <PopoverAccountWrapper>
        <div className="nav-item">
          <Link href="/admin/account">
            <a
              className={getActiveClassName("/admin/account")}
              onClick={togglePopoverAccount}
            >
              <VscAccount className="icon" /> <Text>My Account</Text>
            </a>
          </Link>
        </div>

        <div className="nav-item nav-item--border">
          <Link href="/admin/seo">
            <a
              className={getActiveClassName("/admin/seo")}
              onClick={togglePopoverAccount}
            >
              <VscSearch className="icon" /> <Text>SEO</Text>
            </a>
          </Link>
        </div>

        <div className="nav-item nav-item--border">
          <button className="nav-item__btn" onClick={togglePopoverAccount}>
            <VscArrowLeft className="icon" /> <Text>Logout</Text>
          </button>
        </div>
      </PopoverAccountWrapper>

      <BlankOverlay closeCallback={togglePopoverAccount} />
    </>
  );
};

export default PopoverAccount;
