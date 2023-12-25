import styled, { keyframes } from "styled-components";

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const FullscreenLoaderBox = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`

export const FullscreenLoaderSpiner = styled.span`
  width: 78px;
  height: 78px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  border: 10px solid;
  border-color: rgba(255, 255, 255, 0.15) rgba(255, 255, 255, 0.25)
    rgba(255, 255, 255, 0.35) rgba(255, 255, 255, 0.5);
  animation: ${rotation} 1s linear infinite;
`;
