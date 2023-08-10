import { Center, useColorMode } from "@chakra-ui/react";
import styles from "./Footer.module.css";

const SvgIconLink = (props: any) => {
  const { colorMode } = useColorMode();

  return (
    <a
      href={props.url}
      target="_blank"
      className={
        colorMode === "dark" ? styles.iconLinkDark : styles.iconLinkLight
      }
      style={{ padding: "10px" }}
    >
      <Center>
        <i>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {props.children}
          </svg>
        </i>
      </Center>
      {props.title}
    </a>
  );
};

export default SvgIconLink;
