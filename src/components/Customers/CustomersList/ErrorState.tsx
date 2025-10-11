import { Table } from "@chakra-ui/react";

export const ErrorState = ({ error }: { error: string }) => (
  <Table.Row>
    <Table.Cell colSpan={6} textAlign="center" color="error-main">
      {error}
    </Table.Cell>
  </Table.Row>
);
