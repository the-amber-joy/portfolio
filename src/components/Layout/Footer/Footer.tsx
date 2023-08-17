import { Box, Center, useColorMode, useTheme } from "@chakra-ui/react";
import clsx from "clsx";

import EmailLink from "./components/EmailLink";
import GithubLink from "./components/GithubLink";
import LinkedInLink from "./components/LinkedInLink";
import MastodonLink from "./components/MastodonLink";
import ResumeLink from "./components/ResumeLink";
import styles from "./Footer.module.css";

const Footer = () => {
  const { colorMode } = useColorMode();
  const { colors } = useTheme();

  return (
    <Box
      position="fixed"
      bottom="0px"
      w="100%"
      bgColor={
        colorMode === "dark"
          ? colors.brand.ajBlueLvls["100"]
          : colors.brand.ajOrangeLvls["900"]
      }
      px={4}
      className={clsx(styles.footerContainer, {
        [styles.footerDark]: colorMode === "dark",
        [styles.footerLight]: colorMode === "light",
      })}
    >
      <Center
        className="footer-contents"
        justifyContent="space-evenly"
        alignItems="flex-end"
        maxW="1280px"
        margin="auto"
        my={1}
      >
        <MastodonLink />
        <GithubLink />
        <LinkedInLink />
        <EmailLink />
        <ResumeLink />
      </Center>
    </Box>
  );
};

export default Footer;
