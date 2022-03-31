import { Tag as Tag_ } from "@sumup/circuit-ui";

type TagProps = {
  children: string;
};
const Tag = (props: TagProps) => {
  return <Tag_ {...props} />;
};

export type { TagProps };
export { Tag };
