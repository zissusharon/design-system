import React, { FC } from 'react';
import { PiWarningCircleFill } from 'react-icons/pi';
import { Button } from 'src/components/Button/Button';
import { ButtonProps } from 'src/components/Button/Button.types';
import { ModalProps } from 'src/components/Modal/Modal';
import { DialogBody } from 'src/components/Dialog/DialogBody';
import { DialogFooter } from 'src/components/Dialog/DialogFooter';
import { DialogHeader } from 'src/components/Dialog/DialogHeader';
import { DialogTitle } from 'src/components/Dialog/DialogTitle';
import { Dialog } from 'src/components/Dialog/Dialog';
import styled, { css } from 'styled-components';

interface AlertModalButton
  extends Omit<ButtonProps, 'variant' | 'color' | 'size' | 'children'> {
  text?: string;
}

interface Props extends ModalProps {
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
      <DialogHeader onClose={onClose}>
        <HeaderContainer>
          <WarningIconContainer>
            <PiWarningCircleFill size={36} color="red" />
          </WarningIconContainer>

          <DialogTitle>{title}</DialogTitle>
        </HeaderContainer>
      </DialogHeader>

      <DialogBody>{children}</DialogBody>

      <DialogFooter>
        <ButtonsContainer>
          <Button variant="outlined" color="inherit" {...closeButtonProps}>
            {closeButtonProps.text || 'Cancel'}
          </Button>

          <Button variant="contained" color="error" {...submitButtonProps}>
            {submitButtonProps.text || 'Delete'}
          </Button>
        </ButtonsContainer>
      </DialogFooter>
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
