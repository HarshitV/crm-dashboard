import type { Preview } from "@storybook/react-webpack5";
import React from "react";

import { ChakraProvider } from "@chakra-ui/react";
import { system } from "../src/components/ui/theme";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => <ChakraProvider value={system}>{Story()}</ChakraProvider>,
  ],
};

export default preview;
