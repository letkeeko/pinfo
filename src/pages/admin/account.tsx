import type { NextPage } from "next";
import Head from "../../components/Head";
import Account from "../../components/Panels/Account/Account";
import LayoutPrivate from "../../components/LayoutPrivate/LayoutPrivate";

const AccountPage: NextPage = () => {
  return (
    <>
      <Head title="Keeko (@keekopdf) • Account" description="TBD" />
      <LayoutPrivate>
        <Account />
      </LayoutPrivate>
    </>
  );
};

export default AccountPage;
