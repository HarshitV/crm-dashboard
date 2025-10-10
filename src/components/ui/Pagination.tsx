import { rem } from "@/utils/rem";
import { Flex } from "@chakra-ui/react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { usePagination } from "@/hooks/usePagination";

import { PaginationButton } from "./PaginationButton";

type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: Props) => {
  const pages = usePagination(currentPage, totalPages);

  return (
    <Flex align="center" gap={2} h={rem(24)}>
      <PaginationButton
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        aria-label="Previous page"
      >
        <BiChevronLeft />
      </PaginationButton>
      {pages.map((page, idx) =>
        typeof page === "number" ? (
          <PaginationButton
            key={`page-${page}`}
            active={currentPage === page}
            onClick={() => onPageChange(page)}
            aria-label={`Page ${page}`}
          >
            {page}
          </PaginationButton>
        ) : (
          <Flex
            key={`ellipsis-${idx}`}
            align="center"
            justify="center"
            fontSize={rem(12)}
          >
            ...
          </Flex>
        )
      )}
      <PaginationButton
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        aria-label="Next page"
      >
        <BiChevronRight />
      </PaginationButton>
    </Flex>
  );
};
