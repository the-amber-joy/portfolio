import { Container, Flex } from "@chakra-ui/react";
import About from "../About/About";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import PortfolioList from "../Portfolio/PortfolioList";

const Layout = () => (
  <>
    <Header />
    <Container maxWidth="1280px">
      <Flex paddingTop={12} direction="column">
        <About />
        <PortfolioList />
      </Flex>
    </Container>
    <Footer />
  </>
);

export default Layout;
