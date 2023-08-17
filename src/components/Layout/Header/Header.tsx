import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Heading,
  IconButton,
  IconButtonProps,
  useColorMode,
  useColorModeValue,
  useTheme,
} from "@chakra-ui/react";
import clsx from "clsx";

import styles from "./Header.module.css";

type HeaderProps = Omit<IconButtonProps, "aria-label">;

const Header = (props: HeaderProps) => {
  const { colorMode } = useColorMode();
  const { colors } = useTheme();

  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon);

  return (
    <Box
      position="fixed"
      top={0}
      w="100%"
      px={4}
      bgColor={
        colorMode === "dark"
          ? colors.brand.ajBlueLvls["100"]
          : colors.brand.ajOrangeLvls["900"]
      }
      className={clsx(styles.headerContainer, {
        [styles.headerDark]: colorMode === "dark",
        [styles.headerLight]: colorMode === "light",
      })}
    >
      <Center
        className="header-contents"
        justifyContent="space-between"
        alignItems="center"
        maxW="1280px"
        margin="auto"
        my={1}
      >
        <Heading>Amber Joy</Heading>
        <IconButton
          size="md"
          fontSize="2xl"
          variant="ghost"
          color="current"
          onClick={toggleColorMode}
          icon={<SwitchIcon />}
          aria-label={`Switch to ${text} mode`}
          marginRight={-4}
          title={`Switch to ${text} mode`}
          {...props}
        />
      </Center>
    </Box>
  );
};

export default Header;
