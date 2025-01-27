import React, { FC } from 'react';
import { RiCloseLargeFill } from 'react-icons/ri';
import { IconButton } from 'src/components/Button/IconButton/IconButton';
import { Modal, ModalProps } from 'src/components/Modal/Modal';

import { drawerBaseStyles, drawerSizeStyles } from './Drawer.styles';
import styled, { css } from 'styled-components';

export type DrawerSize = 'sm' | 'md';
export enum DrawerAnchor {
  Left = 'left',
  Right = 'right',
  Top = 'top',
  Bottom = 'bottom',
}

interface Props extends ModalProps {
  anchor?: DrawerAnchor;
  size?: DrawerSize;
  title: string;
}

export const Drawer: FC<Props> = ({
  isOpen,
  anchor = DrawerAnchor.Right,
  size = 'md',
  title,
  children,
  onClose,
  ...rest
}) => (
  <Modal isOpen={isOpen} onClose={onClose} {...rest}>
    <DrawerContainer isOpen={isOpen} anchor={anchor} size={size}>
      <Header>
        <Title>{title}</Title>

        {onClose && (
          <CloseIconButtonContainer>
            <IconButton
              onClick={(event) => onClose(event, 'closeButtonClick')}
              variant="outlined"
              color="inherit"
              icon={RiCloseLargeFill}
            />
          </CloseIconButtonContainer>
        )}
      </Header>
      {children}
    </DrawerContainer>
  </Modal>
);

const DrawerContainer = styled.div<{
  isOpen: boolean;
  anchor: DrawerAnchor;
  size: DrawerSize;
}>`
  ${({ theme, isOpen, anchor, size }) => css`
    ${drawerBaseStyles(theme)}
    ${drawerSizeStyles(isOpen, size, anchor)}
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
    border-bottom: 1px solid ${theme.palette.grey[200]};
    padding: ${theme.spacing(24)};

    @media (max-width: 500px) {
      padding: ${theme.spacing(16)};
    }
  `}
`;

const CloseIconButtonContainer = styled.div`
  align-self: flex-start;
`;

const Title = styled.h2`
  ${({ theme }) => css`
    ${css(theme.typography.heading)}
  `}
`;
