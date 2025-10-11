import { Customer } from "@/data/mockCustomers";
import { rem } from "./rem";

export const getStatusProps = (status: Customer["status"]) => {
  if (status === "active") {
    return {
      bg: "#16C09861",
      color: "#008767",
      border: `${rem(1)} solid #00B087`,
      label: "Active",
    };
  }
  return {
    bg: "#FFC5C5",
    color: "#DF0404",
    border: `${rem(1)} solid #DF0404`,
    label: "Inactive",
  };
};
