import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Flex,
  Heading,
  IconButton,
  IconButtonProps,
  Spacer,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

type HeaderProps = Omit<IconButtonProps, "aria-label">;

const Header = (props: HeaderProps) => {
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

export default Header;
