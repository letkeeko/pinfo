import create from "zustand";
import DialogStoreProps from "./useDialogStore.types";

const useOverlayStore = create<DialogStoreProps>((set, get) => ({
  isPopToolAccount: false,

  isPopToolShare: false,

  togglePopToolAccount: () => {
    set((state) => ({
      ...state,
      isPopToolAccount: !state.isPopToolAccount,
    }));
  },

  togglePopToolShare: () => {
    set((state) => ({
      ...state,
      isPopToolShare: !state.isPopToolShare,
    }));
  },
}));

export default useOverlayStore;
