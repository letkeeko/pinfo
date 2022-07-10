import type { NextPage } from "next";
import Head from "../../components/Head";
import Links from "../../components/Panels/Links/Links";
import AdminLayout from "../../components/AdminLayout/AdminLayout";

const LinksPage: NextPage = () => {
  return (
    <>
      <Head title="Keeko (@keekopdf) • Links" description="TBD" />
      <AdminLayout>
        <Links />
      </AdminLayout>
    </>
  );
};

export default LinksPage;
