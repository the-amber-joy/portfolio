import { ChakraProvider } from "@chakra-ui/react";

import Layout from "./components/Layout/Layout.tsx";
import theme from "./theme/theme.ts";

const App = () => (
  <ChakraProvider theme={theme}>
    <Layout />
  </ChakraProvider>
);

export default App;
