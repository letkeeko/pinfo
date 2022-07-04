import React from "react";
import BackgroundAppearance from "./BackgroundAppearance/BackgroundAppearance";
import ButtonsAppearance from "./ButtonsAppearance/ButtonsAppearance";
import FontAppearance from "./FontsAppearance/FontsAppearance";
import Spacer from "../../Spacer/Spacer";

const Appearance = () => {
  return (
    <>
      <BackgroundAppearance />
      <Spacer mb={75} />
      <ButtonsAppearance />
      <Spacer mb={75} />
      <FontAppearance />
    </>
  );
};

export default Appearance;
