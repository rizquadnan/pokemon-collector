import { Body as Body_, BodyProps as BodyProps_ } from "@sumup/circuit-ui";

interface BodyProps extends Omit<BodyProps_, "children"> {
  children: string;
}

const Body = (props: BodyProps) => {
  return <Body_ {...props} />;
};

export type { BodyProps };
export { Body };
