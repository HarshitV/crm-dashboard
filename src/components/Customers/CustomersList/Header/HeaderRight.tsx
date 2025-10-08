import { rem } from "@/utils/rem";
import { Box, Flex, Input } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { FiSearch } from "react-icons/fi";

interface Props {
  search: string;
  sort: string;
  setSearch: Dispatch<SetStateAction<string>>;
  setSort: Dispatch<SetStateAction<string>>;
  setPage: Dispatch<SetStateAction<number>>;
}

export const HeaderRight = ({
  search,
  sort,
  setSearch,
  setSort,
  setPage,
}: Props) => (
  <Flex gap={rem(16)} h={rem(38)}>
    <Flex
      align="center"
      bg="#F9FBFF"
      borderRadius={rem(10)}
      p={rem(7)}
      w={{ base: rem(150), xl: rem(215) }}
    >
      <FiSearch color="#7E7E7E" size={rem(16)} />
      <Input
        placeholder="Search"
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
      borderRadius={rem(8)}
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
);
