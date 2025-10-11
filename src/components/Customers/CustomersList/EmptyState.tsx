import { Table } from "@chakra-ui/react";

export const EmptyState = () => (
  <Table.Row>
    <Table.Cell
      colSpan={6}
      textAlign="center"
      py={8}
      color="text-secondary"
      tabIndex={0}
      aria-live="polite"
    >
      No customers found.
    </Table.Cell>
  </Table.Row>
);
