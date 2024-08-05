"use client";

import { CssBaseline, PaletteMode, ThemeOptions } from "@mui/material";
import { ReactNode } from "react";
import colors from "../../scss/_themes-vars.module.scss";

import { ThemeProvider as MUIThemeProvider, StyledEngineProvider, createTheme } from "@mui/material";
import componentStyleOverrides from "./compStyleOverride";
import themePalette from "./palette";
import typography from "./typography";

export interface IColorsOption {
  colors: { readonly [key: string]: string };
  heading: string;
  paper: string;
  backgroundDefault: string;
  background: string;
  darkTextPrimary: string;
  darkTextSecondary: string;
  textDark: string;
  menuSelected: string;
  menuSelectedBack: string;
  divider: string;
  grey500: string;
  mainBackground: string;
  fontFamily: string;
  paletteMode: PaletteMode;
  borderRadius: number;
}

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const color = colors;

  const colorsOption: IColorsOption = {
    colors: color,
    heading: color.grey900,
    paper: color.paper,
    backgroundDefault: color.paper,
    background: color.primaryLight,
    darkTextPrimary: color.grey700,
    darkTextSecondary: color.grey500,
    textDark: color.grey900,
    menuSelected: color.secondaryDark,
    menuSelectedBack: color.secondaryLight,
    divider: color.grey900,
    grey500: color.grey500,
    mainBackground: color.darkPrimaryLight,
    fontFamily: "Roboto",
    paletteMode: "light",
    borderRadius: 17,
  };

  const themeOptions: ThemeOptions = {
    palette: themePalette(colorsOption),
    typography: typography as any,
    components: componentStyleOverrides(colorsOption),
  };

  const themes = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={themes}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
