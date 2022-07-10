import React from "react";
import Information from "./Information";
import Action from "./Action";
import Danger from "./Danger";
import Spacer from "../../Spacer/Spacer";

const Account = () => {
  return (
    <>
      <Information />

      <Spacer length={75} />

      <Action />

      <Spacer length={75} />

      <Danger />
    </>
  );
};

export default Account;
