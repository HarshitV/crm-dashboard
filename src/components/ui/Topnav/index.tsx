import { useUserStore } from "@/store/useUserStore";
import { rem } from "@/utils/rem";
import { Flex, Skeleton, Text } from "@chakra-ui/react";
import { Search } from "../Search";

export const Topnav = () => {
  const userName = useUserStore((state) => state.user?.name);
  const firstName = userName?.split(" ")[0];
  const isNameLoading = !userName;

  return (
    <Flex justify="space-between" align="center" gap={rem(8)}>
      {isNameLoading ? (
        <Skeleton h={rem(36)} w={rem(180)} />
      ) : (
        <Text fontSize={{ base: rem(16), md: rem(24) }}>
          Hello {firstName} 👋🏼,
        </Text>
      )}
      <Search bg="white" />
    </Flex>
  );
};
