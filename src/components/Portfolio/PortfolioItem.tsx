import { Center, useColorMode, Text, Box, Link } from "@chakra-ui/react";

import styles from "./Portfolio.module.css";

export interface PortfolioItemType {
  src: string;
  title: string;
  description: string;
  url: string;
}
const PortolioItem = ({ item }: { item: any }) => {
  const { colorMode } = useColorMode();
  return (
    <Link href={item.props["data-url"]}>
      <Box
        className={
          colorMode === "dark" ? styles.borderDark : styles.borderLight
        }
        borderWidth="1px"
        maxW={"sm"}
        w={"auto"}
      >
        {item}
        <Center flexDirection={"column"}>
          <Text as="b">{item.props.title}</Text>
          <Text as="em">{item.props["data-description"]}</Text>
        </Center>
      </Box>
    </Link>
  );
};

export default PortolioItem;
