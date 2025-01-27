import { css, DefaultTheme } from 'styled-components';

export const dialogBaseStyle = (theme: DefaultTheme) => css`
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translate(-50%, -20%);
  padding: ${theme.spacing(24)};
  border-radius: ${theme.spacing(16)};
  background-color: ${theme.palette.common.white};
  max-width: 90vw;
  max-height: 400px;
`;

const dialogSmallSizeStyle = () => css`
  width: 560px;

  @media (max-width: 500px) {
    width: 100vw;
    max-width: 100vw;
    top: initial;
    bottom: 0;
    left: 0;
    transform: none;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

export const dialogSizeStyle = {
  sm: dialogSmallSizeStyle,
};
