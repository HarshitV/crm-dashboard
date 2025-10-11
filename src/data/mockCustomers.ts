import { Customer } from "@/utils/types";

export const mockCustomers: Customer[] = Array.from(
  { length: 256 },
  (_, i) => ({
    id: i + 1,
    name: `Customer ${i + 1}`,
    company: `Company ${i + 1}`,
    phone: `+91-99999${i.toString().padStart(5, "0")}`,
    email: `customer${i + 1}@example.com`,
    country: i % 2 === 0 ? "India" : "USA",
    status: i % 3 === 0 ? "inactive" : "active",
  })
);
