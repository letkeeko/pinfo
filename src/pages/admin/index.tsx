import type { NextPage } from "next";
import Seo from "../../components/Seo";
import Pins from "../../components/Panels/Pins/Pins";
import Layout from "../../components/Layout/Layout";

const PinsPage: NextPage = () => {
  return (
    <>
      <Seo title="Pinfo Pins" description="TBD" />
      <Layout>
        <Pins />
      </Layout>
    </>
  );
};

export default PinsPage;
