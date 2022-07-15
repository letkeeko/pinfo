import React from "react";
import TextEditor from "../../TextEditor/QuillWrapper";
import Button from "../../Button/Button";
import Spacer from "../../Spacer/Spacer";
import usePinsStore from "../../../stores/usePinsStore";

const Pins = () => {
  const pins = usePinsStore(({ pins }) => pins);

  const handleChangePin = usePinsStore(
    ({ handleChangePin }) => handleChangePin
  );

  // delete prompt confirmation tracker
  const deletePrompt = usePinsStore(({ deletePrompt }) => deletePrompt);

  // expanded pin tracker
  const expandPins = usePinsStore(({ expandPins }) => expandPins);

  const handleAddPin = usePinsStore(({ handleAddPin }) => handleAddPin);

  const handleDeletePin = usePinsStore(
    ({ handleDeletePin }) => handleDeletePin
  );

  const handleDeletePrompt = usePinsStore(
    ({ handleDeletePrompt }) => handleDeletePrompt
  );

  const handleExpandPins = usePinsStore(
    ({ handleExpandPins }) => handleExpandPins
  );

  return (
    <>
      {pins.map((pin) => (
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
          <Spacer length={75} />
        </React.Fragment>
      ))}
      <Button align="center" onClick={handleAddPin}>
        Add New Pinfo
      </Button>
    </>
  );
};

export default Pins;
