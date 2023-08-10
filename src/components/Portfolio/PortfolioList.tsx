import { map } from "lodash";
import PortolioItem from "./PortfolioItem";
import { Wrap, WrapItem } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";

const PortfolioList = () => {
  const image = ({ src, alt, url }: { src: string; alt: string, url: string }) => (
    <Image src={src} alt={alt} data-url={url} />
  );

  const portfolioItems: any[] = [
    image({
      src: "/src/assets/critters.png",
      alt: "Let's look at some critters!",
      url: "https://critters.amberjoy.dev",
    }),
    image({
      src: "/src/assets/critters.png",
      alt: "Let's look at some critters!",
      url: "https://critters.amberjoy.dev",
    }),
    image({
      src: "/src/assets/critters.png",
      alt: "Let's look at some critters!",
      url: "https://critters.amberjoy.dev",
    }),
    image({
      src: "/src/assets/critters.png",
      alt: "Let's look at some critters!",
      url: "https://critters.amberjoy.dev",
    }),
    image({
      src: "/src/assets/critters.png",
      alt: "Let's look at some critters!",
      url: "https://critters.amberjoy.dev",
    }),
    image({
      src: "/src/assets/critters.png",
      alt: "Let's look at some critters!",
      url: "https://critters.amberjoy.dev",
    }),
  ];

  return (
    <Wrap spacing={4}>
      {map(portfolioItems, (item: string, i: number) => (
        <WrapItem key={i}>
          <PortolioItem item={item} key={i} />
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default PortfolioList;
