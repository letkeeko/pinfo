import React from "react";
import ColorPickerWrapper from "./style";
import { HexColorPicker, HexColorInput } from "react-colorful";

type ColorPickerProps = {
  handleChange: (key: string, value: string) => void;
  handleActiveColorPickers: (value: string) => void;
  activeColorPickers: string[];
  color: string;
  variant: string;
};

const ColorPicker = (props: ColorPickerProps) => {
  const {
    color,
    variant,
    activeColorPickers,
    handleChange,
    handleActiveColorPickers,
  } = props;

  return (
    <ColorPickerWrapper>
      {activeColorPickers.includes(variant) && (
        <div className="color-picker-wrap">
          <HexColorPicker
            color={color}
            onChange={(returnedColor) => {
              handleChange(variant, returnedColor);
            }}
          />
        </div>
      )}

      <div className="swatch-input">
        <div
          className="swatch-input__preview-box"
          role="button"
          onClick={() => handleActiveColorPickers(variant)}
          style={{ backgroundColor: color }}
        ></div>
        <HexColorInput
          color={color}
          onChange={(returnedColor) => {
            handleChange(variant, returnedColor);
          }}
        />
      </div>

      {activeColorPickers.includes(variant) && (
        <div
          className="blank-overlay"
          onClick={() => handleActiveColorPickers(variant)}
        >
          {/* this close the current color picker when click anywhere */}
        </div>
      )}
    </ColorPickerWrapper>
  );
};

export default ColorPicker;
