import type { NextPage } from "next";
import Head from "../../components/Head";
import Seo from "../../components/Panels/Seo/Seo";
import LayoutPrivate from "../../components/LayoutPrivate/LayoutPrivate";

const SeoPage: NextPage = () => {
  return (
    <>
      <Head title="Keeko (@keekopdf) • SEO" description="TBD" />
      <LayoutPrivate>
        <Seo />
      </LayoutPrivate>
    </>
  );
};

export default SeoPage;
