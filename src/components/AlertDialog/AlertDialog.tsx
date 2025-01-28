import React, { FC } from 'react';
import { PiWarningCircleFill } from 'react-icons/pi';
import { Button } from 'src/components/Button/Button';
import { ButtonProps } from 'src/components/Button/Button.types';
import { Dialog } from 'src/components';
import { DialogProps } from 'src/components/Dialog/Dialog.types';
import styled, { css } from 'styled-components';

interface AlertModalButton
  extends Omit<ButtonProps, 'variant' | 'color' | 'size' | 'children'> {
  text?: string;
}

interface Props extends DialogProps {
  title: string;
  submitButtonProps: AlertModalButton;
  closeButtonProps: AlertModalButton;
}

export const AlertDialog: FC<Props> = ({
  isOpen,
  onClose,
  title,
  submitButtonProps,
  closeButtonProps,
  children,
  ...rest
}) => {
  return (
    <Dialog isOpen={isOpen} onClose={onClose} {...rest}>
      <Dialog.Header onClose={onClose}>
        <HeaderContainer>
          <WarningIconContainer>
            <PiWarningCircleFill size={36} color="red" />
          </WarningIconContainer>

          <Dialog.Title>{title}</Dialog.Title>
        </HeaderContainer>
      </Dialog.Header>

      <Dialog.Body>{children}</Dialog.Body>

      <Dialog.Footer>
        <ButtonsContainer>
          <Button variant="outlined" color="inherit" {...closeButtonProps}>
            {closeButtonProps.text || 'Cancel'}
          </Button>

          <Button variant="contained" color="error" {...submitButtonProps}>
            {submitButtonProps.text || 'Delete'}
          </Button>
        </ButtonsContainer>
      </Dialog.Footer>
    </Dialog>
  );
};

const HeaderContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacing(16)};
  `}
`;

const WarningIconContainer = styled.div`
  flex-shrink: 0;
`;

const ButtonsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;

    @media (max-width: 500px) {
      gap: ${theme.spacing(16)};
      justify-content: initial;

      button {
        flex: 1;
      }
    }
  `}
`;
