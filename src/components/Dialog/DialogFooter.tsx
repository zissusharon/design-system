import React, { FC } from 'react';
import { DialogFooterProps } from 'src/components/Dialog/Dialog.types';
import styled, { css } from 'styled-components';

export const DialogFooter: FC<DialogFooterProps> = ({ children }) => (
  <Container>{children}</Container>
);

const Container = styled.div`
  ${({ theme }) => css`
    padding-top: ${theme.spacing(24)};
  `}
`;
