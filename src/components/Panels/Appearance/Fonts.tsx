import React from "react";
import { FontsWrapper } from "./style";
import Card from "../../Card/Card";
import Text from "../../Text/Text";
import ColorPicker from "../../ColorPicker/ColorPicker";
import Spacer from "../../Spacer/Spacer";
import useAppearanceStore from "../../../stores/useAppearanceStore";
import fontOptions from "../../../static/fontOptions";

const FontsAppearance = () => {
  const font = useAppearanceStore(({ font }) => font);

  const { font_colour } = font;

  const activeColorPickers = useAppearanceStore(
    ({ activeColorPickers }) => activeColorPickers
  );

  const handleActiveFont = useAppearanceStore(
    ({ handleActiveFont }) => handleActiveFont
  );

  const handleActiveColorPickers = useAppearanceStore(
    ({ handleActiveColorPickers }) => handleActiveColorPickers
  );

  const handleFontChange = useAppearanceStore(
    ({ handleFontChange }) => handleFontChange
  );

  const getActiveClassName = (value: string) => {
    if (value === font.variant) {
      return `option-list__each option-list__each--active`;
    }

    return `option-list__each`;
  };

  return (
    <FontsWrapper>
      <Text>Fonts</Text>

      <Spacer length={18} />

      <Card>
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

          <Spacer length={18} />

          <ColorPicker
            variant="font_colour"
            color={font_colour}
            activeColorPickers={activeColorPickers}
            handleChange={handleFontChange}
            handleActiveColorPickers={handleActiveColorPickers}
          />
        </div>
      </Card>
    </FontsWrapper>
  );
};

export default FontsAppearance;
