import { rem } from "@/utils/rem";
import { Flex, Text } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

interface Props {
  status: string;
  setStatus: Dispatch<SetStateAction<string>>;
  setPage: Dispatch<SetStateAction<number>>;
}

export const HeaderLeft = ({ status, setStatus, setPage }: Props) => (
  <Flex direction="column" gap={rem(4)}>
    <Text
      fontSize={{ base: rem(18), md: rem(22) }}
      fontWeight={600}
      color="#000"
    >
      All Customers
    </Text>
    <Text
      as="button"
      color="#16C098"
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
        ? "Active Members"
        : status === "inactive"
        ? "Inactive Members"
        : "All Members"}
    </Text>
  </Flex>
);
