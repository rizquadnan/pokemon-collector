import { Headline, HeadlineProps } from "@sumup/circuit-ui";

interface HeadingProps extends Omit<HeadlineProps, "children"> {
  children: string;
}

const Heading = (props: HeadingProps) => {
  return <Headline {...props} />;
};

export type { HeadingProps };
export { Heading };
