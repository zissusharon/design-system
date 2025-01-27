import React, { ReactNode, FC } from 'react';
import styled, { css } from 'styled-components';

interface Props {
  children: ReactNode;
}

export const DialogBody: FC<Props> = ({ children }) => (
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
