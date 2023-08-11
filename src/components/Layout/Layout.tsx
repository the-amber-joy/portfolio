import { Container, Flex } from "@chakra-ui/react";
import About from "../About/About";
import Footer from "./Footer";
import Header from "./Header";
import PortfolioList from "../Portfolio/PortfolioList";

const Layout = () => (
  <>
    <Container maxWidth="1280px">
      <Flex paddingTop={4} direction="column">
        <Header />
        <About />
        <PortfolioList />
      </Flex>
    </Container>
    <Footer />
  </>
);

export default Layout;
