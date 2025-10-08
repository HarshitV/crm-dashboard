import { Box, Flex, Table, TableBody, TableRow } from "@chakra-ui/react";
import { rem } from "@/utils/rem";
import { Header } from "./Header";
import { useCustomersList } from "@/hooks/useCustomersList";
import { LoadingState } from "./LoadingState";
import { EmptyState } from "./EmptyState";
import { Footer } from "./Footer";

export const CustomersList = () => {
  const {
    loading,
    search,
    setSearch,
    status,
    setStatus,
    sort,
    setSort,
    page,
    setPage,
    totalPages,
    customers,
    sorted,
  } = useCustomersList();

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
          <TableBody h={rem(440)}>
            {loading ? (
              <LoadingState />
            ) : customers.length === 0 ? (
              <EmptyState />
            ) : (
              customers.map((c) => (
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
                      border={
                        c.status === "active"
                          ? "1px solid #00B087"
                          : "1px solid #DF0404"
                      }
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
      <Footer
        sorted={sorted}
        page={page}
        totalPages={totalPages}
        setPage={setPage}
      />
    </Box>
  );
};
