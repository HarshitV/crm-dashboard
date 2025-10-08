import { Customer, mockCustomers } from "@/data/mockCustomers";
import { useCallback, useEffect, useState } from "react";
import { useFilteredCustomers } from "./useFilteredCustomers";
import { useSortedCustomers } from "./useSortedCustomers";
import { PAGE_SIZE } from "@/utils/constants";

export const useCustomersList = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [sort, setSort] = useState("newest");
  const [page, setPage] = useState(1);

  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);

  // Filter and sort all customers first (simulate server-side)
  const filtered = useFilteredCustomers(mockCustomers, search, status);
  const sorted = useSortedCustomers(filtered, sort);
  const totalPages = Math.ceil(sorted.length / PAGE_SIZE);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      const start = (page - 1) * PAGE_SIZE;
      const end = start + PAGE_SIZE;
      setCustomers(sorted.slice(start, end));
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [page, sorted]);

  const memoSetSearch = useCallback((v: string) => setSearch(v), []);
  const memoSetStatus = useCallback((v: string) => setStatus(v), []);
  const memoSetSort = useCallback((v: string) => setSort(v), []);
  const memoSetPage = useCallback((v: number) => setPage(v), []);

  return {
    customers,
    loading,
    search,
    setSearch: memoSetSearch,
    status,
    setStatus: memoSetStatus,
    sort,
    setSort: memoSetSort,
    page,
    setPage: memoSetPage,
    totalPages,
    sorted,
  };
};
