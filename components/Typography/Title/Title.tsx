import { Title as Title_, TitleProps as TitleProps_ } from "@sumup/circuit-ui";
import { colors } from "../../../shared";

interface TitleProps extends Omit<TitleProps_, "children"> {
  children: string;
}

const Title = (props: TitleProps) => {
  return <Title_ {...props} />;
};

export type { TitleProps };
export { Title };
