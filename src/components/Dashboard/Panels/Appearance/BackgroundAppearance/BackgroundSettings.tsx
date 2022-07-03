import React from "react";
import Text from "../../../../Text/Text";
import Spacer from "../../../../Spacer/Spacer";
import ColorPicker from "../../../ColorPicker/ColorPicker";

const BackgroundSettings = (props: Settings) => {
  const {
    setting,
    background,
    handleChange,
    handleActiveColorPickers,
    activeColorPickers,
  } = props;

  if (setting === "gradient") {
    return (
      <div className="settings">
        <Text>Background color</Text>
        <Spacer mb={18} />
        <ColorPicker
          variant="gradient1"
          color={background.gradient1}
          activeColorPickers={activeColorPickers}
          handleChange={handleChange}
          handleActiveColorPickers={handleActiveColorPickers}
        />
        <Spacer mb={27} />
        <ColorPicker
          variant="gradient2"
          color={background.gradient2}
          activeColorPickers={activeColorPickers}
          handleChange={handleChange}
          handleActiveColorPickers={handleActiveColorPickers}
        />
      </div>
    );
  }

  if (setting === "grainy") {
    return (
      <div className="settings">
        <Text>Background color</Text>
        <Spacer mb={18} />
        <ColorPicker
          variant="grainy"
          color={background.grainy}
          activeColorPickers={activeColorPickers}
          handleChange={handleChange}
          handleActiveColorPickers={handleActiveColorPickers}
        />
      </div>
    );
  }

  if (setting === "image") {
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
        color={background.flat}
        activeColorPickers={activeColorPickers}
        handleChange={handleChange}
        handleActiveColorPickers={handleActiveColorPickers}
      />
    </div>
  );
};

type Settings = {
  handleChange: (key: string, value: string) => void;
  handleActiveColorPickers: (value: string) => void;
  activeColorPickers: string[];
  setting: string;
  background: {
    image?: string | null;
    grainy: string;
    gradient1: string;
    gradient2: string;
    flat: string;
    variant: string;
  };
};

export default BackgroundSettings;
