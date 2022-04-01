import {
  Pagination as Pagination_,
  PaginationProps as PaginationProps_,
} from "@sumup/circuit-ui";

interface PaginationProps
  extends Omit<
    PaginationProps_,
    "label" | "previousLabel" | "nextLabel" | "pageLabel"
  > {
  label?: string;
  previousLabel?: string;
  nextLabel?: string;
  pageLabel?: (page: number) => string;
}

const Pagination = ({
  label = "Pagination",
  previousLabel = "Previous page",
  nextLabel = "Next page",
  pageLabel = (page) => `Go to page ${page}`,
  ...props
}: PaginationProps): JSX.Element => {
  return (
    <>{Pagination_({ ...props, label, previousLabel, nextLabel, pageLabel })}</>
  );
};

export type { PaginationProps };
export { Pagination };
