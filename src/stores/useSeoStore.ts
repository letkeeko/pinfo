import create from "zustand";
import SeoStoreTypes from "./useSeoStore.types";

const useSeoStore = create<SeoStoreTypes>((set, get) => ({
  title_tag: "",

  meta_description: "",

  isModalOpen: false,

  toggleModal: () => {
    set((state) => ({
      ...state,
      isModalOpen: !state.isModalOpen,
    }));
  },

  handleChange: (e) => {
    set((state) => {
      const target = e.target as HTMLInputElement;

      state[target.name] = target.value;

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
