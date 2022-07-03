import React from "react";
import Text from "../../../../Text/Text";
import Spacer from "../../../../Spacer/Spacer";
import ColorPicker from "../../../ColorPicker/ColorPicker";
import useStore from "../store.Appearance";

const BackgroundSettings = () => {
  const background = useStore(({ background }) => background);

  const handleChange = useStore(({ handleChange }) => handleChange);

  const handleActiveColorPickers = useStore(
    ({ handleActiveColorPickers }) => handleActiveColorPickers
  );

  const activeColorPickers = useStore(
    ({ activeColorPickers }) => activeColorPickers
  );

  const { variant, gradient1, gradient2, grainy, flat } = background;

  if (variant === "gradient") {
    return (
      <div className="settings">
        <Text>Background color</Text>
        <Spacer mb={18} />
        <ColorPicker
          variant="gradient1"
          color={gradient1}
          activeColorPickers={activeColorPickers}
          handleChange={handleChange}
          handleActiveColorPickers={handleActiveColorPickers}
        />
        <Spacer mb={27} />
        <ColorPicker
          variant="gradient2"
          color={gradient2}
          activeColorPickers={activeColorPickers}
          handleChange={handleChange}
          handleActiveColorPickers={handleActiveColorPickers}
        />
      </div>
    );
  }

  if (variant === "grainy") {
    return (
      <div className="settings">
        <Text>Background color</Text>
        <Spacer mb={18} />
        <ColorPicker
          variant="grainy"
          color={grainy}
          activeColorPickers={activeColorPickers}
          handleChange={handleChange}
          handleActiveColorPickers={handleActiveColorPickers}
        />
      </div>
    );
  }

  if (variant === "image") {
    return (
      <div className="settings">
        <Text>Upload image</Text>
      </div>
    );
  }

  return (
    <div className="settings">
      <Text>Background color</Text>
      <Spacer mb={18} />
      <ColorPicker
        variant="flat"
        color={flat}
        activeColorPickers={activeColorPickers}
        handleChange={handleChange}
        handleActiveColorPickers={handleActiveColorPickers}
      />
    </div>
  );
};

export default BackgroundSettings;
