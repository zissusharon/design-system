import { DrawerAnchor, DrawerSize } from './Drawer';
import { css, DefaultTheme } from 'styled-components';

const drawerSizeValue = {
  sm: '300px',
  md: '500px',
};

export const drawerBaseStyles = (theme: DefaultTheme) => css`
  position: absolute;
  transition:
    right 0.3s,
    left 0.3s,
    top 0.3s,
    bottom 0.3s;
  background-color: ${theme.palette.common.white};
  height: 100vh;
`;

export const drawerSizeStyles = (
  isOpen: boolean,
  size: DrawerSize,
  anchor: DrawerAnchor,
) => {
  const sizeValue = drawerSizeValue[size];

  if (anchor === DrawerAnchor.Right) {
    return css`
      height: 100vh;
      max-width: 100vw;
      width: ${sizeValue};
      right: ${isOpen ? 0 : `-${sizeValue}`};
      top: 0;
    `;
  }

  if (anchor === DrawerAnchor.Left) {
    return css`
      height: 100vh;
      max-width: 100vw;
      width: ${sizeValue};
      left: ${isOpen ? 0 : `-${sizeValue}`};
      top: 0;
    `;
  }

  if (anchor === DrawerAnchor.Bottom) {
    return css`
      width: 100vw;
      height: ${sizeValue};
      bottom: ${isOpen ? 0 : `-${sizeValue}`};
      left: 0;
    `;
  }

  if (anchor === DrawerAnchor.Top) {
    return css`
      width: 100vw;
      height: ${sizeValue};
      top: ${isOpen ? 0 : `-${sizeValue}`};
      left: 0;
    `;
  }
};
