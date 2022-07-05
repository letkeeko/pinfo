import create from "zustand";
import { COLOR } from "../../variables";

const defaultBackground = {
  image: null,
  grainy: COLOR.blue,
  gradient1: COLOR.blue,
  gradient2: COLOR.ice,
  flat: COLOR.blue,
  variant: "flat",
};

const defaultButton = {
  variant: "round",
  button_colour: COLOR.blue,
  button_font_colour: COLOR.white,
};

const defaultFont = {
  variant: "Poppins",
  font_colour: COLOR.blue,
};

const useStore = create<AppearanceProps>((set, get) => ({
  background: defaultBackground,
  button: defaultButton,
  font: defaultFont,
  activeColorPickers: [],

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
}));

type backgroundProps = {
  image: string | null;
  grainy: string;
  gradient1: string;
  gradient2: string;
  flat: string;
  variant: string;
  [key: string]: any;
};

type buttonProps = {
  variant: string;
  button_colour: string;
  button_font_colour: string;
  [key: string]: any;
};

type fontProps = {
  variant: string;
  font_colour: string;
  [key: string]: any;
};

type AppearanceProps = {
  background: backgroundProps;
  button: buttonProps;
  font: fontProps;
  activeColorPickers: string[];
  handleBackgroundChange: (key: string, value: string) => void;
  handleButtonChange: (key: string, value: string) => void;
  handleFontChange: (key: string, value: string) => void;
  handleActiveBackground: (key: string) => void;
  handleActiveButton: (key: string) => void;
  handleActiveFont: (key: string) => void;
  handleActiveColorPickers: (key: string) => void;
};

export default useStore;
