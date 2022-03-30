import {
  Button as Button_,
  ButtonProps as ButtonProps_,
} from "@sumup/circuit-ui";

type Variant = "primary" | "secondary";
interface ButtonProps extends Omit<ButtonProps_, "variant"> {
  variant?: Variant;
}

const getVariant = (variant: Variant): ButtonProps_["variant"] => {
  if (variant === "primary") {
    return "secondary";
  } else if (variant === "secondary") {
    return "tertiary";
  }
};

const Button = ({ variant = "primary", ...props }: ButtonProps) => {
  return <Button_ {...props} variant={getVariant(variant)} />;
};

export type { ButtonProps };
export { Button };
