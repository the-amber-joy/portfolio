import { Heading, Wrap } from "@chakra-ui/react";
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
}

const portfolioItems: PortfolioItemType[] = [
  {
    pic: crittersPng,
    title: "Let's look at some critters! ",
    description:
      "Just for fun, using the free PokeAPI. Search for Pokemon, or see random ones. Save your favorites!",
    href: "https://critters.amberjoy.dev",
    repo: "https://github.com/the-amber-joy/lookit-these-critters",
  },
  {
    pic: how2fitePng,
    title: "How 2 Fite",
    description:
      "Designed 100% by my children, spelling and all. They wrote it on a whiteboard. I also used this as an opportunity to play with the browser voice synthesizer API!",
    href: "https://how2fite.amberjoy.dev/",
    repo: "https://github.com/the-amber-joy/how2fite",
  },
  {
    pic: catsGPTPng,
    title: "CatsGPT",
    description:
      "I asked ChatGPT to make a tiny ExpressJS app, and then style it. This is the result. Design is hard for LLMs. (Hosted on Glitch, so it may be a little slow to load!)",
    href: "https://catsGPT.amberjoy.dev",
    repo: "https://github.com/the-amber-joy/catsGPT",
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
      <Heading size={"sm"} mb={4}>
        A few silly examples of how I spend some of my spare time:
      </Heading>
      <Wrap spacing={4}>
        {map(portfolioItems, (item) => (
          <PortfolioItem item={item} />
        ))}
      </Wrap>
    </>
  );
};

export default PortfolioList;
