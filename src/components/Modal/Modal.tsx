import React, { useEffect, FC } from 'react';
import { Backdrop } from 'src/components/Backdrop/Backdrop';
import { ModalProps } from 'src/components/Modal/Modal.types';
import styled, { css } from 'styled-components';

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
    <Container isOpen={isOpen}>
      <Backdrop
        isOpen={isOpen}
        onClick={(event) => onClose(event, 'backdropClick')}
      />

      {children}
    </Container>
  );
};

const Container = styled.div<{ isOpen: boolean }>`
  ${({ isOpen }) => css`
    position: fixed;
    top: 0;
    left: 0;
    visibility: ${isOpen ? 'visible' : 'hidden'};
    opacity: ${isOpen ? 1 : 0};
    transition:
      opacity 0.3s ease-in-out,
      visibility 0.3s ease-in-out;
    width: 100vw;
    height: 100vh;
  `}
`;
