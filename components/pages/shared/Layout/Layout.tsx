import styled from "@emotion/styled";
import { ReactNode } from "react";
import { APPLICATION_MAX_WIDTH, NAVBAR_HEIGHT } from "../../../../shared";
import { NavbarContainer } from "../NavbarContainer";

type LayoutProps = {
  children: ReactNode;
};

const Container = styled.main({
  maxWidth: APPLICATION_MAX_WIDTH,
  margin: "0 auto",
  padding: `${NAVBAR_HEIGHT} 20px 40px 20px`,
});

const Layout = (props: LayoutProps) => {
  return (
    <Container>
      <NavbarContainer />
      {props.children}
    </Container>
  );
};

export type { LayoutProps };
export { Layout };
