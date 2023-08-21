import {
  catsGPTPng,
  chatbotPng,
  crittersPng,
  how2fitePng,
  shakeMePng,
  uvIndexPng,
} from "./img";
import { PortfolioItemType } from "./PortfolioList";

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
    pic: uvIndexPng,
    title: "Today's UV Undex",
    description:
      "I built this during the technical portion of a job interview. I was given 90 minutes and was allowed to use an existing app (my Pokemon critters) as boilerplate. Initially built with hard-coded coordinates, and later I added location search just for fun. (My free API key only allows 50 requests per day so this may not always work!)",
    href: "https://uvindex.amberjoy.dev",
    repo: "https://github.com/the-amber-joy/amber-sample",
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

export default portfolioItems;
