import React, { useState } from "react";
import Wrapper from "./style.Appearance";
import { COLOR } from "../../../variables";
import BackgroundAppearance from "./BackgroundAppearance/BackgroundAppearance";

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

const Appearance = () => {
  const [background, setBackground] =
    useState<appearanceStateProps>(defaultValue);

  // active interactive pallette tracker
  const [activeColorPickers, setActiveColorPickers] = useState<string[]>([]);

  const handleChange = (key: string, value: string) => {
    background[key] = value;
    setBackground({ ...background });
  };

  const handleActiveVariant = (value: string) => {
    background["variant"] = value;
    setBackground({ ...background });
    setActiveColorPickers([]);
  };

  const handleActiveColorPickers = (value: string) => {
    if (activeColorPickers.includes(value)) {
      const filteredExpandPins = activeColorPickers.filter(
        (current) => current !== value
      );
      setActiveColorPickers(filteredExpandPins);

      return;
    }

    setActiveColorPickers([...activeColorPickers, value]);
  };

  return (
    <Wrapper>
      <BackgroundAppearance
        background={background}
        activeColorPickers={activeColorPickers}
        handleChange={handleChange}
        handleActiveVariant={handleActiveVariant}
        handleActiveColorPickers={handleActiveColorPickers}
      />
    </Wrapper>
  );
};

type appearanceStateProps = {
  image?: string | null;
  grainy: string;
  gradient1: string;
  gradient2: string;
  flat: string;
  variant: string;
  [key: string]: any;
};

export default Appearance;
