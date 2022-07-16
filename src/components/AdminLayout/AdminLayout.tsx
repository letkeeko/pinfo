import React from "react";
import LeftBar from "./LeftBar";
import TopBar from "./TopBar";
import { AdminLayoutWrapper } from "./style";
import ModalMediaLibrary from "../Modal/ModalMediaLibrary";
import useMediaStore from "../../stores/useMediaStore";
import useDialogStore from "../../stores/useDialogStore";
import useActivePage from "../../hooks/useActivePage";
import SeoPreview from "../Panels/Seo/SeoPreview";
import useSeoStore from "../../stores/useSeoStore";
import ModalGuide from "../Modal/ModalGuide";
import PopoverShare from "../Popover/PopoverShare";
import PopoverAccount from "../Popover/PopoverAccount";

type LayoutProps = {
  children: React.ReactNode;
};

const AdminLayout = (props: LayoutProps) => {
  const { children } = props;

  const isModalSeo = useSeoStore(({ isModalOpen }) => isModalOpen);

  const activePage = useActivePage();

  const isPopoverAccount = useDialogStore(
    ({ isPopoverAccount }) => isPopoverAccount
  );

  const isPopoverShare = useDialogStore(({ isPopoverShare }) => isPopoverShare);

  const toggleMediaModal = useMediaStore(
    ({ toggleMediaModal }) => toggleMediaModal
  );

  const isMediaModal = useMediaStore(({ isMediaModal }) => isMediaModal);

  return (
    <AdminLayoutWrapper>
      <LeftBar />
      <TopBar />

      <div className="flex-row">
        <div className="col col--edit-panel">{children}</div>
        <div className="col col--preview">
          {activePage === "/admin/seo" && <SeoPreview />}

          {activePage !== "/admin/seo" && <p>Page preview</p>}
        </div>
      </div>

      {isModalSeo && <ModalGuide />}

      {isPopoverShare && <PopoverShare />}

      {isPopoverAccount && <PopoverAccount />}

      {isMediaModal && <ModalMediaLibrary closeMediaModal={toggleMediaModal} />}
    </AdminLayoutWrapper>
  );
};

export default AdminLayout;
