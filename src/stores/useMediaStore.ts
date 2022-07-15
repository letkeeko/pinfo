import create from "zustand";
import MediaStoreProps from "./useMediaStore.types";

const useMediaStore = create<MediaStoreProps>((set) => ({
  isMediaModal: false,

  modalTriggerBy: "",

  toggleMediaModal: (by = "") => {
    set(({ isMediaModal }) => ({
      isMediaModal: !isMediaModal,
      modalTriggerBy: by,
    }));
  },
}));

export default useMediaStore;
