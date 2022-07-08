import React from "react";
import LeftBar from "./LeftBar";
import TopBar from "./TopBar";
import Wrapper from "./Layout.style";

type LayoutProps = {
  children: React.ReactElement;
};

const Layout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <Wrapper>
      <LeftBar />
      <TopBar />
      <div className="flex-row">
        <div className="col col--edit-panel">{children}</div>

        <div className="col col--preview">Preview here</div>
      </div>
    </Wrapper>
  );
};

export default Layout;
