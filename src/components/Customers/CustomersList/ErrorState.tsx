import { Table } from "@chakra-ui/react";

export const ErrorState = ({ error }: { error: string }) => (
  <Table.Row>
    <Table.Cell colSpan={6} textAlign="center" color="#D0004B">
      {error}
    </Table.Cell>
  </Table.Row>
);
