import React from "react";
import { ModalContainerWrapper } from "./style";

type ModalWrapperProps = {
  children: React.ReactNode;
};

const ModalWrapper = (props: ModalWrapperProps) => {
  const { children } = props;
  return <ModalContainerWrapper>{children}</ModalContainerWrapper>;
};

export default ModalWrapper;
