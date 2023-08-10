import {
  extendTheme,
  StyleFunctionProps,
  type ThemeConfig,
} from "@chakra-ui/react";
import brand from "./brandColors";

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: { brand },
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
            color: props.colorMode === "dark" ? brand.ajCheez : brand.ajPurple,
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
