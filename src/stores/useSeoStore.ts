import create from "zustand";
import SeoStoreTypes from "./useSeoStore.types";

const useSeoStore = create<SeoStoreTypes>((set, get) => ({
  title_tag: "",

  meta_description: "",

  isModalOpen: false,

  toggleModal: () => {
    set(({ isModalOpen }) => ({
      isModalOpen: !isModalOpen,
    }));
  },

  handleChange: (key: string, value: string) => {
    set((state) => {
      state[key] = value;

      return {
        ...state,
      };
    });
  },

  handleDatabase: () => {
    console.log("save to db");
  },
}));

export default useSeoStore;
