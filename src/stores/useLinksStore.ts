import create from "zustand";
import platformOptions from "../static/platformOptions";
import isValidUrl from "../utils/is-valid-url";
import { LinksStoreProps } from "./useLinksStore.types";

const useLinksStore = create<LinksStoreProps>((set, get) => ({
  links: [],

  deletePrompt: [],

  invalidUrls: [],

  searchablePlatforms: platformOptions,

  isModalLinks: false,

  // simply toggle the modal
  toggleModalLinks: () => {
    set(({ isModalLinks }) => ({
      isModalLinks: !isModalLinks,
    }));
  },

  handleSearchPlatform: (value) => {
    // if empty simply reset back to full list
    if (!value.length) {
      set(() => ({
        searchablePlatforms: platformOptions,
      }));
    }

    if (!!value.length) {
      const filteredPlatforms = platformOptions.filter((platform) =>
        platform.value.includes(value.toLowerCase())
      );

      set(() => ({ searchablePlatforms: filteredPlatforms }));
    }
  },

  handleAddPlatform: (value) => {
    const links = get().links;

    set(() => ({
      links: [...links, value],
      isModalLinks: false,
    }));
  },

  handleDeletePrompt: (value) => {
    const deletePrompt = get().deletePrompt;

    if (deletePrompt.includes(value)) {
      const filteredDeletePrompt = deletePrompt.filter(
        (linkId) => linkId !== value
      );

      set(() => ({
        deletePrompt: [...filteredDeletePrompt],
      }));

      return;
    }

    set(() => ({
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

    set(() => ({
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

    set(() => ({ links: [...links] }));
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
      set(() => ({
        invalidUrls: filteredInvalidUrls,
      }));
    }

    if (!isValidUrl(url) && !invalidUrls.includes(platform)) {
      set(() => ({
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
