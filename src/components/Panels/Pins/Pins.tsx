import React, { useState } from "react";
import Wrapper from "./Pins.style";
import TextEditor from "../../TextEditor/TextEditor";
import Button from "../../Button/Button";
import Spacer from "../../Spacer/Spacer";
import useStore from "./Pins.store";

const Pins = () => {
  const pins = useStore(({ pins }) => pins);

  const handleChangePin = useStore(({ handleChangePin }) => handleChangePin);

  // delete prompt confirmation tracker
  const deletePrompt = useStore(({ deletePrompt }) => deletePrompt);

  // expanded pin tracker
  const expandPins = useStore(({ expandPins }) => expandPins);

  const handleAddPin = useStore(({ handleAddPin }) => handleAddPin);

  const handleDeletePin = useStore(({ handleDeletePin }) => handleDeletePin);

  const handleDeletePrompt = useStore(
    ({ handleDeletePrompt }) => handleDeletePrompt
  );

  const handleExpandPins = useStore(({ handleExpandPins }) => handleExpandPins);

  return (
    <Wrapper>
      {pins.map((pin, index) => (
        <React.Fragment key={pin.id}>
          <TextEditor
            pinId={pin.id}
            pins={pins}
            setPins={handleChangePin}
            handleDeletePin={handleDeletePin}
            handleDeletePrompt={handleDeletePrompt}
            isDeletePrompted={deletePrompt.includes(pin.id)}
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
