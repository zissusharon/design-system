import React, { ReactNode, FC } from 'react';
import styled, { css } from 'styled-components';

interface Props {
  children: ReactNode;
}

export const DialogFooter: FC<Props> = ({ children }) => (
  <Container>{children}</Container>
);

const Container = styled.div`
  ${({ theme }) => css`
    padding-top: ${theme.spacing(24)};
  `}
`;
