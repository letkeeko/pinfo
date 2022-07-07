import React from "react";
import LeftBar from "./LeftBar";
import TopBar from "./TopBar";
import Wrapper from "./Layout.style";

const Layout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <Wrapper>
      <LeftBar />
      <div className="flex-row">
        <TopBar />

        <div className="col col--edit-panel">{children}</div>

        <div className="col col--preview">Preview here</div>
      </div>
    </Wrapper>
  );
};

type LayoutProps = {
  children: React.ReactElement;
};

export default Layout;
