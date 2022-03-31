import styled from "@emotion/styled";
import { ReactNode } from "react";
import { APPLICATION_MAX_WIDTH } from "../../shared";

type LayoutProps = {
  children: ReactNode;
};

const Container = styled.main({
  maxWidth: APPLICATION_MAX_WIDTH,
  margin: "0 auto",
  padding: "0 20px 40px 20px",
});
const Layout = (props: LayoutProps) => {
  return <Container>{props.children}</Container>;
};

export { Layout };
