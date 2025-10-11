import { rem } from "@/utils/rem";
import { Flex, FlexProps } from "@chakra-ui/react";

export const PageWrapper = ({ children, ...rest }: FlexProps) => {
  return (
    <Flex
      overflow="auto"
      direction="column"
      gap={rem(40)}
      px={rem(70)}
      py={rem(40)}
      ml={{ base: "0", md: rem(306) }}
      {...rest}
    >
      {children}
    </Flex>
  );
};
