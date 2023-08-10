import {
  Center,
  LinkBox,
  LinkOverlay,
  useColorMode,
} from "@chakra-ui/react";

import styles from "./Portfolio.module.css";
const PortolioItem = ({ item }: { item: any }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <LinkBox
        className={
          colorMode === "dark" ? styles.borderDark : styles.borderLight
        }
        borderWidth="1px"
        maxW={"sm"}
        w={"auto"}
      >
        <LinkOverlay href={item.props["data-url"]}>{item}</LinkOverlay>
        <Center>{item.props.alt}</Center>
      </LinkBox>
    </>
  );
};

export default PortolioItem;
