import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        "text-primary": { value: "#000000" },
        "text-secondary": { value: "#9197B3" },
      },
    },
  },
});
