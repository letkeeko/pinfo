import React from "react";
import NavBar from "./NavBar";
import LayoutPublicWrapper from "./style";
import Footer from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
};

const LayoutPublic = (props: LayoutProps) => {
  const { children } = props;

  return (
    <LayoutPublicWrapper>
      <NavBar />

      <main className="page-container">{children}</main>

      <Footer />
    </LayoutPublicWrapper>
  );
};

export default LayoutPublic;
