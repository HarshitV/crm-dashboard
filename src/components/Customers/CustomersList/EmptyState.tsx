import { Table } from "@chakra-ui/react";

export const EmptyState = () => (
  <Table.Row>
    <Table.Cell colSpan={6} textAlign="center" py={8} color="#9197B3">
      No customers found.
    </Table.Cell>
  </Table.Row>
);
