import type { NextPage } from "next";
import { COLOR } from "../components/variables";
import styled from "styled-components";
import Head from "../components/Head";
import NavBar from "../components/FrontPage/NavBar/NavBar";
import InputBar from "../components/FrontPage/InputBar/InputBar";
import Heading from "../components/Heading/Heading";
import Text from "../components/Text/Text";
import Spacer from "../components/Spacer/Spacer";

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Head title="Pinfo" description="TBD" />

      <div className="flex-row">
        <div className="col col--white">
          <NavBar />

          <Spacer length={48} />

          <Heading as="h1">
            Pin your <strong>FAQ&apos;s</strong>
            <br />
            or other information
          </Heading>

          <Spacer length={8} />

          <Text>A perfect way to share everything you have going on.</Text>

          <Spacer length={42} />
          <InputBar />
          <Spacer length={14} />

          <Text>It&apos;s free, create your own page in minutes.</Text>
        </div>
        <div className="col col--blue">
          <h1>Accordion</h1>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: ${COLOR.black};
  margin: 0 auto;

  .flex-row {
    display: flex;
    height: 100vh;

    .col {
      width: 50%;
      display: flex;
      align-items: center;
      flex-direction: column;

      &--white {
      }

      &--blue {
        background-color: ${COLOR.blue};
        color: ${COLOR.white};
        justify-content: center;
      }
    }
  }
`;

export default Home;
