import { rem } from "@/utils/rem";
import { Flex } from "@chakra-ui/react";
import { HeaderLeft } from "./HeaderLeft";
import { HeaderRight } from "./HeaderRight";

interface Props {
  status: string;
  search: string;
  sort: string;
  setStatus: (v: string) => void;
  setSearch: (v: string) => void;
  setSort: (v: string) => void;
  setPage: (v: number) => void;
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
    <Flex justify="space-between" align="center" mb={rem(32)} gap={rem(4)}>
      <HeaderLeft status={status} setStatus={setStatus} setPage={setPage} />
      <HeaderRight
        search={search}
        sort={sort}
        setSearch={setSearch}
        setSort={setSort}
        setPage={setPage}
      />
    </Flex>
  );
};
