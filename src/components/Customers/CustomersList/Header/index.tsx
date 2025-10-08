import { rem } from "@/utils/rem";
import { Flex } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { HeaderLeft } from "./HeaderLeft";
import { HeaderRight } from "./HeaderRight";

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
