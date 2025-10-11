import { Pagination } from "@/components/ui/Pagination";
import { PAGE_SIZE } from "@/utils/constants";
import { Customer } from "@/utils/types";
import { Flex, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  sorted: Customer[];
  page: number;
  totalPages: number;
  setPage: (v: number) => void;
}

export const Footer = React.memo(
  ({ sorted, page, totalPages, setPage }: Props) => (
    <Flex justify="space-between" align="center" mt={6} gap={2} flexWrap="wrap">
      <Text fontSize="sm" color="text-table-header">
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
  )
);

Footer.displayName = "Footer";
