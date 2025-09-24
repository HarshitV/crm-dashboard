import { rem } from "@/utils/rem";
import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

export const PageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Flex
      overflow="auto"
      h="100vh"
      direction="column"
      gap={rem(40)}
      px={rem(70)}
      py={rem(40)}
    >
      {children}
    </Flex>
  );
};
