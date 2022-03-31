import { IconButton, IconButtonProps } from "@sumup/circuit-ui";

interface ButtonIconProps extends IconButtonProps {}

const ButtonIcon = (props: ButtonIconProps) => {
  return <IconButton {...props} />;
};

export type { ButtonIconProps };
export { ButtonIcon };
