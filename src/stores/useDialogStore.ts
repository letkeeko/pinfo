import create from "zustand";
import DialogStoreProps from "./useDialogStore.types";

const useDialogStore = create<DialogStoreProps>((set) => ({
  isPopoverAccount: false,

  isPopoverShare: false,

  isMediaModal: false,

  isLinkIconsModal: false,

  togglePopoverAccount: () => {
    set(({ isPopoverAccount }) => ({
      isPopoverAccount: !isPopoverAccount,
    }));
  },

  togglePopoverShare: () => {
    set(({ isPopoverShare }) => ({
      isPopoverShare: !isPopoverShare,
    }));
  },

  toggleMediaModal: () => {
    set(({ isMediaModal }) => ({
      isMediaModal: !isMediaModal,
    }));
  },

  toggleLinkIconsModal: () => {
    set(({ isLinkIconsModal }) => ({
      isLinkIconsModal: !isLinkIconsModal,
    }));
  },
}));

export default useDialogStore;
