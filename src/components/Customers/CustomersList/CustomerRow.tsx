import { Customer } from "@/data/mockCustomers";
import { getStatusProps } from "@/utils/helpers";
import { rem } from "@/utils/rem";
import { TableRow, Table, Flex } from "@chakra-ui/react";
import React from "react";

export const CustomerRow = React.memo(({ c }: { c: Customer }) => {
  const { bg, color, border, label } = getStatusProps(c.status);

  return (
    <TableRow
      key={c.id}
      _hover={{ bg: "gray.50" }}
      transition="background 0.2s"
    >
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
        <Flex
          justify="center"
          align="center"
          borderRadius={rem(4)}
          w={rem(80)}
          h={rem(30)}
          fontWeight={500}
          fontSize={rem(14)}
          bg={bg}
          color={color}
          border={border}
        >
          {label}
        </Flex>
      </Table.Cell>
    </TableRow>
  );
});

CustomerRow.displayName = "CustomerRow";
