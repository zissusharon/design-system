import React, { FC, ReactNode } from 'react';
import {
  DialogBodyProps,
  DialogFooterProps,
  DialogHeaderProps,
  DialogProps,
  DialogTitleProps,
} from 'src/components/Dialog/Dialog.types';
import { DialogBody } from 'src/components/Dialog/DialogBody';
import { DialogFooter } from 'src/components/Dialog/DialogFooter';
import { DialogHeader } from 'src/components/Dialog/DialogHeader';
import { DialogTitle } from 'src/components/Dialog/DialogTitle';
import { Modal } from 'src/components/Modal/Modal';
import { ModalSize } from 'src/components/Modal/Modal.types';
import {
  dialogBaseStyles,
  dialogSizeStyle,
} from 'src/components/Dialog/Dialog.styles';
import styled, { css } from 'styled-components';

interface DialogComponent extends FC<DialogProps> {
  Header: FC<DialogHeaderProps>;
  Title: FC<DialogTitleProps>;
  Body: FC<DialogBodyProps>;
  Footer: FC<DialogFooterProps>;
}

export const Dialog: DialogComponent = ({
  size = 'sm',
  children,
  ...rest
}: DialogProps): ReactNode => (
  <Modal {...rest}>
    <Container size={size}>{children}</Container>
  </Modal>
);

const Container = styled.div<{ size: ModalSize }>`
  ${({ theme, size }) => css`
    ${dialogBaseStyles(theme)};
    ${dialogSizeStyle[size]};
  `}
`;

Dialog.Header = DialogHeader;
Dialog.Title = DialogTitle;
Dialog.Body = DialogBody;
Dialog.Footer = DialogFooter;
