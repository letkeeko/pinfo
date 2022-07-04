import type { NextPage } from "next";
import { COLOR } from "../components/variables";
import styled from "styled-components";
import Seo from "../components/Seo";
import LeftBar from "../components/LeftBar/LeftBar";
import TopBar from "../components/TopBar/TopBar";
import Pins from "../components/Panels/Pins/Pins";
import Appearance from "../components/Panels/Appearance/Appearance";

const Admin: NextPage = () => {
  return (
    <Wrapper>
      <Seo title="Admin" description="TBD" />
      <LeftBar />
      <div className="flex-row">
        <TopBar />
        <div className="col col--edit-panel">
          <Pins />
          <Appearance />
        </div>
        <div className="col col--preview">Preview here</div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: ${COLOR.blue};
  margin: 0 auto;

  .flex-row {
    display: flex;
    position: relative;
    padding: 0 0 0 70px;

    .col {
      &--edit-panel {
        background-color: ${COLOR.ice};
        width: 50%;
        padding: 140px 35px;
        height: 100vh;
        overflow: scroll;
      }

      &--preview {
        width: 50%;
        border-left: 1px solid rgba(60, 60, 60, 0.125);
        padding: 42px 0 0 0;
      }
    }
  }
`;

export default Admin;
