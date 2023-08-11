import {
  // theme as baseTheme,
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
    // primaryFontColor: {
    //   lightMode: brand.ajBlueLvls["200"],
    //   darkMode: brand.ajPurpleLvls["200"],
    // },
    // secondaryFontColor: {
    //   lightMode: baseTheme.colors.gray["600"],
    //   darkMode: baseTheme.colors.gray["400"],
    // },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "4px",
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
        borderRadius: "4px",
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
  styles: {
    global: {
      "*": {
        borderRadius: "1rem",
      },
    },
  },
  // global: (props: StyleFunctionProps) => ({
  //   body: {
  //     color: mode(
  //       theme.colors.primaryFontColor.lightMode,
  //       theme.colors.primaryFontColor.darkMode
  //     )(props),
  //   },
  // }),
});

export default theme;
