import React from "react";
import Wrapper from "./style.ButtonsAppearance";
import Text from "../../../Text/Text";
import ColorPicker from "../../../ColorPicker/ColorPicker";
import Spacer from "../../../Spacer/Spacer";
import useStore from "../store.Appearance";

const BackgroundAppearance = () => {
  const button = useStore(({ button }) => button);

  const { button_colour, button_font_colour } = button;

  const activeColorPickers = useStore(
    ({ activeColorPickers }) => activeColorPickers
  );

  const handleActiveButton = useStore(
    ({ handleActiveButton }) => handleActiveButton
  );

  const handleActiveColorPickers = useStore(
    ({ handleActiveColorPickers }) => handleActiveColorPickers
  );

  const handleButtonChange = useStore(
    ({ handleButtonChange }) => handleButtonChange
  );

  const getActiveClassName = (value: string) => {
    if (value === button.variant) {
      return `content content--${value} content content--active`;
    }

    return `content content--${value}`;
  };

  return (
    <Wrapper>
      <Text>Buttons</Text>
      <div className="card">
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

          <Spacer mb={18} />

          <ColorPicker
            variant="button_colour"
            color={button_colour}
            activeColorPickers={activeColorPickers}
            handleChange={handleButtonChange}
            handleActiveColorPickers={handleActiveColorPickers}
          />

          <Spacer mb={36} />

          <Text>Button font color</Text>

          <Spacer mb={18} />

          <ColorPicker
            variant="button_font_colour"
            color={button_font_colour}
            activeColorPickers={activeColorPickers}
            handleChange={handleButtonChange}
            handleActiveColorPickers={handleActiveColorPickers}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default BackgroundAppearance;
