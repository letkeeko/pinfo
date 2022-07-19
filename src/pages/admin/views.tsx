import type { NextPage } from "next";
import Head from "../../components/Head";
import Views from "../../components/Panels/Views/Views";
import LayoutPrivate from "../../components/LayoutPrivate/LayoutPrivate";

const ViewsPage: NextPage = () => {
  return (
    <>
      <Head title="Keeko (@keekopdf) • Views" description="TBD" />
      <LayoutPrivate>
        <Views />
      </LayoutPrivate>
    </>
  );
};

export default ViewsPage;
