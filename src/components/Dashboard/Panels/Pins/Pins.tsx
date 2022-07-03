import React, { useState } from "react";
import Wrapper from "./style.Pins";
import TextEditor from "../../TextEditor/TextEditor";
import Button from "../../../Button/Button";
import Spacer from "../../../Spacer/Spacer";

const getEmptyPin = (id: number) => {
  return {
    id,
    title: "",
    description: "",
    isDeletePrompt: false,
  };
};

const Pins = () => {
  const [pins, setPins] = useState([getEmptyPin(1)]);

  // delete prompt confirmation tracker
  const [deletePrompt, setDeletePrompt] = useState<number[]>([]);

  // expanded pin tracker
  const [expandPins, setExpandPins] = useState<number[]>([]);

  const handleAddPin = () => {
    // simply increment id for new pin
    const currentLastId = pins[pins.length - 1];
    setPins([...pins, getEmptyPin(currentLastId.id + 1)]);
  };

  const handleDeletePin = (id: number) => {
    // not-allowed to delete if there's only one element
    if (pins.length === 1) {
      return;
    }

    // filter out based on selected id
    const filteredPins = pins.filter((pin) => pin.id !== id);
    setPins(filteredPins);

    // delete its id in prompt as well
    const filteredDeletePrompt = deletePrompt.filter((pinId) => pinId !== id);
    setDeletePrompt(filteredDeletePrompt);

    // delete its id in expand as well
    const filteredExpandPins = expandPins.filter((pinId) => pinId !== id);
    setExpandPins(filteredExpandPins);
  };

  const handleDeletePrompt = (id: number) => {
    // not-allowed to prompt if there's only one element
    if (pins.length === 1) {
      return;
    }

    if (deletePrompt.includes(id)) {
      const filteredDeletePrompt = deletePrompt.filter((pinId) => pinId !== id);
      setDeletePrompt(filteredDeletePrompt);

      return;
    }

    setDeletePrompt([...deletePrompt, id]);
  };

  const handleExpandPins = (id: number) => {
    if (expandPins.includes(id)) {
      const filteredExpandPins = expandPins.filter((pinId) => pinId !== id);
      setExpandPins(filteredExpandPins);

      return;
    }

    setExpandPins([...expandPins, id]);
  };

  return (
    <Wrapper>
      {pins.map((pin, index) => (
        <React.Fragment key={pin.id}>
          <TextEditor
            pinId={pin.id}
            pins={pins}
            setPins={setPins}
            handleDeletePin={handleDeletePin}
            handleDeletePrompt={handleDeletePrompt}
            deletePrompt={deletePrompt}
            handleExpandPins={handleExpandPins}
            expandPins={expandPins}
          />
          <Spacer mb={75} />
        </React.Fragment>
      ))}
      <Button variant="solid" align="center" onClick={handleAddPin}>
        ADD NEW PINFO
      </Button>
    </Wrapper>
  );
};

export default Pins;
