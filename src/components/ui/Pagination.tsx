import { rem } from "@/utils/rem";
import { Button, Flex } from "@chakra-ui/react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { usePagination } from "@/hooks/usePagination";

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
    <Flex align="center" gap={2} mt={3} h={rem(24)}>
      <Button
        p={0}
        borderRadius={rem(4)}
        bg="#F5F5F5"
        color="#404B52"
        fontSize={rem(12)}
        fontWeight="500"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <BiChevronLeft />
      </Button>
      {pages.map((page, idx) =>
        typeof page === "number" ? (
          <Button
            key={`page-${page}`}
            borderRadius={rem(4)}
            bg={currentPage === page ? "#5A32EA" : "#F5F5F5"}
            color={currentPage === page ? "#fff" : "#404B52"}
            fontSize={rem(12)}
            fontWeight="500"
            onClick={() => onPageChange(page)}
          >
            {page}
          </Button>
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
      <Button
        p={0}
        borderRadius={rem(4)}
        bg="#F5F5F5"
        color="#404B52"
        fontSize={rem(12)}
        fontWeight="500"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <BiChevronRight />
      </Button>
    </Flex>
  );
};
