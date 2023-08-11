import {
  Center,
  Image,
  Link,
  LinkBox,
  LinkOverlay,
  Text,
  useColorMode,
  useTheme,
} from "@chakra-ui/react";

import { PortfolioItemType } from "./PortfolioList";
import styles from "./Portfolio.module.css";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const PortolioItem = ({ item }: { item: PortfolioItemType }) => {
  const { colorMode } = useColorMode();
  const { colors } = useTheme();

  return (
    <LinkBox
      className={colorMode === "dark" ? styles.borderDark : styles.borderLight}
      borderWidth="1.5px"
      overflow="hidden"
    >
      <LinkOverlay href={item.href}>
        <Image src={item.pic} alt={item.title} />
      </LinkOverlay>
      <Center flexDirection={"column"} p={2}>
        <Text as="b" color={colors.brand.ajPinkLvls["600"]}>
          {item.title}
        </Text>
        <Text>{item.description}</Text>
        <Link href={item.repo} marginTop={4} isExternal>
          Repo for this project
          <ExternalLinkIcon marginX="2px" marginBottom={1} />
        </Link>
      </Center>
    </LinkBox>
  );
};

export default PortolioItem;
