import { Pagination } from "@/components/ui/Pagination";
import { Customer } from "@/data/mockCustomers";
import { PAGE_SIZE } from "@/utils/constants";
import { Flex, Text } from "@chakra-ui/react";

interface Props {
  sorted: Customer[];
  page: number;
  totalPages: number;
  setPage: (v: number) => void;
}

export const Footer = ({ sorted, page, totalPages, setPage }: Props) => (
  <Flex justify="space-between" align="center" mt={6} gap={2} flexWrap="wrap">
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
);
