import React, { ReactNode } from 'react';
import { ModalProps } from 'src/components/Modal/Modal.types';

export interface DialogProps extends ModalProps {
  size?: 'sm';
}

export interface DialogHeaderProps {
  children: ReactNode;
  onClose?: (
    event: React.MouseEvent<HTMLButtonElement>,
    reason: 'closeButtonClick',
  ) => void;
}

export interface DialogTitleProps {
  children: ReactNode;
}

export interface DialogBodyProps {
  children: ReactNode;
}

export interface DialogFooterProps {
  children: ReactNode;
}
