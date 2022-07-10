import type { NextPage } from "next";
import Head from "../../components/Head";
import Seo from "../../components/Panels/Seo/Seo";
import AdminLayout from "../../components/AdminLayout/AdminLayout";

const SeoPage: NextPage = () => {
  return (
    <>
      <Head title="Keeko (@keekopdf) • SEO" description="TBD" />
      <AdminLayout>
        <Seo />
      </AdminLayout>
    </>
  );
};

export default SeoPage;
