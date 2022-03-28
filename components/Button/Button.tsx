import {
  Button as Button_,
  ButtonProps as ButtonProps_,
} from "@sumup/circuit-ui";

interface ButtonProps extends ButtonProps_ {}
const Button = (props: ButtonProps_) => {
  return <Button_ {...props} />;
};

export type { ButtonProps };
export { Button };
