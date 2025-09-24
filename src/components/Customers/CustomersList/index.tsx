import { useState } from "react";

import {
  useFilteredCustomers,
  useSortedCustomers,
  usePaginatedCustomers,
} from "../useCustomerTableHooks";
import { Box, Flex, Text, Table, TableBody, TableRow } from "@chakra-ui/react";
import { Customer, mockCustomers } from "../../../data/mockCustomers";
import { rem } from "@/utils/rem";
import { Header } from "./Header";
import { Pagination } from "@/components/ui/Pagination";

const PAGE_SIZE = 8;

export const CustomersList = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [sort, setSort] = useState("newest");
  const [page, setPage] = useState(1);

  const filtered = useFilteredCustomers(mockCustomers, search, status);
  const sorted = useSortedCustomers(filtered, sort);
  const totalPages = Math.ceil(sorted.length / PAGE_SIZE);
  const paginated = usePaginatedCustomers(sorted, page, PAGE_SIZE);

  return (
    <Box
      h="100%"
      bg="white"
      p={{ base: rem(20), md: rem(40) }}
      borderRadius={rem(30)}
    >
      <Header
        status={status}
        search={search}
        sort={sort}
        setStatus={setStatus}
        setSearch={setSearch}
        setSort={setSort}
        setPage={setPage}
      />
      <Box bg="white" borderRadius="12px" boxShadow="md" overflowX="auto">
        <Table.Root variant="line" border="none" boxShadow="none">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader color="#B5B7C0">
                Customer Name
              </Table.ColumnHeader>
              <Table.ColumnHeader
                color="#B5B7C0"
                display={{ base: "none", lg: "table-cell" }}
              >
                Company
              </Table.ColumnHeader>
              <Table.ColumnHeader
                color="#B5B7C0"
                display={{ base: "none", md: "table-cell" }}
              >
                Phone Number
              </Table.ColumnHeader>
              <Table.ColumnHeader
                color="#B5B7C0"
                display={{ base: "none", xl: "table-cell" }}
              >
                Email
              </Table.ColumnHeader>
              <Table.ColumnHeader
                color="#B5B7C0"
                display={{ base: "none", xl: "table-cell" }}
              >
                Country
              </Table.ColumnHeader>
              <Table.ColumnHeader color="#B5B7C0">Status</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <TableBody>
            {paginated.length === 0 ? (
              <Table.Row>
                <Table.Cell
                  colSpan={6}
                  textAlign="center"
                  py={8}
                  color="#9197B3"
                >
                  No customers found.
                </Table.Cell>
              </Table.Row>
            ) : (
              paginated.map((c: Customer) => (
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
                      bg={c.status === "active" ? "#16C09861" : "#FFC5C5"}
                      color={c.status === "active" ? "#008767" : "#DF0404"}
                    >
                      {c.status.charAt(0).toUpperCase() + c.status.slice(1)}
                    </Flex>
                  </Table.Cell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table.Root>
      </Box>

      {/* Table Footer */}
      <Flex
        justify="space-between"
        align="center"
        mt={6}
        gap={2}
        flexWrap="wrap"
      >
        <Text fontSize="sm" color="#B5B7C0">
          {(() => {
            const total = sorted.length;
            const start = total === 0 ? 0 : (page - 1) * PAGE_SIZE + 1;
            const end = Math.min(page * PAGE_SIZE, total);
            return `Showing data ${start} to ${end} of ${total} entries`;
          })()}
        </Text>
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </Flex>
    </Box>
  );
};
