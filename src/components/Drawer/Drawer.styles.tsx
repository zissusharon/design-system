import { DrawerPlacement, DrawerSize } from './Drawer';
import { css } from 'styled-components';

const drawerSizeValue = {
  sm: '300px',
  md: '500px',
};

export const drawerPositionStyles = (
  placement: DrawerPlacement,
  size: DrawerSize,
  isOpen: boolean,
) => {
  const sizeValue = drawerSizeValue[size];
  const sharedStyles = css`
    position: absolute;
    ${placement}: ${isOpen ? 0 : `-${sizeValue}`};
  `;

  if (placement === 'right' || placement === 'left') {
    return css`
      ${sharedStyles};
      top: 0;
    `;
  }

  return css`
    ${sharedStyles};
    left: 0;
  `;
};

export const drawerSizeStyles = (
  size: DrawerSize,
  placement: DrawerPlacement,
) => {
  const sizeValue = drawerSizeValue[size];

  if (placement === 'right' || placement === 'left') {
    return css`
      height: 100vh;
      max-width: 100vw;
      width: ${sizeValue};
    `;
  }

  return css`
    width: 100vw;
    height: ${sizeValue};
    max-height: 100vh;
  `;
};
