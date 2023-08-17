import {
  extendTheme,
  StyleFunctionProps,
  type ThemeConfig,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

import brand from "./brandColors";

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: `Comfortaa, sans-serif`,
    body: `Comfortaa, sans-serif`,
  },
  colors: {
    brand,
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode(brand.ajOrangeLvls["900"], brand.ajBlueLvls["100"])(props),
      },
    }),
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: ".25rem",
        _focus: {
          // Hex codes for transparency https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4
          // 99 == 60%
          boxShadow: `0 0 0 3px ${brand.ajPurple}99`,
        },
      },
    },
    Link: {
      baseStyle: (props: StyleFunctionProps) => ({
        color: mode(brand.ajPurple, brand.ajCheez)(props),
        borderRadius: ".25rem",
        _focus: {
          boxShadow: `0 0 0 3px ${brand.ajPurple}99`,
        },
      }),
    },
    Tabs: {
      baseStyle: (props: StyleFunctionProps) => ({
        tab: {
          _selected: {
            color: mode(brand.ajPurple, brand.ajCheez)(props),
          },
          _focus: {
            boxShadow: `0 0 0 3px ${brand.ajPurple}99`,
          },
        },
      }),
    },
  },
});

export default theme;
