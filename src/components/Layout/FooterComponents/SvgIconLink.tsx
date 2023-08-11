import { Center, Link, useColorMode } from "@chakra-ui/react";

import styles from "../Footer.module.css";
import clsx from "clsx";

const SvgIconLink = (props: any) => {
  const { colorMode } = useColorMode();

  return (
    <Link
      href={props.url}
      target="_blank"
      className={
        colorMode === "dark" ? styles.iconLinkDark : styles.iconLinkLight
      }
      style={{ padding: "5px 5px 0 5px" }}
      fontSize={"sm"}
      rel="me"
    >
      <Center>
        <i
          className={clsx(styles.icon, {
            [styles.iconDark]: colorMode === "dark",
            [styles.iconLight]: colorMode === "light",
          })}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            preserveAspectRatio="none"
            className={styles.iconSvg}
          >
            {props.children}
          </svg>
        </i>
      </Center>
      {props.title}
    </Link>
  );
};

export default SvgIconLink;
