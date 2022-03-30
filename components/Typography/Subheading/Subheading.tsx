import { SubHeadline, SubHeadlineProps } from "@sumup/circuit-ui";

interface SubheadingProps extends Omit<SubHeadlineProps, "children"> {
  children: string;
}

const Subheading = (props: SubheadingProps) => {
  return <SubHeadline {...props} />;
};

export type { SubheadingProps };
export { Subheading };
