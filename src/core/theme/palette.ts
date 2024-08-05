import { PaletteOptions } from "@mui/material";
import { IColorsOption } from ".";

export default function themePalette(theme: IColorsOption): PaletteOptions {
  return {
    common: {
      black: theme.colors?.darkPaper,
    },
    primary: {
      light: theme.colors?.primaryLight,
      main: theme.colors?.primaryMain,
      dark: theme.colors?.primaryDark,
      200: theme.colors?.primary200,
      800: theme.colors?.primary800,
    },
    secondary: {
      light: theme.colors?.secondaryLight,
      main: theme.colors?.secondaryMain,
      dark: theme.colors?.secondaryDark,
      200: theme.colors?.secondary200,
      800: theme.colors?.secondary800,
    },
    error: {
      light: theme.colors?.errorLight,
      main: theme.colors?.errorMain,
      dark: theme.colors?.errorDark,
      50: theme.paletteMode === "dark" ? theme.colors?.errorDark50 : theme.colors?.errorMain50,
      100: theme.paletteMode === "dark" ? theme.colors?.errorDark100 : theme.colors?.errorMain100,
      200: theme.paletteMode === "dark" ? theme.colors?.errorDark200 : theme.colors?.errorMain200,
      300: theme.paletteMode === "dark" ? theme.colors?.errorDark300 : theme.colors?.errorMain300,
      400: theme.paletteMode === "dark" ? theme.colors?.errorDark400 : theme.colors?.errorMain400,
      500: theme.paletteMode === "dark" ? theme.colors?.errorDark500 : theme.colors?.errorMain500,
      600: theme.paletteMode === "dark" ? theme.colors?.errorDark600 : theme.colors?.errorMain600,
      700: theme.paletteMode === "dark" ? theme.colors?.errorDark700 : theme.colors?.errorMain700,
      800: theme.paletteMode === "dark" ? theme.colors?.errorDark800 : theme.colors?.errorMain800,
      900: theme.paletteMode === "dark" ? theme.colors?.errorDark900 : theme.colors?.errorMain900,
    },
    info: {
      light: theme.colors?.orangeLight,
      main: theme.colors?.orangeMain,
      dark: theme.colors?.orangeDark,
    },
    warning: {
      light: theme.colors?.warningLight,
      main: theme.colors?.warningMain,
      dark: theme.colors?.warningDark,
    },
    success: {
      light: theme.colors?.successLight,
      200: theme.colors?.success200,
      main: theme.colors?.successMain,
      dark: theme.colors?.successDark,
    },
    grey: {
      50: theme.colors?.grey50,
      100: theme.colors?.grey100,
      500: theme.darkTextSecondary,
      600: theme.heading,
      700: theme.darkTextPrimary,
      900: theme.textDark,
    },
    text: {
      primary: theme.darkTextPrimary,
      secondary: theme.darkTextSecondary,
      disabled: theme.colors?.grey500,
    },
    background: {
      paper: theme.paper,
      default: theme.paper,
    },
    mode: theme.paletteMode,
  };
}
