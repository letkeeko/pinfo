import type { NextPage } from "next";
import Head from "../../components/Head";
import Pins from "../../components/Panels/Pins/Pins";
import AdminLayout from "../../components/AdminLayout/AdminLayout";

const PinsPage: NextPage = () => {
  return (
    <>
      <Head title="Keeko (@keekopdf) • Pins" description="TBD" />
      <AdminLayout>
        <Pins />
      </AdminLayout>
    </>
  );
};

export default PinsPage;
