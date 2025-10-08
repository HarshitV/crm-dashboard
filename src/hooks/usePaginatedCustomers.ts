import { Customer } from "@/data/mockCustomers";
import { useMemo } from "react";

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
