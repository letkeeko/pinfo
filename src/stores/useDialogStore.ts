import create from "zustand";
import DialogStoreProps from "./useDialogStore.types";

const useDialogStore = create<DialogStoreProps>((set) => ({
  isPopoverAccount: false,

  isPopoverShare: false,

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
}));

export default useDialogStore;
