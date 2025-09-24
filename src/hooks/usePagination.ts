import { useMemo } from "react";

export function usePagination(currentPage: number, totalPages: number) {
  return useMemo(() => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    const pages: (number | string)[] = [];
    const showLeftEllipsis = currentPage > 4;
    const showRightEllipsis = currentPage < totalPages - 3;

    pages.push(1);

    if (showLeftEllipsis && !showRightEllipsis) {
      pages.push("...");
      for (let i = totalPages - 4; i < totalPages; i++) pages.push(i);
    } else if (!showLeftEllipsis && showRightEllipsis) {
      for (let i = 2; i <= 4; i++) pages.push(i);
      pages.push("...");
    } else if (showLeftEllipsis && showRightEllipsis) {
      pages.push("...");
      for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
      pages.push("...");
    }

    pages.push(totalPages);
    return pages;
  }, [currentPage, totalPages]);
}
