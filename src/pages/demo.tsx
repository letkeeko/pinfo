import type { NextPage } from "next";
import { COLOR } from "../components/variables";
import styled from "styled-components";
import Head from "../components/Head";
import UserProfile from "../components/UserProfile/UserProfile";
import Text from "../components/Text/Text";
import Spacer from "../components/Spacer/Spacer";

const Demo: NextPage = () => {
  return (
    <Wrapper>
      <Head title="Demo" description="TBD" />
      <UserProfile />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: ${COLOR.black};
  margin: 0 auto;
  background-color: orange;
  min-height: 100vh;
`;

export default Demo;
