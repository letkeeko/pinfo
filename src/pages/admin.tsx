import type { NextPage } from "next";
import { COLOR } from "../components/variables";
import styled from "styled-components";
import Seo from "../components/Seo";
import NavBar from "../components/FrontPage/NavBar/NavBar";
import InputBar from "../components/FrontPage/InputBar/InputBar";
import Heading from "../components/Heading/Heading";
import Text from "../components/Text/Text";
import Spacer from "../components/Spacer/Spacer";
import LeftBar from "../components/Dashboard/LeftBar/LeftBar";
import TopBar from "../components/Dashboard/TopBar/TopBar";
import TextEditor from "../components/Dashboard/TextEditor/TextEditor";

const Admin: NextPage = () => {
  return (
    <Wrapper>
      <Seo title="Admin" description="TBD" />
      <LeftBar />
      <div className="flex-row">
        <TopBar />
        <div className="col col--edit-panel">
          <TextEditor />
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
    padding: 0 0 0 64px;
    min-height: 100vh;

    .col {
      &--edit-panel {
        width: 80%;
        padding: 142px 42px;
      }

      &--preview {
        width: 20%;
        border-left: 1px solid rgba(0, 0, 0, 0.1);
        padding: 42px 0 0 0;
      }
    }
  }
`;

export default Admin;
