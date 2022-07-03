import create from "zustand";
import { COLOR } from "../../../variables";

const defaultValue = {
  image: null,
  grainy: COLOR.blue,
  gradient1: COLOR.blue,
  gradient2: COLOR.white,
  flat: COLOR.blue,
  variant: "flat",
  // button: {
  //   variant: "fill-round", // fillsquare - fillcircular
  //   button_colour: "hex",
  //   font_colour: "hex",
  // },
  // font: {
  //   style: "string",
  // },
};

const useStore = create<AppearanceProps>((set) => ({
  background: defaultValue,
  activeColorPickers: [],

  handleChange: (key, value) => {
    set((state) => {
      const { background } = state;

      background[key] = value;

      return {
        ...state,
        background: { ...background },
      };
    });
  },

  handleActiveVariant: (value) => {
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

type appearanceStateProps = {
  image: string | null;
  grainy: string;
  gradient1: string;
  gradient2: string;
  flat: string;
  variant: string;
  [key: string]: any;
};

type AppearanceProps = {
  background: appearanceStateProps;
  activeColorPickers: string[];
  handleChange: (key: string, value: string) => void;
  handleActiveVariant: (key: string) => void;
  handleActiveColorPickers: (key: string) => void;
};

export default useStore;
