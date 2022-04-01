import { PaginationProps } from "./Pagination";

export const requiredProps: PaginationProps = {
  totalPages: 5,
  onChange: (pageNum) => console.log(pageNum),
};
