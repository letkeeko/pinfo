import type { NextPage } from "next";
import styled from "styled-components";

import Seo from "../components/seo";

const Wrapper = styled.div`
  max-width: 1920px;
  margin: 0 auto;
`;

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Seo title="Pinfo" description="TBD" />

      <h1>Welcome!</h1>
      <p>Background color</p>
    </Wrapper>
  );
};

export default Home;
