import React from "react";
import Background from "./Background";
import Buttons from "./Buttons";
import Fonts from "./Fonts";
import Spacer from "../../Spacer/Spacer";

const Appearance = () => {
  return (
    <>
      <Background />

      <Spacer length={75} />

      <Buttons />

      <Spacer length={75} />

      <Fonts />
    </>
  );
};

export default Appearance;
