import { Box, Skeleton, Table, TableBody } from "@chakra-ui/react";
import { rem } from "@/utils/rem";
import { Header } from "./Header";
import { useCustomersList } from "@/hooks/useCustomersList";
import { LoadingState } from "./LoadingState";
import { EmptyState } from "./EmptyState";
import { Footer } from "./Footer";
import { CustomerRow } from "./CustomerRow";
import { ErrorState } from "./ErrorState";

export const CustomersList = () => {
  const {
    loading,
    error,
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
    <Box bg="white" p={{ base: rem(20), md: rem(32) }} borderRadius={rem(30)}>
      <Header
        status={status}
        search={search}
        sort={sort}
        setStatus={setStatus}
        setSearch={setSearch}
        setSort={setSort}
        setPage={setPage}
      />
      <Box bg="white" borderRadius={rem(12)} boxShadow="md" overflowX="auto">
        <Table.Root variant="line" border="none" boxShadow="none">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader color="#B5B7C0">
                {loading ? (
                  <Skeleton h={rem(20)} w={rem(120)} />
                ) : (
                  "Customer Name"
                )}
              </Table.ColumnHeader>
              <Table.ColumnHeader
                color="#B5B7C0"
                display={{ base: "none", lg: "table-cell" }}
              >
                {loading ? <Skeleton h={rem(20)} w={rem(100)} /> : "Company"}
              </Table.ColumnHeader>
              <Table.ColumnHeader
                color="#B5B7C0"
                display={{ base: "none", md: "table-cell" }}
              >
                {loading ? (
                  <Skeleton h={rem(20)} w={rem(110)} />
                ) : (
                  "Phone Number"
                )}
              </Table.ColumnHeader>
              <Table.ColumnHeader
                color="#B5B7C0"
                display={{ base: "none", xl: "table-cell" }}
              >
                {loading ? <Skeleton h={rem(20)} w={rem(120)} /> : "Email"}
              </Table.ColumnHeader>
              <Table.ColumnHeader
                color="#B5B7C0"
                display={{ base: "none", xl: "table-cell" }}
              >
                {loading ? <Skeleton h={rem(20)} w={rem(90)} /> : "Country"}
              </Table.ColumnHeader>
              <Table.ColumnHeader color="#B5B7C0">
                {loading ? <Skeleton h={rem(20)} w={rem(70)} /> : "Status"}
              </Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <TableBody h={rem(440)}>
            {error ? (
              <ErrorState error={error} />
            ) : loading ? (
              <LoadingState />
            ) : customers.length === 0 ? (
              <EmptyState />
            ) : (
              customers.map((c) => <CustomerRow key={c.id} c={c} />)
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
