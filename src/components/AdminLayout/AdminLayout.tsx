import React from "react";
import LeftBar from "./LeftBar";
import TopBar from "./TopBar";
import { AdminLayoutWrapper } from "./style";
import useActivePage from "../../hooks/useActivePage";
import SeoPreview from "../Panels/Seo/SeoPreview";
import useSeoStore from "../../stores/useSeoStore";
import ModalLinks from "../Modal/ModalLinks";
import ModalGuide from "../Modal/ModalGuide";
// import ModalMediaLibrary from "../Modal/ModalMediaLibrary";
import PopoverShare from "../Popover/PopoverShare";
import PopoverAccount from "../Popover/PopoverAccount";
import useDialogStore from "../../stores/useDialogStore";

type LayoutProps = {
  children: React.ReactNode;
};

const AdminLayout = (props: LayoutProps) => {
  const { children } = props;

  const isLinkIconsModal = useDialogStore(
    ({ isLinkIconsModal }) => isLinkIconsModal
  );

  // const isMediaModal = useDialogStore(({ isMediaModal }) => isMediaModal);

  const isModalSeo = useSeoStore(({ isModalOpen }) => isModalOpen);

  const activePage = useActivePage();

  const isPopoverAccount = useDialogStore(
    ({ isPopoverAccount }) => isPopoverAccount
  );

  const isPopoverShare = useDialogStore(({ isPopoverShare }) => isPopoverShare);

  return (
    <AdminLayoutWrapper>
      <div className="flex-row">
        <LeftBar />
        <TopBar />
        <div className="col col--edit-panel">{children}</div>
        <div className="col col--preview">
          {activePage === "/admin/seo" && <SeoPreview />}

          {activePage !== "/admin/seo" && <p>Page preview</p>}
        </div>
      </div>
      {isLinkIconsModal && <ModalLinks />}
      {isModalSeo && <ModalGuide />}
      {isPopoverShare && <PopoverShare />}
      {isPopoverAccount && <PopoverAccount />}
      {/* {isMediaModal && <ModalMediaLibrary />} */}
    </AdminLayoutWrapper>
  );
};

export default AdminLayout;
