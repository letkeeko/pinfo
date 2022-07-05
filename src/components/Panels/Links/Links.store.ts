import create from "zustand";
import platformOptions from "./platformOptions";
import { platformTypes } from "./platformOptions";

const useStore = create<LinksProps>((set, get) => ({
  links: [],

  isModalOpen: false,

  deletePrompt: [],

  searchablePlatforms: platformOptions,

  handleSearchPlatform: (value) => {
    // if empty simply reset back to full list
    if (!value.length) {
      set((state) => ({
        ...state,
        searchablePlatforms: platformOptions,
      }));
    }

    if (!!value.length) {
      const filteredPlatforms = platformOptions.filter((platform) =>
        platform.value.includes(value.toLowerCase())
      );

      set((state) => ({ ...state, searchablePlatforms: filteredPlatforms }));
    }
  },

  handleModal: (value) => {
    if (value) {
      set((state) => ({
        ...state,
        isModalOpen: value,
        searchablePlatforms: platformOptions,
      }));
    }

    // if no value pass, simply toggle it
    if (!value) {
      set((state) => {
        const { isModalOpen } = state;

        return {
          ...state,
          isModalOpen: !isModalOpen,
          searchablePlatforms: platformOptions,
        };
      });
    }
  },

  handleAddPlatform: (value) => {
    const links = get().links;

    set((state) => ({
      ...state,
      links: [...links, value],
      isModalOpen: false,
    }));
  },

  handleDeletePrompt: (value) => {
    const deletePrompt = get().deletePrompt;

    if (deletePrompt.includes(value)) {
      const filteredDeletePrompt = deletePrompt.filter(
        (linkId) => linkId !== value
      );

      set((state) => ({
        ...state,
        deletePrompt: [...filteredDeletePrompt],
      }));

      return;
    }

    set((state) => ({
      ...state,
      deletePrompt: [...deletePrompt, value],
    }));
  },

  handleDeleteLink: (value) => {
    const links = get().links;
    const deletePrompt = get().deletePrompt;
    // filter out based on selected id
    const filteredLinks = links.filter((link) => link.value !== value);

    // delete its id in prompt as well
    const filteredDeletePrompt = deletePrompt.filter(
      (linkId) => linkId !== value
    );

    set((state) => ({
      ...state,
      links: filteredLinks,
      deletePrompt: filteredDeletePrompt,
    }));
  },

  handleChange: (value, url) => {
    const links = get().links;

    const currentIndex = links.findIndex((link) => link.value === value);

    links[currentIndex].url = url;

    set((state) => ({ ...state, links: [...links] }));
  },
}));

type LinkProps = {
  label: string;
  value: string;
  url: string;
};

type LinksProps = {
  links: LinkProps[];
  deletePrompt: string[];
  isModalOpen: boolean;
  searchablePlatforms: platformTypes;
  handleModal: (value?: boolean) => void;
  handleSearchPlatform: (value: string) => void;
  handleAddPlatform: (value: LinkProps) => void;
  handleChange: (value: string, url: string) => void;
  handleDeleteLink: (value: string) => void;
  handleDeletePrompt: (value: string) => void;
};

export default useStore;
