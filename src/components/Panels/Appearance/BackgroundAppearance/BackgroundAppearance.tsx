import React from "react";
import Wrapper from "./style.BackgroundAppearance";
import Text from "../../../Text/Text";
import { TbPhoto } from "react-icons/tb";
import useStore from "../store.Appearance";
import Spacer from "../../../Spacer/Spacer";
import ColorPicker from "../../../ColorPicker/ColorPicker";

const BackgroundAppearance = () => {
  const background = useStore(({ background }) => background);

  const handleBackgroundChange = useStore(
    ({ handleBackgroundChange }) => handleBackgroundChange
  );

  const activeColorPickers = useStore(
    ({ activeColorPickers }) => activeColorPickers
  );

  const handleActiveColorPickers = useStore(
    ({ handleActiveColorPickers }) => handleActiveColorPickers
  );

  const { variant, gradient1, gradient2, grainy, flat } = background;

  const handleActiveBackground = useStore(
    ({ handleActiveBackground }) => handleActiveBackground
  );

  const getActiveClassName = (value: string) => {
    if (value === background.variant) {
      return `content content--${value} content content--active`;
    }

    return `content content--${value}`;
  };

  return (
    <Wrapper>
      <Text>Background</Text>
      <div className="card">
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
              <Spacer mb={18} />
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
              <Spacer mb={18} />
              <ColorPicker
                variant="gradient1"
                color={gradient1}
                activeColorPickers={activeColorPickers}
                handleChange={handleBackgroundChange}
                handleActiveColorPickers={handleActiveColorPickers}
              />
              <Spacer mb={27} />
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
              <Spacer mb={18} />
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
      </div>
    </Wrapper>
  );
};

export default BackgroundAppearance;
