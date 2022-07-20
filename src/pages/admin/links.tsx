import type { NextPage } from "next";
import Head from "../../components/Head";
import Links from "../../components/Panels/Links/Links";
import LayoutPrivate from "../../components/LayoutPrivate/LayoutPrivate";

const LinksPage: NextPage = () => {
  return (
    <>
      <Head title="Keeko (@keekopdf) • Links" description="TBD" />
      <LayoutPrivate>
        <Links />
      </LayoutPrivate>
    </>
  );
};

export default LinksPage;
