import {
  Center,
  Image,
  Link,
  LinkBox,
  LinkOverlay,
  Text,
  useColorMode,
  WrapItem,
} from "@chakra-ui/react";

import { PortfolioItemType } from "./PortfolioList";
import styles from "./Portfolio.module.css";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const PortolioItem = ({ item }: { item: PortfolioItemType }) => {
  const { colorMode } = useColorMode();
  return (
    <WrapItem>
      <LinkBox
        className={
          colorMode === "dark" ? styles.borderDark : styles.borderLight
        }
        borderWidth="1px"
        maxW={"sm"}
        w={"auto"}
      >
        <LinkOverlay href={item.href}>
          <Image src={item.pic} alt={item.title} />
        </LinkOverlay>
        <Center flexDirection={"column"} p={2}>
          <Text as="b">
            {item.title}
          </Text>
          <Text>{item.description}</Text>
          <Link href={item.repo} marginTop={4} isExternal>
            Repo for this project
            <ExternalLinkIcon marginX="2px" marginBottom={1} />
          </Link>
        </Center>
      </LinkBox>
    </WrapItem>
  );
};

export default PortolioItem;
