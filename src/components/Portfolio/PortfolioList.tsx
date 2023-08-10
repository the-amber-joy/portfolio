import { map } from "lodash";
import PortolioItem, { PortfolioItemType } from "./PortfolioItem";
import { Wrap, WrapItem } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";

const PortfolioList = () => {
  const image = ({ src, title, description, url }: PortfolioItemType) => (
    <Image
      src={src}
      title={title}
      data-url={url}
      data-description={description}
    />
  );

  const portfolioItems = [
    image({
      src: "/src/assets/critters.png",
      title: "Let's look at some critters! ",
      description: "Just for fun",
      url: "https://critters.amberjoy.dev",
    }),
    image({
      src: "/src/assets/how2fite.png",
      title: "How 2 Fite",
      description: "A PWA designed 100% by my children",
      url: "https://how2fite.amberjoy.dev/",
    }),
    // image({
    //   src: "/src/assets/catsgpt.png",
    //   title: "CatsGPT",
    //   description: "",
    //   url: "https://catsGPT.amberjoy.dev",
    // }),
    // image({
    //   src: "/src/assets/shakeme.png",
    //   title: "SHAKE ME",
    //   description: "",
    //   url: "https://shake.amberjoy.dev",
    // })
    // }),
  ];

  return (
    <Wrap spacing={4}>
      {map(portfolioItems, (item: PortfolioItemType, i: number) => (
        <WrapItem key={i}>
          <PortolioItem item={item} key={i} />
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default PortfolioList;
