import create from "zustand";
import AccountStoreProps from "./useAccountStore.types";

const useAccountStore = create<AccountStoreProps>((set, get) => ({
  user: {
    name: "",
    category: "",
  },

  handleChange: (e: any) => {
    const user = get().user;
    user[e.target.name] = e.target.value;

    set((state) => ({
      user: {
        ...state.user,
        user,
      },
    }));
  },
}));

export default useAccountStore;
