import {
  Container,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import "@fontsource/comfortaa/400.css";
// import "@fontsource/alkatra/400.css";
// import "@fontsource/marhey/400.css";
// import "@fontsource/raleway/600.css";
import { NavLink, Outlet, Route, Routes, useLocation } from "react-router-dom";

import "./App.css";
import PortfolioList from "./components/Portfolio/PortfolioList";
import About from "./components/About/About";
import ColorModeSwitcher from "./components/ColorModeSwitcher";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";

const App = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === "/") {
      setTabIndex(0);
    }
    if (pathname === "/portfolio") {
      setTabIndex(1);
    }
  }, [pathname]);
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <>
      <Container maxWidth="1280px">
        <Flex paddingTop={4} direction={"column"}>
          <ColorModeSwitcher marginBottom={6} />

          <Tabs
            variant={"enclosed"}
            onChange={(index) => setTabIndex(index)}
            index={tabIndex}
          >
            <TabList>
              <Tab
                key={1}
                as={NavLink}
                to="/"
                onClick={(e) => e.currentTarget.blur()}
              >
                About
              </Tab>
              <Tab
                key={2}
                as={NavLink}
                to="/portfolio"
                onClick={(e) => e.currentTarget.blur()}
              >
                Portfolio
              </Tab>
            </TabList>

            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/portfolio" element={<PortfolioList />} />
            </Routes>

            <TabPanels>
              <TabPanel>
                <Outlet />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Container>
      <Footer />
    </>
  );
};

export default App;
