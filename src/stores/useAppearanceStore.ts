import create from "zustand";
import userPlaceholder from "../static/userPlaceholder";
import { AppearanceStoreProps } from "./useAppearanceStore.types";

const useAppearanceStore = create<AppearanceStoreProps>((set, get) => ({
  background: userPlaceholder.background,

  button: userPlaceholder.button,

  font: userPlaceholder.font,

  details: userPlaceholder.details,

  activeColorPickers: [],

  handleDetailsChange: (key, value) => {
    const details = get().details;

    // const target = e.target as HTMLInputElement;

    details[key] = value;

    set(() => ({
      details: { ...details },
    }));
  },

  handleBackgroundChange: (key, value) => {
    const background = get().background;

    background[key] = value;

    set(() => ({
      background: { ...background },
    }));
  },

  handleButtonChange: (key, value) => {
    const button = get().button;

    button[key] = value;

    set(() => ({
      button: { ...button },
    }));
  },

  handleFontChange: (key, value) => {
    const font = get().font;

    font[key] = value;

    set(() => ({
      font: { ...font },
    }));
  },

  handleActiveBackground: (value) => {
    const background = get().background;

    background["variant"] = value;

    set(() => ({
      background: { ...background },

      // resets opened color picker when changing variant style
      activeColorPickers: [],
    }));
  },

  handleActiveButton: (value) => {
    const button = get().button;

    button["variant"] = value;

    set(() => ({
      button: { ...button },

      // resets opened color picker when changing variant style
      activeColorPickers: [],
    }));
  },

  handleActiveFont: (value) => {
    const font = get().font;

    font["variant"] = value;

    set(() => ({
      font: { ...font },

      // resets opened color picker when changing variant style
      activeColorPickers: [],
    }));
  },

  handleActiveColorPickers: (value) => {
    const activeColorPickers = get().activeColorPickers;

    if (activeColorPickers.includes(value)) {
      const filteredActiveColorPickers = activeColorPickers.filter(
        (current) => current !== value
      );

      set(() => ({
        activeColorPickers: filteredActiveColorPickers,
      }));

      return;
    }

    set(() => ({
      activeColorPickers: [...activeColorPickers, value],
    }));
  },

  saveToDatabase: () => {
    console.log("save to database");
  },
}));

export default useAppearanceStore;
