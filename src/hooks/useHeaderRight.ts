import { useCallback } from "react";

interface Props {
  setSearch: (v: string) => void;
  setSort: (v: string) => void;
  setPage: (v: number) => void;
}

export const useHeaderRight = ({ setSearch, setSort, setPage }: Props) => {
  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
      setPage(1);
    },
    [setPage, setSearch]
  );

  const handleSortChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSort(e.target.value);
      setPage(1);
    },
    [setPage, setSort]
  );

  return { handleSearchChange, handleSortChange };
};
