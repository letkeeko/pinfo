import React from "react";
import { ButtonsWrapper } from "./style";
import Card from "../../Card/Card";
import Text from "../../Text/Text";
import ColorPicker from "../../ColorPicker/ColorPicker";
import Spacer from "../../Spacer/Spacer";
import useAppearanceStore from "../../../stores/useAppearanceStore";

const BackgroundAppearance = () => {
  const button = useAppearanceStore(({ button }) => button);

  const { button_colour, button_font_colour } = button;

  const activeColorPickers = useAppearanceStore(
    ({ activeColorPickers }) => activeColorPickers
  );

  const handleActiveButton = useAppearanceStore(
    ({ handleActiveButton }) => handleActiveButton
  );

  const handleActiveColorPickers = useAppearanceStore(
    ({ handleActiveColorPickers }) => handleActiveColorPickers
  );

  const handleButtonChange = useAppearanceStore(
    ({ handleButtonChange }) => handleButtonChange
  );

  const getActiveClassName = (value: string) => {
    if (value === button.variant) {
      return `content content--${value} content content--active`;
    }

    return `content content--${value}`;
  };

  return (
    <ButtonsWrapper>
      <Text>Buttons</Text>

      <Spacer length={18} />

      <Card>
        <ul className="option-list">
          <li className="option-list__each">
            <div
              className={getActiveClassName("round")}
              onClick={() => handleActiveButton("round")}
            ></div>
          </li>
          <li className="option-list__each">
            <div
              className={getActiveClassName("box")}
              onClick={() => handleActiveButton("box")}
            ></div>
          </li>
          <li className="option-list__each">
            <div
              className={getActiveClassName("circular")}
              onClick={() => handleActiveButton("circular")}
            ></div>
          </li>
        </ul>

        <div className="settings">
          <Text>Button color</Text>

          <Spacer length={18} />

          <ColorPicker
            variant="button_colour"
            color={button_colour}
            activeColorPickers={activeColorPickers}
            handleChange={handleButtonChange}
            handleActiveColorPickers={handleActiveColorPickers}
          />

          <Spacer length={36} />

          <Text>Button font color</Text>

          <Spacer length={18} />

          <ColorPicker
            variant="button_font_colour"
            color={button_font_colour}
            activeColorPickers={activeColorPickers}
            handleChange={handleButtonChange}
            handleActiveColorPickers={handleActiveColorPickers}
          />
        </div>
      </Card>
    </ButtonsWrapper>
  );
};

export default BackgroundAppearance;
