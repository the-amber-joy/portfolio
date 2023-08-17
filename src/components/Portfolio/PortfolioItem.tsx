import { ExternalLinkIcon } from "@chakra-ui/icons";
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

import styles from "./Portfolio.module.css";
import { PortfolioItemType } from "./PortfolioList";

const PortolioItem = ({ item }: { item: PortfolioItemType }) => {
  const { colorMode } = useColorMode();
  const { colors } = useTheme();

  return (
    <LinkBox
      className={
        colorMode === "dark"
          ? styles.portfolioItemDark
          : styles.portfolioItemLight
      }
      borderWidth="1.5px"
      overflow="hidden"
      borderRadius="1rem"
    >
      <LinkOverlay href={item.href}>
        <Image src={item.pic} alt={item.title} />
      </LinkOverlay>
      <Center flexDirection={"column"} p={2}>
        <Text
          as="b"
          color={
            colorMode === "dark"
              ? colors.brand.ajPink
              : colors.brand.ajMagentaLvls["400"]
          }
          className={
            colorMode === "dark"
              ? styles.portfolioItemDark
              : styles.portfolioItemLight
          }
        >
          {item.title}
        </Text>
        <Text>{item.description}</Text>
        {item.extraLink && item.extraText && (
          <Link href={item.extraLink} marginTop={4} isExternal>
            {item.extraText}
            <ExternalLinkIcon marginX="2px" marginBottom={1} />
          </Link>
        )}
        <Link href={item.repo} marginTop={4} isExternal>
          Repo for this project
          <ExternalLinkIcon marginX="2px" marginBottom={1} />
        </Link>
      </Center>
    </LinkBox>
  );
};

export default PortolioItem;
