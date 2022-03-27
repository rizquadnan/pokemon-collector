import { Keyframes, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { basicStyles } from "./Basic";
import { hoverStyles } from "./Combined";

export const bounce = keyframes`
  from {
    transform: scale(1.01);
  }
  to {
    transform: scale(0.99);
  }
`;

type AnimatedProps = {
  animation: Keyframes;
};

export const Animated = styled.div<AnimatedProps>`
  ${basicStyles};
  ${hoverStyles};
  & code {
    background-color: linen;
  }
  animation: ${({ animation }) => animation} 0.2s infinite ease-in-out alternate;
`;
