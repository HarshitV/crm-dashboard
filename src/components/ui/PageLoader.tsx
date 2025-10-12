import { rem } from "@/utils/rem";
import { PageWrapper } from "./PageWrapper";
import { Spinner } from "@chakra-ui/react";

export const PageLoader = () => (
  <PageWrapper ml={0} w="100vw" h="100vh" justify="center" align="center">
    <Spinner ml={{ base: "0", md: rem(306) }} size="lg" color="gray.400" />
  </PageWrapper>
);
