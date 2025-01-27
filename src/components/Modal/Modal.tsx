import React, { useEffect, ReactNode, MouseEvent, FC } from 'react';
import { Backdrop } from 'src/components/Backdrop/Backdrop';
import { modalBaseStyles } from 'src/components/Modal/Modal.styles';
import { CloseModalReason } from 'src/components/Modal/Modal.types';
import styled, { css } from 'styled-components';

export interface ModalProps {
  isOpen: boolean;
  children?: ReactNode;
  onClose: (
    event: MouseEvent<HTMLDivElement | HTMLButtonElement> | KeyboardEvent,
    reason: CloseModalReason,
  ) => void;
  disableEscapeKeyDown?: boolean;
}

export const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  disableEscapeKeyDown = false,
  children,
}) => {
  useEffect(() => {
    if (isOpen && !disableEscapeKeyDown) {
      const handleEscapeKey = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          onClose(event, 'escapeKeyDown');
        }
      };

      document.addEventListener('keydown', handleEscapeKey);

      return () => {
        document.removeEventListener('keydown', handleEscapeKey);
      };
    }
  }, [isOpen, onClose]);

  return (
    <Wrapper isOpen={isOpen}>
      <Backdrop
        isOpen={isOpen}
        onClick={(event) => onClose(event, 'backdropClick')}
      />

      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ isOpen: boolean }>`
  ${({ theme, isOpen }) => css`
    ${modalBaseStyles(theme, isOpen)};
  `}
`;

// const ModalContainer = styled.div`
//   ${({ theme }) => css`
//     position: absolute;
//     width: fit-content;
//     left: 50%;
//     top: 50%;
//     transform: translate(-50%, -50%);
//     padding: ${theme.spacing(24)};
//     background-color: ${theme.palette.common.white};
//   `}
// `;
