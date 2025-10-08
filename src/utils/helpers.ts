import { Customer } from "@/data/mockCustomers";

export const getStatusProps = (status: Customer["status"]) => {
  if (status === "active") {
    return {
      bg: "#16C09861",
      color: "#008767",
      border: "1px solid #00B087",
      label: "Active",
    };
  }
  return {
    bg: "#FFC5C5",
    color: "#DF0404",
    border: "1px solid #DF0404",
    label: "Inactive",
  };
};
