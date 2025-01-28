import { MouseEvent, ReactNode } from 'react';

export interface ModalProps {
  isOpen: boolean;
  children?: ReactNode;
  onClose: (
    event: MouseEvent<HTMLDivElement | HTMLButtonElement> | KeyboardEvent,
    reason: CloseModalReason,
  ) => void;
  disableEscapeKeyDown?: boolean;
}

export type ModalSize = 'sm';

export type CloseModalReason =
  | 'backdropClick'
  | 'escapeKeyDown'
  | 'closeButtonClick';
