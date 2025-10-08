import { useMemo } from "react";
import type { Customer } from "../data/mockCustomers";

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
