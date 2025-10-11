import { Customer, mockCustomers } from "@/data/mockCustomers";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useFilteredCustomers } from "./useFilteredCustomers";
import { useSortedCustomers } from "./useSortedCustomers";
import { MOCK_TIMEOUT_DELAY, PAGE_SIZE } from "@/utils/constants";

export const useCustomersList = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [sort, setSort] = useState("newest");
  const [page, setPage] = useState(1);

  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const filtered = useFilteredCustomers(mockCustomers, search, status);
  const sorted = useSortedCustomers(filtered, sort);
  const totalPages = Math.ceil(sorted.length / PAGE_SIZE);

  const paginatedCustomers = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    return sorted.slice(start, end);
  }, [sorted, page]);

  useEffect(() => {
    setLoading(true);
    setError(null);
    new Promise<Customer[]>((resolve) => {
      setTimeout(() => {
        resolve(paginatedCustomers);
      }, MOCK_TIMEOUT_DELAY);
    })
      .then((data) => {
        setCustomers(data);
      })
      .catch((err) => {
        setError("Failed to load customers.");
        console.error("Error in fetching customers:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [paginatedCustomers]);

  const memoSetSearch = useCallback((v: string) => setSearch(v), []);
  const memoSetStatus = useCallback((v: string) => setStatus(v), []);
  const memoSetSort = useCallback((v: string) => setSort(v), []);
  const memoSetPage = useCallback((v: number) => setPage(v), []);

  return {
    customers,
    loading,
    error,
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
