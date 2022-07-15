import create from "zustand";
import useDialogStore from "./useDialogStore";

const toggleMediaModal = useDialogStore.getState().toggleMediaModal;

const useMediaStore = create<any>((set: any) => ({
  selectedImage: "",

  handleSelectImage: (src: any) => {
    set(() => ({
      selectedImage: src,
    }));

    toggleMediaModal();
  },
}));

export default useMediaStore;
