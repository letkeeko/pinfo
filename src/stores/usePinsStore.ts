import create from "zustand";
import { PinsStoreProps } from "./usePinsStore.types";

const getEmptyPin = (id: number) => {
  return {
    id,
    title: "",
    description: "",
    isDeletePrompt: false,
  };
};

const usePinsStore = create<PinsStoreProps>((set, get) => ({
  pins: [getEmptyPin(1)],

  deletePrompt: [],

  expandPins: [],

  handleChangePin: (pins) => {
    set((state) => {
      return {
        ...state,
        pins,
      };
    });
  },

  handleAddPin: () => {
    set((state) => {
      const { pins } = state;

      // simply increment id for new pin
      const currentLastId = pins[pins.length - 1];

      return {
        ...state,
        pins: [...pins, getEmptyPin(currentLastId.id + 1)],
      };
    });
  },

  handleDeletePin: (id) => {
    set((state) => {
      const { pins, deletePrompt, expandPins } = state;

      // filter out based on selected id
      const filteredPins = pins.filter((pin) => pin.id !== id);

      // delete its id in prompt as well
      const filteredDeletePrompt = deletePrompt.filter((pinId) => pinId !== id);

      // delete its id in expand as well
      const filteredExpandPins = expandPins.filter((pinId) => pinId !== id);

      return {
        ...state,
        pins: filteredPins,
        deletePrompt: filteredDeletePrompt,
        expandPins: filteredExpandPins,
      };
    });
  },

  handleDeletePrompt: (id) => {
    const deletePrompt = get().deletePrompt;

    if (deletePrompt.includes(id)) {
      const filteredDeletePrompt = deletePrompt.filter((pinId) => pinId !== id);

      set((state) => ({
        ...state,
        deletePrompt: [...filteredDeletePrompt],
      }));

      return;
    }

    set((state) => ({
      ...state,
      deletePrompt: [...deletePrompt, id],
    }));
  },

  handleExpandPins: (id) => {
    const expandPins = get().expandPins;

    if (expandPins.includes(id)) {
      const filteredExpandPins = expandPins.filter((pinId) => pinId !== id);

      set((state) => ({
        ...state,
        expandPins: filteredExpandPins,
      }));

      return;
    }

    set((state) => ({
      ...state,
      expandPins: [...expandPins, id],
    }));
  },
}));

export default usePinsStore;
