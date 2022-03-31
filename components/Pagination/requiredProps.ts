import { PaginationProps } from "./Pagination";

export const requiredProps: PaginationProps = {
  label: "Pagination",
  totalPages: 5,
  previousLabel: "Previous page",
  nextLabel: "Next page",
  onChange: (pageNum) => console.log(pageNum),
  pageLabel: (page) => `Go to page ${page}`,
};
