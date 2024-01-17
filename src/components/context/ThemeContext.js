import React from "react";
import { ThemeProvider as MUIThemeProvider } from "@material-ui/styles";
//
import * as colors from "@material-ui/core/colors/";
import { createTheme, useMediaQuery } from "@material-ui/core";

const context = React.createContext();

export function ThemeProvider({ children }) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)", {
    noSsr: true,
  });
  const primaryColor = colors["lightBlue"];
  const secondaryColor = colors["yellow"];
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            light: primaryColor[300],
            main: primaryColor[400],
            dark: primaryColor[700],
          },
          secondary: {
            light: secondaryColor[300],
            main: secondaryColor[500],
            dark: secondaryColor[700],
          },
          type: prefersDarkMode ? "dark" : "light",
        },
        typography: {
          useNextVariants: true,
        },
      }),
    [prefersDarkMode]
  );

  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
}

export function useThemes() {
  return React.useContext(context);
}
