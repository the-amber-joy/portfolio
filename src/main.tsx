import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/comfortaa/400.css";
// import "@fontsource/alkatra/400.css";
// import "@fontsource/marhey/400.css";
// import "@fontsource/raleway/600.css";

import App from "./App.tsx";
import "./index.css";
import theme from "./theme/theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
