import React from "react";
import LeftBar from "./LeftBar";
import TopBar from "./TopBar";
import { LayoutWrapper } from "./style";
import useActivePage from "../../hooks/useActivePage";
import SeoPreview from "../Panels/Seo/SeoPreview";
import useLinksStore from "../../stores/useLinksStore";
import useSeoStore from "../../stores/useSeoStore";
import ModalLinks from "../Modal/ModalLinks";
import ModalGuide from "../Modal/ModalGuide";
import PopToolShare from "../Popover/PopoverShare";
import PopToolAccount from "../Popover/PopoverAccount";
import useDialogStore from "../../stores/useDialogStore";

type LayoutProps = {
  children: React.ReactNode;
};

const AdminLayout = (props: LayoutProps) => {
  const { children } = props;

  const isModalLinks = useLinksStore(({ isModalOpen }) => isModalOpen);

  const isModalSeo = useSeoStore(({ isModalOpen }) => isModalOpen);

  const activePage = useActivePage();

  const isPopToolAccount = useDialogStore(
    ({ isPopToolAccount }) => isPopToolAccount
  );

  const isPopToolShare = useDialogStore(({ isPopToolShare }) => isPopToolShare);

  return (
    <LayoutWrapper>
      <LeftBar />
      <TopBar />
      <div className="flex-row">
        <div className="col col--edit-panel">{children}</div>
        <div className="col col--preview">
          {activePage === "/admin/seo" && <SeoPreview />}

          {activePage !== "/admin/seo" && <p>Page preview</p>}
        </div>
      </div>

      {isModalLinks && <ModalLinks />}

      {isModalSeo && <ModalGuide />}

      {isPopToolShare && <PopToolShare />}

      {isPopToolAccount && <PopToolAccount />}
    </LayoutWrapper>
  );
};

export default AdminLayout;
