import { css, DefaultTheme } from 'styled-components';

export const modalBaseStyles = (_theme: DefaultTheme, isOpen: boolean) => css`
  position: fixed;
  top: 0;
  left: 0;
  visibility: ${isOpen ? 'visible' : 'hidden'};
  opacity: ${isOpen ? 1 : 0};
  transition:
    opacity 0.3s ease-in-out,
    visibility 0.3s ease-in-out;
  width: 100vw;
  height: 100vh;
`;
