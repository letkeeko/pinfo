import type { NextPage } from "next";
import Head from "../../components/Head";
import Views from "../../components/Panels/Views/Views";
import AdminLayout from "../../components/AdminLayout/AdminLayout";

const ViewsPage: NextPage = () => {
  return (
    <>
      <Head title="Keeko (@keekopdf) • Views" description="TBD" />
      <AdminLayout>
        <Views />
      </AdminLayout>
    </>
  );
};

export default ViewsPage;
