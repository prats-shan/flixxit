import { createTheme } from "@mui/material/styles";
import { colors } from "@mui/material";

export const themeModes = {
  dark: "dark",
  light: "light"
};

const themeConfigs = {
  custom: ({ mode }) => {
    const customPalette = mode === themeModes.dark ? {
      primary: {
        main: "#2986cc",
        contrastText: "#ffffff"
      },
      secondary: {
        main: "#2986cc",
        contrastText: "#23F4F0"
      },
      background: {
        default: "#ff7700",
        paper: "#f88f33"
      }
    } : {
      primary: {
        main: "#2986cc"
      },
      secondary: {
        main: "#2986cc"
      },
      background: {
        default: colors.grey["100"],
      }
    };

    return createTheme({
      palette: {
        mode,
        ...customPalette
      },
      components: {
        MuiButton: {
          defaultProps: { disableElevation: true }
        }
      }
    });
  }
};

export default themeConfigs;