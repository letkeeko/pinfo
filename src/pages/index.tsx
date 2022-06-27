import type { NextPage } from "next";

import Wrapper from "./_index.style";
import Seo from "../components/Seo";
import NavBar from "../components/FrontPage/NavBar/NavBar";
import InputBar from "../components/FrontPage/InputBar/InputBar";
import Heading from "../components/Heading/Heading";
import Text from "../components/Text/Text";
import Spacer from "../components/Spacer/Spacer";

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Seo title="Pinfo" description="TBD" />

      <div className="flex-row">
        <div className="col col--white">
          <NavBar />

          <Spacer mt={48} />

          <Heading as="h1">
            Pin your <strong>FAQ&apos;s</strong>
            <br />
            or other information
          </Heading>

          <Spacer mb={8} />

          <Text>A perfect way to share everything you have going on.</Text>

          <Spacer mt={42} />
          <InputBar />
          <Spacer mb={14} />

          <Text>It&apos;s free, create your own page in minutes.</Text>
        </div>
        <div className="col col--blue">
          <h1>Accordion</h1>
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;
