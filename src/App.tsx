import {
  Container,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import "./App.css";
import PortfolioList from "./components/Portfolio/PortfolioList";

import About from "./components/About/About";
import { ColorModeSwitcher } from "./components/ColorModeSwitcher";
import Footer from "./components/Footer/Footer";

const App = () => (
  <>
    <Container maxWidth="1280px">
      <Flex minHeight="92vh" paddingTop={4} direction={"column"}>
        <ColorModeSwitcher marginBottom={6} />

        <Tabs variant={"enclosed"}>
          <TabList>
            <Tab key={1}>About</Tab>
            <Tab key={2}>Portfolio</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <About />
            </TabPanel>
            <TabPanel>
              <PortfolioList />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Container>
    <Footer />
  </>
);

export default App;
