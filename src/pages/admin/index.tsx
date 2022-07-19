import type { NextPage } from "next";
import Head from "../../components/Head";
import Pins from "../../components/Panels/Pins/Pins";
import LayoutPrivate from "../../components/LayoutPrivate/LayoutPrivate";

const PinsPage: NextPage = () => {
  return (
    <>
      <Head title="Keeko (@keekopdf) • Pins" description="TBD" />
      <LayoutPrivate>
        <Pins />
      </LayoutPrivate>
    </>
  );
};

export default PinsPage;
