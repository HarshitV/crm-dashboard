import { Customer } from "@/data/mockCustomers";
import { useMemo } from "react";
import { useDebounce } from "./useDebounce";

export function useFilteredCustomers(
  customers: Customer[],
  search: string,
  status: string
): Customer[] {
  const debouncedSearch = useDebounce(search, 300);

  return useMemo(() => {
    let data = customers;
    if (debouncedSearch) {
      data = data.filter((c: Customer) =>
        [c.name, c.company, c.email, c.phone, c.country]
          .join(" ")
          .toLowerCase()
          .includes(debouncedSearch.toLowerCase())
      );
    }
    if (status) {
      data = data.filter((c: Customer) => c.status === status);
    }
    return data;
  }, [customers, debouncedSearch, status]);
}
