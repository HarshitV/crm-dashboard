import { Spinner, Table } from "@chakra-ui/react";

export const LoadingState = () => (
  <Table.Row>
    <Table.Cell colSpan={6} textAlign="center" role="status" aria-live="polite">
      <Spinner size="lg" color="gray.400" />
    </Table.Cell>
  </Table.Row>
);
