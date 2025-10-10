import { useEffect, useState } from "react";
import { Pagination } from "./Pagination";

export default {
  title: "UI/Pagination",
  component: Pagination,
  argTypes: {
    currentPage: { control: { type: "number", min: 1 } },
    totalPages: { control: { type: "number", min: 1 } },
  },
};

type PaginationStoryArgs = {
  currentPage: number;
  totalPages: number;
};

export const Default = (args: PaginationStoryArgs) => {
  const [currentPage, setCurrentPage] = useState(args.currentPage || 1);

  useEffect(() => {
    setCurrentPage(args.currentPage);
  }, [args.currentPage]);

  return (
    <Pagination
      {...args}
      currentPage={currentPage}
      onPageChange={setCurrentPage}
    />
  );
};
Default.args = {
  currentPage: 1,
  totalPages: 5,
};
