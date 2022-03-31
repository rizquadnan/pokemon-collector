import { Input as Input_, InputProps as InputProps_ } from "@sumup/circuit-ui";

interface InputProps extends InputProps_ {}

const Input = ({ hideLabel = true, ...props }: InputProps) => {
  return <Input_ {...props} hideLabel={hideLabel} />;
};

export type { InputProps };
export { Input };
