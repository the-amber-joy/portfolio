import { useTheme, Heading, Text, Stack } from "@chakra-ui/react";
import { Center } from "@chakra-ui/layout";
import styles from "./About.module.css";

const About = () => {
  const { colors } = useTheme();
  const duration = () => {
    const thisYear = new Date().getFullYear();
    return thisYear - 2016;
  };
  return (
    <Center
      w="auto"
      h="sm"
      color={colors.white}
      marginTop={4}
      textAlign={"center"}
      className={styles.gradient}
    >
      <Stack>
        <Heading textShadow={"2px 2px #000"} size={"lg"}>
          Hi, I'm Amber!
        </Heading>
        <Text color={"black"} maxW={"md"}>
          I'm a Front-End Web Developer with {duration()}+ years of experience
          specializing in modern JS/TS frameworks. Please contact me using the
          links below!
        </Text>
      </Stack>
    </Center>
  );
};

export default About;
