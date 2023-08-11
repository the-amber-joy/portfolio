import { Heading, SimpleGrid } from "@chakra-ui/react";
import { map } from "lodash";

import PortfolioItem from "./PortfolioItem";
import crittersPng from "./img/critters.png";
import how2fitePng from "./img/how2fite.png";
import catsGPTPng from "./img/catsGPT.png";
import shakeMePng from "./img/shakeMe.png";

export interface PortfolioItemType {
  pic: string;
  title: string;
  description: string;
  href: string;
  repo: string;
  extraText?: string;
  extraLink?: string;
}

const portfolioItems: PortfolioItemType[] = [
  {
    pic: crittersPng,
    title: "Let's look at some critters! ",
    description: `Just for fun, using the free PokeAPI. Search for Pokemon, or see random ones! Toggle between default and shiny variants! Save your favorites!`,
    href: "https://critters.amberjoy.dev",
    repo: "https://github.com/the-amber-joy/lookit-these-critters",
    extraLink: "https://pokeapi.co/",
    extraText: "PokeAPI.co",
  },
  {
    pic: how2fitePng,
    title: "How 2 Fite",
    description:
      "Designed 100% by my children, spelling and all. They think it's hilarious. I also used this as an opportunity to play with the browser voice synthesizer API.",
    href: "https://how2fite.amberjoy.dev/",
    repo: "https://github.com/the-amber-joy/how2fite",
  },
  {
    pic: catsGPTPng,
    title: "CatsGPT",
    description:
      "I asked ChatGPT to make a tiny ExpressJS app, and then style it. This is the result. Design is hard for LLMs. (Hosted on Glitch, so it may be a little slow to load.)",
    href: "https://catsGPT.amberjoy.dev",
    repo: "https://github.com/the-amber-joy/catsGPT",
    extraLink: "https://sharegpt.com/c/wHYqysu",
    extraText: "My original convo w/ ChatGPT"
  },
  {
    pic: shakeMePng,
    title: "SHAKE ME",
    description:
      "I wanted to experiment with accessing device motion sensors. Android only (for now), but it also works on click or tap. Generates random background and text colors.",
    href: "https://shake.amberjoy.dev",
    repo: "https://github.com/the-amber-joy/shake-me",
  },
];

const PortfolioList = () => {
  return (
    <>
      <Heading size={"sm"} my={4}>
        Here are some of the dumb little things I've made in my spare time:
      </Heading>
      <SimpleGrid
        minChildWidth="sm"
        spacing={4}
        columns={3}
        marginBottom={"75px"}
      >
        {map(portfolioItems, (item, i) => (
          <PortfolioItem item={item} key={i} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default PortfolioList;
