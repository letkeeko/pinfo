import React from "react";

type backgroundProps = {
  image: string | null;
  grainy: string;
  gradient1: string;
  gradient2: string;
  flat: string;
  variant: string;
  [key: string]: any;
};

type buttonProps = {
  variant: string;
  button_colour: string;
  button_font_colour: string;
  [key: string]: any;
};

type fontProps = {
  variant: string;
  font_colour: string;
  [key: string]: any;
};

type detailsProps = {
  profile_title: string;
  profile_category: string;
  [key: string]: any;
};

export type AppearanceStoreProps = {
  details: detailsProps;
  background: backgroundProps;
  button: buttonProps;
  font: fontProps;
  activeColorPickers: string[];
  handleDetailsChange: (key: string, value: string) => void;
  handleBackgroundChange: (key: string, value: string) => void;
  handleButtonChange: (key: string, value: string) => void;
  handleFontChange: (key: string, value: string) => void;
  handleActiveBackground: (key: string) => void;
  handleActiveButton: (key: string) => void;
  handleActiveFont: (key: string) => void;
  handleActiveColorPickers: (key: string) => void;
};
