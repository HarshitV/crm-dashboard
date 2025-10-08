import { rem } from "@/utils/rem";
import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

export const PageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Flex
      overflow="auto"
      direction="column"
      gap={rem(40)}
      px={rem(70)}
      py={rem(40)}
      ml={{ base: "0", md: rem(306) }}
    >
      {children}
    </Flex>
  );
};
