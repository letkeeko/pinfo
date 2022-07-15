import React from "react";
import create from "zustand";
import { COLOR } from "../components/variables";
import userPlaceholder from "../static/userPlaceholder";
import { AppearanceStoreProps } from "./useAppearanceStore.types";

const useAppearanceStore = create<AppearanceStoreProps>((set, get) => ({
  background: userPlaceholder.background,

  button: userPlaceholder.button,

  font: userPlaceholder.font,

  details: {
    profile_title: "",
    profile_category: "",
  },

  activeColorPickers: [],

  handleDetailsChange: (e) => {
    const details = get().details;

    const target = e.target as HTMLInputElement;

    details[target.name] = target.value;

    set((state) => ({
      details: {
        ...state.details,
        details,
      },
    }));
  },

  handleBackgroundChange: (key, value) => {
    const background = get().background;

    background[key] = value;

    set((state) => ({
      ...state,
      background: { ...background },
    }));
  },

  handleButtonChange: (key, value) => {
    const button = get().button;

    button[key] = value;

    set((state) => ({
      ...state,
      button: { ...button },
    }));
  },

  handleFontChange: (key, value) => {
    const font = get().font;

    font[key] = value;

    set((state) => ({
      ...state,
      font: { ...font },
    }));
  },

  handleActiveBackground: (value) => {
    const background = get().background;

    background["variant"] = value;

    set((state) => ({
      ...state,
      background: { ...background },

      // resets opened color picker when changing variant style
      activeColorPickers: [],
    }));
  },

  handleActiveButton: (value) => {
    const button = get().button;

    button["variant"] = value;

    set((state) => ({
      ...state,
      button: { ...button },

      // resets opened color picker when changing variant style
      activeColorPickers: [],
    }));
  },

  handleActiveFont: (value) => {
    const font = get().font;

    font["variant"] = value;

    set((state) => ({
      ...state,
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

      set((state) => ({
        ...state,
        activeColorPickers: filteredActiveColorPickers,
      }));

      return;
    }

    set((state) => ({
      ...state,
      activeColorPickers: [...activeColorPickers, value],
    }));
  },

  saveToDatabase: () => {
    console.log("save to database");
  },
}));

export default useAppearanceStore;
