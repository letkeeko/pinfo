import React from "react";
import Wrapper from "./FontsAppearance.style";
import Text from "../../../Text/Text";
import ColorPicker from "../../../ColorPicker/ColorPicker";
import Spacer from "../../../Spacer/Spacer";
import useStore from "../Appearance.store";

const FontsAppearance = () => {
  const font = useStore(({ font }) => font);

  const { font_colour } = font;

  const activeColorPickers = useStore(
    ({ activeColorPickers }) => activeColorPickers
  );

  const handleActiveFont = useStore(({ handleActiveFont }) => handleActiveFont);

  const handleActiveColorPickers = useStore(
    ({ handleActiveColorPickers }) => handleActiveColorPickers
  );

  const handleFontChange = useStore(({ handleFontChange }) => handleFontChange);

  const getActiveClassName = (value: string) => {
    if (value === font.variant) {
      return `option-list__each option-list__each--active`;
    }

    return `option-list__each`;
  };

  return (
    <Wrapper>
      <Text>Fonts</Text>
      <div className="card">
        <div className="option-list">
          {fontOptions.map((font) => (
            <div className={getActiveClassName(font)} key={font}>
              <div className="content" onClick={() => handleActiveFont(font)}>
                <span
                  className="letter"
                  style={{ fontFamily: `${font}, sans-serif` }}
                >
                  Aa
                </span>
              </div>
              <span className="label">{font}</span>
            </div>
          ))}
        </div>

        <div className="settings">
          <Text>Font color</Text>

          <Spacer mb={18} />

          <ColorPicker
            variant="font_colour"
            color={font_colour}
            activeColorPickers={activeColorPickers}
            handleChange={handleFontChange}
            handleActiveColorPickers={handleActiveColorPickers}
          />
        </div>
      </div>
    </Wrapper>
  );
};

const fontOptions = [
  "Barlow",
  "Cairo",
  "Georama",
  "Inter",
  "Montserrat",
  "Mukta",
  "Nunito",
  "Oswald",
  "Poppins",
  "Quicksand",
  "Raleway",
  "Roboto",
  "Rubik",
  "Ubuntu",
  "Urbanist",
];

export default FontsAppearance;
