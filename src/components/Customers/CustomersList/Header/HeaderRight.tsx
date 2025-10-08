import { rem } from "@/utils/rem";
import { Flex, Input } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

interface Props {
  search: string;
  sort: string;
  setSearch: (v: string) => void;
  setSort: (v: string) => void;
  setPage: (v: number) => void;
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
    <Flex
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
        id="sort"
        style={{
          width: "100%",
          height: "100%",
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
    </Flex>
  </Flex>
);
