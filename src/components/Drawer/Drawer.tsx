import React, { FC } from 'react';
import { CloseButton } from 'src/components/CloseButton/CloseButton';
import { Modal } from 'src/components/Modal/Modal';
import { ModalProps } from 'src/components/Modal/Modal.types';

import { drawerPositionStyles, drawerSizeStyles } from './Drawer.styles';
import styled, { css } from 'styled-components';

export type DrawerSize = 'sm' | 'md';
export type DrawerPlacement = 'left' | 'right' | 'top' | 'bottom';

interface Props extends ModalProps {
  placement?: DrawerPlacement;
  size?: DrawerSize;
  title?: string;
}

export const Drawer: FC<Props> = ({
  isOpen,
  placement = 'right',
  size = 'md',
  title,
  children,
  onClose,
  ...rest
}) => (
  <Modal isOpen={isOpen} onClose={onClose} {...rest}>
    <DrawerContainer isOpen={isOpen} placement={placement} size={size}>
      {title && (
        <Header>
          <Title>{title}</Title>

          {onClose && (
            <CloseButton
              onClick={(event) => onClose(event, 'closeButtonClick')}
            />
          )}
        </Header>
      )}
      {children}
    </DrawerContainer>
  </Modal>
);

const DrawerContainer = styled.div<{
  isOpen: boolean;
  placement: DrawerPlacement;
  size: DrawerSize;
}>`
  ${({ theme, isOpen, placement, size }) => css`
    transition:
      right 0.3s,
      left 0.3s,
      top 0.3s,
      bottom 0.3s;
    background-color: ${theme.palette.common.white};
    ${drawerSizeStyles(size, placement)}
    ${drawerPositionStyles(placement, size, isOpen)}
  `}
`;

const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: ${theme.spacing(4)};
    margin-bottom: ${theme.spacing(28)};
    gap: ${theme.spacing(16)};
    border-bottom: 1px solid ${theme.palette.gray[200]};
    padding: ${theme.spacing(24)};

    @media (max-width: 500px) {
      padding: ${theme.spacing(16)};
    }
  `}
`;

const Title = styled.h2`
  ${({ theme }) => css`
    ${css(theme.typography.heading)}
  `}
`;
