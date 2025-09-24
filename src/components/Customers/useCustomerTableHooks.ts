import { useMemo } from "react";
import type { Customer } from "../../data/mockCustomers";

export function useFilteredCustomers(
  customers: Customer[],
  search: string,
  status: string
): Customer[] {
  return useMemo(() => {
    let data = customers;
    if (search) {
      data = data.filter((c: Customer) =>
        [c.name, c.company, c.email, c.phone, c.country]
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    }
    if (status) {
      data = data.filter((c: Customer) => c.status === status);
    }
    return data;
  }, [customers, search, status]);
}

export function useSortedCustomers(
  filtered: Customer[],
  sort: string
): Customer[] {
  return useMemo(() => {
    let data = [...filtered];
    if (sort === "newest") {
      data.sort((a, b) => b.id - a.id);
    } else if (sort === "name") {
      data.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === "status") {
      data.sort((a, b) => a.status.localeCompare(b.status));
    }
    return data;
  }, [filtered, sort]);
}

export function usePaginatedCustomers(
  sorted: Customer[],
  page: number,
  pageSize: number
): Customer[] {
  return useMemo(
    () => sorted.slice((page - 1) * pageSize, page * pageSize),
    [sorted, page, pageSize]
  );
}
