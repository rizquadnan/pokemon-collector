import {
  Button as Button_,
  ButtonProps as ButtonProps_,
} from "@sumup/circuit-ui";

interface ButtonProps extends ButtonProps_ {}
const Button = (props: ButtonProps_) => {
  return (
    <div>
      <Button_ {...props} />
      <span>Test chromatic ui change</span>
    </div>
  );
};

export type { ButtonProps };
export { Button };
