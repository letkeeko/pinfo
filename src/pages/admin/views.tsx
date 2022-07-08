import type { NextPage } from "next";
import Seo from "../../components/Seo";
import Views from "../../components/Panels/Views/Views";
import Layout from "../../components/Layout/Layout";

const LinksPage: NextPage = () => {
  return (
    <>
      <Seo title="Keeko (@keekopdf) • Views" description="TBD" />
      <Layout>
        <Views />
      </Layout>
    </>
  );
};

export default LinksPage;
