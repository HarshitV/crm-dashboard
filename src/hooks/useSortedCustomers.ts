import { Customer } from "@/utils/types";
import { useMemo } from "react";

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
