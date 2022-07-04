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

const useStore = create<AppearanceProps>((set) => ({
  background: defaultBackground,
  button: defaultButton,
  font: defaultFont,
  activeColorPickers: [],

  handleBackgroundChange: (key, value) => {
    set((state) => {
      const { background } = state;

      background[key] = value;

      return {
        ...state,
        background: { ...background },
      };
    });
  },

  handleButtonChange: (key, value) => {
    set((state) => {
      const { button } = state;

      button[key] = value;

      return {
        ...state,
        button: { ...button },
      };
    });
  },

  handleFontChange: (key, value) => {
    set((state) => {
      const { font } = state;

      font[key] = value;

      return {
        ...state,
        font: { ...font },
      };
    });
  },

  handleActiveBackground: (value) => {
    set((state) => {
      const { background } = state;

      background["variant"] = value;

      return {
        ...state,
        background: { ...background },

        // resets opened color picker when changing variant style
        activeColorPickers: [],
      };
    });
  },

  handleActiveButton: (value) => {
    set((state) => {
      const { button } = state;

      button["variant"] = value;

      return {
        ...state,
        button: { ...button },

        // resets opened color picker when changing variant style
        activeColorPickers: [],
      };
    });
  },

  handleActiveFont: (value) => {
    set((state) => {
      const { font } = state;

      font["variant"] = value;

      return {
        ...state,
        font: { ...font },

        // resets opened color picker when changing variant style
        activeColorPickers: [],
      };
    });
  },

  handleActiveColorPickers: (value) => {
    set((state) => {
      const { activeColorPickers } = state;

      if (activeColorPickers.includes(value)) {
        const filteredActiveColorPickers = activeColorPickers.filter(
          (current) => current !== value
        );

        return {
          ...state,
          activeColorPickers: filteredActiveColorPickers,
        };
      }

      return {
        ...state,
        activeColorPickers: [...activeColorPickers, value],
      };
    });
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
