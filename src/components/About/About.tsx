import {
  Center,
  Flex,
  Heading,
  Stack,
  Text,
  useColorMode,
  useTheme,
} from "@chakra-ui/react";

import styles from "./About.module.css";

const About = () => {
  const { colorMode } = useColorMode();
  const { colors } = useTheme();
  const duration = () => {
    const thisYear = new Date().getFullYear();
    return thisYear - 2016;
  };
  return (
    <Flex justifyContent="center">
      <Center
        minW="md"
        marginTop={4}
        textAlign="center"
        className={styles.gradient}
      >
        <Stack>
          <Heading
            color={colors.white}
            textShadow={
              colorMode === "dark"
                ? `2px 2px ${colors.brand.ajPurpleLvls["100"]}`
                : `2px 2px ${colors.brand.ajBlueLvls["200"]}`
            }
            size="lg"
            mt={2}
          >
            Welcome!
          </Heading>
          <Text
            maxW="md"
            color={
              colorMode === "dark"
                ? colors.brand.ajPurpleLvls["200"]
                : colors.brand.ajBlueLvls["200"]
            }
            padding={2}
            fontSize="xl"
          >
            I'm a Front-End Web Developer with {duration()}+ years of experience
            specializing in modern JS/TS frameworks. Please contact me using the
            links below!
          </Text>
        </Stack>
      </Center>
    </Flex>
  );
};

export default About;
