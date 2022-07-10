import React from "react";
import BlankOverlayWrapper from "./style";

type BlankOverlay = {
  closeCallback: (value?: any, e?: React.MouseEvent<HTMLButtonElement>) => void;
};

const BlankOverlay = (props: BlankOverlay) => {
  const { closeCallback } = props;

  return <BlankOverlayWrapper onClick={() => closeCallback()} />;
};

export default BlankOverlay;
