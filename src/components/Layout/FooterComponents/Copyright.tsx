import { Flex, useColorMode, useTheme } from "@chakra-ui/react";

export default function Copyright() {
  const { colorMode } = useColorMode();
  const { colors } = useTheme();

  return (
    <Flex
      alignItems="flex-end"
      paddingBottom={0}
      color={
        colorMode === "dark" ? colors.brand.ajCheez : colors.brand.ajPurple
      }
    >
      &copy; {new Date().getFullYear()}
    </Flex>
  );
}
