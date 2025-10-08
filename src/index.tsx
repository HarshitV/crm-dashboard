import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { system } from "./components/ui/theme";
import { Global } from "@emotion/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider value={system}>
      <Global
        styles={{
          body: {
            backgroundColor: "#FAFBFF",
            color: "#000000",
            minWidth: "100vw",
            width: "fit-content",
            minHeight: "100vh",
            height: "fit-content",
          },
          p: {
            marginBottom: "0 !important",
          },
        }}
      />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
