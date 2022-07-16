import React from "react";
import Profile from "./Profile";
import Background from "./Background";
import Buttons from "./Buttons";
import Fonts from "./Fonts";
import Spacer from "../../Spacer/Spacer";

const Appearance = () => {
  return (
    <>
      <Profile />

      <Spacer length={75} />

      <Background />

      <Spacer length={75} />

      <Buttons />

      <Spacer length={75} />

      <Fonts />
    </>
  );
};

export default Appearance;
