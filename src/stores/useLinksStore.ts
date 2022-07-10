import create from "zustand";
import platformOptions from "../static/platformOptions";
import isValidUrl from "../utils/is-valid-url";
import { LinksStoreProps } from "./useLinksStore.types";

const useLinksStore = create<LinksStoreProps>((set, get) => ({
  links: [],

  deletePrompt: [],

  invalidUrls: [],

  isModalOpen: false,

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
    const invalidUrls = get().invalidUrls;
    const deletePrompt = get().deletePrompt;
    // filter out based on selected id
    const filteredLinks = links.filter((link) => link.value !== value);

    // delete its id in prompt as well
    const filteredDeletePrompt = deletePrompt.filter(
      (linkId) => linkId !== value
    );

    const filteredInvalidUrls = invalidUrls.filter(
      (currentPlatform) => currentPlatform !== value
    );

    set((state) => ({
      ...state,
      links: filteredLinks,
      deletePrompt: filteredDeletePrompt,
      invalidUrls: filteredInvalidUrls,
    }));
  },

  handleChange: (platform, url) => {
    const links = get().links;
    const handleUrlValidation = get().handleUrlValidation;

    const currentIndex = links.findIndex((link) => link.value === platform);

    links[currentIndex].url = url;

    handleUrlValidation(platform, url);

    set((state) => ({ ...state, links: [...links] }));
  },

  handleUrlValidation: (platform, url) => {
    const invalidUrls = get().invalidUrls;
    const links = get().links;
    const handleSaveToDb = get().handleSaveToDb;

    const isAllValidUrl = links.every((link) => isValidUrl(link.url));

    if (isValidUrl(url)) {
      const filteredInvalidUrls = invalidUrls.filter(
        (currentPlatform) => currentPlatform !== platform
      );
      set((state) => ({
        ...state,
        invalidUrls: filteredInvalidUrls,
      }));
    }

    if (!isValidUrl(url) && !invalidUrls.includes(platform)) {
      set((state) => ({
        ...state,
        invalidUrls: [...invalidUrls, platform],
      }));
    }

    if (isAllValidUrl) {
      handleSaveToDb();
    }
  },

  handleSaveToDb: () => {
    console.log("save to database");
  },
}));

export default useLinksStore;
