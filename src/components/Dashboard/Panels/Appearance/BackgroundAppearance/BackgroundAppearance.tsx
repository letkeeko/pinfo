import React from "react";
import Wrapper from "./style.BackgroundAppearance";
import Text from "../../../../Text/Text";
import { TbPhoto } from "react-icons/tb";
import BackgroundSettings from "./BackgroundSettings";
import useStore from "../store.Appearance";

const BackgroundAppearance = () => {
  const handleActiveVariant = useStore(
    ({ handleActiveVariant }) => handleActiveVariant
  );

  const background = useStore(({ background }) => background);

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
              onClick={() => handleActiveVariant("flat")}
            ></div>{" "}
            <Text align="center">Flat</Text>
          </li>
          <li className="option-list__each">
            <div
              className={getActiveClassName("gradient")}
              onClick={() => handleActiveVariant("gradient")}
            ></div>{" "}
            <Text align="center">Gradient</Text>
          </li>
          <li className="option-list__each">
            <div
              className={getActiveClassName("grainy")}
              onClick={() => handleActiveVariant("grainy")}
            ></div>{" "}
            <Text align="center">Grainy</Text>
          </li>
          <li className="option-list__each">
            <div
              className={getActiveClassName("image")}
              onClick={() => handleActiveVariant("image")}
            >
              <TbPhoto />
            </div>{" "}
            <Text align="center">Image</Text>
          </li>
        </ul>

        <BackgroundSettings />
      </div>
    </Wrapper>
  );
};

export default BackgroundAppearance;
