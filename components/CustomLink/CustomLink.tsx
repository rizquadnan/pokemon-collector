import Link from "next/link";
import { ReactNode } from "react";

type CustomLinkProps = {
  href: string;
  children: ReactNode;
};

const CustomLink = (props: CustomLinkProps) => {
  return (
    <Link href={props.href} passHref>
      <a css={{ textDecoration: "none" }}>{props.children}</a>
    </Link>
  );
};

export type { CustomLinkProps };
export { CustomLink };
