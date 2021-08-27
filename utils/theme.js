import { darkTheme, LIGHT, lightTheme } from "../constants/theme";

export const getThemeName = (theme) =>
  theme === LIGHT ? lightTheme : darkTheme;
