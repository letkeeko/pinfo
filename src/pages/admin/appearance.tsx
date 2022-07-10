import type { NextPage } from "next";
import Head from "../../components/Head";
import Appearance from "../../components/Panels/Appearance/Appearance";
import AdminLayout from "../../components/AdminLayout/AdminLayout";

const AppearancePage: NextPage = () => {
  return (
    <>
      <Head title="Keeko (@keekopdf) • Appearance" description="TBD" />
      <AdminLayout>
        <Appearance />
      </AdminLayout>
    </>
  );
};

export default AppearancePage;
