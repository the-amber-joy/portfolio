import { Box, Center, Flex, useColorMode } from "@chakra-ui/react";

import styles from "./Footer.module.css";
import clsx from "clsx";
import Copyright from "./FooterComponents/Copyright";
import GithubLink from "./FooterComponents/GithubLink";
import LinkedInLink from "./FooterComponents/LinkedInLink";
import EmailLink from "./FooterComponents/EmailLink";
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
        justifyContent="space-between"
        alignItems="flex-end"
        maxW="1280px"
        margin="auto"
        my={1}
      >
        <Copyright />
        <Flex justifyContent="space-around">
          <GithubLink />
          <LinkedInLink />
          <EmailLink />
          <ResumeLink />
        </Flex>
      </Center>
    </Box>
  );
};

export default Footer;
