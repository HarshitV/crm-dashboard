import { Flex, Text } from "@chakra-ui/react";
import { rem } from "@/utils/rem";

export const DashboardErrorState = ({ error }: { error: string }) => (
  <Flex
    minH={rem(150)}
    align="center"
    justify="center"
    bg="white"
    borderRadius={rem(30)}
    px={rem(50)}
    py={rem(30)}
    boxShadow={`0 0 ${rem(10)} 0 var(--chakra-colors-border-main)`}
  >
    <Text color="error-main" fontWeight="bold" fontSize={rem(18)}>
      {error}
    </Text>
  </Flex>
);
