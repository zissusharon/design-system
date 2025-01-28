import React, { FC } from 'react';
import { CloseButton } from 'src/components/CloseButton/CloseButton';
import { DialogHeaderProps } from 'src/components/Dialog/Dialog.types';
import styled, { css } from 'styled-components';

export const DialogHeader: FC<DialogHeaderProps> = ({ children, onClose }) => (
  <Container>
    {children}

    {onClose && (
      <CloseButton onClick={(event) => onClose(event, 'closeButtonClick')} />
    )}
  </Container>
);

const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: ${theme.spacing(24)};
    flex-shrink: 0;
    gap: ${theme.spacing(8)};
  `}
`;
