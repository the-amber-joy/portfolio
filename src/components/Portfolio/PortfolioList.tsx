import { Heading, SimpleGrid } from "@chakra-ui/react";
import { map } from "lodash";

import PortfolioItem from "./PortfolioItem";
import {
  crittersPng,
  how2fitePng,
  catsGPTPng,
  shakeMePng,
  chatbotPng,
} from "./img";

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
      "Designed 100% by my children, spelling and all. They think it's hilarious. This was my 2nd time playing with the SpeechSynthesis interface of the Web Speech API.",
    href: "https://how2fite.amberjoy.dev/",
    repo: "https://github.com/the-amber-joy/how2fite",
    extraLink:
      "https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API",
    extraText: "Web Speech API",
  },
  {
    pic: catsGPTPng,
    title: "CatsGPT",
    description:
      "I asked ChatGPT to make a tiny ExpressJS app, and then style it. This is the result. Design is hard for LLMs. (Hosted on Glitch, so it may be a little slow to load.)",
    href: "https://catsGPT.amberjoy.dev",
    repo: "https://github.com/the-amber-joy/catsGPT",
    extraLink: "https://sharegpt.com/c/wHYqysu",
    extraText: "My original convo w/ ChatGPT",
  },
  {
    pic: shakeMePng,
    title: "SHAKE ME",
    description:
      "I wanted to experiment with accessing device motion events. Android only (for now), but it also works on click or tap. Generates random background and text colors.",
    href: "https://shake.amberjoy.dev",
    repo: "https://github.com/the-amber-joy/shake-me",
    extraLink:
      "https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent",
    extraText: "DeviceMotionEvent interface docs",
  },
  {
    pic: chatbotPng,
    title: "Not Quite a Chatbot",
    description:
      'I followed a tutorial to build a "chatbot" which is lame, but then I branched out and experimented with the SpeechSynthesis interface of the Web Speech API for the first time. Fun!',
    href: "https://chatbot.amberjoy.dev",
    repo: "https://github.com/the-amber-joy/chatbot",
    extraLink:
      "https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API",
    extraText: "Web Speech API",
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
