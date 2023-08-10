import {
  useColorMode,
  useColorModeValue,
  IconButton,
  IconButtonProps,
  Flex,
  Spacer,
  Heading,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">;

export const ColorModeSwitcher = (props: ColorModeSwitcherProps) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon);

  return (
    <Flex>
      <Heading>Amber Joy</Heading>
      <Spacer />
      <IconButton
        size="md"
        fontSize="2xl"
        variant="ghost"
        color="current"
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
        aria-label={`Switch to ${text} mode`}
        {...props}
      />
    </Flex>
  );
};
