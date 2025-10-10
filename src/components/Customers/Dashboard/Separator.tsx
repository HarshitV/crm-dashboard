import { rem } from "@/utils/rem";
import { Box } from "@chakra-ui/react";

export const Separator = () => (
  <Box
    hideBelow="xl"
    w={rem(1)}
    h="100%"
    maxH={rem(84)}
    bg="#F0F0F0"
    display={{ base: "none", md: "block" }}
  />
);
