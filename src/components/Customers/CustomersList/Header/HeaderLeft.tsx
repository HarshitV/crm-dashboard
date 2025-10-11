import { rem } from "@/utils/rem";
import { Flex, Text } from "@chakra-ui/react";

interface Props {
  status: string;
  setStatus: (v: string) => void;
  setPage: (v: number) => void;
}

export const HeaderLeft = ({ status, setStatus, setPage }: Props) => (
  <Flex direction="column" gap={rem(4)}>
    <Text
      fontSize={{ base: rem(18), md: rem(22) }}
      fontWeight={600}
      color="text-main"
    >
      All Customers
    </Text>
    <Text
      as="button"
      color="brand-accent"
      fontSize={rem(14)}
      background="none"
      border="none"
      cursor="pointer"
      p={0}
      textAlign="left"
      _hover={{ textDecoration: "underline" }}
      onClick={() => {
        if (status === "active") setStatus("inactive");
        else if (status === "inactive") setStatus("");
        else setStatus("active");
        setPage(1);
      }}
    >
      {status === "active"
        ? "Inactive Members"
        : status === "inactive"
        ? "All Members"
        : "Active Members"}
    </Text>
  </Flex>
);
