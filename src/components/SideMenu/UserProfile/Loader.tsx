import { rem } from "@/utils/rem";
import { Flex, Skeleton, SkeletonCircle } from "@chakra-ui/react";

export const Loader = () => (
  <Flex position="fixed" bottom="10%" gap={rem(8)}>
    <SkeletonCircle size={rem(42)} />
    <Flex direction="column" justify="center">
      <Skeleton height={rem(14)} width={rem(80)} mb={rem(4)} />
      <Skeleton height={rem(12)} width={rem(120)} />
    </Flex>
  </Flex>
);
