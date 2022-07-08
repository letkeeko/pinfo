import type { NextPage } from "next";
import Seo from "../../components/Seo";
import Links from "../../components/Panels/Links/Links";
import Layout from "../../components/Layout/Layout";

const LinksPage: NextPage = () => {
  return (
    <>
      <Seo title="Keeko (@keekopdf) • Links" description="TBD" />
      <Layout>
        <Links />
      </Layout>
    </>
  );
};

export default LinksPage;
