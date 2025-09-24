import { rem } from "@/utils/rem";
import { Box, Flex, Input, Text } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { FiSearch } from "react-icons/fi";

interface Props {
  status: string;
  search: string;
  sort: string;
  setStatus: Dispatch<SetStateAction<string>>;
  setSearch: Dispatch<SetStateAction<string>>;
  setSort: Dispatch<SetStateAction<string>>;
  setPage: Dispatch<SetStateAction<number>>;
}

export const Header = ({
  status,
  search,
  sort,
  setStatus,
  setSearch,
  setSort,
  setPage,
}: Props) => {
  return (
    <Flex justify="space-between" align="center" mb={8}>
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
      <Flex gap={4} direction="row" h={rem(42)}>
        <Flex
          align="center"
          bg="#F9FBFF"
          borderRadius={rem(10)}
          p={rem(7)}
          w={{ base: rem(150), xl: rem(215) }}
        >
          <FiSearch color="#7E7E7E" size={rem(16)} />
          <Input
            placeholder="Search..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            border="none"
            boxShadow="none"
            _focus={{ boxShadow: "none" }}
          />
        </Flex>
        <Box
          flex={1}
          bg="white"
          borderRadius="8px"
          boxShadow="sm"
          px={3}
          py={2}
          fontSize={rem(12)}
          display={{ base: "none", lg: "block" }}
        >
          <select
            style={{
              width: "100%",
              border: "none",
              outline: "none",
              background: "transparent",
            }}
            value={sort}
            onChange={(e) => {
              setSort(e.target.value);
              setPage(1);
            }}
          >
            <option value="newest">Sort by Newest</option>
            <option value="name">Sort by Name</option>
            <option value="status">Sort by Status</option>
          </select>
        </Box>
      </Flex>
    </Flex>
  );
};
