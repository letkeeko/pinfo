import create from "zustand";

const getEmptyPin = (id: number) => {
  return {
    id,
    title: "",
    description: "",
    isDeletePrompt: false,
  };
};

const useStore = create<PinsProps>((set) => ({
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

      // not-allowed to delete if there's only one element
      if (pins.length === 1) {
        return { ...state };
      }

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
    set((state) => {
      const { pins, deletePrompt } = state;

      // not-allowed to prompt if there's only one element
      if (pins.length === 1) {
        return { ...state };
      }

      if (deletePrompt.includes(id)) {
        const filteredDeletePrompt = deletePrompt.filter(
          (pinId) => pinId !== id
        );

        return {
          ...state,
          deletePrompt: [...filteredDeletePrompt],
        };
      }

      return {
        ...state,
        deletePrompt: [...deletePrompt, id],
      };
    });
  },

  handleExpandPins: (id) => {
    set((state) => {
      const { expandPins } = state;

      if (expandPins.includes(id)) {
        const filteredExpandPins = expandPins.filter((pinId) => pinId !== id);

        return {
          ...state,
          expandPins: filteredExpandPins,
        };
      }

      return {
        ...state,
        expandPins: [...expandPins, id],
      };
    });
  },
}));

type pinsArrObj = {
  id: number;
  title: string;
  description: string;
}[];

type PinsProps = {
  pins: pinsArrObj;
  deletePrompt: number[];
  expandPins: number[];
  handleChangePin: (pins: pinsArrObj) => void;
  handleAddPin: () => void;
  handleDeletePin: (id: number) => void;
  handleDeletePrompt: (id: number) => void;
  handleExpandPins: (id: number) => void;
};

export default useStore;
