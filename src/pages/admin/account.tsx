import type { NextPage } from "next";
import Head from "../../components/Head";
import Account from "../../components/Panels/Account/Account";
import AdminLayout from "../../components/AdminLayout/AdminLayout";

const AccountPage: NextPage = () => {
  return (
    <>
      <Head title="Keeko (@keekopdf) • Account" description="TBD" />
      <AdminLayout>
        <Account />
      </AdminLayout>
    </>
  );
};

export default AccountPage;
