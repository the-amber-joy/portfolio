import { Box, Center, useColorMode } from "@chakra-ui/react";
import clsx from "clsx";

import styles from "./Footer.module.css";
import EmailLink from "./FooterComponents/EmailLink";
import GithubLink from "./FooterComponents/GithubLink";
import LinkedInLink from "./FooterComponents/LinkedInLink";
import MastodonLink from "./FooterComponents/MastodonLink";
import ResumeLink from "./FooterComponents/ResumeLink";

const Footer = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      position="fixed"
      bottom="0px"
      w="100vw"
      bgColor={colorMode === "dark" ? "#1A202C" : "white"}
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
