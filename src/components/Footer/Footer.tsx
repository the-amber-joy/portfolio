import { Box, Center, Flex, useColorMode } from "@chakra-ui/react";
import SvgIconLink from "./SvgIconLink";
import styles from "./Footer.module.css";

const Footer = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      position={"sticky"}
      bottom={"0px"}
      w="100vw"
      bgColor={colorMode === "dark" ? "#1A202C" : "white"}
      px={4}
      className="footer"
      boxShadow={"inner"}
    >
      <Center
        justifyContent={"space-between"}
        alignItems={"flex-end"}
        maxW={"1280px"}
        margin={"auto"}
      >
        <div>
          <Flex
            alignItems={"flex-end"}
            paddingBottom={2.5}
            className={
              colorMode === "dark" ? styles.iconLinkDark : styles.iconLinkLight
            }
          >
            &copy; {new Date().getFullYear()}
          </Flex>
        </div>
        {/* <Spacer /> */}
        <div>
          <Flex justifyContent={"space-around"} className="BAZ">
            <SvgIconLink title="Github" url="https://github.com/the-amber-joy">
              <title>Github</title>
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </SvgIconLink>
            <SvgIconLink
              title="LinkedIn"
              url="https://www.linkedin.com/in/theamberjoy"
            >
              <title>LinkedIn</title>
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>{" "}
            </SvgIconLink>
            <SvgIconLink title="Email" url="mailto:contact@amberjoy.dev">
              <title>Email</title>
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </SvgIconLink>
            <SvgIconLink
              title="Resume"
              url="https://docs.google.com/document/d/e/2PACX-1vRSbGbIX-4Dl1StiITfPGkM0IKZGYr21jSJ2ru-GDXsY7AI9QQW9VMfPQedzVVgo1SIXZBOwS5Vyzlz/pub"
            >
              <title>Resume</title>
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </SvgIconLink>
          </Flex>
        </div>
      </Center>
    </Box>
  );
};

export default Footer;
