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
    set(() => {
      return {
        pins,
      };
    });
  },

  handleAddPin: () => {
    const pins = get().pins;

    set(() => {
      // simply increment id for new pin
      const currentLastId = pins[pins.length - 1];

      return {
        pins: [...pins, getEmptyPin(currentLastId.id + 1)],
      };
    });
  },

  handleDeletePin: (id) => {
    const pins = get().pins;
    const deletePrompt = get().deletePrompt;
    const expandPins = get().expandPins;

    // filter out based on selected id
    const filteredPins = pins.filter((pin) => pin.id !== id);

    // delete its id in prompt as well
    const filteredDeletePrompt = deletePrompt.filter((pinId) => pinId !== id);

    // delete its id in expand as well
    const filteredExpandPins = expandPins.filter((pinId) => pinId !== id);

    set(() => ({
      pins: filteredPins,
      deletePrompt: filteredDeletePrompt,
      expandPins: filteredExpandPins,
    }));
  },

  handleDeletePrompt: (id) => {
    const deletePrompt = get().deletePrompt;

    if (deletePrompt.includes(id)) {
      const filteredDeletePrompt = deletePrompt.filter((pinId) => pinId !== id);

      set(() => ({
        deletePrompt: [...filteredDeletePrompt],
      }));

      return;
    }

    set(() => ({
      deletePrompt: [...deletePrompt, id],
    }));
  },

  handleExpandPins: (id) => {
    const expandPins = get().expandPins;

    if (expandPins.includes(id)) {
      const filteredExpandPins = expandPins.filter((pinId) => pinId !== id);

      set(() => ({
        expandPins: filteredExpandPins,
      }));

      return;
    }

    set(() => ({
      expandPins: [...expandPins, id],
    }));
  },
}));

export default usePinsStore;
