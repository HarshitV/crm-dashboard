import { Badge } from "@/components/ui/Badge";
import { Customer } from "@/utils/types";
import { TableRow, Table } from "@chakra-ui/react";
import React from "react";

export const CustomerRow = React.memo(({ c }: { c: Customer }) => (
  <TableRow _hover={{ bg: "gray.50" }} transition="background 0.2s">
    <Table.Cell fontWeight={500}>{c.name}</Table.Cell>
    <Table.Cell display={{ base: "none", lg: "table-cell" }}>
      {c.company}
    </Table.Cell>
    <Table.Cell display={{ base: "none", md: "table-cell" }}>
      {c.phone}
    </Table.Cell>
    <Table.Cell display={{ base: "none", xl: "table-cell" }}>
      {c.email}
    </Table.Cell>
    <Table.Cell display={{ base: "none", xl: "table-cell" }}>
      {c.country}
    </Table.Cell>
    <Table.Cell>
      <Badge
        status={c.status}
        label={c.status === "active" ? "Active" : "Inactive"}
      />
    </Table.Cell>
  </TableRow>
));

CustomerRow.displayName = "CustomerRow";
