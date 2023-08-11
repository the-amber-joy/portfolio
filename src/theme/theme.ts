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
  // layerStyles: {
  // base: {
  // bg: "gray.50",
  // border: "2px solid",
  // borderColor: "gray.500",
  // color: brand.ajPurpleLvls["200"],
  // },
  // selected: {
  //   bg: "teal.500",
  //   color: "teal.700",
  //   borderColor: "orange.500",
  // },
  // },
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
        _focus: {
          // Hex codes for transparency https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4
          // 99 == 60%
          boxShadow: `0 0 0 3px ${brand.ajPurple}99`,
        },
      },
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
