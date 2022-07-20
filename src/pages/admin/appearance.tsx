import type { NextPage } from "next";
import Head from "../../components/Head";
import Appearance from "../../components/Panels/Appearance/Appearance";
import LayoutPrivate from "../../components/LayoutPrivate/LayoutPrivate";

const AppearancePage: NextPage = () => {
  return (
    <>
      <Head title="Keeko (@keekopdf) • Appearance" description="TBD" />
      <LayoutPrivate>
        <Appearance />
      </LayoutPrivate>
    </>
  );
};

export default AppearancePage;
