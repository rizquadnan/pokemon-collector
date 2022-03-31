import {
  Pagination as Pagination_,
  PaginationProps as PaginationProps_,
} from "@sumup/circuit-ui";

interface PaginationProps extends PaginationProps_ {}

const Pagination = (props: PaginationProps): JSX.Element => {
  return <>{Pagination_({ ...props })}</>;
};

export type { PaginationProps };
export { Pagination };
