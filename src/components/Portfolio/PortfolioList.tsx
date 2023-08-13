import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Center, Heading, Link, SimpleGrid } from "@chakra-ui/react";
import { map } from "lodash";

import PortfolioItem from "./PortfolioItem";
import portfolioItems from "./portfolioItems";

export interface PortfolioItemType {
  pic: string;
  title: string;
  description: string;
  href: string;
  repo: string;
  extraText?: string;
  extraLink?: string;
}

const PortfolioList = () => {
  return (
    <Box marginBottom={"75px"}>
      <Heading size={"sm"} my={4}>
        Here are some of the dumb little things I've made in my spare time:
      </Heading>
      <SimpleGrid minChildWidth="sm" spacing={4} columns={3}>
        {map(portfolioItems, (item, i) => (
          <PortfolioItem item={item} key={i} />
        ))}
      </SimpleGrid>
      <Center>
        <Link
          href="https://github.com/the-amber-joy/portfolio"
          isExternal
          marginTop={5}
        >
          Repo for this site
          <ExternalLinkIcon marginX="2px" marginBottom={1} />
        </Link>
      </Center>
    </Box>
  );
};

export default PortfolioList;
