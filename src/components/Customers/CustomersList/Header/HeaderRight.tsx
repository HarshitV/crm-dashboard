import { Search } from "@/components/ui/Search";
import { useHeaderRight } from "@/hooks/useHeaderRight";
import { rem } from "@/utils/rem";
import { Flex } from "@chakra-ui/react";

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
}: Props) => {
  const { handleSearchChange, handleSortChange } = useHeaderRight({
    setSearch,
    setSort,
    setPage,
  });

  return (
    <Flex gap={rem(16)} h={rem(38)}>
      <Search value={search} onChange={handleSearchChange} />
      <Flex
        flex={1}
        bg="white"
        borderRadius={rem(8)}
        boxShadow="sm"
        px={3}
        py={2}
        fontSize={rem(12)}
        display={{ base: "none", lg: "block" }}
        _focusWithin={{ boxShadow: "0 0 0 1px #2684FF" }}
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
          onChange={handleSortChange}
        >
          <option value="newest">Sort by Newest</option>
          <option value="name">Sort by Name</option>
          <option value="status">Sort by Status</option>
        </select>
      </Flex>
    </Flex>
  );
};
