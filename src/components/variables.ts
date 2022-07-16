export const COLOR = {
  black: "#2a3c4f", //rgb(42, 60, 79)
  blue: "#095693", //rgb(9, 86, 147)
  ice: "#EFF1F9",
  purple: "#6f40b7",
  white: "#ffffff",
  yellow: "#FFBD11",
  green: "#006E7F",
  red: "#EE2B47",
  getBlue: (alpha: number) => `rgba(9, 86, 147, ${alpha})`,
  getBlack: (alpha: number) => `rgba(42, 60, 79, ${alpha})`,
  getWhite: (alpha: number) => `rgba(255, 255, 255, ${alpha})`,
};

export const SCREEN = {
  tablet: "(min-width: 650px)", // portrait tablet
  laptop: "(min-width: 960px)", // landscape tablet to small laptop
  desktop: "(min-width: 1520px)", // large laptop to desktop
  cursor: "not all and (pointer: coarse)", // non touchscreen device
};
