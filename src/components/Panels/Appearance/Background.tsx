import React from "react";
import { BackgroundWrapper } from "./style";
import Card from "../../Card/Card";
import Text from "../../Text/Text";
import { TbPhoto } from "react-icons/tb";
import useAppearanceStore from "../../../stores/useAppearanceStore";
import Spacer from "../../Spacer/Spacer";
import ColorPicker from "../../ColorPicker/ColorPicker";

const Background = () => {
  const background = useAppearanceStore(({ background }) => background);

  const handleBackgroundChange = useAppearanceStore(
    ({ handleBackgroundChange }) => handleBackgroundChange
  );

  const activeColorPickers = useAppearanceStore(
    ({ activeColorPickers }) => activeColorPickers
  );

  const handleActiveColorPickers = useAppearanceStore(
    ({ handleActiveColorPickers }) => handleActiveColorPickers
  );

  const { variant, gradient1, gradient2, grainy, flat } = background;

  const handleActiveBackground = useAppearanceStore(
    ({ handleActiveBackground }) => handleActiveBackground
  );

  const getActiveClassName = (value: string) => {
    if (value === background.variant) {
      return `content content--${value} content content--active`;
    }

    return `content content--${value}`;
  };

  return (
    <BackgroundWrapper>
      <Text>Background</Text>

      <Spacer length={18} />

      <Card>
        <ul className="option-list">
          <li className="option-list__each">
            <div
              className={getActiveClassName("flat")}
              onClick={() => handleActiveBackground("flat")}
            ></div>

            <Text align="center">Flat</Text>
          </li>
          <li className="option-list__each">
            <div
              className={getActiveClassName("gradient")}
              onClick={() => handleActiveBackground("gradient")}
            ></div>

            <Text align="center">Gradient</Text>
          </li>
          <li className="option-list__each">
            <div
              className={getActiveClassName("grainy")}
              onClick={() => handleActiveBackground("grainy")}
            ></div>

            <Text align="center">Grainy</Text>
          </li>
          <li className="option-list__each">
            <div
              className={getActiveClassName("image")}
              onClick={() => handleActiveBackground("image")}
            >
              <TbPhoto />
            </div>

            <Text align="center">Image</Text>
          </li>
        </ul>
        <div className="settings">
          {variant === "flat" && (
            <>
              <Text>Flat color</Text>

              <Spacer length={18} />

              <ColorPicker
                variant="flat"
                color={flat}
                activeColorPickers={activeColorPickers}
                handleChange={handleBackgroundChange}
                handleActiveColorPickers={handleActiveColorPickers}
              />
            </>
          )}

          {variant === "gradient" && (
            <>
              <Text>Gradient colors</Text>

              <Spacer length={18} />

              <ColorPicker
                variant="gradient1"
                color={gradient1}
                activeColorPickers={activeColorPickers}
                handleChange={handleBackgroundChange}
                handleActiveColorPickers={handleActiveColorPickers}
              />

              <Spacer length={27} />

              <ColorPicker
                variant="gradient2"
                color={gradient2}
                activeColorPickers={activeColorPickers}
                handleChange={handleBackgroundChange}
                handleActiveColorPickers={handleActiveColorPickers}
              />
            </>
          )}

          {variant === "grainy" && (
            <>
              <Text>Grainy color</Text>

              <Spacer length={18} />

              <ColorPicker
                variant="grainy"
                color={grainy}
                activeColorPickers={activeColorPickers}
                handleChange={handleBackgroundChange}
                handleActiveColorPickers={handleActiveColorPickers}
              />
            </>
          )}

          {variant === "image" && (
            <>
              <Text>Upload image</Text>
            </>
          )}
        </div>
      </Card>
    </BackgroundWrapper>
  );
};

export default Background;
