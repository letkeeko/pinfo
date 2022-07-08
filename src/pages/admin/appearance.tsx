import type { NextPage } from "next";
import Seo from "../../components/Seo";
import Appearance from "../../components/Panels/Appearance/Appearance";
import Layout from "../../components/Layout/Layout";

const AppearancePage: NextPage = () => {
  return (
    <>
      <Seo title="Keeko (@keekopdf) • Appearance" description="TBD" />
      <Layout>
        <Appearance />
      </Layout>
    </>
  );
};

export default AppearancePage;
