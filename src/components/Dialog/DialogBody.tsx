import React, { FC } from 'react';
import { DialogBodyProps } from 'src/components/Dialog/Dialog.types';
import styled, { css } from 'styled-components';

export const DialogBody: FC<DialogBodyProps> = ({ children }) => (
  <Container>{children}</Container>
);

const Container = styled.div`
  ${({ theme }) => css`
    ${css(theme.typography.body3)}
    padding: ${theme.spacing(8)};
    max-height: 200px;
    overflow: auto;
  `}
`;
